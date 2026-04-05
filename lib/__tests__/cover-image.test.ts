import { describe, it, expect } from 'vitest';
import { isExternalUrl, normalizeCoverImageUrl } from '../markdown-types';

describe('isExternalUrl', () => {
  it('returns true for https URLs', () => {
    expect(isExternalUrl('https://example.com/image.jpg')).toBe(true);
  });

  it('returns true for http URLs', () => {
    expect(isExternalUrl('http://example.com/image.jpg')).toBe(true);
  });

  it('returns false for absolute internal paths', () => {
    expect(isExternalUrl('/images/cover.jpg')).toBe(false);
  });

  it('returns false for relative paths', () => {
    expect(isExternalUrl('./cover.jpg')).toBe(false);
    expect(isExternalUrl('images/cover.jpg')).toBe(false);
  });
});

describe('normalizeCoverImageUrl', () => {
  it('preserves external https URLs as-is', () => {
    const url = 'https://cdn.example.com/images/cover.jpg';
    expect(normalizeCoverImageUrl(url)).toBe(url);
  });

  it('preserves external http URLs as-is', () => {
    const url = 'http://cdn.example.com/images/cover.jpg';
    expect(normalizeCoverImageUrl(url)).toBe(url);
  });

  it('preserves internal paths that already start with /', () => {
    expect(normalizeCoverImageUrl('/images/cover.jpg')).toBe('/images/cover.jpg');
  });

  it('prepends / to internal paths that do not start with /', () => {
    expect(normalizeCoverImageUrl('images/cover.jpg')).toBe('/images/cover.jpg');
  });

  it('does not double-slash already absolute internal paths', () => {
    expect(normalizeCoverImageUrl('/blog/2024/cover.jpg')).toBe('/blog/2024/cover.jpg');
  });

  it('does not mangle external URLs by prepending /', () => {
    const url = 'https://beehiiv-images-production.s3.amazonaws.com/abc.jpg';
    expect(normalizeCoverImageUrl(url)).not.toMatch(/^\/https/);
    expect(normalizeCoverImageUrl(url)).toBe(url);
  });
});
