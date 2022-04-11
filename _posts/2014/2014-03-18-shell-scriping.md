---
title: Shell Scripting(part I)
layout: post
date: 2014-03-18 +0700
tags: [Linux, Programming]
category: [Tech, Guide]
---

## There is a shell, there is a way...
This is the study notes about bash shell-scripting.
In part I, I would like to cover basic commands for starters.

### Prelude
I have a memory shortage condition and this is just to warm up my scripting skills. Don't expect to explain things. If you have strong imagination,that might works.

### Some Env Setup

#### alias
create shortcut to save your fingers
{%highlight bash%}
$ alias l='ls'
$ alias ll='ls -l'
$ alias c='cd'
$ alias cc='cd ..'
{%endhighlight%}

#### $ set completion-ignore-case On

fuck the case-sensitive 
	
#### '#!/bin/bash'
	
this '#i' is called shebang. Declares that you are start banging with bash.

### Variables
#### like php,everything is with $ sign.
{%highlight bash%}
 echo $PATH
 dir=${PWD##*/} //nowhitespace
 echo "The current working directory is $dir" 
{%endhighlight%}

#### Read input
sometimes,you want variables from outside world.
{%highlight bash%}
echo -n “Enter your name: “
read myvar
echo “myvar is $myvar”
{%endhighlight%}

#### Some more advanced reading
this is for smarty pant.
{%highlight bash%}
 while read message
do
	 echo $message
	sleep 1
	 date
 done < /etc/motd
{%endhighlight%}

#### Positional parameters
if you know how to count one two and three,you can do it!

{%highlight bash%}
$ cat params.sh

#!/bin/bash
echo “My name is `basename $0` - I was called as $0”
echo “My first parameter is: $1”
echo “My second parameter is: $2”
//try it
$ ./params.sh one two
{%endhighlight%}

#### Small bash program

This is a bash script that did something which makes sense.

#! /bin/sh
# calculate the length of the hypotenuse of a Pythagorean triangle
# using hypotenuse^2 = adjacent^2 + opposite^2
{%highlight bash%}
echo -n Enter the Adjacent length: 
read adjacent
echo -n Enter the Opposite length: 
read opposite
osquared=$(($opposite ** 2)) # get o^2
asquared=$(($adjacent ** 2)) # get a^2
hsquared=$(($osquered + $asquared)) # h^2 = a^2 + o^2
hypotenuse=`echo “scale=3;sqrt ($hsquared)” | bc` # bc does sqrt
echo “The Hypotenuse is $hypotenuse”
{%endhighlight%}

###Wildcards

####Globbing
It's a term comes from global and it will searchs all trees from the whole forest.

{%highlight bash%}
ls A*
ls A??
ls *.txt
ls *.???
ls -ld /etc/rc{0,1,2,3,4,5,6}.d //create multiple file names rc0.d,rc1.d and so on
ls a[a-z]c.txt //list files name start with a and ends with c and any characters between a to z
{%endhighlight%}

#### Quoting

Not a big deal but minor issues are the thing that destory the most.
{%highlight bash%}
echo '*'
echo "*"
echo "this is a '*'"
echo 'this is a "*"'
{%endhighlight%}

