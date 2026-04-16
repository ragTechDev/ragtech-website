/**
 * Shared TypeScript interfaces for archived posts
 * Safe to import in both client and server components
 */

// ============================================================================
// Archived Posts Interfaces
// ============================================================================

export interface ArchivedPost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  } | null;
  publishedAt: string;
  readTimeInMinutes: number;
  author: {
    name: string;
    profilePicture: string;
  };
  content: {
    html: string;
    markdown: string;
  };
  tags: Array<{
    name: string;
    slug: string;
  }>;
  _archived: {
    source: 'hashnode';
    archived_date: string;
    original_url: string;
  };
}

export interface ArchivedPostMeta {
  slug: string;
  title: string;
  publishedAt: string;
  source: 'hashnode';
  filePath: string;
}

export interface ArchivedPostsIndex {
  version: '1.0';
  source: 'hashnode';
  archived_date: string;
  posts: ArchivedPostMeta[];
}

// ============================================================================
// Utility Functions
// ============================================================================

/**
 * Type guard to check if a post is archived
 */
export function isArchivedPost(post: any): post is ArchivedPost {
  return '_archived' in post && post._archived?.source === 'hashnode';
}
