---
layout: post
title: CloudReady ChromeOS Review
date: 2016-02-25 +0700
categories: [Tech, Guide]    
tags: [Google Chrome, Operating System]
image: 
    path: http://www.drbill.tv/images/CloudReady.png

---

## What is CloudRead ChomeOS?

At this point, I belive you heard a thing or two about <a href="https://www.wikiwand.com/en/Chrome_OS" target="_blank">ChromeOS</a> or <a href="https://www.google.com/chromebook/" target="_blank">Chromebook</a>. It's a lightweight operating system from Google that centered on Chrome browser with web apps. Recently, a company called <a href="http://www.neverware.com/" target="_blank">neverware</a> releases CloudReady ChromeOS based on Google Chrominum OS project. The difference with existing ChromeOS alternatives such as <a href="http://getchrome.eu/" target="_blank">Cr OS</a> is that CloudReady ChromeOS is not based on Linux distro with ChromeOS like WM/DE. 

## Installation

Installation is pretty straightforward and this <a href="http://www.neverware.com/installation"> manual</a> provides detailed options. 
I prepared bootable media with my 16GB kingston thumb-drive using Chrome Recover Tools. It took around  10-15 minutes to prepare the bootable media. After that, reboot and switch boot device to thumb-drive and the CloudReady ChromeOS is ready to roll.

## First Impressions

Everthing works pretty smooth with my Asus K45V laptop and Dell Inspiron-3847. Sound, Wifi and bluetooth are working well. Both PCs run on Intel architecture and for ARM architecture, it is still need to research and test out to find out the poential issues. After signed in with Google account, it started syncing my Chrome preferences, web apps and plug-ins within a couple minutes. My thumb-drive is pretty slow and I believe that data I/O will be a lot better for USB 3.0 thumb-drive. 

If the user like to install on HDD of the system, it provides 2 options; standalone installation and dual-boot installation. Standalone installation wipes out the entire harddisk and install CloudReady ChromeOS. As for dual-boot installation, it only works for PC with windows operating system with <a href="http://www.uefi.org/" target="_blank">UEFI</a> boot mode. My Asus laptop has 3 OS installed; Win 10, Ubuntu 14.04 LTS with Kali Linux. The attempt to install ends up with an error message. So, there is no option for Linux users to side-boot this OS. Check this dual-boot [requirement](http://www.neverware.com/installation#installnotes) page to see detailed instructions.

## Reasons to try

This is good for users who are thinking about buying chromebook as secondary PC. You can evaluate the capability of OS and to decide whether it can fulfill your needs. Also, it is the best option for people who own aged system with low performance. Users who tried to install [crouton](https://github.com/dnschneid/crouton) have [issues](https://github.com/dnschneid/crouton/issues/2196) but 1 user said there is a way to solve it. Dennis Lockhart [compiles](https://drive.google.com/file/d/0B7fJGoH3F0qDNHotclhWWlNMMVk/view) crouton to work well with Chrominum OS which I will give a try soon. If it's working nicely with crouton, this OS gonna be a perfect alternative of chromeOS.

## Room for improvements
The following listing is issues that need to improve for Cloudready beta version 4.5:

* Shutting down is slow and not responsive. The screen turns black and gives no output of the process. 
* It needs advanced users option to dual-boot this OS along side with other operating system.
* Supports of crouton for PCs with hardware capability of running Linux apps.

That's it for now. If you haven't tried it yet, you should try this OS as a pocket personal OS or a primary OS for your old legacy PC. Cheers!

More info:

* [Giving old computers a newlife:Neverware](https://www.youtube.com/watch?v=Ovwj0Wr9gS8)
* [Walkthrough installation video](https://www.youtube.com/watch?v=5Lt3kmGfJM8)
* [Neverware commnity page](https://neverware.zendesk.com/hc/en-us)