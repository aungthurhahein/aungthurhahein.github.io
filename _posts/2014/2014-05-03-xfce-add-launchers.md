---
title: How to add XFCE custom application launcher
layout: post
date: 2014-05-03 +0700
tags: [Linux, XFCE]
category: [Tech, Guide]
---

Now, my choice of desktop environment for Linux production machine is xfce. I am stuck at making new custom launcher because it is missing in my whisker menu somehow. 

For guys who having same problem, this is the command to get create launcher wizard for xfce. 

{%highlight bash%}
$ gksu -l 'exo-desktop-item-edit --create-new /usr/share/applications/'
{%endhighlight%}



