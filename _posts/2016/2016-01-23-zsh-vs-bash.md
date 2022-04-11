---
layout: post
title: Why zsh?
date: 2016-01-23
categories: [Tech, Guide]    
tags: [Linux, Tools]
image:
    path: "https://camo.githubusercontent.com/5c385f15f3eaedb72cfcfbbaf75355b700ac0757/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6f686d797a73682f6f682d6d792d7a73682d6c6f676f2e706e67"
---

I've been using bash as primary shell since I started using Linux. It's ok. Don't bother looking for a better solution until I ran into this blog post about <a href="http://code.joejag.com/2014/why-zsh.html">My favourite zsh features</a>. TLDR people? Watch this <a href="https://www.youtube.com/watch?v=1S3MUVIAieE">Getting Started with ZSH (and oh my zshell) on Ubuntu</a> from the same author of the blog post.

It seems pretty good for interactive tasks and that auto completion feature is a dope. 
So,I decided to give a try.

### Installation
For Debian system, just install it with aptitude tool by

```
sudo apt-get install zsh
```

Details of installing *zsh* can be seen at <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH">Installing ZSH</a>.

To replace the default shell to zsh, there are several ways to do it. However, I recommend installing *oh-my-zsh* and switching shell is done automatically.

### Oh-my-zsh
<a href="https://github.com/robbyrussell/oh-my-zsh">oh-my-zsh</a> is an extension of zsh shell, which provides <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/Themes">themes</a> and <a href="https://github.com/robbyrussell/oh-my-zsh/wiki/plug-ins">plug-ins</a>. 

#### Installation 
 It can be installed using wget or curl by

```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

OR 

```
sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```

If you encounter an authentication problem, it can be solved by downloading the *install.sh* file first and install it manually.


#### Features

So far, it's quite similar to bash with additional features. It's quite easy to adapt for bash users.
For coders, I think zsh is a better option than bash. Check out this <a href="https://www.youtube.com/watch?v=csJV1exZAjA">LevelTutsPlus</a> youtube clip about how themes and plug-ins can help developers to aid at cmd tasks.

From my a week long experience with zsh, The following points can be made:

- It's fancy and looks better than bash.
- plug-ins are helpful but too much plug-ins make the shell slow down.
- Developer related plug-ins are really intuitive and working nicely.
- Error prompting and giving feedbacks and predicted actions make it friendly.
- Opening files and some actions are slightly slower than bash. It might be the drawbacks of oh-my-zsh plug-ins.
- I am still exploring the usage of zsh features from this <a href="https://www-s.acm.illinois.edu/workshops/zsh/why.html">Zsh features</a>.

So, try it and I kinda believe that you will fall in love with it in no time.
Cheers!

#### Additional reading:

- <a href="http://hyperpolyglot.org/unix-shells">Unix Shells </a>
- <a href="http://wikimatze.de/better-zsh-with-prezto">Better zsh with Prezto</a>
