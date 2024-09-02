+++
Title = "📄 Documents should not become applications"
Description = "The Web is becoming increasingly bloated, slow, and risky. Every site is becoming an app, even if that's the wrong thing to do..."
Aliases = [
  "/Posts/2022-06-14-Documents-Not-Should-Become-Applications.html",
  "/Posts/2022-06-14-0000-Documents-Shouldn't-Become-Applications.html",
]
Categories = [ "Internet" ]
Date= 2022-06-14
+++

{{< noticeAutomaticTranslation it >}}



Today's Web is unquestionably very different from that of 20 years ago, and it changes more and more with each passing year.  
Looking at the positive sides of progress is always very easy and reassuring, and for this reason we rarely think about the dark sides which, in many, many things, exist. The Web, unfortunately, is one of these.

## What's happening?

The Web of documents is taking a turn for the worse, slowly becoming, to all intents and purposes, the Web of apps.  
To understand the problem, however, we must remember what the World Wide Web was in its infancy. It was an Internet platform for exchanging information in the form of hypertext, that's it. And what are hypertexts? Some documents. Of course, very particular documents, where reading can take place in a non-linear way thanks to hypertext links, and the Web in particular has evolved to be a hypertext system with support for decorated text, multimedia elements, and highly advanced layout... but at the basically we always talk about documents.

In the very early days of the Web there were only so-called static sites, meaning they always remain the same (unless updated by those who administer them), and there is nothing that users who visit can do to change them. This category includes things like a simple blog, the site itself for example, a news site, the demonstration site of a company or product, an encyclopedia... in short, simple things of this type.

A little later (days or weeks, the idea was already envisaged in the very first specification of the Web and HTML) the idea of ​​using servers that could process information entered by users with buttons and text fields, interact with database, and essentially provide a user-generated content experience. Therefore, forums in a more classic sense began to emerge, sites for creating sites (!) in a simpler way (CMS), the social networks closest to us, webchats and, let's not forget, search engines. These are the dynamic websites.

In this period, however, it did not matter whether we were talking about static or dynamic sites, only documents returned to the computers of any user who contacted the site. Whether it was the HTML page itself, a CSS file to stylize the page, or multimedia files (at the time only photos) placed between one block of text and another, to the browser, the program that interprets and displays these documents, only documents to be interpreted returned, not programs to be executed.  
Here we are still in the exclusive existence of the Web of documents, for the Web of applications we will still have to wait.

With these last sentences, those who think ahead have already understood where I'm going with this, but I'll get there calmly.
In this era, essentially nothing much could happen to your computer or your information simply by loading a given Web page, because the browser only had to deal with files that told you how to lay out the text on the screen (HTML and CSS, markup languages), or how to arrange arbitrary colored pixels on the screen (images).  
The only thing you had to trust was the browser itself (and that it was up to date), not individual websites.

## The current state of affairs

Then, came the scripting. We've seen all sorts of things, but in the end only JavaScript has survived to this day, and is the basis of the pioneering (and tragic) Web 3.  
Other Web scripts are actual programs that a browser can execute if loaded from a page. Here, however, an obvious problem arises: you have to trust every single website that integrates scripts, a problem that is however decidedly complex to deal with.

To be honest, this is not the only problem: scripts very often slow down pages, especially on older and less powerful devices, and on some very old stuff they don't work at all, thus breaking sites that use them extensively. In practice, this means that sites that unnecessarily choose to integrate JavaScript are, on any hardware, often much slower than those that don't.  
However, we will discuss this in detail another day.

First of all, there are sites that upload obfuscated code, to all intents and purposes proprietary software... those, only with a lot of patience and enough experience can you understand what they do.
In any case, however, the simple fact that a program is free does not mean that it is necessarily free from privacy and security problems, and this has been seen, ironically, especially in the JS community, where developers of popular libraries have gone out of their way and integrated malware into their projects.
Few open software developers put code that is harmful to users in their programs, but, those 2 or 3 out of 10000000 who do, sometimes get away with it, because there are no other people who bother to read the code and take action adequately.  
This is a problem that concerns all users of the Web, and if those who already have the ability do not go, for obvious reasons of time and patience, to read all the code of the scripts loaded by all the sites they visit, imagine that those they just don't have the ability to do it (the vast majority of users) are hopeless.

Many people have problems - some sensible and some not, for those who know a minimum of how a modern computer works - installing native applications from scratch, perhaps never heard of before... all problems that are ignored when you are simply browsing the Web, without knowing about the hundreds of scripts that run in a varied browsing session.

How can a script, and therefore a site that integrates it, be malicious?  
Browsers today execute website scripts in a fairly sandboxed environment, of course, and as of today, for reasons that I won't explain now, even serious flaws emerge every month, if you keep the browser updated the security is in theory fine.  
Privacy, however... that really ends up bad.
There was a demo made as a game that showed personally why you need to be afraid... too bad I can't find it anymore, I don't remember where I discovered it from, and therefore nothing :(. At the moment, for those who want to find out more , I can only link [Device Info](https://deviceinfo.me), which shows many of the data (but not all) that a website can extract from the devices of those who visit it. Maybe also take a look at [Cover Your Tracks](https://coveryourtracks.eff.org).

The problem here, it must be specified, does not lie in web apps that can be defined as real applications, which use JS to function. Whether it is a calculator, a game, a word processor, a photo editing app, we are always talking about applications, no matter whether they are written in native language as native apps for a specific platform, or whether they are written in JavaScript as applications for Web browsers. All of these things require the client to execute the code, because these are very interactive apps, and that's okay. I myself often use apps that run in a browser window.  
There would then be a long discussion regarding the Web as an application development platform, for many reasons (even the flaws), positive and negative, but I will talk about it in the future.

Small digression: one way to quickly identify whether a service on the Web is conceivable as a document or necessarily only as an app, which I find intuitive, is this: just ask yourself (assuming there is no music or images): "the general content of this site would make sense if printed entirely on paper (even if it would no longer be hypertext), or not?"
If the answer is yes, then we are talking about something that can easily remain as a document, and we must be wary of anyone who claims otherwise.  
Does the content of a forum make sense if printed in a book, a magazine, or a simple leaflet (objects commonly considered documents, even if physical)? Certainly, as well as that of a blog, a social profile, a chat room, or the results page of a search engine.  
However, printing a calculator or word processing application makes no sense (at most, only printing data, entered into that app or obtained from its processing, makes sense).

## The appization disaster

The real problem lies in the fact that non-directly interactive websites, which we previously categorized into static and dynamic, are increasingly becoming apps, but without any valid reason.  
More and more frequently I see more and more sites, which should be simple documents, not working properly without JavaScript.
We go from news sites where the article doesn't load, to blogs where the navigation menus no longer work, forums where message sections are not visible, forums that don't load at all, new search engines that absolutely don't work without JS ( and which present themselves as a private alternative to Google, it's a shame that Google works well even without running proprietary scripts and these don't!), and even social network sites that only show a blank screen if the JavaScript is not loaded.

These services that I have listed can all be classified as documents and, apart from very particular cases, such as those sites that encrypt and decipher client-side data deliberately to ensure that the server cannot read them (see [PrivateBin](https://privatebin .info) for a notepad, [Element](https://element.io) for a messaging app), can work fine without scripting and should (at least optionally).

I don't like speaking against free and open software written in their spare time by enthusiasts, who perhaps don't even earn money from it, but one thing that struck me negatively is that the plague of appization has also hit the Fediverse and its platforms.  
For those who are unaware of this new virtual universe, I will say in short that it is an idea and, in practice, software, based on common protocols, to guarantee universal compatibility and interoperability, so that those on platform A can also communicate with those who are on

Mastodon and Friendica, at least for viewing profiles and their posts, or discussions with all messages, treat those who love the Web of pure documents well and, although their interactive applications do not work without JS (Mastodon totally, Friendica partially) even if they could, we are already at an excellent compromise.  
If a person is not part of a certain instance, but wants to see content knowing the link, he can do it without fear, because he only has to load static documents in the trusted Web browser.

Then there are other platforms, Misskey, Pleroma, and Pixelfed come to mind. These here, to allow you to view anything, require you to have JavaScript.  
Maybe you can even trust the authors of the software themselves, there are only the usual 10 around, but how can you trust when you find an instance you've never heard of before and managed by who knows who? Simple answer: you can't; although in theory one could check which scripts the instance loads and whether they conform to the original version (or, in the case of a fork, whether the changes made are really the ones documented), no one will do so, for the obvious reasons of which we talked about before.  
The problem of the unverifiable authority of the code, clearly, becomes even worse for individual websites, not necessarily based on any known finished software, and which therefore have no real counterpart to make a comparison regarding the state of the code.

On the Fediverse, I say that the question particularly strikes me because I wouldn't expect it.
Honestly, from Big Tech, which relies on spying on users to earn money by selling their data, I expect a progressive abandonment of the Web of documents in favor of that exclusively of apps even just for reading a few paragraphs of text (which is happening, but slowly), considering the very large potential to subjugate users.  
From those who develop software for communities who are concerned about some of the new privacy issues on the Web, and who therefore use less popular alternative software, I absolutely don't expect it.

## It will all end in tragedy

The situation, I fear, can only get worse. Although I am more than sure that my words and actions will not change the future at all, given that I believe in what I say and, incidentally, at the same time I also create content and services for the Web, I do what I can to create my things as I would like to see them everywhere.
So for non-interactive sites, following the [progressive enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) technique, I first make sure the basic stuff works without scripting, I use scripts the least possible and, if I really have to, I do it for optional functions and features, and I try to keep the code (within my limits) compact and readable.

I personally appeal to you who are reading this.  
If you build websites, consider taking what I've said into account, I beg you.  
If, however, you only browse, perhaps try to start blocking JavaScript in your browser (Chromium integrates this as permission for sites, of which you can set the global setting to Blocked; on Firefox you must install [NoScript](https:/ /addons.mozilla.org/firefox/addon/noscript)), so as to keep JS deactivated for sites you don't know, and have the possibility to activate it temporarily or permanently for domains that don't work or that you already know and are aware of trust me. Not only will you browse more securely and privately, but with less slowdowns and loading!