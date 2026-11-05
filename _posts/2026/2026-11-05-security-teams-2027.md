---
title: "Security Teams in 2027: What's Gone, What's New, What Stays"
description: "How security teams change in 2027: which roles fade, which grow (agent oversight, AI governance, identity), what stays human, and how strategy should shift."
author: aung
date: 2026-11-05 22:20:00 +0700
categories: [CyberSecurity]
tags: [security-teams, strategy, AI, careers, governance, identity]
math: false
mermaid: false
image:
  path: /assets/img/posts/security-teams-2027-org.webp
  alt: "How a security team's org chart could shift from 2026 to 2027 (illustrative example)"
---

My [last post](https://aung.tech/posts/soc-attention-2027/) was about the SOC and what attackers will do in 2027. This one zooms out to the whole security function: what the team looks like next year, and what its strategy should be built around.

I have sat in a few chairs: developer, security engineer, red teamer, blue team analyst, and now leading a SOC. 2026 is the first year I can see the whole org chart shifting at once.

![Two side-by-side org charts titled "How the security team changes: 2026 → 2027" for Example Bank (APAC), illustrative, labelled as an illustrative example, not a real organisation. In both years the CISO sits at the top, with dashed reporting lines to the CRO / Board Risk Committee and to regulator reporting, and five teams below: Security Operations Centre, Security Engineering, GRC / Technology Risk, Identity & Access, and Application / Cloud Security. In 2026, fading roles are shown as grey, struck-through text: manual first-pass triage and the report compiler in the SOC, single-tool admins in Engineering, and compliance as an island in GRC, while identity is still an IT admin job. In 2027, two new teams report to the CISO: AI Security & Governance, and Security Platform & Product Owners. The SOC gains agent supervisors, Level-0 AI triage with human review, and detection-as-code engineers. Identity gains identity security architects for humans and machines. GRC shifts to automated control monitoring and faster regulator answers, and Engineering to deep product skill with config as code. Both years keep judgement, incident command and risk communication as human work. A closing caption notes the shift: outcomes over headcount and tool count, broader T-shaped roles, security moving up and sideways, and regulation shaping the org chart; smaller in the queue, wider at the top.](/assets/img/posts/security-teams-2027-org.webp)
_How a security team's org chart could shift from 2026 to 2027, shown with an illustrative APAC bank example: roles that fade, roles that are new, and the human work that stays._

*Disclaimer: Example Bank is fictional. This chart is not based on any actual company. It only illustrates how a security team's structure might look before and after the shift.*

## Skills, not seats

The clearest signal in this year's data is that the problem has changed shape. The [2025 ISC2 Cybersecurity Workforce Study](https://www.isc2.org/Insights/2025/12/2025-ISC2-Cybersecurity-Workforce-Study) found that skills needs now outweigh headcount needs: 59% of respondents reported critical or significant skills needs, up from 44% the year before. AI topped the list of skills needed, ahead of cloud security.

[ISACA's State of Cybersecurity 2026](https://www.isaca.org/about-us/newsroom/press-releases/2026/only-8-percent-of-organizations-global-enterprises-conduct-regular-ai-specific-response-exercises) points the same way from another angle. 51% of respondents are now involved in developing or implementing AI, yet only 8% of organisations run AI-specific incident exercises regularly, and LLM SecOps is now the second-largest skills gap respondents see, behind soft skills.

So the question for 2027 is not **"how many people do we need?"** It is **"which work should people still be doing, and do they have the skills for it?"**

## What is fading

These are fading as *jobs*. The work is being absorbed into tooling or folded into broader roles.

**Manual first-pass triage as a full-time job.** A role defined as "look at the alert, decide if it's real" is the easiest work to automate. Staffing for it as a career is staffing for 2022.

That is where the so-called Level-0 analyst comes in: AI triages every alert first, and human analysts step in as reviewers at a set point instead of doing the first pass themselves.

**The report compiler.** Someone who spends the week pulling numbers from five consoles into a slide deck. Models and dashboards do the pulling now. What nobody automates is deciding which number matters and saying so in a sentence a CFO will read.

**The single-tool admin.** "Our firewall person", "our SIEM person". Platforms are consolidating and configuration is moving into code. Deep product knowledge still matters. A role whose whole value is one console's menus does not.

**Compliance as a separate island.** GRC that only collects evidence once a year is being squeezed from both sides: automated control monitoring below, and regulators who want faster answers above. [Gartner's 2026 trends](https://www.gartner.com/en/articles/top-cybersecurity-trends-2026) point to incident reporting deadlines "sometimes within 24 hours". That does not work with a spreadsheet-driven audit cycle. (I wrote more on what AI can and can't take over in GRC [here](https://aung.tech/posts/grc-ai-automation/).)

## What is new

**People who supervise agents.** People who decide what an agent may touch, sample its work, notice drift, and own it when it breaks. [CISA and international partners' joint guide on agentic AI](https://www.cisa.gov/news-events/news/cisa-us-and-international-partners-release-guide-secure-adoption-agentic-ai) (May 2026) lists the risks plainly: expanded attack surface, privilege creep, behavioural misalignment and obscure event records.

**AI security and governance.** This is becoming a real function, not a side task. The [WEF Global Cybersecurity Outlook 2026](https://www.weforum.org/publications/global-cybersecurity-outlook-2026) found the share of organisations assessing the security of AI tools nearly doubled, from 37% to 64%. Someone has to do that assessment and answer the regulator.

**Identity security architects, for humans and machines.** Gartner's June 2026 Security & Risk Management Summit keynote [described identity](https://www.gartner.com/en/newsroom/press-releases/2026-06-01-gartner-identifies-strategic-focus-areas-for-cisos-to-seize-moments-of-opportunity-among-ai-chaos) as having shifted from a background control to core digital infrastructure, and predicted that by 2028, 25% of breaches will come through agent-based attack surfaces because of weak machine identities and missing context-aware policy. The WEF report lists identity and access management specialists among the three roles in shortest supply. Identity used to be an IT admin job. In 2027 it is an architecture job.

**Detection-as-code engineers.** Detections written, tested, reviewed and versioned like software. As a former developer, I find this the most natural change on the list, and it makes detection quality something you can measure instead of taking on trust.

**Security platform and product owners.** With fewer tools, more automation and some agents, someone has to run the security stack like a product: roadmap, internal users, backlog, cost line.

## What stays

**Judgement.** A model can rank a hundred findings. It cannot tell you which one the business can live with this quarter.

**Incident command.** When something real is happening, someone has to make calls with half the facts, coordinate legal, comms and engineering, and own the outcome. That person is not an agent.

**Risk communication.** The ISACA data says soft skills are still the biggest gap, with critical thinking and communication at the top. The hard part is rarely finding the risk. It is getting the right person to understand it in time.

## How strategy shifts

**Outcomes over headcount and tool count.** Headcount and tool count were never a strategy, and with automation they mislead. I would rather report how fast we contain, how much of our critical estate we actually see, and how many risks have a named owner and a date.

**Broader roles, not just more of them.** ISC2 respondents expect AI to create *both* more specialised and broader skillsets. I read that as T-shaped people: deep in one area, fluent across identity, cloud, data and AI.

**Security moves up, and sideways.** CISO reporting lines are shifting, but unevenly. [Heidrick & Struggles](https://www.heidrick.com/en/insights/cybersecurity/2025-global-chief-information-security-officer-compensation-survey) found 42% of the CISOs it surveyed in the US and Europe reporting to the CEO, while the IANS benchmark cited by [CSO Online](https://www.csoonline.com/article/4136293/its-time-to-rethink-ciso-reporting-lines.html) still has 64% reporting into IT. Either way, Gartner sees the CISO remit expanding into AI and resilience, led through influence rather than owning every task.

**Regulation shapes the org chart.** In Europe, the [AI Omnibus](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force) pushed most high-risk AI obligations back to 2 December 2027 (August 2028 for AI built into regulated products). Closer to home, Thailand's [draft Cybersecurity Act amendment](https://www.bakermckenzie.com/en/insight/publications/2026/08/thailand-draft-amendment-to-the-cybersecurity-act) would make critical infrastructure organisations oversee their external service providers, including cloud, software and AI services, with a possible blacklist for providers who don't comply. It is still a draft. If it passes, third-party security becomes ongoing work that needs a team.

## If you lead a security team

- Map the work, not the roles. List what your team actually does each week, then mark what is automated, what should be, and what must stay human.
- Give every AI workflow and every machine identity a named owner before you give it more scope.
- Reskill before you restructure. The people doing first-pass triage today know your environment better than any new hire. Move them toward detection engineering, identity or AI assurance.
- Change what you report upward: outcomes and owned risks, not tool counts.
- Run one AI-specific incident exercise before mid-2027. In the ISACA survey, 64% had never run one.

## If you are building a career

- Learn enough code to treat detections and policy as code.
- Get deep on identity: human, service account, API key, agent.
- Learn how AI systems fail, not just how to use them.
- Practise explaining risk in two sentences to someone who doesn't care about security.
- Don't attach your identity to one tool. Attach it to a problem you can solve.

Programming skill helps in any security role. It trains you to think logically, in steps other people can follow, because you have watched your own logic actually run in a tool you built. That holds even in this vibe-coding era.

The security team of 2027 will probably be smaller in the queue and wider at the top. The work that remains is the work that needs a name on it. Plan for that.
