---
title: "Pipline to trim adaptor sequences from  illumina Hiseq pair-ended reads"
layout: post
date: 2013-10-29 +0700
tags: [Data Analytics, DNA Sequencing]
category: [Tech, Guide]
---

This week, I have to analyze and trim the adaptor sequence for 5 illumina HiSeq 2000 reads (Penaeus_monodon & Litopenaeus vannamei species). 
If you want to know about the research work I am helping with,please go to this page: <a href="http://www.sc.mahidol.ac.th/research/shrimp.htm" target="_blank">CentexShrimp</a>.


Ok....Back to Sequence Trimming,

The detail information about the run sequence can be viewed at NCBI Website.

1. <a href="http://www.ncbi.nlm.nih.gov/sra/?term=SRR346404&report=Full" target="_blank">SRR346404</a> 
2. <a href="http://www.ncbi.nlm.nih.gov/sra/?term=SRR653437" target="_blank">SRR653437</a>
3. <a href="http://www.ncbi.nlm.nih.gov/sra/?term=SRR388207" target="_blank">SRR388207</a> 
4. <a hre="http://www.ncbi.nlm.nih.gov/sra/?term=SRR388221" target="_blank">SRR388221</a>
5. <a href="http://www.ncbi.nlm.nih.gov/sra/?term=SRR388222" target="_blank">SRR388222 </a>

This is the list of the tools I used.
	
1. **sra tool Kits** : contain several tools for converting datasets from one format to another. for this analysis, I convert the sra datasets to fastq format with fastq-dump tool for further processing. Fastq-dump tool can split the dataset into 2 files for paired-ended run with the following command.

{% highlight  bash%}

Fastq-dump --split-3 

{% endhighlight %}

2. **<a href="http://www.bioinformatics.babraham.ac.uk/projects/fastqc/" target="_blank">FastQC</a>**: FastQC tool is a useful tool to evaluate the quality of the sequence data and it povides the report including various information about the dataset. Before and after trimming the sequence data, it is a great tool to take a look what going on with the sequence data.

3. ** <a href="http://www.usadellab.org/cms/?page=trimmomatic" target="_blank">Trimmomatic</a>**: This is the main tool my supervisor  choose  for me to work on this task. It's a combo tool to perform many trimming tasks for illumina runs.

4. **<a href="http://ccb.jhu.edu/software/FLASH/" target="_blank">FLASH</a>**: After trimming data with adaptor sequences, FLASH provides a way to merge paired-end reads. 

As the last step,we can use FastQC tool again to evaluate the output merged file.  The following image shows the base quality of one dataset after the process.



	
