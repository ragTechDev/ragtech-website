# 20-Minute Talk Script: Women in AI: The AI Collective Singapore
**Event:** AI Collective Singapore, International Women's Day
**Date:** 13 March 2026
**Speaker:** Natasha Ann Lum, ragTech
**Target length:** ~20 minutes (~2,600 words at 130 words/minute)

---

## OPENING (2 min)

Hi everyone. Thank you so much for having me. I'm Natasha, I'm a software engineer and I co-run a tech podcast called ragTech with two other women, where we talk about real life in tech.

When I was asked to speak today on the topic of "Women in AI", my first instinct was to write a celebration. A highlight reel of amazing women doing incredible things in the field.

And I will get to that. Because there are genuinely incredible women doing incredible things.

But I couldn't start there. Because there's something I needed to say first.

I have a dilemma.

As a woman in tech who builds with AI every single day, I feel pulled in two directions at once. On one side: I want to champion AI as a tool that empowers women. It levels the playing field. It gives individuals the capacity of entire teams. It's a genuine force multiplier.

On the other side: I can't look away from what AI costs. The artists whose work was scraped without consent to train image models. The biases baked into systems that affect women and minorities disproportionately. The jobs being quietly displaced, often the jobs held by the people who can least afford it. The environmental cost of running these models at scale.

How do you promote a tool you also have serious concerns about?

That's my dilemma. And I think it's a dilemma a lot of women in tech share but don't always say out loud. So today I want to say it out loud, and then share what I've landed on as my answer.

---

## PART 1: THE NUMBERS TELL A DIFFERENT STORY THAN YOU THINK (3 min)

Let me start with a stat.

In the United States, surveys show that 50% of men use popular AI tools. Only 37% of women do. And that gap holds even when you look at the same occupations. Women are 16 percentage points less likely to incorporate AI into their work tasks.

The way this usually gets reported: women are being left behind. Women need to catch up.

I want to push back on that framing.

When you look at *why* women use AI less, the picture changes completely. Women cite privacy concerns as a primary deterrent. They worry more about hallucinations, about inherent biases, about job displacement. They are more skeptical and more cautious.

Now, is that a problem? Or is that a reasonable response to a technology that has documented issues?

AI chatbots have been shown to recommend lower salaries for women than for men with identical profiles. Facial recognition systems have been shown to misidentify women of color at significantly higher rates than white men. These aren't theoretical risks. They're real, documented harms.

Women aren't being left behind by AI. Women are being more careful about a technology that has already shown it can harm us. And I'd argue that makes us better practitioners of AI, when we do choose to use it.

---

## PART 2: MY ANSWER, INTENTIONAL AI (6 min)

So what is my answer to the dilemma?

I use AI. I use it a lot. Across my work for ragTech, for coding, for content, for building automations. But every single time I use it, it's a deliberate choice. Not a reflex. Not a default. A conscious decision to use this particular tool for this particular task, because I've weighed the benefit against the cost and decided it's worth it.

I call this intentional AI. And I want to walk you through what that actually looks like in practice, because I think talking abstractly about "using AI responsibly" doesn't help anyone.

**Point one: I have never used image or video generation.**

Not once. And I post visual content every single day. ragTech is across Instagram, TikTok, YouTube, we have a podcast, a blog. Visual content is central to what we do.

But I've never used image or video generation to create it.

Instead, I find alternatives. SVG code. HTML code. I generate graphics through code rather than AI image models. One of our side projects, futurenet.ragtechdev.com, is a children's digital literacy initiative. Every single illustration on that site, all those doodle-like drawings, are code-generated SVGs.

Why does this matter? Image generation models are trained on the work of artists who did not consent and are not compensated. By using image generation, I am benefiting from that extraction. I've decided I don't want to do that when there are alternatives available.

It's also, frankly, more lightweight. A 2KB SVG file versus a 2MB generated image. Less data transfer, less server cost, less environmental impact.

**Point two: I default everything to code.**

My posts are written in code. My workflows live in code repositories. My planning documents, my automations, my pitch decks, they're all code or code-generated websites rather than Word docs or PDFs.

I call this "business as code". And beyond the ethical dimension, it's just a better way to work. Context is never wasted. I never have to spend AI compute converting a Word doc into something usable. Everything is version-controlled and searchable.

More importantly: code is the least unethical use case for AI. Code is trained largely on open-source material that developers already intended for public use. It's explicit. It's systematic. When AI generates code, there's no artistic judgment happening, no tonal choices being made on my behalf. It does exactly what I tell it to do. That's where AI genuinely thrives.

**Point three: I never generate the same thing twice.**

If I find myself asking AI to do the same task repeatedly, I treat that as a signal. This is an engineering problem, not a prompt problem. I should build a system for it.

For example: every blog post we publish on ragTech also gets sent as a newsletter. For a while I was using AI to convert blog post format into email format each time. Then I realized: I'm doing the same thing over and over. So I wrote a script, with AI's help, that automates that conversion. Now I run it once per post and it's done. Permanent solution.

That's the engineering mindset applied to AI usage. Every repeated AI task is an opportunity to build something once and never do it manually again.

**Point four: I don't use agents.**

This one surprises people. Agents are the hot topic right now. Everyone is talking about agentic AI.

I don't use them. And it's because I've codified my workflows to the point where I don't need to.

When you define your rules in code, explicitly, you stay in control. Agents interpret your instructions. Code executes them. There's a meaningful difference.

There was a widely reported case recently where an AI agent deleted emails from a senior researcher's inbox because it interpreted the instructions in a way the user didn't intend. That's a real cost of giving an AI agent open-ended authority. I prefer to define the exact actions my automations can take, through code, so there's no room for misinterpretation.

**Point five: All my thinking is my own.**

When I write, every point, every opinion, every argument started in my own head. I do my own research. I use search engines, I read articles myself, I verify claims with my own judgment.

AI helps me clean up language and sharpen prose. It doesn't do my thinking.

The line I draw is this: if it's my work, AI can help me do it better. It doesn't replace the work itself. And I never use AI to generate content that isn't mine to begin with.

---

## PART 3: WOMEN ARE ALREADY LEADING ETHICAL AI (6 min)

Now I want to talk about the women who are doing this work at the highest level. Because I don't want to leave you with the impression that this is just a personal philosophy I've arrived at. Women have been at the forefront of responsible AI for years.

Let me tell you about a few of them.

**Fei-Fei Li.** One of the foremost AI researchers in the world. She has said: "I believe in human-centered AI to benefit people in positive and benevolent ways. It is deeply against my principles to work on any project that I believe weaponizes AI." She co-founded AI4ALL, a nonprofit dedicated to making AI education more inclusive and accessible for underrepresented groups. She's not just doing the technical work. She's building the pipeline of people who will shape what AI becomes.

**Joy Buolamwini.** In 2017, Joy was a researcher at MIT when she discovered that the facial recognition software used widely across industries misidentified her face significantly more often than the faces of white men. She called this the "coded gaze". She published the Gender Shades project, exposing intersectional biases in facial recognition systems across multiple major vendors. Then she founded the Algorithmic Justice League to challenge bias in decision-making software. Joy turned a personal experience of discrimination into a movement.

**Timnit Gebru.** Timnit was co-lead of Google's Ethical AI research team. She was fired in 2020 after co-authoring a paper titled "Stochastic Parrots" about the dangers of large language models. The paper raised concerns that are now considered foundational to responsible AI discourse. She co-founded Black in AI, an advocacy group pushing for more Black representation in AI research and development, and now leads the DAIR Institute, continuing her ethical AI research outside of big tech.

She paid a real professional price for her work. I think we should name that.

**Frances Haugen.** Frances was a Product Manager at Facebook's Civic Misinformation team. She became increasingly alarmed by the choices the company was making: consistently choosing engagement and profit over public safety. In 2021, she made the decision to blow the whistle. She leaked internal documents to the Wall Street Journal. The resulting reporting, "The Facebook Files", exposed how Facebook's own research showed it was causing harm, and that the company knew.

She did this at great personal risk. She is one of the clearest examples of someone in tech who saw something wrong, and chose accountability over comfort.

**Kate Crawford.** Kate is a Senior Principal Researcher at Microsoft Research and co-founder of the AI Now Institute at NYU. Her 2021 book "Atlas of AI" is one of the most important texts in the field. It exposes the hidden costs of AI systems: the labor exploitation in data labeling, the environmental impact of data centers, the political implications of AI-powered surveillance. Kate has spent her career forcing the industry to reckon with what it would rather not look at.

Here's what I want you to notice about all five of these women. They did not stay quiet. They built institutions. They published research that made powerful companies uncomfortable. They gave up stable jobs. They took personal risks.

That's not a side story to the AI narrative. That is the most critical work happening in this field right now.

Globally, women make up about 22% of AI professionals. But look at responsible AI, at ethics research, at governance and policy, and we punch well above our weight. Women currently hold 63% of executive sustainability roles in the corporate world. At Google, the heads of Responsible AI Research, Chief Sustainability, and the first Chief Decision Scientist are all women. Anthropic's President and co-founder is a woman. The list goes on.

We are not absent from power. We are disproportionately in the rooms where the hardest conversations are happening.

---

## PART 4: WHAT THIS MEANS FOR US, IN THIS ROOM (3 min)

So what does all of this add up to?

I think women have a natural orientation toward community. When we adopt a tool or a practice, we tend to think about how it affects the people around us, not just ourselves. We think about downstream impact. We ask "who does this leave out?" before we ask "how fast can we scale this?"

That orientation is exactly what AI needs more of right now.

The field is moving fast. Faster than regulation can keep up. Faster than most institutions can respond. In that environment, the people who are asking the hard questions matter enormously. And women have historically been asking those questions.

I'm not saying women are inherently more ethical. I'm saying: the way many of us have been socialized to think about our work, in terms of community, in terms of relationships, in terms of impact, that is a genuine asset in this particular moment in AI's development.

So my ask is not for women to avoid AI. My ask is for more women to enter this space and bring that lens with them. Use AI deliberately. Question it. Push for the uses that genuinely serve people. Push back against the uses that don't.

You don't have to choose between being a champion for AI and being a responsible practitioner of it. The women I've described today are doing both, constantly, often under significant pressure. That's the bar, and it's a bar worth reaching for.

---

## CLOSE (1 min)

I want to end with the dilemma I started with.

I still have it. I use AI every day and I still feel the weight of what it costs. I don't think that tension goes away. I think it's actually a healthy sign that you're paying attention.

But I've stopped treating it as a reason to opt out. I treat it as a responsibility to opt in, carefully, intentionally, and with my community in mind.

I want AI to be a tool that genuinely empowers women, without taking from others to do it. That world is possible. But it requires people who are willing to sit in the uncomfortable space where both of those things are true at once.

Thank you.

---
