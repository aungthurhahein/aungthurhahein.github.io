---
title: Simple Terminal process alert
layout: post
date: 2014-08-07 +0700
tags: [Linux, Tools]
category: [Tech, Programming]
---

For people who are working with terminal all the time, you runs pipeline and tasks and you don't know whethere it's finished or not. This small trick will alert you.

{%highlight bash%}
#step1: install espeak
$sudo apt-get install espeak

#step2: try 
espeak "Hello World"

#step3: create several alias to reuse for different alert messages
#success process
alias sp='espeak "process finished successfully"'
#fail process
alias fp='espeak "process failed"'

#example usage

 #!/bin/bash
 if [ "foo" = "foo" ]; then
    echo expression evaluated as true
    sp
 else
    echo expression evaluated as false
    fp
 fi

 {%endhighlight%}
