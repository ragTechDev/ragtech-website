---
title: "Data Science Experiment: What If Childcare Was Paid Like NS?"
slug: "data-science-what-if-childcare-was-paid-like-ns"
author:
  name: "ragTech Team"
  profilePicture: "/assets/logo/ragtech-logo.png"
publishedAt: "2026-03-09T12:00:00Z"
coverImage: "/posts/2026-03-09-data-science-what-if-childcare-was-like-national-service/blogpost-cover-image.png"
brief: "Singapore's fertility rate just hit 0.87. What if we treated parenthood like National Service, complete with 400 days of paid leave and an NSF-style allowance for stay-at-home parents?"
tags: ["Singapore", "parenthood", "national service", "fertility rate", "childcare", "data simulation"]
topic:
  - "ragTech"
readTimeInMinutes: 13
status: "published"
newsletter:
  send: true
  sent: false
  topic:
    - "ragTech"
seo:
  metaDescription: "What if Singapore treated parenthood like National Service? A data-backed thought experiment on 400 days of paid parental leave."
  keywords: ["Singapore fertility rate", "parenthood national service", "paid parental leave Singapore", "childcare policy", "NS allowance", "data simulation"]
instagramEmbeds:
  DVdZUi7kuq8: "https://instagram.fsin12-1.fna.fbcdn.net/v/t51.71878-15/641784052_2810891589250798_8609730194806696238_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=103&ig_cache_key=Mzg0NTM0MTAxOTkwMzI5MDA0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM4LnNkci5DMyJ9&_nc_ohc=3CQYqA2nDtkQ7kNvwE0CPKZ&_nc_oc=Adnw0tDscYDXo6qDWXgYdIrhtuHF38yrWSiC398s99SUs9hWwPLB9pIKWQ0wl-yoEQeJqIosKgYkEl8KbHuY-p-e&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fsin12-1.fna&_nc_gid=mhng99q6uWGMXqoWZR3wdA&_nc_ss=8&oh=00_AfyOmMNWWm0oXeil_yoCTqaCLRYTZ6sb7XV5ZkqUsnzkqA&oe=69AEC8EC"
---

[Singapore's fertility rate for 2025 was announced recently](https://www.straitstimes.com/singapore/politics/spores-total-fertility-rate-sinks-to-new-low-of-0-87), at a shocking 0.87. For every 2 people in Singapore, there's less than 1 child to replace them in the next generation. Concerns about the citizen population shrinking even further are growing, especially against a backdrop of increased tension around immigration policies.

![Singapore's Fertility Rate](https://cassette.sphdigital.com.sg/image/straitstimes/156f9b7b5c911953b20f710dc47a5d9b2553f83784cbcf55545522401cdc78f6?w=900)
__Image from [Singapore's fertility rate for 2025 was announced recently](https://www.straitstimes.com/singapore/politics/spores-total-fertility-rate-sinks-to-new-low-of-0-87)__

In response, there was parliamentary debate around how to raise the fertility rate. Some strategies raised ire from Singaporeans, such as a proposal to increase pre-school operating hours to accommodate longer working hours from parents. Proposals like these seem out of touch with the actual struggles of working parents on the ground. The people slated to lead the taskforce on improving the fertility rate are single or childless politicians who, despite their best efforts, will objectively never be able to fully empathize with the struggles that come with pregnancy, postpartum and childcare.

So it seems that previous efforts to update Singapore's approach to parenthood have been unsuccessful. In fact, [MP Leong Mun Wai sought to replace the phrase “continued review and updating of policies” with “reimagination”](https://www.channelnewsasia.com/singapore/childcare-leave-work-life-balance-supporting-families-parliament-motion-4918851), but this was rejected by the government.

I like the term "re-imagination" though. I think that is exactly what Singapore and many other countries with low fertility rates need. Current approaches that tweak childcare leave allowance, flexible working arrangements, and preschool operating hours all seem like band-aids on a broken system. There needs to be radical change if you want radical effects, and bumping our 0.87 back up to a healthy 2 is definitely radical.

Now, I'm no politician, but I am a software engineer who loves solving problems. Not being a politician also means I'm not confined to the do's and don'ts of politics and policy. So I'm going to make a radical, data-backed proposal.

This article is part opinion piece, part data science walkthrough. In the second half, I'll walk you through how I used real government data to test whether this proposal could actually work financially. Whether you're a techie or not, you'll be able to follow along. All data is sourced from [data.gov.sg](https://data.gov.sg), Singapore's open data portal.

What if we treated parenthood as we do national service in Singapore?

# The Similarities Between National Service and Parenthood
Alright, alright, before you come at me - let me explain.

## National Service Primer

National service is one of those things unique to Singapore, where every male citizen and permanent resident must serve for 2 years in the military. It's a mandatory civic duty that shapes young men into disciplined, patriotic citizens. More than that, it is an economic imperative our founding father, Lee Kuan Yew, believed was necessary to build a strong, self-reliant nation that did not have the luxury of a large standing army. Conscription was the only feasible way to maintain a strong defense without relying on foreign mercenaries.

![Singapore's National Service](https://static1.straitstimes.com.sg/s3fs-public/articles/2022/03/20/hzns190322_0.jpg?VersionId=Rhl7B8rrtPiCHU.2V2z42o__nfWmE51U&w=900)
__Image from [What is the future of Singapore's national service as it turns 55?](https://www.straitstimes.com/singapore/a-look-at-the-future-of-national-service-as-it-turns-55)__

NS wasn't just about military readiness. It was about building a cohesive society where every citizen had a stake in the nation's success. Strong defence was crucial to political stability, which in turn was necessary for economic growth.

So we made a trade-off: the sacrifice of 2 years of young men's lives for the collective good of national security and social cohesion. These young men, who would otherwise be building their careers and starting families, instead spend those years in military training. There's real opportunity cost in those 2 years (and beyond, when you add reservist obligations), but we've collectively determined that the benefits outweigh the costs.

## Parenthood Parallels
Now apply the same logic to parenthood. Parenthood is a sacrifice, not just financially, but emotionally and socially. Parents give up time, energy, and personal freedom to raise children. They miss career opportunities, social events, and personal pursuits. They face sleepless nights, financial stress, and the constant worry of their child's wellbeing.

![ParentHood Burnout](https://dam.mediacorp.sg/image/upload/s--TNo0JYLV--/c_crop,h_1414,w_1885,x_140,y_0/c_fill,g_auto,h_622,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2024/01/23/parental_burnout-istock.jpg?itok=BN2PtmjG)
__Image from [‘I gave up on parenting’: This mother suffered from parental burnout – here’s how she beat it](https://cnalifestyle.channelnewsasia.com/women/parental-burnout-quiet-quitting-motherhood-383701)__

The early 2 years of parenthood are arguably the most demanding, and can be drawn in close comparison to the first 2 years of full-time NS: a complete lifestyle overhaul with sleepless nights, constant feeding, and the physical and emotional toll of caring for a newborn. Many parents make this sacrifice without adequate support.

Then you have reservist. After the initial 2 years of NS, there's the obligation to serve for additional cycles. Parents make the same kind of ongoing sacrifices beyond the early years of childhood: taking days off when their child is sick, making career sacrifices to be more present, and dealing with the long-term financial and emotional costs of raising a family. This "reservist" of parenthood is a lifelong commitment.

But just like NS, the benefits of parenthood are immense. Children are the future of our nation. They will build our economy, defend our country, and carry forward our values. They will create the next generation of leaders, innovators, and contributors to society.

Economically, parenthood provides a return on investment through the next generation of taxpayers and contributors. We are feeling the absence of that return acutely as we face demographic challenges and an aging population. With a birth rate of 0.87, for every 2 elderly people there is less than 1 working-age person to support them.

So, just like NS, we need to make parenthood a sacrifice that is worth making, attractive enough that people are willing to make the trade-off, and shared by everyone, not just those who can afford it.

# The Radical Proposal
I propose we treat parenthood as a form of national service: a sacrifice that is worth making and shared by everyone. This is not saying everyone needs to have a child. Please, leave the people who don't want children alone.

But those who actually want children? View them as having made a similar sacrifice to those who serve in NS. Don't just reduce the cost of parenthood. Make parenthood a BENEFIT.

Tweaking childcare leave policies, maternity leave, and childcare subsidies is not enough. Parenthood is materially a huge cost center, and trimming those costs by tiny margins won't make a meaningful difference. We need to think bigger.

Now, reforming parenthood is about more than just paid parental leave. There are systemic issues around workplace culture, career penalties for mothers, childcare infrastructure, and societal attitudes that all need addressing. But you have to start somewhere, and in my opinion, the bare minimum first step is making sure parents have enough time and financial support to actually care for their children without sacrificing their livelihoods. That's what this proposal focuses on.

## 400 Days of Paid Parental Leave
Men lose two years of their career when they serve NS. Women lose two years of their career when they have children.

To offset the opportunity cost of NS, we provide two years of paid service. So why not do the same for parenthood?

Currently, women are given 4 months of maternity leave. This is barely enough. You spend 9 full months in pregnancy: the first 3 months in agony from nausea and fatigue, the last 3 months practically immobile. Your body changes every day for 9 months, your organs literally SHIFT, your skin STRETCHES, your hormones fluctuate wildly. But somehow, in less than half of that same time, you're expected to recover, with a huge wound either in your belly or in your nether regions.

![The ROI of Parental Leave](https://cdn2.psychologytoday.com/assets/styles/article_inline_half_caption/public/field_blog_entry_images/2024-11/Blog%20Images%20Nested%20Paid%20Leave.png.jpg?itok=qQMQhzX6)
__Image from [The ROI of Parental Leave](https://www.psychologytoday.com/sg/blog/scientific-mommy/202411/the-roi-of-parental-leave)__

Then add the challenges of caring for a newborn for the next 6 months. You get an average of 2-3 hours of sleep per night. If you're not breastfeeding every 2 hours, you're cleaning bottles and making formula. You don't have time to cook, clean, shower, or do anything else. If you were a non-parent living like this, people would say you're living a depraved life.

But as a parent, you're expected to do all of this and bounce back to work like nothing happened in 4 months.

And parents usually don't even take the full 4 months. They take 2 months, then save 2 months for the rest of the year to cover days when their newborn gets sick in infantcare for a week every month (which inevitably, they will, cos their immune systems are sh*t), and to cover the inevitable time when THEY themselves get sick because they're sleep-deprived, still shape-shifting, and still recovering from a giant wound.

4 months is not enough. That's why many mothers end up resigning or taking longer unpaid leave.

I say we give parents 400 days of fully paid parental leave. Parents should be able to use it however they want. If the mother takes all 2 years, so be it. If she takes a year and hands the other year to the father, so be it. If they're a single parent, take all 2 years, so be it.

> Who pay, you pay ah?

I can already hear the comments - who pay, you pay ah?

Well yes, we pay. And we've already normalized paying for 400 days of full pay through NS. There are 10 ORNS work-years in total, during which NSmen must complete their call-up duties and carry out various activities and training. In every work-year, one may be called up for ORNS activities for up to 40 days.

> 10 * 40 = 400 days of paid work

So I'm not asking for anything out of the norm.

## But What About Workplace Discrimination?

Paid leave is one thing, but there's a bigger elephant in the room: many mothers face career penalties just for taking that leave. They get passed over for promotions, sidelined from projects, or quietly managed out. Some don't even take their full entitlement because they're afraid of the consequences. This is why paid leave alone isn't enough. You need legal teeth behind it.

The NS framework already gives us a model for this. Under the Enlistment Act, an employer who wrongly dismisses you on the grounds of your NS obligations can be fined up to $2,000 and/or imprisoned for up to 6 months on conviction. Apply the same penalties for dismissing or discriminating against parents on grounds of parental leave.

And consider this: Singapore's workplaces have already adapted to men disappearing for reservist. NSmen get called up for up to 40 days a year, for 10 years. Employers absorb that. They plan around it. They backfill, they redistribute work, they make it happen, because the law says they must and the culture has normalized it. If workplaces can accept men leaving periodically for reservist over a decade, they can accept women leaving for a continuous block of parental care leave. It's the same principle, just compressed instead of spread out.

When the parent is ready to return to work, combine this with flexible work-from-home arrangements to ease the transition. The parent gets to re-integrate gradually instead of being thrown back into the deep end while still adjusting to life with a new child. Many companies already offer remote work. Making it a standard part of the return-from-parental-leave process is not a big ask.

The point is: if we treat parental leave with the same legal weight and cultural acceptance as NS obligations, the workplace discrimination problem becomes much more solvable.

# What About Parents Who Are Homemakers or Unemployed?
What about parents who are homemakers or unemployed? Apply the logic of paid full-time NS. NSFs are all unemployed, but we pay them a [monthly allowance](https://www.cmpb.gov.sg/life-in-ns/saf/service-benefits-and-welfare/monthly-allowance/) starting from $715 to $1,455 for the two years of NS. Why can't we extend the same to parents?

I know what you're thinking: "But they're not working, so why should we pay them?" Doesn't this incentivize people to not work and just have children for government money?

Many women already stay at home to take care of their children WITHOUT getting paid. You're not incentivizing something that isn't already happening. And what do you mean "not work"? Childcare IS work. That's why there are dedicated jobs for it: nannies, infantcare and preschool teachers. It's a full-time job that's more full-time than full-time jobs, it's 24/7. As a society, we have already priced the value of childcare. Look at the salaries of these professionals.

![](https://framerusercontent.com/images/OZS8jJ8H0nXvnWhrREmAxAeiU8.webp?scale-down-to=1024&width=1194&height=1253) 
__Image from https://aunty.sg/__

- Confinement nannies are paid [$150/day](https://framerusercontent.com/images/OZS8jJ8H0nXvnWhrREmAxAeiU8.webp?scale-down-to=1024&width=1194&height=1253), that's $3,000/month.
- Regular babysitting is from [$25-$35/hour](https://framerusercontent.com/images/OZS8jJ8H0nXvnWhrREmAxAeiU8.webp?scale-down-to=1024&width=1194&height=1253), that's starting at $4,000/month.
- The average monthly salary for Infant Care Teacher jobs in Singapore ranges from [$2,900 to $3,300](https://sg.jobstreet.com/career-advice/role/infant-care-teacher/salary).
- The average monthly salary for Preschool Teacher jobs in Singapore ranges from [$3,500 to $4,000](https://sg.jobstreet.com/career-advice/role/preschool-teacher/salary).

So really, asking for the higher end of NSF allowance for stay-at-home parents is hardly unreasonable. The cost they would otherwise have to pay is MORE THAN TWICE as much.

# Data Simulation: Does This Even Make Financial Sense?
Alright, so that's the proposal. But proposals without numbers are just vibes. Let's put on our data science hats and actually test whether this idea holds up financially.

If you've never done data analysis before, don't worry. I'll walk you through each step. Data science, at its core, is just asking a question and then using real numbers to find the answer. That's exactly what we're going to do.

## Step 1: State the Hypothesis

Every good analysis starts with a clear hypothesis, a statement you're trying to prove or disprove. Here's ours:

> **Hypothesis:** Singapore's declining birth rate means fewer males entering National Service each year. The money saved from paying fewer NSFs could be redirected to fund a parental leave scheme instead.

The key word is *could*. We're not saying it *should* (that's a policy decision), we're asking if the math even works out.

## Step 2: Identify the Data We Need

To test this hypothesis, we need three things:

1. **Birth data over time**, so we can see how many males are entering NS each year (since males born in year X enter NS around year X + 18)
2. **NS allowance figures**, so we can calculate how much the government spends on NSF pay
3. **Income data**, so we can estimate what paid parental leave would actually cost

All of this is publicly available on [data.gov.sg](https://data.gov.sg). I'll be using data.gov.sg's API (application programming interface) to fetch the data in a format that's easier to read with code. This format is called JSON (JavaScript Object Notation). If you're not technical, don't worry about the raw data blocks below. I'll extract the key numbers and walk through the math in plain language.

## Step 3: Explore the Birth Data

Here's the Births and Fertility Rates dataset from data.gov.sg:
<iframe
  width="100%%"
  height="600"
  src="https://data.gov.sg/datasets/d_e39eeaeadb571c0d0725ef1eec48d166/explorer"
  frameborder="0"
>
</iframe>

Here's that same data fetched via the API in JSON format. For the techies: notice how the JSON contains a `records` array where each row in the dataset (like "Total Live-Births") has year-keyed values. For the non-techies: this is just a structured way for computers to read the same table you see in the iframe above.

```json
{"help":"https://data.gov.sg/api/3/action/help_show?name=datastore_search","success":true,"result":{"resource_id":"d_e39eeaeadb571c0d0725ef1eec48d166","fields":[{"type":"text","id":"DataSeries"},{"type":"text","id":"2025"},{"type":"numeric","id":"2024"},{"type":"numeric","id":"2023"},{"type":"numeric","id":"2022"},{"type":"numeric","id":"2021"},{"type":"numeric","id":"2020"},{"type":"numeric","id":"2019"},{"type":"numeric","id":"2018"},{"type":"numeric","id":"2017"},{"type":"numeric","id":"2016"},{"type":"numeric","id":"2015"},{"type":"numeric","id":"2014"},{"type":"numeric","id":"2013"},{"type":"numeric","id":"2012"},{"type":"numeric","id":"2011"},{"type":"numeric","id":"2010"},{"type":"numeric","id":"2009"},{"type":"numeric","id":"2008"},{"type":"numeric","id":"2007"},{"type":"numeric","id":"2006"},{"type":"numeric","id":"2005"},{"type":"numeric","id":"2004"},{"type":"numeric","id":"2003"},{"type":"numeric","id":"2002"},{"type":"numeric","id":"2001"},{"type":"numeric","id":"2000"},{"type":"numeric","id":"1999"},{"type":"numeric","id":"1998"},{"type":"numeric","id":"1997"},{"type":"numeric","id":"1996"},{"type":"numeric","id":"1995"},{"type":"numeric","id":"1994"},{"type":"numeric","id":"1993"},{"type":"numeric","id":"1992"},{"type":"numeric","id":"1991"},{"type":"numeric","id":"1990"},{"type":"numeric","id":"1989"},{"type":"numeric","id":"1988"},{"type":"numeric","id":"1987"},{"type":"numeric","id":"1986"},{"type":"numeric","id":"1985"},{"type":"numeric","id":"1984"},{"type":"numeric","id":"1983"},{"type":"numeric","id":"1982"},{"type":"numeric","id":"1981"},{"type":"numeric","id":"1980"},{"type":"text","id":"1979"},{"type":"text","id":"1978"},{"type":"text","id":"1977"},{"type":"text","id":"1976"},{"type":"text","id":"1975"},{"type":"text","id":"1974"},{"type":"text","id":"1973"},{"type":"text","id":"1972"},{"type":"text","id":"1971"},{"type":"text","id":"1970"},{"type":"text","id":"1969"},{"type":"text","id":"1968"},{"type":"text","id":"1967"},{"type":"text","id":"2944600","2008":"2938800","2009":"3034800","2010":"3105700","2011":"3148700","2012":"3183000","2013":"3205900","2014":"3259800","2015":"3275900","2016":"3318500","2017":"3353200","2018":"3386400","2019":"3422400","2020":"3459100","2021":"3402200","2022":"3484100","2023":"3553200","2024":"3586400","_id":1,"DataSeries":"Total"},{"1980":"674100","1983":"728000","1984":"714300","1985":"726600","1986":"736500","1987":"735200","1988":"745700","1989":"752800","1990":"747200","1991":"760100","1992":"774800","1993":"773700","1994":"762500","1995":"756600","1996":"750500","1997":"766600","1998":"767500","1999":"769300","2000":"760400","2001":"774300","2002":"797200","2003":"825200","2004":"844100","2005":"858100","2006":"903300","2007":"918400","2008":"918700","2009":"957600","2010":"1000500","2011":"1012000","2012":"1022600","2013":"1029300","2014":"1048100","2015":"1034500","2016":"1049200","2017":"1034700","2018":"1057200","2019":"1058900","2020":"1090700","2021":"1063300","2022":"997800","2023":"1056000","2024":"1045200","_id":2,"DataSeries":"    Single"},{"1980":"864600","1983":"951200","1984":"1005100","1985":"1020100","1986":"1039700","1987":"1083300","1988":"1112200","1989":"1137800","1990":"1176400","1991":"1240000","1992":"1269000","1993":"1310000","1994":"1349600","1995":"1383600","1996":"1428300","1997":"1478600","1998":"1510000","1999":"1528700","2000":"1543200","2001":"1576200","2002":"1622400","2003":"1660300","2004":"1678700","2005":"1700500","2006":"1757600","2007":"1787100","2008":"1783700","2009":"1831300","2010":"1844600","2011":"1875900","2012":"1899000","2013":"1911500","2014":"1940100","2015":"1945600","2016":"1974700","2017":"2018400","2018":"2026800","2019":"2055300","2020":"2035400","2021":"2042600","2022":"2151900","2023":"2175100","2024":"2210500","_id":3,"DataSeries":"    Married"},{"1980":"97100","1983":"101700","1984":"92800","1985":"99200","1986":"108200","1987":"106900","1988":"108100","1989":"116200","1990":"127300","1991":"121300","1992":"128300","1993":"124700","1994":"133100","1995":"125700","1996":"136500","1997":"128400","1998":"133800","1999":"144900","2000":"129200","2001":"145100","2002":"143300","2003":"150700","2004":"150800","2005":"135300","2006":"150300","2007":"155600","2008":"146900","2009":"152700","2010":"157600","2011":"157700","2012":"152300","2013":"158000","2014":"161100","2015":"172100","2016":"174600","2017":"180200","2018":"170300","2019":"167900","2020":"183200","2021":"155900","2022":"170500","2023":"167900","2024":"182600","_id":4,"DataSeries":"    Widowed"},{"1980":"15800","1983":"11000","1984":"16700","1985":"20800","1986":"22300","1987":"22200","1988":"24100","1989":"25700","1990":"27900","1991":"32300","1992":"32800","1993":"34500","1994":"35400","1995":"38900","1996":"41900","1997":"39800","1998":"38400","1999":"47100","2000":"61800","2001":"58400","2002":"58300","2003":"61700","2004":"66200","2005":"76300","2006":"81700","2007":"83600","2008":"89500","2009":"93200","2010":"103100","2011":"103000","2012":"109200","2013":"107200","2014":"110600","2015":"123600","2016":"119900","2017":"119900","2018":"132000","2019":"140400","2020":"149800","2021":"140400","2022":"164000","2023":"154200","2024":"148000","_id":5,"DataSeries":"    Divorced/Separated"},{"1980":"833500","1983":"901700","1984":"912200","1985":"929800","1986":"948000","1987":"974100","1988":"994400","1989":"1007900","1990":"1045600","1991":"1077800","1992":"1098200","1993":"1121100","1994":"1133700","1995":"1146600","1996":"1165000","1997":"1195900","1998":"1204300","1999":"1229200","2000":"1229800","2001":"1254300","2002":"1286600","2003":"1323100","2004":"1343400","2005":"1357400","2006":"1419000","2007":"1438300","2008":"1437200","2009":"1477500","2010":"1517400","2011":"1534200","2012":"1550000","2013":"1560900","2014":"1583900","2015":"1589600","2016":"1607500","2017":"1630100","2018":"1644000","2019":"1659800","2020":"1663600","2021":"1653300","2022":"1688800","2023":"1716100","2024":"1730600","_id":6,"DataSeries":"Males"},{"1980":"375800","1983":"404700","1984":"393400","1985":"400100","1986":"408100","1987":"410800","1988":"416100","1989":"418000","1990":"422600","1991":"424900","1992":"431600","1993":"432300","1994":"425800","1995":"421600","1996":"409500","1997":"423600","1998":"417700","1999":"420200","2000":"413300","2001":"418500","2002":"428700","2003":"441800","2004":"453000","2005":"460700","2006":"482700","2007":"487500","2008":"488900","2009":"505100","2010":"527100","2011":"529600","2012":"534700","2013":"535100","2014":"538500","2015":"533200","2016":"539700","2017":"531100","2018":"544200","2019":"546200","2020":"553200","2021":"541300","2022":"505400","2023":"543500","2024":"532300","_id":7,"DataSeries":"    Single"},{"1980":"435900","1983":"476300","1984":"499600","1985":"506500","1986":"517100","1987":"539600","1988":"553300","1989":"563800","1990":"586700","1991":"621600","1992":"633400","1993":"657400","1994":"674700","1995":"692200","1996":"717200","1997":"737800","1998":"751100","1999":"768500","2000":"771000","2001":"793100","2002":"814200","2003":"835700","2004":"846800","2005":"847000","2006":"883500","2007":"894700","2008":"896300","2009":"913300","2010":"928400","2011":"944300","2012":"952200","2013":"963100","2014":"980800","2015":"984700","2016":"993900","2017":"1026300","2018":"1025100","2019":"1034600","2020":"1023300","2021":"1031700","2022":"1094900","2023":"1082700","2024":"1098200","_id":8,"DataSeries":"    Married"},{"1980":"16000","1983":"16600","1984":"13600","1985":"16200","1986":"15500","1987":"16100","1988":"17000","1989":"17900","1990":"26100","1991":"20100","1992":"22400","1993":"20600","1994":"21700","1995":"20000","1996":"23900","1997":"21000","1998":"22700","1999":"24400","2000":"22600","2001":"23200","2002":"23600","2003":"24500","2004":"22500","2005":"21100","2006":"24200","2007":"26400","2008":"22700","2009":"26600","2010":"24900","2011":"25700","2012":"25700","2013":"25700","2014":"27300","2015":"28900","2016":"29900","2017":"31700","2018":"30500","2019":"31100","2020":"32200","2021":"29600","2022":"30800","2023":"32500","2024":"43800","_id":9,"DataSeries":"    Widowed"},{"1980":"5700","1983":"4100","1984":"5600","1985":"7000","1986":"7300","1987":"7700","1988":"8000","1989":"8200","1990":"10200","1991":"11100","1992":"10800","1993":"10700","1994":"11400","1995":"12700","1996":"14400","1997":"13500","1998":"12800","1999":"16100","2000":"22900","2001":"19400","2002":"20100","2003":"21200","2004":"21100","2005":"28500","2006":"28800","2007":"29700","2008":"29300","2009":"32400","2010":"37100","2011":"34600","2012":"37500","2013":"37000","2014":"37300","2015":"42700","2016":"44100","2017":"40900","2018":"44100","2019":"48000","2020":"54900","2021":"50700","2022":"57700","2023":"57400","2024":"56300","_id":10,"DataSeries":"    Divorced/Separated"},{"1980":"818000","1983":"890200","1984":"916800","1985":"936900","1986":"958600","1987":"973400","1988":"995600","1989":"1024500","1990":"1033200","1991":"1076000","1992":"1106700","1993":"1121900","1994":"1146900","1995":"1158300","1996":"1192100","1997":"1217500","1998":"1245300","1999":"1260900","2000":"1264900","2001":"1299700","2002":"1334700","2003":"1374800","2004":"1396400","2005":"1412900","2006":"1473700","2007":"1506400","2008":"1501600","2009":"1557300","2010":"1588300","2011":"1614500","2012":"1633000","2013":"1645000","2014":"1675900","2015":"1686300","2016":"1711000","2017":"1723100","2018":"1742400","2019":"1762600","2020":"1795500","2021":"1748900","2022":"1795300","2023":"1837100","2024":"1855800","_id":11,"DataSeries":"Females"},{"1980":"298300","1983":"323400","1984":"321000","1985":"326500","1986":"328400","1987":"324400","1988":"329600","1989":"334800","1990":"324600","1991":"335200","1992":"343200","1993":"341400","1994":"336700","1995":"335000","1996":"340900","1997":"343000","1998":"349800","1999":"349100","2000":"347000","2001":"355800","2002":"368600","2003":"383400","2004":"391100","2005":"397400","2006":"420600","2007":"430900","2008":"429800","2009":"452400","2010":"473400","2011":"482400","2012":"487900","2013":"494100","2014":"509600","2015":"501300","2016":"509600","2017":"503500","2018":"513000","2019":"512700","2020":"537500","2021":"522000","2022":"492400","2023":"512600","2024":"513000","_id":12,"DataSeries":"    Single"},{"1980":"428700","1983":"474800","1984":"505500","1985":"513700","1986":"522600","1987":"543700","1988":"558900","1989":"573900","1990":"589700","1991":"618400","1992":"635600","1993":"652600","1994":"674800","1995":"691300","1996":"711100","1997":"740800","1998":"758900","1999":"760200","2000":"772300","2001":"783000","2002":"808200","2003":"824600","2004":"831900","2005":"853500","2006":"874100","2007":"892400","2008":"887400","2009":"918000","2010":"916300","2011":"931600","2012":"946800","2013":"948400","2014":"959200","2015":"960900","2016":"980800","2017":"992200","2018":"1001700","2019":"1020700","2020":"1012100","2021":"1010900","2022":"1057000","2023":"1092400","2024":"1112300","_id":13,"DataSeries":"    Married"},{"1980":"81100","1983":"85100","1984":"79200","1985":"83000","1986":"92700","1987":"90800","1988":"91100","1989":"98300","1990":"101300","1991":"101200","1992":"105900","1993":"104200","1994":"111400","1995":"105800","1996":"112600","1997":"107500","1998":"111100","1999":"120500","2000":"106700","2001":"122000","2002":"119700","2003":"126200","2004":"128200","2005":"114200","2006":"126100","2007":"129100","2008":"124200","2009":"126000","2010":"132700","2011":"132000","2012":"126700","2013":"132300","2014":"133700","2015":"143200","2016":"144700","2017":"148500","2018":"139800","2019":"136800","2020":"151000","2021":"126300","2022":"139700","2023":"135400","2024":"138800","_id":14,"DataSeries":"    Widowed"},{"1980":"10100","1983":"6900","1984":"11100","1985":"13700","1986":"15000","1987":"14600","1988":"16000","1989":"17500","1990":"17700","1991":"21100","1992":"22000","1993":"23800","1994":"24000","1995":"26200","1996":"27400","1997":"26300","1998":"25500","1999":"31000","2000":"38900","2001":"39000","2002":"38200","2003":"40500","2004":"45100","2005":"47800","2006":"52900","2007":"53900","2008":"60100","2009":"60800","2010":"66000","2011":"68400","2012":"71700","2013":"70200","2014":"73300","2015":"80900","2016":"75900","2017":"78900","2018":"87900","2019":"92300","2020":"95000","2021":"89700","2022":"106300","2023":"96800","2024":"91700","_id":15,"DataSeries":"    Divorced/Separated"}],"_links":{"start":"/api/action/datastore_search?resource_id=d_e4c42075f284bf7589e066cf404b0b33","next":"/api/action/datastore_search?resource_id=d_e4c42075f284bf7589e066cf404b0b33&offset=100"},"total":15}}
```

From this dataset, the key row we care about is **"Total Live-Births"**. Here are the highlights:

| Year | Total Live-Births | TFR |
|------|------------------|-----|
| 1988 | 52,957 | 1.96 |
| 1990 | 51,142 | 1.83 |
| 1995 | 48,635 | 1.67 |
| 2000 | 46,997 | 1.60 |
| 2005 | 37,492 | 1.26 |
| 2010 | 37,967 | 1.15 |
| 2015 | 42,185 | 1.24 |
| 2020 | 38,590 | 1.10 |
| 2024 | 33,703 | 0.97 |
| 2025 | 30,004 | 0.87 |

The trend is clear: births peaked in the late 1980s and early 1990s (around 50,000+ per year) and have been declining steadily since. By 2025, we're down to just 30,004 births, a 41% drop from the 1990 peak.

Why does this matter for NS? Because males born in any given year will enter NS roughly 18 years later. Fewer births today means fewer NSFs tomorrow.

## Step 4: Estimate NS Intake Over Time

Here's the key insight that makes this analysis possible: if we know how many babies were born in a given year, we can estimate how many males entered NS 18 years later. Roughly half of all births are male, so:

> **Estimated NS intake for year Y = Total births in year (Y - 18) / 2**

This is a simplification (not all males serve due to medical exemptions, emigration, etc.), but it gives us a reasonable ballpark. Here's what that looks like:

| NS Year | Born Year | Total Births | Est. Male NS Intake |
|---------|-----------|-------------|-------------------|
| 2006 | 1988 | 52,957 | ~26,479 |
| 2008 | 1990 | 51,142 | ~25,571 |
| 2011 | 1993 | 50,225 | ~25,113 |
| 2016 | 1998 | 43,664 | ~21,832 |
| 2021 | 2003 | 37,485 | ~18,743 |
| 2023 | 2005 | 37,492 | ~18,746 |
| 2025 | 2007 | 39,490 | ~19,745 |

The NS intake peaked around 2006-2011 (when the large 1988-1993 birth cohorts turned 18) and has since dropped. The 2021 intake (~18,743) is about **27% smaller** than the 2006 peak (~26,479).

## Step 5: Calculate the TOTAL Cost of NS Per Male

NS isn't just 2 years of full-time service. There's also reservist. As I mentioned earlier, every NSman has 10 ORNS work-years, each with up to 40 days of call-up. That's **400 days of paid reservist duty** over a career, on top of the 2 years of full-time NS.

The government pays for both:

**Part 1: NSF allowance (full-time, 2 years)**

According to [CMPB](https://www.cmpb.gov.sg/life-in-ns/saf/service-benefits-and-welfare/monthly-allowance/), NSF monthly allowances range from $715 (recruit) to $1,455 (officer cadet). Using the midpoint of **$1,085/month**:

> **$1,085 x 24 months = $26,040 per NSF**

**Part 2: Reservist make-up pay (400 days over 10 cycles)**

During reservist, NSmen receive make-up pay at their civilian salary rate. Using the 2022 median male income of $4,875/month, that's about $221.59/day (based on 22 working days per month):

> **$221.59 x 400 days = ~$88,636 per NSman**

**Total lifetime NS cost per male:**

> **$26,040 (NSF) + $88,636 (reservist) = ~$114,676 per male**

That's a significant number. Now let's see what this looks like at the national level.

## Step 6: Calculate the Annual NS Bill

At any given time, multiple cohorts are in the NS system simultaneously:

- **2 NSF cohorts** (this year's intake + last year's, both still serving full-time)
- **~10 reservist cohorts** (those who completed NSF in the past 10 years, each doing ~40 days/year)

Here's the total annual cost, combining both NSF allowances and reservist make-up pay:

| Year | NSF Cost (2 cohorts) | Reservist Cost (~10 cohorts) | **Total Annual NS Cost** |
|------|---------------------|----------------------------|------------------------|
| 2006 | ~$628.7M | ~$1,836.9M | **~$2.47B** |
| 2008 | ~$643.3M | ~$1,894.5M | **~$2.54B** |
| 2013 | ~$639.2M | ~$2,067.7M | **~$2.71B** |
| 2018 | ~$588.1M | ~$2,150.8M | **~$2.74B** |
| 2021 | ~$509.4M | ~$2,079.3M | **~$2.59B** |
| 2025 | ~$506.5M | ~$1,880.3M | **~$2.39B** |

This is the part most people miss. NSF allowances are just the visible tip of the iceberg. The reservist make-up pay, where employers release NSmen for up to 40 days a year and the government reimburses them at civilian salary rates, is the much larger cost. It accounts for roughly **75-80%** of the total NS personnel cost.

The total annual NS cost peaked around 2018 at ~$2.74B (when the large 1990s birth cohorts were simultaneously doing reservist) and has started declining as smaller cohorts cycle in.

## Step 7: Calculate the Cost of Parental Leave

For this step, we need income data to figure out what "paid parental leave" would actually cost. Here's the Median Gross Monthly Income dataset from data.gov.sg:

<iframe
  width="100%%"
  height="600"
  src="https://data.gov.sg/datasets/d_aa75b9227b47cbc12ffe0e3be4979546/chart/1157"
  frameborder="0"
>
</iframe>

```json
{"help":"https://data.gov.sg/api/3/action/help_show?name=datastore_search","success":true,"result":{"resource_id":"d_aa75b9227b47cbc12ffe0e3be4979546","fields":[{"type":"numeric","id":"year"},{"type":"text","id":"sex"},{"type":"numeric","id":"med_income_incl_empcpf"},{"type":"numeric","id":"med_income_excl_empcpf"},{"type":"int4","id":"_id"}],"records":[{"_id":1,"year":"2001","sex":"male","med_income_incl_empcpf":"2514","med_income_excl_empcpf":"2250"},{"_id":2,"year":"2001","sex":"female","med_income_incl_empcpf":"2204","med_income_excl_empcpf":"1950"},{"_id":3,"year":"2002","sex":"male","med_income_incl_empcpf":"2514","med_income_excl_empcpf":"2176"},{"_id":4,"year":"2002","sex":"female","med_income_incl_empcpf":"2219","med_income_excl_empcpf":"1950"},{"_id":5,"year":"2003","sex":"male","med_income_incl_empcpf":"2514","med_income_excl_empcpf":"2217"},{"_id":6,"year":"2003","sex":"female","med_income_incl_empcpf":"2262","med_income_excl_empcpf":"2000"},{"_id":7,"year":"2004","sex":"male","med_income_incl_empcpf":"2449","med_income_excl_empcpf":"2200"},{"_id":8,"year":"2004","sex":"female","med_income_incl_empcpf":"2204","med_income_excl_empcpf":"1988"},{"_id":9,"year":"2006","sex":"male","med_income_incl_empcpf":"2526","med_income_excl_empcpf":"2333"},{"_id":10,"year":"2006","sex":"female","med_income_incl_empcpf":"2260","med_income_excl_empcpf":"2000"},{"_id":11,"year":"2007","sex":"male","med_income_incl_empcpf":"2712","med_income_excl_empcpf":"2500"},{"_id":12,"year":"2007","sex":"female","med_income_incl_empcpf":"2449","med_income_excl_empcpf":"2167"},{"_id":13,"year":"2008","sex":"male","med_income_incl_empcpf":"3024","med_income_excl_empcpf":"2713"},{"_id":14,"year":"2008","sex":"female","med_income_incl_empcpf":"2720","med_income_excl_empcpf":"2400"},{"_id":15,"year":"2009","sex":"male","med_income_incl_empcpf":"3000","med_income_excl_empcpf":"2708"},{"_id":16,"year":"2009","sex":"female","med_income_incl_empcpf":"2754","med_income_excl_empcpf":"2492"},{"_id":"1966"},{"type":"text","id":"1965"},{"type":"text","id":"1964"},{"type":"text","id":"1963"},{"type":"text","id":"1962"},{"type":"text","id":"1961"},{"type":"text","id":"1960"},{"type":"int4","id":"_id"}],"records":[{"1960":"5.76","1961":"5.41","1962":"5.21","1963":"5.16","1964":"4.97","1965":"4.66","1966":"4.46","1967":"3.91","1968":"3.53","1969":"3.22","1970":"3.07","1971":"3.02","1972":"3.04","1973":"2.79","1974":"2.35","1975":"2.07","1976":"2.11","1977":"1.82","1978":"1.79","1979":"1.79","1980":"1.82","1981":"1.78","1982":"1.74","1983":"1.61","1984":"1.62","1985":"1.61","1986":"1.43","1987":"1.62","1988":"1.96","1989":"1.75","1990":"1.83","1991":"1.73","1992":"1.72","1993":"1.74","1994":"1.71","1995":"1.67","1996":"1.66","1997":"1.61","1998":"1.48","1999":"1.47","2000":"1.6","2001":"1.41","2002":"1.37","2003":"1.27","2004":"1.26","2005":"1.26","2006":"1.28","2007":"1.29","2008":"1.28","2009":"1.22","2010":"1.15","2011":"1.2","2012":"1.29","2013":"1.19","2014":"1.25","2015":"1.24","2016":"1.2","2017":"1.16","2018":"1.14","2019":"1.14","2020":"1.1","2021":"1.12","2022":"1.04","2023":"0.97","2024":"0.97","2025":"0.87","_id":1,"DataSeries":"Total Fertility Rate (TFR)"},{"1960":"69.6","1961":"63.4","1962":"52","1963":"45.7","1964":"38.3","1965":"35.9","1966":"33","1967":"35.8","1968":"30.9","1969":"27.1","1970":"25.9","1971":"25.6","1972":"25.3","1973":"24.2","1974":"20.8","1975":"16.8","1976":"16.2","1977":"13.4","1978":"11.8","1979":"11.4","1980":"12.7","1981":"11.8","1982":"11.4","1983":"10.4","1984":"10.3","1985":"9.6","1986":"8.6","1987":"7.7","1988":"7.3","1989":"7.2","1990":"8.3","1991":"8.4","1992":"7.9","1993":"8.3","1994":"7.4","1995":"6.6","1996":"6.8","1997":"6.8","1998":"7.5","1999":"8.4","2000":"8.8","2001":"8.4","2002":"8","2003":"6.7","2004":"6.6","2005":"7.2","2006":"6.6","2007":"6.1","2008":"6.1","2009":"5","2010":"4.8","2011":"4.7","2012":"4.3","2013":"3.8","2014":"3.3","2015":"2.7","2016":"2.7","2017":"2.6","2018":"2.5","2019":"2.5","2020":"2.3","2021":"2.2","2022":"2.1","2023":"2.2","2024":"2.3","2025":"1.3","_id":2,"DataSeries":"    15 - 19 Years"},{"1960":"250.5","1961":"241.1","1962":"245.5","1963":"249","1964":"240","1965":"227.1","1966":"218.5","1967":"195.8","1968":"165.8","1969":"150.1","1970":"139","1971":"138.3","1972":"137.4","1973":"130.5","1974":"118.9","1975":"102.1","1976":"107.2","1977":"90.3","1978":"86.8","1979":"85.1","1980":"84.9","1981":"84.2","1982":"80.2","1983":"72.4","1984":"68.6","1985":"68","1986":"60.4","1987":"59.7","1988":"65","1989":"59.7","1990":"58.7","1991":"53.5","1992":"52.1","1993":"49.8","1994":"46.9","1995":"46.9","1996":"44.8","1997":"42","1998":"39.7","1999":"37.3","2000":"42.2","2001":"35.7","2002":"34.6","2003":"32.4","2004":"32.2","2005":"32.5","2006":"30.6","2007":"31.2","2008":"29.1","2009":"25.4","2010":"23.3","2011":"22.4","2012":"22.2","2013":"19.7","2014":"19.5","2015":"18.7","2016":"17","2017":"15.1","2018":"14.4","2019":"12.7","2020":"12.7","2021":"11.7","2022":"11.2","2023":"10.6","2024":"9.8","2025":"8.7","_id":3,"DataSeries":"    20 - 24 Years"},{"1960":"323.9","1961":"304.9","1962":"291.7","1963":"287.2","1964":"277.6","1965":"259.5","1966":"261.2","1967":"244.7","1968":"236.6","1969":"227.8","1970":"208.8","1971":"212.6","1972":"218","1973":"199.5","1974":"172.2","1975":"154.5","1976":"160.2","1977":"138.9","1978":"140.9","1979":"139.3","1980":"144.5","1981":"141.2","1982":"136.4","1983":"125.5","1984":"124.2","1985":"123.9","1986":"110.1","1987":"124.8","1988":"147.5","1989":"129.7","1990":"136","1991":"129.2","1992":"128.4","1993":"130","1994":"129.2","1995":"125.6","1996":"122.8","1997":"116.9","1998":"105.2","1999":"105.1","2000":"110.1","2001":"96.2","2002":"91.6","2003":"82.2","2004":"80.6","2005":"80.7","2006":"79.6","2007":"78.7","2008":"78.9","2009":"74.2","2010":"68.1","2011":"73.4","2012":"76.7","2013":"70.5","2014":"71.1","2015":"68.7","2016":"65.8","2017":"62.2","2018":"60.6","2019":"59.4","2020":"54.6","2021":"53.4","2022":"48.8","2023":"43.7","2024":"42.6","2025":"38.3","_id":4,"DataSeries":"    25 - 29 Years"},{"1960":"259.7","1961":"238.4","1962":"231.5","1963":"228.7","1964":"226.7","1965":"216.2","1966":"202","1967":"166.7","1968":"152","1969":"134.3","1970":"138","1971":"137.6","1972":"139.2","1973":"128.4","1974":"102.9","1975":"94.9","1976":"95.9","1977":"85.2","1978":"86.8","1979":"88.4","1980":"87.8","1981":"84.2","1982":"84.5","1983":"79.9","1984":"83","1985":"85.6","1986":"74.4","1987":"92.5","1988":"118.9","1989":"104.5","1990":"110.8","1991":"106.8","1992":"107.2","1993":"108.8","1994":"109.2","1995":"107.4","1996":"108.5","1997":"107.3","1998":"96.1","1999":"97.5","2000":"107.9","2001":"94.9","2002":"96.2","2003":"90","2004":"89.9","2005":"89.2","2006":"93.1","2007":"94.4","2008":"94.6","2009":"90.1","2010":"86","2011":"89.5","2012":"99.5","2013":"90.2","2014":"99.3","2015":"98.5","2016":"96.2","2017":"93.3","2018":"92.9","2019":"92.4","2020":"90.8","2021":"92.9","2022":"86.7","2023":"78.7","2024":"79.3","2025":"70","_id":5,"DataSeries":"    30 - 34 Years"},{"1960":"176.7","1961":"168.9","1962":"156.2","1963":"156.1","1964":"147.7","1965":"138.1","1966":"124.8","1967":"95.9","1968":"85.2","1969":"75.2","1970":"74.5","1971":"68.5","1972":"66.1","1973":"57.6","1974":"42.6","1975":"36.3","1976":"33.8","1977":"28.7","1978":"26.7","1979":"27.5","1980":"28","1981":"29.3","1982":"31","1983":"29.5","1984":"32.1","1985":"31.1","1986":"28.4","1987":"33.5","1988":"44.9","1989":"42.1","1990":"44.3","1991":"41.7","1992":"41.7","1993":"43.6","1994":"42.6","1995":"41.3","1996":"42.6","1997":"41.7","1998":"39.8","1999":"38.6","2000":"43.3","2001":"39.5","2002":"38.2","2003":"36.3","2004":"35.6","2005":"36.8","2006":"38.7","2007":"41.5","2008":"41.5","2009":"42.6","2010":"42.2","2011":"42.4","2012":"46.3","2013":"44.7","2014":"48.3","2015":"49.9","2016":"49.7","2017":"48.6","2018":"48.4","2019":"50.1","2020":"49","2021":"53.6","2022":"49.4","2023":"47.9","2024":"50","2025":"46.2","_id":6,"DataSeries":"    35 - 39 Years"},{"1960":"70.7","1961":"64.8","1962":"65.1","1963":"64.9","1964":"62.8","1965":"54.9","1966":"51.7","1967":"42.9","1968":"35.3","1969":"29.4","1970":"26.7","1971":"21.9","1972":"20.9","1973":"17.4","1974":"12.7","1975":"10","1976":"8.1","1977":"6.9","1978":"5.3","1979":"5.5","1980":"5.8","1981":"5.5","1982":"4.9","1983":"3.9","1984":"4.9","1985":"4.5","1986":"4.7","1987":"5.9","1988":"7.4","1989":"7.6","1990":"7.4","1991":"6.5","1992":"6.7","1993":"7.2","1994":"6.7","1995":"6.5","1996":"7","1997":"7","1998":"6.6","1999":"6.4","2000":"7.6","2001":"6.8","2002":"5.8","2003":"6.1","2004":"6.3","2005":"6.2","2006":"6.4","2007":"6.4","2008":"6.6","2009":"7","2010":"6.1","2011":"7.2","2012":"8","2013":"8","2014":"8.3","2015":"8.9","2016":"8.8","2017":"9","2018":"8.8","2019":"9.9","2020":"9.5","2021":"10.2","2022":"9.8","2023":"9.6","2024":"10.2","2025":"9.6","_id":7,"DataSeries":"    40 - 44 Years"},{"1960":"na","1961":"na","1962":"na","1963":"na","1964":"na","1965":"na","1966":"na","1967":"na","1968":"na","1969":"na","1970":"na","1971":"na","1972":"na","1973":"na","1974":"na","1975":"na","1976":"na","1977":"na","1978":"na","1979":"na","1980":"0.5","1981":"0.4","1982":"0.3","1983":"0.2","1984":"0.2","1985":"0.2","1986":"0.2","1987":"0.2","1988":"0","1989":"0.2","1990":"0.1","1991":"0.3","1992":"0.2","1993":"0.2","1994":"0.1","1995":"0.2","1996":"0.2","1997":"0.2","1998":"0.2","1999":"0.2","2000":"0.2","2001":"0.2","2002":"0.2","2003":"0.2","2004":"0.2","2005":"0.2","2006":"0.2","2007":"0.2","2008":"0.2","2009":"0.3","2010":"0.3","2011":"0.3","2012":"0.3","2013":"0.3","2014":"0.3","2015":"0.4","2016":"0.3","2017":"0.5","2018":"0.5","2019":"0.4","2020":"0.5","2021":"0.3","2022":"0.4","2023":"0.6","2024":"0.7","2025":"0.5","_id":8,"DataSeries":"    45 - 49 Years"},{"1960":"5.62","1961":"5.2","1962":"4.92","1963":"4.83","1964":"4.6","1965":"4.31","1966":"4.08","1967":"3.59","1968":"3.29","1969":"3.05","1970":"3","1971":"2.98","1972":"3","1973":"2.79","1974":"2.33","1975":"2.06","1976":"2.15","1977":"1.81","1978":"1.78","1979":"1.77","1980":"1.73","1981":"1.67","1982":"1.62","1983":"1.47","1984":"1.46","1985":"1.46","1986":"1.25","1987":"1.46","1988":"1.84","1989":"1.56","1990":"1.65","1991":"1.54","1992":"1.53","1993":"1.55","1994":"1.54","1995":"1.51","1996":"1.5","1997":"1.44","1998":"1.27","1999":"1.29","2000":"1.43","2001":"1.21","2002":"1.19","2003":"1.09","2004":"1.09","2005":"1.1","2006":"1.11","2007":"1.14","2008":"1.14","2009":"1.08","2010":"1.02","2011":"1.08","2012":"1.18","2013":"1.05","2014":"1.13","2015":"1.1","2016":"1.07","2017":"1.01","2018":"0.98","2019":"0.99","2020":"0.94","2021":"0.96","2022":"0.87","2023":"0.81","2024":"0.83","2025":"0.71","_id":9,"DataSeries":"    Chinese"},{"1960":"6.42","1961":"6.42","1962":"6.63","1963":"6.75","1964":"6.78","1965":"6.31","1966":"6.14","1967":"5.29","1968":"4.52","1969":"3.78","1970":"3.45","1971":"3.25","1972":"3.26","1973":"2.88","1974":"2.46","1975":"2.12","1976":"1.93","1977":"1.87","1978":"1.83","1979":"1.84","1980":"2.2","1981":"2.25","1982":"2.27","1983":"2.21","1984":"2.27","1985":"2.28","1986":"2.22","1987":"2.34","1988":"2.51","1989":"2.62","1990":"2.69","1991":"2.63","1992":"2.61","1993":"2.62","1994":"2.54","1995":"2.51","1996":"2.52","1997":"2.47","1998":"2.48","1999":"2.41","2000":"2.54","2001":"2.45","2002":"2.3","2003":"2.1","2004":"2.07","2005":"2.03","2006":"2.02","2007":"1.94","2008":"1.91","2009":"1.82","2010":"1.65","2011":"1.64","2012":"1.69","2013":"1.66","2014":"1.73","2015":"1.79","2016":"1.8","2017":"1.82","2018":"1.85","2019":"1.8","2020":"1.82","2021":"1.82","2022":"1.83","2023":"1.65","2024":"1.58","2025":"1.53","_id":10,"DataSeries":"    Malays"},{"1960":"7.37","1961":"6.96","1962":"6.96","1963":"6.9","1964":"7.06","1965":"6.69","1966":"6.61","1967":"5.62","1968":"4.77","1969":"4.58","1970":"3.15","1971":"3.14","1972":"3.08","1973":"2.61","1974":"2.3","1975":"1.95","1976":"1.84","1977":"1.7","1978":"1.79","1979":"1.88","1980":"2.03","1981":"1.97","1982":"1.93","1983":"1.83","1984":"1.84","1985":"1.79","1986":"1.73","1987":"1.76","1988":"1.89","1989":"1.92","1990":"1.89","1991":"1.84","1992":"1.9","1993":"1.94","1994":"1.81","1995":"1.71","1996":"1.74","1997":"1.71","1998":"1.68","1999":"1.55","2000":"1.59","2001":"1.51","2002":"1.51","2003":"1.39","2004":"1.34","2005":"1.29","2006":"1.27","2007":"1.25","2008":"1.19","2009":"1.14","2010":"1.13","2011":"1.09","2012":"1.15","2013":"1.11","2014":"1.13","2015":"1.15","2016":"1.04","2017":"1","2018":"1","2019":"0.98","2020":"0.96","2021":"1.05","2022":"1.01","2023":"0.95","2024":"0.91","2025":"0.92","_id":11,"DataSeries":"    Indians"},{"1960":"2.78","1961":"2.63","1962":"2.53","1963":"2.51","1964":"2.42","1965":"2.27","1966":"2.17","1967":"1.91","1968":"1.72","1969":"1.56","1970":"1.49","1971":"1.46","1972":"1.47","1973":"1.35","1974":"1.13","1975":"1","1976":"1.02","1977":"0.88","1978":"0.87","1979":"0.85","1980":"0.88","1981":"0.86","1982":"0.83","1983":"0.77","1984":"0.77","1985":"0.78","1986":"0.69","1987":"0.78","1988":"0.95","1989":"0.85","1990":"0.88","1991":"0.84","1992":"0.83","1993":"0.84","1994":"0.83","1995":"0.8","1996":"0.8","1997":"0.77","1998":"0.72","1999":"0.7","2000":"0.77","2001":"0.68","2002":"0.67","2003":"0.62","2004":"0.61","2005":"0.61","2006":"0.62","2007":"0.62","2008":"0.62","2009":"0.59","2010":"0.56","2011":"0.58","2012":"0.62","2013":"0.57","2014":"0.61","2015":"0.6","2016":"0.58","2017":"0.56","2018":"0.56","2019":"0.56","2020":"0.53","2021":"0.54","2022":"0.5","2023":"0.46","2024":"0.47","2025":"na","_id":12,"DataSeries":"Gross Reproduction Rate"},{"1960":"2.54","1961":"2.41","1962":"2.31","1963":"2.3","1964":"2.22","1965":"2.08","1966":"1.97","1967":"1.75","1968":"1.58","1969":"1.43","1970":"1.42","1971":"1.41","1972":"1.42","1973":"1.3","1974":"1.09","1975":"0.97","1976":"0.98","1977":"0.85","1978":"0.84","1979":"0.82","1980":"0.86","1981":"0.84","1982":"0.82","1983":"0.76","1984":"0.76","1985":"0.76","1986":"0.68","1987":"0.77","1988":"0.93","1989":"0.83","1990":"0.87","1991":"0.83","1992":"0.82","1993":"0.83","1994":"0.82","1995":"0.8","1996":"0.79","1997":"0.77","1998":"0.71","1999":"0.7","2000":"0.76","2001":"0.67","2002":"0.66","2003":"0.61","2004":"0.6","2005":"0.61","2006":"0.61","2007":"0.62","2008":"0.62","2009":"0.59","2010":"0.55","2011":"0.58","2012":"0.62","2013":"0.57","2014":"0.6","2015":"0.6","2016":"0.58","2017":"0.56","2018":"0.55","2019":"0.56","2020":"0.53","2021":"0.54","2022":"0.5","2023":"0.46","2024":"0.47","2025":"na","_id":13,"DataSeries":"Net Reproduction Rate"},{"1960":"37.5","1961":"35.2","1962":"33.7","1963":"33.2","1964":"31.6","1965":"29.5","1966":"28.3","1967":"25.6","1968":"23.5","1969":"21.8","1970":"22.1","1971":"22.3","1972":"23.1","1973":"22","1974":"19.4","1975":"17.7","1976":"18.7","1977":"16.5","1978":"16.8","1979":"17.1","1980":"17.6","1981":"17.6","1982":"17.5","1983":"16.3","1984":"16.5","1985":"16.6","1986":"14.8","1987":"16.6","1988":"19.8","1989":"17.5","1990":"18.2","1991":"17.1","1992":"16.8","1993":"16.8","1994":"16.2","1995":"15.6","1996":"15.2","1997":"14.5","1998":"13.1","1999":"12.8","2000":"13.7","2001":"11.8","2002":"11.4","2003":"10.5","2004":"10.3","2005":"10.2","2006":"10.3","2007":"10.3","2008":"10.2","2009":"9.9","2010":"9.3","2011":"9.5","2012":"10.1","2013":"9.3","2014":"9.8","2015":"9.7","2016":"9.4","2017":"8.9","2018":"8.8","2019":"8.8","2020":"8.5","2021":"8.6","2022":"7.9","2023":"7.4","2024":"7.4","2025":"6.5","_id":14,"DataSeries":"Crude Birth Rate"},{"1960":"61775","1961":"59930","1962":"58977","1963":"59530","1964":"58217","1965":"55725","1966":"54680","1967":"50560","1968":"47241","1969":"44562","1970":"45934","1971":"47088","1972":"49678","1973":"48269","1974":"43268","1975":"39948","1976":"42783","1977":"38364","1978":"39441","1979":"40779","1980":"41217","1981":"42250","1982":"42654","1983":"40585","1984":"41556","1985":"42484","1986":"38379","1987":"43616","1988":"52957","1989":"47669","1990":"51142","1991":"49114","1992":"49402","1993":"50225","1994":"49554","1995":"48635","1996":"48577","1997":"47333","1998":"43664","1999":"43336","2000":"46997","2001":"41451","2002":"40760","2003":"37485","2004":"37174","2005":"37492","2006":"38317","2007":"39490","2008":"39826","2009":"39570","2010":"37967","2011":"39654","2012":"42663","2013":"39720","2014":"42232","2015":"42185","2016":"41251","2017":"39615","2018":"39039","2019":"39279","2020":"38590","2021":"38672","2022":"35605","2023":"33541","2024":"33703","2025":"30004","_id":15,"DataSeries":"Total Live-Births"},{"1960":"na","1961":"na","1962":"na","1963":"na","1964":"na","1965":"na","1966":"na","1967":"na","1968":"na","1969":"na","1970":"na","1971":"na","1972":"na","1973":"na","1974":"na","1975":"na","1976":"na","1977":"na","1978":"na","1979":"na","1980":"40100","1981":"41000","1982":"41300","1983":"39300","1984":"40200","1985":"41100","1986":"37159","1987":"42362","1988":"51537","1989":"46361","1990":"49787","1991":"47805","1992":"47907","1993":"48739","1994":"48075","1995":"46916","1996":"46707","1997":"45356","1998":"41636","1999":"41327","2000":"44765","2001":"39281","2002":"38555","2003":"35474","2004":"35135","2005":"35528","2006":"36272","2007":"37074","2008":"37277","2009":"36925","2010":"35129","2011":"36178","2012":"38641","2013":"35681","2014":"37967","2015":"37861","2016":"36875","2017":"35444","2018":"35040","2019":"35330","2020":"34233","2021":"34183","2022":"32290","2023":"30518","2024":"30808","2025":"27529","_id":16,"DataSeries":"Resident Live-Births"},{"1960":"na","1961":"na","1962":"na","1963":"na","1964":"na","1965":"na","1966":"na","1967":"na","1968":"na","1969":"na","1970":"na","1971":"na","1972":"na","1973":"na","1974":"na","1975":"na","1976":"na","1977":"na","1978":"na","1979":"na","1980":"39600","1981":"40498","1982":"40794","1983":"38768","1984":"39689","1985":"40567","1986":"36630","1987":"41738","1988":"50822","1989":"45623","1990":"48820","1991":"46625","1992":"46477","1993":"47002","1994":"46228","1995":"44992","1996":"44513","1997":"43014","1998":"39214","1999":"38727","2000":"41617","2001":"36402","2002":"35337","2003":"32294","2004":"31694","2005":"31706","2006":"31956","2007":"32361","2008":"32423","2009":"31842","2010":"30131","2011":"30946","2012":"33238","2013":"31017","2014":"33193","2015":"33725","2016":"33167","2017":"32356","2018":"32413","2019":"32844","2020":"31816","2021":"31713","2022":"30429","2023":"28877","2024":"29237","2025":"26201","_id":17,"DataSeries":"Citizen Live-Births"}],"_links":{"start":"/api/action/datastore_search?resource_id=d_e39eeaeadb571c0d0725ef1eec48d166","next":"/api/action/datastore_search?resource_id=d_e39eeaeadb571c0d0725ef1eec48d166&offset=100"},"total":17}}
```


From this dataset, the latest available figures are for 2022:

- **Male** median gross monthly income (excl. employer CPF): **$4,875**
- **Female** median gross monthly income (excl. employer CPF): **$4,333**
- **Average** of the two: **$4,604/month**

Now we can model two scenarios for paid parental leave:

**Scenario A: Paid at median income (for working parents)**

400 days is approximately 13.3 months. So the cost per parent would be:

> **$4,604 x 13.3 months = ~$61,233 per parent**

**Scenario B: Paid at NSF allowance rate (for homemaker/unemployed parents)**

At our $1,085/month average NSF allowance for 24 months:

> **$1,085 x 24 months = $26,040 per parent**

Now let's scale this up to the national level. Using 2025's 30,004 births:

| Scenario | Cost Per Parent | Total Births | Total Annual Cost |
|----------|----------------|-------------|-------------------|
| A: Median income (13.3 months) | $61,233 | 30,004 | ~$1.84B |
| B: NSF allowance (24 months) | $26,040 | 30,004 | ~$0.78B |

## Step 8: Test the Hypothesis

Now for the moment of truth. Let's put the full NS cost side by side with the cost of parental leave:

| | Annual Amount |
|-----|--------|
| **Total NS cost (2025, NSF + reservist)** | **~$2.39B/year** |
| Parental leave cost (Scenario A, median income) | ~$1.84B/year |
| Parental leave cost (Scenario B, NSF rate) | ~$0.78B/year |

Read that again. **We already spend ~$2.39 billion per year on NS personnel costs.** A parental leave scheme at NSF rates (~$780M) would cost roughly **one-third** of what we already spend on NS. Even a more generous scheme at median income (~$1.84B) would still cost **less** than the current annual NS bill.

Now, looking at the "excess" from declining NS cohorts:

> **Peak NS cost (2018): ~$2.74B**
> **Current NS cost (2025): ~$2.39B**
> **Annual savings: ~$350M**

That savings alone covers **45% of Scenario B** (parental leave at NSF rates) or **19% of Scenario A** (at median income). It's not the full amount, but it's a meaningful chunk, not pocket change.

The per-person comparison is even more striking:

| | Cost Per Person |
|-----|----------------|
| Total NS cost per male (lifetime) | ~$114,676 |
| Parental leave at median income (13.3 months) | ~$61,233 |
| Parental leave at NSF rate (24 months) | ~$26,040 |

We pay **$114,676 per male** over their NS career. Paying a parent **$26,040** for 2 years of childcare is less than a quarter of that. Paying them **$61,233** for 13.3 months at median income is still barely half.

## Step 9: So What Did We Learn?

**The hypothesis holds up better than expected once you factor in the full cost of NS.**

When we only looked at NSF allowances, the numbers didn't add up. But NS isn't just NSF allowances. It includes 400 days of reservist make-up pay at civilian salary rates, and that's where the real money is.

**What the numbers tell us:**

1. **The total annual NS personnel cost is ~$2.39B.** That doesn't include operational costs, equipment, facilities, or the broader [$16 billion](https://www.mindef.gov.sg/web/portal/mindef/defence-matters/budget/) defence budget. We're only counting what goes directly to the men who serve.

2. **A parental leave scheme at NSF rates would cost ~$780M/year**, roughly one-third of what we already spend on NS personnel. If we can spend $2.39B on ~250,000 NSFs and reservists, spending $780M on ~30,000 parents is not outrageous.

3. **Per person, parental leave is a fraction of NS costs.** We pay $114,676 per male over their NS career. Paying a parent $26,040 for 24 months of childcare leave is 23% of that. Even at median income, it's 53%.

4. **The cost is self-correcting.** As births decline, the parental leave bill shrinks too. If the scheme actually works and births recover, the additional taxpayers in the next generation will more than pay for the investment.

We found a way to pay $2.39 billion a year for NS because we decided national defence was non-negotiable. If we decide that the next generation is equally non-negotiable, a parental leave scheme costing a third of that is well within reach.

# Final Thoughts

This was an exercise in using publicly available data to test a real-world hypothesis. Whether you agree with the proposal or not, I hope the process was useful. To recap what we did:

1. **Stated a clear hypothesis** we could test with data
2. **Identified the datasets** we needed (births, NS allowances, income)
3. **Extracted and transformed** the raw data into useful numbers
4. **Performed calculations** step by step, showing our work
5. **Looked deeper** when the initial numbers (NSF-only) didn't support the hypothesis, we factored in the full NS cost including reservist, and the picture changed dramatically
6. **Drew broader conclusions** from what the data actually showed us

That's data science in a nutshell. Your first pass might not tell the whole story. Dig deeper, question your assumptions, and let the data guide you.

The numbers are clear: we spend ~$2.39 billion a year paying men to serve NS. A parental leave scheme at NSF rates would cost a third of that. Per person, it's less than a quarter of what we spend on each male over his NS career. The money isn't the barrier. The question is whether we have the political will to treat parenthood with the same seriousness we treat national defence.

Singapore has solved harder problems before. We built a world-class military from scratch with a population smaller than most cities. Surely we can figure out how to pay people to raise the next generation.

## Hear From Engineers Who've Been There

We also sat down with engineers who are navigating parenthood themselves. Here's what they had to say:

<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/16KXPIinH7o"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>

<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/1Ibo2e_uJwM"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>

<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/6hrx6QpWGEo"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
>
</iframe>

---

ragTech is a podcast by Natasha Ann Lum, Saloni Kaur, and Victoria Lo where real people talk about real life in tech. Our mission is to simplify technology and make it accessible to everyone. We believe that tech shouldn't be intimidating, it should be fun, engaging, and easy to understand!

✨ragTech Spotify: [https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d](https://open.spotify.com/show/1KfM9JTWsDQ5QoMYEh489d)

✨ragTech YouTube: [https://www.youtube.com/@ragTechDev](https://www.youtube.com/@ragTechDev)

✨Instagram: [https://instagram.com/ragtechdev](https://instagram.com/ragtechdev)

✨Other Links: [https://linktr.ee/ragtechdev](https://linktr.ee/ragtechdev)
