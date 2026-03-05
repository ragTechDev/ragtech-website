'use client';

import { useState } from 'react';
import {
  FaInstagram, FaSpotify, FaCheckCircle, FaYoutube,
  FaTiktok, FaLinkedin, FaEnvelope, FaUsers,
} from 'react-icons/fa';
import { HiNewspaper, HiStar, HiLightningBolt } from 'react-icons/hi';

type Currency = 'SGD' | 'USD';

// ─── Instagram ────────────────────────────────────────────────────────────────
// Reel: 79K avg views × S$0.008 tech-niche CPV = S$635 → S$600
// Static post: 3,853 followers × S$0.065/follower niche rate = S$250
// Standard carousel: static post + 40% editorial premium → S$350
// Techybara comic: carousel + bespoke illustration premium → S$500
// Stories 3-pack: 40% of static post rate (24hr ephemeral) → S$150
// Reel + Stories bundle: S$600 + S$150 − S$50 discount → S$700
const instagramPackages = [
  {
    name: 'Sponsored Reel',
    sgd: 'S$600', usd: 'US$445',
    badge: 'Most Views',
    description: 'Short-form branded video (30–60s) natively integrated into our content. Our reels average 79K views with a 13% engagement rate.',
    includes: [
      '30–60 second host-driven reel',
      'Caption, hashtags & brand tag',
      '1 revision round',
      'Performance screenshot at 14 days',
      'Permanent on feed',
    ],
    rationale: 'CPV-based: 79K avg views × S$0.008 tech-niche CPV',
  },
  {
    name: 'Static Feed Post',
    sgd: 'S$250', usd: 'US$185',
    badge: null,
    description: 'Branded image post with a crafted caption. Best for product announcements or content needing longer-form copy.',
    includes: [
      '1 high-quality branded image',
      'Custom caption with CTA',
      '1 revision round',
      'Performance screenshot at 7 days',
      'Permanent on feed',
    ],
    rationale: 'Followers-based: 3,853 × S$0.065/follower niche rate',
  },
  {
    name: 'Standard Carousel',
    sgd: 'S$350', usd: 'US$260',
    badge: 'High Saves',
    description: 'Multi-slide educational or listicle carousel — ideal for tips, how-tos, product comparisons, or brand storytelling.',
    includes: [
      '5–8 illustrated slides',
      'Format choice: listicle, guide, or product spotlight',
      'Custom caption & hashtags',
      '1 revision round',
      'Performance screenshot at 7 days',
    ],
    rationale: 'Static post + 40% editorial/design premium for multi-slide format',
  },
  {
    name: 'Techybara Comic Carousel',
    sgd: 'S$500', usd: 'US$370',
    badge: '✏️ Exclusive Format',
    description: 'Your brand woven into a hand-drawn comic strip starring Techybara, our capybara mascot navigating tech life. Native, story-led, highly shareable.',
    includes: [
      '5–8 hand-drawn comic panels',
      'Techybara narrative featuring your brand or product',
      '1 revision on story concept + 1 on final art',
      'Performance screenshot at 7 days',
      'Permanent on feed — original IP format',
    ],
    rationale: 'Standard carousel + bespoke illustration premium (hand-drawn IP, higher perceived authenticity & shareability)',
  },
  {
    name: 'Stories (3-pack)',
    sgd: 'S$150', usd: 'US$110',
    badge: null,
    description: 'Three-frame story sequence with brand mention. Best used to amplify a concurrent reel or as a lightweight awareness play.',
    includes: [
      '3 story frames with brand mention',
      'Link sticker (if account eligible)',
      '24-hour live + highlights option',
      'Insight screenshot',
    ],
    rationale: '24hr ephemeral format at ~40% of static post rate',
  },
  {
    name: 'Reel + Stories Bundle',
    sgd: 'S$700', usd: 'US$520',
    badge: 'Best Value',
    description: 'A branded reel paired with a 3-frame story sequence promoting it. Maximises both discovery reach and warm-audience CTAs.',
    includes: [
      'Everything in Sponsored Reel',
      'Everything in Stories (3-pack)',
      'Story links back to reel',
      'Combined insight screenshots',
    ],
    rationale: 'S$600 reel + S$150 stories − S$50 bundle discount',
  },
];

// ─── TikTok & YouTube Shorts ──────────────────────────────────────────────────
// TikTok: 365 followers, ~1,294 avg views, 93% MoM follower growth
// Shorts: 680 YT subs, 221 Shorts, Google-indexed
// Growth-stage flat rates with momentum premium; cross-post discount for single production
const shortFormPackages = [
  {
    name: 'TikTok Sponsored Video',
    sgd: 'S$180', usd: 'US$135',
    badge: '93% growth/mo',
    description: 'Branded short-form video on @ragtechdev TikTok. Growing at 93% follower growth MoM — early-mover rates available now.',
    includes: [
      '15–60 second branded video',
      'Native, host-created content',
      'Caption with brand mention & CTA',
      '1 revision round',
      'Performance screenshot at 7 days',
    ],
    rationale: 'Growth-stage flat rate: early-mover pricing reflecting 93% MoM growth trajectory',
  },
  {
    name: 'YouTube Shorts Integration',
    sgd: 'S$150', usd: 'US$110',
    badge: null,
    description: 'Branded YouTube Short on our channel (680 subs, 221 Shorts). Google Search indexed — extends the content\'s shelf life beyond any other short-form platform.',
    includes: [
      '15–60 second branded Short',
      'Brand mention in video and description',
      'SEO-friendly title and tags',
      '1 revision round',
      'Performance screenshot at 14 days',
    ],
    rationale: 'Flat rate: slightly below TikTok given current sub count; Google Search indexing adds long-tail discovery value',
  },
  {
    name: 'Short-Form Cross-Post',
    sgd: 'S$280', usd: 'US$205',
    badge: 'Best Value',
    description: 'One branded short-form video posted to both TikTok and YouTube Shorts. Same production, doubled distribution.',
    includes: [
      'Everything in TikTok Sponsored Video',
      'Everything in YouTube Shorts Integration',
      'Captions optimised per platform',
      'Performance screenshots from both platforms',
    ],
    rationale: 'S$180 TikTok + S$150 Shorts − S$50 cross-post discount (single production effort)',
  },
];

// ─── Vodcast: Bytes & Banter ──────────────────────────────────────────────────
// CPM benchmarks (InfluencerMarketingHub / Podchaser):
//   Pre-roll 30s: $15–18 CPM | Mid-roll 60s: $25–30 CPM | Post-roll 30s: $10 CPM
// Estimated combined episode reach: ~350 (Spotify 11 + YouTube ~300 + Apple/Amazon)
// Tech-niche multiplier: 2.5×
//   Pre-roll: $18 × 0.35K × 2.5 = $15.75 → flat S$150
//   Post-roll: $10 × 0.35K × 2.5 = $8.75 → flat S$100
//   Mid-roll: $28 × 0.35K × 2.5 = $24.50 → S$350 (+ social value)
//   Pre+Mid bundle: S$150 + S$350 − S$50 → S$450
//   Full sponsor: value-based → S$900
//   3-episode series: S$350 × 3 + series premium → S$2,200 (per IMH 7–10 week conversion model)
const vodcastPackages = [
  {
    name: 'Pre-Roll Ad (30s)',
    sgd: 'S$150', usd: 'US$110',
    badge: 'Entry Point',
    description: 'A 15–30 second host-read ad in the first 10% of a vodcast episode. Baked-in permanently. Runs on YouTube, Spotify, Apple Music & Amazon Music.',
    includes: [
      'Host-read script (15–30s)',
      'Baked-in — permanent, never swapped',
      'Episode description mention + brand link',
      'Distribution across 4 platforms',
      'Promo code inclusion if provided',
    ],
    rationale: '$18 CPM × ~350 est. listeners × 2.5× tech-niche premium (InfluencerMarketingHub)',
  },
  {
    name: 'Post-Roll Ad (30s)',
    sgd: 'S$100', usd: 'US$74',
    badge: null,
    description: 'A 30 second host-read ad at episode close. Reaches the most loyal segment — listeners who stay until the end.',
    includes: [
      'Host-read script (30s)',
      'Baked-in — permanent',
      'Episode description mention',
      'Distribution across 4 platforms',
    ],
    rationale: '$10 CPM × ~350 listeners × 2.5× niche premium (Podchaser post-roll benchmark)',
  },
  {
    name: 'Mid-Roll Ad (60s)',
    sgd: 'S$350', usd: 'US$260',
    badge: 'Highest Recall',
    description: 'A 60 second host-read mid-episode integration — the highest-recall slot per industry data. Woven naturally into the conversation.',
    includes: [
      'Host-read script (up to 60s)',
      'Baked-in — permanent',
      'Link in description + pinned comment',
      'Social media story mention',
      'Distribution across 4 platforms',
    ],
    rationale: '$28 CPM × ~350 listeners × 2.5× niche premium + social amplification value',
  },
  {
    name: 'Episode Sponsorship (Pre + Mid)',
    sgd: 'S$450', usd: 'US$335',
    badge: 'Double Exposure',
    description: 'Sponsor both the pre-roll and mid-roll of a single episode for maximum in-episode brand presence.',
    includes: [
      'Pre-roll host-read (30s)',
      'Mid-roll host-read (60s)',
      'Both slots baked-in permanently',
      'Episode description + pinned comment',
      'Social media story mention',
    ],
    rationale: 'S$150 + S$350 − S$50 same-episode bundle discount',
  },
  {
    name: 'Full Episode Integration',
    sgd: 'S$900', usd: 'US$665',
    badge: 'Maximum Impact',
    description: 'Your brand co-developed into the episode theme — woven organically throughout the conversation, not just an ad break. Visual on-screen brand placement included.',
    includes: [
      'Co-developed episode topic or angle',
      'Brand featured throughout (not just an ad break)',
      'On-screen visual brand placement (vodcast format)',
      'Dedicated social clip featuring brand',
      'Blog post cross-promotion on ragtechdev.com',
      'Episode show notes & description feature',
      'Distribution across 4 platforms',
    ],
    rationale: 'Value-based: topic co-dev + on-screen visuals + full social package; equivalent to "Paid Interview" format (InfluencerMarketingHub)',
  },
  {
    name: 'Vodcast Series (3 Episodes)',
    sgd: 'S$2,200', usd: 'US$1,630',
    badge: '💰 Best CPE',
    description: 'Three consecutive mid-roll mentions across three episodes. Research shows it takes 7–10 weeks for full campaign conversion realisation (InfluencerMarketingHub).',
    includes: [
      '3× mid-roll host-read (60s each)',
      'All 3 episodes baked-in permanently',
      'Consistent episode description mentions',
      'Social story mention per episode',
      '3× performance check-ins',
    ],
    rationale: 'S$350 × 3 = S$1,050 base → S$2,200 reflects full series value + social package; benchmarked against $1,500/month model (IMH)',
  },
];

// ─── Blog & Newsletter ────────────────────────────────────────────────────────
const writtenPackages = [
  {
    name: 'Blog Sponsored Post',
    sgd: 'S$280', usd: 'US$205',
    badge: 'Permanent',
    description: 'A written post on ragtechdev.com in our voice. Stays live permanently, SEO-indexed by Google.',
    includes: [
      '600–1,000 word original article',
      'SEO-optimised title and structure',
      'Shared on ragTech Instagram & LinkedIn',
      'Permanent on-site hosting',
      '1 revision round',
    ],
    rationale: undefined,
  },
  {
    name: 'Newsletter Dedicated Send',
    sgd: 'S$80', usd: 'US$59',
    badge: '🌱 Early-Bird Rate',
    description: 'Your brand as the sole feature in one newsletter broadcast. Introductory rate — will increase at 500 subscribers.',
    includes: [
      'Dedicated branded section (entire send)',
      'Custom copy written by our team',
      'Clickable link + CTA to your page',
      'One broadcast send',
      'Open rate screenshot post-send',
    ],
    rationale: 'Introductory flat rate — increases at 500 subscribers. Lock in now.',
  },
  {
    name: 'Newsletter Sponsored Feature',
    sgd: 'S$50', usd: 'US$37',
    badge: '🌱 Early-Bird Rate',
    description: 'A branded callout block within our regular newsletter. Shares the send with editorial content — more affordable entry point.',
    includes: [
      'Branded callout block within regular send',
      'Logo + 2–3 sentence brand description',
      'Clickable CTA link',
      'One broadcast send',
    ],
    rationale: undefined,
  },
  {
    name: 'Blog + Newsletter Bundle',
    sgd: 'S$330', usd: 'US$245',
    badge: 'Best Value',
    description: 'Permanent blog post plus a newsletter send to drive immediate traffic. Long-term SEO value + immediate subscriber reach.',
    includes: [
      'Everything in Blog Sponsored Post',
      'Everything in Newsletter Dedicated Send',
      'Newsletter links directly to the blog post',
    ],
    rationale: undefined,
  },
];

// ─── LinkedIn ─────────────────────────────────────────────────────────────────
// 375 followers, avg 1,052 engagements/post (903 likes + 97 comments + 52 shares) = 280% ER
const linkedinPackages = [
  {
    name: 'LinkedIn Sponsored Post',
    sgd: 'S$200', usd: 'US$148',
    badge: '280% Eng Rate',
    description: 'Branded post on ragTech\'s LinkedIn. Our posts average 1,052 engagements — exceptionally high for 375 followers, indicating strong B2B professional virality.',
    includes: [
      '1 branded LinkedIn post',
      'Professional copy by our team',
      'Brand/product mention with link',
      '1 revision round',
      'Engagement screenshot at 7 days',
    ],
    rationale: 'Quality-based: 280% avg engagement rate signals high B2B virality beyond follower count',
  },
  {
    name: 'LinkedIn Article Feature',
    sgd: 'S$280', usd: 'US$205',
    badge: null,
    description: 'A long-form LinkedIn article by ragTech featuring your brand — ideal for thought leadership positioning in the SG tech community.',
    includes: [
      '400–700 word LinkedIn article',
      'Brand integration throughout',
      'Published under ragTech company page',
      '1 revision round',
    ],
    rationale: undefined,
  },
];

// ─── Bundles ──────────────────────────────────────────────────────────────────
const bundles = [
  {
    name: 'Starter Pack',
    sgd: 'S$360', usd: 'US$265',
    origSgd: 'S$430', origUsd: 'US$320',
    savingSgd: 'Save S$70', savingUsd: 'Save US$55',
    color: 'from-primary/20 to-accent/20',
    borderColor: 'border-primary/40',
    items: ['1× Instagram Static Post', '1× Vodcast Pre-Roll Ad (30s)'],
    ideal: 'Brand awareness across content + audio',
  },
  {
    name: 'Engagement Pack',
    sgd: 'S$950', usd: 'US$700',
    origSgd: 'S$1,230', origUsd: 'US$910',
    savingSgd: 'Save S$280', savingUsd: 'Save US$210',
    color: 'from-secondary/20 to-accent/20',
    borderColor: 'border-secondary/40',
    items: ['1× Sponsored Reel', '1× Vodcast Mid-Roll Ad (60s)', '1× Blog Sponsored Post'],
    ideal: 'Multi-platform reach with lasting content assets',
    featured: true,
  },
  {
    name: 'Creator Pack',
    sgd: 'S$1,100', usd: 'US$815',
    origSgd: 'S$1,380', origUsd: 'US$1,020',
    savingSgd: 'Save S$280', savingUsd: 'Save US$205',
    color: 'from-accent/30 to-primary/10',
    borderColor: 'border-accent/40',
    items: [
      '1× Techybara Comic Carousel',
      '1× Short-Form Cross-Post (TikTok + Shorts)',
      '1× Stories (3-pack)',
      '1× Newsletter Dedicated Send',
    ],
    ideal: 'Creative-first brand wanting native, viral-format content',
  },
  {
    name: 'Full Media Kit',
    sgd: 'S$1,800', usd: 'US$1,400',
    origSgd: 'S$2,280', origUsd: 'US$1,780',
    savingSgd: 'Save S$480', savingUsd: 'Save US$380',
    color: 'from-brownDark/10 to-primary/20',
    borderColor: 'border-brownDark/30',
    items: [
      '1× Sponsored Reel',
      '1× Stories (3-pack)',
      '1× Vodcast Full Episode Integration',
      '1× Blog Sponsored Post',
      '1× Newsletter Sponsored Feature',
    ],
    ideal: 'Maximum exposure across all channels',
  },
];

// ─── Add-Ons ──────────────────────────────────────────────────────────────────
const natashaAddOns = [
  {
    name: 'Natasha Appearance Guarantee',
    sgd: 'S$150', usd: 'US$110',
    platforms: 'Instagram · TikTok · YouTube Shorts',
    description:
      'Guarantee Natasha appears in the video (vs. Saloni and/or Victoria only). Applies to any short-form or social content. Note: Natasha is always present in vodcast episodes at no extra charge.',
    includes: [
      'Natasha on-screen in the branded video',
      'Applicable to IG Reels, TikTok, or YT Shorts',
      'Vodcast episodes: Natasha always included — no charge',
    ],
  },
  {
    name: 'Collaborator Tag (Instagram)',
    sgd: 'S$200', usd: 'US$148',
    platforms: 'Instagram',
    description:
      'ragTech posts the content, and Natasha also appears in the video, but Natasha is also tagged as a collaborator — the post then appears on her Instagram profile feed and is shown to her 18K followers.',
    includes: [
      'Natasha on-screen in the branded video',
      'Collab tag on the ragTech post',
      'Post visible on Natasha\'s IG profile grid',
      'Her 18K followers see it on their feed'
    ],
  },
  {
    name: 'Repost by Natasha',
    sgd: 'S$120', usd: 'US$89',
    platforms: 'Instagram · TikTok',
    description:
      'Natasha reposts the ragTech video to her own profile — IG repost or TikTok repost. Extends the content\'s reach and lifespan through her audience.',
    includes: [
      'Natasha reposts the ragTech video to her profile',
      'Available on Instagram and/or TikTok',
      'Reaches her followers as a native repost',
      'Caption credit to brand included',
    ],
  },
  {
    name: 'Story Share by Natasha',
    sgd: 'S$100', usd: 'US$74',
    platforms: 'Instagram · TikTok',
    description:
      'Natasha shares the ragTech post or reel to her Instagram Story or TikTok (where story-equivalent is available), with a link sticker or CTA to the original.',
    includes: [
      'Story share from Natasha\'s personal account',
      'Link sticker / CTA back to ragTech post',
      '24-hour visibility to her audience',
      'Available on Instagram Stories and/or TikTok',
    ],
  },
];

const extraAddOns = [
  {
    name: 'Category Exclusivity (per month)',
    sgd: 'S$300', usd: 'US$222',
    description: 'Lock out all competing brands in your product category for a calendar month across all ragTech content.',
    includes: ['No competitor brand mentions for 30 days', 'Category confirmed in writing', 'Applies across all platforms'],
  },
  {
    name: 'Extended Usage Rights',
    sgd: 'S$150', usd: 'US$110',
    description: 'Extend content usage rights from 6 months to 12 months — for your paid ads, website, or press kit.',
    includes: ['12-month usage rights (vs standard 6)', 'Rights for paid advertising use', 'Rights for website / press kit'],
  },
  {
    name: 'Rush Delivery',
    sgd: 'S$150', usd: 'US$110',
    description: 'Delivery in 3–5 business days of brief approval (vs standard 7–14 days).',
    includes: ['3–5 business day turnaround', 'Priority brief review', 'Direct host contact throughout'],
  },
  {
    name: 'Performance Report',
    sgd: 'S$80', usd: 'US$59',
    description: 'End-of-campaign PDF with all platform insights, engagement metrics, and reach data.',
    includes: ['All platform insight screenshots', 'Engagement rate calculations', 'Reach and impression data', 'Formatted PDF for your records'],
  },
];

// ─── Shared Components ────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-brownDark dark:text-brown mb-2 text-center">
      {children}
    </h2>
  );
}

function PriceCard({
  name, price, description, includes, badge, rationale,
}: {
  name: string; price: string; description: string; includes: string[];
  badge?: string | null; rationale?: string;
}) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative">
      {badge && (
        <span className="absolute -top-3 left-4 bg-secondary text-brownDark text-xs font-bold px-3 py-1 rounded-full shadow whitespace-nowrap">
          {badge}
        </span>
      )}
      <div className="mb-4 mt-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">{name}</p>
        <p className="text-3xl font-bold text-brownDark dark:text-brown">{price}</p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-snug">{description}</p>
      </div>
      <ul className="space-y-2 pt-4 border-t border-neutral-100 dark:border-neutral-700">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-300">
            <FaCheckCircle className="text-secondary mt-0.5 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {rationale && (
        <p className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-700 text-xs text-neutral-400 italic leading-snug">
          📐 {rationale}
        </p>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RateCardPricing() {
  const [currency, setCurrency] = useState<Currency>('SGD');
  const isSGD = currency === 'SGD';
  const [ttOpen, setTtOpen] = useState(false);

  const CurrencyToggle = () => (
    <div className="flex justify-center mb-10">
      <div className="inline-flex items-center bg-neutral-100 dark:bg-neutral-800 rounded-full p-1 border border-neutral-200 dark:border-neutral-700 shadow-sm">
        <span className="text-xs text-neutral-400 px-3 font-medium">Currency:</span>
        <button
          onClick={() => setCurrency('SGD')}
          className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            isSGD ? 'bg-brownDark text-white shadow' : 'text-neutral-500 hover:text-brownDark'
          }`}
        >SGD</button>
        <button
          onClick={() => setCurrency('USD')}
          className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            !isSGD ? 'bg-brownDark text-white shadow' : 'text-neutral-500 hover:text-brownDark'
          }`}
        >USD</button>
      </div>
    </div>
  );

  return (
    <div>
      {/* Rates Title */}
      <section className="px-6 pt-4 pb-2 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
          <HiStar className="text-primary text-2xl" />
          <SectionTitle>Rates</SectionTitle>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          All prices in SGD unless toggled. Packages are mix-and-match.
        </p>
      </section>

      {/* What We Deliver Banner */}
      <section className="px-6 pb-12 pt-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-secondary/20 via-accent/20 to-primary/20 rounded-2xl p-6 border border-secondary/30">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-2">What you get</p>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
            All rates are based on verified platform data. Our reels average{' '}
            <span className="font-semibold">79K views at 13% engagement</span>. Instagram reached{' '}
            <span className="font-semibold">179K accounts and gained 3,858 followers in 30 days</span>.
            Vodcast pricing is derived from industry CPM benchmarks (pre-roll $15–18, mid-roll $25–30
            per InfluencerMarketingHub / Podchaser) with a 2.5× tech-niche premium. All podcast ads are
            baked-in — permanent, never swapped out.
          </p>
        </div>
      </section>

      <CurrencyToggle />

      {/* ── Instagram + Short-Form ──────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
            <FaInstagram className="text-primary text-2xl" />
            <SectionTitle>Instagram</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            3,853 followers · 79K avg reel views · 13% reel engagement · 647K 30-day views
          </p>
          <p className="text-center text-xs text-neutral-400 dark:text-neutral-500 mb-8">
            Formats: Reels · Static Posts · Standard Carousels · Techybara Comic Carousels · Stories
          </p>
          <div className="mb-6 bg-neutral-50 dark:bg-neutral-800/50 rounded-2xl border border-neutral-200 dark:border-neutral-700 max-w-2xl mx-auto overflow-hidden">
            <button
              onClick={() => setTtOpen(o => !o)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-brownDark dark:text-brown hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <FaTiktok className="text-brownDark dark:text-neutral-300" />
              <FaYoutube className="text-red-500" />
              Includes TikTok &amp; YouTube Shorts
              <span className="ml-1 text-neutral-400 text-xs">{ttOpen ? '▲' : '▼'}</span>
            </button>
            {ttOpen && (
              <div className="px-5 pb-4 text-center border-t border-neutral-200 dark:border-neutral-700 pt-3">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                  TikTok: 365 followers · 93% MoM growth · ~1,294 avg views/video
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
                  YouTube Shorts: 680 subs · 221 Shorts published · Google Search indexed
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  Instagram packages include cross-posting to TikTok and YouTube Shorts. Pricing will be listed separately as those channels grow.
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPackages.map((pkg) => (
              <PriceCard key={pkg.name} name={pkg.name} price={isSGD ? pkg.sgd : pkg.usd}
                description={pkg.description} includes={pkg.includes} badge={pkg.badge} rationale={pkg.rationale} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Vodcast ────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-2 mb-2">
            <div className="flex items-center gap-2">
              <FaYoutube className="text-red-500 text-2xl" />
              <FaSpotify className="text-green-500 text-2xl" />
            </div>
            <SectionTitle>Vodcast: Bytes &amp; Banter</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            48+ episodes · YouTube · Spotify · Apple Music · Amazon Music
          </p>
          <p className="text-center text-xs text-neutral-400 mb-1">
            All ads are host-read and baked-in (permanent — never swapped or removed).
          </p>
          <p className="text-center text-xs text-neutral-400 mb-8">
            Rates derived from: pre-roll $15–18 CPM, mid-roll $25–30 CPM, post-roll $10 CPM
            (InfluencerMarketingHub / Podchaser) · 2.5× tech-niche multiplier applied
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vodcastPackages.map((pkg) => (
              <PriceCard key={pkg.name} name={pkg.name} price={isSGD ? pkg.sgd : pkg.usd}
                description={pkg.description} includes={pkg.includes} badge={pkg.badge} rationale={pkg.rationale} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LinkedIn ───────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16 bg-gradient-to-br from-primary/5 to-accent/10 py-16 rounded-3xl mx-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
            <FaLinkedin className="text-blue-600 text-2xl" />
            <SectionTitle>LinkedIn</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            375 followers · avg 1,052 engagements per post · 280% engagement rate
          </p>
          <p className="text-center text-xs text-neutral-400 mb-8">
            Professional B2B tech audience — SG engineers, founders, and tech leaders
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {linkedinPackages.map((pkg) => (
              <PriceCard key={pkg.name} name={pkg.name} price={isSGD ? pkg.sgd : pkg.usd}
                description={pkg.description} includes={pkg.includes} badge={pkg.badge} rationale={pkg.rationale} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog & Newsletter ──────────────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
            <HiNewspaper className="text-brownDark dark:text-brown text-2xl" />
            <FaEnvelope className="text-brownDark dark:text-brown text-xl" />
            <SectionTitle>Blog &amp; Newsletter</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-1">
            Blog posts live permanently on ragtechdev.com · Newsletter newly launched
          </p>
          <p className="text-center text-xs text-neutral-400 mb-8">
            🌱 Newsletter early-bird rates — will increase at 500 subscribers. Lock in now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {writtenPackages.map((pkg) => (
              <PriceCard key={pkg.name} name={pkg.name} price={isSGD ? pkg.sgd : pkg.usd}
                description={pkg.description} includes={pkg.includes} badge={pkg.badge} rationale={pkg.rationale} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bundles ────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 py-16 mx-4 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
            <HiStar className="text-primary text-2xl" />
            <SectionTitle>Bundle Packages</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            Mix channels for better reach at a discounted rate
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundles.map((bundle) => (
              <div key={bundle.name}
                className={`relative bg-gradient-to-br ${bundle.color} rounded-2xl p-6 border-2 ${bundle.borderColor} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col`}>
                {bundle.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-brownDark text-xs font-bold px-4 py-1 rounded-full shadow whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">{bundle.name}</p>
                  <div className="flex items-baseline gap-2 flex-wrap">
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
                <ul className="space-y-2 pt-4 border-t border-neutral-200 dark:border-neutral-700">
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

      {/* ── Add-Ons ────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
            <HiLightningBolt className="text-secondary text-2xl" />
            <SectionTitle>Add-Ons</SectionTitle>
          </div>
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-10">
            Bolt onto any package for amplified reach, exclusivity, or faster turnaround
          </p>

          {/* Natasha */}
          <div id="natasha-amplification" className="mb-10">
            <div className="flex items-center gap-2 mb-1">
              <FaUsers className="text-primary text-lg" />
              <h3 className="text-xl font-bold text-brownDark dark:text-brown">Natasha Amplification</h3>
              <span className="text-xs bg-primary/15 text-primary px-2 py-0.5 rounded-full font-semibold">30.7K total followers</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5 max-w-3xl">
              Natasha keeps her personal profiles organic and doesn&apos;t post brand partnerships directly.
              These add-ons let you access her credibility and audience through ragTech channels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {natashaAddOns.map((addon) => (
                <PriceCard key={addon.name} name={addon.name} price={isSGD ? addon.sgd : addon.usd}
                  description={addon.description} includes={addon.includes} />
              ))}
            </div>
            <div className="mt-5 bg-primary/10 border border-primary/30 rounded-2xl p-5 max-w-3xl mx-auto text-center">
              <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                <span className="font-semibold text-brownDark dark:text-brown">Note:</span>{' '}
                Natasha does not post brand partnerships on her personal accounts. These add-ons activate her
                reach through ragTech content — as a collaborator tag, story boost, TikTok co-creator, or
                episode co-host. This preserves the organic integrity of her personal profile while giving
                brands genuine access to her audience and credibility.
              </p>
            </div>
          </div>

          {/* Extras */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <HiLightningBolt className="text-secondary text-lg" />
              <h3 className="text-xl font-bold text-brownDark dark:text-brown">Campaign Extras</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {extraAddOns.map((addon) => (
                <PriceCard key={addon.name} name={addon.name} price={isSGD ? addon.sgd : addon.usd}
                  description={addon.description} includes={addon.includes} />
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}