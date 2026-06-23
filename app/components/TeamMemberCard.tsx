'use client';

import { motion } from 'framer-motion';

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  experienceSummary?: string;
  experienceHighlights?: string[];
  featuredLinks?: { label: string; href: string }[];
  color: string;
  roleColor: string;
  image: string;
  email: string;
  linkedInUrl?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  onClick: (member: TeamMember) => void;
}

export default function TeamMemberCard({ member, index, onClick }: TeamMemberCardProps) {
  return (
    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 cursor-pointer group"
      onClick={() => onClick(member)}
    >
      <div className={`h-48 bg-gradient-to-br ${member.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <img src={member.image} alt={member.name} className="w-40 h-40 rounded-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white">{member.name}</h3>
        <p className="mb-4" style={{ color: member.roleColor, fontWeight: 800 }}>
          {member.role}
        </p>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{member.description}</p>

        {member.experienceSummary ? (
          <div className="mt-3 rounded-xl border border-neutral-200/70 dark:border-neutral-700/70 bg-white/70 dark:bg-neutral-800/60 backdrop-blur-sm p-3 shadow-sm">
            <p className="text-sm leading-relaxed font-semibold text-neutral-800 dark:text-neutral-200">
              {member.experienceSummary}
            </p>
          </div>
        ) : null}

        {member.experienceHighlights && member.experienceHighlights.length > 0 ? (
          <div className="mt-4">
            <p className="text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-neutral-400 mb-2">
              Experience Highlights
            </p>
            <ul className="space-y-1 list-disc pl-5 marker:text-primary">
              {member.experienceHighlights.slice(0, 2).map((highlight) => (
                <li key={highlight} className="text-sm text-neutral-600 dark:text-neutral-400 leading-snug">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <p className="mt-4 text-sm text-brownDark dark:text-brown font-semibold group-hover:underline">
          Tap to view business card ->
        </p>
      </div>
    </motion.div>
  );
}
