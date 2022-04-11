---
title: Remote debugging with Chrome
layout: post
date: 2014-06-01 +0700
tags: [Chrome, Google, Browser]
category: [Tech, Programming]
---

#### Chrome 35
There are several changes in the newest release of Google Chrome browser. Most of the people are talking about notification center, Google Now integration and so on. For linux people, they are interested about new graphic engine called <a href="https://sites.google.com/a/chromium.org/dev/developers/design-documents/aura/aura-overview" target="_blank">Aura</a>. It's intersting but I am not gonna list down all new features introduce at Chrome 35.Let's get down to what this blog is about.

#### Remote Debugging
What I am interesting is about remote debugging through your mobile devices through chrome browser. The questions I pop up when I am reading about that feature is that it is gonna work like it said,what about the limitation and what are the provided functonalities. This is gonna be a huge change for developers since it can change the way coders handle with multiple devices.

#### Effects on web development

Until this point,the only way I apply when implementing a responsive website is by checking a tool like Dimensions, which is a useful chrome extension. However,I never think of remote debugging the web dev project directly through the mobile devices. What I like about this chrome remote debugging capability is that the configuration and setup is super easy and straightforward. Just spend 5 mins on the documentaion and go for it. Screencasting and port forwarding features just the functionalities what you will need. Ok. I will continue about the setup overview and walkthorough of it in next section.

#### Requirements

1. Chrome on your pc with ver.> 35
2. Chrome on android with ver.> 35
3. turn on usb 'debugging mode' on your android
	* If android ver>4.2, press 'Build number' x 7 times to turn on 'developer options'
	* if you don't know the location of 'Build number', figure out yourself
4. Connect it with usb cable and go to **chrome://inspect** at your PC's chrome browser
5. Tick 'Discover USB Devices' option and you should see your device list down under it.

#### Features
After you succed in connecting your devices with Chrome, you can debug the website on your mobile. Screencasting feature is quite awesome. It make your life easier by mirroring the display on your pc's browser. Now,you can inspect,debug and work on it. Another feature is called port forwarding. It's for your local project to view it on the mobile. The details about features and functionalities can be found at <a href="https://developer.chrome.com/devtools/docs/remote-debugging#setting-up-device"> offical documentation</a>.  

#### Conclusion
In my humble opinion, I never tried it at beta stage before. The funcationalities and features of this version is quite stable and working well. For more information, this is a good <a href="http://www.html5rocks.com/en/tutorials/developertools/mobile/">article</a> by Paul Irish, whom is a developer of chromium project, HTML5 boilerplate and so on. In this article, it also talks about mobile emulation and user agent switching from more than webkits. 
