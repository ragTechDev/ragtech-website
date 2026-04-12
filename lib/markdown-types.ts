/**
 * TypeScript interfaces for Markdown-based blog posts
 * Safe to import in both client and server components
 */

// ============================================================================
// Markdown Post Interfaces
// ============================================================================

export interface MarkdownPostAuthor {
  name: string;
  email?: string;
  profilePicture: string;
}

export interface MarkdownPostFrontmatter {
  title: string;
  slug: string;
  author: MarkdownPostAuthor;
  publishedAt: string;
  scheduledFor?: string;
  coverImage: string;
  brief: string;
  tags: string[];
  readTimeInMinutes?: number;
  status: 'draft' | 'scheduled' | 'published';
  newsletter?: {
    send: boolean;
    sent: boolean;
    topic: Array<'ragTech' | 'FutureNet' | 'Techie Taboo'>;  // Compulsory: one or more topics
    sentAt?: string;
    recipientCount?: number;
  };
  seo?: {
    metaDescription?: string;
    keywords?: string[];
  };
  recommendedArticles?: string[];  // Array of slugs
  instagramEmbeds?: {
    [postId: string]: string;  // Map of Instagram post ID to fallback image URL for newsletters
  };
  tiktokEmbeds?: {
    [videoId: string]: string;  // Map of TikTok video ID to fallback cover image URL for newsletters
  };
}

export interface MarkdownPost {
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
  publishedAt: string;
  readTimeInMinutes: number;
  author: MarkdownPostAuthor;
  tags: Array<{
    name: string;
    slug: string;
  }>;
  content: {
    html: string;
    markdown: string;
  };
  status: 'draft' | 'scheduled' | 'published';
  newsletter?: {
    send: boolean;
    sent: boolean;
    topic: Array<'ragTech' | 'FutureNet' | 'Techie Taboo'>;  // Compulsory: one or more topics
    sentAt?: string;
    recipientCount?: number;
  };
  recommendedArticles?: string[];  // Array of slugs
  instagramEmbeds?: {
    [postId: string]: string;  // Map of Instagram post ID to fallback image URL for newsletters
  };
  tiktokEmbeds?: {
    [videoId: string]: string;  // Map of TikTok video ID to fallback cover image URL for newsletters
  };
  _markdown: {
    source: 'markdown';
    filePath: string;
    lastModified: string;
  };
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Type guard to check if a post is a markdown post
 */
export function isMarkdownPost(post: any): post is MarkdownPost {
  return '_markdown' in post && post._markdown?.source === 'markdown';
}

/**
 * Calculate reading time based on word count
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Check if a URL is an external (absolute) URL
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * Normalize a cover image URL:
 * - External URLs (http/https) are returned as-is
 * - Internal paths are ensured to start with '/'
 */
export function normalizeCoverImageUrl(coverImage: string): string {
  if (isExternalUrl(coverImage)) return coverImage;
  return coverImage.startsWith('/') ? coverImage : `/${coverImage}`;
}

/**
 * Convert tag string to slug
 */
export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
