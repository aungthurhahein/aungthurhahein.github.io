---
title: 'Linux configuration files cheatsheet'
layout: post
date: 2014-10-27 13:58:31 +0700
tags: [Linux, System Internal]
category: [Tech, Guide]
---

Unlike Windows operating system registry, Linux configuration is based on text files and standardization becomes an issue. For normal users or system administrators, there are several configuration files which are essential to know. The following listing describes these files with purposes.

This is the list of most of the directories in modern Linux systems with general description of them. Among these directories,I will extract important directories to dig deep into configuration files.

### Directories
There are all directories you might find in your Linux system. The best way to explorer is by using a tool called 'tree'.

#### Install Tree
{%highlight bash%}
$sudo apt-get install tree #install it
$ cd / #go to root
$ tree -d -L 2 #list dir tree into 2 level
{%endhighlight%}

#### LinuxSystem Directories
{%highlight bash%}
/ #the starting point of Linux file system
/bin/ #executable file paths.anaglous to path variables of Windows
/boot/ #boot loader location
/dev/ #device files;you will never need to touch it
/etc/ # applicaiton configuration files
/home/ #user file system starts from here with seperate containers
/lib/ # kernel modules and shared libs
/lost+found/ #recovery files for system unexpected shutdown
/media/ #mount location of removeable devices
/mnt/ #mount point for file systems(local/network)
/opt/ #stands for optional. includes third party application such as JRE, JDK, codec, etc...
/proc/ #stands for process. informaiton about running process via pid
/root/ # home directory for root users
/run/ #tmpfs mount point
/sbin/ # one important foldersfor system admins that contains iptables,ifconfig,swapfiles..etc
/srv/ # stands for services.includes system service specific files
/sys/ # virtual file system which includes modification of physical devices
/tmp/ # temporary files with current system session
/usr/ #more second-tier executable programs,libraries and games
/var/ #stands for variables. itc contains various type of user specific contents and specifications

{%endhighlight%}

## To Be Continue...


