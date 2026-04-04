# Markdown Blog System Setup Guide

This guide explains the new markdown-based blog post system that integrates with your existing Beehiiv and archived Hashnode posts.

## Overview

The blog now supports **three content sources**:
1. **Markdown posts** - New posts written in markdown, stored in the codebase
2. **Beehiiv posts** - Fetched from Beehiiv API (can be disabled)
3. **Archived posts** - Legacy Hashnode posts in JSON format (can be disabled)

All three sources are unified into a single blog feed with proper decoupling for easy management.

## Installation

### 1. Install Dependencies

Run the following command to install required packages:

```bash
npm install
```

The following dependencies have been added to `package.json`:
- `gray-matter` - Parse frontmatter from markdown files
- `remark` - Markdown processor
- `remark-html` - Convert markdown to HTML
- `remark-gfm` - GitHub Flavored Markdown support
- `remark-directive` - Custom directive support (for future use)
- `rehype-sanitize` - Sanitize HTML output
- `rehype-stringify` - HTML stringification
- `unified` - Text processing framework

### 2. Verify Directory Structure

Ensure the following directory structure exists:

```
data/
  posts/                                    # Markdown posts
    2026-02-04-introducing-markdown-blog-posts/
      index.md                              # Post content
      images/                               # Post images
        cover.jpg
  archived-posts/                           # Existing archived posts
    posts/
    archived-posts.json
```

## Creating a New Markdown Post

### 1. Create Post Directory

Create a new directory under `data/posts/` with the format:
```
YYYY-MM-DD-post-slug/
```

Example: `2026-02-15-my-new-post/`

### 2. Create `index.md`

Inside the post directory, create an `index.md` file with frontmatter and content:

```markdown
---
title: "Your Post Title"
slug: "your-post-slug"
author:
  name: "Author Name"
  email: "author@ragtechdev.com"
  profilePicture: "/assets/authors/author.png"
publishedAt: "2026-02-15T10:00:00Z"
scheduledFor: "2026-02-15T10:00:00Z"
coverImage: "./images/cover.jpg"
brief: "Short description for preview and SEO"
tags: ["tag1", "tag2", "tag3"]
readTimeInMinutes: 5
status: "published"
newsletter:
  send: false
  sent: false
seo:
  metaDescription: "SEO meta description"
  keywords: ["keyword1", "keyword2"]
---

# Your Post Content

Write your article content here in **markdown** format.

## Subheadings

- Lists
- Code blocks
- Images
- Everything markdown supports

![Image description](./images/screenshot.png)

\`\`\`typescript
// Code examples
const example = "hello world";
\`\`\`
```

### 3. Add Images

Place images in the `images/` subdirectory within your post folder:

```
data/posts/2026-02-15-my-new-post/
  index.md
  images/
    cover.jpg
    screenshot.png
    diagram.svg
```

Reference images using relative paths:
```markdown
![Alt text](./images/cover.jpg)
```

### 4. Set Post Status

The `status` field controls visibility:
- `draft` - Not visible on the blog
- `scheduled` - Will be published when `scheduledFor` date is reached
- `published` - Visible on the blog immediately

## Frontmatter Fields Reference

### Required Fields
- `title` - Post title
- `slug` - URL-friendly slug (must be unique)
- `author.name` - Author name
- `author.profilePicture` - Path to author photo
- `publishedAt` - Publication date (ISO 8601 format)
- `coverImage` - Path to cover image (relative or absolute)
- `brief` - Short description (1-2 sentences)
- `tags` - Array of tags
- `status` - Post status (draft/scheduled/published)

### Optional Fields
- `scheduledFor` - Future publication date
- `readTimeInMinutes` - Reading time (auto-calculated if omitted)
- `author.email` - Author email
- `newsletter.send` - Send as newsletter (default: false)
- `newsletter.sent` - Newsletter sent status
- `seo.metaDescription` - SEO meta description
- `seo.keywords` - SEO keywords array

## Managing Content Sources

### Disable/Enable Sources

Edit `lib/posts.ts` to configure which sources are active:

```typescript
const DEFAULT_CONFIG: PostSourceConfig = {
  markdown: true,   // Enable/disable markdown posts
  beehiiv: true,    // Enable/disable Beehiiv API
  archived: true,   // Enable/disable archived posts
};
```

### Remove Beehiiv Integration

To completely remove Beehiiv:

1. Set `beehiiv: false` in `lib/posts.ts`
2. Remove Beehiiv API calls (optional cleanup)
3. Remove `BEEHIIV_API_KEY` and `BEEHIIV_PUBLICATION_ID` from `.env.local`

### Remove Archived Posts

To remove archived Hashnode posts:

1. Set `archived: false` in `lib/posts.ts`
2. Delete `data/archived-posts/` directory (optional)

## File Structure

```
lib/
  markdown-types.ts          # TypeScript interfaces for markdown posts
  markdown.ts                # Markdown parsing and loading utilities
  posts.ts                   # Unified post interface (all sources)
  beehiiv-types.ts          # Beehiiv type definitions
  beehiiv.ts                # Beehiiv API utilities

app/
  blog/
    page.tsx                 # Blog listing page (uses unified posts)
    BlogPosts.tsx           # Client component for post grid
    [slug]/
      page.tsx              # Individual post page (uses unified posts)

data/
  posts/                    # Markdown posts
  archived-posts/          # Archived Hashnode posts
```

## How It Works

### 1. Post Loading

The `loadAllPosts()` function in `lib/posts.ts`:
- Loads markdown posts from `data/posts/`
- Fetches Beehiiv posts from API
- Loads archived posts from JSON files
- Merges all sources into a unified array
- Sorts by publication date (newest first)

### 2. Unified Interface

All post types are normalized through utility functions:
- `getUnifiedPostDate()` - Get publication date
- `getUnifiedPostTitle()` - Get post title
- `getUnifiedPostSlug()` - Get URL slug
- `getUnifiedPostBrief()` - Get description
- `getUnifiedPostCoverImage()` - Get cover image URL
- `getPostSource()` - Get source type (markdown/beehiiv/archived)

### 3. Type Guards

Use type guards to check post source:
```typescript
import { isMarkdownPost, isArchivedPost } from '@/lib/posts';

if (isMarkdownPost(post)) {
  // Handle markdown post
} else if (isArchivedPost(post)) {
  // Handle archived post
} else {
  // Handle Beehiiv post
}
```

## Markdown Features

### Supported Syntax

- **Bold**, *italic*, ~~strikethrough~~
- `inline code`
- Code blocks with syntax highlighting
- Headings (H1-H6)
- Lists (ordered and unordered)
- Links and images
- Blockquotes
- Tables (GitHub Flavored Markdown)
- Task lists

### Future Enhancements

Custom directives for rich media (planned):
```markdown
:::youtube
id: VIDEO_ID
title: Video Title
:::

:::image
src: ./images/photo.jpg
alt: Description
caption: Image caption
align: center
:::
```

## Troubleshooting

### Posts Not Appearing

1. Check `status` is set to `published`
2. Verify `publishedAt` date is not in the future
3. Check markdown file is named `index.md`
4. Ensure post directory follows naming convention

### Images Not Loading

1. Verify image paths are relative: `./images/photo.jpg`
2. Check images exist in the post's `images/` directory
3. Ensure image files are committed to Git

### Type Errors

If you see TypeScript errors about missing modules:
1. Run `npm install` to install dependencies
2. Restart your IDE/TypeScript server
3. Check `package.json` has all required dependencies

## Next Steps

1. **Install dependencies**: Run `npm install`
2. **Create your first post**: Follow the "Creating a New Markdown Post" section
3. **Test locally**: Run `npm run dev` and visit `/blog`
4. **Configure sources**: Adjust `lib/posts.ts` to enable/disable sources
5. **Add newsletter integration**: Set up Resend for email newsletters (separate guide)

## Benefits

✅ **Version Control** - All content tracked in Git  
✅ **Better Editing** - Use VS Code or any markdown editor  
✅ **Portability** - Not locked into any platform  
✅ **AI-Friendly** - Easy for AI assistants to create/edit posts  
✅ **Flexible** - Mix markdown, Beehiiv, and archived posts  
✅ **Decoupled** - Easy to remove any source independently  

## Questions?

For issues or questions, check:
- `lib/posts.ts` - Unified post interface
- `lib/markdown.ts` - Markdown parsing logic
- Sample post: `data/posts/2026-02-04-introducing-markdown-blog-posts/`
