---
title: "NFS vs CIFS vs Samba"
layout: post
date: 2013-10-31 +0700
tags:  [Network,System]
category: [Tech, Guide]
---

Well...It's another random thing I am working on. 

As you may or may not know, the size of the DNA raw sequence is quite huge. It's at least 1 GB and some files are around 25 GB. When I am pre-processing these data-sets, it generates more files which are at least 3x bigger than the original file. What happen is that I run out of storage in sever even though it still has like 80 GB free space left. However, that's not enough for a 25 GB sra file to split into single-ended file.  

So,my supervisor told me to map a network storage or find a solution to solve.  

Ok.I did some light research about Network File Sharing within a local closed network. My idea is to setup a file shared server. In this way,backing up data becomes easier and my collagues can share the files.

I am quite sure I got a lecture about this but I might be sleepy or day-dreaming or brain-dump period or just simply dumb to remember easily.

Here is the recap of these three network sharing technology.

#### Network File Sharing (NFS)

It's the distributed file system protocol usually used in Unix Operating System. NFS dameon is runnning in server sites and configure the list of export folders. After that,install the client package to get access to the network share. It's effictive for large files and for permanent setup. 

####  Common Internet File System (CIFS)
It works on application layer network protocol and also known as Server Message Block (SMB). Micorsoft Windows Network share uses this protocol and Samba is an implemantion of CIFS to work along in Unix system.

#### Samba
<a href="http://www.samba.org/" target="_blank">Samba</a> is an open-source project to share resources among windows and linux mixed-network.
