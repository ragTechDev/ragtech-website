import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadPostBySlug, loadAllPosts } from '@/lib/posts';
import {
  UnifiedPost,
  getUnifiedPostDate,
  getUnifiedPostTitle,
  getUnifiedPostCoverImage,
  getPostSource,
  isMarkdownPost,
  isArchivedPost,
} from '@/lib/posts-client';
import NewsletterCTA from '../NewsletterCTA';
import RecommendedArticles from '../RecommendedArticles';
import TikTokEmbed from '../TikTokEmbed';
import MermaidInit from '../MermaidInit';
import AuthorSection from './AuthorSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getRecommendedArticles(post: UnifiedPost): Promise<UnifiedPost[]> {
  try {
    const allPosts = await loadAllPosts();
    const MIN_ARTICLES = 3;
    
    // Check if post has recommended articles in frontmatter
    if (isMarkdownPost(post) && post.recommendedArticles && post.recommendedArticles.length > 0) {
      const recommended = allPosts.filter(p => 
        post.recommendedArticles?.includes(p.slug) && p.slug !== post.slug
      );
      // Get articles in the order specified in frontmatter
      const orderedRecommended = post.recommendedArticles
        .map(slug => recommended.find(p => p.slug === slug))
        .filter((p): p is UnifiedPost => p !== undefined);
      
      // If we have less than MIN_ARTICLES, fill with latest articles
      if (orderedRecommended.length < MIN_ARTICLES) {
        const recommendedSlugs = new Set(orderedRecommended.map(p => p.slug));
        const latestArticles = allPosts
          .filter(p => p.slug !== post.slug && !recommendedSlugs.has(p.slug))
          .slice(0, MIN_ARTICLES - orderedRecommended.length);
        
        return [...orderedRecommended, ...latestArticles];
      }
      
      return orderedRecommended;
    }
    
    // Default: return latest 3 articles excluding current post
    return allPosts
      .filter(p => p.slug !== post.slug)
      .slice(0, MIN_ARTICLES);
  } catch (error) {
    console.error('Error loading recommended articles:', error);
    return [];
  }
}

function formatDate(post: UnifiedPost): string {
  const date = getUnifiedPostDate(post);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getPostContent(post: UnifiedPost): string {
  if (isMarkdownPost(post)) {
    return post.content.html;
  }
  
  if (isArchivedPost(post)) {
    return post.content.html;
  }
  
  // Should never reach here due to type constraints
  throw new Error('Unknown post type');
}

function getPostTags(post: UnifiedPost): Array<{ name: string; slug: string }> {
  if (isMarkdownPost(post) || isArchivedPost(post)) {
    return post.tags;
  }
  
  // Should never reach here due to type constraints
  throw new Error('Unknown post type');
}


export default async function BlogPostPage(props: { params: { slug: string } } | { params: Promise<{ slug: string }> }) {
  let params = props.params;
  if (params instanceof Promise) {
    params = await params;
  }
  const post = await loadPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const coverImage = getUnifiedPostCoverImage(post);
  const tags = getPostTags(post);
  const content = getPostContent(post);
  const source = getPostSource(post);
  const recommendedArticles = await getRecommendedArticles(post).catch(() => []);

  const sourceBadge = {
    markdown: { label: 'New Post', color: 'bg-green-500' },
    archived: { label: 'From the Archives', color: 'bg-neutral-500' },
  }[source];

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 sm:px-6 overflow-x-hidden">
      <TikTokEmbed />
      <MermaidInit />
      <article className="container mx-auto max-w-4xl w-full">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/70 transition-colors font-semibold"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8">
          {/* Source Badge */}
          {sourceBadge && (
            <div className="mb-4">
              <span className={`inline-block ${sourceBadge.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                {sourceBadge.label}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brownDark dark:text-brown">
            {getUnifiedPostTitle(post)}
          </h1>

          {/* Author & Meta Info */}
          {isMarkdownPost(post) && post.author ? (
            <AuthorSection
              author={post.author}
              publishedDate={formatDate(post)}
              readTimeInMinutes={post.readTimeInMinutes}
            />
          ) : (
            <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400 mb-4">
              <span>{formatDate(post)}</span>
            </div>
          )}

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="px-3 py-1 bg-secondary/20 rounded-full text-sm font-semibold"
                  style={{ color: '#5da9a4' }}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Cover Image */}
        {coverImage && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 shadow-2xl">
            <Image
              src={coverImage}
              alt={getUnifiedPostTitle(post)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="blog-content prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-neutral-200 dark:border-neutral-700">
          {/* Recommended Articles */}
          {recommendedArticles.length > 0 && (
            <RecommendedArticles articles={recommendedArticles} />
          )}

          {/* Newsletter CTA */}
          <div className="mb-12">
            <NewsletterCTA />
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>←</span>
            <span>Back to All Posts</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
