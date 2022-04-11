---
title: Reply to > "Core Difference between Firefox's and Chrome's private browsing mode"
layout: post
date: 2014-10-14 +0700
tags: [Google Chrome, Browser, Private Browsing]
category: [Tech, Guide]
---

I am researching on private browsing mode in terms of forensic study and analysis. Yesterday,I ran into one <a href="http://www.ghacks.net/2014/10/13/a-core-difference-between-firefoxs-and-chromes-private-browsing-mode/" target="_blank">article</a> about difference between private browsing mode of Mozilla Firefox and Google Chrome.

I made some feedbacks on this article as a conversation style. Some of the points will be controversial. The purpose of this blog is to fill in some insights on this particular topic. So, end-users and other interested parties can make good judgments on it.


>Most modern browsers ship with a private browsing mode that can be started independently from the main browsing session. It prevents the recording of history information in the browser so that information about the private browsing session cannot be retrieved once the window has been closed.

Not most browsers. All five major browsers (Safari,Chrome,Firefox,Opera,Internet Explorer) have private browsing mode. The first one is Safari browser introduced by Apple at 2005. Basically, private browsing mode is sufficient for normal users to prevent their browsing activities. However, there are several proposed research that can recover the browsing records from private browsing session. To sum up, Internet Explorer left digital artifacts at persistent storage and the rests can be found in persistent storage or volatile data or both.

>While it is certainly possible to achieve the same goal manually without that mode, for instance by clearing the history, cookies and cache files selectively to erase traces, it is comfortable to use and not as time-consuming.

Private browsing is easy to use but it is not possible to say the private browsing mode is equivalent to normal browsing mode plus clearing history,cookie and cache. The process flow and mechanism used in both modes are not the same. The browser vendors don't provide these information because of security reasons but according to the existing academic forensic study, it is difficult to say the data security level of these browsing modes are the same.

>All private browsing modes work in a similar way. They spawn in a new browser window which is independent from the main session. Users can open tabs in the window and access as many sites as they want.

According to this <a href ="http://crypto.stanford.edu/~dabo/pubs/papers/privatebrowsing.pdf" target=_blank>study</a>, the data accessibility between public browsing mode and private browsing mode is not the same among different browsers. Chrome browser is the best browser  in terms of security practices. Google introduces browser <a href="http://blog.chromium.org/2008/10/new-approach-to-browser-security-Google.html">sandboxing</a> at 2008. (I am not sure about other browsers.Please fill me on this.). Another protocol that makes Google and Firefox special is <a href="https://code.google.com/p/google-safe-browsing/wiki/Protocolv2Spec">safebrowsing</a>. Generally,it checks all URLs and downloads against the database to see possible security violation and according to the result, ResourceRequester handles the permissions of OS resource requests.

> There is however a difference between how Firefox's private browsing and Chrome's incognito mode function.

Yes. It is.

>If you are using Chrome's incognito mode, you may have noticed that you cannot restore a closed tab in that mode. Not every user requires that functionality but if ?you happen to use the mode a lot, you may have encountered situations where you closed a tab only to come to a point later on where you needed to re-open it in the browser. That's not possible however and if you cannot remember the address or the site you opened it from, you are out of luck and cannot open it again.

It is more like UI interaction difference than the core functionality ones. From the point of view from end-user,what you said is right but difficult to agree that this difference reflects the private browsing behavior of Firefox and Chrome.

>And Firefox? Firefox handles private browsing windows as their own instances. This means that you can re-open closed tabs when you are using Firefox's private browsing mode. To do so either use Ctrl-Shift-t or right-click on the tab bar and select the undo close tab option from the context menu.

Due to sandbox security, Chrome runs each tab as separate instances no matter it is in normal or private browsing mode. From a quick <a href ="https://wiki.mozilla.org/Sandbox#Sandboxing_Firefox" target="_blank">duckduckgoing</a>, the similar security concept applies to Firefox like you said. However,I am not sure how it is related to browser running as its own instances.

>Side note: Opera handles this the same way as Google Chrome, likely because it is also based on Chromium, while Microsoft's Internet Explorer the same way as Firefox.

Yes. Opera adopts Chromium components such as blink,v8...like everything except the UI engine. IE and Firefox might have the same feature,'can reopen the closed tab at private browsing mode'. The implementation of these two browsers is like 99% different. 

>You may wonder why the implementation differs when it comes to the undoing of tabs in private browsing. There does not appear to be an official answer for that but the most likely explanation is that Firefox and Internet Explorer handle the information on the window level while Chromium-based browsers on a tab level instead.

I don't understand the term you used *'tab level'* and *'window level'*. 

>Are you using a private browsing mode? Which implementation makes more sense to you?

IMO, the private browsing mode should not allowed to open closed tab. It beats the purpose of it since private browsing mode try to erase all the traces left on host machine. If the tab can re-open it, it means that it is most likely on persistent storage rather than on volatile storage. I *might* be wrong but that's the only explanation I can find. 


