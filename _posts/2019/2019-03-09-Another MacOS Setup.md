---
layout: post
title: Another MacOS Setup
date: 2019-03-09 +0700
categories: [Tech,MacOS]
tags: [productivity]
image: 
    path: "/macos_setup.jpg"
    width: 400
    height: 400
--- 

### Intro

If you are a new Mac user and looking for a list of MacOS apps to install, this piece might help you into doing that. It is not an easy job to find the best of the best tools out there that will help your job. After I bought my first MacBook, I spent sometime looking on internet setting up their MacOS and I didn’t find a general article of the essential apps that I normally use and it triggers me to write this blog piece and the tools are just a selection based on my preferences.

### Initial Cleanup

After the initial setup, MacBook comes with pre-loaded softwares. Some of them are useful for me such as Garage Band and you can remove it easily to safe up storage. One thing to notice when uninstalling Mac apps is that the applications can remove easily by deleting it, however the resources file are orphaned in the file system.  Using App Uninstaller or CleanMyMac do a good job cleaning up these leftover files.  

The next step is go to “System Preferences” and play around and change the look and feel as you want. Setting up iCloud and App Store gives some weird errors for me. Just restart the machine and give it a try. It works.

There are some people having battery draining issue in macOS Mojave and it requires terminal to resolve and verify this issue. Find details at  [How to Fix macOS Mojave Battery Draining Issue - AppleToolBox](https://appletoolbox.com/2018/10/how-to-fix-macos-mojave-battery-draining-issue/).

Follow this principle on charging MacBook: **“Charge when it below 20% while using it and unplug it at 95% and Repeat.”** The small menu app ”battery monitor” can give you notification.  

### What Accessories to get?

* A hard cover and a fabric or leather bag (optional)
* 2 adapters if you have 2 thunder ports (New MacBook Pro 2018 or MacBook Air 2018);

	* A USB C to VGA/HDMI combo adapter
	* A USB C to 4 or 5 USB 3 ports

* If you only have 1 thunder port 3, get a USB hub that has 4 USB 3 ports with HDMI plus USB C port for charging.  It seems crazy but you can find a cheap one at Alixpress. 

### Secure the OS

If you are comfortable with terminal, use [GitHub - alichtman/stronghold: Easily configure macOS security settings from the terminal.](https://github.com/alichtman/stronghold)  to tune security configuration of your MacBook.  

Another way is to  set up manually by doing these things:

	* Turn on Firewall
	* Turn FileVault on 
	* Install reliable Antivirus software
	* Change General Settings from Security & Privacy

Investing  a few bucks on reliable antivirus and malware remover is a good idea to prevent known and unknown attacks and ransomware.

### General Utility Tools

The following utility tools are free and quite handy in general.  I believe that everyone will need it sooner or later.

	* iTerm2
	* HomeBrew and Cakebrew 
	* Vim (via brew install)
	* Nmap (via brew install)
	* Htop (via brew install)
	* Wget (via brew install)
	* Bash completion (via brew install)
	* Clipy
	* Microsoft Desktop Remote
	* Battery Monitor
	* The Unarchiver
	* CleanMyMacX (Commercial)
	* Folx

### Office & Productivity Tools

	* Microsoft Office 365 (Commercial)
	* Bear (Markdown editor). I am using this app for writing blog and any markdown text.
	* Sublime Text 3
	* Fantastical 2 (Commercial)
	* itsycal (calendar menu app)
	* Adobe Lightroom (Commercial)
	* iBooks Author 

### Safari Extensions

Safari is not my go-to browser but I decided to use instead of Chrome on my Macbook due to its battery efficiency. There are not a lot of Safari extensions to choose from but the following plugins improve privacy and UX of safari;

	* Ghostery Lite
	* LastPass or 1Pass
	* Instapaper or Pocket
	* Folx

Chrome is a lot faster than Safari and it has intensive plugins. However, the resource consumption of Chrome is higher than Safari which leads to more battery drainage.

### Development & Information Security professionals

These are just optional tools for Developers / InfoSec guys: 

	* Wireshark
	* Burp Suite
	* Postman
	* Docker with Kali Container
	* VMWare Fusion or Parallels  Desktop with Kali VM 
	* SmartGit (Some prefers Tower Git Client)

### References for exploring more from other like minded ppl
The following 2 URls give a much more broad list of tools and tips for you to get started with your new MacBook.

* [GitHub - iCHAIT/awesome-macOS:  A curated list of awesome applications, softwares, tools and shiny things for macOS.](https://github.com/iCHAIT/awesome-macOS)
* [my-mac-os/README.md at master · nikitavoloboev/my-mac-os · GitHub](https://github.com/nikitavoloboev/my-mac-os/blob/master/README.md)

