# CPL Maker Lab Jekyll Website

This is a Jekyll-powered website that is hosted using Github Pages and managed using [CloudCannon](http://cloudcannon.com/). Cloudcannon provides a content editor and friendly administration interface for managing Jekyll sites. 

Jekyll is a site generator. Rather than reading and writing from a database (like Wordpress does), a Jekyll website uses flat files and an automated script to regenerate the entire HTML site whenever a change is made. 

Things like pages and blog posts are stored in Markdown files that end in .md or .html. At the top of each file is a section for storing page metadata such as date and categories. Standalone pages are stored in the root directory, while posts are stored in the ```_posts``` directory. Content other than a page or a post must be stored in a collections directory. For instance the collection ```_guides``` contains how-to guides.

The YAML data files are used for storing site settings. For instance, ```_config.yml``` contains the general site settings, and ```_data/navigation.yml``` contains navigation elements. 

Thanks to CloudCannon, you won't have to edit or write any of these files manually. You can use their admin interface to edit and update files. Be particularly careful editing ```_config.yml``` and ```_data``` though, as they may break your site.


