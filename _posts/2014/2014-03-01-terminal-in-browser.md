---
title: Terminal emulator inside browser 
layout: post
date: 2014-03-01 +0700
tags: [Linux, Browser]
category: [Tech,Apps]
---

For guys who use terminal a lot and guys who just wanna play with new things, this is another thing the first time I try. It's a terminal emulator but in your browser. The clos experience I had is a chrome plugin,which can make SSL & FTP connection. But a terminal...I give it a try and it's working.

### Installation

if you don't have pip client to install python package, 
   
{% highlight bash %}
   sudo apt-get install python-pip 
{% endhighlight %}

Install butterfly afterwards.

{% highlight bash %}
    sudo pip install butterfly #instal 
    butterfly.server.py #launch
{% endhighlight %}

Go to desired browser and open **localhost:57575** and test it out. 

For more information,this is the <a href="https://github.com/paradoxxxzero/butterfly" target="_blank">Butterfly Github Repo</a> and find out more.




