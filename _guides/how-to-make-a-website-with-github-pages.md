---
title: How to Make a Website with Github Pages
categories:
tags:
  - github
  - HTML
  - CSS
  - JS
  - GIT
example_image:
difficulty: Hard
time_required: 2 - 4 hours
file_attachment_path: /uploads/website-handout.pdf
---

In this guide, you'll learn how to make a simple website for Github Pages using HTML, CSS, and Javascript.

* Example site: https://cplmakerlab.github.io/simple-website-template/
* Starter Template: https://github.com/cplmakerlab/simple-website-template

---

In this guide we will be using Github Pages to create a simple website. But first, how does a website work? When you enter a website address in your computer's browser, the browser makes a request to a remote server computer. If successful, the server returns HTML, CSS, and JS for the page requested which your browser then renders to your screen. In our case, Github Pages will be the remote server.

\[pic\]

1\. Go to github.com and create a free Github account. Github is a website that allows you to upload and share versioned code with others. It also supports simple website hosting.

2\. Login and navigate to this project page: http://github.com/cpl-makerlab/simple-website-template

3\. Click the **Fork** button in the upper right of the screen. This will create your own personal copy of the project repository which you can then modify.4. Once you have forked the project, click the **Edit** button near "Website URL" and update the URL to match your github username: https://**yourusername**.github.io/simple-website-template

\[pic\]

5\. If you try to navigate to that URL right now, you will get a 404 Error: Not Found. We have to push some changes first to the gh-pages branch before Github will build our website.

6\. Click index.html and then click the pencil icon to edit the file in the browser editor.

\[pic\]

7\. In the HTML editor look for the title tag: **&lt;title&gt;Your title here&lt;/title&gt;** Change the text inside the title tags, without modifying the tags themselves. Similarly, find the h1 heading tag and change the text inside: **&lt;h1&gt;Simple Website&lt;/h1&gt; **

\[pic\]

8\. Scroll down and click **Commit changes**. This will save and push the changes you made to the gh- pages branch. Git uses branches and commits to manage different versions of your files.

\[pic\]

9\. After a commit it will take about 3-4 minutes to deploy your site. You can monitor the status of your build by clicking the "Environment" tab. After a few minutes, visit your website URL to see your new site.

10\. Now let's upload a new background image. Search for a large image (~1024 pixels wide), download it to your computer, and rename it background.jpg. If your image is a .png, use GIMP to convert it to .jpg.

11\. In Github, click **Upload****fi****les** to upload your new background.jpg. Your image must be named background.jpg before uploading in order to overwrite the original image. Don't forget to scroll down and click "Commit changes" to push your changes to the gh-pages branch. Again, it usually takes about 3-4 minutes for Github to deploy your changes.

\[pic\]

12\. Keep going\! Here are some more things to try:

*\- Upload a new logo.jpg (best to keep this small, under 100 pixels tall) - Change the link color in style.css* a \{color:green;\}*\- Update the text inside the footer region- Update the text inside the Home, About, and Contact regions *
