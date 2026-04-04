# ragTech Website - Quick Reference

## 🎨 Color Palette

```typescript
Primary: #6366f1 (Indigo)
Primary Light: #818cf8
Primary Dark: #4f46e5

Secondary: #ec4899 (Pink)
Secondary Light: #f472b6
Secondary Dark: #db2777

Accent: #8b5cf6 (Purple)
Accent Light: #a78bfa
Accent Dark: #7c3aed
```

## 📁 Key Files

- **Layout**: `app/layout.tsx` - Root layout with Header/Footer
- **Home**: `app/page.tsx` - Landing page
- **Components**: `app/components/` - Reusable components
- **Styling**: `tailwind.config.ts` - Tailwind configuration
- **Global CSS**: `app/globals.css` - Global styles

## 🧩 Components

### Header (`app/components/Header.tsx`)
- Sticky navigation
- Mobile menu
- Auto-hide on scroll

### Footer (`app/components/Footer.tsx`)
- Social links
- Quick navigation
- Techie Taboo CTA

### Hero (`app/components/Hero.tsx`)
Props:
- `title`: string (required)
- `subtitle`: string (optional)
- `description`: string (optional)
- `children`: ReactNode (for CTAs)
- `backgroundGradient`: boolean (default: true)

### ProjectCard (`app/components/ProjectCard.tsx`)
Props:
- `title`: string (required)
- `description`: string (required)
- `icon`: ReactNode (optional)
- `link`: string (optional)
- `linkText`: string (default: "Learn More")
- `delay`: number (for animation)

### EpisodeCard (`app/components/EpisodeCard.tsx`)
Props:
- `title`: string (required)
- `description`: string (required)
- `youtubeUrl`: string (optional)
- `spotifyUrl`: string (optional)
- `appleUrl`: string (optional)
- `thumbnail`: string (optional)
- `delay`: number (for animation)

### ContactForm (`app/components/ContactForm.tsx`)
- Form validation
- Submit handling
- Success/error states

## 🔗 External Links

```typescript
const links = {
  techiTaboo: 'https://techie-taboo.ragtechdev.com/',
  youtube: 'https://www.youtube.com/@ragTechDev',
  instagram: 'https://www.instagram.com/ragtechdev/',
  spotify: 'https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d',
  linktree: 'https://linktr.ee/ragtechdev',
  email: 'mailto:hello@ragtechdev.com'
};
```

## 🎬 Animations

Using Framer Motion for smooth animations:

```tsx
// Fade in on view
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>

// Hover effect
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
>
```

## 📱 Responsive Breakpoints

```css
/* Mobile First */
sm: 640px   /* @media (min-width: 640px) */
md: 768px   /* @media (min-width: 768px) */
lg: 1024px  /* @media (min-width: 1024px) */
xl: 1280px  /* @media (min-width: 1280px) */
2xl: 1536px /* @media (min-width: 1536px) */
```

## 🚀 Common Tasks

### Add a new page
1. Create `app/[page-name]/page.tsx`
2. Add link to Header navigation
3. Add link to Footer

### Add a new component
1. Create component in `app/components/[ComponentName].tsx`
2. Export as default
3. Import where needed

### Update colors
Edit `tailwind.config.ts` → `theme.extend.colors`

### Add custom animation
Edit `tailwind.config.ts` → `theme.extend.animation` and `keyframes`

## 🐛 Troubleshooting

### CSS warnings in globals.css
These are normal Tailwind directives. Add to `.vscode/settings.json`:
```json
{
  "css.lint.unknownAtRules": "ignore"
}
```

### Module not found errors
```bash
npm install
```

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
```

## 📝 Content Updates

### Update Episodes
Edit `app/podcast/page.tsx` → `episodes` array

### Update Blog Posts
Edit `app/blog/page.tsx` → `posts` array

### Update Team Info
Edit `app/about/page.tsx` → `team` array

### Update Social Links
Edit `app/components/Footer.tsx` → `socialLinks` array

## 🎯 Best Practices

1. **Use Tailwind classes** for styling
2. **Keep components small** and focused
3. **Use TypeScript** for type safety
4. **Add animations** with Framer Motion
5. **Test responsive** design on multiple devices
6. **Optimize images** before adding to public/
7. **Follow naming conventions** (PascalCase for components)

## 📦 Useful Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

## 🎨 Design System

### Spacing Scale
```css
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
```

### Font Sizes
```css
text-sm: 0.875rem (14px)
text-base: 1rem (16px)
text-lg: 1.125rem (18px)
text-xl: 1.25rem (20px)
text-2xl: 1.5rem (24px)
text-3xl: 1.875rem (30px)
text-4xl: 2.25rem (36px)
text-5xl: 3rem (48px)
```

### Border Radius
```css
rounded-lg: 0.5rem (8px)
rounded-xl: 0.75rem (12px)
rounded-2xl: 1rem (16px)
rounded-full: 9999px
```

---

Need help? Contact hello@ragtechdev.com
