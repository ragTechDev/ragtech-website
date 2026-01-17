'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaMicrophone, FaGamepad, FaLightbulb, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Hero from './components/Hero';
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
      <Hero
        title=""
        subtitle="Where bytes meet banter"
        description="ragTech is a tech podcast dedicated to simplifying technology and making it accessible to everyone. We believe that tech shouldn't be intimidating – it should be fun, engaging, and easy to understand!"
        heroImage="/assets/mic.png"
      >
        <Link
          href="/techie-taboo"
          className="px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Play Techie Taboo!
        </Link>
        <Link
          href="https://www.youtube.com/@ragTechDev"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-white dark:bg-neutral-800 text-primary border-2 border-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
        >
          Watch on YouTube
        </Link>
      </Hero>

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
              What We Do
            </h2>
            <p className="text-lg text-brown max-w-2xl mx-auto">
              Explore our innovative projects that combine technology, creativity, and community
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
                  title="ragTech Podcast"
                  description="A tech podcast that simplifies complex topics and makes technology accessible to everyone. Join Saloni, Victoria, and Natasha as they break down tech concepts with humor and insight."
                  link="https://www.youtube.com/@ragTechDev"
                  linkText="Watch on YouTube"
                  image="/assets/subscribe.png"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  title="Techie Taboo Game"
                  description="The ultimate tech communication challenge! Explain complex tech concepts, programming languages, and industry buzzwords without using the obvious terms. Perfect for tech teams and coding bootcamps."
                  link="/techie-taboo"
                  linkText="Join Waitlist"
                  image="/assets/games.png"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  title="FutureNet"
                  description="Giving our children a chance to grow up, like we did. A technologist-led research initiative into the digital landscape for children, adolescents, and their parents in today's connected world."
                  link="https://futurenet.ragtechdev.com/"
                  linkText="Learn More"
                  image="/assets/futurenet.png"
                />
              </div>
              <div className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)] snap-start h-full">
                <ProjectCard
                  title="Workshops"
                  description="Interactive workshops designed to help engineers communicate more effectively and empower non-technical folks to understand technology better. Bridge the gap between tech and non-tech."
                  link="/contact"
                  linkText="Get in Touch"
                  image="/assets/teacher.png"
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
                Our Story
              </h2>
              <p className="text-lg text-brown mb-6 leading-relaxed">
                We&apos;re a passionate team dedicated to making technology fun, engaging, and accessible to everyone
              </p>
              <p className="text-lg text-brown mb-8 leading-relaxed">
                From podcasts that simplify complex tech topics to interactive games that challenge your communication skills, 
                and research initiatives like FutureNet that explore the digital landscape for children and families—we believe 
                technology shouldn&apos;t be intimidating, it should be an adventure.
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
                src="/assets/sparkle.png" 
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
