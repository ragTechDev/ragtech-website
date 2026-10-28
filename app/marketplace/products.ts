export const GUMROAD_STORE_URL = 'https://ragtech.gumroad.com';

export interface MarketplaceProduct {
  slug: string;
  title: string;
  description: string;
  format: 'PDF' | 'Guide';
  /** Cover image under /public. Only set for products that exist as a PDF. */
  thumbnail?: string;
  /** Direct Gumroad product link. Falls back to the store page until the listing is live. */
  gumroadUrl?: string;
  /** Only PDF products are sellable for now. */
  available: boolean;
}

export const products: MarketplaceProduct[] = [
  {
    slug: 'se-interview-playbook',
    title: 'Solutions Engineer Interview Playbook',
    description:
      'A step-by-step playbook for landing a Solutions Engineer or Technical Solutions role, from prep to demo to follow-up.',
    format: 'PDF',
    thumbnail: '/assets/marketplace/ragTech-SE-Interview-Playbook.png',
    available: true,
  },
  {
    slug: 'job-search-tracker',
    title: 'ragTech Job Search Tracker',
    description:
      'A printable worksheet to track applications, research opportunities, prepare for interviews and stay sane.',
    format: 'PDF',
    thumbnail: '/assets/marketplace/ragTech-Job-Search-Tracker.png',
    available: true,
  },
  {
    slug: 'se-guide-business-messaging-ai-agents',
    title: 'SE Guide 1: Business Messaging and AI Agents',
    description:
      'Learn the domain from zero, with a two-week plan, a hands-on project, a demo script and interview practice.',
    format: 'PDF',
    thumbnail: '/assets/marketplace/ragTech-SE-Guide-1-Business-Messaging-and-AI-Agents.png',
    available: true,
  },
  {
    slug: 'se-guide-observability-telemetry',
    title: 'SE Guide 2: Observability and Telemetry Pipelines',
    description:
      'A beginner-friendly study guide to observability and telemetry pipelines for Solutions Engineer interviews.',
    format: 'PDF',
    thumbnail: '/assets/marketplace/ragTech-SE-Guide-2-Observability-and-Telemetry-Pipelines.png',
    available: true,
  },
  {
    slug: 'se-guide-mobile-app-security',
    title: 'SE Guide 3: Mobile App Security',
    description:
      'A beginner-friendly study guide to mobile app security for Solutions Engineer interviews.',
    format: 'PDF',
    thumbnail: '/assets/marketplace/ragTech-SE-Guide-3-Mobile-App-Security.png',
    available: true,
  },
  {
    slug: 'se-guide-cloud-ai-platforms',
    title: 'SE Guide 4: Cloud and AI Platforms',
    description:
      'A beginner-friendly study guide to cloud and AI platforms for Solutions Engineer interviews.',
    format: 'PDF',
    thumbnail: '/assets/marketplace/ragTech-SE-Guide-4-Cloud-and-AI-Platforms.png',
    available: true,
  },
  {
    slug: 'se-guide-developer-platforms-games',
    title: 'SE Guide 5: Developer Platforms and SDKs for Games',
    description:
      'A beginner-friendly study guide to developer platforms and SDKs for games, for Solutions Engineer interviews.',
    format: 'PDF',
    thumbnail: '/assets/marketplace/ragTech-SE-Guide-5-Developer-Platforms-and-SDKs-for-Games.png',
    available: true,
  },
  {
    slug: 'ai-business-agent',
    title: 'Build Your Own AI Business Agent (No Code Required)',
    description:
      'The exact setup we use to run ragTech daily admin through a Telegram chat. No coding needed.',
    format: 'Guide',
    available: false,
  },
];
