import WelcomeEmail from './WelcomeEmail';

/**
 * Preview-only entry for the ragTech blog newsletter welcome email
 * (WelcomeEmail with source="newsletter" — see lib/newsletter.ts's sendWelcomeEmail).
 * No firstName: the newsletter signup form only collects an email address.
 */
export default function WelcomeRagtech() {
  return <WelcomeEmail source="newsletter" />;
}

WelcomeRagtech.PreviewProps = {
  source: 'newsletter',
};
