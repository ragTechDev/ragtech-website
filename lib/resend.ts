/**
 * Resend client configuration
 * Server-side only
 */

import 'server-only';
import { Resend } from 'resend';

// Initialize Resend client
const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  console.warn('RESEND_API_KEY is not set - newsletter functionality will be disabled');
}

export const resend = apiKey ? new Resend(apiKey) : null;

// Resend configuration
export const RESEND_CONFIG = {
  fromEmail: process.env.RESEND_FROM_EMAIL || 'hello@mail.ragtechdev.com',
  fromName: 'ragTech',
  generalSegmentId: process.env.RESEND_GENERAL_SEGMENT_ID,
  techieTabooSegmentId: process.env.RESEND_TECHIE_TABOO_SEGMENT_ID,
  willageSegmentId: process.env.RESEND_WILLAGE_SEGMENT_ID || '1006b7a7-8104-430a-9f2d-bec07094f065',
  enabled: !!apiKey,
};

/**
 * Check if Resend is properly configured
 */
export function isResendConfigured(): boolean {
  return RESEND_CONFIG.enabled && !!RESEND_CONFIG.generalSegmentId;
}
