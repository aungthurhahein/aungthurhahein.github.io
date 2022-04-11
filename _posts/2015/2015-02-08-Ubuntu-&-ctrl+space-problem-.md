---
layout: post
title: "Ubuntu 14 & Ctrl+Space problem"
date: 2015-02-08 +0700
tags: [Linux, Programming]
category: [Tech, Guide]
---

As the tile gives a hint, ctrl+space shortcut is not working system wide on my Ubuntu 14.04 LTS with cinnamon DE. I noticed while I was started using LightTable IDE. I asked to INTERNET people and they are giving me some thoughts. Today, I am memorizing shortcuts of Pycharms and realized that ctrl+space is not workig at Pycharms too. Waitt.. After duckduckgoing about this issue, I found a solution to fix it. The problem is that <a href="https://help.ubuntu.com/community/ibus" target="_blank">ibus</a> default triggger hotkey is ctrl+space and it is interrupting. 

To solve this issue, the easiest way it to remove or edit the shortcut of ibus through dconf-editor. If you don't have it, install from terminal as the following:

{%highlight bash%}
# sudo apt-get install dconf-editor
{%endhighlight%}

Open dconf-editor and go to desktop>ibus>hotkey and remove triggers value and leave it as "[]" or set a new suitable shortcut.

That's it and ctrl+space will be working for all applications.



