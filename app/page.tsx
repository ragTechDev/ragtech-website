'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden bg-gradient-to-br from-accent/40 via-pink-50 to-secondary/30">
        {/* Geometric Background */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brown/10 rounded-full blur-3xl" />

        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          {/* Award badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 dark:bg-neutral-800/60 px-4 py-1.5 text-sm font-semibold text-brownDark dark:text-brown shadow-sm backdrop-blur">
              🏆 Award-winning tech podcast
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-brown"
          >
            Making technology accessible
          </motion.h2>

          {/* Co-founders Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-center items-center md:items-end gap-8 md:gap-4 mb-12 max-w-4xl mx-auto"
          >
            {/* Natasha */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/assets/team/natasha.PNG"
                  alt="Natasha"
                  width={200}
                  height={200}
                  className="w-41 md:w-51 h-auto"
                  style={{ width: 'auto', height: 'auto' }}
                />
                {/* Capybara Mascot */}
                <div className="absolute -bottom-2 -right-2 w-12 h-16 md:w-14 md:h-20">
                  <Image
                    src="/assets/techybara/techybara-holding-mic.png"
                    alt="Mic Capybara"
                    width={280}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Name Label */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full shadow-lg border-2 border-white transform -rotate-2">
                  <p className="font-bold text-sm whitespace-nowrap">Natasha 🚀</p>
                </div>
                {/* Vocation Label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg border-2 border-primary transform rotate-1">
                  <p className="text-xs font-semibold text-brownDark dark:text-brown whitespace-nowrap">Software Engineer</p>
                </div>
              </div>
            </div>

            {/* Saloni */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/assets/team/saloni.PNG"
                  alt="Saloni"
                  width={250}
                  height={250}
                  className="w-48 md:w-56 h-auto"
                  style={{ width: 'auto', height: 'auto' }}
                />
                {/* Capybara Mascot */}
                <div className="absolute -bottom-2 -right-2 w-12 h-16 md:w-14 md:h-20">
                  <Image
                    src="/assets/techybara/techybara-holding-laptop.png"
                    alt="Laptop Capybara"
                    width={280}
                    height={400}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Name Label */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-2 rounded-full shadow-lg border-2 border-white transform rotate-2">
                  <p className="font-bold text-sm whitespace-nowrap">Saloni 💻</p>
                </div>
                {/* Vocation Label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg border-2 border-secondary transform -rotate-1">
                  <p className="text-xs font-semibold text-brownDark dark:text-brown whitespace-nowrap">Software Developer</p>
                </div>
              </div>
            </div>

            {/* Victoria */}
            <div className="relative group">
              <div className="relative">
                <Image
                  src="/assets/team/victoria.PNG"
                  alt="Victoria"
                  width={250}
                  height={250}
                  className="w-48 md:w-56 h-auto"
                  style={{ width: 'auto', height: 'auto' }}
                />
                {/* Capybara Mascot */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-14 md:h-14">
                  <Image
                    src="/assets/techybara/techybara-with-two-children.png"
                    alt="Futurenet Capybara"
                    width={56}
                    height={56}
                    className="w-full h-full"
                  />
                </div>
                {/* Name Label */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-accent text-brown px-4 py-2 rounded-full shadow-lg border-2 border-white transform -rotate-1">
                  <p className="font-bold text-sm whitespace-nowrap">Victoria ✨</p>
                </div>
                {/* Vocation Label */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg border-2 border-accent transform rotate-2">
                  <p className="text-xs font-semibold text-brownDark dark:text-brown whitespace-nowrap">Solutions Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-brown mb-10 max-w-3xl mx-auto"
          >
            We&apos;re three Singapore-based technologists who seek to <span className="font-bold text-brownDark dark:text-primary">demystify technology in human terms</span>, so people can engage with it <span className="font-semibold text-primary dark:text-secondary">thoughtfully</span> rather than passively. Through <span className="font-semibold text-primary dark:text-accent">storytelling, playful learning, and applied research</span>, we help people understand <span className="font-bold text-brownDark dark:text-primary">how tech works</span>, how it affects society, and how to engage with it responsibly.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/willage"
              className="px-8 py-4 bg-white dark:bg-neutral-800 text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              Join Willage Waitlist🏘️
            </Link>
            <Link
              href="/techie-taboo"
              className="px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🃏Play Techie Taboo!
            </Link>
            <Link
              href="https://www.youtube.com/@ragTechDev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-neutral-800 text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            >
              Watch on YouTube🎙️
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Projects Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-brownDark bg-clip-text text-transparent">
              Our Approach
            </h2>
            <p className="text-lg text-brown max-w-2xl mx-auto">
              We use multiple complementary formats to reach people where they are
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            {/* Left Arrow */}
            <button
              onClick={() => scroll('left')}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-colors border-2 border-primary/20"
              aria-label="Scroll left"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll('right')}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-colors border-2 border-primary/20"
              aria-label="Scroll right"
            >
              <FaChevronRight className="text-xl" />
            </button>

            <div ref={carouselRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 py-2">
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  title="🎙️ ragTech Podcast"
                  description="Real conversations with people in tech about real life in tech—work, trade-offs, constraints, and consequences. Join our casual chats as we build shared understanding and reduce intimidation around tech!"
                  link="https://www.youtube.com/@ragTechDev"
                  linkText="Watch on YouTube"
                  image="/assets/techybara/techybara-holding-follow-card-saying-subscribe.png"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  title="🏘️ Willage"
                  description="A safety-first creator platform putting comment permissions, invite-gated trust, and a real moderation team ahead of growth metrics. Join the waitlist and help us build a safer place to post!"
                  link="/willage"
                  linkText="Join Waitlist"
                  icon="🏘️"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  title="🎲 Techie Taboo"
                  description="A card game inspired by Taboo for techies and non-techies, using technical concepts to encourage explanation and discussion. Come make tech concepts approachable and fun for non-experts, classrooms, and workplaces with us!"
                  link="/techie-taboo"
                  linkText="Join Waitlist"
                  image="/assets/techybara/techybaras-playing-card-game.png"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  badge="Past project"
                  title="🔬 FutureNet"
                  description="Human-centred research into the digital landscape for children and adolescents, with a focus on cyber safety and online harm. We aim to produce grounded insights that inform parents, educators, and future interventions!"
                  link="https://futurenet.ragtechdev.com/"
                  linkText="Learn More"
                  image="/assets/techybara/techybara-with-two-children.png"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  title="👩‍🏫 Workshops"
                  description="Interactive workshops designed to help engineers communicate more effectively and empower non-technical folks to understand technology better. Let us help bridge the gap between tech and non-tech!"
                  link="/contact"
                  linkText="Get in Touch"
                  image="/assets/techybara/techybara-teacher.png"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  title="📘 Illustrated Tech Book"
                  description="We&apos;re working on an illustrated, non-technical book explaining how certain technologies work and their implications on society... Stay tuned!"
                  link="/contact"
                  linkText="Coming Soon"
                  image="/assets/techybara/techybara-teacher.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brownDark via-primary to-secondary bg-clip-text text-transparent">
                Why We Exist
              </h2>
              <p className="text-lg text-brown mb-6 leading-relaxed">
                Technology increasingly shapes how we work, learn, communicate, and grow up. Yet most people are expected to engage with complex digital systems without understanding how they work, knowing whose incentives they serve, or being equipped to question their impact.
              </p>
              <p className="text-lg text-brown mb-8 leading-relaxed">
                We exist to close this gap by demystifying technology in human terms, prioritizing plain language over jargon, lived experience over abstraction, and transparency over authority.
              </p>
              <Link
                href="/about"
                className="inline-block px-8 py-4 bg-gradient-to-r from-brown to-brownDark text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-primary/30 to-accent/40 p-8 rounded-2xl border-2 border-primary/30 text-center">
                <FaLightbulb className="text-5xl text-brownDark mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-brown">Innovation</h3>
                <p className="text-brown/80 text-sm">
                  Creating unique tech experiences
                </p>
              </div>
              <div className="bg-gradient-to-br from-secondary/30 to-accent/40 p-8 rounded-2xl border-2 border-secondary/30 text-center">
                <FaUsers className="text-5xl text-brownDark mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-brown">Community</h3>
                <p className="text-brown/80 text-sm">
                  Building engaged learning communities
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-accent/30 via-pink-50 to-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8 flex justify-center">
              <Image 
                src="/assets/techybara/techybara-sparkle-eyes.png" 
                alt="Sparkle" 
                width={160} 
                height={160}
                className="w-40 h-auto"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-brownDark via-primary to-secondary bg-clip-text text-transparent">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-brown mb-10 max-w-2xl mx-auto">
              Whether you have an idea, want to join our community, or just want to say hi, we&apos;d love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-brown to-brownDark text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
              <Link
                href="https://www.youtube.com/@ragTechDev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-brown border-2 border-brown rounded-full font-semibold hover:bg-brown hover:text-white transition-all duration-300"
              >
                Watch on YouTube
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
