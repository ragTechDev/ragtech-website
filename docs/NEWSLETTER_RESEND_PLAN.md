# Email Newsletter Integration with Resend - Implementation Plan

This document outlines the complete plan for integrating markdown blog posts as email newsletters using Resend API.

---

## Overview

**Goal:** Enable automatic or manual sending of markdown blog posts as beautifully formatted email newsletters to your subscriber list using Resend.

**Key Features:**
- Convert markdown posts to HTML emails
- Manage subscriber lists via Resend Audiences
- Track newsletter send status in post frontmatter
- Support both manual and scheduled newsletter sends
- Beautiful, responsive email templates
- Unsubscribe handling

---

## Architecture

```
Markdown Post (frontmatter: newsletter.send = true)
    ↓
Newsletter API Route (triggered manually or via cron)
    ↓
Load Post → Convert to Email Template → Send via Resend
    ↓
Update Post Frontmatter (newsletter.sent = true)
```

---

## Phase 1: Setup & Configuration

### 1.1 Install Dependencies

```bash
npm install resend react-email @react-email/components
```

**Packages:**
- `resend` - Resend SDK for sending emails
- `react-email` - Build email templates with React
- `@react-email/components` - Pre-built email components

### 1.2 Environment Variables

Add to `.env.local`:

```bash
# Resend Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=newsletter@ragtechdev.com
RESEND_GENERAL_SEGMENT_ID=aud_xxxxxxxxxxxxx  # Optional: for subscriber management
```

**Get credentials:**
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (ragtechdev.com)
3. Generate API key from dashboard
4. (Optional) Create an Audience for subscriber management

### 1.3 Update package.json Scripts

```json
{
  "scripts": {
    "email:dev": "email dev",
    "email:export": "email export"
  }
}
```

---

## Phase 2: Email Template System

### 2.1 Create Email Template Components

**File:** `emails/components/EmailLayout.tsx`

```tsx
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Img,
  Text,
  Link,
  Hr,
} from '@react-email/components';

interface EmailLayoutProps {
  children: React.ReactNode;
  previewText: string;
}

export default function EmailLayout({ children, previewText }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://ragtechdev.com/assets/logo.png"
              width="120"
              height="40"
              alt="ragTech"
            />
          </Section>

          {/* Content */}
          {children}

          {/* Footer */}
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              You're receiving this because you subscribed to ragTech newsletter.
            </Text>
            <Link href="{{unsubscribe_url}}" style={unsubscribeLink}>
              Unsubscribe
            </Link>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles...
```

### 2.2 Create Blog Post Email Template

**File:** `emails/BlogPostNewsletter.tsx`

```tsx
import {
  Section,
  Heading,
  Text,
  Img,
  Link,
  Button,
} from '@react-email/components';
import EmailLayout from './components/EmailLayout';

interface BlogPostNewsletterProps {
  title: string;
  brief: string;
  coverImage?: string;
  content: string; // HTML content
  slug: string;
  author: string;
  publishedAt: string;
  tags: string[];
}

export default function BlogPostNewsletter({
  title,
  brief,
  coverImage,
  content,
  slug,
  author,
  publishedAt,
  tags,
}: BlogPostNewsletterProps) {
  const postUrl = `https://ragtechdev.com/blog/${slug}`;

  return (
    <EmailLayout previewText={brief}>
      {/* Cover Image */}
      {coverImage && (
        <Section>
          <Img src={coverImage} alt={title} width="600" />
        </Section>
      )}

      {/* Title */}
      <Heading style={h1}>{title}</Heading>

      {/* Meta */}
      <Text style={meta}>
        By {author} • {publishedAt}
      </Text>

      {/* Tags */}
      <Section style={tagsSection}>
        {tags.map((tag) => (
          <span key={tag} style={tag}>#{tag}</span>
        ))}
      </Section>

      {/* Brief */}
      <Text style={brief}>{brief}</Text>

      {/* Content (sanitized HTML) */}
      <Section dangerouslySetInnerHTML={{ __html: content }} />

      {/* CTA */}
      <Section style={ctaSection}>
        <Button href={postUrl} style={button}>
          Read Full Article →
        </Button>
      </Section>
    </EmailLayout>
  );
}

// Styles...
```

### 2.3 Email Template Directory Structure

```
emails/
  components/
    EmailLayout.tsx
    EmailHeader.tsx
    EmailFooter.tsx
  BlogPostNewsletter.tsx
  PodcastEpisodeNewsletter.tsx  # Future
  WeeklyDigest.tsx              # Future
```

---

## Phase 3: Newsletter Utilities

### 3.1 Create Resend Client

**File:** `lib/resend.ts`

```typescript
import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not set');
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const RESEND_CONFIG = {
  fromEmail: process.env.RESEND_FROM_EMAIL || 'newsletter@ragtechdev.com',
  fromName: 'ragTech',
  audienceId: process.env.RESEND_GENERAL_SEGMENT_ID,
};
```

### 3.2 Create Newsletter Service

**File:** `lib/newsletter.ts`

```typescript
import 'server-only';
import { resend, RESEND_CONFIG } from './resend';
import { render } from '@react-email/render';
import BlogPostNewsletter from '@/emails/BlogPostNewsletter';
import { MarkdownPost } from './markdown-types';
import { loadMarkdownPostBySlug } from './markdown';
import fs from 'fs/promises';
import path from 'path';

/**
 * Send a blog post as a newsletter
 */
export async function sendBlogPostNewsletter(
  post: MarkdownPost,
  options?: {
    testEmail?: string; // Send to test email instead of audience
    audienceId?: string; // Override default audience
  }
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  try {
    // Render email template
    const emailHtml = render(
      BlogPostNewsletter({
        title: post.title,
        brief: post.brief,
        coverImage: post.coverImage,
        content: post.content.html,
        slug: post.slug,
        author: post.author.name,
        publishedAt: new Date(post.publishedAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        tags: post.tags.map(t => t.name),
      })
    );

    // Send email
    const result = await resend.emails.send({
      from: `${RESEND_CONFIG.fromName} <${RESEND_CONFIG.fromEmail}>`,
      to: options?.testEmail || options?.audienceId || RESEND_CONFIG.audienceId!,
      subject: post.title,
      html: emailHtml,
      tags: [
        { name: 'type', value: 'blog-post' },
        { name: 'slug', value: post.slug },
      ],
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true, messageId: result.data?.id };
  } catch (error) {
    console.error('Error sending newsletter:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

/**
 * Mark newsletter as sent in post frontmatter
 */
export async function markNewsletterAsSent(slug: string): Promise<void> {
  const postDir = path.join(process.cwd(), 'data', 'posts');
  const postPath = path.join(postDir, slug, 'index.md');
  
  try {
    const content = await fs.readFile(postPath, 'utf-8');
    
    // Update frontmatter
    const updatedContent = content.replace(
      /newsletter:\s*\n\s*send:\s*true\s*\n\s*sent:\s*false/,
      'newsletter:\n  send: true\n  sent: true'
    );
    
    await fs.writeFile(postPath, updatedContent, 'utf-8');
  } catch (error) {
    console.error('Error updating post frontmatter:', error);
    throw error;
  }
}

/**
 * Get all posts pending newsletter send
 */
export async function getPendingNewsletterPosts(): Promise<MarkdownPost[]> {
  const { loadMarkdownPosts } = await import('./markdown');
  const allPosts = await loadMarkdownPosts();
  
  return allPosts.filter(
    post => post.newsletter?.send && !post.newsletter?.sent
  );
}
```

---

## Phase 4: API Routes

### 4.1 Manual Newsletter Send API

**File:** `app/api/newsletter/send/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { loadMarkdownPostBySlug } from '@/lib/markdown';
import { sendBlogPostNewsletter, markNewsletterAsSent } from '@/lib/newsletter';

export const dynamic = 'force-dynamic';

/**
 * POST /api/newsletter/send
 * Body: { slug: string, testEmail?: string }
 */
export async function POST(request: NextRequest) {
  try {
    const { slug, testEmail } = await request.json();

    if (!slug) {
      return NextResponse.json(
        { error: 'Slug is required' },
        { status: 400 }
      );
    }

    // Load post
    const post = await loadMarkdownPostBySlug(slug);
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Check if newsletter should be sent
    if (!post.newsletter?.send) {
      return NextResponse.json(
        { error: 'Newsletter sending not enabled for this post' },
        { status: 400 }
      );
    }

    // Check if already sent (unless test email)
    if (post.newsletter.sent && !testEmail) {
      return NextResponse.json(
        { error: 'Newsletter already sent for this post' },
        { status: 400 }
      );
    }

    // Send newsletter
    const result = await sendBlogPostNewsletter(post, { testEmail });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    // Mark as sent (only if not test email)
    if (!testEmail) {
      await markNewsletterAsSent(slug);
    }

    return NextResponse.json({
      success: true,
      messageId: result.messageId,
      message: testEmail 
        ? `Test email sent to ${testEmail}` 
        : 'Newsletter sent to audience',
    });
  } catch (error) {
    console.error('Newsletter send error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### 4.2 Batch Newsletter Send API

**File:** `app/api/newsletter/send-pending/route.ts`

```typescript
import { NextResponse } from 'next/server';
import { getPendingNewsletterPosts, sendBlogPostNewsletter, markNewsletterAsSent } from '@/lib/newsletter';

export const dynamic = 'force-dynamic';

/**
 * POST /api/newsletter/send-pending
 * Sends all pending newsletters
 */
export async function POST() {
  try {
    const pendingPosts = await getPendingNewsletterPosts();

    if (pendingPosts.length === 0) {
      return NextResponse.json({
        message: 'No pending newsletters to send',
        sent: 0,
      });
    }

    const results = [];

    for (const post of pendingPosts) {
      const result = await sendBlogPostNewsletter(post);
      
      if (result.success) {
        await markNewsletterAsSent(post.slug);
        results.push({ slug: post.slug, success: true });
      } else {
        results.push({ slug: post.slug, success: false, error: result.error });
      }
    }

    const successCount = results.filter(r => r.success).length;

    return NextResponse.json({
      message: `Sent ${successCount} of ${pendingPosts.length} newsletters`,
      results,
    });
  } catch (error) {
    console.error('Batch newsletter send error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### 4.3 Subscriber Management API (Optional)

**File:** `app/api/newsletter/subscribe/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { resend, RESEND_CONFIG } from '@/lib/resend';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Add to Resend audience
    const result = await resend.contacts.create({
      email,
      firstName,
      lastName,
      audienceId: RESEND_CONFIG.audienceId!,
    });

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

---

## Phase 5: Workflow Integration

### 5.1 Creating a Post with Newsletter

When creating a new markdown post, set newsletter flags in frontmatter:

```yaml
---
title: "My New Post"
slug: "my-new-post"
# ... other fields ...
newsletter:
  send: true      # Enable newsletter sending
  sent: false     # Will be updated automatically
---
```

### 5.2 Sending Newsletters

**Option A: Manual Send (Recommended for testing)**

```bash
# Test send to your email
curl -X POST http://localhost:3000/api/newsletter/send \
  -H "Content-Type: application/json" \
  -d '{"slug": "my-new-post", "testEmail": "you@example.com"}'

# Send to full audience
curl -X POST http://localhost:3000/api/newsletter/send \
  -H "Content-Type: application/json" \
  -d '{"slug": "my-new-post"}'
```

**Option B: Batch Send All Pending**

```bash
curl -X POST http://localhost:3000/api/newsletter/send-pending
```

**Option C: Scheduled Send (Future Enhancement)**

Use a cron job or GitHub Actions to trigger the batch send API daily:

```yaml
# .github/workflows/send-newsletters.yml
name: Send Pending Newsletters
on:
  schedule:
    - cron: '0 10 * * *'  # Daily at 10 AM UTC
  workflow_dispatch:

jobs:
  send:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Newsletter Send
        run: |
          curl -X POST https://ragtechdev.com/api/newsletter/send-pending \
            -H "Authorization: Bearer ${{ secrets.NEWSLETTER_API_KEY }}"
```

### 5.3 Workflow Summary

```
1. Write post in markdown with newsletter.send: true
2. Commit and push to GitHub
3. Deploy to production
4. Test send: POST /api/newsletter/send with testEmail
5. Review test email
6. Production send: POST /api/newsletter/send (or wait for cron)
7. Post frontmatter automatically updated to newsletter.sent: true
```

---

## Phase 6: Admin UI (Optional Enhancement)

### 6.1 Newsletter Dashboard

**File:** `app/admin/newsletter/page.tsx`

```tsx
'use client';

import { useState, useEffect } from 'react';

export default function NewsletterDashboard() {
  const [pendingPosts, setPendingPosts] = useState([]);
  const [sending, setSending] = useState(false);

  const sendNewsletter = async (slug: string, testEmail?: string) => {
    setSending(true);
    try {
      const response = await fetch('/api/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, testEmail }),
      });
      const data = await response.json();
      alert(data.message || 'Newsletter sent!');
    } catch (error) {
      alert('Error sending newsletter');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Newsletter Dashboard</h1>
      
      {/* List of pending newsletters */}
      {/* Send buttons */}
      {/* Test email input */}
    </div>
  );
}
```

---

## Phase 7: Testing & Deployment

### 7.1 Testing Checklist

- [ ] Test email template rendering locally (`npm run email:dev`)
- [ ] Send test email to yourself
- [ ] Verify email displays correctly in Gmail, Outlook, Apple Mail
- [ ] Test unsubscribe link
- [ ] Verify frontmatter updates after send
- [ ] Test batch send with multiple posts
- [ ] Check Resend dashboard for delivery stats

### 7.2 Production Deployment

1. Add Resend environment variables to production (Vercel/Netlify)
2. Verify domain in Resend
3. Set up SPF/DKIM records for your domain
4. Test with small audience first
5. Monitor delivery rates in Resend dashboard

---

## Phase 8: Future Enhancements

### 8.1 Advanced Features

- **Scheduled Sends:** Respect `scheduledFor` date in frontmatter
- **A/B Testing:** Test different subject lines
- **Segmentation:** Send to specific subscriber segments
- **Analytics:** Track opens, clicks, engagement
- **Weekly Digest:** Compile multiple posts into one email
- **RSS to Email:** Auto-send when new posts published
- **Personalization:** Use subscriber data in templates

### 8.2 Subscriber Management

- Import existing Beehiiv subscribers to Resend
- Sync subscribers between platforms
- Subscriber preferences (frequency, topics)
- Re-engagement campaigns

---

## Cost Estimation

**Resend Pricing (as of 2024):**
- Free tier: 3,000 emails/month
- Pro: $20/month for 50,000 emails
- Enterprise: Custom pricing

**Recommended:** Start with free tier for testing, upgrade as audience grows.

---

## Security Considerations

1. **API Protection:** Add authentication to newsletter send endpoints
2. **Rate Limiting:** Prevent abuse of send APIs
3. **Email Validation:** Validate subscriber emails
4. **Unsubscribe:** Respect unsubscribe requests immediately
5. **GDPR Compliance:** Handle subscriber data properly

---

## Summary

This plan provides a complete, production-ready email newsletter system that:

✅ Converts markdown posts to beautiful HTML emails  
✅ Manages subscribers via Resend Audiences  
✅ Tracks send status in post frontmatter  
✅ Supports test sends before production  
✅ Enables manual or automated sending  
✅ Scales with your audience  

**Next Steps:**
1. Install Resend dependencies
2. Set up Resend account and verify domain
3. Create email templates
4. Build newsletter utilities
5. Create API routes
6. Test with sample post
7. Deploy to production

**Estimated Implementation Time:** 1-2 days for core features, 1 week for full system with admin UI.
