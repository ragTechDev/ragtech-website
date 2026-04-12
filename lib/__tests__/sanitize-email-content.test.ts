import { describe, it, expect } from 'vitest';
import { sanitizeEmailContent } from '../email-sanitizer';

describe('sanitizeEmailContent — mermaid diagrams', () => {
  it('strips a mermaid div and replaces it with a fallback link', () => {
    const html = `<p>Some text before.</p>
<div class="mermaid">
graph TB
    A --> B
</div>
<p>Some text after.</p>`;

    const result = sanitizeEmailContent(html);

    expect(result).not.toContain('<div class="mermaid">');
    expect(result).not.toContain('graph TB');
    expect(result).toContain('ragtechdev.com');
  });

  it('replaces mermaid block with readable fallback text', () => {
    const html = '<div class="mermaid">graph LR\n    ChatGPT --> GPT4\n</div>';
    const result = sanitizeEmailContent(html);

    expect(result).toContain('diagram');
    expect(result).toContain('<a href=');
  });

  it('preserves surrounding content when stripping mermaid block', () => {
    const html = '<p>Before</p><div class="mermaid">graph TB\n A-->B\n</div><p>After</p>';
    const result = sanitizeEmailContent(html);

    expect(result).toContain('Before');
    expect(result).toContain('After');
    expect(result).not.toContain('class="mermaid"');
  });

  it('handles multiple mermaid blocks', () => {
    const html = `<div class="mermaid">graph TB\n A-->B\n</div><p>Middle</p><div class="mermaid">graph LR\n C-->D\n</div>`;
    const result = sanitizeEmailContent(html);

    expect(result).not.toContain('class="mermaid"');
    expect(result).toContain('Middle');
  });

  it('handles content with no mermaid block unchanged in structure', () => {
    const html = '<p>Hello world</p>';
    const result = sanitizeEmailContent(html);

    expect(result).toContain('Hello world');
    expect(result).not.toContain('class="mermaid"');
  });
});

describe('sanitizeEmailContent — null / undefined input', () => {
  it('returns fallback for null', () => {
    expect(sanitizeEmailContent(null)).toBe('<p>Content preview not available.</p>');
  });

  it('returns fallback for undefined', () => {
    expect(sanitizeEmailContent(undefined)).toBe('<p>Content preview not available.</p>');
  });

  it('returns fallback for empty string', () => {
    expect(sanitizeEmailContent('')).toBe('<p>Content preview not available.</p>');
  });
});

describe('sanitizeEmailContent — YouTube iframes', () => {
  it('replaces YouTube iframe with thumbnail link', () => {
    const videoId = 'qw3dKhXV6Vw';
    const html = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;
    const result = sanitizeEmailContent(html);

    expect(result).not.toContain('<iframe');
    expect(result).toContain(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
    expect(result).toContain(`https://www.youtube.com/watch?v=${videoId}`);
  });
});

describe('sanitizeEmailContent — script and style removal', () => {
  it('removes script tags', () => {
    const html = '<p>Text</p><script>alert("xss")</script>';
    expect(sanitizeEmailContent(html)).not.toContain('<script>');
  });

  it('removes style tags', () => {
    const html = '<style>.foo { color: red }</style><p>Text</p>';
    expect(sanitizeEmailContent(html)).not.toContain('<style>');
  });
});
