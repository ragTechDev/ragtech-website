/**
 * Archived posts utilities (Server-side only)
 * For types, import from './archived-posts-types'
 */

import 'server-only';

// ============================================================================
// Archived Posts Functions
// ============================================================================

/**
 * Load all archived posts from static JSON files
 */
export async function loadArchivedPosts(): Promise<any[]> {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const indexPath = path.join(process.cwd(), 'data', 'archived-posts', 'archived-posts.json');
    
    if (!fs.existsSync(indexPath)) {
      return [];
    }

    const indexData = fs.readFileSync(indexPath, 'utf-8');
    const index: any = JSON.parse(indexData);

    const posts: any[] = [];

    for (const meta of index.posts) {
      const postPath = path.join(process.cwd(), 'data', 'archived-posts', meta.filePath);
      
      if (fs.existsSync(postPath)) {
        const postData = fs.readFileSync(postPath, 'utf-8');
        const post: any = JSON.parse(postData);
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
export async function loadArchivedPostBySlug(slug: string): Promise<any | null> {
  try {
    const fs = require('fs');
    const path = require('path');
    
    const postPath = path.join(process.cwd(), 'data', 'archived-posts', 'posts', `${slug}.json`);
    
    if (!fs.existsSync(postPath)) {
      return null;
    }

    const postData = fs.readFileSync(postPath, 'utf-8');
    const post: any = JSON.parse(postData);
    
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
    const index: any = JSON.parse(indexData);

    return index.posts.map((post: any) => post.slug);
  } catch (error) {
    console.error('Error getting archived post slugs:', error);
    return [];
  }
}
