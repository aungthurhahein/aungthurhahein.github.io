---
title: "All essential shortcuts for vim"
layout: post
date: 2014-11-07 10:10:13 +0700
tags: [Vim, Tools]
category: [Tech, Guide]
image:
    path: "/Screen Shot 2022-04-11 at 2.40.50 PM.png"
    width: 400
    height: 400
---

This is a list of key combinations and essential shortcuts to use vim text editor. The contents are arranged accoring to the word processing steps. Vim is one useful text editor to learn because there are several vim shortcut plugins available for other popular text editors. For e.g, Sublime Text has vim mode editing package called *Vintage Mode*.

Relater resource: <a href="http://vimsheet.com/" target="_blank">Vim Cheatsheet</a>

## Cursor Movement

{%highlight bash%}
 h	move cursor left
 j	move cursor down
 k	move cursor up
 l	move cursor right
 w	jump forwards to the start of a word
 W	jump forwards to the start of a word (words can contain punctuation)
 e	jump forwards to the end of a word
 E	jump forwards to the end of a word (words can contain punctuation)
 b	jump backwards to the start of a word
 B	jump backwards to the start of a word (words can contain punctuation)
 0	jump to the start of the line
 ^	jump to the first non-blank character of the line
 $	jump to the end of the line
 G	go to the last line of the document
 5G	go to line 5
{%endhighlight%}

##Insert mode - inserting/appending text

{%highlight bash%}
 i	insert before the cursor
 I	insert at the beginning of the line
 a	insert (append) after the cursor
 A	insert (append) at the end of the line
 o	append (open) a new line below the current line
 O	append (open) a new line above the current line
 ea	insert (append) at the end of the word
 Esc	exit insert mode
{%endhighlight%}

##Editing

{%highlight bash%}
 i	insert before the cursor
 r	replace a single character
 J	join line below to the current one
 cc	change (replace) entire line
 cw	change (replace) to the end of the word
 c$	change (replace) to the end of the line
 s	delete character and substitute text
 S	delete line and substitute text (same as cc)
 xp	transpose two letters (delete and paste)
 u	undo
 Ctrl+r	redo
 .     repeat last command
{%endhighlight%}

## Cut and paste

{%highlight bash%}
 yy	yank (copy) a line
 2yy	yank (copy) 2 lines
 yw	yank (copy) word
 y$	yank (copy) to end of line
 p	put (paste) the clipboard after cursor
 P	put (paste) before cursor
 dd	delete (cut) a line
 2dd	delete (cut) 2 lines
 dw	delete (cut) word
 D	delete (cut) to the end of the line
 d$	delete (cut) to the end of the line
 x	delete (cut) character
{%endhighlight%}

## Exiting

{%highlight bash%}
 :w	write (save) the file, but don't exit
 :wq	write (save) and quit
 :x	write (save) and quit
 :q	quit (fails if there are unsaved changes)
 :q!	quit and throw away unsaved changes
{%endhighlight%}

## Search and replace

{%highlight bash%}
 /pattern	search for pattern
 ?pattern	search backward for pattern
 n		repeat search in same direction
 N		repeat search in opposite direction
 :%s/old/new/g	replace all old with new throughout file
 :%s/old/new/gc	replace all old with new throughout file with confirmations
{%endhighlight%}

## Working with multiple files

{%highlight bash%}
:e filename	edit a file in a new buffer
:bnext 		go to the next buffer
:bn	
:bprev 		go to the previous buffer
:bp	
:bd		delete a buffer (close a file)
:sp filename	open a file in a new buffer and split window
:vsp filename	open a file in a new buffer and vertically split window
Ctrl+ws		split window
Ctrl+ww		switch windows
Ctrl+wq		quit a window
Ctrl+wv		split window vertically
Ctrl+wh		move cursor to next buffer (right)
Ctrl+wl		move cursor to previous buffer (left)
{%endhighlight%}

## Tabs

{%highlight bash%}
:tabnew		filename
:tabn filename	open a file in a new tab
Ctrl+wt		move the current split window into its own tab
gt 		move to the next tab
:tabnext 
:tabn	
gT 		move to the previous tab
:tabprev 
:tabp	
#gt	        move to tab number #
:tabmove #	move current tab to the #th position (indexed from 0)
:tabclose	close the current tab and all its windows 
:tabc	
:tabonly 
:tabo		close all tabs except for the current one
{%endhighlight%}
