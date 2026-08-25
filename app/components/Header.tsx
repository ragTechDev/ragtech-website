'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const projectLinks = [
  { href: '/futurenet', label: 'FutureNet', status: 'Inactive' },
  { href: '/techie-taboo', label: 'Techie Taboo', status: 'Waitlist' },
  { href: '/willage', label: 'Willage', status: 'Waitlist' },
];

const statusChipStyles: Record<string, string> = {
  Inactive: 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300',
  Waitlist: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
};

function StatusChip({ status }: { status: string }) {
  return (
    <span
      className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${statusChipStyles[status] ?? statusChipStyles.Inactive}`}
    >
      {status}
    </span>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', external: false },
    { href: '/about', label: 'About', external: false },
    { href: 'https://www.youtube.com/@ragTechDev', label: 'Podcast', external: true },
    { href: '/blog', label: 'Blog', external: false },
    { href: '/contact', label: 'Contact', external: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-accent/95 via-pink-50/95 to-secondary/95 backdrop-blur-md shadow-lg border-b-2 border-primary/20'
          : 'bg-gradient-to-r from-accent/80 via-pink-50/80 to-secondary/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/assets/logo/ragtech-logo-rectangle.png"
                alt="ragTech"
                width={180}
                height={48}
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 4).map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown hover:text-brownDark transition-all duration-300 font-semibold hover:scale-105 inline-block"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-brown hover:text-brownDark transition-all duration-300 font-semibold hover:scale-105 inline-block"
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Projects Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group"
            >
              <button
                className="flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-haspopup="true"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Projects
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                  className="inline-flex"
                >
                  <HiChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </motion.span>
              </button>
              <div className="absolute right-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-primary/10 py-2">
                  {projectLinks.map((project) => (
                    <Link
                      key={project.href}
                      href={project.href}
                      className="flex items-center justify-between gap-3 px-4 py-2 text-brown hover:bg-primary/10 hover:text-brownDark transition-colors duration-200"
                    >
                      <span className="font-semibold">{project.label}</span>
                      <StatusChip status={project.status} />
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>

            {navLinks.slice(4).map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 5) * 0.1 }}
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown hover:text-brownDark transition-all duration-300 font-semibold hover:scale-105 inline-block"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-brown hover:text-brownDark transition-all duration-300 font-semibold hover:scale-105 inline-block"
                  >
                    {link.label}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-brownDark hover:text-brown transition-colors duration-300 bg-white/50 p-2 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 bg-white/50 rounded-lg p-4"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.slice(0, 4).map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-brown hover:text-brownDark transition-colors duration-300 font-semibold py-2"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-brown hover:text-brownDark transition-colors duration-300 font-semibold py-2"
                  >
                    {link.label}
                  </Link>
                )
              ))}

              {/* Projects Submenu */}
              <div className="flex flex-col">
                <button
                  onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                  className="flex items-center justify-between gap-2 px-4 py-2 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg w-fit"
                  aria-expanded={isMobileProjectsOpen}
                >
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                    </span>
                    Projects
                  </span>
                  <HiChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${isMobileProjectsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMobileProjectsOpen && (
                  <div className="flex flex-col pl-4 space-y-1 pb-2">
                    {projectLinks.map((project) => (
                      <Link
                        key={project.href}
                        href={project.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between gap-3 text-brown hover:text-brownDark transition-colors duration-300 font-semibold py-1"
                      >
                        <span>{project.label}</span>
                        <StatusChip status={project.status} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(4).map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-brown hover:text-brownDark transition-colors duration-300 font-semibold py-2"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-brown hover:text-brownDark transition-colors duration-300 font-semibold py-2"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
