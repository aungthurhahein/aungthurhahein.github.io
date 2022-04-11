---
layout: post
title: "Language with digital writing standarization issue"
date: 2015-04-21 +0700
tags: [Font, Standard]
category: [Tech, Myanmar]
---

### Updated as of 2022
> The issue is resolved at 2019 with country wide effort to adopt Unicode font in mobile devices and in computerized system.

### TL;DR
>This is ad hoc review and propaganda about incompatibility issue between Unicode fonts and non-Unicode fonts of **Myanmar** language. Instead of creating “quick fixes” to make these fonts compatible for short-term periods, this article is trying to propose methods to solve this problem for long-term benefits.

### Artificial Language vs Natural Language

For computer systems and digital communication medium, there are 2 types of language. Artificial language is to implement and to create communication between human to machines. Natural language is the medium for human to human communication. The size and structure of artificial language and formal language are limited. For natural and constructed language, the complexity of syntax, rules, and structure is complex and it is out of the structure and pattern at some parts. To standardize and meet consistency at digital communication, it is necessary to set up a standard for natural language.

To solve this solution, there are characters encoding and decoding standards to blend in natural languages nicely with artificial ones. Unicode is the standard you can find in modern operating systems and ASCII is another system that uses legacy operating systems such as Windows 95 and 98. For more about character encoding history, you can look at <a href="https://www.wikiwand.com/en/Character_encoding" page="_blank">Character encoding-wiki</a>.

### Unicode
> Unicode provides a unique number for every character,
> no matter what the platform,
> no matter what the program,
> no matter what the language.

That is the motto of Unicode. The improvement of Unicode standards and the reason behind all major Operating Systems use this characters encoding system is because it provides enough for all types of written words and also special characters. That’s one weakness of ASCII which is only suitable English language and provides only 128 characters.

The latest version of Unicode is version 8.0 and it released at June 2015, even includes characters for emoji. For a specific language, Unicode provides technical specification and character mappings for all languages. It makes life easy for fonts creators. So, if a font followed standards and characters mapping of Unicode, it is compatible to install multiple typefaces within a system. So..what is the problem?

### Myanmar language & characters encoding history

At bloom of web 2.0, a local software provider from Myanmar introduces a font called “Zawgyi” to use as computerized systems such as Windows applications and web applications. The font implementation relies on Windows Uniscribe engine and at that time, there is no problem since the majority of computer users are on Windows operating system and the internet is an invisible thing in the textbook. The problem with “Zawgyi” font is that it’s partially followed Unicode standards with many overlapping characters (figures at the end of this paragraph). It becomes a national IT problem and developers of Zawgyi font after 100% Unicode standard fonts are introduced.

So, the solution is simple I thought at first. Just use the fonts that follow the Unicode encoding standards. In reality, it is complicated since many systems and users are familiar with “zawgyi” font and they don’t see a problem such as system localization and incompatibility between Unicode fonts ad “Zawgyi” font. The problem becomes clear after Windows 8, OSX Lion, and mobile operating systems. OSX Lion and Windows 8 supports Myanmar language as input language and followed “Myanmar 3” font character mappings. “Myanmar 3” font is the font proposed at Unicode consortium and it becomes a standard model and all Unicode compliant Myanmar fonts need to look at “Myanmar 3” font.

Unicode characters mapping
<img src="http://upload.wikimedia.org/wikipedia/my/thumb/3/31/Unicode_character_map_%28color%29.png/395px-Unicode_character_map_%28color%29.png" title="Unicode characters mapping of Myanmar Language">

Zawgyi font characters mapping
<img src="http://upload.wikimedia.org/wikipedia/my/thumb/e/e7/Zawgyi_character_map_%28color%29.png/395px-Zawgyi_character_map_%28color%29.png" title="Zawgyi fonts characters mapping">

At this time of writing, there are several Myanmar Unicode fonts developed such as Myanmar 3, Paduk, Tharlon and so on. In my Debian system and android 5.0, Paduak and tharlon are adapted as system language fonts. Padauk, Unicode version 6.0 compliant font, uses Graphite package instead of unscribe engine and I can’t find technical information about Tharlon. A technical white paper about Graphite engine can be seen at Graphite: Smart-font technology to bridge the digital divide. So, you might think there are solutions available and what seems to be the problem at this point. Please bear with me to next section.

### Solution 1.0, Solution 2.0 …

Developers from different platforms are implementing various mechanisms to make a “quick fix” to solve this problem such as browser plugins, mobile applications and so on. Replacing “Zawgyi” font with system default Myanmar locale fonts and implementing binary executables to automate the whole process. In my opinion, these solutions are the unnecessary solutions that only works temporarily. For mobile platform, android and iOS releases a new version almost once a year and it is not convenient for developers to implement a new “quick fix” and also end-users have to wait until “temporary” solutions out there. It will be more challenging in near future because of Myanmar locate font will become along with most of operating systems. For e.g, android 5.0 supports full system localization and by removing or replacing the system locale font with “Zawgyi” font, end-users lose a chance to use with native language and it gives headache for developers too.

There are better solutions that will be beneficial in long-term and I think it is time to work out this problem with one way or another.

1. Stop using “Zawgyi” font and migrate to Unicode compliant font
    It is that simple but like I mentioned before, people are stubborn and don’t like changes. Some people propose solutions for existing systems to convert “Zawgyi” font to Unicode fonts. Please read this<a href="http://www.myanmarlanguage.org/unicode/zawgyi-unicode-conversions-tips-tricks-and-risks" target="_blank">Zawgyi To Unicode Conversions Tips, Tricks and Risks</a>  to save the length of this article, that was published at August 2011. This is what anti-“Zawgyi” font people are trying to pursue but it is not happening until now.

2. Make “Zawgyi” font to 100% Unicode Compliant
    Since it’s partially Unicode font, there is a possibility to make it 100% Unicode font. Old versions of the font need to stop using and it is necessary to encourage users to use the latest one. End-users will keep using it with slight changes in typing but still existing applications and systems to convert from old version to “Zawgyi” 100% Unicode font. In this way, all Burmese Unicode fonts are compatible and the problem solves.

### To make this happen

I can not do it alone. Other Burmese technicians also can’t do it alone. It should be initiated by associations like MCF & MICA and make public announcements to make this happen. There are many hidden solutions out there such as converters, mobile applications, browser plugins and so on. The problem is not a technical issue. It’s people who need to change. I want to communicate my friends and family with Burmese texts instead of Burglish. I wanna write Burmese blogs and I wanna make hidden code comments with Burmese text. The problem of “I can’t see what you type” will be gone.

Technicians and authorities should discuss this issue and try to come up with a solution. I believe that that day is coming soon and I will try to be a part of this.
