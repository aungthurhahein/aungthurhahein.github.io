---
layout: post
title: Penetration Testing - Business Logic Test
date: 2019-03-30 +0700
categories: [Security, Application Testing]    
tags: [Security, Development]
pin: false
--- 


## A state of Mind

Unlike other  penetration testing techniques, business logic testing gives a headache to most beginner testers. This is an a testing area that the testers with application mind can find a way in better than professionals comes from network & system background. This post is not a “know-how” techniques of how to exploit the web application.  This is more of ideas that what the developers might do wrong in their application design, forgotten security requirements and implementation issues.

## Mythical MitM
MitM attacks or attempts is something developers think it is not gonna occurs. Nobody will try to intercept this communicational channels. The communication channel is secure and it’s good enough.  All of these assumptions are not correct. 

Even though the name applies “middle”,  it is more of the attackers pretends to be either sender or receiver and the attack surface is not in the “middle”.  So, it is important to understand all sensitive information and API calls need to be comprehended by the attackers using simple proxy tool by setting up as ad-hoc connection.  

I discovered several vulnerabilities that causes by abusing the application functions due to limited security measures set to back-end API calls.

## Encryption is only for passwords 
Encryption/ decryption is to ensure the message is confidential during the data-in-transit and data-at-rest.  It supposes to exercise on all sort of “secrets”, not only for passwords. The examples of secrets can be credit card information, user identity, credit card data, and any sensitive information. For e.g., the payment function transfer money from user 1 to user 2, it is important to encrypt the user id that attackers can’t decode easily.   

## Payment gateway is secure Myth
Payment gateway API process the payment made by your application end user but it is important to make sure that the credit card information, the payee and payer information need to be encoded to increase the obfuscation that the attacker can’t digest easily. Just by hijacking the session and modifying the payee information can make a lot of issues to your application payment and its business.

## There is no Cookie Monster
HTTP cookie lets you keep information in your end-user device.  The general idea is to ensure PII and credentials are not exposed and all information needs to encrypt.  If your application uses TLS/SSL to encrypt data in transmit, do implement your cookie information to secure as well via secure flag and HttpOnly. Otherwise, the monster will find a way to eat your cookies.  If the attackers can bypass your authentication scheme, the business impact is critical.    

## Attackers don’t forget passwords

There is no such standard to implement “Forget Password” function. However, it is required to design a balance between user experience and security. If it’s too easy to request passwords by just knowing the email address of user name, the attackers likely to mess around by bully requesting passwords of a victim. By combining  end-user personal information plus public information or out-of-bound authentication makes things a lot safer and the attacker is not likely to guess your first girlfriend name. :D

## Sum up
As for the penetration testers without development background, it sounds like a guess work. The way to think is to identify business logic issues is to predict the “security debt” and functional flaws made by the programmers.  
I hope this write-up helps. As for the testing methods and more tips, OWASP testing guideline is a good starting point.
