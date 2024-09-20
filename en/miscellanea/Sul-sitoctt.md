+++
Title = "On sitectt"
Lastmod = 2024-08-25
#Template = WM.html
#Style = @import "[staticoso:Site:RelativeRoot]Assets/Pages/index.css";
Categories = [ "Meta" ]
Featured_Image = "@/RichPreview/index.png"
+++

{{< noticeAutomaticTranslation it >}}



This here was initially the home page of the site, but it has become so problematically long that... never mind, everything is explained on the [new home](/). Here, therefore, is the classic series of loose information regarding the ✨sitoctt✨ (some of it old, it will be updated based on what's new)! 😊

<!-- Credits: https://codepen.io/jh3y/pen/WNrXqYz -->
<div style="Position:Relative;"><br/>
<h1 class="NoTitle WavyText" style="--x: 6; --y: -6;"><span style="--index: 0; --alpha-l: 0.125; --alpha-u : 0.25;">✨</span><span style="--index: 1; --alpha-l: 0.125; --alpha-u: 0.25;">s</span><span style="- -index: 2; --alpha-l: 0.125; --alpha-u: 0.25;">i</span><span style="--index: 3; --alpha-l: 0.125; -u: 0.25;">t</span><span style="--index: 4; --alpha-l: 0.125; --alpha-u: 0.25;">o</span><span style= "--index: 5; --alpha-l: 0.125; --alpha-u: 0.25;">c</span><span style="--index: 6; --alpha-l: 0.125; - -alpha-u: 0.25;">t</span><span style="--index: 7; --alpha-l: 0.125; --alpha-u: 0.25;">t</span><span style="--index: 8; --alpha-l: 0.125; --alpha-u: 0.25;">✨</span>
</h1>
<h1 class="NoTitle WavyText" style="--x: 3; --y: -3;"><span style="--index: 0; --alpha-l: 0.25; --alpha-u : 0.5;">✨</span><span style="--index: 1; --alpha-l: 0.25; --alpha-u: 0.5;">s</span><span style="- -index: 2; --alpha-l: 0.25; --alpha-u: 0.5;">i</span><span style="--index: 3; --alpha-l: 0.25; -u: 0.5;">t</span><span style="--index: 4; --alpha-l: 0.25; --alpha-u: 0.5;">o</span><span style= "--index: 5; --alpha-l: 0.25; --alpha-u: 0.5;">c</span><span style="--index: 6; --alpha-l: 0.25; - -alpha-u: 0.5;">t</span><span style="--index: 7; --alpha-l: 0.25; --alpha-u: 0.5;">t</span><span style="--index: 8; --alpha-l: 0.25; --alpha-u: 0.5;">✨</span>
</h1>
<h1 class="NoTitle WavyText"><span style="--index: 0; --alpha-l: 0.5; --alpha-u: 1;">✨</span><span style="-- index: 1; --alpha-l: 0.5; --alpha-u: 1;">s</span><span style="--index: 2; --alpha-l: 0.5; u: 1;">i</span><span style="--index: 3; --alpha-l: 0.5; --alpha-u: 1;">t</span><span style=" --index: 4; --alpha-l: 0.5; --alpha-u: 1;">o</span><span style="--index: 5; alpha-u: 1;">c</span><span style="--index: 6; --alpha-l: 0.5; --alpha-u: 1;">t</span><span style ="--index: 7; --alpha-l: 0.5; --alpha-u: 1;">t</span><span style="--index: 8; --alpha-l: 0.5; --alpha-u: 1;">✨</span>
</h1><br/>
</div>

Where does the name **✨**<strong class="MainIdTextGradientL">sitoctt</strong>**✨** come from?
From the fact that it's literally my site, because I'm octt and so
<i style="Color:#8040d0;">site</i> + <i style="Color:#d000d0;">octt</i>
= **✨**<strong class="MainIdTextGradientR">sitoctt</strong>**✨**
(<a href="{{< assetsRoot >}}/Media/sitoctt-pronunciation.flac" target="_blank" rel="noopener">pronunciation: "sitòctt"</a>).
If you prefer, you can call it <i class="MainIdTextGradientL">sitocto</i>. Or even <i class="MainIdTextGradientR">postoctt</i>! This is still a place - my place - even if virtual!

## Site status and how to navigate

Despite already having a bit more substance, all this ambaradan is still heavily under construction. And it always will be, because I will always have new stuff to share. ~~And, when I am dead, it will still be unfinished because in my life I will not have written all the universal knowledge theoretically possible on the sitectt.~~
Updates to the site are of different types: the publication of new blog articles happens, well, 3 times a month, it is a good idea to use <a href="#-Feed-e-notifiche">feeds</a> which I make available; changes for normal pages are continuous and happen at random, so you should check the ones that interest you perhaps every week, if you expect news.

<p><b>To keep in mind</b> (from Web): when the following buttons are on the screen, it is because they can hide collapsible menus.
They can be in different positions on different pages, because I like to experiment with different themes; but I try to keep their meaning consistent throughout.<br/>A stack of books emoji icon (<big class="twa twa-books twa-📚">📚</big>) signals the menu main page of the site, essential to be able to navigate by jumping between completely different and unconnected pages.
Instead, the icon with the emoji of a sheet with a bookmark (<big class="twa twa-bookmark-tabs twa-📑">📑</big>) indicates the list of sections of the current page - it is not essential, but can be useful for jumping between different parts of a long text.
</p>

### Client-side scripting

<p>The website does not use any client-side scripts for basic functions, because I don't want to force those (for valid security reasons and otherwise) who don't want to enable JavaScript to have a degraded experience. Regarding this thorny issue, I also wrote an article: <a href="Posts/2022-06-14-0000-I-Documenti-Non-Devono-Diventare-Applications.html"><span class="twa twa- page-facing-up"><span>📄</span></span> Documents should not become applications</a>.<br/>Anyway, though.. to provide some extra functionality, I have to have some JS, there is little you can do. Below is the list of what I use. <i>All files are uploaded from my site's servers, so it is difficult for malicious entities to hide malware inside</i>.</p>
<details>
<summary>
<h4>List of client-side scripts used in the website (Expand)</h4>
</summary>
<div>
<ul>
<li>Internal scripts, written by me: <del>Auto-expanding menus on sitoctt themed pages in desktop mode</del> (I'm trying to fix this..), Full screen display of page backgrounds.</del> li>
<li>
<del>Polyfill to support AVIF images on older browsers: <a href="https://github.com/Kagami/avif.js" rel="noopener" target="_blank">avif.js by Kagami</ a></del> (<i>Not activated yet...
<del>it will be soon</del> <small>when the hell will I do it? I've been putting it off for months, the problem is that it's not a plug-and-play solution, I have to understand it first and then create a wrapping script 😭</small></i>)
</li>
</ul>
</div>
</details>
<p>Below, I put my ranking of the possible ways to view this site, from best to worst. By standardization, they all assume full color support (where possible).</p>
<details>
<summary>
<h4>My useless digressions on absolutely absurd ways of consulting the sitectt (Expand)</h4>
</summary>
<div>
<dl>
<dt><b>• Web browser, with full CSS3 support</b></dt>
<dd>(Perfect!)</dd>
<dt><b>• Print on holographic paper, fully rendered GIF and CSS3 where possible</b></dt>
<dd>(Requires moving the paper by hand but excellent!)</dd>
<dt><b>• Web browser, with incomplete CSS3 support</b></dt>
<dd>(Meh, OK..)</dd>
<dt><b>• Print on plain paper, CSS3 animations and non-rendered GIFs</b></dt>
<dd>(Boo, animations are missing..)</dd>
<dt><b>• Old browser (Old Web, Text Web, or Gemini) / Print on plain paper, no CSS support </b></dt>
<dd>(What is this rubbish?!?!)</dd>
</dl>
</div>
</details>

## But what is it about?

On this Internet space of mine I will put everything. I hope.

For now, I definitely put up shallow pages on specific topics, but also long, conversational blog posts. I also want to put up lots of collections on the things I like, in both textual and media form. A kind of gallery of things that are valuable to me.

In addition to the actual contents, however, I want the site (the Web version, obviously) to be a gallery of itself. I want to create something that has its own unique character, like the amateur websites of the years 1995-2005, where every place on the Internet always had a different atmosphere from everything visited a moment before.<br/><span style="Color :#404040;">The rise of social media as we have them today has unfortunately ruined the web from this point of view, leading to complete standardization and the death of creativity expressed through form.</span><br/>I want this web space of mine is different from all the others, characterized by monochromatic text and recycled themes, because it is a shame to have very powerful tools and not really exploit them.

For this reason, I will constantly try to invent ways to embellish the pages with CSS, not only with layout or fixed text effects, but above all with animations.<br/>To the rest of the form, such as the tree order of the pages on the site or paragraphs on the pages, I won't think much, otherwise I get distracted from creating content and the desire passes.

## Site availability

At the moment, this site is available for browsing on various different addresses (the contents are always identical).
For those who don't know, however, the name changed a month ago to sitoctt from postoctt, because the old name gave me the impression of some postal service...
I should also think about many other cloud mirrors from different providers (obviously free), if I want the site to survive octt itself and stand the test of time... But this is a long question.

### Web

<p>The website is available from several sources.</p>
<ul>
<li>On the <b>clearweb</b> HTTPS, on the <span style="Color:#fc6d26;">GitLab</span> servers: <a href="https://sitoctt.octt.eu. org">sitoctt.octt.eu.org</a>.</li>
<li>On the <b>Onion Web</b> (<span style="Color:#59316b;">Tor</span>), on Replit servers: <a href="http://sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd. onion">sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion</a>. In the end it is no longer hosted in my house, but maybe it's for the best, it's one less load for the poor little makeshift server I have (at the moment,
<del>a Nintendo Switch console with Ubuntu</del> the Raspberry Pi 3).
</li>
</ul>
<details>
<summary>
<h4><span class="twa twa-💾"><span>💾</span></span> Compatibility options for obsolete or exotic systems (Expand)</h4>
</summary>
<div>
<dl>
<dt><b>• Basic HTTP version</b></dt>
<dd>The site includes complex and relatively modern CSS functions, in order to provide epic graphic (and functional) effects. Ironically, although viewing the pages on really old browsers, which lack total or almost total CSS support, everything looks ugly but is readable... on browsers that are <i>both too old and too new</i > very serious bugs appear, which make it impossible to use some menus or even read the text!<br/>In addition to the fact that (where possible) I want to support old systems, these damned problems also appear on less popular but current devices, like the Kindle! In short, for too many browsers that do not include a setting to completely disable CSS, it was a must to do what I did: to the path <a href="./Plain">/Plain</a> on my domains clearweb there is a parallel root, and pages with the same content but CSS reduced to the bare bones.</dd>
<dt><b>• Unencrypted HTTP</b></dt>
<dd>To avoid problems I dedicated a dedicated subdomain to it, keeping HTTPS forced on the main one; but, since it doesn't require maintenance, I made sure that from the fifth (!) level domain "<span style="Font-Style: Monospace;">http</span>" you can access the site via unencrypted HTTP ( hosted by GitHub, this time): in short, the address is <code style="Text-Decoration:Underline;">http://http.sitoctt.octt.eu.org</code>. The contents are identical, of course, but finally you can browse the sitectt on stuff like <i>Internet Explorer 4</i> directly by contacting the server.</dd>
</dl>
</div>
</details>

### Gemini

<p>From now on, the CTTT site is also available as a Gemini capsule. To go there, you have to use a Gemini browser.<br/>Obviously (for those who know Gemini), everything is more neutered, and the form is not exactly the best because all the pages are a direct conversion from the HTML of the website ( and the program I use to do it is a bit broken, too).<br/>Go to the octocapsule, kindly hosted by koyu.space: <a href="gemini://koyu.space/octt"> gemini://koyu.space/octt</a></p>

### Feeds and notifications

<p>From now on the site (the blogoctt and the MicroBlog, specifically) has integrated feeds, which are automatically updated when I publish a new article!</p>
<p><b style="color:#ff6a00;">Atom Feed</b> (modern, <b>recommended</b>, contains complete posts): <b><a href="./feed/ atom.xml">feed/atom.xml</a></b><br/>RSS feed (obsolete, available for compatibility): <a href="./feed/rss.xml">feed/rss. xml</a></p>
<p>You need a compatible feed aggregator to use them.<br/>- On desktop PC I recommend <a href="https://thunderbird.net" rel="noopener" style="Color:#0080FF;" target="_blank">Thunderbird </a>o <a href="https://www.seamonkey-project.org" rel="noopener" style="Color:#003399;" target="_blank">SeaMonkey Mail</a>.<br/>- On Android I recommend <a href="https://f-droid.org/packages/com.nononsenseapps.feeder" rel="noopener" target ="_blank">Feeder</a> or <a href="https://f-droid.org/packages/com.poloure.simplerss" rel="noopener" target="_blank">Simple Rss</a >.<br/>- If you want to use a device like an e-ink e-book reader, the only universal software that - among other things - includes a feed aggregator, which I know and can recommend, is <a href="https://github.com/koreader/koreader" rel="noopener" target="_blank">KOReader</a>.<br/>- Tip: If you use Friendica, you can copy the link to the feed and paste it into the search bar, to be able to follow it as if it were a profile!</p>
<p>
<del>Furthermore, if you use any platform of the <b>Fediverso ActivityPub</b> (Mastodon, Pleroma, Misskey, ...) you can follow the bot of the ctt site, so as to receive new posts in your Home feed: < a href="https://botsin.space/@sitoctt" rel="me noopener" target="_blank">@sitoctt@botsin.space</a>!</del> For some complications that started at the end of August 2022 , the bot is not accessible from the largest Italian Mastodon instance, <i>mastodon.uno</i>, so it is almost practically useless now. I'm not taking it away just because it would cost me more to do that than to leave it where it is <b>:P</b>; However, I would have to create a new one, sooner or later.
</p>

## Sources and licenses

### Content Licenses

<p>All content on this site that I created (my own writing, original media, and most source code) is licensed under <a href="https://creativecommons.org/licenses/by- sa/4.0/deed.it" rel="noopener" target="_blank">"Creative Commons Attribution - Share Alike 4.0 International" (CC BY-SA 4.0) (<span class="CCIcons"><img class ="i1em" src="https://sitoctt-assets.octt.eu.org/Media/Icons/CC/CC.svg"/> <img class="i1em" src="https://sitoctt-assets .octt.eu.org/Media/Icons/CC/BY.svg"/> <img <="" class="i1em" span="" src="https://sitoctt-assets.octt.eu.org /Media/Icons/CC/SA.svg"/>)</span></a>, a free license that promotes sharing, and does not affect the legitimate rights to culture and collaboration of humanity in general.</ p>
<p>However, there are also contents that are not mine.<br/>In any case, if something comes from my hand, it will not have any indication of credits nearby. <br/>For the borrowed stuff, however, the source from which I took it and the license will always be indicated, whether this is in the public domain, Creative Commons, or not specified.<br/>Be careful, the credits for I often just leave the HTML and CSS stuff in the page's sources. So, just in case, check there for these kinds of credits. For things like images or texts, however, any credits are often a visible part of the page, close to the borrowed object (like a description); other times, the same object is a link which, if clicked, takes you back to the source. However, I thought of creating a section of the page <a href="#-Special-Credits">below</a> , dedicated to special credits (which I fill in when I remember).</p>

### Source code

<p>Speaking of site sources, the HTML source of the actual page loaded by the browser may be difficult to read. This is because I don't actually write the complete HTML directly to compose the pages. Not only would it be a mess to replicate my various navigation bars and sections across all the pages, and if I have to make changes to these then it's a hell to replicate this anywhere, but the HTML syntax is dirty and hard to write.</p>
<p>Precisely for these reasons, I created my own static site generator (also, like this site itself, incomplete but updated from time to time when I need it), which preprocesses my source code to include my bars in all the pages, generate the sections of the page (which appear in the menu on the right), generate the list of pages of the site (from the menu on the left), and <i>other little things</i>. Important step, any Markdown or Pug files are translated into HTML to be understandable by normal browsers, and here you go.<br/>Ah, yes, I'm saying "<i>other little things</i>" because this is stuff that at the time of writing this chapter the page is absent or incomplete, and by writing as I write I cover my ass and don't have to make future changes.
<pre class="Inline"><i>H and h .</i></pre>
</p>

#### Take it all!

<p>To finish, find all my sources on the respective Git repos.<br/>Those of my site (divided into multiple repos to keep the history clean), under the conditions described above: <a href="https:// gitlab.com/octtspacc/sitoctt" rel="noopener" target="_blank">gitlab.com/octtspacc/sitoctt</a>; <a href="https://gitlab.com/octtspacc/sitoctt-assets" rel="noopener" target="_blank">sitoctt-assets</a>.<br/>The ones from my generator, also released under a free license, the AGPL: <a href="https://gitlab.com/octtspacc/staticoso" rel="noopener" target="_blank">gitlab.com/octtspacc/staticoso</a>.</a> p>
<p>Another thing: in case it is of interest, to immediately preserve and/or share (excluding files that are on separate repositories, because they are absolutely linked) offline copies of the site, you can download a <b>zip </b> containing all compiled pages <a href="https://gitlab.com/octtspacc/sitoctt/-/jobs/artifacts/main/download?job=pages" rel="noopener" target="_blank" >here</a>!</p>

### Special credits

<details>
<summary>
<h4>List of credits and special thanks to those who borrowed material (Expand)</h4>
</summary>
<div>
<ul>
<li>List of <a href="#-Script-client-side">client-side scripts</a>, including some third-party scripts</li>
<li>Waaaves animated title: <a href="https://codepen.io/jh3y/pen/WNrXqYz" rel="noopener" target="_blank">Waaaves by jh3y</a></li>
<li>Font family: <a href="https://fonts.google.com/specimen/Space+Mono" rel="noopener" target="_blank">Space Mono by Colophon Foundry</a></li >
<li>CSS emoji package: <a href="https://twemoji.twitter.com" rel="noopener" target="_blank">Twemoji from Twitter</a>, via <a href="https:/ /gitlab.com/octtspacc/twemoji-astonishing" rel="noopener" target="_blank">Twemoji Astonishing</a></li>
<li>Some non-identifying 88x31 buttons: <a href="https://cyber.dabamos.de/88x31" rel="noopener" target="_blank">88x31 GIF Collection by cyber.dabamos.de</a> </li>
</ul>
</div>
</details>

## Confidentiality and transparency

As my legitimate interest, I use an analytics service on this website; both to improve what I do and to satisfy my pure curiosity to discover data.

The analytics service is based on completely <a href="https://github.com/arp242/goatcounter/blob/master/LICENSE" rel="noopener" target="_blank">free and open-source</ a>, hosted for free for low traffic sites by <b>GoatCounter.com</b>.

Apparently, with GoatCounter you don't need to include an on-screen warning that disturbs users to comply with the GDPR (see <a href="https://www.goatcounter.com/help/gdpr" rel="noopener " target="_blank">goatcounter.com/help/gdpr</a>), but, for honesty and transparency, I'm writing this paragraph anyway.

Only non-personal data is collected, anonymously, for the sole purposes of general statistics, and not for individual tracking. The service does not use cookies, and the data is not transferred to third parties. For further information, I can only recommend reading the <a href="https://www.goatcounter.com/help/privacy" rel="noopener" target="_blank">GoatCounter privacy policy</a >.

<style>
.CCIcons > Img, .CCIcon {
Display: Inline !Important;
Max-Height: 1em !Important;
Vertical-Align: Sub;
}
.CCIcons > Img, .CCIcon {
Margin-Left: 3px;
}

/*!-- Credits: https://codepen.io/jh3y/pen/WNrXqYz ---*/
.WavyText {
Text-Align: Center;
Position: Absolute;
Left: 50%;
White Space: NoWrap;
Transform: Translate(-50%, -50%) Translate(Calc(Var(--x, 0) * 1%), Calc(Var(--y, 0) * 1%));
font-variation-settings: 'wght' Var(--lower);
Margin: 0;
}
.WavyText Span {
Color: HSLA(300, 100%, 20%, Var(--alpha-l));
Animation: Rise 2.25s infinite ease-in-out;
Animation-Delay: Calc((Var(--index) - 6) * 0.225s);
Display: Inline Block;
}
@keyframes Rise {
50% {
font-variation-settings: 'wght' Var(--upper);
Color: HSLA(300, 100%, 30%, Var(--alpha-u));
Transform: Translate(0, -15%);
}
}
</style>
