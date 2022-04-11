---
title: Clean uninstall packages with debfoster tool
layout: post
date: 2014-02-11 18:12:49 +0700
tags: [Linux]
category: [Tech, Guide]
---

One problem that can leave your system unstable is dependencies or orphaned packages leaving after you uninstall a package.

This problem  can be solved by installing a tool called **debfoster**. It tracks what you have installed and ask you to uninstall dependencies files when you uninstalled a program. 

{% highlight bash%}
//install
sudo apt-get install debfoster

//help
sudo debfoster --help

//create initial keeper
sudo debfoster -q

//system to conform to keeper
sudo debfoster -f

//check orphaned/dependencies files
sudo debfoster

{% endhighlight %}

More information: <a href="http://ubuntuforums.org/showthread.php?t=24403" target="_blank">using debfoster in practice</a>
