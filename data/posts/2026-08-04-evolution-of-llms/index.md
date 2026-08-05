---
title: "The Evolution of LLMs: From GPT-2 to Kimi K3"
slug: "evolution-of-llms"
author:
  name: "Victoria Lo"
  profilePicture: "/assets/team/victoria.PNG"
publishedAt: "2026-08-04T12:00:00Z"
coverImage: "https://res.cloudinary.com/ddrceoirg/image/upload/f_auto,q_auto/v1785506497/victoria-blog/ai/evolution-of-llms/cover/xmwffwiaaimv8ft9iysm.jpg"
brief: "From GPT-2's 1.5B parameters to Kimi K3's hybrid memory architecture — a deep dive into 7 years of LLM evolution, and why the biggest breakthroughs had surprisingly little to do with making models bigger."
tags: ["AI", "machine learning", "LLM", "transformers", "Kimi K3", "AI research"]
status: "published"
topic:
  - "ragTech"
readTimeInMinutes: 23
canonical: "https://lo-victoria.com/evolution-of-llms"
newsletter:
  send: true
  sent: false
  topic:
    - "ragTech"
seo:
  metaDescription: "A deep dive into 7 years of LLM evolution, from GPT-2 to Kimi K3, and why the biggest breakthroughs were about memory architecture rather than parameter count."
  keywords: ["evolution of LLMs", "Kimi K3", "DeltaNet", "linear attention", "KV cache", "mixture of experts", "transformer architecture", "large language models"]
instagramEmbeds:
tiktokEmbeds:
---

> This article was originally published on [lo-victoria.com](https://lo-victoria.com/evolution-of-llms).

Welcome back to another Articles by Victoria, the place where I randomly write things I'm curious about.

Lately, I've been spending quite a bit of time reading AI research papers, especially those describing the latest language models. Every few months, there's another announcement claiming a model is bigger, faster, or better than the one before it. The headlines usually revolve around parameter counts, benchmark scores, context windows, or how many GPUs were used during training.

It's honestly difficult not to get swept up in the numbers. As someone working in tech, the pressure to stay up-to-date on what the latest models can offer becomes somewhat of a rat race for knowledge. That's why I'm writing this article.

Back in 2019, GPT-2 had 1.5 billion parameters. GPT-3 jumped to 175 billion. Then came **Mixture of Experts** models with hundreds of billions, or even trillions, of total parameters. More recently, I found myself reading about Kimi K3, a model whose architecture looked nothing like the Transformers I first learned about years ago.

Some of the biggest breakthroughs in modern AI had surprisingly little to do with making models physically larger. Instead, they were about solving a much more fundamental problem.

> How do you build a system that can remember what matters without drowning in everything it has ever seen?

I started seeing the evolution of LLMs as a series of increasingly clever attempts to manage memory because "bigger" isn't always better.

## Bigger Isn't Always Better

Imagine you're running a company with just five employees.

Everyone knows what everyone else is doing. Communication is effortless. If someone needs a document, they simply ask the colleague sitting next to them. Meetings are quick because everyone can fit around the same table.

Now imagine hiring ten thousand people overnight. You now have one of the largest companies in the world. But now, you also have an organizational nightmare.

Employees spend half their day searching for information. Teams accidentally duplicate work because nobody knows another department already solved the problem. Decisions that once took five minutes now require six meetings and three approval chains. The company became bigger but it didn't automatically become smarter.

That realization reminds me a lot of modern AI.

From the outside, it's tempting to believe intelligence scales linearly. Just keep making the model larger and everything magically improves, but well, reality is much messier.

Every increase in size introduces entirely new engineering problems that didn't exist before. More parameters mean more memory to move around. Longer conversations mean more information to keep track of. More capabilities mean more opportunities for bottlenecks to appear.

At some point, simply adding more hardware stops being enough. You have to redesign the system itself.

That's exactly what happened over the last 7 years when we explore the evolution of these LLMs.

## The Original Transformer

It was honestly brilliant but also surprisingly wasteful.

To understand why, we first need to understand something that many people don't realize about LLMs (large language models). They don't actually read a sentence the way we do.

When you read this paragraph, your brain processes the entire idea almost simultaneously. You recognize patterns, infer meaning, connect concepts, and build an overall understanding of what I'm trying to say.

A language model doesn't experience language like that. Instead, it predicts one token at a time. And what is a token? A token isn't always a full word. Sometimes it's part of a word, punctuation, or a common phrase. But the basic idea remains the same.

![Diagram of how a language model predicts the next token](https://miro.medium.com/1*XAb4MS1zYKPcO_r-G_fUzQ.png)

Every time the model generates the next token, it asks itself a single question.

> Given everything I've seen so far, what's the most likely thing to come next?

Then it answers and repeats the entire process again.

If you've ever watched someone write a sentence letter by letter on an old typewriter, it's surprisingly similar. Every new character depends on everything that came before it. And back in 2021, this design worked remarkably well. Until conversations became long.

## The Writer With the Terrible Memory

While reading about GPT-2, I found an analogy that helped everything click in my head.

Imagine a writer working on a novel. Every time they want to write the next word, they refuse to rely on memory. Instead, they pick up the entire manuscript and reread everything they've written from page one.

If the novel currently contains ten words, that's perfectly manageable. But now imagine they've written a thousand-page fantasy novel. To write one additional word, they insist on rereading the previous thousand pages first. Then they write exactly one word and repeat the whole process again.

Haha it sounds absurd for us as humans to work like this. Yet that's surprisingly close to what early decoder-only Transformers were doing internally.

Every new token required calculating relationships across everything that came before it. Mathematically, this process is called **self-attention**, and it was one of the innovations that made Transformers revolutionary. Every token could "look at" every other earlier token and decide which ones were important. I read this [Substack](https://darkyboy.substack.com/p/why-is-it-called-self-attention) that dived deep into how attention mechanisms work. It's explained so simply, highly recommend read!

![Illustration of the self-attention mechanism](https://media.geeksforgeeks.org/wp-content/uploads/20250506114140815865/frame_3053.webp)

TLDR: Self-attention gave models an incredible ability to understand context. But it also meant something unfortunate.

The longer the conversation became, the more work every new token required. Eventually, the models spend far more time rereading than actually writing. That's exactly the bottleneck researchers started running into.

## The First Clever Fix

Naturally, engineers asked a simple question. "If we've already calculated all of this once... why are we calculating it again?"

That question eventually led to something called the **Key-Value Cache**, often shortened to **KV Cache**. The name sounds intimidating, but the idea is actually beautifully simple.

Let's go back to our writer analogy. Instead of rereading the entire novel every single time, imagine the writer carries a notebook. As they finish each paragraph, they jot down a concise summary of its meaning.

Now, when it's time to write the next sentence, they don't need to revisit their page of the manuscript. They simply consult their notebook. The notebook isn't the novel itself but a collection of useful reminders, important points, nuances, etc. So the writer still remembers the important context without repeating all the work.

That's essentially what KV Cache does. Instead of recalculating previous attention computations from scratch every time the model generates a new token, it stores useful intermediate results and reuses them later. Suddenly, generation becomes dramatically faster.

For a while, this felt like the perfect solution. Researchers had successfully removed one of the biggest inefficiencies in early language models. With that, is the problem solved? Well... not yet.

## When Memory Becomes the Bottleneck

This was the point where I realized something interesting. In my field of work, sometimes solving one engineering problem simply moves the bottleneck somewhere else.

Back to our writer analogy. Yes sure, the notebook was a fantastic idea. But this means that every page they wrote in the novel required another summary. Then another. And another, and so on. So you can imagine: Eventually, the tiny notebook became multiple notebooks. Then binders then shelves full of binders.

Instead of spending all their time rereading the novel, the writer now spent all their time flipping through an ever-growing archive of notes. They had replaced one inefficiency with another.

Computers experience something remarkably similar. Modern GPUs are incredibly good at performing calculations. They're astonishingly fast but calculations aren't always the slowest part. Sometimes the real delay comes from moving information around.

Imagine an incredibly talented chef working in a kitchen where every ingredient is stored in a warehouse three blocks away. The chef can cook a gourmet meal in minutes. Unfortunately, they spend most of the day waiting for someone to bring them onions, tomatoes, flour, butter, and spices.

The problem isn't the cooking but the transportation of ingredients. This is known as a **memory bandwidth bottleneck**.

As conversations become longer, the KV Cache keeps growing. Every new token requires reading from this ever-expanding memory before computation can even begin. The processor isn't sitting idle because it's incapable of thinking. It's sitting idle because it's waiting for memory to arrive. And this was the moment I realized something that completely changed how I viewed AI progress.

For years, I assumed researchers were mostly focused on making models larger. We often see in the news how copmanies market their latest AI models. BIGGER. LARGER = BETTER. And to a non-technical person, this may sound reasonable. Back in 2023, when GPT-4 is launching, so many graphs comparing the parameters circulating in social media were convincing people that this model is significantly better than its predecessor because it's "bigger".

![Chart comparing parameter counts across GPT model generations](https://substackcdn.com/image/fetch/$s_!z23E!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5a13f42d-5a7f-44a4-a115-39775dbb62e7_1400x708.png)

However, the reality is that many of these models are optimizing a different battle. And that battle led to one of the boldest ideas in modern AI research.

## Trading a Growing Notebook for a Single Page

What if... instead of carrying around an infinitely growing notebook, you forced the model to work with a single sheet of paper?

At first, this sounds impossible. If you throw away past information, surely the model would forget the conversation. After all, humans rely on memory all the time. If I asked you about something I mentioned five minutes ago and you'd completely forgotten it, our conversation wouldn't be very productive.

Researchers started wondering whether memory could instead behave more like a summary.

Think about finishing a meeting at work. You probably don't remember every sentence every person said. Instead, you walk away remembering the important decisions, the action items, and maybe one funny moment someone mentioned. Somehow, your brain compresses an hour-long discussion into just a handful of meaningful ideas.

Could an AI do something similar?

That question eventually led researchers toward an entirely different family of architectures known as **Linear Attention**. Instead of remembering every previous token individually, we continuously compressed everything we've seen into a fixed-size memory.

Every time the writer finishes another sentence, they don't add another page. Instead, they update the information already written on that one sheet. The paper never gets larger. No matter whether the conversation lasts one minute or ten hours, the amount of memory stays exactly the same.

From an engineering perspective, this was incredibly attractive. O(1) memory complexity with infinite context.

![Comparison of memory growth between standard attention and linear attention](https://pbs.twimg.com/media/G6rS2EZX0AA0vj_?format=jpg)

Memory usage no longer grew together with the conversation. Computation became much more predictable. GPUs no longer needed to constantly fetch larger and larger caches from memory.

### The Hidden Cost of Compression

Of course, there was a catch.

Imagine writing on that same piece of paper for an entire year.

Every new note has to squeeze into the existing space somehow. Eventually you start writing over previous notes. Important reminders get shortened. Small details disappear. At some point, the page becomes less of a notebook and more of a blurry collection of overlapping ideas.

That's essentially what happened with early Linear Attention models.

The compression worked, but it was often too aggressive. Instead of remembering individual facts, the model stored an increasingly compressed representation of everything it had ever seen. The longer the conversation became, the harder it was to retrieve very specific information from much earlier in the context.

## A Smarter Way to "Forget"

By 2023, researchers began realizing something important.

The problem wasn't solving the compression of memories, but it was treating every memory equally.

Like when we clean our bedroom, we don't throw away everything we own before buying something new. We decide what still matters and what no longer serves a purpose. Old receipts go into the bin but important documents stay. Clothes we haven't worn in years might be donated and family photos definitely remain.

> Memory isn't just about storing information, it's about deciding what deserves to stay.

This idea is surprisingly similar to what's known as the **Delta Rule**, a concept that has existed in machine learning for decades. In simple terms, the Delta Rule says that instead of blindly storing every new piece of information, you first compare it with what you already know. If the new information doesn't change much, you leave the memory largely untouched. If it contradicts or improves your existing knowledge, you update just enough to reduce the difference, or the "delta", between what you know and what you should know. Think of it as continuously proofreading your notes instead of rewriting the entire notebook after every lecture.

This idea became the foundation behind **DeltaNet**, introduced in 2024 by researchers from MIT CSAIL, Soochow University, and the MIT-IBM Watson AI Lab. Rather than continuously adding new information into memory like earlier Linear Attention models, DeltaNet actively edits its internal memory using the Delta Rule. Before writing something new, it first looks at what's already stored, decides whether it should be updated, replaced, or preserved, and then makes only the necessary changes. This makes the memory much more stable while avoiding the "blurry notebook" problem that plagued earlier approaches.

I really like this analogy because it reminds me of editing an article, which is something I've been doing for 7 years now. You don't just keep appending new paragraphs to the end every time you have a better idea. You revisit what you've already written, remove parts that no longer work, refine the sections that still do, and gradually shape it into something stronger, without the article being infinitely long.

Coincidentally, GPT-2 came out in 2019 so the evolution of LLMs which this article started on is the same as the evolution of Articles by Victoria! Haha!

DeltaNet applies almost the same philosophy to memory. Instead of continuously piling information on top of itself, it actively edits what it already knows. It sounds like a simple improvement. In reality, it was a significant shift in how researchers thought about memory itself.

> If you'd like to dive deeper into how the Delta Rule works mathematically and how the researchers managed to parallelize DeltaNet efficiently on modern GPUs, I highly recommend Songlin Yang's excellent blog series, starting with [DeltaNet Explained (Part 1)](https://sustcsonglin.github.io/blog/2024/deltanet-1/). It's written by one of the researchers behind DeltaNet and does a fantastic job explaining both the intuition and the implementation.

## There Was Never Going to Be One Perfect Memory

By 2024, the AI industry had become incredibly competitive.

OpenAI was iterating rapidly on GPT models. Anthropic was pushing Claude's context window further and further. Meta had open-sourced Llama, sparking an explosion of community research. Startups like Mistral were proving that smaller, well-designed models could compete with giants many times their size.

Everyone seemed to be chasing the next breakthrough. But if you looked closely at the research papers coming out during this period, an interesting pattern emerged.

Nobody was claiming they'd finally "solved" memory. Instead, every architecture seemed to excel at one particular trade-off. Such as:

- Traditional Transformers were incredibly accurate because they could attend to every previous token, but they became increasingly expensive as conversations grew longer.
- Linear Attention was extremely efficient, but sometimes compressed information too aggressively.
- DeltaNet became much better at updating memory intelligently, but sequential updates still made hardware optimization more challenging than researchers would have liked.

It started to feel less like a competition to replace the Transformer and more like assembling a toolbox. I started to see the same patterns emerged when communicating with my clients.

> This is what I concluded: Different tools solved different problems.

And that's exactly the philosophy Kimi K3 embraces, according to its [blog post](https://www.kimi.com/blog/kimi-k3). Instead of betting everything on one clever architecture, it combines several ideas that researchers had spent years developing independently.

Rather than asking, "Which memory system is the best?", Kimi K3 asks a more practical question.

> What if we simply used the right memory system for the right job?

I really like this design philosophy because it's surprisingly human. If someone asks for your home address, you don't spend 10 minutes to reason about it. You retrieve it almost instantly because it's something you've memorized.

If someone asks what you discussed during yesterday's meeting, you might pause for a moment before recalling the highlights because you're trying to figure out what information is most relevant depending on who is asking you: sales, ops, compliance or product.

Our brains don't use one universal process for everything. It switches between different kinds of memory (long-term vs short-term) depending on the task. And more importantly, chooses the relevant memory to preserve depending on each context.

So at the time of reading their blog in July 2026, Kimi K3 works in a remarkably similar way.

## The Receptionists: Kimi Delta Attention

The first layer is called **Kimi Delta Attention (KDA)**.

If you've followed the story so far, the name should already sound familiar. It's essentially the evolution of the DeltaNet ideas we discussed earlier, further optimized for modern hardware and large-scale language models. These layers handle the fast-moving parts of a conversation.

Imagine walking into a large company.

The first people you meet are usually the receptionists. They don't archive every email the company has ever received or know the complete history of every project. Their job is to understand what's happening right now: Who are you meeting? Which room are you looking for? Has today's schedule changed?

KDA plays a similar role.

It continuously updates a compact working memory using the Delta Rule, deciding which information should stay, which should be replaced, and which has become irrelevant.

![Diagram of Kimi Delta Attention](https://res.cloudinary.com/ddrceoirg/image/upload/f_auto,q_auto/v1785503057/victoria-blog/ai/evolution-of-llms/pbzohwhywgsnxcjklvwa.png)

> [Image credit](https://pbs.twimg.com/media/G4_33cnaoAAu9zP.jpg)

Because this memory has a fixed size, it doesn't keep growing as conversations become longer. That makes it incredibly efficient compared to storing an ever-expanding KV Cache.

But there's still an obvious question. What happens when something important happened three hours ago?

Surely we don't want to erase that forever.

## The Company Archive

This is where Kimi K3 does something I found particularly elegant. Every few layers, instead of relying solely on Delta Attention, the model switches to something called **Multi-head Latent Attention (MLA).**

Earlier models often forced researchers into an uncomfortable choice: Either remember everything and pay a huge computational cost. Or compress everything and risk forgetting useful details.

MLA offers a middle ground.

Instead of storing the full attention information like a traditional Transformer, it stores a compressed latent representation that still preserves enough detail to reconstruct useful relationships later. The simplest way I see it is like a company archive.

Your receptionists don't keep every document on their desks. Whenever a project is completed, the important files are sent to a well-organized archive. Most employees never need to visit it.

But when someone suddenly asks,

_"What exactly did we promise this client six months ago?"_

the archive becomes invaluable.

That's essentially how MLA complements Delta Attention. Delta layers handle the **fast-moving present.** MLA preserves deeper historical context that would otherwise be lost. The result is a memory system that's both efficient and surprisingly resilient.

Reading about this immediately reminded me of the book **Thinking, Fast and Slow** by Daniel Kahneman. One of the central ideas in the book is that our brains operate using two different modes of thinking: a fast, intuitive system for quick decisions and a slower, more deliberate system for careful reasoning. Kimi K3 isn't literally implementing Kahneman's theory, but I couldn't help noticing the parallel as a fan of the book. Its Delta Attention feels like the "fast thinker," efficiently handling the flow of an ongoing conversation, while MLA acts more like the "slow thinker," digging into a richer store of context when deeper recall is required. Whether intentional or not, I find it fascinating that both humans and modern AI seem to arrive at a similar conclusion: trying to process everything the same way all the time simply isn't an efficient way to think.

Sorry, end of nerd rant.

## Specialists Instead of Generalists

Memory wasn't the only lesson the AI community learned over the past few years. Researchers also discovered something interesting about expertise.

Imagine asking a hospital receptionist to perform heart surgery. Or asking a surgeon to redesign the hospital's accounting software. Both are highly intelligent professionals yet none of them is the right expert for that particular job.

For years, LLMs activated almost every parameter for almost every token. Whether you asked about Shakespeare, quantum physics, JavaScript, or baking sourdough bread, almost the entire model woke up to process your request.

That's technically possible but from everything we learned about the evolution of LLMs, this is wildly inefficient.

This observation eventually led to one of the biggest architectural shifts in modern AI: **Mixture of Experts**, often shortened to **MoE** (not Ministry of Education).

Instead of one giant team trying to solve every problem, the model contains many specialized expert networks. When a token enters the model, a routing system quickly decides which experts are most relevant.

A coding question might activate programming "experts". A legal question might activate "experts" that have become particularly good at legal reasoning. A creative writing prompt might activate an entirely different subset.

The important detail is that **only a small fraction of the experts wake up for each token.**

This is known as **sparse activation**, and it's one of the reasons modern models can become dramatically larger without requiring dramatically more computation during inference.

I actually find this analogy amusing because it reminds me of organizing events at WomenDevsSG as a co-Director.

If every volunteer attended every meeting, every discussion, every planning session, we'd probably get very little done (and get so burnt out).

Instead, we have different Leads who naturally step in depending on their expertise (i.e. Software, AI, Data, Cybersecurity, etc.) Leads are experts in their own tech industry and will initiate and drive our WDS events organization planning. Everyone contributes where they're comfortable, and the organization becomes much more capable without requiring everyone to do everything all the time, all at once.

## Looking Back at 7 Years of Progress

When GPT-2 was released in 2019, it felt like the beginning of a new era. At the time, simply generating coherent paragraphs was impressive enough to make headlines. Fast forward to today, and we're discussing million-token context windows, hybrid memory architectures, sparse expert routing, and models capable of solving increasingly sophisticated reasoning tasks.

It's easy to look at this timeline and conclude that the biggest story was scale. After all, parameter counts exploded. GPU clusters became larger. Companies invested billions into training infrastructure. And I don't know about you but I see the "2.8 Trillion parameters" being everywhere on the news when Kimi K3 was out, like that was the most incredible thing about this model.

![Headline highlighting Kimi K3's parameter count](https://res.cloudinary.com/ddrceoirg/image/upload/f_auto,q_auto/v1785503648/victoria-blog/ai/evolution-of-llms/xnvkvvsegorrt0dz2i6g.png)

But after researching and reading a lot for this article, what I appreciated more were the quiet architectural innovations hidden deep inside research papers. Engineers figured out how to reduce memory bottlenecks, parallelize computations more efficiently, compress information without destroying context, and selectively retain the knowledge that mattered most. None of these ideas sound particularly exciting in a marketing announcement, yet together they fundamentally changed what modern language models are capable of.

That's probably one of my favourite things about computer science.

From the outside, progress sometimes looks like magic. But underneath that smooth experience are years of researchers obsessing over details that most users will never notice.

## It's Curiosity All the Way

Writing this article also reminded me why I enjoy learning about technology in the first place.

I'm not an AI researcher, and I certainly don't claim to understand every mathematical proof hidden inside these papers. Sometimes I spend an hour reading a paragraph before it finally clicks. Other times I have to read three different blog posts just to understand why one equation matters. But all this... is part of the fun.

I think it's easy to look at experts in the field and assume they have an almost magical understanding of everything. The reality is probably much more reassuring. Most of us are simply following our curiosity one question at a time. We understand one concept, which naturally leads to another question, then another, until eventually we look back and realize we've learned far more than we expected while simply following our curiosity through the evolution of an entire field.

Maybe that's the biggest takeaway for me.

The evolution of LLMs isn't simply the story of bigger computers or larger parameter counts. It's the story of thousands of researchers gradually discovering better ways to represent knowledge, manage memory, and make intelligent trade-offs. Every new architecture builds on the lessons of those before it, and every paper contributes one more piece to a puzzle that's still far from complete.

## Further Reading

If this article sparked your curiosity and you'd like to go deeper, here are some of the resources I found particularly helpful while researching this topic. They range from beginner-friendly explainers to the original papers written by the researchers themselves.

**If you're curious about self-attention and Transformers**

- **[Why is it called Self-Attention?](https://darkyboy.substack.com/p/why-is-it-called-self-attention)** by Darky Boy is one of the clearest intuitive explanations I've come across. It explains _why_ attention works before diving into the mathematics, making it a fantastic starting point if you're new to Transformer architectures.

**If you want to understand DeltaNet**

- [Songlin Yang's blog](https://sustcsonglin.github.io/) is, in my opinion, one of the best resources available. Since she is one of the researchers behind DeltaNet, the series gradually builds intuition before introducing the implementation details. If the original paper feels intimidating, I'd recommend starting here instead.

**If you want to explore Kimi K3**

- [Moonshot AI's engineering blog](https://www.kimi.com/blog/kimi-k3) provides a detailed overview of the motivations behind Kimi K3, the architectural decisions they made, and why they combined several existing ideas instead of replacing Transformers outright.

**If you enjoy reading the original research papers**

- [Parallelizing Linear Transformers with the Delta Rule over Sequence (DeltaNet) (2024)](https://arxiv.org/abs/2406.06484) - Paper that introduced DeltaNet and how Delta Rule can be parallelized on modern GPUs
- [Kimi Linear: An Expressive, Efficient Attention Architecture (2025)](https://arxiv.org/abs/2503.01868) - introduced Gated Delta Rule and Kimi Delta Attention
- [Mamba: Linear-Time Sequence Modeling with Selective State Spaces (2023)](https://arxiv.org/abs/2312.00752) - This paper introduced the Mamba architecture
- [Transformers are SSMs: Generalized Models and Efficient Algorithms Through Structured State Space Duality (Mamba-2) (2024)](https://arxiv.org/abs/2405.21060) - Mamba-2 unified Transformers and State Space Models
- The original [_Attention Is All You Need_](https://arxiv.org/abs/1706.03762) paper that introduced the Transformer architecture back in 2017
- [Kimi K3 Technical Report (2025)](https://arxiv.org/abs/2507.20534)

One of the things I appreciate about the AI research community is how much knowledge is shared openly. Many researchers don't just publish papers. They also write blog posts, record talks, create diagrams, and patiently explain difficult concepts in ways that make them accessible to the rest of us. As someone who enjoys learning by connecting ideas rather than memorizing equations, I genuinely appreciate the amount of effort the community puts into making these topics easier to understand. And honestly, I'm still in the midst of learning all these myself as well!

Thanks for reading! I'm curious to know your own thoughts and experiences on this topic. Feel free to connect, send me an email (my inbox is always open), or let me know in the comments. Cheers!

---

ragTech is a podcast by Natasha Ann Lum, Saloni Kaur, and Victoria Lo where real people talk about real life in tech. Our mission is to simplify technology and make it accessible to everyone. We believe that tech shouldn't be intimidating, it should be fun, engaging, and easy to understand!

✨ragTech Spotify: [https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d](https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d)

✨ragTech YouTube: [https://www.youtube.com/@ragTechDev](https://www.youtube.com/@ragTechDev)

✨Instagram: [https://instagram.com/ragtechdev](https://instagram.com/ragtechdev)

✨Other Links: [https://linktr.ee/ragtechdev](https://linktr.ee/ragtechdev)
