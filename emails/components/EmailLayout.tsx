import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
} from '@react-email/components';
import * as React from 'react';
import SubscriptionFooter, { SubscriptionSource } from './SubscriptionFooter';

interface EmailLayoutProps {
  children: React.ReactNode;
  previewText: string;
  subscriptionSource?: SubscriptionSource;
  isBroadcast?: boolean;
}

export default function EmailLayout({ children, previewText, subscriptionSource = 'newsletter', isBroadcast = false }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
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
            {children}
          </Section>

          {/* Footer with unsubscribe */}
          <SubscriptionFooter source={subscriptionSource} isBroadcast={isBroadcast} />
        </Container>
      </Body>
    </Html>
  );
}

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
  width: '100%',
  tableLayout: 'fixed' as const,
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
  maxWidth: '520px',
  width: '100%',
  overflow: 'hidden',
  tableLayout: 'fixed' as const,
};
