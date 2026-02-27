import type { TeamMember } from '../components/TeamMemberCard';

export const team: TeamMember[] = [
  {
    name: 'Saloni',
    role: 'Senior Software Engineer, Co-Director (WomenDevs SG)',
    description:
      'Engineering leader who turns complex software and AI concepts into practical workflows teams can apply immediately.',
    experienceSummary:
      '10+ years in software engineering with workshop leadership across developer and product audiences.',
    experienceHighlights: [
      'Led AI 101 for Software Developers workshop: practical guidance on where AI helps and where engineering judgment still matters.',
      'Teaches concrete AI usage patterns including scoped coding tasks, PR review support, framework explanations, test generation, and repetitive workflow automation.',
      'Demonstrated AI-assisted app building with side-by-side comparisons against traditional implementation approaches.',
      'Delivered Tech Concepts for Product Managers sessions covering CI/CD, LLM fundamentals, and model limitations beyond prompt-only usage.',
      'Created Interview Ready online course content for developers preparing for technical interviews.',
    ],
    featuredLinks: [
      { label: 'Interview Ready Online Course Series', href: 'https://www.youtube.com/watch?v=WJS2QeE1_-4' },
    ],
    color: 'from-primary/20 to-primary/5',
    roleColor: '#fda2a9',
    image: '/assets/team/saloni.png',
    email: 'saloni@ragtechdev.com',
    linkedInUrl: 'https://www.linkedin.com/in/saloni-kaur/',
  },
  {
    name: 'Victoria',
    role: 'Solutions Architect, GitHub Star, Co-Director (WomenDevs SG)',
    description:
      'Solutions architect and technical communicator known for making advanced topics accessible and actionable.',
    experienceSummary:
      'One of only two GitHub Stars in Singapore, with startup and large fintech architecture experience.',
    experienceHighlights: [
      'Delivered How to Make Opportunities Find You: Personal Branding 101 at NTU, based on a long-term practical visibility framework.',
      'Runs system design interview prep workshops with concise frameworks, practical examples, and collaborative exercises.',
      'Facilitated hands-on group design sessions, including Netflix-style system design problem solving.',
      'Recognized technical blogger with six years of consistent technical writing and community education.',
    ],
    featuredLinks: [
      { label: 'Technical Blog by Victoria', href: 'https://lo-victoria.com/' },
    ],
    color: 'from-secondary/20 to-secondary/5',
    roleColor: '#a2d4d1',
    image: '/assets/team/victoria.png',
    email: 'victoria@ragtechdev.com',
    linkedInUrl: 'https://www.linkedin.com/in/victoria2666/',
  },
  {
    name: 'Natasha',
    role: 'Software Engineer, Partnerships Lead (WomenDevs SG)',
    description:
      'Builder and facilitator focused on responsible tech adoption, community leadership, and 0 to 1 product execution.',
    experienceSummary:
      'Masters in Computer Information Systems (Boston University), UCLA Global Studies with Digital Humanities minor, plus startup and US venture accelerator experience.',
    experienceHighlights: [
      'Designed and facilitated a 1-hour Intentional AI workshop for STT Global Data Centres using custom cards to evaluate high-impact vs low-impact AI use cases for operations.',
      'Included live demos of generating SVG code for image alternatives in selected scenarios to support more conscious resource usage decisions.',
      'Organized and facilitated the ethics panel Navigating the Ethical Landscape of AI: Causality, Principles and Perspectives.',
      'Hosted multiple women empowerment workshops on speaking up, communication, and confidence in tech spaces.',
      'NTU Women in Tech mentor and facilitator of networking sessions for technologists using technical analogies for collaboration strategy.',
      'Led open source community efforts including month-long Hacktoberfest programming with livestream contribution guides.',
    ],
    featuredLinks: [
      {
        label: 'Navigating the Ethical Landscape of AI Panel',
        href: 'https://www.youtube.com/watch?v=BPYt_Xs20q8&t=1400s',
      },
      {
        label: 'Networking for Techies - JuniorDevSG',
        href: 'https://www.youtube.com/watch?v=oE_EWQUYpj8&t=6s',
      },
      {
        label: 'Website',
        href: 'https://natashaannn.com/',
      },
    ],
    color: 'from-accent/20 to-accent/5',
    roleColor: '#eec08c',
    image: '/assets/team/natasha.png',
    email: 'natasha@ragtechdev.com',
    linkedInUrl: 'https://www.linkedin.com/in/natashaannn/',
  },
  {
    name: 'ragTech Team',
    role: 'Collective',
    description:
      'The collaborative voice of ragTech, bringing together diverse perspectives to make technology accessible for everyone.',
    color: 'from-neutral-300/20 to-neutral-100/5',
    roleColor: '#6b7280',
    image: '/assets/logo/ragtech-logo.png',
    email: 'hello@ragtechdev.com',
  },
];
