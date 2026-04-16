/**
 * API Route: POST /api/submit-waitlist
 * Handles techie-taboo waitlist form submissions with automated workflows:
 * 1. Submit to Netlify Forms
 * 2. Subscribe to Resend audience (with waitlist segment)
 */

import { NextRequest, NextResponse } from 'next/server';
import { subscribeWaitlisterToResend, sendWelcomeEmail } from '@/lib/newsletter';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, screenshotData } = formData;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Get request metadata
    const referrer = request.headers.get('referer') || 'direct';
    const origin = request.headers.get('origin') || request.headers.get('referer')?.split('/').slice(0, 3).join('/') || 'https://ragtechdev.com';

    // Workflow 1: Submit to Netlify Forms
    try {
      const netlifyFormData = new URLSearchParams();
      netlifyFormData.append('form-name', 'techie-taboo-waitlist');
      netlifyFormData.append('name', name);
      netlifyFormData.append('email', email);
      
      if (screenshotData) {
        netlifyFormData.append('payment-screenshot', screenshotData);
      }

      const netlifyResponse = await fetch(`${origin}/__forms.html`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: netlifyFormData.toString(),
      });

      if (netlifyResponse.ok) {
        console.log('Netlify form submission successful');
      } else {
        console.error('Netlify form submission failed:', netlifyResponse.status);
      }
    } catch (error) {
      console.error('Netlify workflow error:', error);
    }

    console.log('Waitlist submission successful:', { name, email });

    // Workflow 2: Subscribe to Resend audience (non-blocking)
    // Note: To filter waitlisters in Resend, create a segment in the dashboard
    // that filters contacts where waitlist = "techie-taboo"
    try {
      // Split name into first and last name
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined;

      const resendResult = await subscribeWaitlisterToResend({
        email,
        firstName,
        lastName,
        waitlistType: 'techie-taboo',
      });

      if (resendResult.success) {
        console.log('Added to Resend audience:', { email, messageId: resendResult.messageId });
        
        // Send welcome email (only if subscription succeeded and not already subscribed)
        if (resendResult.messageId !== 'already-subscribed') {
          const welcomeResult = await sendWelcomeEmail({
            email,
            firstName,
            source: 'waitlist',
          });
          
          if (welcomeResult.success) {
            console.log('Welcome email sent:', { email, messageId: welcomeResult.messageId });
          } else {
            console.error('Welcome email failed:', welcomeResult.error);
          }
        }
      } else {
        console.error('Resend subscription failed:', resendResult.error);
      }
    } catch (error) {
      console.error('Resend workflow error:', error);
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully joined the waitlist!',
    });
  } catch (error) {
    console.error('Error processing waitlist submission:', error);

    return NextResponse.json(
      { error: 'Failed to process submission' },
      { status: 500 }
    );
  }
}
