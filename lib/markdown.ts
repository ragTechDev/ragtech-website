/**
 * Markdown post utilities (Server-side only)
 * For types, import from './markdown-types'
 */

import 'server-only';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import { visit } from 'unist-util-visit';
import {
  MarkdownPost,
  MarkdownPostFrontmatter,
  calculateReadingTime,
  normalizeCoverImageUrl,
  tagToSlug,
} from './markdown-types';

export * from './markdown-types';

// ============================================================================
// Configuration
// ============================================================================

const POSTS_DIRECTORY = path.join(process.cwd(), 'data', 'posts');

// ============================================================================
// Markdown Processing
// ============================================================================

/**
 * Remark plugin that converts fenced ```mermaid code blocks into
 * <div class="mermaid"> HTML nodes so that mermaid.js can render them
 * client-side. Operating at the AST level avoids HTML-entity encoding issues.
 */
function remarkMermaid() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (tree: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visit(tree, 'code', (node: any, index: number | undefined, parent: any) => {
      if (node.lang !== 'mermaid' || !parent || index === undefined) return;

      const escaped = node.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      parent.children[index] = {
        type: 'html',
        value: `<div class="mermaid">\n${escaped}\n</div>`,
      };
    });
  };
}

/**
 * Convert markdown content to HTML
 */
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMermaid)
    .use(remarkHtml, { sanitize: false })
    .process(markdown);

  return result.toString();
}

/**
 * Parse a markdown file and return post data
 */
async function parseMarkdownFile(filePath: string): Promise<MarkdownPost | null> {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const frontmatter = data as MarkdownPostFrontmatter;

    // Validate required fields
    if (!frontmatter.title || !frontmatter.slug || !frontmatter.author) {
      console.error(`Invalid frontmatter in ${filePath}`);
      return null;
    }

    // Calculate reading time if not provided
    const readTimeInMinutes =
      frontmatter.readTimeInMinutes || calculateReadingTime(content);

    // Convert markdown to HTML
    const html = await markdownToHtml(content);

    // Get file stats for last modified date
    const stats = fs.statSync(filePath);

    // Convert tags to proper format
    const tags = frontmatter.tags.map((tag) => ({
      name: tag,
      slug: tagToSlug(tag),
    }));

    // Resolve relative image paths
    const postDir = path.dirname(filePath);
    const rawCoverImage = frontmatter.coverImage.startsWith('./')
      ? path.relative(
          path.join(process.cwd(), 'public'),
          path.join(postDir, frontmatter.coverImage)
        ).replace(/\\/g, '/')
      : frontmatter.coverImage;

    const post: MarkdownPost = {
      slug: frontmatter.slug,
      title: frontmatter.title,
      brief: frontmatter.brief,
      coverImage: normalizeCoverImageUrl(rawCoverImage),
      publishedAt: frontmatter.publishedAt,
      readTimeInMinutes,
      author: frontmatter.author,
      tags,
      content: {
        html,
        markdown: content,
      },
      status: frontmatter.status || 'draft',
      newsletter: frontmatter.newsletter,
      recommendedArticles: frontmatter.recommendedArticles,
      instagramEmbeds: frontmatter.instagramEmbeds,
      tiktokEmbeds: frontmatter.tiktokEmbeds,
      _markdown: {
        source: 'markdown',
        filePath: path.relative(process.cwd(), filePath),
        lastModified: stats.mtime.toISOString(),
      },
    };

    return post;
  } catch (error) {
    console.error(`Error parsing markdown file ${filePath}:`, error);
    return null;
  }
}

// ============================================================================
// Post Loading Functions
// ============================================================================

/**
 * Get all markdown post directories
 */
function getPostDirectories(): string[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const entries = fs.readdirSync(POSTS_DIRECTORY, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(POSTS_DIRECTORY, entry.name));
}

/**
 * Load all published markdown posts
 */
export async function loadMarkdownPosts(): Promise<MarkdownPost[]> {
  try {
    const postDirs = getPostDirectories();
    const posts: MarkdownPost[] = [];

    for (const postDir of postDirs) {
      const indexPath = path.join(postDir, 'index.md');
      
      if (fs.existsSync(indexPath)) {
        const post = await parseMarkdownFile(indexPath);
        
        // Only include published posts
        if (post && post.status === 'published') {
          posts.push(post);
        }
      }
    }

    // Sort by published date (newest first)
    posts.sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
    });

    return posts;
  } catch (error) {
    console.error('Error loading markdown posts:', error);
    return [];
  }
}

/**
 * Load a single markdown post by slug
 */
export async function loadMarkdownPostBySlug(
  slug: string
): Promise<MarkdownPost | null> {
  try {
    const postDirs = getPostDirectories();

    for (const postDir of postDirs) {
      const indexPath = path.join(postDir, 'index.md');
      
      if (fs.existsSync(indexPath)) {
        const post = await parseMarkdownFile(indexPath);
        
        if (post && post.slug === slug) {
          return post;
        }
      }
    }

    return null;
  } catch (error) {
    console.error(`Error loading markdown post by slug ${slug}:`, error);
    return null;
  }
}

/**
 * Get all markdown post slugs (for generateStaticParams)
 */
export async function getMarkdownPostSlugs(): Promise<string[]> {
  try {
    const posts = await loadMarkdownPosts();
    return posts.map((post) => post.slug);
  } catch (error) {
    console.error('Error getting markdown post slugs:', error);
    return [];
  }
}

/**
 * Check if a post should be published based on scheduledFor date
 */
export function shouldPublishPost(post: MarkdownPost): boolean {
  if (post.status === 'published') {
    return true;
  }

  if (post.status === 'scheduled') {
    const scheduledDate = new Date(post.publishedAt);
    const now = new Date();
    return scheduledDate <= now;
  }

  return false;
}
