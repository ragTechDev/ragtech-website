---
title: "Agentic Software Engineering is NOT Vibecoding"
slug: "agentic-software-engineering-is-not-vibecoding"
author:
  name: "Natasha Ann"
  profilePicture: "/assets/team/natasha.png"
publishedAt: "2026-06-16T12:00:00Z"
coverImage: "https://media.licdn.com/dms/image/v2/D4D12AQHH00StjV2pFA/article-cover_image-shrink_720_1280/B4DZZJzyelG8AM-/0/1744995044108?e=2147483647&v=beta&t=mJ052tvzv2tD_XC8CW2JdhN_l7HOiX18J_FC8dabEPw"
brief: "Agentic software engineering and vibecoding both use coding agents, but they are not the same thing — and treating them as equivalent creates real problems for software engineering teams."
tags: ["agentic software engineering", "vibecoding", "coding agents", "developer productivity", "software engineering", "AI tools"]
status: "published"
topic:
  - "ragTech"
readTimeInMinutes: 9
newsletter:
  send: true
  sent: false
  topic:
    - "ragTech"
seo:
  metaDescription: "Agentic software engineering is not vibecoding. Learn the four key differences that matter for software engineering teams adopting coding agents."
  keywords: ["agentic software engineering", "vibecoding", "coding agents", "developer productivity", "software engineering teams", "AI coding tools", "coding agent tools"]
instagramEmbeds:
tiktokEmbeds:
---

Despite both using coding agents to generate code, agentic software engineering is *NOT* equivalent to vibecoding.

As the host of ragTech, a podcast by software engineers giving objective commentary on tech, and as a software engineer whose full-time job is to improve developer productivity with coding agents and introduce them to software engineering teams, I've seen this conflation happen alot. It matters because treating the two as the same tends to lead teams to adopt coding agents in ways that create more problems than they solve.

To explain why, I'll look at four areas where the two diverge: how coding in isolation differs from coding in a team, how each approach handles new versus existing projects, how they treat scalability, and what the actual day-to-day focus of each looks like in practice.

# Coding in Isolation is Different from Collaborative Coding

![Solo vs team Development](https://blog.appforcestudio.com/wp-content/uploads/2025/09/no-code-vs-developers-decision-guide.png)

For one, any developer would know that there is a huge difference between writing code on your own and writing code in order to collaborate with others. When writing code on your own, say for a personal project, you get to make all your own decisions and write in a style that is understood solely by yourself. You do not need any artifacts to document why you made a certain decision for a few reasons:

1. You can likely remember why you made the decision
2. You do not need to account and explain to someone else why you made the decision
3. The liability of the consequences from that decision is borne by you, not somebody else or as a collective

However, when coding in teams, this changes. Software engineering teams go through rigorous rituals and documentation processes to make technical decisions, knowing that a single decision could affect many things and people in the long-run.

## Collaborative Coding Rituals

On rituals, many of these rituals used by software engineering teams come from the paradigm of agile software engineering. We'll probably go into what agile is in future blogposts and videos, but it is essentially a way of working together in a team to achieve an outcome in an iterative fashion.

![Tech Spike](https://terem.tech/wp-content/uploads/2021/07/Tech-Spikes-8-1024x640.png)

One of these rituals is a [*technical spike*](https://microsoft.github.io/code-with-engineering-playbook/design/design-reviews/recipes/technical-spike/), where members of a team experiment with different solutions for a period of time and document their findings, before coming back to the team and discussing their findings. Often a vote is taken to decide on the final adopted solution, and even with voting, there are specific rituals that teams perform to evaluate different aspects of the solution. 

![Scrum planning poker](https://www.visual-paradigm.com/servlet/editor-content/scrum/what-is-agile-planning-poker/sites/7/2018/12/planning-poker.png)

For example, [scrum (planning) poker](https://www.atlassian.com/blog/development/scrum-poker-for-agile-projects) might be used to vote on the effort required to develop a solution, so team members would either use poker cards or their fingers to vote on what they feel is the required effort (or storypoints, in tech jargon) to develop the solution.

So you can see how collaborative coding rituals are far different from what you would do if you were a single developer working on your own project. The likelihood is you wouldn't go through all this trouble, and instead just implement what you think is right at that point of time and figure out another solution if things go wrong!

## Collaborative Coding Documentation

Documentation related to collaborative coding tends to be very robust and comprehensive in order to capture as much context as needed to gain alignment across a team. When making a technical decision, a [*Request for Comment*](https://www.geeksforgeeks.org/computer-networks/rfc-request-for-comment/) (RFC) is usually written up. 

![Request for Comment](https://citizenside.com/wp-content/uploads/2023/08/what-is-rfc-or-internet-request-for-comments-1691253186.jpg)

As it suggests by the namesake, it is a request for comments by a group of people on a technical document describing a proposed solution's specifications, procedures, and standards. This was actually already used way back in 1969, when the internet originated, by the Internet Engineering Task Force (IETF) in order to collaboratively and transparently develop the standards related to the Internet.

![Architectural Decision Record](https://hspholding.com/wp-content/uploads/2025/07/Architecture-Decision-Records-ADRs.jpg)

When a decision is made, an [Architectural Decision Record (ADR)](https://naveenkamaraj.medium.com/what-is-adr-in-software-engineering-and-why-should-i-write-adrs-e014e64cae8) is written to document the various solutions available, their pros and cons, and the final decision and why it was made. This can also be written and stored within the codebase itself, so that when questions arise pertaining to the implementation in the future, any developer can revisit this document and understand the reasoning behind the way it was implemented at that point of time.

Again, a single solo developer is unlikely to have these documents written down, as there is no need to communicate to different stakeholders why a decision is made.

### Wait... The RFC and ADR Sound Like Documents Generated During Vibecoding on Plan Mode?

Some of you may see some resemblance between an RFC and ADR and the planning document that coding agents tend to generate before they start on a coding task. Some may call this a specification document (spec) or a Product Requirements Document (PRD) generated by coding agents.

However, the intention behind these documents are different. RFCs and ADRs are meant for the purpose of multi-stakeholder collaboration and contribution. Specs and PRDs generated by coding agents are meant to communicate coding agent intention to the human user. The latter does not expect the human user to contribute their opinion; the human user has to take the initiative to prompt the coding agent to change the spec or PRD if they have any revisions in mind.

![Spec Driven Development](https://substackcdn.com/image/fetch/$s_!L62A!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b38c28d-5c6b-4741-86f1-2dbca39fe7be_1776x2138.png)

There's also alot of buzz around this way of using AI tools to code called Spec-driven Development, but many do not caveat how it is more well-suited for vibecoding than agentic software engineering. For one, creating a new spec for the purposes of tracking requirements for coding agents to generate code creates a new source of truth beside tickets and issues, which are artifacts already used by software engineering teams to track requirements. Having to maintain two sources of truth is a tricky affair, and likely leads to divergence and hence confusion across stakeholders.

# Vibecoding Tends to be For New Projects While Agentic Software Engineering is For Existing Ones

When most people think of vibecoding, they think of building something from scratch. You start with a blank slate, describe what you want to a coding agent, and watch it generate a working app in minutes. There is no existing codebase to navigate, no established conventions to respect, and no teammates whose work you could accidentally break. If something doesn't work, you just regenerate it. The stakes are low because nothing is in production, and nobody else is depending on what you are building.

![Greenfield vs Brownfield](https://www.jocheojeda.com/wp-content/uploads/2026/01/ChatGPT-Image-Jan-12-2026-01_08_00-PM-1080x675.png)

Agentic software engineering operates in a very different environment. You are almost always working within an existing codebase, one that has accumulated months or years of architectural decisions, team conventions, and business logic. The coding agent cannot just generate code in isolation; it needs to understand and work within the patterns already established by the team. This is why context management tools like `CLAUDE.md` files become so important in agentic software engineering. They are essentially a way to onboard a coding agent into the codebase, the same way you would onboard a new developer joining the team.

The other major difference is consequences. In vibecoding, if you break something, you are only affecting yourself. In agentic software engineering, a bad change can break functionality that real users depend on, or introduce regressions that teammates then have to debug and fix. This is why regression testing becomes non-negotiable. It is not enough to ask "does the new feature work?" You also have to ask "does everything that worked before still work?" This is a question vibecoders rarely have to answer.

## The Agent Needs Context That Does Not Exist in a New Project

When you vibe code a new project, the coding agent has total freedom. There is no existing architecture to contradict, no legacy code to navigate. But in an existing project, the agent needs to know things like: what patterns does this team follow, what libraries are already in use, what parts of the codebase are off-limits, and what does "done" look like in this specific context. Without this context, coding agents tend to generate code that is technically functional but out of step with how the rest of the codebase is written.

This is a challenge unique to agentic software engineering, and it is one reason why documentation and context-loading infrastructure is such a big part of the practice. The work of agentic software engineering is not just writing prompts; it is building the scaffolding that allows coding agents to operate reliably within an existing, shared codebase.

# Vibecoding Does Not Assume Scalability; Agentic Software Engineering Is Built Around It

Vibecoding is generally aimed at getting something working as quickly as possible. The output is often a prototype, a demo, or a personal tool. For these use cases, scalability is beside the point. It does not matter if the app can handle a thousand concurrent users if it only needs to handle one. It does not matter if the code is easy to maintain if nobody else will ever read it. The standard for vibecoded projects is: does it work right now?

![Production vs Prototype](https://jcsportline.com/wp-content/uploads/2025/12/prototype-vs-production-1024x683.png)

Agentic software engineering does not have that luxury. The code being generated goes into production systems, which means it has to hold up under real conditions. This involves things like database query performance, handling concurrent requests gracefully, and writing code that other developers can understand, maintain, and build on top of. These are not afterthoughts; they are built into the criteria for what counts as done.

There is another dimension of scalability that is specific to agentic software engineering: the agentic workflows themselves need to scale. When you build a skill, a pipeline, or a harness for a team to use, the goal is usually that it can be adopted and reused across other teams and projects as well. This is fundamentally different from vibecoding, where the output tends to be one-off and disposable. In agentic software engineering, the workflows you build are meant to be repeatable and transferable.

## Code Quality as a Scalability Requirement

![Code quality](https://media.licdn.com/dms/image/v2/D4D12AQH5CtYJJLfIQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1702538307860?e=2147483647&v=beta&t=bjZyAWlpR50OtvDsIOme5La5ISpw3-Cq4djKS2gK2ss)

One of the more concrete ways this shows up is in code quality standards. In vibecoded projects, there is no particular pressure to write tests, add documentation, or follow a consistent style. The goal is to generate something functional. In agentic software engineering, code quality is treated as a scalability requirement. Poorly written code does not scale when a team has to maintain it, extend it, and debug it over time. This is why, in agentic software engineering, more tests tend to be written rather than fewer, and more documentation rather than less.

# The Focus of Vibecoding vs Agentic Software Engineering

The focus of vibecoding seems to be on the ease of generating a minimum viable app with as little friction as possible.

From my personal experience, the focus of agentic software engineering is on creating the infrastructure needed to use coding agents in a safe and reliable way, that is reproducible across teams and projects. It is also about using coding agents to improve overall software quality, where previously there may not have been manpower to do so. In many cases this means the introduction, rather than the removal, of friction. In agentic software engineering, you would likely introduce and enforce more tests rather than less, and demand more documentation rather than less. With coding agents, you now have the capacity to do so.

## What You Actually Build in Agentic Software Engineering

Because of this focus, what you build for the purposes of agentic software engineering is infrastructure. It is a combination of harnesses, new playbooks, and new pipelines.

### Harnesses

![AI Harness](https://substack-post-media.s3.amazonaws.com/public/images/83b75672-1df4-4a7b-ac29-33e6aa6019a7_2000x1039.png)

Harnesses are a big part of what I do at work. I tend to focus on identifying common code hygiene misses that are more characteristic of coding agents, and then I build the guardrails to prevent them from happening. For example, coding agents have a higher tendency to reveal secrets and environment variables in code than human developers do. Knowing that, I would build in pre-push hooks with `gitleaks` scanning, which scans for these secrets and environment variables in any new code changes before they are pushed from a local device into a shared code repository. Granted, humans can make this mistake too (I've made the mistake of committing environment variables into code repositories in my early days), but coding agents don't have intention and reasoning built in the way humans do. I don't expect a coding agent to know why it shouldn't write secrets into code, so I enforce a stricter guardrail to prevent it from ever happening.

### Skills

![Claude Skills](https://pic1.zhimg.com/v2-b4b02c2e756cb9f8d1ca830b8ef89662_720w.jpg?source=172ae18b)

Of course, it is not all about introducing friction and guardrails. Alot of it is about increasing developer productivity, with guardrails in place. It's about building new tools with AI that are tailored to the existing rituals and workflows of the software engineering team. A big part of my work is developing skills, which are templated AI instructions that software engineering teams can invoke and reuse again and again. I've created skills that would likely not be used by vibecoders, and are only useful for software engineers working in teams. For example, I've created skills to create issues, a fundamental artifact used by software engineering teams to track work and delegate it. I've created skills for the purposes of reviewing code, so that only review tasks requiring manual review are left to the reviewing developer, helping to resolve review bottleneck.

# Conclusion

Vibecoding and agentic software engineering may share the same tools, but the goals, the processes, and the outputs are entirely different. One is about speed and generation; the other is about reliability, collaboration, and scale.

The distinction between the two is not just semantic. If you are a software engineering team adopting coding agents, treating it the same as vibecoding tends to lead to skipped tests, undocumented decisions, code that works locally but fails in production, and secrets ending up in repositories. The infrastructure that agentic software engineering puts in place is precisely what prevents all of that. If you are just starting to bring coding agents into your team, the question is less about whether to use them and more about how to use them well.

---

Speaking of which, a question that tends to come up alongside this one is whether coding, as a skill, is still relevant at all in a world where coding agents exist. We tackled that on a recent episode of ragTech, and it's worth a listen before you decide how to bring coding agents into your team.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dYkOR6lnCh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If you found this useful, subscribe to our newsletter below to get more content like this delivered directly to your inbox. We also put out biweekly episodes on honest conversations around tech by software engineers, available on [YouTube](https://www.youtube.com/@ragTechDev), [Spotify](https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d), and Apple Podcasts, wherever you usually listen.

---

ragTech is a podcast by Natasha Ann Lum, Saloni Kaur, and Victoria Lo where real people talk about real life in tech. Our mission is to simplify technology and make it accessible to everyone. We believe that tech shouldn't be intimidating, it should be fun, engaging, and easy to understand!

✨ragTech Spotify: [https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d](https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d)

✨ragTech YouTube: [https://www.youtube.com/@ragTechDev](https://www.youtube.com/@ragTechDev)

✨Instagram: [https://instagram.com/ragtechdev](https://instagram.com/ragtechdev)

✨Other Links: [https://linktr.ee/ragtechdev](https://linktr.ee/ragtechdev)
