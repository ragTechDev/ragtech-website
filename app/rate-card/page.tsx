'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaInstagram, FaSpotify, FaYoutube, FaTiktok,
  FaLinkedin, FaEnvelope, FaUsers, FaMicrophoneAlt, FaHeadphones,
  FaHeart, FaShareAlt,
} from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import RateCardPricing from './RateCardPricing';
import statsData from './platform-stats.json';

const notes = [
  'Prices listed in SGD. USD prices shown at approximate exchange rates and may vary slightly.',
  'All SGD prices exclude GST.',
  'Each package includes one round of revisions unless otherwise stated.',
  'Deliverables are typically ready within 7 to 14 business days after brief approval.',
  'Usage rights included for 6 months from publication. Extended licensing available on request.',
  'We only work with brands and products we genuinely believe in. Content stays authentic to our voice.',
  'Custom packages and barter/gifting arrangements can be discussed.',
  'Newsletter is newly launched. Early-bird rates apply until we reach 500 subscribers — lock in now before rates increase.',
  'Techybara comic carousels feature our original hand-drawn capybara mascot in a tech-world setting. Brand integrations in this format are kept tasteful and story-driven.',
];

const platformIcons = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/ragtechdev/' },
  { icon: FaSpotify,   label: 'Spotify',   href: 'https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d' },
  { icon: FaYoutube,   label: 'YouTube',   href: 'https://www.youtube.com/@ragTechDev' },
  { icon: FaTiktok,    label: 'TikTok',    href: 'https://www.tiktok.com/@ragtechdev' },
  { icon: FaLinkedin,  label: 'LinkedIn',  href: 'https://sg.linkedin.com/company/ragtechdev' },
  { icon: FaHeadphones, label: 'meLISTEN', href: 'https://www.melisten.sg/podcast/playlist/ragTech-3415841' },
];

export default function RateCardPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const copyLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedSection(id);
      setTimeout(() => setCopiedSection(null), 2000);
    });
  };

  const fmt = (n: number) => {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1_000) {
      const v = n / 1_000;
      return v >= 10 ? Math.round(v) + 'K' : v.toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return String(n);
  };
  const pct = (n: number) => `${n.toFixed(1).replace(/\.0$/, '')}%`;
  const toNum = (v: unknown) => v as unknown as number | null;
  const fmtOrDash = (v: unknown): string => {
    const n = toNum(v);
    return n != null && n > 0 ? fmt(n) : '—';
  };
  const pctOrDash = (v: unknown): string => {
    const n = toNum(v);
    return n != null ? pct(n) : '—';
  };

  // ── destructure JSON ──────────────────────────────────────────────────────
  const {
    instagram: {
      followers,
      last_30_days: {
        views: ig30dViews,
        accounts_reached: ig30dReached,
        interactions: ig30dInteractions,
        views_breakdown_by_viewer_type: igViewerBreakdown,
        audience_age_range: igAudienceAge,
        audience_gender: igAudienceGender,
        audience_top_countries: igAudienceCountries,
        content_insights,
      } = {},
    } = {},
    youtube:   { 
      subscribers: ytSubs,        
      engagement_percent: ytEngagement,
      subscriber_age_range: ytAgeRange,
      subscriber_gender: ytGender,
      subscriber_geography: ytGeo,
      last_28_days: {
        views: yt28dViews,
        audience_age_range: ytAudienceAge,
        audience_gender: ytAudienceGender,
        audience_top_geographies: ytAudienceGeo,
      } = {},
      videos_published: { 
        regular: videoCount, 
      } = {} } = {},
    spotify:   { avg_streams_per_episode }                                       = {},
    newsletter:{ subscribers: newsletterSubs }                                   = {},
    tiktok:    {
      followers: ttFollowers,
      avg_views_per_video_last_30_days: ttRaw,
      avg_likes_per_video_last_30_days: ttLikesRaw,
      avg_comments_per_video_last_30_days: ttCommentsRaw,
      avg_shares_per_video_last_30_days: ttSharesRaw,
    } = {},
    professional_credibility: {
      natasha: cred_natasha,
      saloni:  cred_saloni,
      victoria: cred_victoria,
      combined_years_in_tech,
    } = {},
  } = statsData;

  // ── derived metrics ───────────────────────────────────────────────────────
  const reels = content_insights?.reels;
  const posts = content_insights?.posts;

  // avg reel views (last 30d / count published)
  const avgReelViews = reels
    ? Math.round(reels.total_views / reels.total_reels_published)
    : 0;

  // reel engagement rate = (likes + comments + saves + shares) / views × 100
  // note: avg_comments / avg_saves / avg_shares in JSON are stored as 30-day totals
  const reelEngRate = reels
    ? ((reels.total_likes + reels.avg_comments + reels.avg_saves + reels.avg_shares) /
        reels.total_views) * 100
    : 0;

  // post engagement rate = (likes + comments + saves) / reach × 100
  const postEngRate = posts?.total_reach
    ? ((posts.total_likes + posts.total_comments + posts.total_saves) / posts.total_reach) * 100
    : 0;

  // overall IG engagement = interactions / views × 100
  const igEngRate = ig30dViews ? ((ig30dInteractions ?? 0) / ig30dViews) * 100 : 0;

  // TikTok avg metrics from "total/count" stored format
  const parseTtRatio = (raw: unknown) => {
    if (!raw) return 0;
    const [n, d] = String(raw).split('/').map(Number);
    return d ? Math.round(n / d) : n;
  };
  const ttAvgViews    = parseTtRatio(ttRaw);
  const ttAvgLikes    = parseTtRatio(ttLikesRaw);
  const ttAvgComments = parseTtRatio(ttCommentsRaw);
  const ttAvgShares   = parseTtRatio(ttSharesRaw);

  // ── stat cards ────────────────────────────────────────────────────────────
  const stats = [
    {
      label: 'Instagram',
      value: fmt(followers ?? 0),
      sub: `followers • ${fmt(ig30dReached ?? 0)} reached (30d)`,
      // topGeoLabel removed — follower_geography not in JSON
      icons: [{ icon: FaInstagram, color: 'text-pink-500' }],
    },
    {
      label: 'YouTube',
      value: fmt(ytSubs ?? 0),
      sub: `subs • ~${ytEngagement ?? 10}% engagement`,
      icons: [{ icon: FaYoutube, color: 'text-red-500' }],
    },
    {
      label: 'TikTok',
      value: fmt(ttFollowers ?? 0),
      sub: `followers • ~${fmt(ttAvgViews)} avg views`,
      icons: [{ icon: FaTiktok, color: 'text-neutral-700 dark:text-neutral-300' }],
    },
    {
      label: 'Podcast',
      value: videoCount,
      sub: `episodes • ${avg_streams_per_episode ?? 11} avg streams`,
      icons: [{ icon: FaSpotify, color: 'text-green-500' }],
    },
    {
      label: 'Newsletter',
      value: fmt(newsletterSubs ?? 74),
      sub: 'newly launched · early-bird rates',
      icons: [{ icon: FaEnvelope, color: 'text-brownDark' }],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/30 via-white to-secondary/10 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 py-2 px-6 text-center text-xs font-semibold text-brownDark tracking-wide">
        MEDIA KIT & RATE CARD March 2026 &middot; FOR BRAND PARTNERSHIP ENQUIRIES
      </div>

      {/* Header */}
      <header className="py-10 px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/logo/ragtech-logo-rectangle.png"
            alt="ragTech"
            width={220}
            height={60}
            className="h-14 w-auto"
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <p className="text-neutral-500 dark:text-neutral-400 text-sm max-w-md">
            A Singapore-based tech podcast and media brand making technology accessible, fun, and relatable.
          </p>
          <div className="flex gap-4 mt-2">
            {platformIcons.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                className="text-brown hover:text-primary transition-colors duration-300">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 px-6 overflow-hidden bg-gradient-to-br from-accent/40 via-pink-50 to-secondary/30">
        {/* Geometric Background */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brown/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-brown"
          >
            Making technology accessible
          </motion.h2>

          {/* Co-founders Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-4 mb-12 max-w-4xl mx-auto"
          >
            {/* Natasha */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/assets/team/natasha.PNG"
                  alt="Natasha"
                  width={200}
                  height={200}
                  className="w-41 md:w-51 h-auto"
                  style={{ width: 'auto', height: 'auto' }}
                />
                {/* Capybara Mascot */}
                <div className="absolute -bottom-2 -right-2 w-12 h-16 md:w-14 md:h-20">
                  <Image
                    src="/assets/techybara/techybara-holding-mic.png"
                    alt="Mic Capybara"
                    width={280}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Name Label */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full shadow-lg border-2 border-white transform -rotate-2">
                  <p className="font-bold text-sm whitespace-nowrap">Natasha 🚀</p>
                </div>
                {/* Vocation Label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg border-2 border-primary transform rotate-1">
                  <p className="text-xs font-semibold text-brownDark dark:text-brown whitespace-nowrap">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Saloni */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/assets/team/saloni.PNG"
                  alt="Saloni"
                  width={250}
                  height={250}
                  className="w-48 md:w-56 h-auto"
                  style={{ width: 'auto', height: 'auto' }}
                />
                {/* Capybara Mascot */}
                <div className="absolute -bottom-2 -right-2 w-12 h-16 md:w-14 md:h-20">
                  <Image
                    src="/assets/techybara/techybara-holding-laptop.png"
                    alt="Laptop Capybara"
                    width={280}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Name Label */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-2 rounded-full shadow-lg border-2 border-white transform rotate-2">
                  <p className="font-bold text-sm whitespace-nowrap">Saloni 💻</p>
                </div>
                {/* Vocation Label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg border-2 border-secondary transform -rotate-1">
                  <p className="text-xs font-semibold text-brownDark dark:text-brown whitespace-nowrap">Software Developer</p>
                </div>
              </div>
            </div>

            {/* Victoria */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/assets/team/victoria.PNG"
                  alt="Victoria"
                  width={250}
                  height={250}
                  className="w-48 md:w-56 h-auto"
                  style={{ width: 'auto', height: 'auto' }}
                />
                {/* Capybara Mascot */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-14 md:h-14">
                  <Image
                    src="/assets/techybara/techybara-with-two-children.png"
                    alt="Futurenet Capybara"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                {/* Name Label */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-brown px-4 py-2 rounded-full shadow-lg border-2 border-white transform -rotate-1">
                  <p className="font-bold text-sm whitespace-nowrap">Victoria ✨</p>
                </div>
                {/* Vocation Label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg border-2 border-accent transform rotate-2">
                  <p className="text-xs font-semibold text-brownDark dark:text-brown whitespace-nowrap">Solutions Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brown mb-10 max-w-3xl mx-auto"
          >
            We&apos;re three Singapore-based technologists who seek to <span className="font-bold text-brownDark dark:text-primary">demystify technology in human terms</span>, so people can engage with it <span className="font-semibold text-primary dark:text-secondary">thoughtfully</span> rather than passively. Through <span className="font-semibold text-primary dark:text-accent">storytelling, playful learning, and applied research</span>, we help people understand <span className="font-bold text-brownDark dark:text-primary">how tech works</span>, how it affects society, and how to engage with it responsibly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="https://ragtechdev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-neutral-800 text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              Check out Our Website👩‍💻
            </Link>
            <Link
              href="/techie-taboo"
              className="px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🃏Play Techie Taboo!
            </Link>
            <Link
              href="https://www.youtube.com/@ragTechDev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-neutral-800 text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              Watch on YouTube🎙️
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Award */}
      <section className="px-6 pt-10 pb-10 max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/20 rounded-2xl p-8 border-2 border-amber-300 dark:border-amber-600 shadow-lg flex flex-col sm:flex-row items-center gap-8">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-200/30 dark:bg-amber-600/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <Image
            src="/assets/scape-award.jpg"
            alt="Best Podcast Award at the Youth Creator Awards 2026 by *SCAPE"
            width={200}
            height={200}
            className="w-44 h-auto rounded-2xl shrink-0 shadow-xl ring-4 ring-amber-300 dark:ring-amber-600"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
              🏆 Award Winner
            </p>
            <p className="text-2xl font-bold text-brownDark dark:text-brown leading-snug mb-1">
              Best Podcast Award
            </p>
            <p className="text-base text-neutral-700 dark:text-neutral-300 font-medium">
              Youth Creator Awards 2026 by *SCAPE
            </p>
          </div>
        </div>
      </section>

      {/* Stats Grid — 5 columns on lg, 3 on md, 2 on mobile */}
      <section className="px-6 pt-12 pb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat) => (
            <div key={stat.label}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-5 text-center shadow-sm border border-neutral-200 dark:border-neutral-700">
              {'icons' in stat && stat.icons && (
                <div className="flex justify-center gap-2 mb-2">
                  {stat.icons.map(({ icon: Icon, color }, i) => (
                    <Icon key={i} className={`${color} text-2xl`} />
                  ))}
                </div>
              )}
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="font-semibold text-sm text-brownDark dark:text-brown">{stat.label}</p>
              <p className="text-xs text-neutral-400">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown mb-2">ragTech Channel Analytics</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Last updated March 2026</p>
        </div>

        {/* Instagram + YouTube: big cards with demographics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Instagram */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaInstagram className="text-pink-500 text-xl" />
                <span className="font-bold text-brownDark dark:text-brown text-base">Instagram</span>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary">{fmt(followers ?? 0)}</p>
                <p className="text-xs text-neutral-400">followers</p>
              </div>
            </div>
            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-4 mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Reach (Last 30 Days)</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Accounts Reached',   value: fmt(ig30dReached ?? 0) },
                  { label: 'Non-follower Views',  value: pct(igViewerBreakdown?.non_followers_percent ?? 0) },
                  { label: 'Total Views',         value: fmt(ig30dViews ?? 0) },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-bold text-primary text-sm">{value}</p>
                    <p className="text-xs text-neutral-400 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-4 mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Avg per Reel (Last 30 Days) · {pct(reelEngRate)} engagement</p>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: 'Views',  value: fmt(avgReelViews) },
                  { label: 'Likes',  value: fmt(reels ? Math.round(reels.total_likes / reels.total_reels_published) : 0) },
                  { label: 'Saves',  value: fmt(reels ? Math.round((reels.avg_saves as number) / reels.total_reels_published) : 0) },
                  { label: 'Shares', value: fmt(reels ? Math.round((reels.avg_shares as number) / reels.total_reels_published) : 0) },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-bold text-primary text-sm">{value}</p>
                    <p className="text-xs text-neutral-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Audience (Last 30 Days)</p>
              <p className="text-xs text-neutral-400 mb-3">Based on content reach</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-400 mb-2">Age</p>
                  <div className="space-y-1.5">
                    {Object.entries(igAudienceAge ?? {}).sort(([, a], [, b]) => (b as number) - (a as number)).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="text-xs text-neutral-400 w-10 shrink-0">{key.replace('_percent', '').replace('_plus', '+')}</span>
                        <div className="flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: `${val}%` }} />
                        </div>
                        <span className="text-xs font-semibold w-8 text-right">{pct(val as number)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-1.5">Gender</p>
                  <p className="text-sm mb-3">
                    M <span className="font-bold text-primary">{pct(igAudienceGender?.male_percent ?? 0)}</span>
                    <span className="text-neutral-300 dark:text-neutral-600 mx-1.5">/</span>
                    F <span className="font-bold text-primary">{pct(igAudienceGender?.female_percent ?? 0)}</span>
                  </p>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <p className="text-xs text-neutral-400">Top Countries</p>
                    <span className="text-xs text-primary font-semibold">We have global reach</span>
                  </div>
                  <div className="space-y-1">
                    {Object.entries(igAudienceCountries ?? {}).sort(([, a], [, b]) => (b as number) - (a as number)).slice(0, 4).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-neutral-500 capitalize">{key.replace('_percent', '').replace(/_/g, ' ')}</span>
                        <span className="font-semibold text-brownDark dark:text-brown">{pct(val as number)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FaYoutube className="text-red-500 text-xl" />
                <span className="font-bold text-brownDark dark:text-brown text-base">YouTube</span>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary">{fmt(ytSubs ?? 0)}</p>
                <p className="text-xs text-neutral-400">subscribers</p>
              </div>
            </div>
            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-4 mb-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">Engagement (Last 28 Days)</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Total Views',     value: fmt(yt28dViews ?? 0) },
                  { label: 'Engagement Rate', value: `~${ytEngagement ?? 10}%` },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-bold text-primary text-sm">{value}</p>
                    <p className="text-xs text-neutral-400">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">Audience (Last 28 Days)</p>
              <p className="text-xs text-neutral-400 mb-3">Based on content views</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-neutral-400 mb-2">Age</p>
                  <div className="space-y-1.5">
                    {Object.entries(ytAudienceAge ?? {}).filter(([, val]) => (val as number) > 0).sort(([, a], [, b]) => (b as number) - (a as number)).map(([key, val]) => (
                      <div key={key} className="flex items-center gap-2">
                        <span className="text-xs text-neutral-400 w-10 shrink-0">{key.replace('_percent', '').replace('_plus', '+')}</span>
                        <div className="flex-1 bg-neutral-100 dark:bg-neutral-700 rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: `${val}%` }} />
                        </div>
                        <span className="text-xs font-semibold w-8 text-right">{pct(val as number)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-neutral-400 mb-1.5">Gender</p>
                  <p className="text-sm mb-3">
                    M <span className="font-bold text-primary">{pct(ytAudienceGender?.male_percent ?? 0)}</span>
                    <span className="text-neutral-300 dark:text-neutral-600 mx-1.5">/</span>
                    F <span className="font-bold text-primary">{pct(ytAudienceGender?.female_percent ?? 0)}</span>
                  </p>
                  <p className="text-xs text-neutral-400 mb-1.5">Top Countries</p>
                  <div className="space-y-1">
                    {Object.entries(ytAudienceGeo ?? {}).sort(([, a], [, b]) => (b as number) - (a as number)).slice(0, 5).map(([key, val]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-neutral-500 capitalize">{key.replace('_percent', '').replace(/_/g, ' ')}</span>
                        <span className="font-semibold text-brownDark dark:text-brown">{pct(val as number)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Smaller platform cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {/* TikTok */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FaTiktok className="text-neutral-700 dark:text-neutral-300 text-lg" />
              <span className="font-bold text-brownDark dark:text-brown text-sm">TikTok</span>
            </div>
            <p className="text-2xl font-bold text-primary">{fmt(ttFollowers ?? 0)}</p>
            <p className="text-xs text-neutral-400 mb-3">followers</p>
            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-3">
              <p className="text-xs text-neutral-400 mb-2">Avg per video</p>
              <div className="space-y-1.5">
                {[
                  { label: 'Views',    value: fmt(ttAvgViews) },
                  { label: 'Likes',    value: fmt(ttAvgLikes) },
                  { label: 'Comments', value: fmt(ttAvgComments) },
                  { label: 'Shares',   value: fmt(ttAvgShares) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-xs">
                    <span className="text-neutral-500">{label}</span>
                    <span className="font-semibold text-primary">{value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-neutral-400 mt-2 pt-2 border-t border-neutral-100 dark:border-neutral-700">93% MoM follower growth</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FaLinkedin className="text-blue-600 text-lg" />
              <span className="font-bold text-brownDark dark:text-brown text-sm">LinkedIn</span>
            </div>
            <p className="text-2xl font-bold text-primary">375</p>
            <p className="text-xs text-neutral-400">followers</p>
          </div>

          {/* Spotify */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FaSpotify className="text-green-500 text-lg" />
              <span className="font-bold text-brownDark dark:text-brown text-sm">Spotify</span>
            </div>
            <p className="text-2xl font-bold text-primary">150</p>
            <p className="text-xs text-neutral-400 mb-3">listeners</p>
            <div className="border-t border-neutral-100 dark:border-neutral-700 pt-3 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500">Episodes</span>
                <span className="font-semibold text-primary">47</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-neutral-500">Avg streams</span>
                <span className="font-semibold text-primary">{avg_streams_per_episode ?? 11}</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <FaEnvelope className="text-brownDark dark:text-brown text-lg" />
              <span className="font-bold text-brownDark dark:text-brown text-sm">Newsletter</span>
            </div>
            <p className="text-2xl font-bold text-primary">{fmt(newsletterSubs ?? 0)}</p>
            <p className="text-xs text-neutral-400">subscribers</p>
            <p className="text-xs text-neutral-400 mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-700">Newly launched · early-bird rates</p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="px-6 pb-16 max-w-3xl mx-auto text-center">
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-base">
          ragTech runs a vodcast (video podcast) covering AI, careers, startups, and life in tech.
          Episodes drop on YouTube, Spotify, Apple Music, and Amazon Music—reaching curious, tech-adjacent
          listeners and viewers across Singapore and beyond. Our audience are young professionals who care
          about staying informed without the jargon.
        </p>
      </section>

      {/* Content Samples */}
      <section id="showcase" className="px-6 pb-16 max-w-6xl mx-auto">
        <button
          onClick={() => setGalleryOpen(o => !o)}
          className="w-full flex flex-col items-center cursor-pointer mb-6 group"
        >
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown text-center">
              Showcase Gallery
              <span className="ml-3 text-lg text-neutral-400 group-hover:text-primary transition-colors">{galleryOpen ? '▲' : '▼'}</span>
            </h2>
            <button
              onClick={(e) => { e.stopPropagation(); copyLink('showcase'); }}
              aria-label="Copy link to Showcase Gallery"
              className="text-neutral-300 hover:text-primary dark:text-neutral-600 dark:hover:text-primary transition-colors duration-200 mt-1 shrink-0"
            >
              {copiedSection === 'showcase' ? (
                <span className="text-xs font-semibold text-primary">Copied!</span>
              ) : (
                <HiLink className="text-xl" />
              )}
            </button>
          </div>
          <p className="text-xs text-neutral-400 mt-2">{galleryOpen ? 'Click to collapse' : 'Click to expand'}</p>
        </button>
        {galleryOpen && <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">✏️ Techybara Carousel</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">3.2K views · 36 likes · 5 reposts</p>
            <iframe
              src="https://www.instagram.com/p/DTrKfy_ElFI/embed/"
              className="rounded-2xl"
              style={{ width: '320px', maxWidth: '100%', minHeight: '560px', border: 'none' }}
              loading="lazy"
              title="Techybara Carousel"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">📱 Instagram Reel</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">328K views · 12K likes · 189 reposts</p>
            <iframe
              src="https://www.instagram.com/reel/DUuH2KdEjNV/embed/"
              className="rounded-2xl"
              style={{ width: '320px', maxWidth: '100%', minHeight: '560px', border: 'none' }}
              loading="lazy"
              title="Instagram Reel"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">🎙️ Vodcast Episode</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">1.3K views · 22 likes · 10 comments</p>
            <iframe
              src="https://www.youtube.com/embed/qw3dKhXV6Vw"
              className="w-full rounded-2xl"
              style={{ height: '232px', border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="Vodcast Episode"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">🎧 Spotify Episode</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">38 streams · 47 plays</p>
            <iframe
              src="https://open.spotify.com/embed/episode/3yxekAGUq2o64KXdrs5CRN"
              className="w-full rounded-2xl"
              style={{ height: '232px', border: 'none' }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Episode"
            />
          </div>
        </div>}
      </section>

      {/* Why Partner With Us */}
      <section id="why-partner" className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown">
                Why partner with us?
              </h2>
              <button
                onClick={() => copyLink('why-partner')}
                aria-label="Copy link to Why Partner With Us"
                className="text-neutral-300 hover:text-primary dark:text-neutral-600 dark:hover:text-primary transition-colors duration-200 mt-1 shrink-0"
              >
                {copiedSection === 'why-partner' ? (
                  <span className="text-xs font-semibold text-primary">Copied!</span>
                ) : (
                  <HiLink className="text-xl" />
                )}
              </button>
            </div>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
              We&apos;re not a media company. We&apos;re three working software engineers and solutions
              engineers who started a podcast because no one was talking about tech the way real people in
              tech actually talk about it. All three hosts are women practising in engineering roles,
              bringing authentic credibility to every conversation.
            </p>
          </div>

          {/* Audience Profile */}
          <div className="bg-gradient-to-r from-accent/40 to-secondary/20 rounded-2xl p-6 mb-6 border border-accent/40">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              Who listens to us
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                'Software Engineers', 'Developers', 'Solutions Engineers',
                'Startup Founders', 'Tech Community Members', 'Career Switchers into Tech',
                'Non-techies who work with tech', 'AI Enthusiasts',
              ].map(tag => (
                <span key={tag}
                  className="bg-white dark:bg-neutral-800 text-brownDark dark:text-brown text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-neutral-400">
              Primarily Singapore-based &middot; Ages 22–35 &middot; Early to mid-career in tech
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              {
                icon: FaMicrophoneAlt, bg: 'bg-primary/10', color: 'text-primary',
                title: 'Three women engineers',
                body: 'Natasha, Saloni, and Victoria are all working software engineers and solutions engineers. We represent the demographic that tech brands want to reach but rarely find in media. Our audience trusts us because we\'re actively shipping code and solving real-world tech problems.',
              },
              {
                icon: FaUsers, bg: 'bg-secondary/10', color: 'text-secondary',
                title: 'Niche, engaged community',
                body: 'Our audience is Singapore\'s tech professional community: engineers, founders, and people navigating tech careers. They research before buying and they trust what we say because we\'re one of them.',
              },
              {
                icon: FaShareAlt, bg: 'bg-accent/40', color: 'text-brownDark',
                title: 'Cross-platform presence',
                body: 'One partnership can span podcast, YouTube, Instagram, TikTok, LinkedIn, and newsletter. Your brand reaches our audience on whatever platform they\'re on, in formats that fit naturally.',
              },
              {
                icon: FaHeart, bg: 'bg-primary/10', color: 'text-primary',
                title: 'Authentic by design',
                body: `${videoCount} episodes of real talk about AI, careers, burnout, and startups. Sponsored content only works here when it fits the conversation. We'll say no to partnerships that don't align, which is exactly why the ones we do say yes to land.`,
              },
            ].map(({ icon: Icon, bg, color, title, body }) => (
              <div key={title}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`${color} text-lg`} />
                  </div>
                  <h3 className="font-bold text-brownDark dark:text-brown">{title}</h3>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          {/* Hosts */}
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              Meet the hosts · {combined_years_in_tech ?? 20}+ combined years in tech
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { key: 'natasha',  cred: cred_natasha,  photo: '/assets/team/natasha.PNG',  name: 'Natasha Ann Lum' },
                { key: 'saloni',   cred: cred_saloni,   photo: '/assets/team/saloni.PNG',   name: 'Saloni Kaur' },
                { key: 'victoria', cred: cred_victoria, photo: '/assets/team/victoria.PNG', name: 'Victoria Lo' },
              ].map(({ key, cred, photo, name }) => (
                <div key={key} className="bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700 shadow-sm flex flex-col items-center text-center gap-3">
                  <Image src={photo} alt={name} width={80} height={80} className="w-20 h-20 rounded-full object-cover ring-2 ring-secondary" />
                  <div>
                    <p className="font-bold text-brownDark dark:text-brown text-sm">{name}</p>
                    <p className="text-xs text-primary font-medium capitalize mt-0.5">{(cred as { role_title?: string })?.role_title}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{(cred as { company?: string })?.company}</p>
                  </div>
                  <div className="w-full border-t border-neutral-100 dark:border-neutral-700 pt-3 space-y-1">
                    <p className="text-xs text-neutral-500"><span className="font-semibold text-brownDark dark:text-brown">{(cred as { years_in_tech_overall?: number })?.years_in_tech_overall} yrs</span> in tech</p>
                    <p className="text-xs text-neutral-400">{(cred as { key_specialties_languages?: string })?.key_specialties_languages}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Techybara */}
          <div className="bg-gradient-to-r from-accent/50 to-primary/10 rounded-2xl p-6 mb-6 border border-accent/50">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              ✏️ Meet Techybara — our original mascot
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Image
                src="/assets/techybara/techybara-holding-laptop.png"
                alt="Techybara mascot"
                width={120}
                height={120}
                className="w-28 h-auto shrink-0"
              />
              <div>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-3">
                  Techybara is our hand-drawn capybara mascot who navigates the world of tech. The comic carousel format has quickly become one of our most shareable content types.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  Brand integrations are story-led: Techybara encounters your product in a relatable tech scenario. We also offer standard carousel formats (listicles, guides, tip cards).
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                'Techybara comic carousel', 'Educational carousel',
                'Listicle carousel', 'Product spotlight carousel',
              ].map(tag => (
                <span key={tag}
                  className="bg-white/80 dark:bg-neutral-800 text-brownDark dark:text-brown text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Topics */}
          <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              Topics we cover
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'AI & LLMs', 'Vibe Coding', 'Career Growth', 'Imposter Syndrome',
                'Women in Tech', 'Startups & Fundraising', 'System Design', 'Open Source',
                'Tech Interviews', 'Financial Freedom', 'Work-Life Balance',
                'Hiring & Recruiting', 'Software Engineering', 'Personal Branding in Tech',
              ].map(topic => (
                <span key={topic}
                  className="bg-white dark:bg-neutral-700 text-xs text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-600">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Engagement Quality */}
          <div className="bg-gradient-to-br from-secondary/30 to-accent/20 rounded-2xl p-8 border border-secondary/40">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              Quality over vanity metrics
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4">
              We don&apos;t chase follower counts; we drive engagement. In the last 30 days, our ragTech
              Instagram reached <strong>{fmt(ig30dReached ?? 0)} accounts</strong> and generated{' '}
              <strong>{fmt(ig30dInteractions ?? 0)} interactions</strong>. Here&apos;s how our channels
              compare to industry benchmarks:
            </p>
            <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 text-sm mb-4 space-y-1.5">
              <li>
                Instagram Reels: <strong>{pct(reelEngRate)}</strong> engagement rate (benchmark 3–6%)
                <span className="text-xs text-neutral-400 ml-1">
                  — (likes + comments + saves + shares) ÷ views
                </span>
              </li>
              <li>
                Instagram overall: <strong>{pct(igEngRate)}</strong> interactions-to-views rate
              </li>
              <li>
                Instagram posts: <strong>{pct(postEngRate)}</strong> engagement rate (benchmark 1–3%)
                <span className="text-xs text-neutral-400 ml-1">
                  — (likes + comments + saves) ÷ reach
                </span>
              </li>
              <li>YouTube: ~<strong>{ytEngagement ?? 10}%</strong> engagement (benchmark 2–4%)</li>
              <li>Podcast: ~<strong>15%</strong> of subscriber base per episode (benchmark 8–10%)</li>
              <li>Newsletter: newly launched — building fast, early-bird rates available now</li>
            </ul>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
              Brands working with us see higher-than-average engagement because our audience is both niche
              and active. We surface real people talking about real tech.
            </p>
          </div>

        </div>
      </section>

      {/* Pricing */}
      <RateCardPricing />

      {/* Notes */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown mb-2 text-center">
          Terms &amp; Notes
        </h2>
        <ul className="mt-6 space-y-3">
          {notes.map((note, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <span className="text-primary font-bold shrink-0 mt-0.5">{i + 1}.</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}