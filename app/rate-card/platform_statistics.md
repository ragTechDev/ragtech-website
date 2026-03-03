# Platform Statistics & Engagement Metrics

**Internal document — not for public distribution.** Use these figures when building charts or rate‑card copy; formulas below show how engagement rates are derived.

**Last Updated**: 3 Mar 2026  
**Data Source Instructions**: Metrics are pulled from each platform's native analytics dashboard. See below for specific locations and date ranges. **Calculations (averages, percentages) are done in code components, not here.**

**Engagement formulas (for component logic):**
- **Engagement rate (%)** = (likes + comments + shares [+ saves]) / impressions × 100
- **Click‑through rate (%)** = clicks / impressions × 100
- **Completion rate (%)** = completed views / total views × 100
- **Avg per-item** = total value / number of items (posts, videos, etc.)

Numbers with ranges (e.g. "4–54") indicate min–max; when rendering public-facing cards, show the average with the range in parentheses.

---

## ragTech (@ragtechdev)

### Instagram
**Where to find**: Instagram Insights (Business Account > Insights tab)

- **Followers**: 3,849 (current count from profile)
- **Posts (last 12 months)**: 42 (from Posts → All Posts in Insights)
- **Avg Likes per Post (last 12 months)**: 4-54
- **Avg Comments per Post (last 12 months)**: 0-7
- **Avg Impressions per Post (last 12 months)**: [from Insights → Posts → Impressions column]
- **Avg Reach per Post (last 12 months)**: 156-2366
- **Save Rate (last 12 months)**: 0-11
- **Avg Story Views (last 30 days)**: 48-920
- **Avg Reel Views (last 30 days)**: 1427-322000
- **Avg Engagement per Reel (last 30 days)**: 13-11801 Likes + 0-264 Comments + 3-4554 Shares per Reel

**Reels-specific metrics (collect separately):**
- **Reels Published (last 12 months)**: [filter Reels in Posts → count]
- **Avg Reel Views (last 30 days)**: 1,427–322,000 (calculate average in component)
- **Avg Reel Likes (last 30 days)**: [from Insights → Reels → Likes]
- **Avg Reel Comments (last 30 days)**: [from Insights → Reels → Comments]
- **Avg Reel Shares (last 30 days)**: [from Insights → Reels → Shares]
- **Avg Reel Watch Time (seconds)**: [from Reels analytics]
- **Avg Reel Completion Rate (%)**: [from Reels analytics]
- **Reel Views range (min–max lifetime)**: [record lowest and highest view counts among Reels]

**Note**: Engagement Rate calculation (component level): (Total Engagements / Impressions) × 100

### YouTube (@ragTechDev)
**Where to find**: YouTube Studio > Analytics tab

**Important**: separate regular uploads and Shorts because performance patterns differ dramatically. Collect metrics for each category individually (filter by video length in the Videos table).

- **Subscribers**: 679 
- **Videos Published (all-time)**: 268 total (split into ~47 regular + ~221 Shorts)

#### Regular videos
- **Avg Views per Video (all-time)**: 17249/47
- **Avg Views per Video (last 30 days)**: 2016/2 
- **Avg Watch Time (minutes, last 30 days)**: 76.3 hours/2
- **Avg View Duration (%)**: 10.3%
- **Avg Likes per Video (last 30 days)**: 56/2
- **Avg Comments per Video (last 30 days)**: 6/2
- **Avg Views range (min–max lifetime)**: 55-1364

#### Shorts
- **Avg Views per Short (last 30 days)**: 17,249/221
- **Avg Likes per Short**: 1,753/221
- **Avg Comments per Short**: 52/221
- **Avg View Duration (%)**: 40.3%
- **Views range (min–max) lifetime**: 8-5765

- **Click-Through Rate (CTAs, last 30 days)**: 0
- **Subscriber Growth (last 30 days)**: 81
- **Retention Rate (avg, last 30 days)**: [from Analytics → Audience retention → relative retention % for last 30 days]

**Note**: Engagement Rate calculation (component level): (Likes + Comments + Shares) / Total Views × 100

You can display headline averages on the page with parenthetical min–max ranges (e.g., “avg 3.2 K views per video (range 1.1 K–5.8 K)”).

### TikTok (@ragtechdev)
**Where to find**: TikTok Creator Center > Analytics tab

- **Followers**: 365 (from profile or Analytics → Overview)
- **Videos Published (last 12 months)**: 93
- **Avg Views per Video (last 30 days)**: 22000/17
- **Avg Likes per Video (last 30 days)**: 412/17
- **Avg Comments per Video (last 30 days)**: 20/17
- **Avg Shares per Video (last 30 days)**: 26/17
- **Avg Completion Rate (%) (last 30 days)**: [from Analytics → Videos → Completion rate % column]
- **Follower Growth (last 30 days) (%)**: 93
- **Total Likes (last 30 days)**: 412
- **Avg Click-Through Rate (%)**: [if using links/CTAs, track via TikTok link analytics or external tracking]

**Note**: Engagement Rate calculation (component level): (Likes + Comments + Shares) / Total Views × 100

### Spotify (Bytes & Banter Podcast)
**Where to find**: Spotify for Podcasters (formerly Anchor) > Analytics tab

- **Total Streams (all-time)**: 1072
- **Total Streams (last 30 days)**: 49
- **Unique Listeners (last 30 days)**: [from Analytics → Listeners metric]
- **Spotify Followers**: 150
- **Avg Streams per Episode**: 11
- **Avg Listeners per Episode (last 30 days)**: [calculate: Total listeners last 30 days / episodes published last 30 days]
- **Downloads per Episode (avg, last 30 days)**: [from Analytics → Downloads column per episode]
- **Listener Retention (%) (last 30 days)**: [estimate from average completion rate shown in Analytics]
- **Follower Growth (last 30 days)**: 28
- **Episode with Highest Streams**: 53

**Note**: Data pulled from Spotify for Podcasters analytics dashboard. Export as needed for date range calculations.

### LinkedIn (@ragtechdev - Company Page)
**Where to find**: LinkedIn Company Page > Analytics tab

- **Followers**: 375 (from company page header)
- **Posts (last 12 months)**: [from Analytics → Posts → filter Last 12 months]
- **Avg Engagement per Post (last 12 months)**:  903 Likes + 97 Comments + 52 Shares total engagement
- **Avg Impressions per Post (last 12 months)**: [from Analytics → Posts → Impressions column]
- **Avg Click Rate per Post (%)**: [calculate in component: Total clicks / Total impressions × 100]
- **Follower Growth (last 30 days)**: 21
- **Most Engaged Post**: 857 Impressions

**Note**: Engagement Rate calculation (component level): (Likes + Comments + Shares + Clicks) / Total Impressions × 100

### Newsletter
**Where to find**: Resend dashboard (or email service provider: Beehiiv, ConvertKit, etc.)

- **Subscriber Count**: [from Dashboard → Overview]
- **Avg Open Rate (%) (last 12 months)**: [from Analytics → Campaign reports → Open rate column, average across campaigns]
- **Avg Click Rate (%) (last 12 months)**: [from Analytics → Campaign reports → Click rate column]
- **Subscriber Growth (last 30 days) (%)**: [calculate: (Current subscribers - subscribers 30 days ago) / subscribers 30 days ago × 100]
- **Recent Campaign Performance**: [last 3-5 campaigns: Subject, Send Date, Open Rate, Click Rate]
- **Unsubscribe Rate (%)**: [from recent campaigns average]

**Note**: Use email service provider's native analytics. Date range matters for calculating growth and averages accurately.

---

## Natasha Ann Lum (Personal Channels)
**Note**: Natasha does not post branded partnerships on her personal feeds; instead, she lends credibility and amplification by participating in ragTech campaigns as a guest creator or co-host. Her personal reach adds credibility and amplification potential.

### Instagram (@natashannnn)
**Where to find**: Her Instagram Insights

- **Followers**: 18081
- **Views (last 30 days)**: 576,975 (Reel 89.6%, Stories 10.1%, Posts 0.2%)
- **Accounts reached (last 30 days)**: 291531

### TikTok (@natashannnn)
**Where to find**: Creator Center > Analytics

- **Followers**: 9746
- **Video views (last 12 months)**: 3000000
- **Profile views (last 12 months)**: 111000
- **Likes (last 12 months)**: 113000
- **Comments (last 12 months)**: 6100
- **Shares (last 12 months)**: 15000

- **Video views (last 30 days)**: 376000
- **Profile views (last 30 days)**: 12000
- **Likes (last 30 days)**: 15000
- **Comments (last 30 days)**: 550
- **Shares (last 30 days)**: 2800

### LinkedIn (@natashannnn)
**Where to find**: Profile analytics (if available) or estimated from article interactions

- **Followers**: 2935
- **Posts (last 12 months)**: [from profile activity]
- **Avg Engagement per Post**: [Likes + Comments + Shares per post]
- **Industry/Audience Quality**: [note: likely highly tech-aligned, early-career and mid-career professionals]

### YouTube (Personal Channel, if applicable)
**Where to find**: YouTube Studio > Analytics

- **Subscribers**: [if channel exists, from desktop version]
- **Videos**: [count of uploads]
- **Avg Views per Video**: [raw views data from each video, calculated in component]
- **Avg Engagement per Video**: [Likes + Comments per video]

---

## Cohosts' Professional Credibility (All Three)
**Where to find**: LinkedIn profiles (for verified experience) or internal team data

- **Natasha Ann Lum**: [Role title, Company, Years at current company, Key specialties/languages, Years in tech overall]
- **Saloni Kaur**: [Role title, Company, Years at current company, Key specialties/languages, Years in tech overall]
- **Victoria Lo**: [Role title, Company, Years at current company, Key specialties/languages, Years in tech overall]
- **Combined Years in Tech**: [sum of all three + years across roles]
- **Notable Achievements**: [e.g., published articles, open source contributions, speaking engagements, etc.]
- **Women in Software Engineering**: All three are working practitioners (rare demographic in tech media)

**How to use in marketing**: This data demonstrates that ragTech hosts aren't personalities talking about tech—they're engineers actively building software, which gives them unique credibility with technical audiences. This is the foundation of partnership value.

---

## Audience Quality Metrics
**Where to find**: Aggregate from platform analytics dashboards (demographics/audience insights sections)

- **Technology Proficiency**: [Describe audience from podcast listenership: Software engineers, Full-stack developers, Solutions architects, Founders, Career switchers, etc.]
- **Purchasing Power**: Early to mid-career tech professionals in Singapore with high discretionary income
- **Geographic Breakdown**: [% breakdown - Singapore, SE Asia, Global, etc.] (gather from: Instagram Insights, YouTube Analytics, Podcast listener IP data)
- **Age Range**: [Primary audience age bracket - typically 22-40 from tech demographic]
- **Job Titles/Roles**: [Common roles among listeners: e.g., Software Engineer, Product Manager, Tech Lead, Founder, etc.]
- **Industry Verticals Most Interested**: [Based on podcast episode topic performance - fill from analytics]
- **Content Consumption Frequency**: [Monthly active listeners / viewers, repeat listener rate if available]
- **Social Media Overlap**: [% of audience that follows multiple ragTech channels]

**How to gather**: 
- Use platform audience insights (Instagram, YouTube, Spotify, TikTok native analytics)
- Track common job titles from LinkedIn followers/connections
- Monitor which podcast episodes have highest downloads (indicates audience interest verticals)

---

## Partnership Performance (Track Per Campaign)
**How to use**: Create a new entry for each brand partnership. Gather raw data from platform analytics after content goes live. Component-level code will calculate derived metrics (engagement rates, CTR, etc.)

### Campaign Template: [Brand Name]
- **Date Range**: [Publish date to analysis date - typically 14-30 days post-publish]
- **Platform(s)**: [Instagram / Podcast (Spotify/Apple/etc) / Blog / YouTube / Multi-platform]
- **Content Type**: [Static Post / Reel / Story / Episode Integration / Blog Post / Newsletter Feature / etc.]
- **Link Used (if applicable)**: [UTM-tagged link for tracking, affiliate link, etc.]

**Raw Data to Collect:**
- **Impressions**: [From platform analytics dashboard for content piece]
- **Reach**: [If available from platform - how many unique users saw it]
- **Likes**: [raw count]
- **Comments**: [raw count]
- **Shares**: [raw count]
- **Clicks**: [raw count or from UTM/link tracking]
- **Conversions/Sign-ups**: [if trackable through Segment, analytics, or partner reporting]
- **Associated Metrics**: [any additional: saves, watch time, downloads, etc.]

**Derived Metrics (calculated in component level):**
- **Engagement Rate (%)**: (Likes + Comments + Shares) / Impressions × 100
- **Click-Through Rate (%)**: Clicks / Impressions × 100
- **Conversion Rate (%)**: Conversions / Clicks × 100
- **Cost Per Engagement**: [Partnership price / Total engagements]
- **Cost Per Click**: [Partnership price / Total clicks]
- **ROI (if traceable)**: [Conversions value - Partnership price) / Partnership price × 100]

**Example Entry:**
```
### Campaign: Acme Tech Tools
- **Date Range**: Jan 15 - Jan 30, 2026
- **Platform(s)**: Podcast (Spotify/Apple), Instagram Reel
- **Content Type**: Mid-Roll Episode Integration + Reel Feature
- **Link Used**: https://acmetech.com?utm_source=ragtech&utm_medium=podcast
- **Impressions**: 12,400
- **Clicks**: 287
- **Sign-ups**: 34
``` 