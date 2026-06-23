'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { href: '/futurenet', label: 'FutureNet', external: false },
    { href: 'https://www.youtube.com/@ragTechDev', label: 'Podcast', external: true },
    {
      href: '/workshops',
      label: 'Workshops',
      external: false,
      children: [
        { href: '/workshops/school', label: 'School Workshops' },
        { href: '/workshops/corporate', label: 'Corporate Workshops' },
        { href: '/workshops/speaking', label: 'Speaking Opportunities' },
      ],
    },
    { href: '/blog', label: 'Blog', external: false },
    { href: '/contact', label: 'Contact', external: false },
    { href: '/techie-taboo', label: 'Techie Taboo', external: false },
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
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={link.children ? 'relative group' : ''}
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
                ) : link.children ? (
                  <>
                    <Link
                      href={link.href}
                      className="text-brown hover:text-brownDark transition-all duration-300 font-semibold hover:scale-105 inline-flex items-center gap-1"
                    >
                      {link.label}
                      <HiChevronDown className="text-base mt-[1px]" />
                    </Link>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-all duration-200">
                      <div className="w-64 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-xl p-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 rounded-lg text-sm font-semibold text-brown hover:text-brownDark hover:bg-primary/10 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
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
              {navLinks.map((link) => (
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
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-brown hover:text-brownDark transition-colors duration-300 font-semibold py-2 inline-block"
                    >
                      {link.label}
                    </Link>
                    {link.children ? (
                      <div className="pl-4 mt-2 flex flex-col gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-brownDark hover:text-brown font-semibold"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
