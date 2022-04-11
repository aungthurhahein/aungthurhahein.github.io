---
layout: post
title: What is FIDO and Next Generation Online Authentication
date: 2016-07-15
categories: [Security, Authentication]  
tags: [Authentication, 2FA, FIDO] 
image: 
    path: "/fido_alliance_u2f_usb_authentication_oct_2014-100526155-primary.idge.jpg"
---

## What's wrong with passwords?

Every one might agrees that passwords are difficult. They can be forgotten. They are easy to be revealed by phishing, key-logging and other social engineering attacks. Strong passwords need to have many factors and complex combination to avoid brute-force attacks and dictionary attacks and the main problem is people tends to use easy to get personal information as passwords instead of high complexity passwords that take years of enumeration time to decrypt it.

Traditional authentication process is not reliable anymore and 2nd factor authentication (2FA) and multi-step authentication become a critical protocol to escalate the privacy of user data and organization data. However, 2FA (Tokens, SMS, OTP) protocols are expensive and/or with low User experience and also other protocol specific issues. 

## What is FIDO ? 

To improve the user experience and increase the privacy level and protection level of user data, a new standard is introduced called Fast IDentity Online (FIDO) authentication standard which contains 2 protocols;  Universal Authentication Framework (UAF) & Universal 2nd Factor (U2F). FIDO Alliance is formed by 3 technology and security leaders: Yubico, Google, Paypal, MasterCard & Visa. Let's go to the next section to see what these protocols can do and how it can overcome the issues of 2FA protocols.

## What FIDO protocols can do?

### UAF (Universal Authentication Framework) Protocol

![UAF](/uaf.png)

UAF protocols offer password-less experience to the user by using biometric modalities and USB security key as an easy to use authentication method for web and mobile applications. Compared with traditional authentication protocol, UAF uses biometric multi-authentication through biometric software/hardware devices to log in to the system. The following demo video shows how UAF protocol uses TouchID to log in to the website in few seconds. The advantages over the U2F protocols is that it can avoid social engineering and phishing attacks and other data tampering attacks. The limitation at this time of writing is the support of mobile devices that supports fingerprint scanner and also adoption of the protocol in the majority of the applications. The overview and detailed specifications of the protocol can be found at [FIDO Alliance Specifications Overview](https://fidoalliance.org/specifications/overview/).

[UAF Biometric Login Demo](https://www.youtube.com/watch?v=x90B0dSIepI ) 

### U2F (Universal 2nd Factor) Protocol
<img src="https://cdn-images-1.medium.com/max/1200/1*Pqnu4hdk8MBVmcWu5Gva2A.png">

U2F is multi-factor authentication protocol for existing online applications by adding a strong 2nd factor authentication to strengthen it. The progress of U2F & other 2FA adoption can be seen at [dongleauth](http://www.dongleauth.info/). The user experience of U2F is improved compared with other 2FA protocols because of U2F supported USB key-chains are durable, ready to use and prevent phishing attacks. [Google U2F:Overview](https://docs.google.com/presentation/d/16mB3Nptab1i4-IlFbn6vfkWYk-ozN6j3-fr7JL8XVyA/edit#slide=id.g19c09a112_2_38) is a quick review of U2F protocol presentation slide from Google. It highlights the advantages of U2F protocol over traditional 2FA protocols such as SMS,OTP and Software/Hardware tokens. The video clips shows the demo of U2F log-in procedure using Hypr-3 U2F Bluetooth Dongle.

[HYPR Biometric FIDO U2F and OTP Token](https://www.youtube.com/watch?v=mIRjkeYGvjQ)

### Thoughts and Progress

FIDO Protocols are still in the early stage but it shows potential to solve security issues for data-sensitive applications,especially in financial domain. There are several open-source implementation of the protocol that can be a starting point for implementors and developers;

* [eBay Implementation of UAF Server/Client demo](https://github.com/eBay/UAF)
* [Google U2F Reference Implementation](https://github.com/google/u2f-ref-code)
* [An open-source FIDO Certified U2F server](http://www.cryptocabinet.org/products/foss)
* [Yubico Python U2F Server Implementation](https://github.com/Yubico/python-u2flib-server)
* [Yubico Python U2F Host Implementation](https://github.com/Yubico/python-u2flib-host)

