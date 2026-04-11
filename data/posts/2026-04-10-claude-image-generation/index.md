---
title: "Why I Stopped Using AI Image Generation"
slug: "claude-image-generation"
author:
  name: "Saloni Kaur"
  profilePicture: "/assets/team/saloni.PNG"
publishedAt: "2026-04-10"
coverImage: "/posts/2026-04-10-claude-image-generation/cover-image.png"
brief: "I haven't used AI image generation tools in over a year. Here's why: privacy, energy, and what Anthropic says about why Claude doesn't generate images at all."
tags: ["AI", "image generation", "privacy", "Claude", "Anthropic", "energy", "AI ethics", "responsible AI"]
status: "published"
topic:
  - "ragTech"
readTimeInMinutes: 5
newsletter:
  send: true
  sent: false
  topic:
    - "ragTech"
seo:
  metaDescription: "Why one tech podcaster stopped using AI image generation tools — covering privacy risks, energy consumption, and Anthropic's stance on why Claude refuses to generate images."
  keywords: ["AI image generation", "Claude no image generation", "Anthropic image policy", "AI privacy", "AI energy consumption", "AI deep fakes", "responsible AI", "Claude safety"]
instagramEmbeds:
tiktokEmbeds:
---

It's been well over a year since I last used an AI image generation tool. Not Midjourney, not DALL·E, not chatGPT.

And while that might sound like a dramatic stance to some, I want to walk you through why I made that choice, because it wasn't one decision, but a combination of things that added up. And interestingly, it turns out Anthropic, the company behind Claude (the AI I use most), has arrived at a very similar set of conclusions about why image generation is something they've deliberately kept out of Claude's capabilities.

# Why I Stopped Generating Images With AI

## Reason 1: Privacy

When you generate an image with an AI tool, you're not just typing a prompt into a blank void. You're interacting with a system that has been trained on images scraped from the internet (often without the explicit consent of the original creators). And when you submit a prompt, depending on the platform, that prompt (and sometimes the generated output) may be logged, stored, and used to further train or improve the model.

![Studio Ghibli AI art trend](https://miro.medium.com/v2/resize:fit:640/format:webp/1*SwyWIlX8jShYhMgo_U3r-g.png)
__Image from [LumenXo — The Hidden Dangers of AI Image Trends](https://medium.com/@inc.lumenxo/the-hidden-dangers-of-ai-image-trends-why-your-personal-photos-arent-safe-15daa2eafe45)__

A recent and very visible example: remember the [Studio Ghibli AI art trend](https://www.business-standard.com/india-news/studio-ghibli-ai-art-trend-a-privacy-nightmare-in-disguise-experts-warn-125040600343_1.html) that swept the internet in early 2025? Millions of people uploaded their own photos to get them rendered in that iconic animation style. It was adorable. But cybersecurity experts quickly flagged what most participants didn't realise — many of these platforms were collecting **biometric data**: facial structure, skin tone, expression patterns. The terms of service were often vague, with fine print granting platforms perpetual, royalty-free rights to use or modify your photos even after you deleted the app.

Think about what people use AI image generation for: portraits of themselves, images of their families, recreations of real places they've been, visual representations of ideas they haven't shared publicly yet. All of that data is potentially being captured and fed back into a system you have no visibility into. And unlike a text prompt, a photo of your face is biometric data. And it can be used to identify or impersonate you. [Unlike a leaked password, you can't change your face](https://medium.com/@inc.lumenxo/the-hidden-dangers-of-ai-image-trends-why-your-personal-photos-arent-safe-15daa2eafe45).

I still use Claude and other AI text tools regularly. I'm not anti-AI by any stretch. But there's a real difference between using a text tool for writing or thinking through problems, and uploading a photo of my face or someone I care about to a platform whose data practices I haven't fully read. Text prompts are one thing. Visual, biometric data is another and I didn't want mine, or anyone else's, feeding into a pipeline I don't know about.

The concern isn't just personal either. In February 2026, [61 data protection authorities across the world issued a joint statement](https://www.hunton.com/privacy-and-cybersecurity-law-blog/data-protection-authorities-globally-highlight-privacy-issues-in-ai-image-generation) specifically about AI image generation and the risks of systems generating realistic depictions of identifiable individuals without their consent. When 61 regulators from different countries feel the need to align on a joint statement about something most people treat as harmless fun, we should definitely be careful.

And even beyond personal data, there's the question of whose work these models were trained on. Artists who never consented to having their style replicated. Photographers whose images were scraped and used without credit or compensation. The very act of generating an image using these tools is entangled in a web of unresolved ethical questions around data ownership and consent.

For me, that was enough to ask: *Do I really need this?*

## Reason 2: Energy Consumption

The second reason is one that people don't talk about enough: **energy**.

Running an AI image generation model is computationally expensive. Unlike generating text, which is already energy-intensive, generating images requires significantly more GPU compute. Each image takes anywhere from seconds to minutes of sustained GPU activity, depending on the model and the resolution.

[MIT Technology Review published research](https://www.technologyreview.com/2023/12/01/1084189/making-an-image-with-generative-ai-uses-as-much-energy-as-charging-your-phone/) showing that generating a single AI image consumes roughly the same energy as fully charging your smartphone. One image. One phone charge. And that same research found that image generation is **1,450 times more energy-intensive** than text models. That's not a marginal difference, a staggering one. A single image can release anywhere from 40 to 800 grams of CO₂ depending on the model used.

That might sound trivial in isolation. But [MIT News estimates](https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117) that AI's annual carbon footprint could reach between 32.6 and 79.7 million tons of CO₂ and image generation is one of the most disproportionate contributors to that figure. Multiply one image's footprint across millions of daily generations, and the scale becomes hard to ignore.

![Explained: Generative AI’s environmental impact](https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202501/MIT-AI-Climate-01_0.jpg?itok=kXVLyp49)
__Image from [MIT News](https://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117)__

We talk a lot about our personal carbon footprints. We swap out plastic straws, we bring reusable bags. But we rarely stop to think about the energy cost of the digital tools we use every day. AI image generation is, quietly, one of the more energy-hungry habits in the modern tech user's toolkit.

Since cutting it out, I've become much more deliberate about where I spend compute. It's a small change, but it's one I can live without.

# And Then There's Claude

Here's the thing: when I started using Claude more heavily as my primary AI assistant, I noticed something. It doesn't generate images.

If you ask Claude to "draw a picture of a sunset over the ocean" or "generate an image of a futuristic city," it will tell you clearly, it can't do that. [As Claude's own support page confirms](https://support.claude.com/en/articles/9002504-can-claude-produce-images), this isn't a technical limitation Anthropic is racing to fix. It's a deliberate policy decision.

## Anthropic's Position on Image Generation

Anthropic has been transparent about why Claude does not generate images. Reading through their [voluntary commitments on transparency](https://www.anthropic.com/transparency/voluntary-commitments), the core concerns come down to three things:

### 1. Child Safety

AI image generation models, left unchecked, can be weaponised to create Child Sexual Abuse Material (CSAM). Even tools with guardrails have been bypassed by bad actors. The consequences of getting this wrong are catastrophic and irreversible — real harm to real children.

Anthropic has invested seriously here: they use hash-matching technology and novel classifiers to detect and report CSAM, and they partner with organisations like Thorn to strengthen those protections. But their position on image generation is essentially that the safest version is not building the capability at all until they can genuinely guarantee it won't be weaponised. The stakes are too high to accept imperfection.

### 2. Deepfakes

AI-generated images of real people, politicians, public figures, private individuals, can be produced at scale and used to spread misinformation, damage reputations, or manipulate public opinion. We've already seen the real-world consequences: fabricated images of world leaders, non-consensual intimate imagery, synthetic media used as tools of harassment and intimidation.

Anthropic doesn't want Claude to be part of that pipeline.

### 3. Broader Misuse

Beyond CSAM and deepfakes, image generation opens the door to generating fake evidence, creating misleading propaganda, and impersonating real people. These are documented patterns of abuse that have already emerged with existing image generation tools.

Anthropic's view is that the responsible path is not to race to ship image generation and manage the fallout later. It's to hold off until the safety challenges can be genuinely solved.

# Why this amazes me?

I find it genuinely refreshing to see a technology company take this kind of stance. In an industry where the default is "ship it and iterate," Anthropic has chosen to say: *not until we can do this responsibly.*

That aligns closely with why I personally stepped away from AI image generation tools. It's not that I think the technology has no value. It's that the current state of the ecosystem, the privacy trade-offs, the energy costs, the potential for misuse, doesn't pass my personal cost-benefit test.

# A Note on Awareness

I want to be clear that I'm not here to tell you what to do. If you use AI image generation tools and you've thought it through, that's your call to make.

But I do think a lot of people use these tools without fully understanding:

- That their prompts and uploaded photos may be logged, stored, and used for training
- That generating images has a real, non-trivial energy cost
- That the technology, in the wrong hands, can cause serious harm

This article is about raising that awareness. Because an informed choice is always better than an unconsidered one.

The next time you go to generate an AI image, just ask yourself: *Do I actually need this? And do I know what I'm giving away to get it?*

---

ragTech is a podcast by Natasha Ann Lum, Saloni Kaur, and Victoria Lo where real people talk about real life in tech. Our mission is to simplify technology and make it accessible to everyone. We believe that tech shouldn't be intimidating, it should be fun, engaging, and easy to understand!

✨ragTech Spotify: [https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d](https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d)

✨ragTech YouTube: [https://www.youtube.com/@ragTechDev](https://www.youtube.com/@ragTechDev)

✨Instagram: [https://instagram.com/ragtechdev](https://instagram.com/ragtechdev)

✨Other Links: [https://linktr.ee/ragtechdev](https://linktr.ee/ragtechdev)
