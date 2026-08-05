/**
 * API Route: POST /api/newsletter/create-draft
 * Create a newsletter broadcast draft without sending it
 */

import { NextRequest, NextResponse } from 'next/server';
import { loadMarkdownPostBySlug, shouldPublishPost } from '@/lib/markdown';
import { createBlogPostBroadcast } from '@/lib/newsletter';
import type { NewsletterTopic } from '@/lib/newsletter-topics';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, topics } = body;

    if (!slug) {
      return NextResponse.json(
        { error: 'Post slug is required' },
        { status: 400 }
      );
    }

    // Load the post
    const post = await loadMarkdownPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    // Check if post is live (a scheduled post qualifies once its date has passed)
    if (!shouldPublishPost(post)) {
      return NextResponse.json(
        { error: 'Only live posts can be sent as newsletters' },
        { status: 400 }
      );
    }

    // Check if newsletter is enabled
    if (!post.newsletter?.send) {
      return NextResponse.json(
        { error: 'Newsletter sending not enabled for this post' },
        { status: 400 }
      );
    }

    // Create broadcast draft(s)
    const result = await createBlogPostBroadcast(post, {
      topics: topics as NewsletterTopic[] | undefined,
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error || 'Failed to create broadcast draft' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      broadcastId: result.broadcastId,
      broadcastIds: result.broadcastIds,
      topics: result.topics,
      message: result.broadcastIds && result.broadcastIds.length > 1
        ? `Created ${result.broadcastIds.length} broadcast drafts (one per topic)`
        : 'Broadcast draft created successfully',
    });
  } catch (error) {
    console.error('Error in /api/newsletter/create-draft:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
