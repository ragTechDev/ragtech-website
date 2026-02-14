'use server';

import { loadPostBySlug, loadAllPosts } from '@/lib/posts';
import type { UnifiedPost } from '@/lib/posts-client';

export async function getPostBySlug(slug: string): Promise<UnifiedPost | null> {
  try {
    return await loadPostBySlug(slug);
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getAllPosts(): Promise<UnifiedPost[]> {
  try {
    return await loadAllPosts();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}
