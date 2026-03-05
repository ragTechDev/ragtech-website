'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';
import Hero from '../components/Hero';
import BusinessCard from '../components/BusinessCard';
import TeamMemberCard, { TeamMember } from '../components/TeamMemberCard';
import { team } from '../data/team';

const values = [
  {
    icon: <FaLightbulb className="text-5xl text-primary" />,
    title: 'Innovation',
    description:
      'We push boundaries and explore new ways to make technology more accessible and engaging.',
  },
  {
    icon: <FaUsers className="text-5xl text-secondary" />,
    title: 'Community',
    description:
      'Building a supportive community where everyone can learn and grow together.',
  },
  {
    icon: <FaRocket className="text-5xl text-accent" />,
    title: 'Impact',
    description:
      'Creating projects that make a real difference in how people understand and interact with technology.',
  },
  {
    icon: <FaHeart className="text-5xl text-primary" />,
    title: 'Passion',
    description:
      'We genuinely love what we do and are committed to making tech fun for everyone.',
  },
];

const episodes = [
  { url: 'https://youtu.be/FKcIMe44miw', img: '/episodes/ep_10x.webp', alt: '10x' },
  { url: 'https://youtu.be/MrU62CMdlus', img: '/episodes/ep_ai.jpg', alt: 'AI' },
  { url: 'https://youtu.be/2K8EsXQy2OU', img: '/episodes/ep_career.jpg', alt: 'Career' },
  { url: 'https://youtu.be/MHo_dqEZmN8', img: '/episodes/ep_career1.webp', alt: 'Career Part 1' },
  { url: 'https://youtu.be/UQxeOVvZrRI', img: '/episodes/ep_imposter.jpg', alt: 'Imposter Syndrome' },
  { url: 'https://youtu.be/ovx_xbz-fkM', img: '/episodes/ep_introvert.webp', alt: 'Introvert' },
  { url: 'https://youtu.be/0DWWiiBbc70', img: '/episodes/ep_joy.jpg', alt: 'Joy' },
  { url: 'https://youtu.be/NF6rMZLRwhY', img: '/episodes/ep_leadership.webp', alt: 'Leadership' },
  { url: 'https://youtu.be/gIorV-YCNQs', img: '/episodes/ep_martin.jpg', alt: 'Martin' },
  { url: 'https://youtu.be/kcI3lRNh5b0', img: '/episodes/ep_martin1.webp', alt: 'Martin Part 1' },
  { url: 'https://youtu.be/vy_XQVmPE3M', img: '/episodes/ep_promotion.jpg', alt: 'Promotion' },
  { url: 'https://youtu.be/Q-7eorueeRA', img: '/episodes/ep_saloni.webp', alt: 'Saloni' },
];

const missionPoints = [
  'Simplify complex tech topics',
  'Create engaging conversations',
  'Build a community',
  'Make tech fun and approachable',
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  return (
    <main>
      {/* Hero Section */}
      <Hero
        heroImage="/assets/techybara/techybara-holding-card.png"
        title=""
        titleOnImage={true}
        subtitle="About Us"
        description="We're on a mission to make technology accessible, engaging, and fun for everyone through innovative projects and meaningful conversations."
        backgroundGradient={true}
      />

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                ragTech was founded with a simple belief: <strong className="text-primary">technology shouldn&apos;t be intimidating</strong>. 
                It should be accessible, fun, and a source of inspiration for everyone, regardless of their background or experience level.
              </p>
              <p>
                What started as a conversation between friends about the lack of approachable tech content 
                has grown into a podcast that bridge the gap between complex 
                technology and everyday understanding.
              </p>
              <p>
                From our <strong className="text-primary">podcast</strong> that demystifies tech, to the 
                <a href="https://ragtechdev.com/techie-taboo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Techie Taboo game</a> that challenges how we communicate about technology, 
                and <a href="https://ragtechdev.com/futurenet" target="_blank" rel="noopener noreferrer" className="text-brown hover:underline font-semibold">FutureNet</a>—our research initiative exploring the digital landscape for 
                children and families—we create experiences that educate, entertain, and foster meaningful conversations.
              </p>
              <p>
                Through <strong className="text-brown">FutureNet</strong>, we&apos;re taking a deeper look at how technology impacts 
                the next generation, giving our children a chance to grow up like we did—with thoughtful guidance from technologists 
                who understand both the opportunities and challenges of the digital world.
              </p>
              <p>
                <strong>Brand partnerships and collaborations?</strong> Check out our <a href="https://ragtechdev.com/rate-card" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">media kit and rate card</a> to see how we can work together.
              </p>
              <p>
                We stand for innovation that challenges the norm, conversations that matter, and projects that 
                make technology more human. Join us on this journey as we continue to explore, create, and inspire.
              </p>
            </div>
          </motion.div>

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <img
              src="/assets/team/ragtech-team.png"
              alt="ragTech Team"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              What We Stand For
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Our core values guide everything we create and every conversation we have.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Co-Hosts
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              The passionate voices behind Bytes & Banter podcast.
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-8 justify-center">
            {team.map((member, index) => (
              <div key={member.name} className="w-full md:w-[calc(33.333%-1.5rem)]">
                <TeamMemberCard
                  member={member}
                  index={index}
                  onClick={setSelectedMember}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-900 dark:text-white">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-neutral-600 dark:text-neutral-400">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-3xl">✨</span>
                  <p className="text-left">
                    <strong className="text-neutral-900 dark:text-white">{point}</strong> for everyone
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Episodes Gallery Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20 dark:from-accent/30 dark:via-secondary/20 dark:to-primary/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Episodes Gallery
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Explore our conversations about technology, career growth, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {episodes.map((episode, index) => (
              <motion.a
                key={episode.url}
                href={episode.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={episode.img}
                  alt={`Episode: ${episode.alt}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Examples Section */}
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
              Content Examples
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              See our top-performing content across platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Techybara Comic Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
              <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Techybara Comic Carousel</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Every Monday on Instagram, LinkedIn & TikTok</p>
              </div>
              <div className="aspect-square overflow-hidden">
                <iframe
                  src="https://www.instagram.com/p/DVXHXwFCdJy/embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Valentine's Day Reel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
              <div className="p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-neutral-800 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Valentine's Day Reel</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">327K views • 17.9K interactions</p>
              </div>
              <div className="aspect-square overflow-hidden">
                <iframe
                  src="https://www.instagram.com/p/DUuH2KdEjNV/embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency
                  className="w-full h-full"
                />
              </div>
            </motion.div>

            {/* Latest Vodcast Episode */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700"
            >
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-neutral-800 dark:to-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
                <h3 className="font-bold text-neutral-900 dark:text-white mb-1">Latest Vodcast Episode</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">AI Wrappers • 1.3K views</p>
              </div>
              <div className="aspect-video overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/qw3dKhXV6Vw"
                  title="AI Wrappers Vodcast"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Business Cards Section */}
      <section className="py-20 px-6 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Reach out to the team directly via email or their professional profiles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl transition-all duration-300"
              >
                {/* Card Header */}
                <div
                  className="relative pt-12 pb-8 px-8"
                  style={{
                    background: `linear-gradient(135deg, ${
                      member.color.includes('primary')
                        ? '#fda2a9'
                        : member.color.includes('secondary')
                          ? '#a2d4d1'
                          : '#eec08c'
                    }40 0%, ${
                      member.color.includes('primary')
                        ? '#fda2a9'
                        : member.color.includes('secondary')
                          ? '#a2d4d1'
                          : '#eec08c'
                    }20 50%, ${
                      member.color.includes('primary')
                        ? '#fda2a9'
                        : member.color.includes('secondary')
                          ? '#a2d4d1'
                          : '#eec08c'
                    }10 100%)`,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${
                          member.color.includes('primary')
                            ? '#fda2a9'
                            : member.color.includes('secondary')
                              ? '#a2d4d1'
                              : '#eec08c'
                        } 0%, ${
                          member.color.includes('primary')
                            ? '#fda2a9'
                            : member.color.includes('secondary')
                              ? '#a2d4d1'
                              : '#eec08c'
                        }80 100%)`,
                      }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-brownDark dark:text-brown mb-1 text-center">
                      {member.name}
                    </h3>
                    <p
                      className="text-base font-semibold mb-1 text-center"
                      style={{ color: member.roleColor }}
                    >
                      {member.role}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                      ragTech
                    </p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="px-8 py-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-700 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-600 transition-colors mb-4"
                  >
                    <span className="text-lg">✉️</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">Email</p>
                      <p className="text-sm font-medium text-brownDark dark:text-brown truncate hover:text-primary">
                        {member.email}
                      </p>
                    </div>
                  </a>

                  {member.linkedInUrl && (
                    <a
                      href={member.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                    >
                      <span className="text-lg">in</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-blue-600 dark:text-blue-400">LinkedIn</p>
                        <p className="text-sm font-medium text-blue-700 dark:text-blue-300 truncate">
                          Connect
                        </p>
                      </div>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Card Modal */}
      {selectedMember && (
        <BusinessCard
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </main>
  );
}
