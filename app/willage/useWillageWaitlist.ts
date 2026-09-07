import { useState } from 'react';

export function useWillageWaitlist() {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');

    try {
      const response = await fetch('/api/willage/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubscribeStatus('success');
        setSubscribeMessage('🎉 You\'re on the waitlist! Check your inbox to confirm.');
        setEmail('');
      } else {
        setSubscribeStatus('error');
        setSubscribeMessage(data.error?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubscribeStatus('error');
      setSubscribeMessage('Failed to join the waitlist. Please try again later.');
      console.error('Willage waitlist subscription error:', err);
    }
  };

  return {
    email,
    setEmail,
    subscribeStatus,
    subscribeMessage,
    handleSubscribe,
  };
}
