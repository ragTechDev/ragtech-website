import { Suspense } from 'react';
import { fetchBeehiivPosts, loadArchivedPosts, BeehiivPostsResponse, ArchivedPost } from '@/lib/beehiiv';
import BlogPosts from './BlogPosts';
import NewsletterSection from './NewsletterSection';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
  // Fetch data with error handling - don't let API errors block the page
  let beehiivResponse: BeehiivPostsResponse;
  let archivedPosts: ArchivedPost[];
  
  try {
    beehiivResponse = await fetchBeehiivPosts(1, 6);
  } catch (error) {
    console.error('Failed to fetch Beehiiv posts:', error);
    beehiivResponse = {
      data: [],
      page: 1,
      limit: 6,
      total_results: 0,
      total_pages: 0,
    };
  }
  
  try {
    archivedPosts = await loadArchivedPosts();
  } catch (error) {
    console.error('Failed to load archived posts:', error);
    archivedPosts = [];
  }

  return (
    <main>
      {/* Newsletter Section */}
      <NewsletterSection />

      {/* Blog Posts Section */}
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
            <BlogPosts
              initialPosts={beehiivResponse.data}
              initialPage={beehiivResponse.page}
              initialTotalPages={beehiivResponse.total_pages}
              archivedPosts={archivedPosts}
            />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
