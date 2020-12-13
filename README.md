# CPL Maker Lab Jekyll Website

This is a Jekyll-powered website that is hosted using Github Pages and managed using [CloudCannon](http://cloudcannon.com/). Cloudcannon provides a content editor and friendly administration interface for managing Jekyll sites. 

Read more: https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages-and-jekyll

Jekyll is a site generator. Rather than reading and writing from a database (like Wordpress does), a Jekyll website uses flat files and an automated Ruby script to regenerate the entire HTML site whenever a change is made. Both Ruby and Jekyll favor [convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration). The pros of this that it can speed up coding time; the con is you need to learn the conventions. Sometimes conventions can feel quite magical -- that can be both a pro or a con depending on your perspective.

Read more: https://jekyllrb.com

## Directory structure

/_data
/_drafts
/_guides
/_includes
/_layouts
/_posts
/_site_pages
/_slidedecks
/assets
/uploads
404.html
_config.yml
README.md


### Content is stored in files (.md or .html)

Things like pages and blog posts are stored in Markdown files that end in .md or .html. At the top of each file is a section for storing page metadata such as date and categories. Standalone pages are stored in the root directory, while posts are stored in the ```_posts``` directory. Content other than a page or a post must be stored in a collections directory. For instance the collection ```_guides``` contains how-to guides.

### Data is stored in files (.yml)

The YAML data files are used for storing site settings. For instance, ```_config.yml``` contains the general site settings, and ```_data/navigation.yml``` contains navigation elements. 

Thanks to CloudCannon, you won't have to edit or write any of these files manually. You can use their admin interface to edit and update files. Be particularly careful editing ```_config.yml``` and ```_data``` though, as they may break your site.

### Cloudcannon conventions

Cloudcannon has its own conventions that are used for their admin interface. Cloudcannon configuration and customization happens inside ```_config.yml```.

Read more: https://docs.cloudcannon.com





