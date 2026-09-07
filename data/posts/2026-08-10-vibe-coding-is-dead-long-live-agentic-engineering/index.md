---
title: "Vibe Coding is Dead, Long Live Agentic Engineering"
slug: "vibe-coding-is-dead-long-live-agentic-engineering"
author:
  name: "ragTech Team"
  profilePicture: "/assets/logo/ragtech-logo.png"
publishedAt: "2026-08-10T00:00:00Z"
coverImage: "https://i.ytimg.com/vi/96jN2OCOfLs/maxresdefault.jpg"
brief: "Andrej Karpathy coined vibe coding in 2025. A year later, at Sequoia's AI Ascent 2026, he told everyone to move on from it. We break down what agentic engineering actually means, and why the data backs him up."
tags: ["vibe coding", "agentic engineering", "coding agents", "software engineering", "AI tools"]
status: "published"
topic:
  - "ragTech"
readTimeInMinutes: 5
recommendedArticles:
  - "agentic-software-engineering-is-not-vibecoding"
newsletter:
  send: true
  sent: false
  topic:
    - "ragTech"
seo:
  metaDescription: "Andrej Karpathy coined vibe coding, then moved past it at AI Ascent 2026. We break down agentic engineering, Software 3.0, and the data on AI-written code quality."
  keywords: ["vibe coding", "agentic engineering", "agentic software engineering", "coding agents", "AI coding tools", "Karpathy Software 3.0", "AI code quality"]
instagramEmbeds:
tiktokEmbeds:
---

The person who invented "vibe coding" just told everyone to move on from it. When the guy who named the thing says the thing is not enough, it is probably worth a closer look.

## What Happened

Andrej Karpathy coined "vibe coding" in February 2025. He is a co-founder of OpenAI, the former AI lead at Tesla, and now runs Eureka Labs. In other words, not someone chasing a hashtag.

A year later he sat down with Stephanie Zhan at Sequoia Capital's AI Ascent 2026 for a talk titled "From Vibe Coding to Agentic Engineering." His message was that vibe coding was a genuinely fun way to build weekend projects, but serious software needs something more disciplined.

His original definition was refreshingly honest: you prompt an AI, accept whatever code it gives you, never read it, and paste errors back when things break. "Fully give in to the vibes, embrace exponentials, and forget that the code even exists." It was catchy, it stuck, and now even he says it only gets you so far.

<iframe width="560" height="315" src="https://www.youtube.com/embed/96jN2OCOfLs" title="Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## So What is Agentic Engineering?

Agentic engineering is the practice of coordinating AI coding agents to ship professional software at scale, while keeping security, maintainability, and quality intact. The AI still writes the code. You are the one checking every step.

Think of it this way. Vibe coding is letting a contractor build your house while you sit on the beach. Agentic engineering is being the architect on site, reviewing blueprints, checking the foundation, and making sure nothing collapses once people actually move in.

The difference comes down to one habit: do you read the code, or don't you?

Karpathy frames the two as solving different problems. Vibe coding raises the floor, so that anyone can build software at all. Agentic engineering raises the ceiling, giving professional engineers serious acceleration on work they could already do.

## Why He Changed His Mind

Karpathy points to around December 2025 as the turning point. The models finally got good enough that multi-step agentic workflows actually started to work. He stopped correcting the output line by line, started asking for bigger and bigger chunks, and it kept coming out fine.

![Reality check: 1.7x more bugs and 2.74x more security vulnerabilities in vibe-coded PRs](https://res.cloudinary.com/ddrceoirg/image/upload/v1785900608/blog-callouts/agentic-engineering.png)

The problem is what happens after that code ships. CodeRabbit analysed 470 open source GitHub pull requests, 320 of them AI co-authored and 150 written by humans alone. The AI-assisted ones carried roughly 1.7x more issues overall and up to 2.74x the security vulnerability rate. Logic and correctness issues went up by about 75%.

The vibes are great right up until your app has users who are not you.

## The Software 3.0 Framing

One of the more useful things to come out of the talk is a simple way to think about the last two decades of software:

- **Software 1.0**: traditional code you write by hand
- **Software 2.0**: learned weights, so neural networks and ML models
- **Software 3.0**: prompting as programming, where the context window is the lever and the LLM is the interpreter

Karpathy's point is that an LLM is not a faster tool bolted onto Software 1.0. It is a different kind of computer, and programming it means writing context rather than writing code.

This is not a fringe position anymore. LangChain's 2026 State of Agent Engineering report found that 57% of organisations already have agents in production, with another 30% actively building them.

## What We Take From This

- Vibe coding is still fine for prototypes, throwaway tools, and personal experiments. It is not fine for software other people depend on.
- Agentic engineering means AI writes and humans verify, at every step, not just at the end.
- The programmer's role is shifting from writer to director, which is a different skill set and worth practising deliberately.
- If you tried AI coding tools in early 2025 and wrote them off, Karpathy's advice is to reset your priors. The tooling moved.

None of this is an argument against using coding agents. It is an argument for putting guardrails around them before they touch anything that matters.

## Related ragTech Content

We went deep on the practical version of this distinction in [Agentic Software Engineering is NOT Vibecoding](/blog/agentic-software-engineering-is-not-vibecoding), which covers what changes for software engineering teams adopting coding agents.

## Sources

- [Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan](https://www.youtube.com/watch?v=96jN2OCOfLs), Sequoia Capital, AI Ascent 2026
- [State of AI vs Human Code Generation Report](https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report), CodeRabbit, December 2025
- [State of AI Agents](https://www.langchain.com/stateofaiagents), LangChain

---

At ragTech, we aim to make learning code, tech and AI more accessible to both techies and non-techies. If you found this useful, subscribe to our newsletter below to get more content like this delivered directly to your inbox.

---

ragTech is a podcast by Natasha Ann Lum, Saloni Kaur, and Victoria Lo where real people talk about real life in tech. Our mission is to simplify technology and make it accessible to everyone. We believe that tech shouldn't be intimidating, it should be fun, engaging, and easy to understand!

✨ragTech Spotify: [https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d](https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d)

✨ragTech YouTube: [https://www.youtube.com/@ragTechDev](https://www.youtube.com/@ragTechDev)

✨Instagram: [https://instagram.com/ragtechdev](https://instagram.com/ragtechdev)

✨Other Links: [https://linktr.ee/ragtechdev](https://linktr.ee/ragtechdev)
