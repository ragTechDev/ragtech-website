# ragTech Website

A modern, responsive Next.js website for ragTech - home of the Bytes & Banter podcast, Techie Taboo game, and communication workshops. Making technology fun, engaging, and accessible to everyone!

## 🚀 Features

- **Cute Capybara Aesthetic**: Colorful brand colors with a playful, approachable design
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for elegant transitions
- **Internal Blog**: Integrated with Hashnode headless CMS with newsletter subscription
- **Contact Form**: Integrated with EmailJS for real contact submissions
- **Episodes Gallery**: Browse all podcast episodes with direct YouTube links
- **Static Export**: Pre-rendered for optimal performance and SEO
- **Dark Mode**: Automatic dark mode support based on system preferences

## 📁 Project Structure

```
ragtech-website/
├── app/
│   ├── components/           # Reusable components
│   │   ├── Header.tsx       # Sticky navigation header
│   │   ├── Footer.tsx       # Site footer with social links
│   │   ├── Hero.tsx         # Hero section component
│   │   ├── ProjectCard.tsx  # Project showcase cards
│   │   ├── EpisodeCard.tsx  # Podcast episode cards (for future use)
│   │   └── ContactForm.tsx  # Contact form with EmailJS
│   ├── about/               # About page with episodes gallery
│   ├── blog/                # Blog listing page
│   │   └── [slug]/         # Individual blog post pages
│   ├── contact/             # Contact page with form
│   ├── techie-taboo/        # Techie Taboo waitlist page
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/                  # Static assets (images, episodes)
├── netlify.toml             # Netlify deployment config
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🎨 Design & Branding

Cute capybara aesthetic with vibrant brand colors:
- **Brand Colors**: 
  - Primary Pink: `#fda2a9`
  - Secondary Turquoise: `#a2d4d1`
  - Accent Cream: `#fff3c1`
  - Brown: `#a2805d`
  - Brown Dark: `#8b5a49`
- **Typography**: Inter font family
- **Style**: Playful, colorful with gradients, custom images, and friendly emojis

## 📄 Pages

1. **Home** (`/`) - Hero with techybara-holding-mic.png, projects (Podcast, Techie Taboo, Workshops), about section, CTA
2. **About** (`/about`) - Story, team profiles with photos, core values, mission, episodes gallery
3. **Blog** (`/blog`) - Blog listing with newsletter subscription, powered by Hashnode headless CMS
4. **Blog Post** (`/blog/[slug]`) - Individual blog posts with custom styling and formatting
5. **Techie Taboo** (`/techie-taboo`) - Waitlist page with pledge form
6. **Contact** (`/contact`) - Contact form with EmailJS, direct contact info, social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router) with Static Export
- **Styling**: Tailwind CSS with custom brand colors & @tailwindcss/typography
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Blog**: Hashnode GraphQL API (Headless CMS)
- **Contact Form**: EmailJS (@emailjs/browser)
- **Language**: TypeScript
- **Deployment**: Netlify

## 📦 Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local`
   - Add your EmailJS credentials:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - Add Netlify API credentials (for Techie Taboo pledge count):
     - `SITE_ID` - Your Netlify site ID
     - `NETLIFY_API_TOKEN` - Your Netlify API token
   - Get EmailJS credentials from [EmailJS](https://www.emailjs.com/)
   - Get Netlify credentials from Netlify dashboard

3. **Run the development server:**
```bash
npm run dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Documentation Guides

- [Content Creation Workstream](./CONTENT_CREATION_WORKSTREAM.md)
- [Markdown Blog Setup](./MARKDOWN_BLOG_SETUP.md)
- [Newsletter Usage Guide](./NEWSLETTER_USAGE_GUIDE.md)
- [Newsletter Topics Guide](./NEWSLETTER_TOPICS_GUIDE.md)
- [Newsletter Resend Plan](./NEWSLETTER_RESEND_PLAN.md)
## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

This creates a static export in the `out` directory.

### Deploy to Netlify
The site is configured for Netlify deployment with `netlify.toml`:

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `SITE_ID` - Your Netlify site ID (found in Site settings > General)
   - `NETLIFY_API_TOKEN` - Personal access token from User settings > Applications
4. Configure custom domain `ragtechdev.com`
5. Deploy!

Netlify will automatically detect the configuration and build settings.

## 🎯 What We Offer

- **Bytes & Banter Podcast**: Making tech topics fun and accessible
- **Techie Taboo Game**: The ultimate tech communication challenge
- **Workshops**: Helping engineers communicate better and non-techies understand technology

## 🔗 Important Links

- **Website**: https://ragtechdev.com
- **Techie Taboo**: https://ragtechdev.com/techie-taboo
- **YouTube**: https://www.youtube.com/@ragTechDev
- **Instagram**: https://www.instagram.com/ragtechdev/
- **TikTok**: https://www.tiktok.com/@ragtechdev
- **Spotify**: https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d
- **LinkedIn**: https://sg.linkedin.com/company/ragtechdev
- **GitHub**: https://github.com/ragTechDev
- **Linktree**: https://linktr.ee/ragtechdev
- **Blog**: https://ragtechdev.com/blog
- **Email**: hello@ragtechdev.com

## 📧 Contact

For workshops, collaborations, or general inquiries: hello@ragtechdev.com

---

Built with ❤️ by ragTech | © 2025 ragTech | Where bytes meet banter ✨


