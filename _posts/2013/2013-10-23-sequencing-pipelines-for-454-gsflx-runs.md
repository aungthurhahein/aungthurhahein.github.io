---
title: "DNA Sequencing pipeline for 454 GS/FLX runs"
layout: post
date: 2013-10-23 +0700
tags: [Data Analytics, DNA Sequencing]
category: [Tech, Guide]
---

This is the pipeline process for <a href="https://en.wikipedia.org/wiki/454_Life_Sciences" page="_blank">454</a> sequencing. I am not a biotech guy but after spending time, giving effort and getting help from my collague, I came up with a way to do that.  The tools I used are <a href="http://trace.ncbi.nlm.nih.gov/Traces/sra/sra.cgi?view=software" page="_blank">NCBI SRA Toolkit</a> and 454 sequencing tool for multiplexing. 

### process

* Downloaded SRA files from  …

* Converted these SRA files into SFF format using sff-dump tool
    {% highlight bash %}
    	$ sff-dump -A xxxx.sra
    {% endhighlight %}

* Rebuilt the scores of converted sff dataset with sfffile tool
    {% highlight  bash%}
    	$ sfffile -o xxxxxxn.sfff xxxxx.sff
    {% endhighlight %}

* Split the file according to MID groupname
    {% highlight  bash%}
    	$ sfffile -s GSMIDs/RLMIDs xxxxx.sff
    {% endhighlight %}

* Calculated the total MID matches for each group
    * Extract sequence: 
		{% highlight  bash%}
		 $ sffinfo -s 454Readsxx.sff > MIDx.fasta
		{% endhighlight %}
        
	*  Count total sequence no:  		
	
    	{% highlight  bash%}
		 $ egrep -e '^>'  MIDx.fasta | wc -l
		{% endhighlight %}
		
* Combine sff files into one main file

    {% highlight  bash%}
	$ sfffile -o combined.sff xxx1.sff xxx2.sff xxx3.sfff ...
	{% endhighlight %}


#### *Other useful Commands*

* Get the quality scores from the sff file:
	
    {% highlight  bash%}
	$ sffinfo -q 454Readsxx.sff > MIDx.qual
	{% endhighlight %}

* Retrieve the flow intensities:
	
    {% highlight  bash%}
	$ sffinfo -f 454Readsxx.sff > MIDx.flow
	{% endhighlight %}

* View file: 
	
    {% highlight  bash%}
	$ more/less MIDx.fasta
	{% endhighlight %}

