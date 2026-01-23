/**
 * API Route: GET /api/blog/posts
 * Fetch Beehiiv posts with page-based pagination
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchBeehiivPosts } from '@/lib/beehiiv';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '6', 10);

    // Validate limit (1-100) and page (min 1)
    const validLimit = Math.min(Math.max(limit, 1), 100);
    const validPage = Math.max(page, 1);

    const response = await fetchBeehiivPosts(validPage, validLimit);

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error in /api/blog/posts:', error);

    return NextResponse.json(
      {
        error: {
          message: error instanceof Error ? error.message : 'Failed to fetch posts',
        },
      },
      { status: 500 }
    );
  }
}
