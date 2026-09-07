import WelcomeEmail from './WelcomeEmail';

/**
 * Preview-only entry for the Techie Taboo waitlist welcome email
 * (WelcomeEmail with source="waitlist" — see lib/newsletter.ts's sendWelcomeEmail)
 */
export default function WelcomeTechieTaboo() {
  return <WelcomeEmail firstName="Alex" source="waitlist" />;
}

WelcomeTechieTaboo.PreviewProps = {
  firstName: 'Alex',
  source: 'waitlist',
};
