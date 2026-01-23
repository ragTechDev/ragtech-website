/**
 * Beehiiv API utilities (Server-side only)
 * For types and client-safe utilities, import from './beehiiv-types'
 */

import 'server-only';
import {
  BeehiivPost,
  BeehiivPostsResponse,
  BeehiivSubscriptionResponse,
  BeehiivErrorResponse,
  ArchivedPost,
  ArchivedPostsIndex,
} from './beehiiv-types';

// Re-export types for convenience
export * from './beehiiv-types';

// ============================================================================
// API Configuration
// ============================================================================

const BEEHIIV_API_BASE = 'https://api.beehiiv.com/v2';

function getBeehiivHeaders(): HeadersInit {
  const apiKey = process.env.BEEHIIV_API_KEY;
  
  if (!apiKey) {
    throw new Error('BEEHIIV_API_KEY environment variable is not set');
  }

  return {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  };
}

function getPublicationId(): string {
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  
  if (!publicationId) {
    throw new Error('BEEHIIV_PUBLICATION_ID environment variable is not set');
  }

  return publicationId;
}

// ============================================================================
// API Functions
// ============================================================================

/**
 * Fetch posts from Beehiiv with page-based pagination
 * Returns empty response on error to prevent blocking the blog page
 */
export async function fetchBeehiivPosts(
  page: number = 1,
  limit: number = 6
): Promise<BeehiivPostsResponse> {
  try {
    const publicationId = getPublicationId();
    
    const params = new URLSearchParams({
      status: 'confirmed',
      limit: limit.toString(),
      page: page.toString(),
      expand: 'free_web_content',
    });

    const url = `${BEEHIIV_API_BASE}/publications/${publicationId}/posts?${params}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: getBeehiivHeaders(),
      cache: 'no-store', // No caching - always fetch fresh data
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Beehiiv API Error:', {
        status: response.status,
        statusText: response.statusText,
        url,
        response: errorText,
      });
      
      // Return empty response instead of throwing
      return {
        data: [],
        page: 1,
        limit: limit,
        total_results: 0,
        total_pages: 0,
      };
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching Beehiiv posts:', error);
    // Return empty response on any error to prevent blocking the blog page
    return {
      data: [],
      page: 1,
      limit: limit,
      total_results: 0,
      total_pages: 0,
    };
  }
}

/**
 * Fetch a single post by slug from Beehiiv
 */
export async function fetchBeehiivPostBySlug(
  slug: string
): Promise<BeehiivPost | null> {
  try {
    const publicationId = getPublicationId();
    
    // Beehiiv API doesn't support filtering by slug directly
    // We need to fetch posts and find the matching slug
    const response = await fetchBeehiivPosts(1, 100);
    const post = response.data.find((p) => p.slug === slug);
    
    return post || null;
  } catch (error) {
    console.error('Error fetching Beehiiv post by slug:', error);
    return null;
  }
}

/**
 * Subscribe an email to the Beehiiv newsletter
 */
export async function subscribeToBeehiiv(
  email: string
): Promise<BeehiivSubscriptionResponse> {
  const publicationId = getPublicationId();
  const url = `${BEEHIIV_API_BASE}/publications/${publicationId}/subscriptions`;

  const response = await fetch(url, {
    method: 'POST',
    headers: getBeehiivHeaders(),
    body: JSON.stringify({
      email,
      reactivate_existing: false,
      send_welcome_email: true,
      utm_source: 'ragtechdev.com',
      utm_medium: 'website',
    }),
  });

  if (!response.ok) {
    const error: BeehiivErrorResponse = await response.json().catch(() => ({
      error: { message: 'Failed to subscribe to newsletter' },
    }));
    throw new Error(error.error.message);
  }

  return response.json();
}

// ============================================================================
// Archived Posts Functions
// ============================================================================

/**
 * Load all archived posts from static JSON files
 */
export async function loadArchivedPosts(): Promise<ArchivedPost[]> {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const indexPath = path.join(process.cwd(), 'data', 'archived-posts', 'archived-posts.json');
    
    if (!fs.existsSync(indexPath)) {
      return [];
    }

    const indexData = fs.readFileSync(indexPath, 'utf-8');
    const index: ArchivedPostsIndex = JSON.parse(indexData);

    const posts: ArchivedPost[] = [];

    for (const meta of index.posts) {
      const postPath = path.join(process.cwd(), 'data', 'archived-posts', meta.filePath);
      
      if (fs.existsSync(postPath)) {
        const postData = fs.readFileSync(postPath, 'utf-8');
        const post: ArchivedPost = JSON.parse(postData);
        posts.push(post);
      }
    }

    return posts;
  } catch (error) {
    console.error('Error loading archived posts:', error);
    return [];
  }
}

/**
 * Load a single archived post by slug
 */
export async function loadArchivedPostBySlug(slug: string): Promise<ArchivedPost | null> {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const postPath = path.join(process.cwd(), 'data', 'archived-posts', 'posts', `${slug}.json`);
    
    if (!fs.existsSync(postPath)) {
      return null;
    }

    const postData = fs.readFileSync(postPath, 'utf-8');
    const post: ArchivedPost = JSON.parse(postData);
    
    return post;
  } catch (error) {
    console.error('Error loading archived post:', error);
    return null;
  }
}

/**
 * Get all archived post slugs (for generateStaticParams)
 */
export async function getArchivedPostSlugs(): Promise<string[]> {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const indexPath = path.join(process.cwd(), 'data', 'archived-posts', 'archived-posts.json');
    
    if (!fs.existsSync(indexPath)) {
      return [];
    }

    const indexData = fs.readFileSync(indexPath, 'utf-8');
    const index: ArchivedPostsIndex = JSON.parse(indexData);

    return index.posts.map((post) => post.slug);
  } catch (error) {
    console.error('Error getting archived post slugs:', error);
    return [];
  }
}
