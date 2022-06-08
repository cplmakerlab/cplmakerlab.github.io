---
title: Worksheets
header_image:
permalink: /worksheets
---

    
 {% assign works = site.worksheets | sort: "title" %}
 {% if works.size > 0 %}
		<ul class="worksheets">
		  {% for work in works %}
		    <li><a target="_blank" href="{{ work.url }}">{{ work.title }}</a> <a class="fontawesome-icon" title="Launch worksheet" href="{{ work.url }}"><i class="fa fa-fw fa-external-link"></i></a> <a class="print-icon" title="Print Friendly Version" href="{{ deck.url }}?print-pdf"><i class="fa fa-fw fa-print"></i></a></li>
		  {% endfor %}
		</ul>
	{% endif %}