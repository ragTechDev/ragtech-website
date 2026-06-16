# Shortform Script — Agentic Software Engineering is NOT Vibecoding
**Platform:** TikTok / Instagram Reels
**Target length:** ~3 minutes
**Audience:** Layman tech enthusiasts to software engineers

---

## HOOK [0:00–0:10]

*[Talking head, casual — like you're picking up a conversation]*

Okay so I keep seeing vibecoding and agentic software engineering talked about like they're the same thing. And I get it, because they both use coding agents to write code. But in my humble opinion, they're really not.

---

## INTRO [0:10–0:25]

*[Still relaxed, not a formal intro — just continuing the thought]*

I'm Natasha, I host ragTech, and at work my job is literally helping software engineering teams bring coding agents into how they work. So this comes up for me a lot, and I've been wanting to talk about it.

---

## OTHER PEOPLE [0:25–0:58]

*[Conversational, like you just thought of the best way to explain it]*

The thing that stands out to me the most is just... other people.

When you're vibecoding, you're building for yourself. If you break something, that's on you, and honestly it's fine. But in a software engineering team, a bad change can break something real users depend on. Your teammates might be the ones debugging it at 2am. The coding agent doesn't really understand that, it doesn't have that context about who's affected. So that responsibility still sits with you as the engineer.

---

## NEW VS EXISTING [0:58–1:35]

*[Optional B-roll: codebase on screen, or stay on talking head]*

Another thing I notice is that vibecoding almost always starts from scratch. There's no existing codebase to worry about. You describe what you want and the agent just builds it.

But in a software engineering team, you're almost always working inside something that already exists, with years of decisions baked into it. And the agent needs to know about all of that before it touches anything, otherwise you get code that technically works but doesn't really fit the rest of what's there.

---

## THE FOCUS [1:35–2:20]

*[A bit more animated here, this is the part you find most interesting]*

And I think the focus is just... different.

Vibecoding is about getting something working fast, with as little friction as possible. Which, for a prototype or a side project, is great!

But agentic software engineering is more about building the infrastructure so that you can use these agents reliably, at a team level, across projects. And honestly, that sometimes means adding more friction, not less. More tests, more documentation, more checks in place.

Like at work, I build things called harnesses. I'll set up a hook that scans your code for secrets and environment variables before anything gets pushed to a shared repository. Coding agents don't naturally know not to write your API keys into the code. So I just make it so it can't happen.

---

## WRAP [2:20–2:42]

*[Relaxed, just wrapping up a thought — not a big conclusion]*

So I think the tools are the same, but the goals are pretty different. One is about moving fast, the other is about making sure things don't fall apart when more people are involved.

And knowing which one you're actually trying to do makes a big difference in how you set things up.

---

## CTA [2:42–3:00]

*[Light, friendly — like recommending something to a friend]*

I'm hoping to talk more about what agentic software engineering looks like, so if this is something you think about, we talk about this kind of stuff on ragTech all the time — honest conversations around tech, by software engineers. 

---

## Production Notes

- **Text overlays to consider:** "vibecoding ≠ agentic software engineering", "other people change everything", "more friction, not less", "harnesses = guardrails for agents"
- **Tone:** Like you're telling a friend something interesting you figured out at work. Not correcting anyone.
- **Pacing:** Let the pauses breathe, especially the "just... other people" and "just... different" moments.
- **B-roll ideas:** Codebase open in an editor, terminal showing a pre-push hook firing, a `CLAUDE.md` file
