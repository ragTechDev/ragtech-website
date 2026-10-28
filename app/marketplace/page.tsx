import type { Metadata } from 'next';
import Image from 'next/image';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import { GUMROAD_STORE_URL, products } from './products';

export const metadata: Metadata = {
  title: 'Marketplace | ragTech',
  description:
    'Digital guides and templates from ragTech. Browse our catalog and grab a copy on Gumroad.',
};

export default function MarketplacePage() {
  return (
    <main className="min-h-screen pt-28 pb-20 bg-gradient-to-b from-accent/40 via-white to-secondary/20 dark:from-neutral-900 dark:via-neutral-900 dark:to-neutral-900">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-brownDark dark:text-white mb-4">
            Marketplace
          </h1>
          <p className="text-lg text-brown dark:text-neutral-300">
            Guides and templates we have put together for you. Click a cover to pick one up on our
            Gumroad store.
          </p>
        </header>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => {
            const href = product.gumroadUrl ?? GUMROAD_STORE_URL;

            const cover = product.thumbnail ? (
              <Image
                src={product.thumbnail}
                alt={`${product.title} cover`}
                fill
                sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 90vw"
                className="object-contain"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-primary text-white p-4 text-center">
                <FaFilePdf className="text-4xl opacity-80" />
                <span className="font-semibold">Coming soon</span>
              </div>
            );

            return (
              <li
                key={product.slug}
                className="flex flex-col bg-white dark:bg-neutral-800 rounded-2xl shadow-md border border-primary/10 overflow-hidden"
              >
                {product.available ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Buy ${product.title} on Gumroad`}
                    className="group relative block aspect-[3/4] bg-neutral-900 overflow-hidden"
                  >
                    {cover}
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-brownDark/85 text-white text-sm font-semibold py-2 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                      Get it on Gumroad <FaExternalLinkAlt className="text-xs" />
                    </span>
                  </a>
                ) : (
                  <div className="relative block aspect-[3/4] bg-neutral-100 overflow-hidden">
                    {cover}
                  </div>
                )}

                <div className="flex flex-col gap-2 p-5">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full w-fit bg-secondary/40 text-brownDark dark:bg-neutral-700 dark:text-neutral-200">
                    {product.available ? product.format : 'Coming soon'}
                  </span>
                  <h2 className="text-lg font-bold text-brownDark dark:text-white">
                    {product.title}
                  </h2>
                  <p className="text-sm text-brown dark:text-neutral-300">{product.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="text-center text-brown dark:text-neutral-300 mt-12">
          Want to see everything?{' '}
          <a
            href={GUMROAD_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-brownDark"
          >
            Visit our Gumroad store
          </a>
          .
        </p>
      </div>
    </main>
  );
}
