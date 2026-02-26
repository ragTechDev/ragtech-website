/**
 * Instagram oEmbed API integration
 * Fetches post metadata including thumbnail URLs
 */

export interface InstagramOEmbedResponse {
  version: string;
  title: string;
  author_name: string;
  author_url: string;
  author_id: number;
  media_id: string;
  provider_name: string;
  provider_url: string;
  type: string;
  width: number;
  height: number | null;
  html: string;
  thumbnail_url: string;
  thumbnail_width: number;
  thumbnail_height: number;
}

/**
 * Fetch Instagram post metadata via oEmbed API
 * @param postUrl - Full Instagram post URL (e.g., https://www.instagram.com/p/DUprT9qgPx3/)
 * @returns Instagram post metadata including thumbnail URL
 */
export async function fetchInstagramOEmbed(postUrl: string): Promise<InstagramOEmbedResponse | null> {
  try {
    const oembedUrl = `https://graph.facebook.com/v21.0/instagram_oembed?url=${encodeURIComponent(postUrl)}&access_token=`;
    
    // Note: Instagram's oEmbed endpoint requires a Facebook access token
    // For public posts, we can try without token but it may fail
    const response = await fetch(oembedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ragTech/1.0)',
      },
    });

    if (!response.ok) {
      console.warn(`Instagram oEmbed API failed for ${postUrl}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    return data as InstagramOEmbedResponse;
  } catch (error) {
    console.error(`Error fetching Instagram oEmbed for ${postUrl}:`, error);
    return null;
  }
}

/**
 * Extract Instagram post IDs from HTML content
 * @param html - HTML content containing Instagram embeds
 * @returns Array of Instagram post IDs
 */
export function extractInstagramPostIds(html: string): string[] {
  const regex = /https:\/\/www\.instagram\.com\/p\/([a-zA-Z0-9_-]+)/gi;
  const matches = Array.from(html.matchAll(regex));
  const postIds = new Set<string>();
  
  for (const match of matches) {
    postIds.add(match[1]);
  }
  
  return Array.from(postIds);
}

/**
 * Create a map of Instagram post IDs to their thumbnail URLs
 * @param html - HTML content containing Instagram embeds
 * @returns Map of post ID to thumbnail URL
 */
export async function getInstagramThumbnails(html: string): Promise<Map<string, string>> {
  const postIds = extractInstagramPostIds(html);
  const thumbnailMap = new Map<string, string>();

  // Fetch thumbnails for each post
  const promises = postIds.map(async (postId) => {
    const postUrl = `https://www.instagram.com/p/${postId}/`;
    const oembed = await fetchInstagramOEmbed(postUrl);
    
    if (oembed && oembed.thumbnail_url) {
      thumbnailMap.set(postId, oembed.thumbnail_url);
    }
  });

  await Promise.all(promises);
  return thumbnailMap;
}
