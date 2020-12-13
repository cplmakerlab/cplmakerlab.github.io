# CPL Maker Lab Jekyll Website

This is a [Jekyll-powered website that is hosted using Github Pages](https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/about-github-pages-and-jekyll) and managed using [CloudCannon](http://cloudcannon.com/). Cloudcannon provides a content editor and friendly administration interface for managing Jekyll sites. 


[Jekyll](https://jekyllrb.com) is a popular site generator. Rather than reading and writing from a database (like Wordpress does), a Jekyll website uses flat files and automated Ruby scripts to regenerate the entire HTML site whenever a change is made. Both Ruby and Jekyll favor [convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration). The pros of this that it speeds up coding time; the con is you need to learn the conventions. Sometimes conventions can feel quite magical -- that can be both a pro or a con depending on your perspective.


## Directory structure

|  | Type | Description
--- | --- | --- 
/_data | DATA | Contains data elements for site settings in .yml format (Navigation, Footer, Logo, etc). These can be accessed via the Cloudcannon interface.
/_drafts | CONTENT | Contains unpublished blog posts in .md format
/_guides | CONTENT | Custom Jekyll collection for How-To Guides.
/_includes | CODE | Specialized helper files. They cannot be edited through the Cloudcannon interface.
/_layouts | CODE | Jekyll layouts for rendering HTML pages.
/_posts | CONTENT | Chronologically ordered blog posts. 
/_site_pages | CONTENT | Static site pages.
/_slidedecks | CONTENT | Custom Jekyll collection. Used to create RevealJS slidedecks. See /_layouts/slidedeck.html and assets/js/revealjs
/assets | CODE | CSS, JS, Image assets can be found here. 
/uploads | FILES | Files uploaded via the Cloudcannon interface go here
404.html | CONTENT | This gets displayed when a page cannot be found
_config.yml | DATA | The core configuration file used by Jekyll as well as Cloudcannon
README.md | | The file you are currently reading


### Content is stored as Markdown or HTML files (.md or .html)

Things like pages and blog posts are stored as [Markdown](https://cplmakerlab.github.io/markdown) files (.md) or HTML files (.html). At the top of each file is a special section called Jekyll Frontmatter that is used for storing page metadata such as title, date and categories. Standalone pages are stored in the root directory or ```/_site_pages```, while blog posts are stored in the ```_posts``` directory. Content other than a page or a blog post must be stored in a collections directory. For instance the collection ```_guides``` contains how-to guides.

### Data is stored as YAML files (.yml)

The YAML data files are used for storing site settings. For instance, ```_config.yml``` contains the general site settings, and ```_data/navigation.yml``` contains navigation elements. 

Thanks to CloudCannon, you won't have to edit or write any of these files manually. You can use their admin interface to edit and update files. Be particularly careful editing ```_config.yml``` and ```_data``` though, as they may break your site.

### Site theme

When Jekyll builds a page for the site, it takes relevant content and data for the page and runs it through a Jekyll Liquid layout (see ```/_layouts```) which outputs it as plain HTML. Stylesheets can be found in ```assets/css``` and javascript can be found in ```assets/js```.

### Cloudcannon conventions

Cloudcannon allows you to customize their admin interface using special syntax stored in ```_config.yml```. This lets you control settings like where uploaded files should be stored, and how form fields should look.

To learn more, check out the [Cloudcannon Documentation](https://docs.cloudcannon.com).


### Uh, this is great and all but...as a CPL staff member, how can I simply update or create a page on the website???

Check out the [Cloudcannon Staff Training Guides.](https://cplmakerlab.github.io/tags#Staff). The basic idea is you login to Cloudcannon, make a change, and hit save. Cloudcannon will send the changes over to Github, which triggers a rebuild of the site (it may take a few minutes).



