# Content Creation Workstream Guide

This guide defines the end-to-end workflow for creating blog and newsletter content in this repo.

## Goals

- Keep tone and voice consistent with ragTech podcast and existing posts.
- Maintain strong sourcing and citation quality.
- Ensure every published post can be cleanly repurposed into a newsletter draft.

## Prerequisites

- Local repo setup and `npm install` completed.
- Access to:
  - Internal `deckcreate` app (preferred for transcripts), or
  - [youtube-transcript.io](https://www.youtube-transcript.io/)
  - Resend dashboard [Ask for login creds in group]

---

## Workflow A: Published Podcast Episode Content

### 1. Get transcript from published episode

- Use the published YouTube URL from [published.md](./data/episodes/published.md).
- Extract **timestamped transcript** via `deckcreate` app or [youtube-transcript.io](https://www.youtube-transcript.io/).
- Save transcript in `data/episodes/transcripts/` using a consistent filename:
  - `<episode-number>-<slug>.txt`
- Append the episode entry in [published.md](./data/episodes/published.md) if not already listed.

### 2. Generate first blog draft with AI

- Ask AI to read:
  - Existing voice patterns from `data/episodes/transcripts/`
  - Existing style from `data/posts/`
- Output blog draft to:
  - `data/posts/YYYY-MM-DD-<post-slug>/index.md`

Use this prompt template:

```text
You are writing a ragTech blog post from a podcast transcript.

Inputs:
- Transcript: [PASTE transcript from data/episodes/transcripts/<file>.txt]
- Reference style posts: [LIST 2-3 post paths from data/posts]

Requirements:
1) Match ragTech voice: conversational, practical, clear, non-hype.
2) Keep technical concepts accessible to non-experts.
3) Preserve factual claims from transcript; do not invent quotes or events.
4) Add clear section headings and readable flow.
5) Include at least 1 "Key Takeaways" section.
6) Include suggestions for 2-4 images and where to place them.
7) Include YouTube embed section and optional TikTok embed placeholders.
8) Output in markdown with valid frontmatter compatible with this repo.

Frontmatter requirements:
- title, slug, author, publishedAt, coverImage, brief, tags, topic, readTimeInMinutes, status
- newsletter.send, newsletter.sent, newsletter.topic
- seo.metaDescription, seo.keywords

Constraints:
- No plagiarism.
- If external facts are added beyond transcript, add source citations.
- Keep paragraphs short for web and newsletter readability.
```

### 3. Refine content and add media

- Add/replace cover photo:
  - Preferred local path: `public/posts/YYYY-MM-DD-<post-slug>/...`
  - Then reference in frontmatter as `/posts/YYYY-MM-DD-<post-slug>/<file>`
- Add inline visuals to improve readability and break up long sections.
- Prefer externally hosted image URLs to save repo space when appropriate.
- Recommended free stock sources:
  - [Pexels](https://www.pexels.com/)
  - [Giphy Library](https://giphy.com/explore/library) for optional GIFs
- If using third-party images, include attribution and source link near usage or in a source section.

### 4. Add embeds

- Add YouTube embed iframe for the episode.
- Add relevant TikTok embeds where useful.
- Keep embeds strategically placed (not clustered).

### YouTube Embed iframe
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/<videoId>" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" 
  allowfullscreen
>
</iframe>

#### TikTok and Instagram embed format (repo standard)

Reference implementation:
- [data/posts/2026-02-15-zdata-johor-the-problem/index.md](./data/posts/2026-02-15-zdata-johor-the-problem/index.md)

Use **both**:
1. Frontmatter fallback maps (for newsletter rendering)
2. Inline embed HTML in markdown body (for blog rendering)

Frontmatter pattern:

```yaml
instagramEmbeds:
  <instagramPostId>: "<instagram-image-url>" // Inspect thumbnail image of post on feed to get
tiktokEmbeds:
  "<tiktokVideoId>": "<tiktok-cover-image-url>" // Inspect thumbnail image of post on feed to get
```

Example:

```yaml
instagramEmbeds:
  DUsLBiiAK0B: "https://...jpg"
tiktokEmbeds:
  "7541624942006390034": "https://...jpg"
```

Instagram embed in content:

```html
<div style="max-width: 50%; margin: 2rem auto; width: 100%;">
  <iframe
    src="https://www.instagram.com/p/<instagramPostId>/embed"
    width="100%"
    height="700"
    frameborder="0"
    scrolling="no"
    allowtransparency="true">
  </iframe>
</div>
```

TikTok embed in content:

```html
<blockquote class="tiktok-embed"
  cite="https://www.tiktok.com/@<handle>/video/<tiktokVideoId>"
  data-video-id="<tiktokVideoId>"
  style="max-width: 605px;min-width: 325px;">
  <section>...</section>
</blockquote>
<script async src="https://www.tiktok.com/embed.js"></script>
```

Embed QA checklist:
- Use valid public post/video IDs.
- Add fallback image URLs in frontmatter for every Instagram/TikTok embed.
- Keep only one TikTok embed script include per post.
- Verify embeds in local dev and in newsletter draft output.

### 5. Local QA

- Run:

```bash
npm run dev
```

- Review post page for:
  - Layout and readability
  - Working image URLs
  - Embed rendering
  - Broken links

### 6. Newsletter sanitation and draft

- Ensure content follows the newsletter-compatible rules in [NEWSLETTER_USAGE_GUIDE.md](./NEWSLETTER_USAGE_GUIDE.md).
- Create draft:

```bash
npm run newsletter:draft my-newsletter-post
```

### 7. Resend QA

- Log in to Resend and review draft formatting.
- Add relevant newsletter topics.
- Confirm important note:
  - Images hosted on ragtech website paths may not render in draft previews before post is published.
  - Externally hosted image URLs usually render immediately in drafts.

### 8. PR and publish

- Open PR for review.
- Merge after approvals.
- After merge, schedule or publish newsletter draft in Resend.

---

## Workflow B: Non-Episode Content

### 1. Research first

- Collect credible sources before drafting.
- Prefer primary or reputable sources (official docs, institutions, known publications).
- Keep notes of links, publication dates, and key claims.

### 2. Generate research-based article with AI

- Ask AI to keep ragTech tone while preserving journalistic standards.
- Require explicit source citations for non-obvious claims.

Use this prompt template:

```text
Write a ragTech blog article on: [TOPIC]

Audience:
- Tech-curious professionals, founders, and developers.

Style:
- Match ragTech tone from existing posts and podcast transcripts:
  practical, human, candid, and easy to follow.

Research quality requirements:
1) Use only credible sources I provide below.
2) Cite each factual claim to a specific source link.
3) Do not fabricate statistics, quotes, people, or events.
4) If evidence is mixed, state uncertainty clearly.
5) Avoid legal/medical/financial overclaims and add nuance where needed.
6) Follow basic journalistic structure: context, evidence, analysis, limitations, takeaway.

Inputs:
- Source list: [PASTE credible links]
- Internal references: [PASTE links/slugs of our related blog posts or episodes]

Output requirements:
- Markdown with valid frontmatter for this repo
- Clear headings and short paragraphs
- "Sources" section with full links
- "Related ragTech content" section linking relevant internal posts/episodes
- Suggested image placements with attribution notes
```

### 3. Add internal linking

- Link related published posts and relevant past episodes.
- Reuse and reinforce existing ragTech narratives where relevant.

### 4. Follow the same production path

- Apply the same steps from Workflow A:
  - media refinement
  - embeds if relevant
  - local QA (`npm run dev`)
  - newsletter sanitation checks
  - `npm run newsletter:draft my-newsletter-post`
  - Resend QA
  - PR, merge, schedule/publish

---

## Publishing Checklist

- [ ] Transcript captured (if episode-based) and saved in `data/episodes/transcripts/`
- [ ] [published.md](./data/episodes/published.md) updated
- [ ] Post created in `data/posts/YYYY-MM-DD-<slug>/index.md`
- [ ] Frontmatter complete and valid
- [ ] Cover image and inline visuals added
- [ ] External image credits included where required
- [ ] YouTube/TikTok embeds verified
- [ ] Local review complete via `npm run dev`
- [ ] Newsletter draft created via `npm run newsletter:draft <slug>`
- [ ] Draft checked in Resend, topics set
- [ ] PR opened, reviewed, merged
- [ ] Newsletter scheduled or published

