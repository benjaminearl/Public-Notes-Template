🔴⚪️🟡🔵🟣🟢

# Basic Blog Template using Eleventy

This is a [lightweight](https://fruitful.school/workshops/ultralight/) blog template that uses eleventy as a [static site generator](https://developer.mozilla.org/en-US/docs/Glossary/SSG). I made this because I migrated my blog from Kirby to Eleventy in an effort to technically simplify the process of putting thoughts online and in order to reduce the amount of data I put onto the web. 

I want to share this template with anyone who wants to write on the internet but doesn't want to deal with Content Management Systems. I use this site by writing into files stored locally on my computer that are then processed into html files that I upload to my server. This way I keep the majority of my files on my local disk. This setup could be integrated into Github pages for some free hosting or it can be uploaded to very simple web servers without much remote work needed to be done.

In it's current form, this static site generator creates a website from posts that are added to the "posts" directory. These posts are rendered as individual pages. The homepage of this site is currently set up to display the most recent post and the rest are visible via this "archive" page. This current setup can be changed and molded into whatever you want. 


## How to use it
### installing eleventy 🔴

The Static Site Generator that I'm using is called [Eleventy](https://www.11ty.dev/). It is a small piece of software that transforms code and content into html, css and javascript files. To be able to generate your site, you need download and set up eleventy to work. All the packages of software that are necessary for this are referenced in the package.json file. This means that you only need to run one command in order to install them. To do this you need to have [node](https://nodejs.org/en) installed on your computer and the [Node Package Manager](https://www.npmjs.com/) (npm). If you're not sure if you have either of these installed you can run `npm -v` and `node -v` in your terminal.

Once you have installed node and npm, open the template folder in your terminal and run the command `npm install`. This command will install Eleventy and any other necessary packages required for this template.

### using the command line or not ⚪️

I run most of this template via [Visual Studio Code](https://code.visualstudio.com/) as it gives me the ability to see both my folders and files, the code and content within them and run a terminal all within one window. I use scripts to create new note templates and to publish the newly generated html pages to my web server. Whilst this is one way of doing it, you can also use your file manager (e.g finder on mac) to make new files, a text editor to write your content (obsidian) and a storage manager (Cyberduck) to upload your files. I will include my own scripts in this templte if you want to make use of them.

### how the folder structure works 🟡

Eleventy generates the website from folders and files found in the `src` folder. The source folder includes your eleventy settings in `.eleventy.js` such as the ways eleventy handles file colocation, RSS feed creartion and how to deal with images. You can add more functionality to your site using this file. 

The src folder also includes the templates used to generate certain pages such as the Home, Archive, Post and Tag pages, these can be found in in `_includes/layouts` folder. The are [Nunjucks](https://mozilla.github.io/nunjucks/) files, as seen in the `.njk` file extension. This is a templating language used for Javascript made by Mozilla that allows you to transform markdown content into html.

You will also ber able to find the `posts` folder. This is where you will be able to find folders with the names of dates that hold an `index.md` file and any image or sound files that go along with them. The `index.md` file is where you will be able to write the content for each note that should be written in markdown but can also include html. 

Eleventy takes all these templates and contents and if configured correctly will generate a `_site` folder that contains your home, archive, posts and tag pages. The files and folders in here should be uploaded later to your server/github pages.

### how to write a post 🔵

I begin the process of writing a post but running `npm run newpost` in my terminal. This script generates a file with the title of the current date and time and adds an `index.md` file with [front-matter](https://www.11ty.dev/docs/data-frontmatter/) that corresponds to that post. This includes the optional title for the post (if left blank the post will be titled with the date of creation), the automatically generated date and time of creation, space to add any tags to your post and whether you want this post to be publically accessible or not.

Your `index.md` file should contain markdown, I use this cheatsheet to remind me how to do that: [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/).

### how to publish the blog 🟣

Publishing your blog depends on how you want to do it. I use a remote server that is currently hosted by [Greenhost](https://greenhost.net/) where I have a simple Nginx web server installed. I write my posts and then trigger eleventy to generate these into html files by running `npx @11ty/eleventy`. Sometimes if I want to check how it looks I run `npx @11ty/eleventy --serve` which runs eleventy and spins up a local server where you can preview your files in the browser without uploading them.

Once I'm satisfied with the posts, I run a script that runs eleventy one last time and then uploads the files found in my `_site` folder to my server via the rsync utility that synchronises local and remote directories.

If using Github pages, you can upload all the folders and files contained within the `_site` folder to your Github repository.

### further steps 🟢

If you wanted to hook eleventy up to a CMS then that is possible, you could use something simple like [Decap CMS](https://decapcms.org/) (fka Netlify CMS). You can refer to Eleventy's guide for [Using a CMS](https://www.11ty.dev/docs/cms/).