'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero';
import BusinessCard from '../../components/BusinessCard';
import TeamMemberCard, { TeamMember } from '../../components/TeamMemberCard';
import { team } from '../../data/team';

const workshops = [
  {
    tag: 'FOR STUDENTS',
    title: 'Intro to Coding',
    description:
      'A hands-on session that demystifies programming for complete beginners. Students write their first lines of real code, solve mini challenges, and leave with the confidence that coding is something they can do.',
    highlights: [
      'Suitable for 60–90 minute classroom sessions or assembly talks',
      'Available for secondary, JC, and polytechnic/university levels',
      'Languages covered: Python, JavaScript, or web basics (HTML/CSS)',
      'No prior experience required — designed for absolute beginners',
      'In-person or virtual delivery options available',
    ],
    emoji: '💻',
  },
  {
    tag: 'FOR STUDENTS',
    title: 'Gen AI & Tech Literacy',
    description:
      'Students interact daily with AI-powered tools — but do they understand how they work, or when not to trust them? This workshop builds foundational AI literacy, covering how large language models function, responsible usage, bias, hallucinations, and the ethical implications of generative AI.',
    highlights: [
      'Suitable for 60-minute assembly talks or 90-minute workshops',
      'Available for secondary, JC, and polytechnic/university levels',
      'Covers: what is Gen AI, prompt engineering, bias & hallucinations, privacy, responsible use',
      'Interactive demos with live AI tools',
      'Flexible delivery: in-person or virtual',
    ],
    emoji: '🤖',
  },
  {
    tag: 'FOR STUDENTS',
    title: 'Mini Hackathon',
    description:
      'An energetic, team-based problem-solving experience. Students form small groups, tackle a real-world challenge, and pitch their ideas — all in one session. Perfect for innovation days, orientation events, or enrichment programmes.',
    highlights: [
      'Half-day or full-day format',
      'Suitable for secondary school through university',
      'Themes available: sustainability tech, community apps, AI for good, and more',
      'Facilitated by practising software engineers from RagTech',
    ],
    emoji: '🛠️',
  },
  {
    tag: 'FOR STUDENTS',
    title: 'Tech & Sustainability',
    description:
      'How is technology shaping our planet — for better and for worse? This session explores the intersection of tech and the environment: from the carbon cost of AI and data centres, to how engineers are building greener solutions. Students leave with a more critical lens on the digital world.',
    highlights: [
      'Suitable for 45–60 minute assembly talks or classroom sessions',
      'Adaptable for geography, computing, or general science classes',
      'Covers: AI energy usage, e-waste, green software, sustainable design',
      'Discussion-based activities included',
      'In-person or virtual delivery',
    ],
    emoji: '🌱',
  },
  {
    tag: 'FOR STUDENTS',
    title: 'Breaking Into Tech',
    description:
      'A candid, practical session on what a career in tech actually looks like — from software engineering and product management to UX and data. Our speakers share their own journeys, debunk myths about who belongs in tech, and give students a real playbook for getting started.',
    highlights: [
      'Suitable for 45–90 minute assembly talks or career day panels',
      'Available for upper secondary through university',
      'Covers: career paths, skills needed, how to get experience, navigating the industry',
      'Q&A and networking time with working engineers',
      'Especially popular for underrepresented groups in tech',
    ],
    emoji: '🚀',
  },
];

const formats = [
  { label: 'Assembly Talks', duration: '30–60 min', desc: 'Engaging large-group sessions for the whole cohort' },
  { label: 'Classroom Workshops', duration: '60–120 min', desc: 'Deeper, interactive small-group learning' },
  { label: 'Mini Hackathons', duration: 'Half or full day', desc: 'Team-based, project-driven problem solving' },
  { label: 'Career & Mentorship Panels', duration: '45–90 min', desc: 'Live Q&A with practising engineers' },
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

export default function SchoolWorkshopsPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const speakers = useMemo(
    () => team.filter((member) => ['Natasha', 'Saloni', 'Victoria'].includes(member.name)),
    []
  );

  return (
    <main>
      <Hero
        heroImage="/assets/techybara/techybara-teacher.png"
        title="School Workshops"
        subtitle="Real Engineers. Real Classrooms."
        description="RagTech brings practising software engineers into your school to teach code, explore AI, run hackathons, and inspire the next generation of tech builders."
        backgroundGradient={true}
      />

      {/* Workshop Programme Cards — Cyberlite-style */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Our Programmes
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Each workshop is designed and delivered by working software engineers. All sessions can be customised to your school's curriculum goals, age group, and event format.
            </p>
          </motion.div>

          <div className="space-y-12">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-stretch`}
              >
                {/* Emoji / Visual side */}
                <div className="lg:w-1/3 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-8xl min-h-[220px]">
                  {workshop.emoji}
                </div>

                {/* Content side */}
                <div className="lg:w-2/3 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{workshop.tag}</p>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{workshop.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-5">{workshop.description}</p>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">Programme Highlights:</h4>
                  <ul className="space-y-2">
                    {workshop.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-neutral-700 dark:text-neutral-300 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex px-6 py-3 rounded-full bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Formats */}
      <section className="py-20 px-6 bg-gradient-to-br from-accent/15 via-secondary/10 to-primary/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Delivery Formats
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              We fit around your timetable and event needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((format, index) => (
              <motion.div
                key={format.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-neutral-800/80 rounded-2xl p-6 shadow-md border border-white/50 dark:border-neutral-700 text-center"
              >
                <p className="text-2xl font-bold text-primary mb-1">{format.label}</p>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">{format.duration}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{format.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers */}
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
              Meet the Speakers
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              We're not professional trainers who used to work in tech — we're engineers who are still building, still learning, and bringing that real-world experience into every session.
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

      {/* Featured Recordings */}
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
              See Us in Action
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Past talks and recordings from our speakers.
            </p>
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

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-5">
            Bring RagTech to Your School
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 max-w-2xl mx-auto">
            Tell us what you're looking for — we'll tailor a session to your students, curriculum goals, and event format. All workshops can be customised according to your requirements.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            Suitable for secondary schools, junior colleges, polytechnics, and universities.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {selectedMember && (
        <BusinessCard member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </main>
  );
}