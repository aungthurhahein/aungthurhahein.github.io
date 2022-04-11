---
title: 'Reset login password of ubuntu system'
layout: post
date: 2014-12-15 21:56:03
tags: [Linux, Ubuntu]
category: [Tech, Guide]
---

For some stupid reason, I updated one server password and forget to note down and restart the system. Then, the headache begins....

At first, I am not so worried that I knew we can <a href="http://www.ubuntulinuxguide.com/reset-root-password-ubuntu/">reset password</a> from 'Drop to root shell prompt' through recovery mode. However, my system doesn't come up recovery menu. It shows me to type the root password but don't give me enough time to type the whole password. (Weird!)

By googling a bit, run into this <a hre="http://askubuntu.com/questions/326528/how-to-boot-to-the-recovery-mode-if-it-is-not-listed-in-grub#326553">post</a>, which suggests me to edit the boot command manually to get recovery menu. At this time, it gives me enough time to type my root password and reset login password. 

**Don't forget to set root password of your ubuntu and its variants' system.** Because if there is no root password, someone who has access to your physical machine can reset the password in 2 minutes. It's easy to set up root password. Look at the following command:

{%highlight bash%}

#set up root password

sudo passwd root

#Enter your password (sudo user password)

{%endhighlight%}
