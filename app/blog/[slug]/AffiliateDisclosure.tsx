import Link from 'next/link';

// DigitalOcean affiliate link (Awin, advertiser 123996 / publisher 3058277).
const DO_AFFILIATE_URL =
  'https://www.awin1.com/cread.php?awinmid=123996&awinaffid=3058277';

/**
 * Slim FTC disclosure shown at the TOP of every blog article.
 * Wording follows DigitalOcean's affiliate guidance (Adam Riemer): the
 * disclosure must appear at the beginning of the post, before the links.
 */
export function AffiliateDisclosure() {
  return (
    <p className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm italic text-neutral-600 dark:border-amber-900/40 dark:bg-amber-950/20 dark:text-neutral-400">
      This article may contain affiliate links. We earn commissions when you
      shop through the links below, at no additional cost to you.
    </p>
  );
}

/**
 * "Tools we use" affiliate card shown at the BOTTOM of every blog article,
 * before the recommended articles. Currently features DigitalOcean.
 */
export function AffiliateTools() {
  return (
    <aside className="mb-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-700 dark:bg-neutral-900/40">
      <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
        Tools we use
      </h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        We build and deploy our own projects on DigitalOcean. If you want to try
        it, you can use our link below (affiliate link, at no additional cost to
        you).
      </p>
      <Link
        href={DO_AFFILIATE_URL}
        target="_blank"
        rel="sponsored nofollow noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-xl"
      >
        <span>Try DigitalOcean</span>
        <span aria-hidden>→</span>
      </Link>
    </aside>
  );
}
