/**
 * Newsletter service utilities
 * Server-side only
 */

import 'server-only';
import { resend, RESEND_CONFIG, isResendConfigured } from './resend';
import { render } from '@react-email/components';
import BlogPostNewsletter from '@/emails/BlogPostNewsletter';
import WelcomeEmail from '@/emails/WelcomeEmail';
import { MarkdownPost } from './markdown-types';
import { loadMarkdownPostBySlug, loadMarkdownPosts } from './markdown';
import { getTopicIds, type NewsletterTopic } from './newsletter-topics';
import fs from 'fs/promises';
import path from 'path';

// ============================================================================
// Newsletter Sending
// ============================================================================

export interface NewsletterSendResult {
  success: boolean;
  messageId?: string;
  broadcastId?: string;
  broadcastIds?: string[];  // For multiple topic broadcasts
  topics?: NewsletterTopic[];  // Topics used
  error?: string;
}

/**
 * Create a broadcast draft for a blog post
 * This creates the broadcast but does NOT send it
 */
export async function createBlogPostBroadcast(
  post: MarkdownPost,
  options?: {
    audienceId?: string;
    topics?: NewsletterTopic[];  // Override topics from post
  }
): Promise<NewsletterSendResult> {
  try {
    // Check if Resend is configured
    if (!resend) {
      return {
        success: false,
        error: 'Resend is not configured. Please set RESEND_API_KEY.',
      };
    }

    if (!isResendConfigured()) {
      return {
        success: false,
        error: 'Resend audience is not configured. Please set RESEND_GENERAL_SEGMENT_ID.',
      };
    }

    // Validate topics
    const topics = options?.topics || post.newsletter?.topic || [];
    if (topics.length === 0) {
      return {
        success: false,
        error: 'At least one topic is required. Available topics: ragTech, FutureNet, Techie Taboo',
      };
    }

    // Get topic IDs
    const topicIds = getTopicIds(topics);
    if (topicIds.length === 0) {
      return {
        success: false,
        error: 'No valid topic IDs found. Please configure RESEND_TOPIC_* environment variables.',
      };
    }

    // Format published date
    const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Render email template
    const emailHtml = await render(
      BlogPostNewsletter({
        title: post.title,
        brief: post.brief,
        coverImage: post.coverImage,
        content: post.content.html,
        slug: post.slug,
        author: post.author.name,
        publishedAt: publishedDate,
        tags: post.tags.map((t) => t.name),
        instagramEmbeds: post.instagramEmbeds,
        tiktokEmbeds: post.tiktokEmbeds,
      })
    );

    // Create broadcast draft(s)
    const segmentId = options?.audienceId || RESEND_CONFIG.generalSegmentId!;
    
    // Create separate broadcast for each topic (Resend only supports single topicId per broadcast)
    const broadcastIds: string[] = [];
    const errors: string[] = [];

    for (let i = 0; i < topicIds.length; i++) {
      const topicId = topicIds[i];
      const topicName = topics[i];
      
      // Add topic name to broadcast title if multiple topics
      const broadcastName = topicIds.length > 1 
        ? `${post.title} [${topicName}]`
        : post.title;

      const result = await resend.broadcasts.create({
        audienceId: segmentId,
        name: broadcastName,
        from: `${RESEND_CONFIG.fromName} <${RESEND_CONFIG.fromEmail}>`,
        subject: post.title,
        html: emailHtml,
        topicId,
      });

      if (result.error) {
        console.error(`Resend API error for topic ${topicName}:`, result.error);
        errors.push(`${topicName}: ${result.error.message}`);
      } else if (result.data?.id) {
        broadcastIds.push(result.data.id);
      }
    }

    // Check if any broadcasts were created successfully
    if (broadcastIds.length === 0) {
      return {
        success: false,
        error: `Failed to create broadcasts: ${errors.join(', ')}`,
      };
    }

    // Partial success if some broadcasts failed
    if (errors.length > 0) {
      console.warn(`Some broadcasts failed: ${errors.join(', ')}`);
    }

    return {
      success: true,
      broadcastIds,
      broadcastId: broadcastIds[0],  // For backward compatibility
      topics,
    };
  } catch (error) {
    console.error('Error creating broadcast:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Send a broadcast immediately or schedule it
 */
export async function sendBroadcast(
  broadcastId: string,
  options?: {
    scheduledAt?: string; // e.g., 'in 1 min', 'in 1 hour', ISO timestamp
  }
): Promise<NewsletterSendResult> {
  try {
    if (!resend) {
      return {
        success: false,
        error: 'Resend is not configured. Please set RESEND_API_KEY.',
      };
    }

    const result = await resend.broadcasts.send(broadcastId, {
      scheduledAt: options?.scheduledAt || 'now',
    });

    if (result.error) {
      console.error('Resend API error:', result.error);
      return {
        success: false,
        error: result.error.message,
      };
    }

    return {
      success: true,
      broadcastId: result.data?.id,
    };
  } catch (error) {
    console.error('Error sending broadcast:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Create and immediately send a blog post as a newsletter
 * This is a convenience function that combines create + send
 */
export async function sendBlogPostNewsletter(
  post: MarkdownPost,
  options?: {
    testEmail?: string;
    audienceId?: string;
    scheduledAt?: string;
  }
): Promise<NewsletterSendResult> {
  try {
    // Check if Resend is configured
    if (!resend) {
      return {
        success: false,
        error: 'Resend is not configured. Please set RESEND_API_KEY.',
      };
    }

    if (!options?.testEmail && !isResendConfigured()) {
      return {
        success: false,
        error: 'Resend audience is not configured. Please set RESEND_GENERAL_SEGMENT_ID.',
      };
    }

    // Format published date
    const publishedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    // Render email template
    const emailHtml = await render(
      BlogPostNewsletter({
        title: post.title,
        brief: post.brief,
        coverImage: post.coverImage,
        content: post.content.html,
        slug: post.slug,
        author: post.author.name,
        publishedAt: publishedDate,
        tags: post.tags.map((t) => t.name),
      })
    );

    // Send email - use different API based on recipient type
    if (options?.testEmail) {
      // Send to individual test email using emails.send
      const result = await resend.emails.send({
        from: `${RESEND_CONFIG.fromName} <${RESEND_CONFIG.fromEmail}>`,
        to: options.testEmail,
        subject: post.title,
        html: emailHtml,
        tags: [
          { name: 'type', value: 'blog-post' },
          { name: 'slug', value: post.slug },
        ],
      });

      if (result.error) {
        console.error('Resend API error:', result.error);
        return {
          success: false,
          error: result.error.message,
        };
      }

      return {
        success: true,
        messageId: result.data?.id,
      };
    } else {
      // Create broadcast and send to audience
      const createResult = await createBlogPostBroadcast(post, {
        audienceId: options?.audienceId,
      });

      if (!createResult.success || !createResult.broadcastId) {
        return createResult;
      }

      // Send the broadcast
      const sendResult = await sendBroadcast(createResult.broadcastId, {
        scheduledAt: options?.scheduledAt || 'now',
      });

      return sendResult;
    }
  } catch (error) {
    console.error('Error sending newsletter:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// ============================================================================
// Post Frontmatter Management
// ============================================================================

/**
 * Mark newsletter as sent in post frontmatter
 */
export async function markNewsletterAsSent(slug: string): Promise<void> {
  const postDir = path.join(process.cwd(), 'data', 'posts');
  
  // Find the post directory
  const entries = await fs.readdir(postDir, { withFileTypes: true });
  const postFolder = entries.find(
    (entry) => entry.isDirectory() && entry.name.includes(slug)
  );

  if (!postFolder) {
    throw new Error(`Post directory not found for slug: ${slug}`);
  }

  const postPath = path.join(postDir, postFolder.name, 'index.md');

  try {
    const content = await fs.readFile(postPath, 'utf-8');

    // Update frontmatter - handle both formats
    let updatedContent = content;

    // Try to update existing newsletter section
    if (content.includes('newsletter:')) {
      updatedContent = content.replace(
        /newsletter:\s*\n\s*send:\s*(true|false)\s*\n\s*sent:\s*(true|false)/,
        'newsletter:\n  send: true\n  sent: true'
      );
    } else {
      // Add newsletter section if it doesn't exist
      updatedContent = content.replace(
        /---\n([\s\S]*?)---/,
        (match, frontmatter) => {
          return `---\n${frontmatter}newsletter:\n  send: true\n  sent: true\n---`;
        }
      );
    }

    await fs.writeFile(postPath, updatedContent, 'utf-8');
    console.log(`Marked newsletter as sent for: ${slug}`);
  } catch (error) {
    console.error('Error updating post frontmatter:', error);
    throw error;
  }
}

/**
 * Get all posts pending newsletter send
 */
export async function getPendingNewsletterPosts(): Promise<MarkdownPost[]> {
  try {
    const allPosts = await loadMarkdownPosts();

    return allPosts.filter(
      (post) =>
        post.status === 'published' &&
        post.newsletter?.send === true &&
        post.newsletter?.sent !== true
    );
  } catch (error) {
    console.error('Error getting pending newsletter posts:', error);
    return [];
  }
}

// ============================================================================
// Subscriber Management
// ============================================================================

export interface SubscriberInfo {
  email: string;
  firstName?: string;
  lastName?: string;
}

/**
 * Subscribe a user to Resend audience
 */
export async function subscribeToResend(
  subscriber: SubscriberInfo
): Promise<NewsletterSendResult> {
  try {
    if (!resend) {
      return {
        success: false,
        error: 'Resend is not configured',
      };
    }

    if (!RESEND_CONFIG.generalSegmentId) {
      return {
        success: false,
        error: 'Resend segment ID is not configured',
      };
    }

    const result = await resend.contacts.create({
      email: subscriber.email,
      firstName: subscriber.firstName,
      lastName: subscriber.lastName,
      audienceId: RESEND_CONFIG.generalSegmentId,
    });

    if (result.error) {
      // Check if already subscribed
      if (result.error.message?.includes('already exists')) {
        return {
          success: true,
          messageId: 'already-subscribed',
        };
      }

      console.error('Resend subscribe error:', result.error);
      return {
        success: false,
        error: result.error.message,
      };
    }

    return {
      success: true,
      messageId: result.data?.id,
    };
  } catch (error) {
    console.error('Error subscribing to Resend:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

export interface WaitlistSubscriberInfo extends SubscriberInfo {
  waitlistType?: string;  // e.g., 'techie-taboo'
}

/**
 * Subscribe a waitlister to Resend - adds to both General and Techie Taboo segments
 */
export async function subscribeWaitlisterToResend(
  subscriber: WaitlistSubscriberInfo
): Promise<NewsletterSendResult> {
  try {
    if (!resend) {
      return {
        success: false,
        error: 'Resend is not configured',
      };
    }

    if (!RESEND_CONFIG.generalSegmentId) {
      return {
        success: false,
        error: 'Resend general segment ID is not configured',
      };
    }

    const results: { segmentId: string; success: boolean; alreadyExists: boolean; error?: string }[] = [];

    // Subscribe to General segment
    const generalResult = await resend.contacts.create({
      email: subscriber.email,
      firstName: subscriber.firstName,
      lastName: subscriber.lastName,
      audienceId: RESEND_CONFIG.generalSegmentId,
      unsubscribed: false,
    });

    if (generalResult.error) {
      if (generalResult.error.message?.includes('already exists')) {
        results.push({ segmentId: 'general', success: true, alreadyExists: true });
      } else {
        console.error('Resend general segment error:', generalResult.error);
        results.push({ segmentId: 'general', success: false, alreadyExists: false, error: generalResult.error.message });
      }
    } else {
      results.push({ segmentId: 'general', success: true, alreadyExists: false });
    }

    // Subscribe to Techie Taboo segment (if configured)
    if (RESEND_CONFIG.techieTabooSegmentId) {
      const techieTabooResult = await resend.contacts.create({
        email: subscriber.email,
        firstName: subscriber.firstName,
        lastName: subscriber.lastName,
        audienceId: RESEND_CONFIG.techieTabooSegmentId,
        unsubscribed: false,
      });

      if (techieTabooResult.error) {
        if (techieTabooResult.error.message?.includes('already exists')) {
          results.push({ segmentId: 'techie-taboo', success: true, alreadyExists: true });
        } else {
          console.error('Resend techie-taboo segment error:', techieTabooResult.error);
          results.push({ segmentId: 'techie-taboo', success: false, alreadyExists: false, error: techieTabooResult.error.message });
        }
      } else {
        results.push({ segmentId: 'techie-taboo', success: true, alreadyExists: false });
      }
    }

    // Check if at least one subscription succeeded
    const successCount = results.filter(r => r.success).length;
    if (successCount === 0) {
      return {
        success: false,
        error: results.map(r => r.error).filter(Boolean).join(', '),
      };
    }

    // Check if ALL successful subscriptions were already existing
    const allAlreadyExisted = results.filter(r => r.success).every(r => r.alreadyExists);

    console.log(`Waitlister ${subscriber.email} added to ${successCount} segment(s)`);
    return {
      success: true,
      messageId: allAlreadyExisted ? 'already-subscribed' : `subscribed-to-${successCount}-segments`,
    };
  } catch (error) {
    console.error('Error subscribing waitlister to Resend:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Get contact ID by email (for updating existing contacts)
 */
async function getContactIdByEmail(email: string): Promise<string | null> {
  if (!resend || !RESEND_CONFIG.generalSegmentId) return null;
  
  try {
    const result = await resend.contacts.list({
      audienceId: RESEND_CONFIG.generalSegmentId,
    });
    
    if (result.data?.data) {
      const contact = result.data.data.find((c: any) => c.email === email);
      return contact?.id || null;
    }
    return null;
  } catch (error) {
    console.error('Error getting contact by email:', error);
    return null;
  }
}

/**
 * Update contact with waitlist data (placeholder for future segment support)
 */
async function updateContactWaitlistData(contactId: string, waitlistType?: string): Promise<void> {
  // Note: Resend segments are filter-based and created in the dashboard
  // This function is a placeholder for when Resend adds direct segment assignment via API
  // For now, you can create a segment in Resend dashboard that filters by custom data
  console.log(`Contact ${contactId} added to waitlist: ${waitlistType || 'general'}`);
}

// ============================================================================
// Welcome Emails
// ============================================================================

export interface WelcomeEmailOptions {
  email: string;
  firstName?: string;
  source: 'newsletter' | 'waitlist' | 'general';
}

/**
 * Send a welcome email to a new subscriber
 */
export async function sendWelcomeEmail(
  options: WelcomeEmailOptions
): Promise<NewsletterSendResult> {
  try {
    if (!resend) {
      return {
        success: false,
        error: 'Resend is not configured',
      };
    }

    const emailHtml = await render(
      WelcomeEmail({
        firstName: options.firstName,
        source: options.source,
      })
    );

    const result = await resend.emails.send({
      from: `${RESEND_CONFIG.fromName} <${RESEND_CONFIG.fromEmail}>`,
      to: options.email,
      subject: options.source === 'waitlist' 
        ? 'Welcome to the Techie Taboo Waitlist! 🎉'
        : 'Welcome to ragTech! 🎉',
      html: emailHtml,
      headers: {
        'List-Unsubscribe': `<${process.env.NEXT_PUBLIC_BASE_URL || 'https://ragtechdev.com'}/api/newsletter/unsubscribe?email=${encodeURIComponent(options.email)}>`,
      },
    });

    if (result.error) {
      console.error('Welcome email send error:', result.error);
      return {
        success: false,
        error: result.error.message,
      };
    }

    console.log(`Welcome email sent to ${options.email}`);
    return {
      success: true,
      messageId: result.data?.id,
    };
  } catch (error) {
    console.error('Error sending welcome email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
