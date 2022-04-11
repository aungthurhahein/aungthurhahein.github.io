---
title: 'Getting started with YEOMAN web scaffolding'
layout: post
date: 2014-11-23 +0700
tags: [Programming, Guide]
category: [Tech, Programming]
---

### What YEOMAN can do?

Instead of downloading web development frameworks all the time you started a project, It can be done in a few terimal commands.

YEOMAN has *<a href="http://yeoman.io/generators/" target="_blank">generators</a>* ecosystem which automates the process of creating containers and including dependencies for your new projects.

### Installation

I wish you have Node and its package manager. If you don't, please see at <a href="https://www.npmjs.org/" target="_blank">npm</a>

{%highlight bash%}
$ npm install -g yo grunt-cli bower
{%endhighlight%}

Now, things are ready to go. Let's start a simple web applicaiton with it.

### Literally Getting started

To get started a project with YEOMAN, you needs to install a generator of your choice. 

This will install the simple <a href="https://github.com/yeoman/generator-webapp" target="_blank">web-application</a> generator.

{%highlight bash%}
$ npm install -g generator-webapp
{%endhighlight%}

Make a folder and initialize yo like this:
{%highlight bash%}
$ mkdir your_project && cd your_project
$ yo webapp
{%endhighlight%}

Basically,it will set up HTMLBiolerplate, JQuery and Grunt config file. 
For css frameworks, you can choose one framework of your choice (bootstrap, Sass, Modernizr). 

This is how the directory looks like at this stage.
{%highlight bash%}
├── app #your app goes here
│   ├── favicon.ico
│   ├── images
│   ├── index.html
│   ├── robots.txt
│   ├── scripts
│   └── styles
├── bower_components #installed frameworks and components 
│   ├── bootstrap
│   └── jquery
├── bower.json
├── Gruntfile.js
├── package.json
└── test
    ├── bower_components
    ├── bower.json
    ├── index.html
    ├── npm-debug.log
    └── spec
{%endhighlight%}

Well, this is a starting point of YEOMAN and for practical usage, it is necessary to know about bower and Grunt, which I will cover in later blog entries. 


