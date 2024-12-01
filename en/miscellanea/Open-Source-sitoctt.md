+++
Title = "🔓️ Open Source"
Categories = [ "Meta" ]
Lastmod = 2024-11-05
+++

{{< noticeAutomaticTranslation it >}}



All content on this site that I created (my own writing, original media, and most source code) is licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.it?ref=chooser-v1&title=%E2%9C%A8sitoctt%E2%9C%A8&href=https://sitoctt.octt. eu.org&creator=OctoSpacc" rel="noopener" target="_blank">"Creative Commons Attribution - Share Alike 4.0 International" (CC BY-SA 4.0) (<span class="CCIcons"><img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/CC.svg"/> <img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/BY.svg"/> <img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/SA.svg"/>)</span></a>, a free license that promotes sharing, and does not affect the legitimate rights to culture and the collaboration of humanity in general.

However, there are also contents that are not mine.  
Typically, if something comes out of my hand, it won't have any credits near it.  
For borrowed stuff, however, whenever possible, the source from which I took it and the license of the object will always be indicated, be it public domain, Creative Commons, or unspecified.  
Be careful, I often leave the credits for HTML and CSS things only in the page sources. So, in case, check there for this kind of credits. For things like images or texts, however, any credits are often a visible part of the page, close to the borrowed element (like a description); other times, the same object is a link that, if clicked, takes you back to the source.

## Repositories

All the site's sources can be downloaded from the respective Git repositories (GitLab.com) (so divided to keep the history clean), under the conditions described above:

* Main: https://gitlab.com/octtspacc/sitoctt
* Media: https://gitlab.com/octtspacc/sitoctt-assets

Some updated mirrors, always present in case some _patatrac_ happens to the main repositories:
* GitHub: https://github.com/octospacc/sitoctt, https://github.com/octospacc/sitoctt-assets
* Gitea.it: https://gitea.it/octospacc/sitoctt, https://gitea.it/octospacc/sitoctt-assets

## Source structure

The secondary repository is only used to accumulate multimedia files that are embedded on the site (both in the pages and in the layout), any downloads, and so on. It is not structured into multiple branches and commits are irrelevant.

The main repository is structured according to these branches:

#### `sitoctt-next` (main)

This is the branch now set as default, which hosts the main site files, since it was migrated to the Hugo static site generator:

* Page and post sources (mostly in Markdown format)
* Page layout sources, so HTML templates with Go syntax and CSS style sheets
* Other basic page elements, such as client-side scripts and small icons
* Very custom script for each phase of the site compilation process: obtaining dependencies, compiling pages, synchronizing external data, etc...

#### `sitoctt-old` (old `main`)

It was the main branch of the site before the migration to Hugo, when this was still managed by my generator, static.

The generalized structure is the same as today, but obviously the folders and files were a little different.

#### `translate-cache`

Branch where I store the automatically translated versions of various pages and posts on the site. They are stored separately because they are files that can be regenerated at any time, and therefore it makes no sense for them to dirty the history of actual commits of the site. However, they must be preserved, because generating them all from scratch each time the site is compiled would take hours...

#### `requirements-cache`

Branch that I use a bit as a repository for various build or runtime dependencies of the site, since some are extremely fragile and others are perhaps simply convenient to backup them. But it doesn't matter much.