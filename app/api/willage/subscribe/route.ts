/**
 * API Route: POST /api/willage/subscribe
 * Subscribe email to the Willage waitlist (Resend general + willage segments)
 */

import { NextRequest, NextResponse } from 'next/server';
import { subscribeToWillageWaitlist, sendWelcomeEmail } from '@/lib/newsletter';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: { message: 'Valid email address is required' } },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: { message: 'Please provide a valid email address' } },
        { status: 400 }
      );
    }

    const result = await subscribeToWillageWaitlist({ email });

    if (!result.success) {
      return NextResponse.json(
        { error: { message: result.error || 'Failed to join the Willage waitlist' } },
        { status: 500 }
      );
    }

    if (result.messageId !== 'already-subscribed') {
      try {
        const welcomeResult = await sendWelcomeEmail({ email, source: 'willage' });
        if (!welcomeResult.success) {
          console.error('Willage welcome email failed:', welcomeResult.error);
        }
      } catch (welcomeError) {
        console.error('Willage welcome email error:', welcomeError);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Successfully joined the Willage waitlist' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in /api/willage/subscribe:', error);
    return NextResponse.json(
      {
        error: {
          message: error instanceof Error ? error.message : 'Failed to join the Willage waitlist',
        },
      },
      { status: 500 }
    );
  }
}
