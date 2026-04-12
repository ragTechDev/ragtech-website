'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FlippableCardProps {
  frontImage: string;
  backImage: string;
  alt?: string;
}

export default function FlippableCard({ 
  frontImage, 
  backImage, 
  alt = 'Techie Taboo Card' 
}: FlippableCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Instructions */}
      <motion.div 
        className="text-center bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 px-8 py-4 rounded-2xl border-2 border-primary/20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-2xl font-bold text-brownDark dark:text-brown mb-2 tracking-tight">
          Try it out!
        </p>
        <div className="flex flex-col gap-1 text-base font-medium text-neutral-700 dark:text-neutral-300">
          <p className="flex items-center justify-center gap-2">
            <span className="bg-primary text-white px-2 py-0.5 rounded font-semibold">Click card</span> to flip it front/back
          </p>
          <p className="flex items-center justify-center gap-2">
            <span className="bg-secondary text-white px-2 py-0.5 rounded font-semibold">Click button</span> below to rotate card
          </p>
        </div>
      </motion.div>

      {/* Card Container */}
      <motion.div
        className="relative cursor-pointer mx-4 md:mx-0"
        style={{
          perspective: 1000,
          width: '360px',
          height: '573px',
          maxWidth: 'calc(100vw - 3rem)',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* 3D Card */}
        <motion.div
          onClick={handleFlip}
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{ 
            rotateY: isFlipped ? 180 : 0,
            rotateZ: isRotated ? 180 : 0
          }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="relative w-full h-full"
        >
          {/* Front Side */}
          <motion.div
            className="absolute inset-0 backface-hidden overflow-hidden shadow-2xl rounded-3xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <Image
              src={frontImage}
              alt={`${alt} - Front`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-3xl"
              priority
            />
          </motion.div>

          {/* Back Side */}
          <motion.div
            className="absolute inset-0 backface-hidden overflow-hidden shadow-2xl rounded-3xl"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              rotateY: 180,
            }}
          >
            <Image
              src={backImage}
              alt={`${alt} - Back`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Shadow underneath */}
        <motion.div
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/20 blur-2xl rounded-full"
          animate={{
            opacity: 0.2,
            scale: 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Rotate Button */}
      <motion.button
        onClick={handleRotate}
        className="px-8 py-4 bg-white dark:bg-neutral-800 text-secondary border-2 border-secondary rounded-full font-semibold text-lg shadow-md hover:shadow-lg hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: isRotated ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          🔄
        </motion.span>
        Read Bottom Word
      </motion.button>

      {/* Status Indicators */}
      <div className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            isFlipped ? 'bg-secondary' : 'bg-primary'
          }`} />
          <span className="font-medium">
            {isFlipped ? 'Back' : 'Front'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            isRotated ? 'bg-secondary' : 'bg-primary'
          }`} />
          <span className="font-medium">
            {isRotated ? 'Bottom Word' : 'Top Word'}
          </span>
        </div>
      </div>
    </div>
  );
}
