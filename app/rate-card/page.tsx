'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaInstagram, FaSpotify, FaYoutube, FaTiktok,
  FaLinkedin, FaEnvelope, FaUsers, FaMicrophoneAlt,
  FaHeart, FaShareAlt,
} from 'react-icons/fa';
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
];

export default function RateCardPage() {

  const fmt = (n: number) => {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1_000) {
      const v = n / 1_000;
      return v >= 10 ? Math.round(v) + 'K' : v.toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return String(n);
  };
  const pct = (n: number) => `${n.toFixed(1).replace(/\.0$/, '')}%`;

  // ── destructure JSON ──────────────────────────────────────────────────────
  const {
    instagram: {
      followers,
      follower_geography,
      last_30_days: {
        views: ig30dViews,
        followers_gained: ig30dFollows,
        accounts_reached: ig30dReached,
        interactions: ig30dInteractions,
        content_insights,
      } = {},
    } = {},
    youtube:   { 
      subscribers: ytSubs,        
      engagement_percent: ytEngagement, 
      videos_published: { 
        regular: videoCount, 
      } = {} } = {},
    spotify:   { avg_streams_per_episode }                                       = {},
    newsletter:{ subscribers: newsletterSubs }                                   = {},
    tiktok:    { followers: ttFollowers, avg_views_per_video_last_30_days: ttRaw } = {},
    natasha: {
      instagram: {
        followers: natashaIgF,
        views_30d: natasha30dViews,        // ← correct: reads from natasha.instagram.views_30d = 576975
        accounts_reached_last_30_days: natashaReached,
      } = {},
      tiktok: {
        followers: natashaTtF,
        video_views_last_30_days: natashaTt30d,
      } = {},
      linkedin: {
        followers: natashaLiF,
      } = {},
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

  // TikTok avg views from "22000/17" stored format
  const ttAvgViews = ttRaw
    ? (() => {
        const [num, denom] = String(ttRaw).split('/').map(Number);
        return denom ? Math.round(num / denom) : num;
      })()
    : 0;

  // Natasha aggregates
  const natashaTotal       = (natashaIgF ?? 0) + (natashaTtF ?? 0) + (natashaLiF ?? 0);
  const combinedReached    = (ig30dReached ?? 0) + (natashaReached ?? 0);
  const combined30dViews   = (ig30dViews ?? 0)   + (natasha30dViews ?? 0) + (natashaTt30d ?? 0);

  // Top IG geography
  const topGeoEntry = follower_geography
    ? Object.entries(follower_geography).sort(([, a], [, b]) => (b as number) - (a as number))[0]
    : null;
  const topGeoLabel = topGeoEntry
    ? `${(topGeoEntry[0] as string).replace('_percent', '')} ${pct(topGeoEntry[1] as number)}`
    : '';

  // ── stat cards ────────────────────────────────────────────────────────────
  const stats = [
    {
      label: 'Instagram',
      value: fmt(followers ?? 0),
      sub: `followers${topGeoLabel ? ` • top: ${topGeoLabel}` : ''}`,
      icons: [{ icon: FaInstagram, color: 'text-pink-500' }],
    },
    {
      label: '30‑day IG views',
      value: fmt(ig30dViews ?? 0),
      sub: `${pct(igEngRate)} eng • ${fmt(ig30dReached ?? 0)} reached`,
      icons: [{ icon: FaInstagram, color: 'text-pink-500' }],
    },
    {
      label: '30‑day IG gains',
      value: fmt(ig30dFollows ?? 0),
      sub: 'new followers in 30 days',
      icons: [{ icon: FaInstagram, color: 'text-pink-500' }],
    },
    {
      label: 'Reels avg views',
      value: fmt(avgReelViews),
      sub: `${pct(reelEngRate)} reel eng rate`,
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
    {
      label: 'Natasha reach',
      value: fmt(natashaTotal),
      sub: `total followers • ${fmt(natasha30dViews ?? 0)} 30d views`,
      icons: [{ icon: FaUsers, color: 'text-primary' }],
    },
    {
      label: 'Combined 30d views',
      value: fmt(combined30dViews),
      sub: `ragTech + Natasha • ${fmt(combinedReached)} reached`,
      icons: [
        { icon: FaInstagram, color: 'text-pink-500' },
        { icon: FaTiktok, color: 'text-neutral-700 dark:text-neutral-300' },
      ],
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
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden bg-gradient-to-br from-accent/40 via-pink-50 to-secondary/30">
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
      <section className="px-6 pb-16 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown mb-2">
            Showcase Gallery
          </h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Carousels, reels, and vodcast episodes — this is what brands are buying into
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">✏️ Techybara Carousel</p>
            <iframe
              src="https://www.instagram.com/p/DTrKfy_ElFI/embed/"
              className="w-full rounded-2xl"
              style={{ minHeight: '560px', border: 'none' }}
              loading="lazy"
              title="Techybara Carousel"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">📱 Instagram Reel</p>
            <iframe
              src="https://www.instagram.com/reel/DUuH2KdEjNV/embed/"
              className="w-full rounded-2xl"
              style={{ minHeight: '560px', border: 'none' }}
              loading="lazy"
              title="Instagram Reel"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">🎙️ Vodcast Episode</p>
            <iframe
              src="https://www.youtube.com/embed/qw3dKhXV6Vw"
              className="w-full rounded-2xl aspect-video"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              title="Vodcast Episode"
            />
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mt-2">🎧 Spotify Episode</p>
            <iframe
              src="https://open.spotify.com/embed/episode/3NxOo4Tmeo4avUkJVCjlw1"
              className="w-full rounded-2xl"
              style={{ height: '152px', border: 'none' }}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Episode"
            />
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown mb-3">
              Why partner with us?
            </h2>
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
                  A few months ago we launched a hand-drawn comic carousel series starring Techybara, our capybara
                  mascot who navigates the world of tech. The format has quickly become one of our most shareable
                  content types.
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  Brand integrations in the Techybara universe are story-led and highly native — Techybara
                  encounters your product as part of a relatable tech scenario, making the placement feel organic
                  rather than promotional. We also offer standard carousel formats (listicles, guides, tip cards)
                  for brands that prefer a more informational approach.
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

          {/* Natasha Add-on */}
          <div className="mt-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/30">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
              Natasha amplification add-on
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-3">
              Natasha has significant personal reach —{' '}
              <strong>{fmt(natashaTotal)} total followers</strong> across Instagram ({fmt(natashaIgF ?? 0)}),
              TikTok ({fmt(natashaTtF ?? 0)}), and LinkedIn ({fmt(natashaLiF ?? 0)}) — generating over{' '}
              <strong>{fmt(natasha30dViews ?? 0)} views in 30 days</strong> on Instagram alone, with{' '}
              <strong>{fmt(natashaReached ?? 0)} accounts reached</strong>. She receives frequent direct
              partnership requests but keeps her personal profiles organic, preferring to channel brand
              collaborations through ragTech.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-3">
              Activating the Natasha add-on gives your campaign a combined reach of{' '}
              <strong>{fmt(combinedReached)} accounts</strong> in 30 days and{' '}
              <strong>{fmt(combined30dViews)} combined 30-day views</strong> across ragTech and Natasha&apos;s
              channels — a meaningful amplifier beyond ragTech&apos;s own audience.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
              Add-on options: add Natasha as a collaborator on ragTech Instagram posts (exposing the
              collaboration to her follower base), feature her as a creator in the content, or co-host a
              dedicated podcast or vodcast episode.
            </p>
            <a
              href="#natasha-amplification"
              className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-primary hover:underline"
            >
              See Natasha add-on pricing ↓
            </a>
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