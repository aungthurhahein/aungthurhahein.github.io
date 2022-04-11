---
layout: post
title: "LightTable Keymaps"
date: 2015-02-08 +0700
tags: Programming
category: [Tech, Apps]
image: 
    path: "http://docs.lighttable.com/images/start/wsmenu.png"
---

I've been looking for a list of shortcut for Lighttable IDE and to make some custom keymaps for my personal preferences. I can't find list of default key combinations easily. 

This is the list of some essential keymaps from default.keymap file of Lighttable. 

{%highlight bash%}
#app
ctrl-shift-f	search-box
ctrl-space	commands
ctrl-shift-n	New Windows
ctrl-shift-o 	open file
ctrl--		zoom out
ctrl-n		new file
ctrl-shift-d	search docs
ctrl-o		search files
ctrl-=		zoom in

#browser tab
ctrl-r		refresh browser tab
ctrl-l		browser url focus
enter		browser url bar navigate

#editor
ctrl-enter	inline evaluation
ctrl-d		view docs 
ctrl-,		unjump
ctrl-.		jump
ctrl-shift-s	save file as
ctrl-l		goto-line
ctrl-shift-enter eval-editor
ctrl-+	fold-code
ctrl-s	save file

#tabs
cltr+ number	jump to tab in number position
ctrl+shift+[	previous tab
ctrl+shift+]	next tab
ctrl-w		tab close

{%endhighlight%}

To make a custom user keymap, ctrl-space will popup commands panel and search "Settings:user keymap" and add your keymap on that file.

The following is the list of the keymaps I created recently:

{%highlight bash%}
 [:editor "alt-w" :editor.watch.watch-selection]
 [:editor "alt-shift-w" :editor.watch.unwatch]
 [:editor "ctrl-/" :comment-selection]
 [:editor "ctrl-." :uncomment-selection]
 [:editor "ctrl-alt-o" :workspace.show]
 [:editor "shift-tab" :unindent-selection]
 [:editor "ctrl-space" :auto-complete]
 [:app "ctrl-shift-c" :toggle-console]
{%endhighlight%}


