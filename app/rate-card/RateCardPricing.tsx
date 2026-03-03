'use client';

import { useState } from 'react';
import {
  FaInstagram,
  FaSpotify,
  FaCheckCircle,
} from 'react-icons/fa';
import { HiNewspaper, HiStar } from 'react-icons/hi';

type Currency = 'SGD' | 'USD';

const instagramPackages = [
  {
    name: 'Static Post',
    sgd: 'S$250', usd: 'US$185',
    description: 'Branded feed post with caption and tags. Permanent on your feed.',
    includes: ['1 high-quality static image', 'Custom caption', '1 revision round', 'Insight screenshot after 7 days'],
  },
  {
    name: 'Stories (3-pack)',
    sgd: 'S$150', usd: 'US$110',
    description: 'Three-frame story sequence with your brand mention.',
    includes: ['3 story frames', 'Link sticker (if eligible)', 'Brand mention', '24-hour visibility'],
  },
  {
    name: 'Reel',
    sgd: 'S$450', usd: 'US$330',
    description: 'Short-form video with organic, native integration of your product or service.',
    includes: ['30-60 second reel', 'Caption and hashtags', '1 revision round', 'Insight screenshot after 14 days'],
  },
];

const podcastPackages = [
  {
    name: 'Pre/Post Roll Mention',
    sgd: 'S$200', usd: 'US$150',
    description: 'A 15-30 second scripted read at the top or end of an episode.',
    includes: ['Host-read ad copy', 'Episode show notes mention', 'Shared across Spotify & Apple Podcasts'],
  },
  {
    name: 'Mid-Roll Ad',
    sgd: 'S$450', usd: 'US$335',
    description: 'A 60-second mid-episode sponsor read with natural integration.',
    includes: ['Host-read 60s script', 'Link in show notes', 'Pinned in episode description', 'Mention on social media'],
  },
  {
    name: 'Episode Integration',
    sgd: 'S$800', usd: 'US$600',
    description: 'Full episode with your brand, product, or topic woven into the conversation.',
    includes: ['Topic co-developed with your brief', 'Natural mention throughout episode', 'Social media clip', 'Blog cross-post', 'Show notes feature'],
  },
];

const blogPackages = [
  {
    name: 'Blog Sponsored Post',
    sgd: 'S$250', usd: 'US$185',
    description: 'A written post on ragtechdev.com covering your product, service, or topic.',
    includes: ['500-800 word original article', 'SEO-friendly structure', 'Shared on social media', 'Permanent on-site hosting'],
  },
  {
    name: 'Newsletter Feature',
    sgd: 'S$140', usd: 'US$105',
    description: 'A dedicated mention or feature section in our newsletter to our subscriber base.',
    includes: ['Branded callout block', 'Link to your page', 'Single broadcast send'],
  },
];

const bundles = [
  {
    name: 'Starter Pack',
    sgd: 'S$360', usd: 'US$265',
    origSgd: 'S$450', origUsd: 'US$335',
    savingSgd: 'Save S$90', savingUsd: 'Save US$70',
    color: 'from-primary/20 to-accent/20',
    borderColor: 'border-primary/40',
    items: ['1x Instagram Static Post', '1x Podcast Pre/Post Roll Mention'],
    ideal: 'Brand awareness on a budget',
  },
  {
    name: 'Content Pack',
    sgd: 'S$920', usd: 'US$680',
    origSgd: 'S$1,150', origUsd: 'US$855',
    savingSgd: 'Save S$230', savingUsd: 'Save US$175',
    color: 'from-secondary/20 to-accent/20',
    borderColor: 'border-secondary/40',
    items: ['1x Instagram Reel', '1x Podcast Mid-Roll Ad', '1x Blog Sponsored Post'],
    ideal: 'Multi-platform reach with content assets',
    featured: true,
  },
  {
    name: 'Full Media Kit',
    sgd: 'S$1,200', usd: 'US$890',
    origSgd: 'S$1,540', origUsd: 'US$1,145',
    savingSgd: 'Save S$340', savingUsd: 'Save US$255',
    color: 'from-brownDark/10 to-primary/20',
    borderColor: 'border-brownDark/30',
    items: ['1x Instagram Reel', '1x Instagram Stories (3-pack)', '1x Podcast Episode Integration', '1x Newsletter Feature'],
    ideal: 'Maximum exposure across all channels',
  },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown mb-2 text-center">
      {children}
    </h2>
  );
}

function PriceCard({
  name, price, description, includes,
}: {
  name: string; price: string; description: string; includes: string[];
}) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">{name}</p>
        <p className="text-3xl font-bold text-brownDark dark:text-brown">{price}</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">{description}</p>
      </div>
      <ul className="space-y-2 mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <FaCheckCircle className="text-secondary mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RateCardPricing() {
  const [currency, setCurrency] = useState<Currency>('SGD');
  const isSGD = currency === 'SGD';

  return (
    <div>
      {/* Currency Toggle */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full p-1 border border-neutral-200 dark:border-neutral-700 shadow-sm">
          <span className="text-xs text-neutral-400 px-3 font-medium">Currency:</span>
          <button
            onClick={() => setCurrency('SGD')}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              isSGD
                ? 'bg-brownDark text-white shadow'
                : 'text-neutral-500 hover:text-brownDark'
            }`}
          >
            SGD
          </button>
          <button
            onClick={() => setCurrency('USD')}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              !isSGD
                ? 'bg-brownDark text-white shadow'
                : 'text-neutral-500 hover:text-brownDark'
            }`}
          >
            USD
          </button>
        </div>
      </div>

      {/* Instagram Pricing */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaInstagram className="text-primary text-2xl" />
            <SectionTitle>Instagram</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-8">3.8K followers &middot; Tech niche &middot; Singapore</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {instagramPackages.map((pkg) => (
              <PriceCard key={pkg.name} name={pkg.name} price={isSGD ? pkg.sgd : pkg.usd} description={pkg.description} includes={pkg.includes} />
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Pricing */}
      <section className="px-6 pb-16 bg-gradient-to-br from-secondary/10 to-transparent py-16 rounded-3xl mx-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaSpotify className="text-secondary text-2xl" />
            <SectionTitle>Podcast: Bytes &amp; Banter</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-8">Available on Spotify, Apple Podcasts &amp; Amazon Music</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {podcastPackages.map((pkg) => (
              <PriceCard key={pkg.name} name={pkg.name} price={isSGD ? pkg.sgd : pkg.usd} description={pkg.description} includes={pkg.includes} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Newsletter Pricing */}
      <section className="px-6 pb-16 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HiNewspaper className="text-accent text-2xl" />
            <SectionTitle>Blog &amp; Newsletter</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-8">Written content that lives permanently on ragtechdev.com</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {blogPackages.map((pkg) => (
              <PriceCard key={pkg.name} name={pkg.name} price={isSGD ? pkg.sgd : pkg.usd} description={pkg.description} includes={pkg.includes} />
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section className="px-6 pb-16 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16 mx-4 rounded-3xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <HiStar className="text-primary text-2xl" />
            <SectionTitle>Bundle Packages</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-8">Mix channels for better reach at a discounted rate</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bundles.map((bundle) => (
              <div
                key={bundle.name}
                className={`relative bg-gradient-to-br ${bundle.color} rounded-2xl p-6 border-2 ${bundle.borderColor} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {bundle.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-brownDark text-xs font-bold px-4 py-1 rounded-full shadow">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">{bundle.name}</p>
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-brownDark dark:text-brown">
                      {isSGD ? bundle.sgd : bundle.usd}
                    </p>
                    <p className="text-sm line-through text-neutral-400">
                      {isSGD ? bundle.origSgd : bundle.origUsd}
                    </p>
                  </div>
                  <span className="inline-block text-xs font-semibold text-secondary bg-secondary/20 px-2 py-0.5 rounded-full mt-1">
                    {isSGD ? bundle.savingSgd : bundle.savingUsd}
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2">Ideal for: {bundle.ideal}</p>
                </div>
                <ul className="space-y-2 mt-auto pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  {bundle.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                      <FaCheckCircle className="text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
