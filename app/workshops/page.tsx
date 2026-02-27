'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import BusinessCard from '../components/BusinessCard';
import TeamMemberCard, { TeamMember } from '../components/TeamMemberCard';
import { team } from '../data/team';

const paths = [
  {
    title: 'School Workshops',
    description: 'Interactive sessions for students and university communities on responsible tech, communication, and career readiness.',
    href: '/workshops/school',
    image: '/assets/techybara/techybara-teacher.png',
  },
  {
    title: 'Corporate Workshops',
    description: 'Practical team sessions for engineering, product, and leadership on AI usage, sustainability, and execution workflows.',
    href: '/workshops/corporate',
    image: '/assets/techybara/techybara-holding-laptop.png',
  },
  {
    title: 'Speaking Opportunities',
    description: 'For conferences and events seeking paid speakers on responsible AI, software engineering, and career growth in tech.',
    href: '/workshops/speaking',
    image: '/assets/techybara/techybara-holding-mic.png',
  },
];

const workshops = [
  {
    tag: 'RESPONSIBLE AI',
    title: 'Intentional AI',
    description:
      'Help your team or students use AI more consciously. This hands-on workshop uses custom cards to spark discussion around high-impact vs low-impact AI use cases — and what that means for energy, water, and ethical responsibility. Includes live demos.',
    highlights: [
      'Suitable for 60-minute lunchtime workshops or classroom sessions',
      'Custom AI application cards tailored to your industry or context',
      'Small group discussions: which AI use cases are truly worth it?',
      'Live demos included (e.g. generating SVG code vs image generation)',
      'Originally designed for data center operations teams at STT Global',
      'Adaptable for corporate, university, and secondary school audiences',
    ],
    image: '/workshop/intentional-ai-corporate-workshop.jpg',
    speakerNote: 'Designed and delivered by Natasha',
  },
  {
    tag: 'AI LITERACY',
    title: 'AI 101 for Everyone',
    description:
      'Will AI replace your job? This session answers the question honestly — with practical, real-world strategies for working with AI rather than being replaced by it. Tailored versions available for software engineers, product managers, and non-technical audiences.',
    highlights: [
      'Suitable for 60–90 minute workshops or assembly talks',
      'Available for corporate teams, university students, and career changers',
      'Covers: leaf-node coding, AI-assisted code review, explaining frameworks, test generation',
      'Live demo: vibe-coding a full app with AI vs building it manually',
      'Non-technical version covers LLMs, prompting, and AI product design',
      'Grounded in 10 years of real software engineering experience',
    ],
    image: '/workshop/saloni-ai-101-for-software-developers.jpg',
    speakerNote: 'Delivered by Saloni',
  },
  {
    tag: 'TECH CONCEPTS',
    title: 'Tech for Non-Techies',
    description:
      'Bridge the gap between technical and non-technical teams. Using everyday analogies — Spotify DJ, Duolingo tutors — this workshop unpacks how modern tech like LLMs, CI/CD pipelines, and system design actually work, without requiring a computer science degree.',
    highlights: [
      'Suitable for 60–90 minute workshops',
      'Ideal for product managers, business stakeholders, and curious non-engineers',
      'Covers: how LLMs work, their limitations, CI/CD pipelines, system design basics',
      'Analogy-first approach — no jargon, no assumptions',
      'Pairs well with the AI 101 session as a two-part series',
      'Based on a highly-rated workshop series run by WomenDevsSG',
    ],
    image: '/workshop/saloni-tech-concepts-for-pm-workshop.jpg',
    speakerNote: 'Delivered by Saloni',
  },
  {
    tag: 'ETHICS IN AI',
    title: 'Navigating AI Ethics',
    description:
      'A panel or facilitated talk exploring the ethical landscape of AI — causality behind AI trends, principles for builders, and the societal impact of AI decisions. Available as a keynote, panel, or fireside chat format.',
    highlights: [
      'Suitable for 90-minute panels, fireside chats, or keynote talks',
      'Available for corporate events, university forums, and tech conferences',
      'Topics: AI causality, ethics principles for builders, bias, accountability',
      'Can be run as a solo talk or facilitated panel with invited experts',
      'Includes audience Q&A and networking time',
      'Past panelists include academic researchers and senior industry leaders',
    ],
    image: '/workshop/natasha-intentional-ai-workshop.jpg',
    speakerNote: 'Organised and facilitated by Natasha',
    videoUrl: 'https://www.youtube.com/watch?v=BPYt_Xs20q8&t=1400s',
  },
  {
    tag: 'PERSONAL BRANDING',
    title: 'Make Opportunities Find You',
    description:
      'A practical personal branding workshop drawn from six years of consistent technical blogging and being recognised as one of only two GitHub Stars in Singapore. Learn how to build a presence in tech that opens doors — before you even send a CV.',
    highlights: [
      'Suitable for 60-minute webinars or classroom sessions',
      'Ideal for university students and early-career engineers',
      'Covers: building in public, technical writing, GitHub presence, LinkedIn strategy',
      'Real examples from a recognised technical blogger and GitHub Star',
      'Previously delivered at NTU as part of a Women in Tech mentoring series',
      'Honest, grounded, and specific — not generic career advice',
    ],
    image: '/workshop/victoria-personal-branding-workshop.jpg',
    speakerNote: 'Delivered by Victoria',
  },
  {
    tag: 'HACKATHONS',
    title: 'Hackathon Facilitation',
    description:
      'We design, host, and judge hackathons — from single-day school events to month-long open source challenges. Our Hacktoberfest open source hackathon for women ran over a full month, complete with livestream walkthroughs on how to make real contributions to open source projects.',
    highlights: [
      'Half-day, full-day, or multi-week formats available',
      'Experienced hackathon judges and facilitators',
      'Themes available: open source, sustainability tech, AI for good, community apps',
      'Livestream and hybrid formats supported',
      'We\'ve built the apps participants contribute to — we know the stack end-to-end',
      'Ideal for school innovation days, university clubs, and company tech events',
    ],
    image: '/workshop/hacktober-1.png',
    speakerNote: 'Facilitated by the full RagTech team',
  },
  {
    tag: 'INTERVIEW PREP',
    title: 'System Design for Beginners',
    description:
      'System design interviews are notoriously intimidating — even for experienced engineers. This workshop keeps it simple: short explanations, real examples, and a hands-on group activity designing a system for a product everyone knows.',
    highlights: [
      'Suitable for 90–120 minute workshops',
      'Available for university students and junior engineers',
      'Covers: what recruiters are looking for, design patterns, scalability basics',
      'Hands-on group activity: design a system for a real product (e.g. Netflix)',
      'No prior system design knowledge required',
      'Delivered by a Solutions Architect with startup and fintech experience',
    ],
    image: '/workshop/victoria-system-design-workshop.jpg',
    speakerNote: 'Delivered by Victoria',
  },
  {
    tag: 'NETWORKING & COMMS',
    title: 'Networking for Techies',
    description:
      'Most engineers hate networking. This session reframes it — using analogies from transformer models to attention mechanisms — to make networking feel more like systems thinking than small talk. Practical strategies drawn from leading partnerships at WomenDevsSG.',
    highlights: [
      'Suitable for 45–60 minute talks or workshops',
      'Ideal for university students, bootcamp graduates, and early-career engineers',
      'Covers: strategic networking, building relationships vs collecting contacts, online presence',
      'Tech analogies throughout — designed to resonate with engineers',
      'Q&A and live discussion included',
      'Also available as a women in tech empowerment workshop variant',
    ],
    image: '/workshop/natasha-motivational-sharing-as-woman-in-tech.jpg',
    speakerNote: 'Delivered by Natasha',
    videoUrl: 'https://www.youtube.com/watch?v=oE_EWQUYpj8&t=6s',
  },
];

const formats = [
  { label: 'Assembly Talks', duration: '30–60 min', desc: 'Engaging large-group sessions for the whole cohort' },
  { label: 'Classroom Workshops', duration: '60–120 min', desc: 'Deeper, interactive small-group learning' },
  { label: 'Hackathons', duration: 'Half day – 1 month', desc: 'Team-based, project-driven problem solving' },
  { label: 'Panels & Firesides', duration: '60–90 min', desc: 'Expert-led discussion with live Q&A' },
];

const icebreakerFeatures = [
  'Custom-printed cards covering topics like AI, open source, system design, and more',
  'Gets groups talking fast — no tech background required to play',
  'Naturally leads into the workshop topic without a formal intro',
  'Available as a standalone icebreaker session or bundled with any workshop',
];

const featuredVideos = [
  {
    title: 'Navigating the Ethical Landscape of AI: Causality, Principles and Perspectives',
    speaker: 'Organised and facilitated by Natasha',
    src: 'https://www.youtube.com/embed/BPYt_Xs20q8?start=1400',
  },
  {
    title: 'Networking for Techies — JuniorDevSG',
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
  { label: 'Universities', icon: '🎓' },
  { label: 'Corporate Teams', icon: '🏢' },
  { label: 'Women in Tech Groups', icon: '👩‍💻' },
  { label: 'Tech Community Events', icon: '🌐' },
];

export default function WorkshopsPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const speakers = useMemo(
    () => team.filter((member: TeamMember) => ['Natasha', 'Saloni', 'Victoria'].includes(member.name)),
    []
  );

  return (
    <main>
      <Hero
        title="Workshops & Speaking"
        subtitle="Choose the Format That Fits Your Audience"
        description="ragTech offers tailored programmes for schools, companies, and events seeking paid speakers."
        backgroundGradient={true}
      />

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
              Explore Offerings
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Pick a track below to view workshop types, formats, and examples.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paths.map((path, index) => (
              <motion.article
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-white dark:bg-neutral-800 shadow-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden"
              >
                <div className="h-52 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/15 flex items-center justify-center p-6">
                  <Image src={path.image} alt={path.title} width={200} height={200} className="h-40 w-auto" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{path.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6">{path.description}</p>
                  <Link
                    href={path.href}
                    className="inline-flex px-5 py-2.5 rounded-full bg-gradient-primary text-white font-semibold hover:opacity-90 transition-opacity"
                  >
                    View Details
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 px-6 bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
        <div className="container mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-6">
            We've worked with
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

      {/* Techie Taboo Icebreaker Callout */}
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
                Techie Taboo Card Game
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-5">
                We open most sessions with our custom-designed Techie Taboo card game — a fast, fun way to get groups engaged with tech concepts before the workshop even begins. It breaks the ice, sparks curiosity, and gets everyone on the same page without anyone feeling left behind.
              </p>
              <ul className="space-y-2">
                {icebreakerFeatures.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workshop Programme Cards */}
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
              Our Past Programmes
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Each workshop is designed and delivered by working software engineers. All sessions can be tailored to your audience, curriculum goals, and event format.
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
                {/* Visual side */}
                <div className="lg:w-1/4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 min-h-[180px] overflow-hidden">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    width={800}
                    height={600}
                    className="w-full h-full min-h-[180px] object-cover"
                  />
                </div>

                {/* Content side */}
                <div className="lg:w-3/4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-7 shadow-lg">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">{workshop.tag}</p>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">{workshop.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-5">{workshop.description}</p>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3 text-sm uppercase tracking-wide">
                    Programme Highlights
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {workshop.highlights.map((item) => (
                      <li key={item} className="flex gap-2 text-neutral-700 dark:text-neutral-300 text-sm">
                        <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex px-5 py-2.5 rounded-full bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Get a Quote
                    </Link>
                    {workshop.videoUrl && (
                      
                        <a
                        href={workshop.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 font-semibold text-sm hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                      >
                        ▶ Watch Recording
                      </a>
                    )}
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
              We fit around your timetable, venue, and event needs.
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
              We're not professional trainers who used to work in tech — we're engineers who are still building, still learning, and bringing that real-world experience into every session. Prominent leads at WomenDevsSG with experience across startups, fintech, and global tech.
            </p>
          </motion.div>

          {/* Speaker highlights */}
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
              Past recordings from our speakers and workshops.
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
            Bring RagTech to Your Event
          </h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4 max-w-2xl mx-auto">
            Tell us about your audience and goals — we'll put together a session that fits. All workshops can be customised by topic, format, and duration.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
            We work with secondary schools, JCs, polytechnics, universities, corporate teams, and community tech events.
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


