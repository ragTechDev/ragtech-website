'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserFriends, FaCommentSlash, FaStream } from 'react-icons/fa';
import InstagramEmbed from './InstagramEmbed';
import WillageWaitlistSection from './WillageWaitlistSection';

const features = [
  {
    icon: <FaCommentSlash className="text-4xl text-primary" />,
    title: 'Comment Permission Controls',
    text: 'Set who can comment on each post — followers-only, minimum account age, or off entirely. No more all-or-nothing comment lockdowns.',
  },
  {
    icon: <FaUserFriends className="text-4xl text-secondary" />,
    title: 'Invite-Only, Real Accountability',
    text: 'Every account joins through an invite chain, with a real human moderation team reviewing reports — not a black-box algorithm.',
  },
  {
    icon: <FaStream className="text-4xl text-accent" />,
    title: 'Chronological Feed',
    text: 'No engagement-optimized ranking that rewards harassment with more reach. What you post is what your followers see, in order.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary" />,
    title: 'Built for Creator Safety',
    text: 'Block, mute, and report tools that persist — designed with creators who\'ve actually lived through online harassment.',
  },
];

const borderColors = [
  'border-primary hover:border-primary/70',
  'border-secondary hover:border-secondary/70',
  'border-accent hover:border-accent/70',
  'border-primary hover:border-primary/70',
];

export default function WillagePage() {
  return (
    <main className="min-h-screen">
      <InstagramEmbed />

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-primary/20 via-secondary/15 to-accent/20 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Signup Flow Demo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center order-2 lg:order-1"
            >
              <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 max-w-xs w-full">
                <Image
                  src="/assets/willage/willage-signup-flow.gif"
                  alt="Demo of the Willage invite signup flow"
                  width={764}
                  height={1594}
                  unoptimized
                  priority
                  className="w-full h-auto"
                />
              </div>
              <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 text-center max-w-xs">
                Demo of the invite feature — how a new member joins Willage through a trusted invite chain.
              </p>
            </motion.div>

            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left order-1 lg:order-2"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 mt-12 lg:mt-0 text-brownDark dark:text-brown">
                Willage
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-neutral-700 dark:text-neutral-300">
                A safety-first creator platform. Join the waitlist.
              </p>

              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                Post without absorbing the harassment that comes free with reach on Instagram, TikTok, and X.
                Willage puts comment permissions, invite-gated trust, and a real moderation team ahead of growth metrics.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#inspiration"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-neutral-800 text-brownDark dark:text-brown border-2 border-primary rounded-full font-semibold text-lg hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Why We're Building This</span>
                  <span className="text-2xl">💬</span>
                </a>
                <a
                  href="#waitlist"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <span>Join Waitlist Now</span>
                  <span className="text-2xl">🚀</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Willage Section */}
      <section className="py-12 px-6 bg-white dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-brownDark dark:text-brown"
          >
            Why Willage?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 ${borderColors[index]}`}
              >
                <span className="mb-3">{feature.icon}</span>
                <p className="font-bold text-brownDark dark:text-brown mb-2">{feature.title}</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section
        id="inspiration"
        className="py-20 px-6 bg-gradient-to-br from-accent/10 via-white to-primary/10 dark:bg-neutral-900"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brownDark dark:text-brown">
              Why We're Building This
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Willage started from a lived experience, not a hypothetical. Our ragTech co-host Natasha
              shared what it was like to face online harassment after going viral — the comments,
              the amplification, and the lack of any real accountability for repeat harassers.
              That experience is the reason Willage exists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink="https://www.instagram.com/p/DbN0WFNAdzY/?utm_source=ig_embed&amp;utm_campaign=loading"
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: 0,
                borderRadius: '3px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '1px',
                maxWidth: '540px',
                minWidth: '326px',
                padding: 0,
                width: '99.375%',
              }}
            >
              <div style={{ padding: '16px' }}>
                <a
                  href="https://www.instagram.com/p/DbN0WFNAdzY/?utm_source=ig_embed&amp;utm_campaign=loading"
                  style={{
                    background: '#FFFFFF',
                    lineHeight: 0,
                    padding: '0 0',
                    textAlign: 'center',
                    textDecoration: 'none',
                    width: '100%',
                    display: 'block',
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View this post on Instagram
                </a>
              </div>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* About ragTech Section */}
      <section className="py-20 px-6 bg-white dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brownDark dark:text-brown">
              About ragTech
            </h2>
            <p className="text-xl text-primary dark:text-primary-light font-semibold mb-4">
              Bytes & Banter Podcast
            </p>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
              ragTech is a tech podcast dedicated to simplifying technology and making it accessible to everyone. We believe that tech shouldn&apos;t be intimidating – it should be fun, engaging, and easy to understand!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold text-lg hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Learn More</span>
              <span className="text-2xl">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section
        className="py-20 px-6 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 dark:bg-neutral-900"
        id="waitlist"
      >
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brownDark dark:text-brown">
              Join the Waitlist
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
              No payment required — just drop your email and we&apos;ll let you know when Willage is ready for you.
            </p>
          </motion.div>

          <WillageWaitlistSection />
        </div>
      </section>
    </main>
  );
}
