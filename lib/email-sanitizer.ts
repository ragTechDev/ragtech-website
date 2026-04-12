/**
 * Email content sanitization utilities
 * Pure functions with no React dependencies — safe to import in tests and server code.
 */

/**
 * Sanitize and truncate HTML content for email delivery.
 *
 * Handles embed replacement (YouTube, Instagram, TikTok), removes scripts/styles,
 * strips Mermaid diagrams (which cannot render in email clients), and truncates
 * long content to ~500 characters of text.
 */
export function sanitizeEmailContent(
  html: string | undefined | null,
  instagramEmbeds?: { [postId: string]: string },
  tiktokEmbeds?: { [videoId: string]: string }
): string {
  if (!html) {
    return '<p>Content preview not available.</p>';
  }

  let clean = html;

  // Replace TikTok blockquote embeds BEFORE removing script tags
  clean = clean.replace(
    /<blockquote[^>]*class="tiktok-embed"[^>]*cite="https:\/\/www\.tiktok\.com\/@([^/]+)\/video\/(\d+)"[^>]*>[\s\S]*?<\/blockquote>\s*<script[^>]*src="https:\/\/www\.tiktok\.com\/embed\.js"[^>]*><\/script>/gi,
    (match, username, videoId) => {
      const videoUrl = `https://www.tiktok.com/@${username}/video/${videoId}`;

      if (tiktokEmbeds && tiktokEmbeds[videoId]) {
        const coverImage = tiktokEmbeds[videoId];
        return `<a href="${videoUrl}" style="display: block; margin: 20px auto; text-align: center;"><img src="${coverImage}" alt="Watch on TikTok" style="width: 100%; max-width: 520px; height: auto; border-radius: 8px; margin: 0 auto; display: block;" /><p style="color: #333; font-weight: 600; margin-top: 12px; font-size: 14px;">🎵 Watch on TikTok</p></a>`;
      }

      const thumbnailUrl = `https://www.tiktok.com/favicon.ico`;
      return `<a href="${videoUrl}" style="display: block; margin: 20px auto; text-align: center; padding: 20px; background-color: #000000; border-radius: 8px; max-width: 400px;"><img src="${thumbnailUrl}" alt="Watch on TikTok" style="width: 64px; height: 64px; margin: 0 auto 12px;" /><p style="color: #ffffff; font-weight: 600; margin: 0;">🎵 Watch on TikTok</p></a>`;
    }
  );

  // Remove script tags
  clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove style tags
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

  // Remove Mermaid diagram blocks — they cannot render in email clients
  clean = clean.replace(
    /<div class="mermaid">[\s\S]*?<\/div>/gi,
    '<p><em>📊 This article contains a diagram. View it in the <a href="https://ragtechdev.com/blog">full article on ragtechdev.com</a>.</em></p>'
  );

  // Remove <pre> blocks entirely — they contain long code/data that breaks email layout
  clean = clean.replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, '');

  // Remove inline styles (we'll add our own for images)
  clean = clean.replace(/\s*style="[^"]*"/gi, '');

  // Add word-wrap to any remaining inline <code> tags so they don't overflow
  clean = clean.replace(
    /<code\b([^>]*)>/gi,
    '<code$1 style="word-break: break-all; overflow-wrap: break-word; white-space: pre-wrap; font-size: 13px;">'
  );

  // Convert relative image paths to absolute URLs
  clean = clean.replace(
    /<img([^>]*?)src="\/([^"]+)"([^>]*)>/gi,
    '<img$1src="https://ragtechdev.com/$2"$3>'
  );

  // Add consistent styling to all images
  clean = clean.replace(
    /<img([^>]*)>/gi,
    '<img$1 style="width: 100%; max-width: 520px; height: auto; display: block; margin: 16px auto; border-radius: 8px; box-sizing: border-box;">'
  );

  // Replace YouTube iframes with linked thumbnails
  clean = clean.replace(
    /<iframe[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)"[^>]*>[\s\S]*?<\/iframe>/gi,
    (match, videoId) => {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      return `<a href="${videoUrl}" style="display: block; margin: 20px 0;"><img src="${thumbnailUrl}" alt="Watch on YouTube" style="width: 100%; max-width: 520px; height: auto; display: block; border-radius: 8px;" /></a><p style="text-align: center; margin-top: 8px;"><a href="${videoUrl}" style="color: #5da9a4; text-decoration: underline;">▶ Watch on YouTube</a></p>`;
    }
  );

  // Replace Instagram iframe embeds with image fallbacks
  if (instagramEmbeds) {
    clean = clean.replace(
      /<iframe[^>]*src="https:\/\/www\.instagram\.com\/p\/([^\/]+)\/embed"[^>]*>[\s\S]*?<\/iframe>/gi,
      (match, postId) => {
        const postUrl = `https://www.instagram.com/p/${postId}/`;

        if (instagramEmbeds[postId]) {
          const imageUrl = instagramEmbeds[postId];
          return `<a href="${postUrl}" style="display: block; margin: 20px auto; text-align: center;">
            <img
              src="${imageUrl}"
              alt="Instagram post"
              style="width: 100%; max-width: 520px; height: auto; border-radius: 8px; margin: 0 auto; display: block;"
            />
            <p style="color: #333; font-weight: 600; margin-top: 12px; font-size: 14px;">📸 View on Instagram</p>
          </a>`;
        }

        return `<a href="${postUrl}" style="display: block; margin: 20px auto; text-align: center; padding: 20px; background-color: #f8f8f8; border-radius: 8px; max-width: 400px;"><img src="https://www.instagram.com/favicon.ico" alt="Instagram" style="width: 32px; height: 32px; margin: 0 auto 12px;" /><p style="color: #333; font-weight: 600; margin: 0;">📸 View on Instagram</p></a>`;
      }
    );
  }

  // Remove any remaining iframes (fallback)
  clean = clean.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');

  // Limit content length (roughly 500 chars of text)
  const textContent = clean.replace(/<[^>]*>/g, '');
  if (textContent.length > 500) {
    const truncated = textContent.substring(0, 500);
    const lastSpace = truncated.lastIndexOf(' ');
    const cutPoint = lastSpace > 400 ? lastSpace : 500;

    const cutIndex = clean.indexOf(textContent.substring(cutPoint));
    if (cutIndex > 0) {
      clean = clean.substring(0, cutIndex) + '...';
    }
  }

  return clean;
}
