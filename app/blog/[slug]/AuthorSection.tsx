'use client';

import { useState } from 'react';
import Image from 'next/image';
import BusinessCard from '@/app/components/BusinessCard';
import { team } from '@/app/data/team';
import type { TeamMember } from '@/app/components/TeamMemberCard';

interface AuthorSectionProps {
  author: {
    name: string;
    profilePicture?: string;
  };
  publishedDate: string;
  readTimeInMinutes?: number;
}

export default function AuthorSection({ author, publishedDate, readTimeInMinutes }: AuthorSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="flex flex-wrap items-center gap-4 text-neutral-600 dark:text-neutral-400 mb-4">
        <button
          onClick={() => {
            const member = team.find(m => m.name === author.name);
            if (member) setSelectedMember(member);
          }}
          className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer"
        >
          {author.profilePicture && (
            <Image
              src={author.profilePicture}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          <span className="font-semibold text-brownDark dark:text-brown">
            {author.name}
          </span>
        </button>
        <span>•</span>
        <span>{publishedDate}</span>
        {readTimeInMinutes && (
          <>
            <span>•</span>
            <span>{readTimeInMinutes} min read</span>
          </>
        )}
      </div>

      {/* Business Card Modal */}
      {selectedMember && (
        <BusinessCard
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
}
