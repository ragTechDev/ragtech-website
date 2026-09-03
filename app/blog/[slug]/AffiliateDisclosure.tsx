import Link from 'next/link';

// DigitalOcean affiliate link (Awin, advertiser 123996 / publisher 3058277).
// Points at DO Serverless Inference; clickref tags the placement for reporting.
const DO_LINK =
  'https://www.awin1.com/cread.php?awinmid=123996&awinaffid=3058277&clickref=blog&ued=https%3A%2F%2Ftry.digitalocean.com%2Fserverless-inference%2F';

// FTC-disclosed promo copy supplied by DigitalOcean's affiliate team. These are
// honest product descriptions (we are not claiming to use the product), rotated
// per-article so the same card is not repeated everywhere.
const DO_PROMOS = [
  'GPU bills piling up for AI features you barely use? DigitalOcean Serverless Inference is pay-per-token, no idle infrastructure, no minimums. Ship the feature, not the server bill.',
  'Your competitors are shipping AI features in days, not months. The difference? They are not managing infrastructure. DigitalOcean Serverless Inference means zero infrastructure and pay-per-token pricing.',
  'Access OpenAI, Anthropic Claude, Kimi K3, Llama, and dozens more through one platform built for production. With built-in routing, caching, and reliability, DigitalOcean Serverless Inference is your new best friend.',
];

function pickPromo(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return DO_PROMOS[h % DO_PROMOS.length];
}

/**
 * Slim FTC disclosure shown at the TOP of every blog article.
 * Wording follows DigitalOcean's affiliate guidance (Adam Riemer): the
 * disclosure must appear at the beginning of the post, before the links.
 */
export function AffiliateDisclosure() {
  return (
    <p className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm italic text-neutral-600 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-neutral-400">
      This article contains an affiliate link. We earn commissions when you shop
      through the link below, at no additional cost to you.
    </p>
  );
}

/**
 * Sponsored DigitalOcean card shown at the BOTTOM of every blog article,
 * before the recommended articles. Copy is DO-supplied and clearly marked
 * as an ad; the promo rotates by article slug.
 */
export function AffiliateTools({ slug = '' }: { slug?: string }) {
  const promo = pickPromo(slug);
  return (
    <aside className="mb-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900/40">
      <span className="mb-3 inline-block rounded-full bg-neutral-200 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
        Ad
      </span>
      <p className="mb-4 text-sm text-neutral-700 dark:text-neutral-300">{promo}</p>
      <Link
        href={DO_LINK}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-xl"
      >
        <span>Try DigitalOcean Serverless Inference</span>
        <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}
