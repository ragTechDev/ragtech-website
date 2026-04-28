import { Suspense } from 'react';
import { loadAllPosts, UnifiedPost } from '@/lib/posts';
import BlogPosts from './BlogPosts';
import BlogHeader from './BlogHeader';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
  // Load all posts from all sources (markdown, archived)
  // Sources can be individually disabled by modifying the config in lib/posts.ts
  let allPosts: UnifiedPost[] = [];
  
  try {
    allPosts = await loadAllPosts();
  } catch (error) {
    console.error('Failed to load posts:', error);
  }

  return (
    <main>
      {/* Blog Header - Title and Description */}
      <BlogHeader />

      {/* Blog Posts Section with embedded Newsletter CTA */}
      <section className="py-12 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <Suspense
            fallback={
              <div className="text-center py-20">
                <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-neutral-600 dark:text-neutral-400">Loading posts...</p>
              </div>
            }
          >
            <BlogPosts allPosts={allPosts} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
