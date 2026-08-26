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
  Row,
  Column,
  Link,
} from '@react-email/components';
import * as React from 'react';
import SubscriptionFooter from './components/SubscriptionFooter';
import { FEATURED_EPISODES } from './episodeData';

interface WelcomeEmailProps {
  firstName?: string;
  source?: 'newsletter' | 'waitlist' | 'general' | 'willage';
}

const COHOSTS = [
  { name: 'Natasha', role: 'Software Engineer', image: 'natasha.PNG' },
  { name: 'Saloni', role: 'Software Developer', image: 'saloni.PNG' },
  { name: 'Victoria', role: 'Solutions Engineer', image: 'victoria.PNG' },
];

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
                  Willage is being built by <strong>ragTech</strong> — the same team behind the ragTech Podcast,
                  dedicated to simplifying technology and making it accessible to everyone.
                </Text>
              </>
            )}

            {source === 'newsletter' && (
              <Text style={paragraph}>
                You&apos;ll receive updates about our latest blog posts, product announcements,
                and insights from the ragTech team.
              </Text>
            )}

            {/* Meet the Team */}
            <Section style={teamSection}>
              <Text style={teamHeading}>Meet the ragTech co-hosts 👋</Text>
              <Row>
                {COHOSTS.map((member) => (
                  <Column key={member.name} align="center" style={teamColumn}>
                    <Img
                      src={`https://ragtechdev.com/assets/team/${member.image}`}
                      width="72"
                      height="72"
                      alt={member.name}
                      style={teamAvatar}
                    />
                    <Text style={teamName}>{member.name}</Text>
                    <Text style={teamRole}>{member.role}</Text>
                  </Column>
                ))}
              </Row>
              <Text style={teamCaption}>
                We&apos;re the three of us behind ragTech, and we personally read everything you send us.
              </Text>
            </Section>

            {/* Podcast Promo */}
            <Section style={podcastSection}>
              <Text style={podcastHeading}>🎙️ Check out the ragTech Podcast</Text>
              <Text style={paragraph}>
                We&apos;re a tech podcast run by real techies, talking honestly about life in tech and how tech affects life —
                no jargon, no gatekeeping. Here are a few of our favourite episodes:
              </Text>
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
              <Text style={paragraph}>
                Subscribe and follow us so you never miss an episode:
              </Text>
              <Row>
                <Column align="center" style={podcastColumn}>
                  <Link href="https://www.youtube.com/@ragTechDev" style={podcastLink}>
                    ▶ Subscribe on YouTube
                  </Link>
                </Column>
                <Column align="center" style={podcastColumn}>
                  <Link href="https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d" style={podcastLink}>
                    🎧 Follow on Spotify
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Stay Connected */}
            <Section style={connectSection}>
              <Text style={connectHeading}>Stay connected</Text>
              <Text style={paragraph}>
                <Link href="https://ragtechdev.com/blog" style={inlineLink}>📖 Read our Blog</Link>
                {' • '}
                <Link href="https://www.instagram.com/ragtechdev/" style={inlineLink}>Instagram</Link>
                {' • '}
                <Link href="https://www.tiktok.com/@ragtechdev" style={inlineLink}>TikTok</Link>
                {' • '}
                <Link href="https://sg.linkedin.com/company/ragtechdev" style={inlineLink}>LinkedIn</Link>
                {' • '}
                <Link href="https://github.com/ragTechDev" style={inlineLink}>GitHub</Link>
              </Text>
            </Section>

            <Section style={ctaSection}>
              <Button href="https://ragtechdev.com" style={button}>
                🌐 Explore ragtechdev.com →
              </Button>
            </Section>

            <Text style={paragraph}>
              Please note: this inbox is send-only, so replies to this email won&apos;t reach us.
              To get in touch, email us directly at{' '}
              <Link href="mailto:hello@ragtechdev.com" style={inlineLink}>hello@ragtechdev.com</Link>.
            </Text>

            <Text style={signature}>
              Cheers,<br />
              Natasha, Saloni &amp; Victoria — The ragTech Team
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
  backgroundColor: '#fda2a9',
  backgroundImage: 'linear-gradient(135deg, #fda2a9 0%, #a2d4d1 100%)',
  borderRadius: '999px',
  color: '#ffffff',
  fontSize: '17px',
  fontWeight: '700',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '16px 40px',
  boxShadow: '0 4px 14px rgba(253, 162, 169, 0.4)',
  letterSpacing: '0.3px',
};

const signature = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '32px 0 0',
};

const teamSection = {
  margin: '32px 0',
  padding: '24px 16px',
  backgroundColor: '#f6f9fc',
  borderRadius: '12px',
  textAlign: 'center' as const,
};

const teamHeading = {
  color: '#1a1a1a',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0 0 16px',
};

const teamColumn = {
  padding: '0 8px',
};

const teamAvatar = {
  width: '72px',
  height: '72px',
  borderRadius: '50%',
  objectFit: 'cover' as const,
  margin: '0 auto 8px',
  display: 'block',
};

const teamName = {
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
  lineHeight: '1.3',
};

const teamRole = {
  color: '#666666',
  fontSize: '12px',
  margin: '0',
  lineHeight: '1.4',
};

const teamCaption = {
  color: '#666666',
  fontSize: '13px',
  lineHeight: '1.5',
  margin: '16px 0 0',
};

const podcastSection = {
  margin: '32px 0',
  padding: '24px 16px',
  backgroundColor: '#fff3c1',
  borderRadius: '12px',
  textAlign: 'center' as const,
};

const podcastHeading = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 0 12px',
};

const podcastColumn = {
  padding: '4px 8px',
};

const episodeColumn = {
  padding: '0 6px 16px',
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
};

const inlineLink = {
  color: '#5da9a4',
  textDecoration: 'underline',
};

const connectSection = {
  margin: '32px 0',
  textAlign: 'center' as const,
};

const connectHeading = {
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '700',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.5px',
  margin: '0 0 8px',
};
