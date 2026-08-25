'use client';

import { motion } from 'framer-motion';
import { useWillageWaitlist } from './useWillageWaitlist';

export default function WillageWaitlistSection() {
  const {
    email,
    setEmail,
    subscribeStatus,
    subscribeMessage,
    handleSubscribe,
  } = useWillageWaitlist();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-xl border-2 border-primary/20">
        <h3 className="text-xl md:text-2xl font-bold text-brownDark dark:text-brown mb-2 text-center">
          Join the Willage waitlist
        </h3>
        <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 mb-4 text-center">
          Be the first to know when Willage opens its doors. No payment, no strings — just your email.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-3 rounded-full border-2 border-secondary focus:border-primary focus:outline-none text-brownDark dark:text-brown dark:bg-neutral-700 dark:border-neutral-600"
          />
          <button
            type="submit"
            disabled={subscribeStatus === 'loading'}
            className="px-8 py-3 bg-gradient-primary text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {subscribeStatus === 'loading' ? 'Joining...' : 'Join Waitlist'}
          </button>
        </form>

        {subscribeMessage && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 text-center font-semibold ${
              subscribeStatus === 'success' ? 'text-secondary' : 'text-red-600'
            }`}
          >
            {subscribeMessage}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}
