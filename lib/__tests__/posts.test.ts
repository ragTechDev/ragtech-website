import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';
import type { MarkdownPost } from '../markdown-types';

// Must be hoisted before module imports
vi.mock('server-only', () => ({}));

vi.mock('../markdown', () => ({
  loadMarkdownPosts: vi.fn(),
  loadMarkdownPostBySlug: vi.fn(),
}));

vi.mock('../beehiiv', () => ({
  fetchBeehiivPosts: vi.fn(),
  loadArchivedPosts: vi.fn(),
  loadArchivedPostBySlug: vi.fn(),
}));

import { loadPostBySlug, loadAllPosts } from '../posts';
import { loadMarkdownPosts, loadMarkdownPostBySlug } from '../markdown';
import { fetchBeehiivPosts, loadArchivedPosts, loadArchivedPostBySlug } from '../beehiiv';

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

describe('post loading resilience when beehiiv API key is invalid', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('loadPostBySlug', () => {
    it('returns a markdown post even when beehiiv throws an invalid API key error', async () => {
      vi.mocked(loadMarkdownPostBySlug).mockResolvedValue(mockMarkdownPost);
      vi.mocked(loadArchivedPostBySlug).mockResolvedValue(null);
      vi.mocked(fetchBeehiivPosts).mockRejectedValue(
        new Error('Invalid Beehiiv API key')
      );

      const post = await loadPostBySlug('test-markdown-post');

      expect(post).not.toBeNull();
      expect(post?.slug).toBe('test-markdown-post');
    });

    it('does not call beehiiv at all when the markdown post is found', async () => {
      vi.mocked(loadMarkdownPostBySlug).mockResolvedValue(mockMarkdownPost);
      vi.mocked(loadArchivedPostBySlug).mockResolvedValue(null);
      vi.mocked(fetchBeehiivPosts).mockRejectedValue(
        new Error('Invalid Beehiiv API key')
      );

      await loadPostBySlug('test-markdown-post');

      expect(fetchBeehiivPosts).not.toHaveBeenCalled();
    });
  });

  describe('loadAllPosts', () => {
    it('returns markdown posts even when beehiiv throws an invalid API key error', async () => {
      vi.mocked(loadMarkdownPosts).mockResolvedValue([mockMarkdownPost]);
      vi.mocked(loadArchivedPosts).mockResolvedValue([]);
      vi.mocked(fetchBeehiivPosts).mockRejectedValue(
        new Error('Invalid Beehiiv API key')
      );

      const posts = await loadAllPosts();

      expect(posts).toHaveLength(1);
      expect(posts[0].slug).toBe('test-markdown-post');
    });
  });
});
