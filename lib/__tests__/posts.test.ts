import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { MarkdownPost } from '../markdown-types';

// Must be hoisted before module imports
vi.mock('server-only', () => ({}));

vi.mock('../markdown', () => ({
  loadMarkdownPosts: vi.fn(),
  loadMarkdownPostBySlug: vi.fn(),
}));

vi.mock('../archived-posts', () => ({
  loadArchivedPosts: vi.fn(),
  loadArchivedPostBySlug: vi.fn(),
}));

import { loadPostBySlug, loadAllPosts } from '../posts';
import { loadMarkdownPosts, loadMarkdownPostBySlug } from '../markdown';
import { loadArchivedPosts, loadArchivedPostBySlug } from '../archived-posts';

const mockMarkdownPost: MarkdownPost = {
  slug: 'test-markdown-post',
  title: 'Test Markdown Post',
  brief: 'A test post',
  coverImage: '/images/test.jpg',
  publishedAt: '2024-01-01T00:00:00Z',
  readTimeInMinutes: 5,
  author: { name: 'Test Author', profilePicture: '/images/author.jpg' },
  tags: [{ name: 'ai', slug: 'ai' }],
  content: { html: '<p>Test content</p>', markdown: 'Test content' },
  status: 'published',
  _markdown: {
    source: 'markdown',
    filePath: '/data/posts/test/index.md',
    lastModified: '2024-01-01T00:00:00Z',
  },
};

describe('post loading basic functionality', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('loadPostBySlug', () => {
    it('returns a markdown post when found', async () => {
      vi.mocked(loadMarkdownPostBySlug).mockResolvedValue(mockMarkdownPost);
      vi.mocked(loadArchivedPostBySlug).mockResolvedValue(null);

      const post = await loadPostBySlug('test-markdown-post');

      expect(post).not.toBeNull();
      expect(post?.slug).toBe('test-markdown-post');
    });

    it('returns an archived post when markdown post is not found', async () => {
      vi.mocked(loadMarkdownPostBySlug).mockResolvedValue(null);
      const mockArchivedPost = {
        id: 'archived-post-id',
        slug: 'test-archived-post',
        title: 'Test Archived Post',
        brief: 'A test archived post',
        coverImage: { url: '/images/test.jpg' },
        publishedAt: '2024-01-01T00:00:00Z',
        readTimeInMinutes: 5,
        author: { name: 'Test Author', profilePicture: '/images/author.jpg' },
        tags: [{ name: 'ai', slug: 'ai' }],
        content: { html: '<p>Test content</p>', markdown: 'Test content' },
        _archived: {
          source: 'hashnode' as const,
          archived_date: '2024-01-01T00:00:00Z',
          original_url: 'https://example.com/test',
        },
      };
      vi.mocked(loadArchivedPostBySlug).mockResolvedValue(mockArchivedPost);

      const post = await loadPostBySlug('test-archived-post');

      expect(post).not.toBeNull();
      expect(post?.slug).toBe('test-archived-post');
    });
  });

  describe('loadAllPosts', () => {
    it('returns posts from all enabled sources', async () => {
      vi.mocked(loadMarkdownPosts).mockResolvedValue([mockMarkdownPost]);
      vi.mocked(loadArchivedPosts).mockResolvedValue([]);

      const posts = await loadAllPosts();

      expect(posts).toHaveLength(1);
      expect(posts[0].slug).toBe('test-markdown-post');
    });
  });
});
