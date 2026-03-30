---
title: "Why You and Your Friend See Different Like Counts on the Same Video"
slug: "eventual-consistency"
author:
  name: "Saloni"
  email: "saloni@ragtechdev.com"
  profilePicture: "/assets/team/saloni.PNG"
publishedAt: "2026-03-30T12:00:00Z"
coverImage: "/posts/2026-03-27-eventual-consistency/cover-image.png"
brief: "You and your friend open the same YouTube video and see different like counts. That's not a bug. It's a deliberate design choice called eventual consistency, and it shapes how almost every app you use is built."
tags:
  - "Tech Concepts"
  - "Distributed Systems"
  - "Vibe Coding"
  - "System Design"
  - "Beginner"
  - "Backend"
topic:
  - "ragTech"
readTimeInMinutes: 7
status: "published"
newsletter:
  send: true
  sent: false
  topic:
    - "ragTech"
seo:
  metaDescription: "Eventual consistency explained in plain English. Why different users see different data in the same app, and when it actually matters for builders."
  keywords:
    - "eventual consistency explained"
    - "what is eventual consistency"
    - "distributed systems for beginners"
    - "vibe coding concepts"
    - "how apps handle data"
    - "why different users see different data"
    - "system design for non-techies"
    - "eventual consistency vs strong consistency"
---

You and your friend are watching the same YouTube video. You see 1.2K likes. They see 1.1K. Same video, same moment, different numbers.

That's not a bug. It's a deliberate design choice, and it has a name: **eventual consistency**. It's one of the most fundamental concepts in how modern apps are built, and once you understand it, you'll start seeing it everywhere.

![Eventual Consistency Diagram](https://substackcdn.com/image/fetch/$s_!td8r!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff54a53fd-4921-4f2e-8d97-1d54249e3fac_1992x1216.png)

## How Apps Actually Store Data

When an app serves millions of users, it doesn't run on a single server sitting in one room. It runs on hundreds or thousands of servers spread across data centres around the world. This is how apps stay fast and stay online even when traffic spikes or a data centre has a problem.

![Global Data Centers](https://www.ensunet.com/wp-content/uploads/2020/08/Concept-of-global-business-1.jpg)

The tradeoff is that those servers cannot all update at the exact same instant. When someone likes a video, that update doesn't teleport to every server simultaneously. It travels outward, reaching one server, then another, then another, until they've all received the news. During that window, different servers hold slightly different versions of the data, and different users, depending on which server they're pulling from, might see slightly different numbers.

Eventually, every server catches up and everyone sees the same thing. That "eventually" is exactly where the name comes from.

## A Simple Way to Picture It

Think about your family WhatsApp group. You send a message. Your mum sees it immediately. Your dad, on a weaker connection, sees it 10 seconds later. Your cousin overseas sees it 30 seconds after that. For a moment, everyone has a slightly different version of the conversation. But eventually, they all catch up and see the same messages.

App data across servers works the same way. The servers are passing updates around to each other until everyone agrees. That short window in between is what engineers call being "eventually consistent."

## This Is a Deliberate Choice, Not a Mistake

Apps choose eventual consistency on purpose because the alternative, making every server agree before responding to any user, is much slower. If YouTube made you wait until all its servers had confirmed a like before showing you an updated count, the page would feel sluggish. So it shows you the current count on the nearest server and syncs everything up in the background.

This is why if you've ever built an app using Firebase or Supabase and noticed that different users briefly see different numbers, your code was probably fine. Both of those platforms use eventual consistency by default for many operations. It's a feature, not a flaw.

## Strong vs. Eventual Consistency: A Quick Comparison

| | Strong Consistency | Eventual Consistency |
|---|---|---|
| **What it means** | All users see the exact same data at the exact same time | Data syncs across servers, but may be briefly out of sync |
| **Speed** | Slower (every server must agree before responding) | Faster (updates spread gradually, responses are immediate) |
| **Best for** | Bank transactions, ticket booking, anything where a wrong answer causes real harm | Like counts, view counts, follower counts, leaderboards, sign-up counters |
| **You've seen it** | Your bank transfer sitting in "pending" | YouTube likes, Instagram view counts, Twitter follower numbers |

## Why This Matters (And When It Doesn't)

For most side projects and prototypes, you can completely ignore eventual consistency. If you're using Postgres, SQLite, or MySQL, those are strongly consistent by default. Build freely, don't overthink it.

The trap is tooling. Some databases are eventually consistent by default, regardless of how small your app is. Firestore, DynamoDB, and most distributed caches work this way. If you vibe-coded with one of these and hit a confusing bug where data looks right when you write it but wrong when you read it back a moment later, this is probably why. The database's architecture is leaking into your app behavior.

There are four specific situations where this will burn you.

---

**1. Inventory and limited availability**

You're selling 100 concert tickets. The counter hits 1. Three users on three different servers all see "1 remaining" at the same moment. All three click buy. Eventual consistency has no opinion on this. It lets all three go through and reconciles the numbers afterward. Now you've oversold.

If you're building anything with limited quantities, use database transactions or row-level locking. Don't assume the database will protect you.

---

**2. Payments**

This one is simple: never let money move through an eventually consistent operation. If a charge and a fulfillment update happen on separate servers without a transaction wrapping them, you can end up in a state where a user was charged but their order wasn't confirmed — or worse, fulfilled but not charged.

Use atomic transactions with rollback behavior for any payment logic.

---

**3. Unique constraints**

Two people try to register the username `@alex` in the same millisecond. Both servers check their local copy of the database. Both see it as available. Both approve the registration. Now you have two `@alex` accounts and a support headache.

Ensure to enforce uniqueness at the database level, not just in your app code.

---

**4. Moderation and harmful content**

You build an admin panel to remove a post. You click delete. On your screen it's gone. But on three servers in other regions, it's still propagating the removal. For a few seconds — sometimes longer — some users still see it.

For most content this is fine. For genuinely harmful material, those seconds matter. If you're building any moderation features, use strongly consistent deletes, not fire-and-forget ones.

---

## Back to Those YouTube Likes

Now that you know all this, go back to that YouTube video. You see 1.2K. Your friend sees 1.1K. That's not a bug, a glitch, or a slow connection. It's a trade-off that a team of engineers made consciously, speed over perfect synchrony, for data where being slightly wrong for a moment costs nothing.

The skill isn't memorising which databases are eventually consistent. It's knowing which *parts of your app* can tolerate a little lag, and which ones absolutely cannot. Get that distinction right and you'll avoid similar bugs.

---

ragTech is a podcast by Natasha Ann Lum, Saloni Kaur, and Victoria Lo where real people talk about real life in tech. Our mission is to simplify technology and make it accessible to everyone. We believe that tech shouldn't be intimidating, it should be fun, engaging, and easy to understand!

✨ragTech Spotify: [https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d](https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d)

✨ragTech YouTube: [https://www.youtube.com/@ragTechDev](https://www.youtube.com/@ragTechDev)

✨Instagram: [https://instagram.com/ragtechdev](https://instagram.com/ragtechdev)

✨Other Links: [https://linktr.ee/ragtechdev](https://linktr.ee/ragtechdev)
