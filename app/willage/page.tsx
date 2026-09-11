'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserFriends, FaCommentSlash, FaAndroid, FaLinkedin } from 'react-icons/fa';
import InstagramEmbed from './InstagramEmbed';
import WillageWaitlistSection from './WillageWaitlistSection';

const features = [
  {
    icon: <FaUserFriends className="text-4xl text-secondary" />,
    title: 'Invite-Only, Real Accountability',
    text: 'Every account joins through an invite chain, requiring inviter approval.',
  },
  {
    icon: <FaAndroid className="text-4xl text-primary" />,
    title: 'Real People, Not Bots',
    text: 'hCaptcha and other anti-bot measures to keep fake accounts, harassment and spam off the platform.',
  },
  {
    icon: <FaCommentSlash className="text-4xl text-accent" />,
    title: 'Real Accountability for Repeat Harrassers',
    text: 'A moderation system that tracks patterns of harassment and enforces consequences for repeat offenders.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary" />,
    title: 'Built for Creator Safety',
    text: 'Select the specific audience you want to allow to see your content, along with block, mute, and report tools.',
  },
];

const borderColors = [
  'border-primary hover:border-primary/70',
  'border-secondary hover:border-secondary/70',
  'border-accent hover:border-accent/70',
  'border-primary hover:border-primary/70',
];

const howItWorksSteps = [
  {
    gif: '/assets/willage/create-account.gif',
    alt: 'Demo of creating a Willage account',
    step: '1',
    title: 'Create Your Account',
    text: 'Sign up with an invite code to verify you’re a real person — no bots, no fakes, no anonymous burner accounts.',
  },
  {
    gif: '/assets/willage/invite-someone.gif',
    alt: 'Demo of inviting someone to Willage',
    step: '2',
    title: 'Invite Someone You Trust',
    text: 'Bring friends and community members in through your own invite chain with your own invite code, so every account can be traced back to a real relationship.',
  },
  {
    gif: '/assets/willage/approve-account.gif',
    alt: 'Demo of approving an invited account',
    step: '3',
    title: 'Approve New Members',
    text: 'Inviters review and approve requests to verify their invite code is used by the intended recipient, keeping the community accountable from the very first step.',
  },
];

const founders = [
  {
    name: 'Saloni',
    role: 'Software Developer',
    text: 'Software developer who loves breaking down complex concepts into bite-sized, understandable pieces.',
    image: '/assets/team/saloni.PNG',
    linkedInUrl: 'https://www.linkedin.com/in/saloni-kaur/',
    borderColor: 'border-primary hover:border-primary/70',
  },
  {
    name: 'Victoria',
    role: 'Solutions Engineer',
    text: 'Combines technical expertise with storytelling to make tech topics engaging and relatable.',
    image: '/assets/team/victoria.PNG',
    linkedInUrl: 'https://www.linkedin.com/in/victoria2666/',
    borderColor: 'border-secondary hover:border-secondary/70',
  },
  {
    name: 'Natasha',
    role: 'Software Engineer',
    text: 'Passionate about making technology inclusive and accessible for everyone, regardless of their background.',
    image: '/assets/team/natasha.PNG',
    linkedInUrl: 'https://www.linkedin.com/in/natashaannn/',
    borderColor: 'border-accent hover:border-accent/70',
  },
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
                  src="/assets/willage/create-account.gif"
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
                A women-led safety-first creator platform. Join the waitlist.
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

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary/10 via-white to-primary/10 dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-brownDark dark:text-brown"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto"
          >
            Willage&apos;s invite chain keeps every member accountable, from the moment they sign up.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white dark:border-neutral-800 max-w-[220px] w-full mb-6">
                  <Image
                    src={item.gif}
                    alt={item.alt}
                    width={722}
                    height={1510}
                    unoptimized
                    className="w-full h-auto"
                  />
                </div>
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-primary text-white font-bold mb-3">
                  {item.step}
                </span>
                <p className="font-bold text-brownDark dark:text-brown mb-2">{item.title}</p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 max-w-xs">{item.text}</p>
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

      {/* Founders Section */}
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
              Built by Women, For Everyone
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Willage is founded and built by the three women behind the ragTech podcast —
              engineers who&apos;ve lived the exact problem Willage solves, and designed it
              with women and creators&apos; safety in mind from day one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex flex-col items-center text-center p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-2 ${founder.borderColor}`}
              >
                <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-lg">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-bold text-lg text-brownDark dark:text-brown">{founder.name}</p>
                <p className="text-sm font-semibold text-primary dark:text-primary-light mb-3">
                  {founder.role}
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4">{founder.text}</p>
                <a
                  href={founder.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name}'s LinkedIn profile`}
                  className="text-neutral-500 hover:text-primary dark:text-neutral-400 dark:hover:text-primary-light transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </motion.div>
            ))}
          </div>
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
