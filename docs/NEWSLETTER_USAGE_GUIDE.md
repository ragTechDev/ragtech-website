# Newsletter System - Usage Guide

Complete guide for using the Resend newsletter integration with your markdown blog posts.

---

## Quick Start

### 1. Configure Environment Variables

Add to your `.env.local` file:

```bash
# Resend Configuration
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@ragtechdev.com
RESEND_GENERAL_SEGMENT_ID=aud_xxxxxxxxxxxxx

# Resend Topic IDs (for newsletter segmentation)
RESEND_TOPIC_RAGTECH=topic_xxxxxxxxxxxxx
RESEND_TOPIC_FUTURENET=topic_xxxxxxxxxxxxx
RESEND_TOPIC_TECHIE_TABOO=topic_xxxxxxxxxxxxx

# Resend Waitlist Segment (optional - for filtering waitlist subscribers)
# Create a segment in Resend dashboard, then add the ID here
RESEND_TECHIE_TABOO_SEGMENT_ID=seg_xxxxxxxxxxxxx
```

**Get your credentials:**
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (ragtechdev.com)
3. Generate API key from Settings → API Keys
4. Create an Audience and copy the Audience ID
5. (Optional) Create a Segment for waitlist subscribers in Resend Dashboard → Segments

### 2. Test Email Templates Locally

Preview your email templates in the browser:

```bash
npm run email:dev
```

This opens a local server at `http://localhost:3000` where you can see and edit email templates in real-time.

### 3. Create a Post with Newsletter

Create a markdown post with newsletter enabled:

```yaml
---
title: "My Newsletter Post"
slug: "my-newsletter-post"
# ... other fields ...
newsletter:
  send: true      # Enable newsletter sending
  sent: false     # Will be updated automatically after sending
---

Your post content here...
```

### 4. Send Test Email

Before sending to your full audience, test the email using the npm script:

**Using Resend's test email (recommended for testing):**
```bash
npm run newsletter:test my-newsletter-post delivered@resend.dev
```

**Using your real email:**
```bash
npm run newsletter:test my-newsletter-post you@example.com
```

**Note:** Resend provides special test email addresses that simulate delivery without sending real emails:
- `delivered@resend.dev` - Simulates successful delivery
- `bounced@resend.dev` - Simulates bounced emails
- `complained@resend.dev` - Simulates spam complaints
- `suppressed@resend.dev` - Simulates suppressed emails

These test addresses will show up in your Resend dashboard but won't send actual emails.

### 5. Choose Your Sending Method

You have two options for sending newsletters to your audience:

#### Option A: Create Draft (Review Before Sending)

**Step 1: Create a broadcast draft**
```bash
npm run newsletter:draft my-newsletter-post
```

This creates a broadcast in your Resend dashboard with the post title as the name. You can:
- Review the broadcast in Resend dashboard
- Edit if needed
- Send manually from dashboard OR use the script below

**Step 2: Send the broadcast**
```bash
npm run newsletter:send-broadcast <broadcast-id>
```

With scheduling:
```bash
npm run newsletter:send-broadcast <broadcast-id> "in 1 hour"
npm run newsletter:send-broadcast <broadcast-id> "2026-02-05T15:00:00Z"
```

#### Option B: Create and Send Immediately

```bash
npm run newsletter:send my-newsletter-post
```

This creates the broadcast and sends it immediately (or schedules it). You'll be asked to confirm before sending. The post frontmatter will automatically update to `newsletter.sent: true`.

**Important:** Make sure your domain is verified in Resend before sending to real email addresses. See the "Domain Verification" section below.

---

## Subscriber Management

### Dual Subscription (Resend + Beehiiv)

The subscribe API is configured to add subscribers to **both** Resend and Beehiiv simultaneously.

**Configuration:** `app/api/newsletter/subscribe/route.ts`

```typescript
const NEWSLETTER_CONFIG = {
  resend: true,   // Set to false to disable Resend
  beehiiv: true,  // Set to false to disable Beehiiv
};
```

### Disable Beehiiv (Keep Only Resend)

To remove Beehiiv and use only Resend:

1. Edit `app/api/newsletter/subscribe/route.ts`:
   ```typescript
   const NEWSLETTER_CONFIG = {
     resend: true,
     beehiiv: false,  // Disabled
   };
   ```

2. Remove Beehiiv from other parts of the codebase (optional cleanup):
   - `lib/posts.ts` - Set `beehiiv: false` in DEFAULT_CONFIG
   - Remove `BEEHIIV_API_KEY` from `.env.local`

### Subscribe Form

The existing newsletter form in `app/blog/NewsletterSection.tsx` automatically subscribes users to both services (based on configuration).

No changes needed to the frontend - it just calls `/api/newsletter/subscribe`.

---

## API Reference

### POST `/api/newsletter/create-draft`

Create a broadcast draft without sending it.

**Request Body:**
```json
{
  "slug": "post-slug"
}
```

**Response:**
```json
{
  "success": true,
  "broadcastId": "abc123",
  "message": "Broadcast draft created successfully"
}
```

**Errors:**
- `400` - Post not found, newsletter not enabled
- `500` - Failed to create broadcast

---

### POST `/api/newsletter/send-broadcast`

Send an existing broadcast with optional scheduling.

**Request Body:**
```json
{
  "broadcastId": "abc123",
  "scheduledAt": "now"  // or "in 1 hour" or ISO timestamp
}
```

**Response:**
```json
{
  "success": true,
  "broadcastId": "abc123",
  "message": "Broadcast scheduled immediately"
}
```

**Errors:**
- `400` - Broadcast ID required
- `500` - Failed to send broadcast

---

### POST `/api/newsletter/send`

Create and send a blog post as a newsletter (combines create + send).

**Request Body:**
```json
{
  "slug": "post-slug",
  "testEmail": "optional@test.com",  // Optional: send to test email
  "scheduledAt": "now"  // Optional: schedule send time
}
```

**Response:**
```json
{
  "success": true,
  "broadcastId": "abc123",
  "message": "Newsletter sent to audience"
}
```

**Errors:**
- `400` - Post not found, newsletter not enabled, or already sent
- `500` - Failed to send newsletter

---

### POST `/api/newsletter/send-pending`

Send all posts with `newsletter.send: true` and `newsletter.sent: false`.

**Request:** No body required

**Response:**
```json
{
  "message": "Sent 3 of 3 newsletters",
  "sent": 3,
  "total": 3,
  "results": [
    {
      "slug": "post-1",
      "title": "Post Title",
      "success": true,
      "messageId": "msg_xxxxx"
    }
  ]
}
```

---

### POST `/api/newsletter/subscribe`

Subscribe a user to newsletter services.

**Request Body:**
```json
{
  "email": "user@example.com",
  "firstName": "John",      // Optional
  "lastName": "Doe"         // Optional
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully subscribed to Resend and Beehiiv",
  "results": {
    "resend": { "success": true },
    "beehiiv": { "success": true }
  }
}
```

---

## Workflow Examples

### Example 1: Draft → Review → Send (Recommended)

```bash
# 1. Create post with newsletter enabled
# data/posts/2026-02-05-my-post/index.md

# 2. Test send with Resend test email
npm run newsletter:test my-post delivered@resend.dev

# 3. Create draft broadcast
npm run newsletter:draft my-post
# Output: Broadcast ID: abc123

# 4. Review draft in Resend dashboard → Broadcasts
# Make any edits if needed

# 5. Send the broadcast
npm run newsletter:send-broadcast abc123

# Or schedule it
npm run newsletter:send-broadcast abc123 "in 2 hours"
```

### Example 2: Quick Send (No Review)

```bash
# 1. Test send
npm run newsletter:test my-post delivered@resend.dev

# 2. Send immediately
npm run newsletter:send my-post
```

### Example 2: Batch Send All Pending

```bash
# Send all posts with newsletter.send: true and newsletter.sent: false
npm run newsletter:send-pending
```

### Example 3: Scheduled Daily Send (GitHub Actions)

Create `.github/workflows/send-newsletters.yml`:

```yaml
name: Send Pending Newsletters
on:
  schedule:
    - cron: '0 10 * * *'  # Daily at 10 AM UTC
  workflow_dispatch:       # Manual trigger

jobs:
  send:
    runs-on: ubuntu-latest
    steps:
      - name: Send Newsletters
        run: |
          curl -X POST https://ragtechdev.com/api/newsletter/send-pending \
            -H "Content-Type: application/json"
```

---

## Email Template Customization

### Modify Email Layout

Edit `emails/components/EmailLayout.tsx` to customize:
- Header/logo
- Footer text
- Colors and styling
- Unsubscribe link

### Modify Blog Post Template

Edit `emails/BlogPostNewsletter.tsx` to customize:
- Cover image display
- Content preview length
- CTA button text/style
- Tag display

### Preview Changes

```bash
npm run email:dev
```

Navigate to your template in the browser to see changes in real-time.

---

## Testing with Resend Test Emails

Resend provides special test email addresses that simulate different delivery scenarios without sending actual emails. This is perfect for testing your newsletter system.

### Available Test Emails

| Email Address | Behavior | Use Case |
|--------------|----------|----------|
| `delivered@resend.dev` | Simulates successful delivery | Test successful sends |
| `bounced@resend.dev` | Simulates bounced emails | Test bounce handling |
| `complained@resend.dev` | Simulates spam complaints | Test spam handling |
| `suppressed@resend.dev` | Simulates suppressed emails | Test suppression |

### Testing Workflow

**1. Test with delivered@resend.dev:**
```bash
npm run newsletter:test introducing-markdown-blog-posts delivered@resend.dev
```

**Expected output:**
```
📧 Sending test newsletter...
   Post: introducing-markdown-blog-posts
   To: delivered@resend.dev

✅ Success! Test newsletter sent.

   Message ID: 1d8c2906-910d-46c3-9cd2-d53c6cfeddcd
   Test email sent to delivered@resend.dev

📬 Check your inbox!
```

**2. Verify in Resend Dashboard:**
- Go to [Resend Dashboard → Emails](https://resend.com/emails)
- Find the email by Message ID
- Check status (should show "Delivered")
- View email content and rendering

**3. Test different scenarios:**
```bash
# Test bounce
npm run newsletter:test my-post bounced@resend.dev

# Test spam complaint
npm run newsletter:test my-post complained@resend.dev

# Test suppression
npm run newsletter:test my-post suppressed@resend.dev
```

**4. Test with real email (requires domain verification):**
```bash
npm run newsletter:test my-post your.email@gmail.com
```

### Benefits of Test Emails

✅ **No spam** - Won't clutter real inboxes  
✅ **Instant feedback** - See results in Resend dashboard immediately  
✅ **Test scenarios** - Simulate bounces, spam, etc.  
✅ **No domain required** - Works without domain verification  
✅ **Safe testing** - Can't accidentally send to real users

---

## Domain Verification

To send emails to real email addresses (not test addresses), you must verify your domain in Resend.

### Steps to Verify Domain

**1. Add Domain in Resend:**
- Go to [Resend Dashboard → Domains](https://resend.com/domains)
- Click "Add Domain"
- Enter `ragtechdev.com`

**2. Add DNS Records:**

Resend will provide DNS records to add to your domain:

- **SPF Record** - Prevents email spoofing
- **DKIM Record** - Verifies email authenticity
- **DMARC Record** - Email authentication policy

**3. Wait for Verification:**
- DNS changes can take 5 minutes to 48 hours
- Resend will automatically verify once records are detected
- You'll receive an email when verification is complete

**4. Test Real Email Delivery:**
```bash
npm run newsletter:test my-post your.real@email.com
```

### Without Domain Verification

❌ Emails to real addresses will fail  
✅ Test emails (`delivered@resend.dev`) will work  
✅ API integration will work  
✅ Resend dashboard will show emails

---

## Troubleshooting

### Newsletter Not Sending

**Check:**
1. `RESEND_API_KEY` is set in `.env.local`
2. `RESEND_GENERAL_SEGMENT_ID` is set
3. Domain is verified in Resend dashboard
4. Post has `newsletter.send: true` in frontmatter
5. Post status is `published`

**View logs:**
```bash
# Check terminal where dev server is running
# Look for errors like "Resend is not configured"
```

### Subscribers Not Added

**Check:**
1. `RESEND_GENERAL_SEGMENT_ID` is correct
2. Email address is valid
3. Check Resend dashboard → Audiences → Contacts
4. Check browser console for API errors

**Test manually:**
```bash
curl -X POST http://localhost:3000/api/newsletter/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

### Email Looks Broken

**Common issues:**
- Images not loading: Use absolute URLs (https://ragtechdev.com/...)
- Styles not applied: Email clients strip most CSS
- Layout broken: Test in multiple email clients

**Test in multiple clients:**
- Gmail (web and mobile)
- Outlook
- Apple Mail
- Use [Litmus](https://litmus.com) or [Email on Acid](https://www.emailonacid.com) for comprehensive testing

---

## Production Deployment

### 1. Add Environment Variables

Add to your production environment (Vercel/Netlify):

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=hello@ragtechdev.com
RESEND_GENERAL_SEGMENT_ID=aud_xxxxxxxxxxxxx
```

### 2. Verify Domain

In Resend dashboard:
1. Go to Settings → Domains
2. Add ragtechdev.com
3. Add DNS records (SPF, DKIM, DMARC)
4. Wait for verification

### 3. Test Production

```bash
# Test send
curl -X POST https://ragtechdev.com/api/newsletter/send \
  -H "Content-Type: application/json" \
  -d '{"slug": "test-post", "testEmail": "you@example.com"}'
```

### 4. Monitor Delivery

Check Resend dashboard for:
- Delivery rates
- Bounce rates
- Open rates (if tracking enabled)
- Spam complaints

---

## Best Practices

### 1. Always Test First

Never send to your full audience without testing:
```bash
# Always use testEmail first
{"slug": "post", "testEmail": "you@example.com"}
```

### 2. Respect Unsubscribes

The email template includes an unsubscribe link. Resend handles this automatically.

### 3. Monitor Engagement

Check Resend dashboard regularly for:
- Delivery issues
- High bounce rates
- Spam complaints

### 4. Content Guidelines

- Keep emails concise (500-1000 words)
- Use clear subject lines (post title)
- Include a clear CTA
- Optimize images (< 1MB)
- Test on mobile devices

### 5. Sending Frequency

Don't overwhelm subscribers:
- Max 1-2 newsletters per week
- Use batch send for multiple posts
- Consider a weekly digest format

---

## Decoupling Guide

### Remove Beehiiv Completely

1. **Disable in subscribe API:**
   ```typescript
   // app/api/newsletter/subscribe/route.ts
   const NEWSLETTER_CONFIG = {
     resend: true,
     beehiiv: false,
   };
   ```

2. **Disable in posts loader:**
   ```typescript
   // lib/posts.ts
   const DEFAULT_CONFIG = {
     markdown: true,
     beehiiv: false,
     archived: true,
   };
   ```

3. **Remove environment variables:**
   ```bash
   # Remove from .env.local
   # BEEHIIV_API_KEY
   # BEEHIIV_PUBLICATION_ID
   ```

4. **Optional cleanup:**
   - Remove `subscribeToBeehiiv` import from subscribe route
   - Remove Beehiiv-related code from `lib/beehiiv.ts`

### Remove Resend (Keep Beehiiv)

1. **Disable in subscribe API:**
   ```typescript
   const NEWSLETTER_CONFIG = {
     resend: false,
     beehiiv: true,
   };
   ```

2. **Remove environment variables:**
   ```bash
   # Remove from .env.local
   # RESEND_API_KEY
   # RESEND_FROM_EMAIL
   # RESEND_GENERAL_SEGMENT_ID
   ```

---

## Cost Management

### Resend Pricing

- **Free tier:** 3,000 emails/month, 100 emails/day
- **Pro:** $20/month for 50,000 emails
- **Scale:** Custom pricing

### Optimization Tips

1. **Start with free tier** - Test and validate
2. **Monitor usage** - Check Resend dashboard
3. **Batch sends** - Use `/send-pending` instead of individual sends
4. **Clean your list** - Remove bounced/inactive subscribers
5. **Upgrade when needed** - Only when you consistently hit limits

---

## Support

### Resend Documentation
- [Resend Docs](https://resend.com/docs)
- [React Email Docs](https://react.email/docs)

### Troubleshooting
- Check server logs for errors
- Test API endpoints with curl
- Verify environment variables
- Check Resend dashboard for delivery issues

### Common Issues
- **"Resend is not configured"** - Set RESEND_API_KEY
- **"Audience not found"** - Check RESEND_GENERAL_SEGMENT_ID
- **"Domain not verified"** - Complete domain verification in Resend
- **Emails going to spam** - Set up SPF/DKIM/DMARC records
