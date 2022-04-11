---
title: Ubuntu Proxy Config
layout: post
date: 2014-10-24 +0700
tags: [Linux, Proxy]
category: [Tech, Guide]
---

This is just a one-liner note to set up proxy for Ubuntu with authentication Setting up proxy at browser doesn't affect terminal applicaitons such as aptitute package and so on. Also, system wide proxy requies you to touch network configuration like iptables. There are two easiest way to do.

There are 2 main files you should set up proxy:
{%highlight bash%}
 /etc/apt/apt/apt.conf #Acquire::
 /home/user/.bashrc #export 
{%endhighlight%}

For apt.conf,use vim, gedit or nano to open the file and add the proxy for each network protocols in the following format:

{%highlight bash%}
Acquire::http::proxy "http://username:password@proxy.server:port";
Acquire::https::proxy "http://username:password@proxy.server:port";
Acquire::ftp::proxy "http://username:password@proxy.server:port";
{%endhighlight%}

Alternative way is to put the following command in to .bashrc profile.

{%highlight bash%}
export http_proxy=http://username:password@proxy.server:port
export https_proxy=http://username:password@proxy.server:port
export ftp_proxy=http://username:password@proxy.server:port
{%endhighlight%}

Plain passwords in file is bad idea but this is the most straightforward methond with no headache. 




