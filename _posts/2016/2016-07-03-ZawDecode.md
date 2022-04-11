---
layout: post
title: ZawDecode - Potential & Ad-hoc Review
date: 2016-07-03
category: [Tech,Myanmar]
tags: [Font, Standard]
---

Back to previous blog [post](http://aungthurhahein.github.io/Language-with-digital-writing-standarization-issue/) on the issues with Burmese digital writing fonts standard, people are still pointing fingers and a fool-proof solution is far away to settle on either Zawgyi or else. A friend shares me a Facebook [post](https://www.facebook.com/photo.php?fbid=10153591402942328&set=a.445551197327.239848.564487327&type=3&theater) about a new font, **Pyidaungsu Zaw Decode**, that created by a [researcher](https://www.facebook.com/kosuntun) who is working at [Myanmar Unicode & NLP Research Center](http://www-myanmarnlp-net-mm.blogspot.com/). The font promises to render both Unicode and Zawgyi fonts and it seems to have a high potential to tackle the issue. The following is download URLs for True Type font and Android APK executables. 
 
* [TFF](TTF: https://www.mediafire.com/?nturabcvtbnq25d) 
* [APK](https://www.mediafire.com/?824r27l5wm69aoz) 

This blog is to review and evaluate the potential of this font whether it can solve this issue. I am aware that it's still in production stage which might encounters font rendering issue.

### Installation

Installing TTF font can be done easily with default font installer of the targeted platform (Windows,Mac & Linux distros). However, it is a bit tedious for Android system. First of all, the phone needs to have a root privilege to change default system font. The second consideration is to switch font after installing the APK file using Android Font changer app. I use [iFont](https://play.google.com/store/apps/details?id=com.kapp.ifont) that works fine and can restore to Factory Font with just a click. Go to MyInstall for custom installation of ZawDecode Font and the app restarts the system to switch to the new font. 

![iFont to install third-party fonts](/zawdecode_install.png)

### Is it work?

I uses the [web page]() that contains first section for Zawgyi font and second section for Unicode font to evaluate the correctness of rendering both Zawgyi and Unicode font. The web page shows that Zawgyi font rendering is not 100% correct but Unicode rendering is almost perfect with some incorrect rendering, which can be seen at the below figure. Typing Burmese with this font also gives an incorrect output with common Burmese android keyboards like [FrozenKeyboard 2](https://play.google.com/store/apps/details?id=ninja.thiha.frozenkeyboard2). 

A question rises that this point is that "Does this font needs a specific supported keyboard to type either Zawgyi or Unicode?". Another question that needs to clarify is that "Is it only to decode either Zawgyi or Unicode without consideration of writing/typing?" 

I am aware that this is still in the early stage of development and the development teams can fix these issues to make it compatible with both Zawgyi and Unicode in the near future. I am just an enthusiast to solve this issue in the near future because it can drag down the advancement of technology in most aspects especially in digitalization and telecommunication.

![Comparison of Zawdecode rendering](/zawdecode_compare.png)

