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
    tag: 'FOR ENGINEERING TEAMS',
    title: 'Intentional AI for High-Impact Delivery',
    description:
      'A practical workshop for engineering and operations teams to evaluate where AI adds meaningful value and where it introduces unnecessary cost, risk, or resource usage.',
    highlights: [
      '60-90 minute format for teams and leadership groups',
      'Custom scenario cards mapped to your business domain',
      'Team exercise: classify high-impact vs low-impact AI use cases',
      'Focus on responsible resource usage, including energy and water awareness',
      'Includes live technical demonstrations for implementation decisions',
    ],
    image: '/workshop/intentional-ai-corporate-workshop.jpg',
    speakerNote: 'Designed and facilitated by Natasha',
  },
  {
    tag: 'FOR SOFTWARE ENGINEERS',
    title: 'AI 101 for Software Developers',
    description:
      'A hands-on session for developers who want practical AI workflows they can use immediately in day-to-day engineering work.',
    highlights: [
      '60-90 minute workshop with implementation-focused guidance',
      'Covers scoped coding tasks, PR review, framework explainers, and test generation',
      'Discusses where AI improves velocity and where human judgment is critical',
      'Includes live app-building workflow demonstrations',
      'Delivered with real examples from production engineering contexts',
    ],
    image: '/workshop/saloni-ai-101-for-software-developers.jpg',
    speakerNote: 'Delivered by Saloni',
  },
  {
    tag: 'FOR PRODUCT AND BUSINESS',
    title: 'Tech Concepts for Product Managers',
    description:
      'Bridge the communication gap between product, engineering, and business stakeholders with practical explanations of modern delivery systems and AI foundations.',
    highlights: [
      '60-90 minute workshop for PMs and cross-functional teams',
      'Covers CI/CD, LLM fundamentals, and common misconceptions',
      'Explains limitations, reliability, and risk in AI-enabled product decisions',
      'Analogy-based teaching for non-engineering audiences',
      'Can run standalone or as a companion to AI 101 for engineers',
    ],
    image: '/workshop/saloni-tech-concepts-for-pm-workshop.jpg',
    speakerNote: 'Delivered by Saloni',
  },
  {
    tag: 'FOR LEADERSHIP AND EVENTS',
    title: 'Navigating AI Ethics and Governance',
    description:
      'A facilitated panel or keynote format for leaders and practitioners exploring ethics principles, accountability, and practical governance for AI initiatives.',
    highlights: [
      '60-90 minute panel, fireside, or keynote options',
      'Topics include bias, accountability, and decision-making tradeoffs',
      'Designed for leadership offsites, innovation forums, and internal summits',
      'Includes moderated Q and A with audience engagement',
      'Can be customized to industry-specific policy and risk concerns',
    ],
    image: '/workshop/natasha-tech-sustainability-panel.jpg',
    speakerNote: 'Organized and facilitated by Natasha',
    videoUrl: 'https://www.youtube.com/watch?v=BPYt_Xs20q8&t=1400s',
  },
  {
    tag: 'FOR INNOVATION PROGRAMS',
    title: 'Hackathon Facilitation and Judging',
    description:
      'From kickoff design to final judging, we support corporate hackathons with clear challenge framing, mentoring, and evaluation criteria.',
    highlights: [
      'Half-day, full-day, and multi-week innovation formats',
      'Mentor office hours, judging rubrics, and finalist showcase support',
      'Themes available: AI for good, open source, sustainability tech',
      'Hybrid and livestream support for distributed teams',
      'Delivered by facilitators with hands-on hackathon judge experience',
    ],
    image: '/workshop/natasha-intentional-ai-workshop.jpg',
    speakerNote: 'Facilitated by the RagTech team',
  },
];

const formats = [
  { label: 'Lunch and Learn', duration: '45-60 min', desc: 'Focused sessions for department-wide upskilling' },
  { label: 'Team Workshops', duration: '60-120 min', desc: 'Hands-on collaborative working sessions' },
  { label: 'Leadership Briefings', duration: '45-90 min', desc: 'Decision-oriented sessions for leads and managers' },
  { label: 'Hackathons', duration: 'Half day to multi-week', desc: 'Innovation programs with mentoring and judging' },
];

const icebreakerFeatures = [
  'Custom Techie Taboo cards adapted to your team context and vocabulary',
  'Gets technical and non-technical stakeholders aligned quickly',
  'Creates shared language before deeper workshop discussion',
  'Can be included as a standalone team-building activity',
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

const audiences = [
  { label: 'Engineering Teams', icon: 'ENG' },
  { label: 'Product and Design', icon: 'PM' },
  { label: 'Data and AI Teams', icon: 'AI' },
  { label: 'Leadership Groups', icon: 'LDR' },
  { label: 'Innovation Programs', icon: 'INN' },
  { label: 'Internal Tech Communities', icon: 'COM' },
];

export default function CorporateWorkshopsPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const speakers = useMemo(
    () => team.filter((member) => ['Natasha', 'Saloni', 'Victoria'].includes(member.name)),
    []
  );

  return (
    <main>
      <Hero
        heroImage="/assets/techybara/techybara-with-two-children.png"
        title="Corporate Workshops"
        subtitle="Responsible Tech for Modern Delivery Teams"
        description="RagTech helps engineering, product, and leadership teams adopt AI and software practices with practical, high-impact workshops."
        backgroundGradient={true}
      />

      <section className="py-10 px-6 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
            We work with
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {audiences.map((a) => (
              <span
                key={a.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-700 dark:text-neutral-300 shadow-sm"
              >
                <span>{a.icon}</span> {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center shadow-lg"
          >
            <div className="flex-shrink-0">
              <Image
                src="/assets/cards/front.png"
                alt="Techie Taboo card front"
                width={180}
                height={280}
                className="w-32 md:w-40 h-auto rounded-xl shadow-md"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Signature Icebreaker</p>
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-3">
                Techie Taboo for Teams
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-5">
                We use our custom Techie Taboo card game to kick off corporate workshops. It quickly creates shared context,
                encourages participation, and makes complex topics easier to discuss across functions.
              </p>
              <ul className="space-y-2">
                {icebreakerFeatures.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="text-primary mt-0.5 flex-shrink-0">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
              Corporate Programmes
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Each programme is tailored to your team goals, role mix, and delivery context.
            </p>
          </motion.div>

          <div className="space-y-10">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-stretch`}
              >
                <div className="lg:w-1/4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 min-h-[180px] overflow-hidden">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    width={800}
                    height={600}
                    className="w-full h-full min-h-[180px] object-cover"
                  />
                </div>

                <div className="lg:w-3/4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-7 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{workshop.tag}</p>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{workshop.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-3">{workshop.description}</p>
                  <p className="text-xs font-semibold text-primary mb-5">{workshop.speakerNote}</p>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3 text-sm uppercase tracking-wide">
                    Programme Highlights
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {workshop.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-neutral-700 dark:text-neutral-300 text-sm">
                        <span className="text-primary mt-0.5 flex-shrink-0">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex px-5 py-2.5 rounded-full bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Book This Session
                    </Link>
                    {workshop.videoUrl ? (
                      <a
                        href={workshop.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-semibold text-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                      >
                        Watch Recording
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              We adapt to your team structure, timeline, and operating cadence.
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
                <p className="text-xl font-bold text-primary mb-1">{format.label}</p>
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-3">{format.duration}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{format.desc}</p>
              </motion.div>
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
              Meet the Speakers
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Practicing engineers and tech leaders who bring implementation reality into every session.
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
              See Us in Action
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Recordings from talks and sessions led by our facilitators.
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

      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-5">
            Bring RagTech to Your Team
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 max-w-2xl mx-auto">
            Share your goals, team profile, and preferred format. We will tailor a workshop plan aligned to your business context.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            Available for engineering orgs, product teams, leadership offsites, and internal community programs.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {selectedMember && <BusinessCard member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </main>
  );
}
