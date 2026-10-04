---
title: SOC AI has reached the logs. Mostly, it writes the query.
author: aung
date: 2026-10-04 22:00:00 +0700
categories: [CyberSecurity]
tags: [SOC, AI]
math: false
mermaid: false
---

SOC AI used to mean alert triage: summarise the alert, suggest a verdict. Now the pitch is that agents work directly on logs and telemetry. Some of that is real. But at carrier scale, "works on logs" still mostly means "writes a query that a person or a platform runs on data already indexed."

That difference matters to me. Telecom telemetry is not a tidy SIEM table. It is flow, DNS and signaling, at volumes where one careless query costs real money and touches subscriber data.

[Software Analyst Cyber Research](https://softwareanalyst.substack.com/p/the-three-platform-shifts-reshaping) (industry commentary, 1 Oct 2026) describes the first wave as copilots that summarise alerts and write queries, and the next as agents owning more of the lifecycle. How much of that next wave exists yet?

## What is real today

Summarisation, enrichment and ranking work. Drafting KQL or SPL for an analyst to check and run on an indexed SIEM works. Bounded "ask the case" questions work: what did this host talk to?

Microsoft's Threat Hunting Assistant in Defender advanced hunting ([Microsoft Learn](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-security-copilot-threat-hunting-assistant), vendor) takes a plain-English question. It checks which tables you have, reads their schemas, including custom Sentinel tables, writes KQL, runs it automatically and returns the query with the results. Microsoft announced it as the Threat Hunting Agent in November 2025 ([Microsoft blog](https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/security-copilot-for-soc-bringing-agentic-ai-to-every-defender/4470187), vendor). Real execution, on indexed data with a readable schema.

Splunk AI Assistant 2.0 Agent Mode ([Splunk blog, 13 Apr 2026](https://www.splunk.com/en_us/blog/platform/meet-your-new-agentic-teammate-with-splunk-ai-assistant-2-0.html), vendor) breaks a prompt into tool calls such as event scans and searches. Before a search runs, the user must approve or deny it. Agent Mode stays off until an admin enables it. Limiting the assistant to Splunk-hosted models disables Agent Mode.

Prophet Security's integration with ExtraHop RevealX ([Prophet blog, 1 Jun 2026](https://www.prophetsecurity.ai/blog/network-context-for-the-agentic-soc-prophet-security-and-extrahop), vendor) lets its agent pull network telemetry during investigations. Its Threat Hunter turns natural-language hunts into ExtraHop record-search API calls. Prophet says it updates the ExtraHop detection status once it reaches a determination. That is a closure claim. The post gives no volume or accuracy figures.

## What is still a demo at carrier scale

An agent that hunts on its own across raw flow, DNS and signaling, chains tools, and closes findings. I have not seen it shown at carrier volume. Three things block it. Volume. Schema drift across vendors and network generations. Missing asset context: in a carrier network, an IP is often a subscriber, a partner interconnect, or a shared NAT, not a host with an owner.

The research is more candid. [SherAgent](https://arxiv.org/abs/2607.09176) (independent preprint) constrains the LLM to fill predefined SQL templates over ClickHouse provenance logs, filters the results, and re-queries to rebuild the attack chain. The authors report a production deployment in a large internet company's SOC, with spot-checked success above 96%. But the data is endpoint provenance, not network signaling. Most remaining failures came from logs past retention (61.8%) and noisy query results (33.8%). The unconstrained LLM baseline it replaced produced reports that looked successful but failed human verification.

[APTInvestBench](https://arxiv.org/abs/2609.38954) (independent preprint) gives agents read-only search over endpoint, network and application logs (16.4 million records across 370 cases) and requires record-level citations. Across eleven models, agents acquired sufficient evidence for 44.3% of recoverable attack actions on average. Their formal citations supported 25.0% of recoverable attack actions. The logs are synthetic reconstructions, not production data.

## Four failure modes

1. Hallucinated queries. Wrong table, wrong field, valid syntax. An empty result gets read as "nothing happened."
2. Scope that leaks. An agent pivoting on an indicator can pull subscriber records or partner traffic the case never needed. The model does not know our privacy and partner boundaries unless we encode them.
3. One investigation becomes a huge scan. A loose time window or an unfiltered join over flow data turns a question into a full scan. SherAgent constrains query scope for this reason.
4. No replay. For an incident record I need the exact query, the data it touched and the model output, kept together. Chat history that vanishes with a new session is not evidence.

## What I would demand before auto-run

- Every query stored with its result set and the model output, linked to the case.
- Scope and cost limits enforced by the platform, not the prompt: time window, row cap, allowed tables.
- Subscriber-identifying fields excluded or masked by default.
- Read-only, investigation-scoped credentials with a named owner.
- Human approval for anything that closes, suppresses or changes a detection.
- Results on our own past incidents before wider rollout.

## Three things to watch in the next six months

1. Human-approved versus auto-run. Microsoft runs the query automatically. Splunk waits for approval. Watch which default wins, and whether approval stays meaningful at volume.
2. What telemetry enters the model, and where inference runs. Splunk's trade-off between Splunk-hosted models and Agent Mode is the shape of the question for every vendor. For a carrier, signaling and subscriber data leaving the environment is not a settings detail.
3. Evaluation on my own detections, not a vendor bench. [Detection Engineering Weekly #169](https://www.detectionengineering.net/p/dew-169-realistic-ai-soc-evaluation) (industry commentary, 3 Sep 2026) featured an end-to-end intrusion eval where five of seven frontier models with Splunk API access marked the initial alert benign or false positive. I want that kind of test, run on our historical cases, before I trust any accuracy figure.
