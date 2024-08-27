+++
Title = "New frontiers"
Aliases = [
  "/Posts/MicroBlog/2022-09-23-Nuove-Frontiere.html",
]
Categories = [ "MicroBlog" ]
Dates = 2022-09-23
+++

{{< noticeAutomaticTranslation it >}}



Since I discovered it a few days ago. I'm trying that epic software that is [TiddlyWiki](https://tiddlywiki.com){[:MdTgtBlank:]}.  
I initially found it while looking for something to organize notes in a rich format, that I could use for school, and that was obviously free.

It is a wiki software, practically in the same category as MediaWiki (the software on which Wikipedia is based), but it has very particular characteristics.  
First of all, it doesn't need a server, it's an app that works locally... but how absurd (in a good way)! The entire app with all your personal data is a single, self-editing HTML file, meaning you can copy and secure an entire site in an instant. It cannot save data on its own, but you have to download the modified HTML file locally each time, or use synchronization systems (I use Git, supported in-app).

If I started using it for the sole limited purpose of school study, but then these days I ended up starting to use it a lot also to create my so-called personal and public knowledge base, on everything I can write to the I fly in a non-linear document format that is very well suited to small, quick interconnected notes... which means it's really interesting.

I'm a bit sorry to say it, but it's possible that part of the time I would normally dedicate to the ctt site will be taken away from it, to be dedicated to the newly created OcttKB - which, in this regard, is here on <https://kb.octt .eu.org>{[:MdTgtBlank:]}.  
As much as I like everything I have built in recent months, which in fact will continue to live - both as a place in which to express my design style, and as a place in which to publish elaborate and never fragmented content - I must say that I have found a tool which manages to channel some of my thoughts well, those that the CTTT site cannot manage.

I'm not going to explain too much about the technical side of the advantages or disadvantages of TiddlyWiki, because we're talking about a software that is easy to start using, and absolutely very complicated to master (it will take me time!).  
What I will say is that: with its being oriented towards the arrangement of information in small fundamental elements (the _tiddlers_), which can then be connected to each other to build elaborate information - both with links and with transclusion (when the content of a element appears completely copied in the middle of another, which is done simply by writing <span>`{`</span><span>`{`</span><span>`Element Name`</span><span> `}`</span><span>`}`<span>) - lends itself really well to well-rounded thinking organization in general.

As a bonus, TiddlyWiki can be used as a more traditional static site generator: you can write elements into many files, and use the CLI program to compile everything into the monolithic file described above. The official site of the project uses this technique, but for a personal site it is not necessary and in fact, it cancels out the advantage that TiddlyWiki has, of being able to be used as a modern notes app: open, write, everything is saved in the cloud automatically.

However, the CLI program has a function that I find useful: the ability to generate static versions of the site, which do not require JavaScript for navigation. This is great, and I think anyone with a public TiddlyWiki, if they have the tools, should set up a build system to automatically make static pages available on the server.