import { Section, Text, Link, Hr } from '@react-email/components';
import * as React from 'react';

export type SubscriptionSource = 'newsletter' | 'waitlist' | 'general' | 'willage';

interface SubscriptionFooterProps {
  source?: SubscriptionSource;
  isBroadcast?: boolean;
}

/**
 * Reusable footer component explaining why the user received this email
 * and providing unsubscribe options.
 * 
 * Unsubscribe is handled two ways:
 * 1. For broadcasts: Uses Resend's {{{unsubscribe_url}}} placeholder
 * 2. For transactional emails: Uses our custom unsubscribe page + List-Unsubscribe header
 * 
 * See: https://resend.com/docs/dashboard/emails/add-unsubscribe-to-transactional-emails
 */
export default function SubscriptionFooter({ source = 'general', isBroadcast = false }: SubscriptionFooterProps) {
  // For broadcasts, use Resend's placeholder. For transactional, use our unsubscribe page.
  const unsubscribeUrl = isBroadcast ? '{{{RESEND_UNSUBSCRIBE_URL}}}' : 'https://ragtechdev.com/unsubscribe';
  const getSubscriptionMessage = () => {
    switch (source) {
      case 'waitlist':
        return "You're receiving this email because you joined the waitlist for Techie Taboo cards on our website.";
      case 'willage':
        return "You're receiving this email because you joined the waitlist for Willage on our website.";
      case 'newsletter':
        return "You're receiving this email because you subscribed to our newsletter.";
      default:
        return "You're receiving this email because you subscribed through our ragTech website or by joining one of our waitlists.";
    }
  };

  return (
    <>
      <Hr style={hr} />
      <Section style={footer}>
        <Text style={subscriptionText}>
          {getSubscriptionMessage()}
        </Text>
        <Text style={footerText}>
          <Link href="https://ragtechdev.com" style={link}>
            Visit ragTech
          </Link>
          {' • '}
          <Link href={unsubscribeUrl} style={link}>
            Unsubscribe
          </Link>
        </Text>
        <Text style={footerCopyright}>
          © {new Date().getFullYear()} ragTech. All rights reserved.
        </Text>
      </Section>
    </>
  );
}

// Styles
const hr = {
  borderColor: '#e6ebf1',
  margin: '32px 0',
};

const footer = {
  padding: '0 40px',
  textAlign: 'center' as const,
};

const subscriptionText = {
  color: '#666666',
  fontSize: '12px',
  lineHeight: '18px',
  margin: '0 0 16px',
};

const footerText = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '8px 0',
};

const link = {
  color: '#5469d4',
  textDecoration: 'underline',
};

const footerCopyright = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
  marginTop: '16px',
};
