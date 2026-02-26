'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  UnifiedPost,
  getUnifiedPostDate,
  getUnifiedPostTitle,
  getUnifiedPostSlug,
  getUnifiedPostBrief,
  getUnifiedPostCoverImage,
  getPostSource,
} from '@/lib/posts-client';
import NewsletterCTA from './NewsletterCTA';

interface BlogPostsProps {
  allPosts: UnifiedPost[];
}

export default function BlogPosts({ allPosts }: BlogPostsProps) {
  const [displayCount, setDisplayCount] = useState(12);
  const [loading, setLoading] = useState(false);

  const visiblePosts = allPosts.slice(0, displayCount);
  const hasMore = displayCount < allPosts.length;

  const loadMorePosts = () => {
    setLoading(true);
    setTimeout(() => {
      setDisplayCount((prev) => prev + 12);
      setLoading(false);
    }, 300);
  };

  const formatDate = (post: UnifiedPost) => {
    const date = getUnifiedPostDate(post);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getPostUrl = (post: UnifiedPost) => {
    return `/blog/${getUnifiedPostSlug(post)}`;
  };

  const getPostBadge = (post: UnifiedPost) => {
    const source = getPostSource(post);
    const postDate = getUnifiedPostDate(post);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    if (postDate > oneWeekAgo) {
      return { label: 'New', color: 'bg-green-500' };
    }
    if (source === 'archived') {
      return { label: 'Archive', color: 'bg-neutral-500' };
    }
    return null;
  };

  // Split posts: first 3 and remaining
  const firstThreePosts = visiblePosts.slice(0, 3);
  const remainingPosts = visiblePosts.slice(3);

  const renderPostCard = (post: UnifiedPost, index: number) => {
    const badge = getPostBadge(post);
    const coverImage = getUnifiedPostCoverImage(post);
    
    return (
      <motion.article
        key={getUnifiedPostSlug(post)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.6) }}
        className="group"
      >
        <Link
          href={getPostUrl(post)}
          className="block bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          {/* Cover Image */}
          <div className="relative aspect-video overflow-hidden">
            {coverImage ? (
              <Image
                src={coverImage}
                alt={getUnifiedPostTitle(post)}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
            )}
            
            {/* Source Badge */}
            {badge && (
              <div className={`absolute top-4 right-4 ${badge.color} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                {badge.label}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-3 text-brownDark dark:text-brown group-hover:text-primary transition-colors">
              {getUnifiedPostTitle(post)}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
              {getUnifiedPostBrief(post)}
            </p>

            {/* Meta Info */}
            <p className="text-xs text-neutral-400 dark:text-neutral-600">
              {formatDate(post)}
            </p>
          </div>
        </Link>
      </motion.article>
    );
  };

  return (
    <>
      {/* First 3 Posts */}
      {firstThreePosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {firstThreePosts.map((post, index) => renderPostCard(post, index))}
        </div>
      )}

      {/* Newsletter CTA after first 3 posts */}
      {visiblePosts.length > 0 && (
        <div className="my-16">
          <NewsletterCTA />
        </div>
      )}

      {/* Remaining Posts */}
      {remainingPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {remainingPosts.map((post, index) => {
            return renderPostCard(post, index + 3);
          })}
        </div>
      )}

      {/* Show More Button */}
      {hasMore && (
        <div className="flex justify-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMorePosts}
            disabled={loading}
            className="px-10 py-4 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Loading...
              </span>
            ) : (
              'Show More'
            )}
          </motion.button>
        </div>
      )}

      {/* No Posts */}
      {allPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            No posts found. Check back soon!
          </p>
        </div>
      )}
    </>
  );
}
