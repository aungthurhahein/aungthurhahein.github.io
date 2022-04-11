---
title: "Terminal Audio Players"
layout: post
date: 2014-12-06 16:50:42 +0700
image: 
    path: "https://cmus.github.io/cmus-2.4.3-osx.png"
tags: [Linux, Programming]
category: [Tech, Apps]
---

This weekends, I am wondering about possibility of playing music from Terminal when you are working at remote computer. I ran into 2 solutions to do that. It is nice to see that there are tons of pre-exisitng applications for **terminal workers**.

### <a href="http://www.wikiwand.com/en/SoX" target="_blank">SOX</a>

It stands for Sound eXchange and it's a application for sound processing. It is capable of converting music format from one to another.  Also,you can use it as a simple terminal music player. 

To play music with SOX, just need to know a bit about wildcards and terminal knowledge. To exit SOX, press Cltr-C. If you queue multiple songs with asterik wildcards,press Cltr-C twice will exit SOX and Cltr-C will skip to the next track. 

{%highlight bash%}
#install sox and coded lib for it
$ sudo apt-get install sox libsox-fmt-all
#play music
$ ls ~/Music
#play a song
$play track_1.mp3 
#play all mp3s in a foler
$play *.mp3
{%endhighlight%}

### <a href="https://cmus.github.io/" target="_blank">CMUS</a>
CMUS is more advanced than SOX with various features such as creating a library, queuing selected songs into current playlists. To get the latest release version, the developer recommend to download from <a href="https://github.com/cmus/cmus.git">cmus github repo</a> and compile it. 

#### Basic usage
You can nvaigate different pannel by pressing 1 to 5;
* 1: Artist/Albumn View
* 2: Library
* 3: Playlist
* 4: Current Playlist
* 5: File Browser. Go to **5** to add music by navigating with arrow keys and press a to add music files/folders. Press **enter** to play a track and **c** to pause the music. Please see the <a href="https://github.com/cmus/cmus/blob/master/Doc/cmus-tutorial.txt" target="_blank">CMUS Tutorial</a> for further explanation.

{%highlight bash%}
$ git clone -b pu https://github.com/cmus/cmus.git
$ cd cmus && ./configure prefix=$HOME/cmus && make install
{%endhighlight%}



