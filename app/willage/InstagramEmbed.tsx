'use client';

import { useEffect } from 'react';

/**
 * Client component to load Instagram's embed script
 * This ensures Instagram blockquote embeds are properly converted to iframes
 */
export default function InstagramEmbed() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
