---
title: InfoStealer Malware & How to AVOID them
author: aung
date: 2022-11-25 11:45:00 +0700
categories: [Security, Threat]
tags: [InfoStealer, CyberSecurity, Threat]
math: false
mermaid: false
image:
  path: /infosteal1.png
  width: 800
  height: 500
pin: true
---

A recent [report](https://www.notion.so/303ab17315304c0fb62b044b368132ee) from Group-IB describes that Russian hackers have **stolen over 50 millions passwords in the first 7 months of 2022** using info stealer malware**.** The evolution and development of Information Stealer Malware in 2022 is intrusive and there are many variants of infoStealer malware targeting from mobile to desktop operating systems. This is still a prominent threat in upcoming years and this post is a study of infoStealer malware capability and common observed characteristics for remediation and awareness of it.

![Group-IB Report](/infosteal2.png)

# What is Information Stealer Malware?

The goal of InfoStealer malware is to exfiltrate user sensitive information such as access credentials,  financial information and Personal Identifiable Information (PII) from user mobile and desktop devices. Based on the success and the scope of the attack campaign, some of these infoStealer malware are more popular than others such as *Raccoon* Stealer and *Redline* Stealer. 

Even though the implementation of these malware is varied, the initial attack vector and distribution of malware lies on  Social Engineering techniques. Phishing Attacks are surprisingly still effective way to compromise devices and use of legitimate software with side-loaded malware capability is also another approaches used by adversaries. 

# OK..Where does the stolen INFORMATION go?

The end-user who is compromised by InfoStealer are unlikely to face any service disruption and irregularity in the devices they are using.  The exfiltrated stolen information goes to sale on underground marketplace and [access brokers](https://www.crowdstrike.com/blog/access-brokers-targets-and-worth/) and the potential buyers can be indiviaul attackers to ransomware group. That depends on the value of the information such as type of accounts and systems that can access with the leaked credentials.   For people who would like to understand more of the “traffers” ecosystem, I recommend to read a post from [Sekoia](https://blog.sekoia.io/traffers-a-deep-dive-into-the-information-stealer-ecosystem/).

The recent breach on [Uber](https://www.uber.com/newsroom/security-update/) is a good fresh example of how a simple account leak ends up into a publicized major incident that costs huge damage to the organization. 

# InfoStealer Malware Ecosystem

The generic attack flow used by InfoStealer Malware is pretty simple. The initial attack vector is targeted to individuals via social engineering techniques with some innovative approaches to side-load and deploy the actual malware into the devices. Afterwards, the harvesting of information can target from web browser sessions to chat messages and forward it back to attacker collection servers. After data processing and a database of stolen records, it is listed to auction or sale to multiple buyers at underground markets. 

![InfoStealer Malware Attack Flow Simplified](/infosteal3.png)
_InfoStealer Malware Attack Flow Simplified_

The impact of this stolen information differs from the uses of the buyers and its motives. If the buyer is the ransomware operator and credentials can access to privileged systems and environment of a major enterprise organization, the business can be devastated like Uber incident. 

# What Individuals can do to PREVENT it?

At organization level, this is one of the threats focus to remediate by security team, however individuals need to understand the depth of the risk and how it can impact greatly to organization wide. The prevention of the security team cannot go beyond organization network and user own devices and it is a big challenge and privacy concerns to monitor and provision personal devices. 

From the study of the stealers, the primary targeted platform is **Windows** and **Android** Operating Systems.  There is a trend of hijacking browser session and logging login credentials of users keystroke by manipulating [javascript](https://blogs.jpcert.or.jp/en/2021/07/water_pamola.html) input escalates the threat to another level.

The following is some of the tips to minimize the threats of InfoStealer:

- THINK twice before you enter your credentials and sensitive information request from unfamiliar web sites.
- Don’t CLICK anything on emails with unknown subjects and sender.
- Don’t REUSE passwords, especially the ones for financial services and high-privileged accounts for Enterprise Infra Access such as VPN and PAM accounts.
- STOP using softwares and mobile apps from illegitimate app repositories.
- Use Egress network filtering to capture and block unknown traffic.
- If possible, use Segeration of devices for personal and cooperate use.
- Pause and think before you allow photo editor app requesting for SMS message read permission.

To sum up, this is observed as one of the biggest threat in this year and upcoming year(s). Organization security teams are fighting this threat to remediate. However, individuals need to aware of the threats can lead to a disaster not only for yourself, but also to the organization you are attributed to.