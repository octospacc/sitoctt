+++
Title = "👾 NDS emulation, Google Play, and a dark history"
Description = "What began as a search for an NDS emulator that ran, well, on my Android, quickly revealed absurd truths and events..."
Aliases = [
"/Posts/2022-07-27-NDS-Emulation-Google-Play-e-una-Storia-Oscura.html",
"/Posts/2022-07-27-0000-NDS-Emulation-Google-Play-and-a-Dark-History.html",
]
Featured_Image = "@/Media/Android-NDS-Emulation/ACWW-on-Androids.avif"
Date= 2022-07-27
Lastmod = 2022-07-29
Categories = [ "Technology", "Gaming", "Mobile" ]
+++

{{< noticeAutomaticTranslation it >}}



The Nintendo DS. Enough, there's no need to say anything else; after all, among _connoisseurs_, we understand each other.
A console that, 15 years ago, was able to innovate the market with the same spirit with which the Gameboy innovated in its time. A console whose exclusives remain, even today, timeless pearls.

As much as I would like to sing endless praises to the DS, however, today I'm here to talk to you about something else.
Today I'm talking to you about emulation, and about a specific area of the **NDS emulation scene: the Android** one.

## Emulation in general

Many consoles, in their years of life and even after, are [reversed](https://it.wikipedia.org/wiki/Reverse_engineering) by passionate and capable people who are interested in understanding how these work, and then perhaps create emulators, i.e. software that replicates the operation of the console on a completely different machine.
The Nintendo DS, of course, is no exception.

Typically, emulator development occurs under one of 2 philosophies:

- Create something fast, that works, and immediately allows as many people as possible to use the emulator as a practical alternative to the original console;
- Create something accurate and as technically close as possible to the original console, in order to preserve it in a metaphysical form for the future, putting speed into the background, which can only be achieved by running the emulator on a sufficiently powerful machine, even if also future.

### "Here and now" emulation

Although the second philosophy is undoubtedly the most noble, that of the "here and now" is also very important: it allows those who cannot afford the original console or have reduced it to [spacc](https://wikispacc) to play .miraheze.org/wiki/Spacc), makes things easy for those who want to develop their games, and improves the lives of players who, with an emulator, can enjoy many conveniences never seen before.

At the moment, I am one of the people who play on emulators despite owning the original console.
I have a Nintendo 3DS XL, which is backwards compatible with DS games, but badly, to the point that for me it's worse than playing on a phone: the games take a long time to start, they scale poorly on the screen, and it's an additional device (bigger and heavier than my smartphone) to carry around.

## The state of the NDS emulation

DS emulation on mainstream PCs is currently in very good shape.
The best emulator there to date is undoubtedly [melonDS](https://melonds.kuribo64.net): free, supports online play, is fast enough, and is accurate. It doesn't run very well on PCs from maybe 10 years ago but, in this situation, if you are content to play offline, you can always count on the excellent [DeSmuME](https://desmume.org) (which is apparently back in development for a few months?!).

The simple fact that I'm writing this article, however, should make you smell trouble; problems that, in fact, exist.
While on PC we can say we are fine, **on mobile the situation is not rosy at all**.
In general, on low-end embedded devices (not just smartphones, even single-board computers), the two emulators I just mentioned don't work very well.

### My mobile experience

On my current phone, with Android 10 operating system (stock variant from the manufacturer Xiaomi, MIUI 12) and SoC [Snapdragon 662](https://en.wikichip.org/wiki/qualcomm/snapdragon_600/662), neither melonDS nor DeSmuME they make the games run satisfactorily.
Of both emulators I tried both the respective unofficial native Android ports, and the available [Libretro](https://www.libretro.com) cores (already present or downloadable in the latest version of the respective applications below) for the [RetroArch](https://www.retroarch.com) and [Lemuroid](https://github.com/Swordfish90/Lemuroid) frontends.

So, before continuing I should perhaps make a clarification.
The tests I've done in recent days were done with just one game, namely _Animal Crossing Wild World_, for a very simple reason: at the moment I'm interested in playing this one on my smartphone, and that's it. So, the only thing I care about is that this game runs perfectly.
Already with this, I hear people screaming at the lack of scientific nature of my tests, which are actually limited in scope; let them be satisfied, I say, **this is a personal blog, not a research laboratory** 🥱️.
In any case, I have tried all these emulators several times in the past with other games too, and my opinions today are more or less in line with my past ones - but now I'll go into detail.

### Varied tests

Keeping in mind that these tests were done simply by looking at the performance of the _Animal Crossing Wild World_ title screen (which requires approximately the same performance as the game running in the overworld requires):

• APK compiled on November 13, 2021 of the unofficial port of [melonDS for Android](https://github.com/rafaelvcaetano/melonDS-android):
: It runs practically as the previous version did about a year ago, July 2021, the period in which I got the new phone;

<meta>

• Core Libretro by melonDS, a little more updated:
: Runs slightly better than the native port, but not quite perfect;

<meta>

• APK compiled on August 27, 2017 of the dead fork of [nds4droid by tangalbert919](https://github.com/tangalbert919/nds4droid), whose (equally dead) upstream project is an unofficial Android port of DeSmuME:
: Perhaps with frameskip at 3 it runs a little better than the APK, but a little worse than the Libretro core, by melonDS;

<meta>

• Core Libretro by DeSmuME:
: It basically runs like the latest version of the original nds4droid branch (2016) (yes, I also tested that APK just for, but I won't say it other than because it's not relevant); Worse than anything seen above.

As a bonus, I also mention this other emulator that I discovered by chance while looking for stuff: [NooDS](https://github.com/Hydr8gon/NooDS). The goal is to be a fast emulator, but at the moment, from what I have seen and from what the README says, we are not there yet.
It works more or less like the melonDS APK I mentioned so far. I hope that development continues and is successful, however, the project promises.

So, is this the end of the story? Should I be satisfied with emulating the game slowed down by at least a good 7-10% on melonDS? Well, actually, no.. _maybe_.

## Only one solution

In the Android NDS emulation scene, all the emulators I've talked about so far are actually the least famous (although melonDS has been gaining traction lately). There is a much better known one, which anyone who has tried to emulate the DS on Android at least once will know at least by name.
So, let's talk a little about [Drastic](https://play.google.com/store/apps/details?id=com.dsemu.drastic).

Drastic is the fastest Nintendo DS emulator for Android. It's not accurate at all, but it runs all games without major glitches, and already on low-end smartphones from 5 years ago it can run practically any 2D and 3D game at **full speed**;
On even older devices it may be a little iffy, but it remains a true miracle. For example, look at the videos under "_[2019-09-17 15:16] Various tests with the Galaxy Player_" on my page [MicroBlog Archives of September 2019](./MicroBlog-Archive/2019/09/index .html). It is absolutely absurd that that device, which I bought for just 90 euros 9 years ago, is already able to emulate the DS in the first place; let alone making a game like Super Mario 64 DS run excellently.

Where's the catch? Eh eh, where do we start?

### Trouble ahead

First of all, Drastic is **proprietary software**; This alone, for me, is bad.
Even if, unfortunately, I can't do it 100%, I would like to use as much free software as possible. Since this emulator is the only one that is a sliver, there wouldn't be a real alternative.
I'm keeping the proprietary emulator and never mind, it's not the end of the world, also considering that the games I want to emulate are themselves proprietary, and that even the original console (in my case, with the 3DS, even worse, because it has a entire OS rather than just a BIOS) is proprietary.

The real serious obstacle here lies in the fact that Drastic integrates a **DRM**, i.e. a Digital Restrictions Management system.
In theory, this would mean: if you pay for the program, you can't use it unless you find or create a crack.
At least, this is the theoretical idea of DRM in general. In practice however, and the [Defective by Design FAQ](https://www.defectivebydesign.org/faq) (an anti-DRM campaign) certainly explains it better than me, **DRM does** more** harm** to consumers than it does good to producers.

In this specific case, what is Drastic's DRM problematic, besides the fact that by design it denies access to a useful program to those who cannot spend €4.49?
It's problematic because it relies on purchasing from Google Play; this means that those who do not have Google Play Services and Google Play Store on their device - like me who, for privacy and performance reasons, have always removed them from mine for years - even if they perhaps make the purchase from the Google Play site and install the application by logging in with the Google account on [Aurora Store](https://f-droid.org/packages/com.aurora.store), will not be able to use the purchased app, because it will not have the possibility to verify the purchase on the device.

### The appikapposa tradition

In short, in any case, the only possible solution to actually use the little program is to have a patch.
In the past, both when I couldn't afford Drastic, and when I can but no longer have Google Play, searching for the patched APK on the Web - done every time I updated Android or changed devices - was in itself the boring game that it preceded the prettier game (the one emulated in the working app).
Often it was necessary to look for a new APK, both because Drastic's DRM has always been stupid and the cracks often stopped working, and because the interactive part of the application was and is written with feet: it uses system APIs in strange ways, which With each new version of Android Google breaks, and therefore breaks the app.

A version of Drastic that I used on my old phone with Android 7, in fact, doesn't work on my current one: the file selector simply doesn't see files and folders in the storage memory. Even an old trick, using an external file manager to open a ROM in the emulation app, no longer works on Android 10: the app crashes.
So, I find myself having to look for the most updated cracked version.
I looked it up the other day and apparently downloaded something that worked. It's a shame that - and this is the shitty DRM I was talking about, also according to what people report who, on the official Drastic forum, ask for support despite having pirated the program (it takes courage oh, a medal for these fearless heroes) - after you start a game just once or twice, every subsequent time the app closes in your face (that's right, it doesn't crash, it closes, because the Android error message doesn't come out).

At this point, the situation looks really bad. What to do?

## What is Google Play hiding?

I remember that on the Play Store itself - and I'll come back to the implications of this at the end - you can find a free application, [Free DS Emulator - For Android](https://play.google.com/store/apps/details ?id=com.cpu.free.dsemulatorv6). I had tried it in the past and, surprisingly, it ran games like Drastic.
How is this possible? So is there another fast emulator for Android? Absolutely not, because this app **is Drastic**.
Of course, it is Drastic that has undergone some substantial changes, including, in addition to the removal of DRM: a total rebranding, the restructuring of the menus, the addition of invasive advertising, the rewriting of the file selector (which now at least works, but it is very rough), and, for some absurd reason, the removal of some emulation settings; but it remains technically Drastic.
We are therefore talking about a real **unauthorized copy** of the famous emulator, **created with the sole purpose of profiting from the work of others** thanks to the advertisements (which, let's give credit where credit is due, in the app Drastic's original at least there aren't any) - advertisements that I wouldn't see anyway, because I have [Adaway](https://adaway.org) installed and always block Internet access to proprietary applications.
The only thing I'm surprised about, and quite a bit, is that I found this **illegal app on the Google store**.

However, the creators of the app have put in a lot of effort in removing any reference to Drastic. They _almost_ succeeded.
The infamous name never appears in the program, but a decompilation of the APK file via [apktool](https://ibotpeaches.github.io/Apktool), and then searches in all the extracted files (with `grep -iR Drastic *` ) of the string "Drastic", shows that the name of the app from which the suspicious one stole the code is present 2 times in total, in 2 different files. Just so, here's the confirmation, in case there were any doubts about the nature of this application.

![Screenshot of the above grep command.]({{< assetsRoot >}}/Media/NDS-Android-Emulation/Free-DS-Emulator-Grep-Drastic.avif)

### New research

What can I say? This app works, and is still a great solution, despite being slightly worse than the original Drastic.
Except that, at a certain point, I think: is it possible that this is the only _illegitimate_ fork of Drastic found on the Play Store?
Consequently, I open Aurora Store and start looking, hoping to find better. Apart from the various rebrands of nds4droid - these too exist only to allow those who put them online to profit from advertising, given that the official app is already on the Play Store, free and without crap - some other elements on the list attract my attention Attention.

I download 2 apps in particular, very similar but with different names and colors.
The screenshots on the application pages smell like scams from a mile away, they look like those apps you find on Aptoide or other alternative stores when looking for cracked programs. Those apps that: if all goes well, do nothing other than show dozens of advertisements when opened; if it goes bad, they're malware, bluntly.

Both, when I open them, present me with a "Play" button which, when pressed, starts the installation of an APK (I think patched) of Drastic (!!!).
You understood correctly: this **app**, **coming from the Play Store**, **contains** in its package **an** APK file (don't even download it from the Internet!), **cracked** , from another app. One of the two, among other things, also integrates the pirated ROM of a DS game that I've never heard of before: _Zoo Quest Puzzle Fun_. How kind, what a nice gift, not only the free emulator but also the free game. It seems like we're on strange app stores, but instead we're on Google Play.

![Screenshot of the Google Play pages of the 2 apps, side by side, and screenshot of the list of copyright infringing files in one of the two APKs.]({{< assetsRoot >}}/Media/Emulation-NDS-Android/Adware-Emulator -Installers.avif)

For the skeptics, I not only refer you to <a href="https://mastodon.uno/@octo/108709092014240395" target="_blank" rel="noopener">this video</a> that I recorded a few days ago , but I invite you to download the applications in question (and, perhaps, _block network access or deactivate the Internet connection_ before starting them) and see everything first-hand: [Green Emu NDS](https://play.google .com/store/apps/details?id=com.nud.ndsemu), [The FrieNDS Emu](https://play.google.com/store/apps/details?id=com.blackversion.citra_platinum).
However, it wasn't a helpful discovery: the goodies given by these apps have the same problems as the Drastic APKs found on the web.

### Finally..

In my visit to the store, finally, I see yet another app that smells like a rebranded Drastic, I don't know why, perhaps due to the layout of the buttons in the screenshots: [vDS](https://play.google.com/store/ apps/details?id=com.icorewwwi.vDS). It costs a good €1.29 but, luckily, after less than 10 seconds of searching I already found the APK reuploaded by other people on the Web, and I installed it.
Upon opening it, I confirm my suspicions: the main menu is identical to Drastic's, except for the changed colors. All other menus are also identical, and the emulation engine too. As if that wasn't enough, the folder where it saves the data is exactly the same as Drastic (`/sdcard/Drastic`!). They didn't even try to hide the theft, these guys!

![Drastic and vDS home menus, side by side for comparison.]({{< assetsRoot >}}/Media/Android-NDS-Emulation/Drastic-VS-vDS-Main-Menu.avif)

Anyway, yes, the emulator works, it opens files and doesn't do the trolling of closing in your face. I've been using it for 3 days now, and I have no complaints.

So the story, at least for me, ended well.. but **I could add something**.

## Google, damn.

The [Google Play Developer Policy](https://play.google.com/about/developer-content-policy) categorically prohibits applications that, like the ones I mentioned, violate copyright. Yet, these 4 who are literally stealing all the code of another app, proprietary and sold for a fee, are all still there. Some for months, others for years, but they are there.
Technically, even applications that directly and immediately integrate installable apps into them for the sole purpose of being to all intents and purposes "packaged installers", like those 2 specific ones, would be against Google Play rules, because they would count as a alternative app store~~ would violate specific rules regarding the use of the Android package installer by apps.[^ APK inside the apps]

In all of this, however, **What does Google do?** What does Google do when those that violate the rules are not very famous applications that at the same time bring Google itself some money?
**He really doesn't give a damn.** I thought that no one had tried to report these applications to Google for removal, but actually someone did... and got nothing. I tried too but, after 3 days, everything is still on the store and I haven't even received a response via email from Google.

And it is precisely in this way that, with this story, today we reconfirm two important facts.

## What did we learn?

1. **DRM proves**, once again, not only as useless (avoidable, given that I would now be playing with a modified version of Drastic with the DRM removed), but above all as **harmful** (given that, even if I bought Drastic according to the rules, I still couldn't use it on my devices);
In general, programs that use DRM, i.e. proprietary software that does not even guarantee "[freedom](https://www.gnu.org/philosophy/free-sw.it.html) 0" (being able to run the software as you wish), they prove to be unreliable. It is better to always prefer software without DRM and, when possible, completely free and community-based.

2. **Google**, like too many other multinationals, **does not deserve a shred of trust**. He has rubbish on his store and he deliberately doesn't care, even though in theory he has automatic systems to control marsitis which, among other things, [often cause innocent victims](https://www.ghisler.ch/board/viewtopic .php?t=76643).
Before the fanboys arrive: no, okay that the Apple App Store is a little better off than the Google Play Store - also because the fee to publish something there is a huge sum of [$99 per year]( https://developer.apple.com/it/support/enrollment), instead of the [one-off $25](https://support.google.com/googleplay/android-developer/answer/6112435?hl=it# zippy=%2Cstep-pay-registration-fee%2Cstep-pay-the-registration-fee) from Google - but even there they occasionally throw out questionable apps, often predatory for users. At least, though, Google sees allowing the installation of applications from unofficial sources as a standard part of its operating system, while Apple actively puts a spanner in the works on sideloading because "it's for user safety";
In general, you should be wary of the master fathers, and prefer the web pages of the developers themselves to download the apps, or stores like [F-Droid](https://f-droid.org).

## I have a little present..!

And, finally, I can say I'm done. I leave you with a **little gift**: <a href="https://archive.org/details/Emulation-Archive" target="_blank" rel="noopener">archive.org/details/Emulation-Archive< /a>.
On this Archive.org page I created I put a few things.
First of all, the vDS APK, which however only works from Android 4.1 and up; For this reason I also put 2 patched APKs of Drastic vero, one from perhaps 3 years ago and one even older, which instead work from Android 2.3 _up_ ("up" meaning: until the file selector problem broken does not appear, which I believe is up to Android 5, including it, on many devices). **Everyone should be able to play!**
In the archive there are also other scattered emulators, even free ones, of which I have however archived the right code to preserve it.

---

Thanks for reading. I invite you to follow the blog, even if not in all future articles there will be free binary files 😁!
**P.S.**: How cute are all my androids running _ACWW_ together? I'll leave you the photo, just for.

![Photos of 3 of my pocket Android devices, showing the Animal Crossing Wild World title screen.]({{< assetsRoot >}}/Media/NDS-Android-Emulation/ACWW-on-Androids.avif)

## {{% i18n notes-refs %}}

[^ APK inside the apps]: **Update 2022-07-29**: I corrected this part because I remembered that apps like this violated the rules because they "would count as alternative app stores", but in reality I can't verify the What. However, I found this obscure developer help page, which clearly says for what purposes apps can call Android's system package installer: <https://support.google.com/googleplay/android-developer/answer/ 12085295?hl=en#zippy=%2Callowed-uses-of-the-request-install-packages%2Cinvalid-authorization>. The practical purpose of these apps, that of being trivial wrapped installers, would technically not be okay.
