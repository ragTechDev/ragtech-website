import { vi, describe, it, expect } from 'vitest';
import type { MarkdownPost } from '../markdown-types';

// Must be hoisted before module imports
vi.mock('server-only', () => ({}));

import { shouldPublishPost } from '../markdown';

const NOW = new Date('2026-08-10T12:00:00Z');

function makePost(overrides: Partial<MarkdownPost>): MarkdownPost {
  return {
    slug: 'test-post',
    title: 'Test Post',
    brief: 'A test post',
    coverImage: '/images/test.jpg',
    publishedAt: '2026-08-10T12:00:00Z',
    readTimeInMinutes: 5,
    author: { name: 'Test Author', profilePicture: '/images/author.jpg' },
    tags: [{ name: 'ai', slug: 'ai' }],
    content: { html: '<p>Test content</p>', markdown: 'Test content' },
    status: 'published',
    _markdown: {
      source: 'markdown',
      filePath: '/data/posts/test/index.md',
      lastModified: '2026-08-10T12:00:00Z',
    },
    ...overrides,
  };
}

describe('shouldPublishPost', () => {
  it('treats a published post as live regardless of date', () => {
    const future = makePost({
      status: 'published',
      publishedAt: '2030-01-01T00:00:00Z',
    });

    expect(shouldPublishPost(future, NOW)).toBe(true);
  });

  it('never treats a draft as live, even with a past date', () => {
    const past = makePost({
      status: 'draft',
      publishedAt: '2020-01-01T00:00:00Z',
    });

    expect(shouldPublishPost(past, NOW)).toBe(false);
  });

  it('hides a scheduled post before its publishedAt', () => {
    const post = makePost({
      status: 'scheduled',
      publishedAt: '2026-08-10T12:00:01Z',
    });

    expect(shouldPublishPost(post, NOW)).toBe(false);
  });

  it('publishes a scheduled post exactly at its publishedAt', () => {
    const post = makePost({
      status: 'scheduled',
      publishedAt: '2026-08-10T12:00:00Z',
    });

    expect(shouldPublishPost(post, NOW)).toBe(true);
  });

  it('publishes a scheduled post after its publishedAt', () => {
    const post = makePost({
      status: 'scheduled',
      publishedAt: '2026-08-09T12:00:00Z',
    });

    expect(shouldPublishPost(post, NOW)).toBe(true);
  });

  it('compares as an absolute instant, not local wall-clock time', () => {
    // Same moment as NOW, written in a +08:00 offset
    const post = makePost({
      status: 'scheduled',
      publishedAt: '2026-08-10T20:00:00+08:00',
    });

    expect(shouldPublishPost(post, NOW)).toBe(true);
    expect(shouldPublishPost(post, new Date('2026-08-10T11:59:59Z'))).toBe(false);
  });

  it('keeps a post hidden when publishedAt is unparseable', () => {
    const post = makePost({
      status: 'scheduled',
      publishedAt: 'not a date',
    });

    expect(shouldPublishPost(post, NOW)).toBe(false);
  });

  it('defaults to the current time when no clock is supplied', () => {
    const past = makePost({ status: 'scheduled', publishedAt: '2020-01-01T00:00:00Z' });
    const future = makePost({ status: 'scheduled', publishedAt: '2099-01-01T00:00:00Z' });

    expect(shouldPublishPost(past)).toBe(true);
    expect(shouldPublishPost(future)).toBe(false);
  });
});
