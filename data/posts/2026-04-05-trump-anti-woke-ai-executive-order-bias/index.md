---
title: "How Trump's Anti-Woke AI Executive Order Could Actually Make LLMs More Biased"
slug: "trump-anti-woke-ai-executive-order-bias"
author:
  name: "Natasha"
  profilePicture: "/assets/team/Natasha.png"
publishedAt: "2026-04-05T12:00:00Z"
coverImage: "/posts/2026-04-05-trump-anti-woke-ai-executive-order-bias/grok-adl-score.png"
brief: "Trump's Executive Order 14319 bans 'woke AI' in the federal government. But the clause preventing developers from encoding bias corrections could make LLMs more biased—not just for government users, but for everyone."
tags:
  - "AI Policy"
  - "AI Bias"
  - "Executive Order"
  - "LLMs"
  - "US Government"
  - "Tech Policy"
topic:
  - "ragTech"
readTimeInMinutes: 9
status: "published"
newsletter:
  send: true
  sent: false
  topic:
    - "ragTech"
seo:
  metaDescription: "Trump's Executive Order 14319 bans 'woke AI' in the federal government. But by preventing developers from fixing bias, it could entrench the very problem it claims to solve—affecting all LLM users worldwide."
  keywords:
    - "Trump woke AI executive order"
    - "AI bias executive order 14319"
    - "preventing woke AI federal government"
    - "LLM bias regulation"
    - "AI bias US government policy"
    - "executive order AI bias"
    - "DEI AI regulation"
instagramEmbeds:
tiktokEmbeds:
---

On July 23, 2025, President Trump signed [Executive Order 14319, *Preventing Woke AI in the Federal Government*](https://www.whitehouse.gov/presidential-actions/2025/07/preventing-woke-ai-in-the-federal-government/), directing that Large Language Models (LLMs) procured by the US federal government must produce outputs "free from harmful ideological biases or social agendas."

On the surface, the order sounds reasonable. Nobody wants AI that distorts truth, right? But when you read between the lines, buried in the text are clauses that could prevent AI developers from correcting bias at all, potentially making LLMs more biased, not less. And because of how LLMs are architected, this may not just affect US government systems. It could affect every user of these models, worldwide.

# What is Bias in LLMs?

Before unpacking the Executive Order, it helps to understand what bias in AI actually means.

[Research from academia](https://arxiv.org/html/2411.10915v1) defines bias in language models as learned patterns that unfairly associate demographic groups with particular traits, roles, or characteristics. Bias is generally categorized into two types:

- **Intrinsic bias** — encoded into the model's internal representations during training, baked in from the data the model learned on.
- **Extrinsic bias** — emerges when models perform differently across demographic groups in real-world applications.

This distinction matters because bias in LLMs is not a design choice, but an inherent limitation by virtue of how the technology works. It is an artefact of training data that reflects the biases already present in human-generated text across the internet. Fixing it requires deliberate technical intervention by scientists and engineers, which we'll discuss in this article later.

# How Does Bias in LLMs look like?

Bias in LLMs can present itself in different ways depending on how it is used and prompted. Without showing how it can look like and how it impacts people, some may dismiss the issue of bias as a mild issue of indirectly changing the way people think, when in fact, it has very direct real life implications on people's livelihood's and in some cases, their lives. 

Take for example Amazon's purported internal AI recruiting tool that was taken off the shelf in 2018. According to [Reuters, who was the first to report on the issue](https://www.reuters.com/article/world/insight-amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK0AG/), the tool was accused of having a bias against recruiting women as a result of the resumes it was trained on - which, unfortunately, came from mostly resumes of white men over other demographics. This allegedly resulted in the tool disqualifying people people based on non-traditional backgrounds instead of job-related qualifications. For example, resumes that had words like "women's" and "women's chess club captain" were penalized by the system.

Bias in LLMs can even go as far as to affect the life-and-death outcomes of people through influencing healthcare decisions. [A research experiment in 2024 ested GPT-4](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(23)00225-X/fulltext) , the powerful LLM behind OpenAI's ChatGPT, with prompts that resembled possible usage of LLMs across various demographically diverse medical and clinical education settings. They found that the LLM was more likely to diagnose conditions based on certain racial, ethnic and gender stereotypes, and would recommend assessment and treatment plans to patients at different price points based on biases. For example, they found that the LLM was less likely to recommend more expensive diagnostician procedures to Black people and more likely to predict Hispanic women are more likely to hide alcohol abusing history than Asian women. 

__On a sidenote, it is interesting to note that the above 2024 study was funded by Priscilla Chan and Mark Zuckerberg, the latter who founded social media giant Meta, the company housing Facebook and Instagram, and its own LLM model, LLama. The former is his wife.__

## How Different LLMs Currently Perform on Bias

Not all models are equal when it comes to bias. An [ADL AI Index](https://www.adl.org/resources/press-release/six-leading-ai-models-show-varied-ability-detect-and-counter-antisemitism) found that six leading AI models (OpenAI's ChatGPT, Anthropic's Claude, DeepSeek, Google's Gemini, xAI's Grok and Meta's Llama) show varied ability to detect and counter antisemitism and extremism—meaning some models are already more susceptible to harmful outputs than others. 

![Grok, fared the lowest score - a concerning 21 out of 100](/posts/2026-04-05-trump-anti-woke-ai-executive-order-bias/grok-adl-score.png)

It found that Anthropic's Claude, a company that prides itself on AI safety, received the highest overall score, 80 out of 100, revealing an exceptional ability to identify and counter anti-Jewish and anti-Zionist theories, though with room for continued improvement. Grok, xAI's model that powers Elon Musk's X (or Twitter, as I still know it to be in my head), fared the lowest score - a concerning 21 out of 100. This is unsurprising given that Grok has drawn particular academic scrutiny. A [Guardian investigation (November 2025)](https://www.theguardian.com/technology/2025/nov/03/grokipedia-academics-assess-elon-musk-ai-powered-encyclopedia) found academics deeply skeptical of its reliability, assessing it as less trustworthy than other frontier models.

All models, however, still face gaps in countering antisemitism as reflected in the ADL AI Index.

# How LLM Companies Were Already Fixing Bias

It is important to note that this bias is not an abstract societal problem, but a solvable technical problem. AI developers were already working on bias mitigation long before this Executive Order and the approaches being used are technically sophisticated.

## Anthropic

Anthropic published research on [using feature steering to mitigate social bias](https://www.anthropic.com/research/evaluating-feature-steering) (October 2024). Feature steering allows researchers to directly adjust the internal representations of a model to reduce biased outputs, without retraining the entire model from scratch.

## OpenAI

OpenAI has tackled bias on two fronts. In 2022—before Trump's election—the company published work on [reducing bias in DALL·E 2](https://openai.com/index/reducing-bias-and-improving-safety-in-dall-e-2/). The language at the time was direct: fix gender bias, fix representation bias. More recently, OpenAI published a framework for [defining and evaluating political bias in LLMs](https://openai.com/index/defining-and-evaluating-political-bias-in-llms/) (October 2025), though the language has since shifted to vaguer terms like "social bias" and "political bias."

Notably, OpenAI chose to build its own evaluation framework rather than use open benchmarks, stating that existing tools like the Political Compass test "cover only a narrow slice of everyday use." This raises a critical question: if Trump's administration classifies DEI as a form of political bias, can a company define its own evaluation framework to claim compliance? This question becomes even more pertinent when considered against the backdrop of [OpenAI's recent agreement with the Department of War in March 2026](https://openai.com/index/our-agreement-with-the-department-of-war/).

# What the Executive Order Actually Says

![President Donald Trump displays a signed executive order during the "Winning the AI Race" summit hosted by All‑In Podcast and Hill & Valley Forum at the Andrew W. Mellon Auditorium on July 23, 2025 in Washington, DC](https://cdn.nextgov.com/media/img/cd/2025/07/28/072825TrumpNG/860x394.jpg)
__President Donald Trump displays a signed executive order during the "Winning the AI Race" summit hosted by All‑In Podcast and Hill & Valley Forum at the Andrew W. Mellon Auditorium on July 23, 2025 in Washington, DC. By CHIP SOMODEVILLA/GETTY IMAGES__


## The Distortion of DEI

The EO defines DEI in the AI context as:

> *"the suppression or distortion of factual information about race or sex; manipulation of racial or sexual representation in model outputs; incorporation of concepts like critical race theory, transgenderism, unconscious bias, intersectionality, and systemic racism."*

This definition conflates correcting representational harm with distorting facts, where it treats the very technical act of reducing documented model bias as ideological manipulation.

## The Fallacy of The Lonely Fact

The order justifies itself with a list of claims presented without citations or evidence:

> *"One major AI model changed the race or sex of historical figures—including the Pope, the Founding Fathers, and Vikings—when prompted for images... Another AI model refused to produce images celebrating the achievements of white people... In yet another case, an AI model asserted that a user should not 'misgender' another person even if necessary to stop a nuclear apocalypse."*

![Image of Google CEO from article calling AI tool’s controversial responses ‘completely unacceptable’](https://img.semafor.com/6272c88569473ff564bf6ecccb6bbb5e29397fe9-1280x854.png?w=1480&q=75&auto=format&h=987)
_Image from [American news website, Semafor's, article on 'Google CEO calls AI tool’s controversial responses ‘completely unacceptable’](https://www.semafor.com/article/02/27/2024/google-ceo-sundar-pichai-calls-ai-tools-responses-completely-unacceptable)_

Upon researching on these claims, they are likely to be referencing [an incident in February 2024 with regard to Google's Gemini model when it first released image generation capabilities on its chatbot, Bard](https://www.bbc.com/news/technology-68412620). Google has since taken corrective action, as noted by their [blogpost acknowledging their mistake](https://blog.google/products-and-platforms/products/gemini/gemini-image-generation-issue/). In the blogpost, they have clarified that their intention was not to portray people inaccurately, but rather it was a case of tuning their model wrongly. 

Note that all the LLM mistakes cited in the EO came from a single AI model that was only just released, at a singular instance of time that is long past from the creation of this EO - not, as the EO seems to imply, that this was happening with multiple LLMs, with its rhetoric of "One major AI model..." and "another AI model" and "yet another case".

As [Reed Albergotti, Tech Editor for Semafor, an American news website, mentions in this article in response to the incident says](https://www.semafor.com/article/02/27/2024/google-ceo-sundar-pichai-calls-ai-tools-responses-completely-unacceptable):

> But it isn’t really about bias. It shows that Google made technical errors in the fine-tuning of its AI models. The problem is not with the underlying models themselves, but in the software guardrails that sit atop the model.

Truly, the fact that the EO chose to draw a broad conclusion on bias in LLMs based on an isolated technical fault - from a then-newly launched model more than a year ago - seems a long stretch. Rather, this seems to be a case of fallacy of the lonely fact, where the administration already had intentions to further its own ideological dogma and took advantage of a single, isolated software bug over the larger, systematic evidence of inherent bias in LLMs.


## The Most Dangerous Clause

![America's AI Action Plan](https://cdn.prod.website-files.com/686ecd0062f779f2ba045e1b/688131302dea1bbeefb0f383_AI%20Action%20Plan%20Cover.png)
__Image from the Official US ai.gov website__

The clause with the widest technical implications is the Ideological Neutrality requirement:

> *"LLMs shall be neutral, nonpartisan tools that do not manipulate responses in favor of ideological dogmas such as DEI. Developers shall not intentionally encode partisan or ideological judgments into an LLM's outputs unless those judgments are prompted by or otherwise readily accessible to the end user."*

The word "encode" is doing enormous work here. In practice, correcting for bias requires intentional interventions in training data, model weights, and output filters. This clause, read broadly, effectively prevents developers from implementing the very techniques—like feature steering, dataset debiasing, and safety fine-tuning—that researchers have spent years developing. Fixing biased data is not encoding an ideology; it is correcting for documented statistical artefacts. But the EO does not make that distinction.

## A Contradictory Exception

The EO carves out an exception that undermines its own stated logic:

> *"Make exceptions as appropriate for the use of LLMs in national security systems."*

So LLMs deployed in national security contexts can have ideological adjustments encoded into them, but a model used in a public-facing government service cannot. The EO provides no rationale for why the same corrections that are prohibited for civilian use are permissible for national security.

# What Government Agencies Are Now Required to Do

The EO gives federal agencies concrete enforcement powers over AI vendors:

> *Include in each Federal contract for an LLM... terms requiring that the procured LLM comply with the Unbiased AI Principles and providing that decommissioning costs shall be charged to the vendor in the event of termination by the agency for the vendor's noncompliance.*

Agencies are required to revise existing contracts and, within 90 days of OMB guidance, adopt procedures ensuring all procured LLMs comply with these principles. LLM vendors who want government contracts face a clear choice: comply with the EO's definition of neutrality, or lose the contract and pay decommissioning costs.

# Gray Areas and Loopholes Worth Noting

The EO is not without ambiguity, and some clauses leave room for technical compliance without abandoning bias mitigation entirely.

## A Vague Definition of LLMs

The EO defines an LLM as a model that generates "natural-language responses to user prompts." LLMs can also generate code, structured datasets, and outputs that are not natural language. This definitional gap could mean that code generation or data pipeline tools fall outside the EO's scope—even if they are built on the same underlying models.

## The Truth-Seeking Clause

Ironically, the EO includes a clause that could be used to push back on biased outputs:

> *"LLMs shall be truthful in responding to user prompts seeking factual information or analysis. LLMs shall prioritize historical accuracy, scientific inquiry, and objectivity, and shall acknowledge uncertainty where reliable information is incomplete or contradictory."*

Scientific consensus on topics like climate change, vaccine safety, and the existence of systemic discrimination is clear. A model required to be truthful and scientifically accurate may, in practice, be required to produce outputs that reflect the same realities the EO is trying to suppress.

## The Distinction Between Encoding and Fixing Data

The EO prohibits *encoding* partisan judgments into outputs. But engineers can still audit training datasets and remove demonstrably biased examples—a practice that predates the political debate entirely. Developers can also use synthetic data generation to counteract inherent bias in training corpora, and can rely on external third-party evaluation tools rather than internally developed frameworks. The EO constrains what can be baked into model outputs; it is less clear that it constrains what can be removed from model inputs.

# What This Means for All LLM Users—Not Just Government

This is where the EO's consequences extend beyond Washington.

It is architecturally complex to remove safety guardrails only for government-procured instances of a model while leaving those same guardrails intact for all other users. In practice, safeguards like feature steering operate at the level of the foundational model. If a company needs to strip them out to comply with a government contract, those changes may propagate to every version of the model—including the one you use at work, at home, or in your company's product.

## Which LLM Companies Have Signed Government Contracts?

- **OpenAI** has signed a new contract with the [US Department of Defense](https://openai.com/index/our-agreement-with-the-department-of-war/).
- **xAI** (Grok) has entered a [$0.42 per agency agreement with the US General Services Administration](https://www.gsa.gov/about-us/newsroom/news-releases/gsa-xai-partner-to-accelerate-federal-ai-adoption-09252025) to accelerate federal AI adoption (September 2025).
- **Anthropic** notably [backed out of a contract with the US Department of Defense](https://www.bbc.com/news/articles/cn48jj3y8ezo) following Trump's executive orders, the only major frontier model provider to do so.

The companies that remain under government contract are now operating under the EO's requirements. Whether and how they comply—and what that means for their foundational models—is a question the public has no visibility into.

# How Other Governments Are Approaching AI Bias

The contrast with how other governments frame AI bias is stark.

## United Kingdom

The UK government's [AI Insights guidance on LLM bias](https://www.gov.uk/government/publications/ai-insights/ai-insights-large-language-models-llms-bias-html) (updated March 2026) takes a technically grounded approach. It defines bias as "the systematic favouring of certain groups, perspectives, or outcomes over others" and accurately distinguishes between intrinsic and extrinsic bias. It frames bias mitigation as a matter of accuracy and fairness—not ideology.

## Singapore

Singapore's [Project Moonshot](https://aiverifyfoundation.sg/project-moonshot/), developed by IMDA's AI Verify Foundation, is an open-source LLM evaluation toolkit that tests models for factors including bias. Rather than prohibiting bias correction, Singapore is building the tooling to measure it rigorously and collaborating with technical partners to do so.

Both approaches treat bias as a technical and social problem to be solved—not as a political label to be outlawed.

# What the Founders of These Models Say

It is worth remembering the stated mission behind the LLMs now being reshaped by these policy decisions. As [Sam Altman told one journalist](https://finance.yahoo.com/news/sam-altman-told-ai-equalizing-143000806.html), AI should be "an equalizing force in society"—a technology that closes gaps rather than widens them.

The Executive Order's definition of bias mitigation as ideological distortion is in direct tension with this framing. Whether frontier AI labs continue to operate toward an equalizing mission—or quietly adjust their foundational models to comply with government contracts—is something users and researchers will need to watch closely.

The stakes are not abstract. The LLMs being shaped by these decisions are the same ones used by students, doctors, job seekers, and small business owners around the world. Bias in these systems is not a political problem. It is a technical one that, until recently, the industry was actively working to solve.
