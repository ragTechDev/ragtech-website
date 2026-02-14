import {
  Section,
  Heading,
  Text,
  Img,
  Link,
  Button,
} from '@react-email/components';
import * as React from 'react';
import EmailLayout from './components/EmailLayout';

interface BlogPostNewsletterProps {
  title: string;
  brief: string;
  coverImage?: string | null;
  content: string;
  slug: string;
  author: string;
  publishedAt: string;
  tags: string[];
  readTimeInMinutes?: number;
  instagramEmbeds?: { [postId: string]: string };
  tiktokEmbeds?: { [videoId: string]: string };
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
  readTimeInMinutes,
  instagramEmbeds,
  tiktokEmbeds,
}: BlogPostNewsletterProps) {
  const postUrl = `https://ragtechdev.com/blog/${slug}`;

  return (
    <EmailLayout previewText={brief} isBroadcast={true}>
      {/* Subscription Info */}
      <Text style={subscriptionInfo}>
        You&apos;re receiving this email because you subscribed through FutureNet (digital parenting quiz), 
        ragTech&apos;s blog newsletter, or waitlisted for Techie Taboo. 
        Adjust your preferences using the unsubscribe link at the footer.
      </Text>

      {/* Cover Image */}
      {coverImage && (
        <Section style={coverImageSection}>
          <Img
            src={coverImage.startsWith('http') ? coverImage : `https://ragtechdev.com${coverImage}`}
            alt={title}
            width="520"
            style={coverImage_}
          />
        </Section>
      )}

      {/* Title */}
      <Heading style={h1}>{title}</Heading>

      {/* Meta */}
      <Text style={meta}>
        By {author} • {publishedAt}{readTimeInMinutes ? ` • ${readTimeInMinutes} min read` : ''}
      </Text>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <Section style={tagsSection}>
          {tags.map((tag) => (
            <span key={tag} style={tagBadge}>
              #{tag}
            </span>
          ))}
        </Section>
      )}

      {/* Brief */}
      <Text style={briefText}>{brief}</Text>

      {/* Content Preview (first 500 chars) */}
      <Section style={contentSection}>
        <div
          dangerouslySetInnerHTML={{
            __html: sanitizeEmailContent(content, instagramEmbeds, tiktokEmbeds),
          }}
        />
      </Section>

      {/* CTA */}
      <Section style={ctaSection}>
        <Button href={postUrl} style={button}>
          Read Full Article →
        </Button>
      </Section>

      {/* Footer CTA */}
      <Text style={footerCta}>
        <Link href={postUrl} style={footerLink}>
          Continue reading on ragtechdev.com
        </Link>
      </Text>
    </EmailLayout>
  );
}

// Helper to sanitize and truncate content for email
function sanitizeEmailContent(html: string | undefined | null, instagramEmbeds?: { [postId: string]: string }, tiktokEmbeds?: { [videoId: string]: string }): string {
  if (!html) {
    return '<p>Content preview not available.</p>';
  }

  let clean = html;
  
  // Replace TikTok blockquote embeds BEFORE removing script tags
  clean = clean.replace(
    /<blockquote[^>]*class="tiktok-embed"[^>]*cite="https:\/\/www\.tiktok\.com\/@([^/]+)\/video\/(\d+)"[^>]*>[\s\S]*?<\/blockquote>\s*<script[^>]*src="https:\/\/www\.tiktok\.com\/embed\.js"[^>]*><\/script>/gi,
    (match, username, videoId) => {
      const videoUrl = `https://www.tiktok.com/@${username}/video/${videoId}`;
      
      // Use fallback cover image from frontmatter if available
      if (tiktokEmbeds && tiktokEmbeds[videoId]) {
        const coverImage = tiktokEmbeds[videoId];
        return `<a href="${videoUrl}" style="display: block; margin: 20px auto; text-align: center;"><img src="${coverImage}" alt="Watch on TikTok" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin: 0 auto;" /><p style="color: #333; font-weight: 600; margin-top: 12px; font-size: 14px;">🎵 Watch on TikTok</p></a>`;
      }
      
      // Default placeholder if no cover image
      const thumbnailUrl = `https://www.tiktok.com/favicon.ico`;
      return `<a href="${videoUrl}" style="display: block; margin: 20px auto; text-align: center; padding: 20px; background-color: #000000; border-radius: 8px; max-width: 400px;"><img src="${thumbnailUrl}" alt="Watch on TikTok" style="width: 64px; height: 64px; margin: 0 auto 12px;" /><p style="color: #ffffff; font-weight: 600; margin: 0;">🎵 Watch on TikTok</p></a>`;
    }
  );
  
  // Remove script tags
  clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Remove style tags
  clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  
  // Remove inline styles (we'll add our own for images)
  clean = clean.replace(/\s*style="[^"]*"/gi, '');
  
  // Convert relative image paths to absolute URLs
  clean = clean.replace(
    /<img([^>]*?)src="\/([^"]+)"([^>]*)>/gi,
    '<img$1src="https://ragtechdev.com/$2"$3>'
  );
  
  // Add consistent styling to all images (max-width 100%, auto height, centered)
  clean = clean.replace(
    /<img([^>]*)>/gi,
    '<img$1 style="width: 100%; max-width: 520px; height: auto; display: block; margin: 16px auto; border-radius: 8px;">'
  );
  
  // Replace YouTube iframes with linked thumbnails
  clean = clean.replace(
    /<iframe[^>]*src="https:\/\/www\.youtube\.com\/embed\/([a-zA-Z0-9_-]+)"[^>]*>.*?<\/iframe>/gi,
    (match, videoId) => {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
      return `<a href="${videoUrl}" style="display: block; margin: 20px 0;"><img src="${thumbnailUrl}" alt="Watch on YouTube" style="width: 100%; max-width: 560px; height: auto; border-radius: 8px;" /></a><p style="text-align: center; margin-top: 8px;"><a href="${videoUrl}" style="color: #5da9a4; text-decoration: underline;">▶ Watch on YouTube</a></p>`;
    }
  );
  
  // Replace Instagram iframes with linked thumbnails
  clean = clean.replace(
    /<iframe[^>]*src="https:\/\/www\.instagram\.com\/p\/([a-zA-Z0-9_-]+)\/embed"[^>]*>.*?<\/iframe>/gi,
    (match, postId) => {
      const postUrl = `https://www.instagram.com/p/${postId}/`;
      
      // Use fallback image from frontmatter if available
      if (instagramEmbeds && instagramEmbeds[postId]) {
        const fallbackImage = instagramEmbeds[postId];
        return `<a href="${postUrl}" style="display: block; margin: 20px auto; text-align: center;"><img src="${fallbackImage}" alt="View on Instagram" style="width: 100%; max-width: 500px; height: auto; border-radius: 8px; margin: 0 auto;" /><p style="color: #333; font-weight: 600; margin-top: 12px; font-size: 14px;">📸 View this post on Instagram</p></a>`;
      }
      
      // Default placeholder if no fallback image
      const thumbnailUrl = `https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png`;
      return `<a href="${postUrl}" style="display: block; margin: 20px auto; text-align: center; padding: 20px; background-color: #f8f9fa; border-radius: 8px; max-width: 400px;"><img src="${thumbnailUrl}" alt="View on Instagram" style="width: 64px; height: 64px; margin: 0 auto 12px;" /><p style="color: #333; font-weight: 600; margin: 0;">View this post on Instagram</p></a>`;
    }
  );
  
  
  // Remove any remaining iframes (fallback)
  clean = clean.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  
  // Limit content length (roughly 500 chars of text)
  const textContent = clean.replace(/<[^>]*>/g, '');
  if (textContent.length > 500) {
    // Find a good breaking point
    const truncated = textContent.substring(0, 500);
    const lastSpace = truncated.lastIndexOf(' ');
    const cutPoint = lastSpace > 400 ? lastSpace : 500;
    
    // Reconstruct with HTML, roughly
    const cutIndex = clean.indexOf(textContent.substring(cutPoint));
    if (cutIndex > 0) {
      clean = clean.substring(0, cutIndex) + '...';
    }
  }
  
  return clean;
}

// Default props for email preview
BlogPostNewsletter.PreviewProps = {
  title: 'Introducing Markdown-Based Blog Posts',
  brief: 'We\'re excited to announce a new way to write and publish blog posts using Markdown, giving us full control over our content while maintaining our newsletter capabilities.',
  coverImage: 'https://ragtechdev.com/assets/techybara-holding-laptop.png',
  content: '<p>This is a sample blog post content. In the actual newsletter, this will contain the full HTML content of your markdown post.</p><p>The content is automatically sanitized and truncated to provide a preview in the email, with a clear call-to-action to read the full article on your website.</p>',
  slug: 'introducing-markdown-blog-posts',
  author: 'ragTech Team',
  publishedAt: 'February 4, 2026',
  tags: ['announcement', 'tech', 'blogging'],
} as BlogPostNewsletterProps;

// Styles
const subscriptionInfo = {
  color: '#888888',
  fontSize: '12px',
  lineHeight: '1.5',
  margin: '0 0 24px',
  padding: '12px 16px',
  backgroundColor: '#f8f9fa',
  borderRadius: '6px',
  textAlign: 'center' as const,
};

const coverImageSection = {
  marginBottom: '32px',
};

const coverImage_ = {
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '32px',
  fontWeight: '700',
  lineHeight: '1.3',
  margin: '0 0 16px',
};

const meta = {
  color: '#666666',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 24px',
};

const tagsSection = {
  marginBottom: '24px',
};

const tagBadge = {
  display: 'inline-block',
  backgroundColor: '#e8f5f4',
  color: '#a8d8d4',
  fontSize: '12px',
  fontWeight: '600',
  padding: '4px 12px',
  borderRadius: '16px',
  marginRight: '8px',
  marginBottom: '8px',
};

const briefText = {
  color: '#333333',
  fontSize: '18px',
  lineHeight: '1.6',
  margin: '0 0 32px',
  fontWeight: '500',
};

const contentSection = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  marginBottom: '32px',
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '40px 0',
};

const button = {
  backgroundColor: '#a8d8d4',
  borderRadius: '8px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '14px 32px',
};

const footerCta = {
  textAlign: 'center' as const,
  color: '#666666',
  fontSize: '14px',
  margin: '24px 0 0',
};

const footerLink = {
  color: '#5da9a4',
  textDecoration: 'underline',
};
