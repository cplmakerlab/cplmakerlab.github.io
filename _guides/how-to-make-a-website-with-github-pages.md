---
title: How to Make a Website with Github Pages
categories:
  - Coding
tags:
  - github
  - HTML
  - CSS
  - JS
  - GIT
  - Coding
example_image: /uploads/how-to-make-a-website-with-github-pages/website-example.png
difficulty: Medium
time_required: 2 - 4 hours
file_attachment_path: /uploads/website-handout.pdf
---

In this guide, you'll learn how to make a simple website for Github Pages using HTML, CSS, and Javascript. By the end you'll have made your own website that you can share with your friends.

* View example: [https://cplmakerlab.github.io/simple-website-template/](https://cplmakerlab.github.io/simple-website-template/){: target="_blank" rel="noopener"}
* Starter Template: [https://github.com/cplmakerlab/simple-website-template](https://github.com/cplmakerlab/simple-website-template){: target="_blank" rel="noopener"}

---

In this guide we will be using Github Pages to create a simple website. But first, how does a website work? When you enter a website address in your computer's browser, the browser makes a request to a remote server computer. If successful, the server returns HTML, CSS, and JS for the page requested which your browser then renders to your screen. In our case, Github Pages will be the remote server.

![](/uploads/how-to-make-a-website-with-github-pages/website-guide1.png){: width="797" height="162"}

### Step 1: Create a Github account

In your browser, go to [github.com](http://www.github.com){: target="_blank" rel="noopener"} and create a free account. Github is a website that allows you to upload and share versioned code with others. It also supports simple website hosting (which we will be using today).

### Step 2: Find the Maker Lab website template

Login and navigate to the [Maker Lab Website Template on Github](http://github.com/cplmakerlab/simple-website-template){: target="_blank" rel="noopener"}.

### Step 3: Fork (copy) the template

Click the **Fork** button in the upper right of the screen. This will create your own personal copy of the project repository which you can then modify.![](/uploads/how-to-make-a-website-with-github-pages/website-guide2.png){: width="929" height="196"}

### Step 4: Edit the website URL

Once you have forked the project, click the **Edit** button to the write of "Website URL" and update the URL to match your github username. Make sure to write this down\! This is how you will be able to view and share your website with others.

*Example URL (replace yourusername with your github username):*

`https://yourusername.github.io/simple-website-template`

### Step 5: Try to load your website URL

If you try to navigate to your URL right now, you will get a 404 Error: Not Found. We have to push some changes first to the gh-pages branch before Github will build our website.

### Step 6: Edit index.html

Click index.html and then click the pencil icon to edit the file in the browser editor.

![](/uploads/how-to-make-a-website-with-github-pages/website-guide3.png){: width="982" height="170"}

### Step 7: Change the page title and heading

In the HTML editor look for the title tag: `<title>Your title here</title>` Change the text inside the title tags, without modifying the tags themselves. Similarly, find the h1 heading tag and carefully change the text inside of the h1 tags:&nbsp; `<h1>Simple Website</h1>`

![](/uploads/how-to-make-a-website-with-github-pages/website-guide4.png){: width="355" height="150"}

![](/uploads/how-to-make-a-website-with-github-pages/website-guide5.png){: width="325" height="199"}

For more examples of tags, see the "Common HTML Tags" table at the end of this guide.

### Step 8: Commit your changes

Scroll down and click **Commit changes**. This will save and push the changes you made to the gh-pages branch. Git uses branches and commits to manage different versions of your files.

![](/uploads/how-to-make-a-website-with-github-pages/website-guide6.png){: width="465" height="356"}

### Step 9: Wait for your site to build\!

After a commit it will take about 3-4 minutes to deploy your site. You can monitor the status of your build by clicking the "Environment" tab. After a few minutes, visit your website URL to see your new site.

### Step 10: Upload new background image

Now let's upload a new background image. Search for a large image (~1024 pixels wide), download it to your computer, and rename it background.jpg. Your image **must** be named` background.jpg `before uploading in order to overwrite the original image. If your image is a .png, use GIMP to convert it to .jpg.

In Github, click **Upload****fi****les** to upload your new background.jpg. Don't forget to scroll down and click "Commit changes" to push your changes to the gh-pages branch. Again, it usually takes about 3-4 minutes for Github to build and deploy your changes.

![](/uploads/how-to-make-a-website-with-github-pages/website-guide7.png){: width="1155" height="204"}

## Congratulations\! You made a website\!

Yeah\! You did it\! Now you can share your website link with your friends so they can see your website too.

### Some more things to try:

* Upload and overwrite logo.jpg (best to keep your logo small, under 100 pixels tall)
* Change the link color in style.css, i.e. `a {color:green;}`
* Update the text inside the footer region in index.html
* Update the text inside the Home, About, and Contact regions in index.html

---

#### Common HTML tags

| Element | Tag | Example usage |
| --- | --- | --- |
| Header | h1 | `<h1>Title of page</h1>` |
| Link | a | `<a href="http://example.com">Check out this link</a>` |
| Image | img | `<img src="http://www.example.com/image.jpg">` |
| Paragraph | p | `<p>This is a new paragraph.</p>` |
| Line break | br | `This is the first line of a poem. <br> This second line will appear below the first.` |

---

## Further reading

### Where can I learn more about HTML, CSS, JS, and webdevelopment in general?

Check out Mozilla Developers Network (https://developer.mozilla.org). They have lots of good resources, tips, and tutorials to further your knowledge.

### Can I configure a custom domain for my site, i.e. johnnymakerportfolio.com?

Yes\! Github Pages supports [custom domain configuration](https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site). However, you will need to buy a domain name from a registrar such as [NameCheap](https://www.namecheap.com/) or [Gandi](https://www.gandi.net/) – the cost is usually around $10 - $15 a year.

### Can I add tracking?

Yes\! You can embed Google Analytics to see who is visiting your site.

### Can I add a blog, etc?

Not really. This template works best for simple sites. For a simple blog check out [Jekyll, which is a static site generator that also works on Github pages](https://help.github.com/en/github/working-with-github-pages/setting-up-a-github-pages-site-with-jekyll) and [Cloudcannon](http://cloudcannon.com){: target="_blank" rel="noopener"} which provides a backend UI for Jekyll sites. For more functionality, you will probably need a content management system (CMS) such as [Wordpress](https://wordpress.com), [Drupal](http://drupal.org), or [Django](https://www.djangoproject.com). A CMS will require additional setup and a website host, such as [Dreamhost](https://www.dreamhost.com/).

### Can I sell products or add a store?

Not easily, but if you are determined you can add Paypal buttons or something like [SnipCart](https://snipcart.com/). If you are interested in selling many products online or need a full store, check out Woocommerce, BigCartel, Shopify, or Etsy.

### Can I make separate HTML files for each page?

Yes, you can use Javascript AJAX calls to pull in external content into your index.html page. See script.js for more details.

### I heard I need to be using XYZ framework (Bootstrap, React, etc).

Web technology changes rapidly, and it easy to get lost in the hype. Learning the basics of HTML, CSS, and JS is a good place to start. From there, you can explore different frameworks and libraries to see what interests you.

### I don't want to write code or deal with website hosting. Are there any website builders you recommend?

* Google Sites (free)
* Squarespace
* Wix
* Strikingly (free tier includes single product store)
* Big Cartel, Shopify, Etsy (e-commerce)
