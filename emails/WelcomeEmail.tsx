import {
  Section,
  Heading,
  Text,
  Button,
  Html,
  Head,
  Preview,
  Body,
  Container,
  Img,
} from '@react-email/components';
import * as React from 'react';
import SubscriptionFooter from './components/SubscriptionFooter';

interface WelcomeEmailProps {
  firstName?: string;
  source?: 'newsletter' | 'waitlist' | 'general' | 'willage';
}

export default function WelcomeEmail({
  firstName,
  source = 'waitlist',
}: WelcomeEmailProps) {
  const greeting = firstName ? `Hi ${firstName}!` : 'Hi there!';
  
  const getWelcomeMessage = () => {
    switch (source) {
      case 'waitlist':
        return "Thank you for joining the Techie Taboo cards waitlist! We're thrilled to have you on board.";
      case 'willage':
        return "Thank you for joining the Willage waitlist! We're thrilled to have you on board.";
      case 'newsletter':
        return "Thank you for subscribing to our newsletter! We're excited to share our latest updates with you.";
      default:
        return "Thank you for joining our community! We're excited to have you with us.";
    }
  };

  const getPreviewText = () => {
    switch (source) {
      case 'waitlist':
        return "Welcome to the Techie Taboo waitlist! You're now on the list for our upcoming card game.";
      case 'willage':
        return "Welcome to the Willage waitlist! You're now on the list, and meet ragTech, the team building it.";
      case 'newsletter':
        return "Welcome to ragTech! Thanks for subscribing to our newsletter.";
      default:
        return "Welcome to ragTech! Thanks for joining our community.";
    }
  };

  return (
    <Html>
      <Head />
      <Preview>{getPreviewText()}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src="https://ragtechdev.com/assets/logo/ragtech-logo.png"
              width="120"
              alt="ragTech"
              style={logo}
            />
          </Section>

          {/* Content */}
          <Section style={content}>
            <Heading style={h1}>{greeting}</Heading>
            
            <Text style={paragraph}>
              {getWelcomeMessage()}
            </Text>

            {source === 'waitlist' && (
              <>
                <Text style={paragraph}>
                  <strong>Techie Taboo</strong> is our upcoming party card game designed for tech enthusiasts.
                  You&apos;ll be among the first to know when we launch!
                </Text>
                <Text style={paragraph}>
                  In the meantime, here&apos;s what you can expect:
                </Text>
                <ul style={list}>
                  <li style={listItem}>Early access notifications when cards are available</li>
                  <li style={listItem}>Exclusive updates on game development</li>
                  <li style={listItem}>Special offers for waitlist members</li>
                </ul>
              </>
            )}

            {source === 'willage' && (
              <>
                <Text style={paragraph}>
                  <strong>Willage</strong> is a safety-first creator platform — comment permissions, invite-gated trust,
                  and a real moderation team, ahead of growth metrics. You&apos;ll be among the first to know when we launch!
                </Text>
                <Text style={paragraph}>
                  In the meantime, here&apos;s what you can expect:
                </Text>
                <ul style={list}>
                  <li style={listItem}>Early access notifications when Willage opens up</li>
                  <li style={listItem}>Behind-the-scenes updates on what we&apos;re building</li>
                  <li style={listItem}>A heads-up before waitlist spots open</li>
                </ul>
                <Text style={paragraph}>
                  Willage is being built by <strong>ragTech</strong> — the same Singapore-based team behind the
                  Bytes &amp; Banter podcast, dedicated to simplifying technology and making it accessible to everyone.
                </Text>
              </>
            )}

            {source === 'newsletter' && (
              <Text style={paragraph}>
                You&apos;ll receive updates about our latest blog posts, product announcements, 
                and insights from the ragTech team.
              </Text>
            )}

            <Section style={ctaSection}>
              <Button href="https://ragtechdev.com" style={button}>
                Visit ragTech →
              </Button>
            </Section>

            <Text style={paragraph}>
              Have questions? Just reply to this email – we&apos;d love to hear from you!
            </Text>

            <Text style={signature}>
              Cheers,<br />
              The ragTech Team
            </Text>
          </Section>

          {/* Footer with unsubscribe */}
          <SubscriptionFooter source={source} />
        </Container>
      </Body>
    </Html>
  );
}

// Default props for email preview
WelcomeEmail.PreviewProps = {
  firstName: 'Alex',
  source: 'waitlist',
} as WelcomeEmailProps;

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 40px',
  textAlign: 'center' as const,
};

const logo = {
  margin: '0 auto',
  height: 'auto',
};

const content = {
  padding: '0 40px',
};

const h1 = {
  color: '#1a1a1a',
  fontSize: '28px',
  fontWeight: '700',
  lineHeight: '1.3',
  margin: '0 0 24px',
};

const paragraph = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px',
};

const list = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 24px',
  paddingLeft: '24px',
};

const listItem = {
  marginBottom: '8px',
};

const ctaSection = {
  textAlign: 'center' as const,
  margin: '32px 0',
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

const signature = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '32px 0 0',
};
