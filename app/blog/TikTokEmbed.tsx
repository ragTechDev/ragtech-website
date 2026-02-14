'use client';

import { useEffect } from 'react';

/**
 * Client component to load TikTok embed script
 * This ensures TikTok blockquote embeds are properly converted to iframes
 */
export default function TikTokEmbed() {
  useEffect(() => {
    // Check if TikTok script is already loaded
    if (window.tiktokEmbedScriptLoaded) {
      return;
    }

    // Load TikTok embed script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    script.onload = () => {
      window.tiktokEmbedScriptLoaded = true;
    };
    
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    tiktokEmbedScriptLoaded?: boolean;
  }
}
