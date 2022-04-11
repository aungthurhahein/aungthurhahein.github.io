---
layout: post
title: "Get Bio-Linux packages on Ubuntu 14.04"
date: 2015-01-20 +0700
tags: [Linux, Data Analytics,DNA Sequencing]
category: [Tech, Guide]
---

In case you don't know about bio-linux,it's a Linux distro based on Ubuntu with around 250 of <a href="http://environmentalomics.org/bio-linux-software-list/" target="_blank"> bioinformatics packages</a> included. You can download iso file to install or also able to get software packages through ppa.

The small problem is that the <a href="http://nebc.nerc.ac.uk/nebc_website_frozen/nebc.nerc.ac.uk//tools/bio-linux-7/other-bl-docs/package-repository" target="_blank">guideline</a> to install packages for pre-existing is outdated (only for Ubuntu 12.04 LTS). 

After checking the ppa channel at launchpad, I found out you can install to your trusty system with slight changes as the following:

* Step 1:
Add the following three source to **/etc/apt/sources.list**

{%highlight bash%}
deb http://nebc.nerc.ac.uk/bio-linux/ unstable bio-linux
deb http://ppa.launchpad.net/nebc/bio-linux/ubuntu trusty main
deb-src http://ppa.launchpad.net/nebc/bio-linux/ubuntu trusty main
{%endhighlight%}

* step 2:
Get the key ring

{%highlight bash%}
$ sudo apt-get update && sudo apt-get install bio-linux-keyring
{%endhighlight%}

* step 3:
Install any packages through synaptic packages managers 
OR

{%highlight bash%}
$ sudo dpkg -i bio-linux-<packagename>
{%endhighlight%}


