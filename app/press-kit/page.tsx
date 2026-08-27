'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaInstagram, FaSpotify, FaYoutube, FaTiktok, FaLinkedin,
  FaEnvelope, FaDownload, FaArrowRight,
} from 'react-icons/fa';
import statsData from '../rate-card/platform-stats.json';

// Real figures pulled straight from the rate-card stats so this page never drifts.
const ig = statsData.instagram;
const monthlyViews: number = ig.last_30_days.views;
const reelEngagement: number = ig.last_30_days.content_insights.reels.engagement_rate_percent;
const combinedFollowers: number = [
  statsData.instagram.followers,
  statsData.youtube.subscribers,
  statsData.tiktok.followers,
  statsData.linkedin.followers,
  statsData.spotify.followers,
].reduce((a, b) => a + (b || 0), 0);

const fmt = (n: number) => {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000) {
    const v = n / 1_000;
    return v >= 10 ? Math.round(v) + 'K' : v.toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return String(n);
};

const platforms = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/ragtechdev/' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@ragTechDev' },
  { icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@ragtechdev' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://sg.linkedin.com/company/ragtechdev' },
  { icon: FaSpotify, label: 'Spotify', href: 'https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d' },
];

const ytViews: number = (statsData.youtube as { views?: number }).views || 0;
const stats = [
  { value: fmt(ytViews) + '+', label: 'lifetime views on YouTube', sub: '985 subscribers and climbing' },
  { value: fmt(monthlyViews) + '+', label: 'views in a standout month', sub: 'Instagram, at our peak' },
  { value: 'up to ' + reelEngagement + '%', label: 'reel engagement', sub: 'on our top-performing reels' },
  { value: fmt(combinedFollowers) + '+', label: 'community across platforms', sub: 'and now on meLISTEN' },
];

const igAge = ig.last_30_days.audience_age_range as Record<string, number>;
const under35 = Math.round((igAge['18-24_percent'] || 0) + (igAge['25-34_percent'] || 0));
const igCountries = ig.last_30_days.audience_top_countries as Record<string, number>;
const countryName = (k: string) =>
  k.replace('_percent', '').replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
const topCountries = Object.entries(igCountries)
  .filter(([, v]) => typeof v === 'number')
  .sort(([, a], [, b]) => b - a)
  .slice(0, 3)
  .map(([k, v]) => [countryName(k), v]) as [string, number][];

const hosts = [
  { name: 'Victoria Lo', role: 'Solutions Engineer', img: '/assets/team/victoria.PNG',
    cred: 'Women Devs SG Co-Director · GitHub Star · 24K+ blog readers' },
  { name: 'Natasha Ann Lum', role: 'Software Engineer', img: '/assets/team/natasha.PNG',
    cred: 'Conference speaker (Green.io & more) · 41.9K on Instagram' },
  { name: 'Saloni Kaur', role: 'Software Developer', img: '/assets/team/saloni.PNG',
    cred: 'Women Devs SG Co-Director · 10+ years as software developer & experienced mentor' },
];

const reasons = [
  { h: 'A trusting, engaged audience', p: 'Mostly 18 to 34 and curious about tech. They watch, save and share our reels, not just scroll past, because we talk about real life in tech.' },
  { h: 'Made by working engineers', p: 'All three of us build software for a living. We explain products from the inside, which reads as credible to a technical and non-technical crowd alike.' },
  { h: 'Honest by default', p: 'No hype, no gatekeeping. We only take on brands and products we actually believe in, and we say when something is a paid partnership.' },
  { h: 'On brand, always', p: 'Every collaboration stays in our voice and visual style, including our hand-drawn Techybara mascot. It never feels like a bolted-on ad.' },
];

const offerings = [
  ['Podcast integrations', 'Mentions or a dedicated segment on the ragTech podcast, in audio and video.'],
  ['Short-form reels', 'Fast, visual explainers on Instagram, TikTok, and YouTube Shorts.'],
  ['Techybara comic carousels', 'Story-driven carousels featuring our original capybara mascot.'],
  ['Workshops', 'Sessions that help teams explain tech clearly, or help non-technical folks get it.'],
];

export default function PressKitPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-accent/30 to-neutral-50">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold tracking-wide text-brown uppercase mb-4">
            Press and Partnership Kit
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-[1.3] pb-6 bg-gradient-to-r from-primary via-secondary to-brownDark bg-clip-text text-transparent">
            Let&apos;s work together
          </motion.h1>
          <p className="text-lg text-brown max-w-2xl mx-auto mb-8">
            ragTech is an award-winning Singapore tech podcast and short-form channel, run by three
            working software engineers who make AI and tech easy to follow. Here is who we are, who
            we reach, and how to partner with us.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/rate-card" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
              See our rate card <FaArrowRight />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-primary text-brownDark font-semibold px-6 py-3 rounded-full hover:bg-primary hover:text-white transition">
              Get in touch <FaEnvelope />
            </Link>
            <a href="/assets/ragtech-media-kit.pdf" download className="inline-flex items-center gap-2 bg-brownDark text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
              One-pager (PDF) <FaDownload />
            </a>
            <a href="/assets/logo/ragtech-logo.png" download className="inline-flex items-center gap-2 border-2 border-primary/40 text-brownDark font-semibold px-6 py-3 rounded-full hover:border-primary transition">
              Download logo <FaDownload />
            </a>
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10 text-center">
                <div className="text-3xl md:text-4xl font-bold text-brownDark">{s.value}</div>
                <div className="text-brown font-semibold mt-1">{s.label}</div>
                <div className="text-xs text-neutral-500 mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-500 mt-4">
            Figures update as our channels grow. Full per-platform breakdown lives on the{' '}
            <Link href="/rate-card" className="text-brown font-semibold hover:underline">rate card</Link>.
          </p>
        </div>
      </section>

      {/* Meet the hosts */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-3 text-brownDark">Meet the hosts</h2>
          <p className="text-center text-brown mb-10">Three working software engineers who explain tech from the inside.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {hosts.map((h) => (
              <div key={h.name} className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10 text-center">
                <img src={h.img} alt={h.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4" />
                <div className="font-bold text-brownDark">{h.name}</div>
                <div className="text-sm text-brown">{h.role}</div>
                <div className="text-xs text-neutral-500 mt-2 leading-relaxed">{h.cred}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who you'll reach */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-brownDark">Who you&apos;ll reach</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10 text-center">
              <div className="text-3xl md:text-4xl font-bold text-brownDark">{under35}%</div>
              <div className="text-brown font-semibold mt-1">aged 18 to 34</div>
              <div className="text-xs text-neutral-500 mt-1">young, tech-curious professionals</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10">
              <div className="text-brown font-semibold mb-2 text-center">Top locations</div>
              <ul className="text-sm text-brown space-y-1">
                {topCountries.map(([c, v]) => (
                  <li key={c} className="flex justify-between">
                    <span>{c}</span><span className="font-semibold">{v}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10 text-center">
              <div className="text-3xl md:text-4xl font-bold text-brownDark">up to {reelEngagement}%</div>
              <div className="text-brown font-semibold mt-1">reel engagement</div>
              <div className="text-xs text-neutral-500 mt-1">they watch, save, and share</div>
            </div>
          </div>
          <p className="text-center text-sm text-neutral-500 mt-4">Audience data from recent Instagram content. Full demographics available on request.</p>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-brownDark">Recognition</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-6 max-w-3xl mx-auto">
            <figure className="bg-white rounded-2xl p-3 shadow-md border-2 border-primary/10">
              <Image src="/assets/awards/scape-best-podcast.jpg" alt="ragTech winning Best Podcast at the Youth Creator Awards 2026" width={900} height={628} className="w-full h-64 object-cover object-center rounded-xl" />
              <figcaption className="text-sm text-brown mt-2 text-center font-semibold">🏆 Best Podcast · Youth Creator Awards 2026</figcaption>
            </figure>
            <figure className="bg-white rounded-2xl p-3 shadow-md border-2 border-primary/10">
              <Image src="/assets/awards/makers-shapers-social.jpg" alt="ragTech with the Creative Use of Social Media award at the Makers and Shapers Awards" width={900} height={1200} className="w-full h-64 object-cover object-[center_38%] rounded-xl" />
              <figcaption className="text-sm text-brown mt-2 text-center font-semibold">🏆 Creative Use of Social Media · Makers &amp; Shapers</figcaption>
            </figure>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10 text-center">
              <div className="text-2xl mb-2">🏅</div>
              <div className="font-bold text-brownDark">Podcast for Impact — Nominated</div>
              <div className="text-sm text-brown mt-1">Makers &amp; Shapers Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured / find us */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-brownDark">Where to find us</h2>
          <a
            href="https://www.melisten.sg/podcast/playlist/ragTech-3415841"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 mb-8 rounded-2xl px-6 py-4 bg-sky-50 border-2 border-sky-200 hover:border-sky-400 transition-colors"
          >
            <Image src="/assets/logo/melisten-logo.png" alt="meLISTEN" width={150} height={51} className="h-8 w-auto" />
            <span className="text-brown font-semibold">
              Now streaming on{' '}
              <span className="text-sky-600 font-bold underline underline-offset-2">meLISTEN</span>
            </span>
          </a>
          <p className="text-brown mb-8">Catch us on every platform below too.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {platforms.map((p) => (
              <a key={p.label} href={p.href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white border-2 border-primary/20 rounded-full px-5 py-3 text-brownDark font-semibold hover:border-primary transition">
                <p.icon className="text-xl" /> {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-brownDark">Why partner with ragTech</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((r) => (
              <div key={r.h} className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10">
                <div className="font-bold text-brownDark mb-2">{r.h}</div>
                <p className="text-brown text-sm leading-relaxed">{r.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-brownDark">Ways to work with us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map(([h, p]) => (
              <div key={h} className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10">
                <div className="font-bold text-brownDark mb-1">{h}</div>
                <p className="text-brown text-sm">{p}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/rate-card" className="inline-flex items-center gap-2 text-brownDark font-semibold hover:gap-3 transition-all">
              See packages and pricing <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand assets */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-brownDark">Brand assets</h2>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10 flex flex-col items-center gap-3">
              <Image src="/assets/logo/ragtech-logo.png" alt="ragTech logo" width={120} height={120} className="h-24 w-auto" />
              <a href="/assets/logo/ragtech-logo.png" download className="text-sm font-semibold text-brown hover:underline">Download square logo</a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary/10 flex flex-col items-center gap-3">
              <Image src="/assets/logo/ragtech-logo-rectangle.png" alt="ragTech logo" width={180} height={90} className="h-24 w-auto" />
              <a href="/assets/logo/ragtech-logo-rectangle.png" download className="text-sm font-semibold text-brown hover:underline">Download wordmark</a>
            </div>
          </div>
          <div className="mt-6">
            <a href="/assets/ragtech-media-kit.pdf" download className="inline-flex items-center gap-2 bg-brownDark text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
              Download one-page media kit (PDF) <FaDownload />
            </a>
          </div>
          <p className="text-sm text-neutral-500 mt-4">Need brand colours, the Techybara mascot, or host headshots? Just ask and we will send them over.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brownDark">Have a brand or story in mind?</h2>
          <p className="text-brown mb-8">Tell us what you are building and we will come back with ideas that fit our audience and our voice.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:opacity-90 transition">
            Start a conversation <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
