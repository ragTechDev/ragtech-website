'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  link?: string;
  linkText?: string;
  delay?: number;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  icon,
  link,
  linkText = 'Learn More',
  delay = 0,
  image,
}: ProjectCardProps) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      whileHover={{ y: -4 }}
      className="bg-gradient-to-br from-white via-accent/20 to-pink-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border-2 border-primary/20 cursor-pointer group h-full flex flex-col"
    >
      {/* Icon or Image */}
      {image ? (
        <div className="mb-6 h-32 flex items-center">
          <img
            src={image}
            alt={title}
            className="h-32 w-auto"
          />
        </div>
      ) : icon ? (
        <div className="mb-6 text-5xl">
          {icon}
        </div>
      ) : null}

      {/* Title */}
      <h3 className="text-2xl font-bold mb-4 text-brownDark group-hover:text-brown transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-brown mb-6 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Link */}
      {link && (
        <span className="inline-flex items-center text-brownDark font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
          {linkText}
          <span className="text-xl">→</span>
        </span>
      )}
    </motion.div>
  );

  return link ? (
    <Link href={link} className="block">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
