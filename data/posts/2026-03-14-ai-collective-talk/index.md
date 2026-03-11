---
title: "Women in AI: The Dilemma Nobody Talks About"
slug: "women-in-ai-the-dilemma-nobody-talks-about"
author:
  name: "Natasha"
  profilePicture: "/assets/team/natasha.PNG"
publishedAt: "2026-03-14T12:00:00Z"
coverImage: "/episodes/ep_leadership.webp"
brief: "I spoke at AI Collective Singapore for International Women's Day on the tension between championing AI as a tool for women, and confronting what AI actually costs. Here's what I shared."
tags: ["AI", "Women in Tech", "Ethics", "International Women's Day", "Singapore"]
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
  metaDescription: "Natasha shares her talk at AI Collective Singapore for International Women's Day on intentional AI, women in ethical tech roles, and what it means to use AI responsibly."
  keywords: ["women in AI", "ethical AI", "intentional AI", "International Women's Day", "Singapore", "AI ethics", "women in tech"]
---

Yesterday I spoke at [AI Collective Singapore](https://www.aicollective.com/) for International Women's Day, on the topic of "Women in AI". And the thing I kept coming back to while prepping for it wasn't a celebration, but it was a _constant_ tension.

As a woman in tech who builds with AI every single day, I feel pulled in two directions. I want to champion AI as a tool that empowers women to do more with less. At the same time, I can't ignore what AI costs: the artists whose work was scraped without consent, the biases baked into systems that affect women disproportionately, the jobs being quietly displaced. How do you promote a tool you also have serious concerns about?

That's the dilemma. I don't think enough people in the AI space talk about it honestly.

## The Gap Is Real, and It's Not What You Think

In the United States, 50% of men use popular AI tools compared to just 37% of women. That gap holds even within the same occupations. Women are [16 percentage points less likely](https://www.artiba.org/blog/how-women-ai-leaders-turn-risk-awareness-into-technical-excellence) to incorporate AI into their work tasks.

![Women and AI Adoption Gap](https://www.artiba.org/Content/Images/how-women-ai-leaders-turn-risk-awareness-into-technical-excellence.jpg)
__Image from [Artiba](https://www.artiba.org/blog/how-women-ai-leaders-turn-risk-awareness-into-technical-excellence)__

This is often framed as a problem to fix. Women aren't adopting AI fast enough. Women are being left behind.

But read the detail. Women cite privacy concerns as a primary deterrent. They worry more about AI hallucinations, inherent biases, and job displacement. AI chatbots have been documented recommending lower salaries for women than for men with identical profiles, perpetuating wage gaps that already exist in the real world.

Women aren't slow. We're informed. And that caution makes us better practitioners of AI, when we do choose to use it.

## My Approach: Intentional AI

I don't avoid AI. I use it constantly, across my work for ragTech, for content, for code, for automations. But every single use is a deliberate choice, not a reflex. I call this intentional AI: weighing the scale of impact each use has against the known costs, and saying no when the math doesn't hold.

Here's what that looks like in practice.

### I have never used image or video generation.
![AI-Generated Art Example](https://undetectable.ai/blog/wp-content/uploads/2025/03/AI-generated-art-using-Stable-Diffusion-1024x788.avif)
__Image from [Undetectable.ai](https://undetectable.ai/blog/how-does-ai-image-generation-work/)__

Except for the early days when I didn't realize the AI filters on Tiktok were, well, AI - I have never used image or video generation since. Even as someone who posts visual content every single day across social media, a podcast, and a tech brand. Instead I find lightweight alternatives: SVG and HTML code to generate graphics, code-generated illustrations. Our children's digital literacy initiative, [futurenet.ragtechdev.com](https://futurenet.ragtechdev.com/), uses entirely code-generated, doodle-like illustrations. This sidesteps the ethical problem of image generation drawing on artists' work without royalty, and it's more resource-efficient too.

To put numbers on that: here is the SVG code for a simple cartoon frog, the kind of graphic I'd generate instead of prompting an image model.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <ellipse cx="100" cy="130" rx="60" ry="45" fill="#4CAF50"/>
  <circle cx="100" cy="85" r="40" fill="#4CAF50"/>
  <circle cx="82" cy="70" r="12" fill="#fff"/>
  <circle cx="118" cy="70" r="12" fill="#fff"/>
  <circle cx="84" cy="70" r="7" fill="#222"/>
  <circle cx="120" cy="70" r="7" fill="#222"/>
  <path d="M82 100 Q100 115 118 100" stroke="#222" stroke-width="3" fill="none"/>
  <path d="M50 140 Q30 160 25 175" stroke="#388E3C" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M150 140 Q170 160 175 175" stroke="#388E3C" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M60 165 Q35 180 20 185" stroke="#388E3C" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M140 165 Q165 180 180 185" stroke="#388E3C" stroke-width="8" fill="none" stroke-linecap="round"/>
  <circle cx="93" cy="88" r="3" fill="#2E7D32"/>
  <circle cx="107" cy="88" r="3" fill="#2E7D32"/>
</svg>
```
> And here's the frog graphic that was generated from that code:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <ellipse cx="100" cy="130" rx="60" ry="45" fill="#4CAF50"/>
  <circle cx="100" cy="85" r="40" fill="#4CAF50"/>
  <circle cx="82" cy="70" r="12" fill="#fff"/>
  <circle cx="118" cy="70" r="12" fill="#fff"/>
  <circle cx="84" cy="70" r="7" fill="#222"/>
  <circle cx="120" cy="70" r="7" fill="#222"/>
  <path d="M82 100 Q100 115 118 100" stroke="#222" stroke-width="3" fill="none"/>
  <path d="M50 140 Q30 160 25 175" stroke="#388E3C" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M150 140 Q170 160 175 175" stroke="#388E3C" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M60 165 Q35 180 20 185" stroke="#388E3C" stroke-width="8" fill="none" stroke-linecap="round"/>
  <path d="M140 165 Q165 180 180 185" stroke="#388E3C" stroke-width="8" fill="none" stroke-linecap="round"/>
  <circle cx="93" cy="88" r="3" fill="#2E7D32"/>
  <circle cx="107" cy="88" r="3" fill="#2E7D32"/>
</svg>

Granted, the frog still need some tweaking to get it to look like a frog. But this was a first attempt at generating a frog using SVG code. Given the computational cost comparison, I can still prompt my AI assistant to tweak it **17 times more** for the compute and energy usage to be equivalent to generating a single image of a frog for the first time. 

That code is **~992 bytes (~1KB)**. It renders at any resolution without quality loss, can be edited as plain text, and is version-controllable. Using the OpenAI cl100k tokenizer, generating it costs approximately **~300 tokens** of LLM output.

Now compare: asking DALL-E 3 to generate "a simple cartoon frog" produces a PNG that typically lands at **200KB to 500KB**, roughly 200 to 500 times larger, at a fixed resolution. The model runs approximately 50 denoising steps through a multi-billion parameter network to produce it.

The difference shows up in electricity. A 300-token SVG generation uses roughly **0.0003 kWh** (based on [Patterson et al. 2022's inference estimates of ~0.001 kWh per 1,000 tokens](https://arxiv.org/abs/2204.05149)). A single AI image generation uses approximately **0.003 to 0.01 kWh** depending on the model, around **10 to 33 times more**. The IEA's 2024 energy report puts a representative cloud image generation at ~0.005 kWh, which is about **17 times** the cost of the SVG equivalent.

Water compounds the gap. [Li et al.'s 2023 paper "Making AI Less Thirsty"](https://arxiv.org/abs/2304.03271) measured data center cooling at roughly 1 liter of freshwater per kWh on average. By that measure: the SVG costs around **0.3mL of water**. The AI image costs around **5mL**, about 17 times more. At a thousand graphics a year, that's 300mL (a glass of water) versus 5 liters. Individually trivial. DALL-E was processing millions of requests per day at peak. The aggregate is not trivial.

### Everything I do, I do in code.
![A blog post written in markdown code](https://developerbacon.com/_next/image?url=%2Fstatic%2Farticles%2Fmarkdown-getting-started.jpg&w=828&q=75)
__A blog post written in markdown code. Image from [Developer Bacon](https://developerbacon.com/articles/getting-started-with-markdown)__

I write my posts in code, my workflows and plans live in code repositories. I call this "business as code". The upside beyond ethics: context is never wasted, I never spend AI compute translating formats, and everything is version-controlled. And because I default to code, I lean on AI where it genuinely excels: systematic, explicit, deterministic tasks, not open-ended creative generation.

### I never generate the same thing twice.
![Don't Repeat Yourself](https://symflower.com/en/company/blog/2022/programming-principle-dry/images/header.svg)
__"Don't Repeat Yourself (DRY)" is a Programming Principle. Image from [Symflower](https://symflower.com/en/company/blog/2022/programming-principle-dry/)__

If I find myself asking AI to do the same task repeatedly, I take that as a signal to build a system for it instead. I co-wrote a script with AI that automatically converts our blog posts into newsletter format. Now I run it once per post and never think about it again. Repeated AI tasks are engineering problems waiting to be solved.

### I don't use agents. 
![Meta Security Researcher's AI Agent Accidentally Deleted Her Emails](https://i.pcmag.com/imagery/articles/00pMNQfjPbV1VvU2b2mrS58-1.fit_lim.size_1600x900.v1771943108.jpg)
__Meta Security Researcher's AI Agent Accidentally Deleted Her Emails. Image from [PCMag](https://www.pcmag.com/news/meta-security-researchers-openclaw-ai-agent-accidentally-deleted-her-emails)__

Because my workflows are codified, I can write specific automations directly in my codebase: email automation, content generation, content repurposing. I prefer defining the rules through code so I never lose control or face the problem of an agent interpreting my intent incorrectly. There was a case recently where [an AI agent deleted emails from a senior researcher's inbox because it misread the instructions](https://www.businessinsider.com/meta-ai-alignment-director-openclaw-email-deletion-2026-2?op=1). That's a real cost.

### All my thinking is my own. 
When I write, every point, every argument, every opinion started in my head. I do my own research using traditional search engines, read through articles myself, and verify information based on my own judgment. AI cleans up my language and sharpens my prose. The line I draw: if it's my work, AI can help me do it better. It doesn't do it for me.

### Code is the least unethical use case.
Code is trained largely on open-source material that developers already intended for public use. It's explicit, systematic. There's no room for AI to make artistic or tonal choices on my behalf. That's why I use code as a native format for almost everything: diagrams in PlantUML or Mermaid, reports and presentations as HTML, pitch decks as websites rather than PDFs. Less data transfer, less AI compute, and the output is mine.

## Women Are Already Leading Ethical AI
Globally, women make up about [22% of AI professionals](https://www.unesco.org/reports/science/2021/en/women-digital-revolution), according to UNESCO. But look at who is doing the ethical work, and we're everywhere.

![Fei-Fei Li](https://profiles.stanford.edu/proxy/api/cap/profiles/15052/resources/profilephoto/350x350.1550534393295.jpg)
__Fei-Fei Li. Image from [Stanford University](https://profiles.stanford.edu/fei-fei-li)__

**[Fei-Fei Li](https://www.artiba.org/blog/how-women-ai-leaders-turn-risk-awareness-into-technical-excellence)** founded AI4ALL to make AI education inclusive and accessible for underrepresented groups. She has said: "I believe in human-centered AI to benefit people in positive and benevolent ways. It is deeply against my principles to work on any project that I believe weaponizes AI."

![](https://static.wixstatic.com/media/614b8d_3514177d2c954a6198cdff77ba774192~mv2.png/v1/fill/w_740,h_387,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/614b8d_3514177d2c954a6198cdff77ba774192~mv2.png)
__Joy Buolamwini. Image from [Sedna Consulting Group](https://www.sednacg.com/post/influential-women-in-ai-what-is-joy-buolamwini-known-for)__

**[Joy Buolamwini](https://www.artiba.org/blog/how-women-ai-leaders-turn-risk-awareness-into-technical-excellence)** founded the Algorithmic Justice League after her 2017 Gender Shades project at MIT revealed intersectional biases in facial recognition systems, biases that hit women of color hardest.

![Timnit Gebru](https://www.dair-institute.org/_next/image/?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fwc2kmxvk%2Frebrand%2F3fbdf191dc85485c6ceb76bc234976a1186a023c-4771x4480.jpg&w=3840&q=75)
__Timnit Gebru. Image from [DAIR Institute](https://www.dair-institute.org/team/timnit-gebru/)__

**[Timnit Gebru](https://www.dair-institute.org/team/timnit-gebru/)** co-led Google's Ethical AI team until she was fired for co-authoring a paper on the risks of large language models. She co-founded Black in AI and continues her research through the DAIR Institute.

![Frances Haugen](https://images.squarespace-cdn.com/content/v1/61592b117fafdc4f5466935b/1633291268876-X10FD721UAHWS34IIQZ0/frances_headshot.jpg?format=1000w)
__Frances Haugen. Image from [Frances Haugen's website](https://www.franceshaugen.com/)__

**[Frances Haugen](https://www.franceshaugen.com/)** left Facebook and, at great personal risk, became the whistleblower behind "The Facebook Files", exposing how Meta consistently prioritized profit over public safety.

![Kate Crawford](https://images.squarespace-cdn.com/content/v1/655cb99992574744b5a625e4/f960adf2-174d-4c49-aa2c-abdb49983c2a/katephoto_cath_muscat_scaled.png?format=1000w)
__Kate Crawford. Image from [Kate Crawford's website](https://katecrawford.net/)__

**[Kate Crawford](https://businesswomen.com/blog/women-in-ai-you-should-know/)**, co-founder of the AI Now Institute at NYU, wrote "Atlas of AI", an award-winning examination of the hidden labor, environmental, and political costs of AI systems. She has spent her career demanding transparency and accountability from the industry.

![Karen Hao](https://time.com/redesign/_next/image/?url=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2025%2F08%2FKaren-Hao-copy.jpg%3Fquality%3D85%26w%3D1200&w=1080&q=75)
__Karen Hao. Image from [Time](https://time.com/collections/time100-ai-2025/7305808/karen-hao/)__

**[Karen Hao](https://karendhao.com/)**, AI expert and investigative journalist who author of "Empire of AI", an account of the history of OpenAI and its culture of secrecy and devotion to the promise of artificial general intelligence.

These women didn't just raise concerns in private. They built institutions, published research, gave up stable jobs, and took personal risks to make AI more accountable. They're playing a big part of doing the important work happening in the field.

## Women Are Holding the Line in Big Tech
Within major tech companies, women are disproportionately in the roles that push for responsibility. Google has a woman leading Responsible AI Research in [Marian Croak](https://theorg.com/org/google/teams/leadership-team-1), a woman as Chief Sustainability Officer in [Kate Brandt](https://www.linkedin.com/in/katebrandt/), and Google's first ever Chief Decision Scientist was a woman, [Cassie Kozyrkov](https://www.kozyr.com/). [Daniela Amodei](https://weeklysiliconvalley.com/daniela-amodeis-journey-in-co-founding-anthropic/) is President and co-founder of Anthropic, one of the leading AI safety companies in the world. At Amazon, Apple, Dell, Salesforce, Tesla, and Verizon, women hold or have recently held the chief sustainability and chief impact roles.

Women currently hold [63% of executive sustainability roles](https://www.plastiks.io/blog/women-in-sustainability-statistics) in the corporate world. We are not absent from power. We are disproportionately in the rooms where the hard conversations are happening.

## Women Build AI for People, Not Just Profit
[Rana el Kaliouby](https://www.artiba.org/blog/how-women-ai-leaders-turn-risk-awareness-into-technical-excellence) co-founded Affectiva to build emotion AI for mental health applications, with explicit ethical guidelines around consent and privacy. [Daniela Rus](https://www.artiba.org/blog/how-women-ai-leaders-turn-risk-awareness-into-technical-excellence) leads MIT's Computer Science and AI Laboratory, advancing soft robotics for disaster response, and creates environments where technical skills and ethical frameworks are taught together. [Daphne Koller](https://businesswomen.com/blog/women-in-ai-you-should-know/) co-founded Coursera, giving over 100 million learners access to education, and later founded Insitro to use AI for drug discovery.

The throughline across all of these: building AI that solves real problems for real people, not just problems that are profitable to solve.

## Where This Leaves Me
Research suggests women are [naturally community-centered](https://news.northeastern.edu/2025/05/16/social-enterprise-funding-women-research/): when we adopt tools and practices, we tend to think about how they lift the people around us, not just ourselves. That orientation is exactly what AI needs more of right now.

The answer isn't for women to avoid AI out of caution. The answer is for more of us to enter the space and bring that community lens with us. To use AI deliberately, to hold it accountable, and to build things with it that actually make people's lives better.

The dilemma I opened with, championing AI while confronting its costs, doesn't have to be a contradiction. Women have been navigating exactly that tension at the highest levels of the field for years. We just don't always get credit for it.

I want AI to be a tool that genuinely empowers women without taking from others to do it. Getting there requires people who are willing to sit in the uncomfortable space where both of those things are true at once.

If you were at the talk yesterday, thank you. If you weren't, I hope this gives you a sense of what we covered. I'd love to hear where you land on this.

<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/NF6rMZLRwhY"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>

> Watch our podcast episode on Women Leadership in Tech!

## On Natasha
![Natasha Ann Lum](https://media.licdn.com/dms/image/v2/D5603AQFoBpQziucl4Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718228224952?e=1775088000&v=beta&t=0ZZgNRSVOcU6p4MZ4z_J65egarw32tBwY7dM7jQszvA)
__Natasha Ann Lum. Image from [LinkedIn](https://www.linkedin.com/in/natashaannlum/)__

Natasha Ann Lum is a software engineer and co-host of ragTech, a Singapore-based tech podcast and media brand on a mission to simplify technology and make it accessible, fun, and engaging for everyone. Through podcast, YouTube, Instagram, and TikTok, Natasha and her co-hosts Saloni Kaur and Victoria Lo cover AI, software, startups, and real life in tech with honesty and without the jargon. ragTech also runs [FutureNet](https://futurenet.ragtechdev.com/), a research initiative exploring the digital landscape for children and adolescents, with a focus on building safe and meaningful digital spaces for the next generation.

Beyond the podcast, Natasha serves as Partnerships Lead at [Women Devs SG](https://womendevssg.netlify.app/), a community supporting women in software development in Singapore. She is an active speaker on the local and regional tech conference circuit, with past talks spanning AI, ethics, and sustainable tech. She spoke at Green IO Singapore, the country's first tech sustainability conference, and will be returning as emcee for the April 2026 edition. Across her social media platforms, she creates content that makes technology approachable and engaging for both technical and non-technical audiences.

---

ragTech is a podcast by Natasha Ann Lum, Saloni Kaur, and Victoria Lo where real people talk about real life in tech. Our mission is to simplify technology and make it accessible to everyone. We believe that tech shouldn't be intimidating, it should be fun, engaging, and easy to understand!

✨ragTech Spotify: [https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d](https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d)

✨ragTech YouTube: [https://www.youtube.com/@ragTechDev](https://www.youtube.com/@ragTechDev)

✨Instagram: [https://instagram.com/ragtechdev](https://instagram.com/ragtechdev)

✨Other Links: [https://linktr.ee/ragtechdev](https://linktr.ee/ragtechdev)