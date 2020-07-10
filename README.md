# Maker Lab Jekyll Website

This is a Jekyll-powered website that is hosted using Github Pages and managed using [CloudCannon](http://cloudcannon.com/). Cloudcannon provides a content editor and friendly administration interface for managing Jekyll sites.

Jekyll is a site generator. Rather than reading and writing from a database (like Wordpress does), a Jekyll website uses flat files and an automated script to regenerate the entire HTML site whenever a change is made. 

Things like pages and blog posts are stored in Markdown files that end in .md or .html. At the top of each file is a section for storing page metadata such as date and categories. Standalone pages are stored in the root directory, while posts are stored in the ```_posts``` directory. Content other than a page or a post must be stored in a collections directory. For instance the collection ```_guides``` contains how-to guides.

The YAML data files are used for storing site settings. For instance, ```_config.yml``` contains the general site settings, and ```_data/navigation.yml``` contains navigation elements. 

Thanks to CloudCannon, you won't have to edit or write any of these files manually. You can use their admin interface to edit and update files. Be particularly careful editing ```_config.yml``` and ```_data``` though, as they may break your site.

## Base

Find more templates, themes and step-by-step Jekyll tutorials at [CloudCannon Academy](https://learn.cloudcannon.com/).

## Features

* Tutorials organised by category
* Two types of tutorials - text and video
* Ability to have a "tutorial series"
* FAQ section
* Disqus comments
* Sticky sidebar for main headings in tutorials
* Optimised for editing in [CloudCannon](http://cloudcannon.com/)
* RSS/Atom feed
* SEO tags
* Google Analytics

## Setup

1. Add your site and author details in `_config.yml`.
2. Add your Google Analytics, Disqus and MailChimp keys to `_config.yml`.
3. Get a workflow going to see your site's output (with [CloudCannon](https://app.cloudcannon.com/) or Jekyll locally).

## Develop

Base was built with [Jekyll](http://jekyllrb.com/) version 3.4.3, but should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

## Editing

Base is already optimised for adding, updating and removing tutorials, navigation, footer and FAQ information in CloudCannon.

The sticky sidebar in tutorials in populated by pulling out `<h2>` elements from the content.

### Posts

* Add, update or remove a post in the *Posts* collection.
* The tutorials page is organised by categories.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Post Series
To create a new series:

* Add a new document to the `sets` collection.
* Set the `title` and `description`.

To add a tutorial/post to a series:
* Add a `set` field to the tutorial front matter which points to the file name of the desired set without the `.md` extention. e.g. If I have a set at `_sets/getting-started.md` I would use this in my tutorial front matter: `set: getting-started`.
* Add a `set_order` field to the tutorial front matter and specify a number. This is the tutorials order in the set.

### Navigation

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Navigation* section.

### Footer

* Exposed as a data file to give clients better access.
* Set in the *Data* / *Footer* section.
