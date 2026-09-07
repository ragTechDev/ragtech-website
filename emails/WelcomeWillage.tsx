import WelcomeEmail from './WelcomeEmail';

/**
 * Preview-only entry for the Willage waitlist welcome email
 * (WelcomeEmail with source="willage" — see lib/newsletter.ts's sendWelcomeEmail).
 * No firstName: the Willage waitlist form only collects an email address.
 */
export default function WelcomeWillage() {
  return <WelcomeEmail source="willage" />;
}

WelcomeWillage.PreviewProps = {
  source: 'willage',
};
