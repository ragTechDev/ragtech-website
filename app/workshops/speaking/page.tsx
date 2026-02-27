'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import BusinessCard from '../../components/BusinessCard';
import TeamMemberCard, { TeamMember } from '../../components/TeamMemberCard';
import { team } from '../../data/team';

const speakingTopics = [
  'Responsible AI in Practice: from principles to team decisions',
  'Will AI Replace Developers? Practical adoption patterns for engineering teams',
  'Tech Concepts for Product and Business Stakeholders',
  'Personal Branding and Career Growth in Tech',
  'System Design Thinking and Interview Readiness',
];

const speakingFormats = [
  'Conference keynote',
  'Panel speaker or moderator',
  'Fireside chat',
  'Workshop + talk combination',
];

const speakingCaseStudies = [
  {
    src: '/workshop/natasha-tech-sustainability-panel.jpg',
    alt: 'Tech sustainability panel',
    caption: 'Ethics and sustainability panel speaking engagement',
  },
  {
    src: '/workshop/victoria-system-design-workshop.jpg',
    alt: 'Victoria speaking session',
    caption: 'Technical talk',
  },
  {
    src: '/workshop/natasha-motivational-sharing-as-woman-in-tech.jpg',
    alt: 'Motivational sharing as woman in tech',
    caption: 'Women in tech motivational speaking session',
  },
  {
    src: '/workshop/natasha-human-library-speaker.jpg',
    alt: 'Human library talk',
    caption: 'Community speaking and mentoring conversation',
  },
];

const featuredVideos = [
  {
    title: 'Navigating the Ethical Landscape of AI: Causality, Principles and Perspectives',
    speaker: 'Organized and facilitated by Natasha',
    src: 'https://www.youtube.com/embed/BPYt_Xs20q8?start=1400',
  },
  {
    title: 'Networking for Techies - JuniorDevSG',
    speaker: 'By Natasha',
    src: 'https://www.youtube.com/embed/oE_EWQUYpj8?start=6',
  },
  {
    title: 'Interview Ready Online Course Series',
    speaker: 'By Saloni',
    src: 'https://www.youtube.com/embed/WJS2QeE1_-4',
  },
];

export default function SpeakingPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const speakers = useMemo(
    () => team.filter((member) => ['Natasha', 'Saloni', 'Victoria'].includes(member.name)),
    []
  );

  return (
    <main>
      <Hero
        heroImage="/assets/techybara/techybara-holding-mic.png"
        title="Speaking Opportunities"
        subtitle="Paid Speakers for Events"
        description="For organizers looking for paid speakers, moderators, and panelists for responsible tech, software engineering, and career growth topics."
        backgroundGradient={true}
      />

      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-5">Popular Speaking Topics</h2>
            <div className="space-y-4">
              {speakingTopics.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-5">Speaker Formats</h2>
            <div className="space-y-4">
              {speakingFormats.map((item) => (
                <div key={item} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-accent/15 via-secondary/10 to-primary/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Speaking Case Studies
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {speakingCaseStudies.map((item, index) => (
              <motion.figure
                key={item.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-neutral-800/80 rounded-2xl overflow-hidden shadow-lg border border-white/50 dark:border-neutral-700"
              >
                <Image src={item.src} alt={item.alt} width={1200} height={800} className="w-full h-72 object-cover" />
                <figcaption className="p-5 text-neutral-700 dark:text-neutral-300 font-semibold">
                  {item.caption}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Available Speakers
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Tap a speaker card to view contact details and profile.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-8 justify-center">
            {speakers.map((member, index) => (
              <div key={member.name} className="w-full md:w-[calc(33.333%-1.5rem)]">
                <TeamMemberCard member={member} index={index} onClick={setSelectedMember} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Featured Recordings
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.article
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-lg"
              >
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">{video.title}</h3>
                  <p className="text-sm font-semibold text-primary">{video.speaker}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-5">
            Book a Paid Speaker
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            Share your event format, audience, and topic goals. We will propose the best speaker and format.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {selectedMember && (
        <BusinessCard member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </main>
  );
}
