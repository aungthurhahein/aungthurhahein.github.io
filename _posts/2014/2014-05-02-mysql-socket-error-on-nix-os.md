---
layout: post
title: MySQL Socket error on *nix OS
date: 2014-05-02 +0700
tags: [Linux, MySQL]
category: [Tech, Guide]
---

I was having a problem accessing mysql from terminal and get this error.
{%highlight bash%}
Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock'
{%endhighlight%}

After spending about 30 mins, I found out that the error comes from configuration of MySQL and there is no socket file on the default file location.

To solve this,follow these steps.

{%highlight bash%}
#1.look for socket file
$ find /opt/lampp -name "*.sock"
#output
/opt/lampp/var/mysql/mysql.sock

#2.edit the configuration file with your favorite editor
$ sudo gedit /etc/mysql/my.cnf
#3.replace all socket location with the output from previous command.
{%endhighlight%}

Now,run mysql command again and it should be working. If the problem is still continuing, please check that the server is running and also make sure about the port and bind-address. Log files(/var/log/mysql/mysql.log & /var/log/mysql/error.log) can give you clues too.

Happy Querying...