'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaHeart } from 'react-icons/fa';
import Hero from '../components/Hero';

const team = [
  {
    name: 'Saloni',
    role: 'Software Developer',
    description:
      'Software developer who loves breaking down complex concepts into bite-sized, understandable pieces.',
    color: 'from-primary/20 to-primary/5',
    roleColor: '#fda2a9',
    image: '/assets/saloni.png',
  },
  {
    name: 'Victoria',
    role: 'Solutions Engineer',
    description:
      'Combines technical expertise with storytelling to make tech topics engaging and relatable.',
    color: 'from-secondary/20 to-secondary/5',
    roleColor: '#a2d4d1',
    image: '/assets/victoria.png',
  },
  {
    name: 'Natasha',
    role: 'Software Engineer',
    description:
      'Passionate about making technology inclusive and accessible for everyone, regardless of their background.',
    color: 'from-accent/20 to-accent/5',
    roleColor: '#eec08c',
    image: '/assets/natasha.png',
  },
];

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

  return (
    <main>
      {/* Hero Section */}
      <Hero
        heroImage="/assets/card.png"
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
                From our <strong className="text-primary">podcast</strong> that demystifies tech, to the upcoming 
                <strong className="text-secondary"> Techie Taboo game</strong> that challenges how we communicate about technology, 
                and <strong className="text-brown">FutureNet</strong>—our research initiative exploring the digital landscape for 
                children and families—we create experiences that educate, entertain, and foster meaningful conversations.
              </p>
              <p>
                Through <strong className="text-brown">FutureNet</strong>, we&apos;re taking a deeper look at how technology impacts 
                the next generation, giving our children a chance to grow up like we did—with thoughtful guidance from technologists 
                who understand both the opportunities and challenges of the digital world.
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
              src="/assets/team.png"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
              >
                <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mb-4" style={{ color: member.roleColor, fontWeight: 800 }}>
                    {member.role}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
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
    </main>
  );
}
