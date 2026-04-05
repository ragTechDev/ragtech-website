'use client';

import { useEffect } from 'react';

/**
 * Client component to load and initialize Mermaid diagram rendering.
 * Targets <div class="mermaid"> elements injected by the remark-mermaid plugin.
 */
export default function MermaidInit() {
  useEffect(() => {
    if ((window as MermaidWindow).mermaidLoaded) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js';
    script.async = true;
    script.onload = () => {
      (window as MermaidWindow).mermaidLoaded = true;
      (window as MermaidWindow).mermaid?.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          // ragTech brand colors (from tailwind.config.ts)
          primaryColor: '#fda2a9',       // primary pink
          primaryTextColor: '#8b5a49',   // brownDark — text on primary nodes
          primaryBorderColor: '#fc8b94', // primary dark
          secondaryColor: '#a2d4d1',     // secondary turquoise
          tertiaryColor: '#fff3c1',      // accent cream yellow
          lineColor: '#a2805d',          // brown
          edgeLabelBackground: '#fff3c1',
          clusterBkg: '#a2d4d1',
          titleColor: '#8b5a49',
          fontFamily: 'Inter, system-ui, sans-serif',
        },
      });
      (window as MermaidWindow).mermaid?.run();
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}

type MermaidWindow = Window & {
  mermaidLoaded?: boolean;
  mermaid?: {
    initialize: (config: Record<string, unknown>) => void;
    run: () => void;
  };
};
