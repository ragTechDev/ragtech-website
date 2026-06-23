"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiMail } from "react-icons/hi";
import { FaLinkedin, FaBrain, FaGamepad } from "react-icons/fa";
import QRModal from "./QRModal";
import type { TeamMember } from "./TeamMemberCard";

interface BusinessCardProps {
  member: TeamMember;
  onClose: () => void;
}

export default function BusinessCard({ member, onClose }: BusinessCardProps) {
  const {
    name,
    role,
    email,
    linkedInUrl,
    image,
    color,
    roleColor,
    experienceSummary,
    experienceHighlights,
    featuredLinks,
  } = member;

  const [qrModal, setQrModal] = useState<{
    isOpen: boolean;
    value: string;
    title: string;
    color: string;
  }>({
    isOpen: false,
    value: "",
    title: "",
    color: "#fda2a9",
  });

  const openQRModal = (value: string, title: string, color: string) => {
    setQrModal({ isOpen: true, value, title, color });
  };

  const closeQRModal = () => {
    setQrModal({ isOpen: false, value: "", title: "", color: "#fda2a9" });
  };

  return (
    <>
      <AnimatePresence>
        {member && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={onClose}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.6 }}
              className="fixed inset-0 z-40 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="relative bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl w-full max-w-md pointer-events-auto overflow-y-auto"
                style={{ maxHeight: "90vh" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
                  aria-label="Close business card"
                >
                  <HiX className="w-6 h-6 text-brownDark dark:text-brown" />
                </button>

                <div
                  className="relative pt-12 pb-8 px-8"
                  style={{ background: `linear-gradient(135deg, ${color}40 0%, ${color}20 50%, ${color}10 100%)` }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className="w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-xl mb-4"
                      style={{ background: `linear-gradient(135deg, ${color} 0%, ${color}80 100%)` }}
                    >
                      <img src={image} alt={name} className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-3xl font-bold text-brownDark dark:text-brown mb-2">{name}</h2>
                    <p className="text-lg font-semibold mb-1" style={{ color: roleColor }}>
                      {role}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">ragTech</p>
                  </div>
                </div>

                <div className="px-8 py-6">
                  <div className="flex items-center gap-3 mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl">
                    <HiMail className="w-6 h-6 flex-shrink-0" style={{ color: roleColor }} />
                    <a
                      href={`mailto:${email}`}
                      className="text-sm font-medium text-brownDark dark:text-brown hover:text-primary transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>

                  {experienceSummary ? (
                    <div className="mb-6 rounded-2xl border border-neutral-200/70 dark:border-neutral-700/70 bg-white/70 dark:bg-neutral-800/60 backdrop-blur-sm p-4 shadow-sm">
                      <p className="text-sm leading-relaxed font-semibold text-neutral-800 dark:text-neutral-200">
                        {experienceSummary}
                      </p>
                    </div>
                  ) : null}

                  {experienceHighlights && experienceHighlights.length > 0 ? (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                        Workshop and Speaking Experience
                      </h3>
                      <ul className="space-y-2 list-disc pl-5 marker:text-primary">
                        {experienceHighlights.map((highlight) => (
                          <li key={highlight} className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {featuredLinks && featuredLinks.length > 0 ? (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                        Featured Talks
                      </h3>
                      <div className="flex flex-col gap-2">
                        {featuredLinks.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-primary hover:underline"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-3">
                      Quick Connect
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {linkedInUrl && (
                        <button
                          onClick={() => openQRModal(linkedInUrl, "Connect on LinkedIn", "#0077B5")}
                          className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 hover:from-blue-500/30 hover:to-blue-500/10 border-2 border-blue-500/20 hover:border-blue-500/40 transition-all hover:scale-105"
                        >
                          <FaLinkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">LinkedIn</span>
                        </button>
                      )}

                      <button
                        onClick={() =>
                          openQRModal(
                            "https://futurenet.ragtechdev.com/digital-parent-quiz",
                            "Digital Parent Quiz",
                            "#a2d4d1"
                          )
                        }
                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/5 hover:from-secondary/30 hover:to-secondary/10 border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105"
                      >
                        <FaBrain className="w-8 h-8 text-secondary" />
                        <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Quiz</span>
                      </button>

                      <button
                        onClick={() =>
                          openQRModal("https://ragtechdev.com/techie-taboo", "Techie Taboo Waitlist", "#fda2a9")
                        }
                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 hover:from-primary/30 hover:to-primary/10 border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
                      >
                        <FaGamepad className="w-8 h-8 text-primary" />
                        <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">Techie Taboo</span>
                      </button>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 italic">
                      Building technology that empowers communities
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <QRModal
        isOpen={qrModal.isOpen}
        onClose={closeQRModal}
        value={qrModal.value}
        title={qrModal.title}
        backgroundColor={qrModal.color}
      />
    </>
  );
}
