import {
  Section,
  Heading,
  Text,
  Img,
  Link,
  Button,
  Row,
  Column,
} from '@react-email/components';
import * as React from 'react';
import EmailLayout from './components/EmailLayout';
import { sanitizeEmailContent } from '@/lib/email-sanitizer';
import { FEATURED_EPISODES } from './episodeData';

interface RecentPostSummary {
  title: string;
  slug: string;
  coverImage: string | null;
}

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
  recentPosts?: RecentPostSummary[];
}

function resolveImageUrl(src: string): string {
  return src.startsWith('http') ? src : `https://ragtechdev.com${src}`;
}

// Example content so `pnpm email:dev`/`email:export` render a populated preview
// (this react-email version calls the component with no props at all, ignoring PreviewProps)
const DEFAULT_PROPS: BlogPostNewsletterProps = {
  title: 'Introducing Markdown-Based Blog Posts',
  brief: 'We\'re excited to announce a new way to write and publish blog posts using Markdown, giving us full control over our content while maintaining our newsletter capabilities.',
  coverImage: 'https://ragtechdev.com/assets/techybara/techybara-holding-laptop.png',
  content: '<p>This is a sample blog post content. In the actual newsletter, this will contain the full HTML content of your markdown post.</p><p>The content is automatically sanitized and truncated to provide a preview in the email, with a clear call-to-action to read the full article on your website.</p>',
  slug: 'introducing-markdown-blog-posts',
  author: 'ragTech Team',
  publishedAt: 'February 4, 2026',
  tags: ['announcement', 'tech', 'blogging'],
  recentPosts: [
    { title: 'Is AI Taking Your Job Or Creating Jobs?', slug: 'is-ai-taking-or-creating-jobs', coverImage: 'https://ragtechdev.com/posts/2026-03-05-is-ai-taking-or-creating-jobs/blogpost-cover-image.png' },
    { title: 'Why Finding a CTO is Harder Than You Think', slug: 'why-finding-a-cto-is-harder-than-you-think', coverImage: 'https://ragtechdev.com/posts/2026-02-08-why-finding-a-cto-is-harder-than-you-think/1-cover-image.webp' },
    { title: 'Data Science Experiment: What If Childcare Was Paid Like NS?', slug: 'data-science-what-if-childcare-was-paid-like-ns', coverImage: 'https://ragtechdev.com/posts/2026-03-09-data-science-what-if-childcare-was-like-national-service/blogpost-cover-image.png' },
  ],
};

export default function BlogPostNewsletter({
  title = DEFAULT_PROPS.title,
  brief = DEFAULT_PROPS.brief,
  coverImage = DEFAULT_PROPS.coverImage,
  content = DEFAULT_PROPS.content,
  slug = DEFAULT_PROPS.slug,
  author = DEFAULT_PROPS.author,
  publishedAt = DEFAULT_PROPS.publishedAt,
  tags = DEFAULT_PROPS.tags,
  readTimeInMinutes,
  instagramEmbeds,
  tiktokEmbeds,
  recentPosts = DEFAULT_PROPS.recentPosts,
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
            src={resolveImageUrl(coverImage)}
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
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{
            width: '100%',
            maxWidth: '520px',
            tableLayout: 'fixed',
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  width: '100%',
                  maxWidth: '520px',
                  overflow: 'hidden',
                  wordBreak: 'break-word',
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: sanitizeEmailContent(content, instagramEmbeds, tiktokEmbeds),
                  }}
                  style={{
                    width: '100%',
                    maxWidth: '520px',
                    overflow: 'hidden',
                    wordBreak: 'break-word',
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
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

      {/* More from the Blog */}
      {recentPosts && recentPosts.length > 0 && (
        <Section style={recentPostsSection}>
          <Text style={recentPostsHeading}>More from the blog</Text>
          <Row>
            {recentPosts.map((recentPost) => (
              <Column key={recentPost.slug} align="center" style={recentPostColumn}>
                <Link href={`https://ragtechdev.com/blog/${recentPost.slug}`}>
                  {recentPost.coverImage ? (
                    <Img
                      src={resolveImageUrl(recentPost.coverImage)}
                      width="150"
                      height="84"
                      alt={recentPost.title}
                      style={recentPostThumbnail}
                    />
                  ) : null}
                  <Text style={recentPostTitle}>{recentPost.title}</Text>
                </Link>
              </Column>
            ))}
          </Row>
        </Section>
      )}

      {/* Podcast Promo */}
      <Section style={podcastSection}>
        <Text style={podcastHeading}>🎙️ Catch the ragTech Podcast</Text>
        <Row>
          {FEATURED_EPISODES.map((episode) => (
            <Column key={episode.url} align="center" style={episodeColumn}>
              <Link href={episode.url}>
                <Img
                  src={`https://ragtechdev.com/episodes/${episode.image}`}
                  width="150"
                  height="84"
                  alt={episode.title}
                  style={episodeThumbnail}
                />
              </Link>
              <Text style={episodeCaption}>{episode.title}</Text>
            </Column>
          ))}
        </Row>
        <Link href="https://www.youtube.com/@ragTechDev" style={podcastLink}>
          ▶ Watch more on YouTube
        </Link>
      </Section>
    </EmailLayout>
  );
}


// Default props for email preview
BlogPostNewsletter.PreviewProps = DEFAULT_PROPS;

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
  overflow: 'hidden',
  maxWidth: '520px',
  width: '100%',
  tableLayout: 'fixed' as const,
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

const recentPostsSection = {
  margin: '40px 0 0',
  padding: '24px 0 0',
  borderTop: '1px solid #e6ebf1',
};

const recentPostsHeading = {
  color: '#1a1a1a',
  fontSize: '16px',
  fontWeight: '700',
  textAlign: 'center' as const,
  margin: '0 0 16px',
};

const recentPostColumn = {
  padding: '0 6px 16px',
};

const recentPostThumbnail = {
  width: '150px',
  height: '84px',
  objectFit: 'cover' as const,
  borderRadius: '8px',
  display: 'block',
  margin: '0 auto 8px',
};

const recentPostTitle = {
  color: '#1a1a1a',
  fontSize: '13px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '0',
  lineHeight: '1.4',
};

const podcastSection = {
  margin: '32px 0 0',
  padding: '24px 16px',
  backgroundColor: '#fff3c1',
  borderRadius: '12px',
  textAlign: 'center' as const,
};

const podcastHeading = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 0 16px',
};

const episodeColumn = {
  padding: '0 6px 12px',
};

const episodeThumbnail = {
  width: '150px',
  height: '84px',
  objectFit: 'cover' as const,
  borderRadius: '8px',
  display: 'block',
  margin: '0 auto 6px',
};

const episodeCaption = {
  color: '#1a1a1a',
  fontSize: '12px',
  fontWeight: '600',
  margin: '0',
  lineHeight: '1.3',
};

const podcastLink = {
  display: 'inline-block',
  backgroundColor: '#ffffff',
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '600',
  textDecoration: 'none',
  padding: '10px 20px',
  borderRadius: '8px',
  border: '2px solid #1a1a1a',
  marginTop: '8px',
};
