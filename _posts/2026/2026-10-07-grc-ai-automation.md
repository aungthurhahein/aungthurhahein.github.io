---
title: AI and automation in GRC operations. Drafts are fine. Sign-off is not.
author: aung
date: 2026-10-07 10:00:00 +0700
categories: [CyberSecurity]
tags: [GRC, AI, compliance]
math: false
mermaid: false
---

GRC AI used to mean a chatbot that redrafted a policy paragraph. Now the pitch is that agents collect evidence, map controls, fill questionnaires and watch for drift. Some of that is real. But the part that still fails quietly is the same part that failed in SOC copilots: treating a fluent draft as a finished judgment.

That difference matters to me. GRC work sits next to audit opinions, risk acceptances and regulatory attestations. A wrong KQL query wastes money. A wrong control mapping can put a signature on something that was never true.

[NIST SP 1353 ipd](https://csrc.nist.gov/pubs/sp/1353/ipd) (draft quick-start guide, Aug 2026, comments open through 15 Oct) shows the useful shape: AI-assisted CSF analysis and reporting, with prompts that produce draft profiles and gap notes, and with explicit precautions marked in the guide. Drafts. Not assurance.

## What AI can safely take over

Evidence collection. Pulling screenshots, config exports, ticket IDs and SIEM query results into a case folder. Tagging which control they are meant to support. The model does not invent the artifact. It indexes what you already have.

Control mapping. First-pass mapping of your existing controls to [ISO/IEC 27001:2022](https://www.iso.org/standard/27001) Annex A themes, or to [NIST CSF 2.0](https://www.nist.gov/cyberframework) outcomes, with a citation back to the source control statement. Useful as a draft for a human to correct. Useless as a certificate of coverage.

Vendor security questionnaires. First drafts that pull answers from a maintained evidence library. Every answer must point to a named document and an owner. Blank fields should stay blank, not get filled with confident prose.

Policy gap checks. Diffing a policy set against a target framework, listing missing topics and stale owners. Again: a punch list, not a pass or fail.

Continuous control monitoring. Ranking signals that a control may have drifted, such as a failed backup job, an expired certificate, or a privileged account without a recent review. The agent proposes an exception candidate. A person opens or closes it.

In all of these, "safe" means three things. The output is labeled a draft. Every claim cites a retrieval source the human can open. Nothing closes, accepts or attests.

## What still needs a named human

Risk acceptance. Who owns the residual risk, for how long, and under which conditions. That is a business decision with a name on it.

Audit opinions and assessments. An internal or external auditor's conclusion about design and operating effectiveness. The AI can assemble the binder. It cannot sign the opinion.

Exceptions and waivers. Temporary deviations from policy. These need an owner, an expiry and a compensating control. An agent that auto-grants exceptions is an agent with excessive agency, in the sense [OWASP](https://genai.owasp.org/llm-top-10/) (LLM Top 10 for LLM Applications 2025) flags under LLM06.

Regulatory attestations. Statements to a regulator, a board, a customer or an insurer that specific controls are in place. In Thailand, that includes security-measure and breach-notification duties under the [PDPA](https://www.pdpc.or.th/) (Personal Data Protection Act B.E. 2562). Personal data inside evidence packs is not a free prompt. Paste carefully, or better, do not paste into a public tool at all.

## Four failure modes

1. Hallucinated evidence. The model invents a ticket number, a screenshot caption or a control ID that looks right. [NIST AI 600-1](https://doi.org/10.6028/NIST.AI.600-1) (Generative AI Profile, Jul 2024) calls this confabulation: confidently stated but erroneous content. In GRC, confabulated evidence is worse than a missing control. It looks like proof.

2. No audit trail. If I cannot replay which model, which prompt, which retrieved documents and which human edits produced the final mapping, I cannot defend it in an audit. Chat that vanishes with a session is not a workpaper.

3. Data leakage into AI tools. Evidence packs hold configs, architecture notes, employee data and sometimes subscriber-adjacent records. OWASP LLM02 (sensitive information disclosure) and NIST AI 600-1's data-privacy risks both apply. Public chat interfaces and unvetted plugins are the common path.

4. Accountability drift. The team starts treating the model's first answer as the answer. OWASP LLM09 (misinformation) and LLM05 (improper output handling) describe the same pattern from different ends: fluent wrongness, and systems that trust the output without validation.

## What I would demand before wider use

- Every AI-assisted artifact stored with the prompt, the retrieved sources, the model identity and version, and the human who accepted or rejected it, linked to the control or case.
- Evidence libraries that the model can retrieve from, not free-form invention. If the source is missing, the answer is "unknown."
- Scope limits: allowed frameworks, allowed document classes, no customer or personal-data fields in prompts by default.
- Human approval for anything that accepts risk, grants an exception, closes a finding or feeds an attestation.
- Red-team the drafts: plant a fake control ID and see whether the pipeline notices.
- A named owner for the AI workflow itself, the same way a control has an owner.

## Three things to watch

1. Whether vendors ship GRC agents that auto-close findings or only draft them. Drafts I can use. Auto-close I will not.
2. Where the evidence goes for inference. On-prem or private-tenant models change the PDPA and confidentiality math. Public endpoints do not.
3. Whether NIST's CSF AI quick-start (SP 1353) and similar guides stay honest about drafts versus assurance. The comment period on that draft closes 15 Oct 2026. The framing is worth watching as it hardens.

AI belongs in GRC the way it belongs in the SOC: as a fast junior that files, maps and drafts, under a senior who still signs. The operating model is simple. Collect with machines. Decide with names.
