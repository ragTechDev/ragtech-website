# Newsletter Topics System - Complete Guide

Guide for using Resend Topics to send newsletters to specific audience segments.

---

## Overview

The newsletter system uses **Resend Topics** to manage subscription preferences. All newsletters are sent to the **General segment** (all subscribers), but subscribers can opt-in/opt-out of specific topics.

### Available Topics

1. **ragTech** - Main ragTech content
2. **FutureNet** - FutureNet-related content
3. **Techie Taboo** - Techie Taboo podcast content

### How It Works

- **All broadcasts go to General segment** (configured in `RESEND_GENERAL_SEGMENT_ID`)
- **Topics control who receives the email** within that segment
- Subscribers can manage their topic preferences via unsubscribe page
- Each post **must specify at least one topic** (compulsory field)

---

## Configuration

### 1. Environment Variables

Add to your `.env.local`:

```bash
# General segment (all subscribers)
RESEND_GENERAL_SEGMENT_ID=aud_xxxxxxxxxxxxx

# Topic IDs (for subscription preferences)
RESEND_TOPIC_RAGTECH=topic_xxxxxxxxxxxxx
RESEND_TOPIC_FUTURENET=topic_xxxxxxxxxxxxx
RESEND_TOPIC_TECHIE_TABOO=topic_xxxxxxxxxxxxx
```

### 2. Create Topics in Resend Dashboard

1. Go to [Resend Dashboard → Topics](https://resend.com/audience/topics)
2. Click "Create Topic"
3. Create three topics:
   - **Name:** ragTech, **Visibility:** Public, **Default:** Opt-in
   - **Name:** FutureNet, **Visibility:** Public, **Default:** Opt-in
   - **Name:** Techie Taboo, **Visibility:** Public, **Default:** Opt-in
4. Copy each Topic ID to your `.env.local`

---

## Post Configuration

### Markdown Frontmatter

The `topic` field is **compulsory** when `newsletter.send: true`:

```yaml
---
title: "My Newsletter Post"
slug: "my-newsletter-post"
newsletter:
  send: true
  sent: false
  topic:           # COMPULSORY: One or more topics
    - ragTech
    - FutureNet
---
```

### Single Topic Example

```yaml
newsletter:
  send: true
  topic:
    - "Techie Taboo"
```

### Multiple Topics Example

```yaml
newsletter:
  send: true
  topic:
    - ragTech
    - FutureNet
    - "Techie Taboo"
```

**Note:** When multiple topics are specified, the system creates **separate broadcasts** for each topic (Resend limitation: one topic per broadcast).

---

## Sending Workflows

### Option 1: Use Topics from Post Frontmatter

```bash
# Create draft(s) using topics from post
npm run newsletter:draft my-post

# If post has multiple topics, creates multiple broadcasts
# Example output:
#   Created 2 broadcasts (one per topic)
#   Topics: ragTech, FutureNet
#   Broadcast IDs:
#     - abc123 [ragTech]
#     - def456 [FutureNet]
```

### Option 2: Override Topics via CLI

```bash
# Send to specific topic(s), ignoring post frontmatter
npm run newsletter:draft my-post ragTech
npm run newsletter:draft my-post ragTech FutureNet
npm run newsletter:draft my-post "Techie Taboo"
```

### Option 3: Create and Send Immediately

```bash
# Uses topics from post frontmatter
npm run newsletter:send my-post
```

---

## Complete Workflow Examples

### Example 1: Single Topic Newsletter

**Post frontmatter:**
```yaml
newsletter:
  send: true
  topic:
    - ragTech
```

**Workflow:**
```bash
# 1. Test
npm run newsletter:test my-post delivered@resend.dev

# 2. Create draft
npm run newsletter:draft my-post
# Output: Broadcast ID: abc123 [ragTech]

# 3. Review in Resend dashboard

# 4. Send
npm run newsletter:send-broadcast abc123
```

### Example 2: Multi-Topic Newsletter

**Post frontmatter:**
```yaml
newsletter:
  send: true
  topic:
    - ragTech
    - FutureNet
    - "Techie Taboo"
```

**Workflow:**
```bash
# 1. Test
npm run newsletter:test my-post delivered@resend.dev

# 2. Create drafts (one per topic)
npm run newsletter:draft my-post
# Output:
#   Created 3 broadcasts (one per topic)
#   Topics: ragTech, FutureNet, Techie Taboo
#   Broadcast IDs:
#     - abc123 [ragTech]
#     - def456 [FutureNet]
#     - ghi789 [Techie Taboo]

# 3. Review all drafts in Resend dashboard

# 4. Send each broadcast
npm run newsletter:send-broadcast abc123
npm run newsletter:send-broadcast def456
npm run newsletter:send-broadcast ghi789

# Or schedule them
npm run newsletter:send-broadcast abc123 "in 1 hour"
npm run newsletter:send-broadcast def456 "in 2 hours"
```

### Example 3: Override Topics at Send Time

**Post has:**
```yaml
newsletter:
  topic:
    - ragTech
```

**But you want to send to FutureNet instead:**
```bash
npm run newsletter:draft my-post FutureNet
# Creates broadcast with FutureNet topic, ignoring post frontmatter
```

---

## How Subscribers See It

### Subscription Flow

1. User subscribes via newsletter form → Added to **General segment**
2. By default, opted-in to **all topics** (ragTech, FutureNet, Techie Taboo)
3. User can manage preferences via unsubscribe page

### Unsubscribe Page

When subscribers click unsubscribe, they can:
- **Unsubscribe from specific topics** (e.g., only "Techie Taboo")
- **Unsubscribe from everything** (removed from General segment)

### Email Delivery Logic

```
IF subscriber in General segment
  AND subscriber opted-in to broadcast's topic
  THEN deliver email
ELSE
  Don't deliver
```

---

## Technical Details

### Broadcast Naming Convention

- **Single topic:** Uses post title as-is
  - Example: `"Introducing Markdown Posts"`
  
- **Multiple topics:** Appends topic name to title
  - Example: `"Introducing Markdown Posts [ragTech]"`
  - Example: `"Introducing Markdown Posts [FutureNet]"`

### API Behavior

```typescript
// Single topic
createBlogPostBroadcast(post) 
// → Creates 1 broadcast with topicId

// Multiple topics
createBlogPostBroadcast(post)
// → Creates N broadcasts (one per topic)
// → Returns array of broadcastIds
```

### Error Handling

- **No topics specified:** Error - "At least one topic is required"
- **Invalid topic name:** Warning logged, topic skipped
- **Topic ID not configured:** Error - "No valid topic IDs found"
- **Partial failure:** Creates successful broadcasts, logs warnings for failures

---

## Troubleshooting

### "At least one topic is required"

**Cause:** Post frontmatter missing `newsletter.topic` field

**Fix:** Add topic field to post:
```yaml
newsletter:
  send: true
  topic:
    - ragTech
```

### "No valid topic IDs found"

**Cause:** Environment variables not configured

**Fix:** Add topic IDs to `.env.local`:
```bash
RESEND_TOPIC_RAGTECH=topic_xxxxxxxxxxxxx
RESEND_TOPIC_FUTURENET=topic_xxxxxxxxxxxxx
RESEND_TOPIC_TECHIE_TABOO=topic_xxxxxxxxxxxxx
```

### Broadcast created but no one receives it

**Possible causes:**
1. All subscribers opted-out of that topic
2. Topic not configured correctly in Resend
3. Topic set to "Opt-out" default (should be "Opt-in")

**Fix:** Check Resend dashboard → Topics → Verify default is "Opt-in"

---

## Best Practices

### 1. Topic Selection Strategy

- **ragTech:** General tech content, company updates
- **FutureNet:** FutureNet-specific content
- **Techie Taboo:** Podcast episodes, discussions

### 2. Multi-Topic Posts

Use multiple topics when content is relevant to multiple audiences:
```yaml
# Good: Announcement relevant to all
topic:
  - ragTech
  - FutureNet
  - "Techie Taboo"

# Good: Specific to one audience
topic:
  - "Techie Taboo"
```

### 3. Testing

Always test with `delivered@resend.dev` before sending to real subscribers:
```bash
npm run newsletter:test my-post delivered@resend.dev
```

### 4. Scheduling

Schedule broadcasts during optimal times:
```bash
npm run newsletter:send-broadcast abc123 "2026-02-06T09:00:00Z"
npm run newsletter:send-broadcast abc123 "in 2 hours"
```

---

## Migration from Old System

If you have existing posts without topics:

1. **Add topic field to all posts:**
   ```yaml
   newsletter:
     send: true
     topic:
       - ragTech  # Default to ragTech
   ```

2. **Update sent posts** (optional):
   - Posts already sent don't need topics
   - Only required for future sends

3. **Configure environment variables**

4. **Test with one post** before bulk updates

---

## Summary

✅ **All broadcasts → General segment**  
✅ **Topics → Subscription preferences**  
✅ **Compulsory topic field** in post frontmatter  
✅ **Multiple topics → Multiple broadcasts**  
✅ **CLI override** for flexibility  
✅ **Subscribers control** their topic preferences  

For more details, see the main [NEWSLETTER_USAGE_GUIDE.md](./NEWSLETTER_USAGE_GUIDE.md).
