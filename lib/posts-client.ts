/**
 * Client-safe post utilities
 * These can be imported in both client and server components
 */

import { ArchivedPost, isArchivedPost } from './archived-posts-types';
import { MarkdownPost, isMarkdownPost } from './markdown-types';

// ============================================================================
// Unified Post Type
// ============================================================================

export type UnifiedPost = MarkdownPost | ArchivedPost;

// ============================================================================
// Re-export type guards
// ============================================================================

export { isMarkdownPost, isArchivedPost };

// ============================================================================
// Unified Post Utilities (Client-Safe)
// ============================================================================

/**
 * Get the post date from any post type
 */
export function getUnifiedPostDate(post: UnifiedPost): Date {
  if (isMarkdownPost(post)) {
    return new Date(post.publishedAt);
  }
  if (isArchivedPost(post)) {
    return new Date(post.publishedAt);
  }
  // Should never reach here due to type constraints
  throw new Error('Unknown post type');
}

/**
 * Get the post title from any post type
 */
export function getUnifiedPostTitle(post: UnifiedPost): string {
  return post.title;
}

/**
 * Get the post slug from any post type
 */
export function getUnifiedPostSlug(post: UnifiedPost): string {
  return post.slug;
}

/**
 * Get the post brief/description from any post type
 */
export function getUnifiedPostBrief(post: UnifiedPost): string {
  if (isMarkdownPost(post)) {
    return post.brief;
  }
  if (isArchivedPost(post)) {
    return post.brief;
  }
  // Should never reach here due to type constraints
  throw new Error('Unknown post type');
}

/**
 * Get the post cover image from any post type
 */
export function getUnifiedPostCoverImage(post: UnifiedPost): string | null {
  if (isMarkdownPost(post)) {
    return post.coverImage;
  }
  if (isArchivedPost(post)) {
    return post.coverImage?.url || null;
  }
  // Should never reach here due to type constraints
  throw new Error('Unknown post type');
}

/**
 * Get the post author name from any post type
 */
export function getUnifiedPostAuthor(post: UnifiedPost): string {
  if (isMarkdownPost(post) || isArchivedPost(post)) {
    return post.author.name;
  }
  // Should never reach here due to type constraints
  throw new Error('Unknown post type');
}

/**
 * Get the post reading time from any post type
 */
export function getUnifiedPostReadTime(post: UnifiedPost): number {
  if (isMarkdownPost(post) || isArchivedPost(post)) {
    return post.readTimeInMinutes;
  }
  // Should never reach here due to type constraints
  throw new Error('Unknown post type');
}

/**
 * Get the post source type
 */
export function getPostSource(post: UnifiedPost): 'markdown' | 'archived' {
  if (isMarkdownPost(post)) {
    return 'markdown';
  }
  if (isArchivedPost(post)) {
    return 'archived';
  }
  // Should never reach here due to type constraints
  throw new Error('Unknown post type');
}

// ============================================================================
// Re-export types for convenience
// ============================================================================

export type { MarkdownPost, ArchivedPost };
