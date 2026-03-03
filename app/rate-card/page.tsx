import { readdir } from 'fs/promises';
import path from 'path';
import type { Metadata } from 'next';
import Image from 'next/image';
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
  FaEnvelope,
  FaUsers,
  FaMicrophoneAlt,
  FaHeart,
  FaShareAlt,
} from 'react-icons/fa';
import RateCardPricing from './RateCardPricing';

export const metadata: Metadata = {
  title: 'Rate Card 2025 | ragTech',
  description: 'ragTech media kit and partnership rates for brand collaborations.',
};

async function getEpisodeCount(): Promise<string> {
  try {
    const dir = path.join(process.cwd(), 'data/episodes/transcripts');
    const files = await readdir(dir);
    return String(files.filter(f => f.endsWith('.txt')).length);
  } catch {
    return '10+';
  }
}


const notes = [
  'Prices listed in SGD. USD prices shown at approximate exchange rates and may vary slightly.',
  'All SGD prices exclude GST.',
  'Each package includes one round of revisions unless otherwise stated.',
  'Deliverables are typically ready within 7 to 14 business days after brief approval.',
  'Usage rights included for 6 months from publication. Extended licensing available on request.',
  'We only work with brands and products we genuinely believe in. Content stays authentic to our voice.',
  'Custom packages and barter/gifting arrangements can be discussed.',
];

const platformIcons = [
  { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/ragtechdev/' },
  { icon: FaSpotify, label: 'Spotify', href: 'https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@ragTechDev' },
  { icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@ragtechdev' },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://sg.linkedin.com/company/ragtechdev' },
];


export default async function RateCardPage() {
  const videoCount = await getEpisodeCount();

  const stats = [
    { label: 'Instagram', value: '3.8K', sub: 'followers', icons: [{ icon: FaInstagram, color: 'text-pink-500' }] },
    { label: 'YouTube', value: '679', sub: 'subscribers', icons: [{ icon: FaYoutube, color: 'text-red-500' }] },
    { label: 'TikTok', value: '367', sub: 'followers', icons: [{ icon: FaTiktok, color: 'text-neutral-800 dark:text-neutral-200' }] },
    { label: 'LinkedIn', value: '375', sub: 'followers', icons: [{ icon: FaLinkedin, color: 'text-blue-600' }] },
    { label: 'Spotify', value: '149', sub: '1K+ streams', icons: [{ icon: FaSpotify, color: 'text-green-500' }] },
    { label: 'Podcast', value: videoCount, sub: 'episodes', icons: [{ icon: FaSpotify, color: 'text-green-500' }, { icon: FaYoutube, color: 'text-red-500' }] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/30 via-white to-secondary/10 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary/80 via-accent/80 to-secondary/80 py-2 px-6 text-center text-xs font-semibold text-brownDark tracking-wide">
        MEDIA KIT & RATE CARD 2025 &middot; FOR BRAND PARTNERSHIP ENQUIRIES
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
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-brown hover:text-primary transition-colors duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-5 text-center shadow-sm border border-neutral-200 dark:border-neutral-700"
            >
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
          ragTech runs <strong className="text-brownDark dark:text-brown">Bytes &amp; Banter</strong>, a podcast covering AI, careers, startups, and life in tech. We reach a community of curious, tech-adjacent listeners and readers across Singapore and beyond. Our audience is young professionals who care about staying informed without the jargon.
        </p>
      </section>

      {/* Why Partner With Us */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown mb-3">Why partner with us?</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto text-sm leading-relaxed">
              We&apos;re not a media company. We&apos;re three working engineers who started a podcast because no one was talking about tech the way real people in tech actually talk about it.
            </p>
          </div>

          {/* Audience Profile */}
          <div className="bg-gradient-to-r from-accent/40 to-secondary/20 rounded-2xl p-6 mb-6 border border-accent/40">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">Who listens to us</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                'Software Engineers', 'Developers', 'Solutions Engineers',
                'Startup Founders', 'Tech Community Members', 'Career Switchers into Tech',
                'Non-techies who work with tech', 'AI Enthusiasts',
              ].map(tag => (
                <span key={tag} className="bg-white dark:bg-neutral-800 text-brownDark dark:text-brown text-xs font-medium px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-xs text-neutral-400">Primarily Singapore-based &middot; Ages 22&ndash;35 &middot; Early to mid-career in tech</p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FaMicrophoneAlt className="text-primary text-lg" />
                </div>
                <h3 className="font-bold text-brownDark dark:text-brown">Practitioner credibility</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">All three of us work in tech full-time as software engineers and solutions engineer. When we talk about a tool or product, our audience knows it comes from actual use, not a script.</p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <FaUsers className="text-secondary text-lg" />
                </div>
                <h3 className="font-bold text-brownDark dark:text-brown">Niche, engaged community</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Our audience is Singapore&apos;s tech professional community: engineers, founders, and people navigating tech careers. They research before buying and they trust what we say because we&apos;re one of them.</p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent/40 flex items-center justify-center shrink-0">
                  <FaShareAlt className="text-brownDark text-lg" />
                </div>
                <h3 className="font-bold text-brownDark dark:text-brown">Cross-platform presence</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">One partnership can span podcast, YouTube, Instagram, TikTok, LinkedIn, and newsletter. Your brand reaches our audience on whatever platform they&apos;re on, in formats that fit naturally.</p>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FaHeart className="text-primary text-lg" />
                </div>
                <h3 className="font-bold text-brownDark dark:text-brown">Authentic by design</h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">48+ episodes of real talk about AI, careers, burnout, and startups. Sponsored content only works here when it fits the conversation. We&apos;ll say no to partnerships that don&apos;t align, which is exactly why the ones we do say yes to land.</p>
            </div>
          </div>

          {/* Topics We Cover */}
          <div className="bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">Topics we cover</p>
            <div className="flex flex-wrap gap-2">
              {[
                'AI & LLMs', 'Vibe Coding', 'Career Growth', 'Imposter Syndrome',
                'Women in Tech', 'Startups & Fundraising', 'System Design', 'Open Source',
                'Tech Interviews', 'Financial Freedom', 'Work-Life Balance',
                'Hiring & Recruiting', 'Software Engineering', 'Personal Branding in Tech',
              ].map(topic => (
                <span key={topic} className="bg-white dark:bg-neutral-700 text-xs text-neutral-600 dark:text-neutral-300 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-600">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Sections with Currency Toggle */}
      <RateCardPricing />

      {/* Notes */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown mb-2 text-center">Terms &amp; Notes</h2>
        <ul className="mt-6 space-y-3">
          {notes.map((note, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <span className="text-primary font-bold shrink-0 mt-0.5">{i + 1}.</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-xl mx-auto text-center bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl p-10 border border-primary/20 shadow-lg">
          <p className="text-2xl font-bold text-brownDark dark:text-brown mb-3">Let&apos;s work together</p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
            Reach out with your brief and we&apos;ll get back to you within 2 business days.
          </p>
          <a
            href="mailto:hello@ragtechdev.com"
            className="inline-flex items-center gap-2 bg-brownDark hover:bg-brown text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
          >
            <FaEnvelope />
            hello@ragtechdev.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <div className="text-center text-xs text-neutral-400 pb-8">
        <p>© {new Date().getFullYear()} ragTech &middot; ragtechdev.com &middot; Bytes &amp; Banter Podcast</p>
        <p className="mt-1">Prices are indicative and subject to revision. Custom packages available.</p>
      </div>
    </div>
  );
}
