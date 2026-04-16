/**
 * Unified post interface for handling multiple post sources (Server-side only)
 * For client-safe utilities, import from './posts-client'
 */

import 'server-only';
import { loadMarkdownPosts, loadMarkdownPostBySlug } from './markdown';
import { loadArchivedPosts, loadArchivedPostBySlug } from './archived-posts';
import type { UnifiedPost } from './posts-client';
import { getUnifiedPostDate, getUnifiedPostSlug } from './posts-client';

// Re-export client-safe utilities and types
export * from './posts-client';

// ============================================================================
// Post Source Configuration
// ============================================================================

export interface PostSourceConfig {
  markdown: boolean;
  archived: boolean;
}

const DEFAULT_CONFIG: PostSourceConfig = {
  markdown: true,
  archived: true,
};

// ============================================================================
// Post Loading Functions (Server-side only)
// ============================================================================

/**
 * Load all posts from all enabled sources
 */
export async function loadAllPosts(
  config: PostSourceConfig = DEFAULT_CONFIG
): Promise<UnifiedPost[]> {
  const posts: UnifiedPost[] = [];

  try {
    // Load markdown posts
    if (config.markdown) {
      try {
        const markdownPosts = await loadMarkdownPosts();
        posts.push(...markdownPosts);
      } catch (error) {
        console.error('Error loading markdown posts:', error);
      }
    }


    // Load archived posts
    if (config.archived) {
      try {
        const archivedPosts = await loadArchivedPosts();
        posts.push(...archivedPosts);
      } catch (error) {
        console.error('Error loading archived posts:', error);
      }
    }

    // Sort all posts by date (newest first)
    posts.sort((a, b) => {
      const dateA = getUnifiedPostDate(a);
      const dateB = getUnifiedPostDate(b);
      return dateB.getTime() - dateA.getTime();
    });

    return posts;
  } catch (error) {
    console.error('Error loading all posts:', error);
    return [];
  }
}

/**
 * Load a single post by slug from any source
 */
export async function loadPostBySlug(
  slug: string,
  config: PostSourceConfig = DEFAULT_CONFIG
): Promise<UnifiedPost | null> {
  // Try markdown posts first
  if (config.markdown) {
    try {
      const markdownPost = await loadMarkdownPostBySlug(slug);
      if (markdownPost) {
        return markdownPost;
      }
    } catch (error) {
      console.error('Error loading markdown post by slug:', error);
    }
  }

  // Try archived posts
  if (config.archived) {
    try {
      const archivedPost = await loadArchivedPostBySlug(slug);
      if (archivedPost) {
        return archivedPost;
      }
    } catch (error) {
      console.error('Error loading archived post by slug:', error);
    }
  }


  return null;
}

/**
 * Get all post slugs from all sources (for generateStaticParams)
 */
export async function getAllPostSlugs(
  config: PostSourceConfig = DEFAULT_CONFIG
): Promise<string[]> {
  const slugs: string[] = [];

  try {
    const posts = await loadAllPosts(config);
    return posts.map((post) => getUnifiedPostSlug(post));
  } catch (error) {
    console.error('Error getting all post slugs:', error);
    return [];
  }
}

// All client-safe utilities and types are re-exported from './posts-client' above
