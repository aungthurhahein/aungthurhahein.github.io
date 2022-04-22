---
layout: post
title: Thoughts on DevSecOps
date: 2018-10-01 +0700
categories: [Security, DevSecOps]    
tags: [Security, Development]
image:
    path: "/devsecops.png"
--- 

## Background

It is important to know about "DevOps" culture before starting to understand "DevSecOps". The reason behind this is that DevOps is an underlying building block of DevSecOps which brings the attribute of speed, precision and automation. The core principles of DevOps is to deliver software faster and more reliable by designing automated integration and delivery pipeline with collaboration of **Development** and **Operation** team. Even with reliable process and technology, people plays a critical part to adopt DevOps mindset and culture.

The need for **Security** in the DevOps pipeline itself and the developing software brings security aspect of software development and the term **DevSecOps** is born. The nature of Security is allergic reaction to Dev team and Ops team which makes it a big burden to interoperable in SDLC process. 

## DevSecOps = Secure DevOps?

The Short answer is Yes. 

The idea of Developer centric approach is essential to implement DevSecOps program by adopting security tools/process focus on developers, not the conventional security testing process. Choose the tools that developers can work within their development environment. Choose the process that operation team can integrate with CI/CD chain and enjoy automating security testing. 

When we say **Left-Shift** testing approach, we are implying 2 objectives; testing as early as possible and mitigating vulnerabilities continuously throughout Development. By testing as early development stage, stubborn vulnerabilities are mitigated and the effort is less than fixing during testing phase or deployment phase. There might be some people thinking how about we fix it all at 1 point. 100% secure software is impossible and it is important to brings justification on security risk assessment and prioritization. Continuous Security Monitoring is required to compensate residual risks and zero vulnerabilities. 

## Who is Security Champion?

A new DevSecOps team in your organization needs a hero called Security Champion. He/She is top-notch developer with security in mind. He/She has a strong desire and mission to "secure all applications" motto. Security champion can talk developers language and also can communicate with security brokers and he/she knows when to raise the issues. This role also involves promoting the security awareness and secure coding practices to all developers. 

In my opinion, this is one important model that management should prioritize when forming a DevSecOps team. At the end of the day, DevSecOps culture is the main drive that will keep the entire DevSecOps process effectively.

## Everyone is security engineer

Security team controls the security posture of the applications is not working anymore. Everyone needs to become aware of their security responsibilities. To order to fulfill the skills gap and security knowledge, the security professional should introduce development team about secure software development, vulnerabilities that lies in open source components, understanding of the security issues & remediation guideline, security testing solutions in DevSecOps. On the other hand, security professionals should learn new skills to collaborate with development team, fundamental knowledge of software development, consulting and understanding of the issues from developer perspective.

## What about AppSec Pipeline?

OWASP AppSec Pipeline adopts the principles of DevOps into application security program. There is some articles that mentions DevSecOps is the next generation of AppSec Pipeline. In my opinion, I believe AppSec pipeline is still a suitable program for organizations that want to decrease complexity of DevOps pipeline and segregation of duty between Development/Operation and Security. 


## Outro

This is a just a fragment of thoughts on DevSecOps on some common questions that I am having. Continuous learning is a key for developing skills and knowledge that everyone in the DevSecOps team can practice to build a world class software development program. [OWASP DevSecOps Studio](https://www.owasp.org/index.php/OWASP_DevSecOps_Studio_Project) is a good starting point for people who wants to dive in to learn DevSecOps concepts right away.