'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { UnifiedPost } from '@/lib/posts-client';
import { getUnifiedPostTitle, getUnifiedPostCoverImage } from '@/lib/posts-client';

interface RecommendedArticlesProps {
  articles: UnifiedPost[];
  isNewsletter?: boolean;
}

export default function RecommendedArticles({ articles, isNewsletter = false }: RecommendedArticlesProps) {
  if (articles.length === 0) return null;

  // Newsletter version: Simple grid with cover images and links
  if (isNewsletter) {
    return (
      <div className="recommended-articles-newsletter" style={{ marginTop: '32px', marginBottom: '32px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>
          Recommended Articles
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {articles.map((article) => {
            const coverImage = getUnifiedPostCoverImage(article);
            const title = getUnifiedPostTitle(article);
            const slug = article.slug;
            
            return (
              <a
                key={slug}
                href={`https://ragtechdev.com/blog/${slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                {coverImage && (
                  <img
                    src={coverImage}
                    alt={title}
                    style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '8px' }}
                  />
                )}
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#333', margin: 0 }}>
                  {title}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  // Web version: Rich interactive cards
  return (
    <div className="mt-16 mb-12">
      <h3 className="text-2xl md:text-3xl font-bold text-brownDark dark:text-brown mb-8 text-center">
        Recommended Articles
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => {
          const coverImage = getUnifiedPostCoverImage(article);
          const title = getUnifiedPostTitle(article);
          const slug = article.slug;
          const brief = 'brief' in article ? article.brief : '';

          return (
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${slug}`}
                className="group block bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {coverImage && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={coverImage}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h4 className="text-lg font-bold text-brownDark dark:text-brown mb-2 group-hover:text-primary transition-colors">
                    {title}
                  </h4>
                  {brief && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                      {brief}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
