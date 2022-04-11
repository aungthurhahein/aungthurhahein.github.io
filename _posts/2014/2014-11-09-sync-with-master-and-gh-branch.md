---
title: 'Git sync with master and gh-branch '
layout: post
date: 2014-11-09 21:42:50 +0700
tags: [Programming,Tools]
category: [Tech, Programming]
image: 
    path: "https://fleep.io/blog/wp-content/uploads/2014/07/github_icon.png"
    width: 200
    height: 200
---

This is just a git flow to recall when I am working with gh-pages and master branches. 

Either you are working on gh-pages directly because I don't want to bother trying to sync master branch with gh-pages all the time when I push commits.
This is the normal flow of pushing commit from local branch.

{%highlight bash%}
$ git branch
$ git status
$ git add -A
$ git commit -m 'commit msg'
$ git push origin gh-pages
{%endhighlight%}

Let's say after a milestone or a version, gh-pages should update with master branches. *rebase* plays a big role in this part.

{%highlight bash%}
#switch to master branch
$ git checkout master
$ git rebase master
$ git push origin master
#back to gh-pages branch
$ git checkout gh-pages
{%endhighlight%}

