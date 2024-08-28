+++
Title = "The unexpected advantages of the Linux stick"
Aliases = [
  "/Posts/Archive/2022-05-07-The-Unexpected-Advantages-of-the-Linux-Key.html",
]
Categories = [ "Technology" ]
Date = 2022-05-07
Lastmod = 2022-08-13
#Template = "loli-documentatrice.html"
+++

{{< noticeAutomaticTranslation it >}}



One thing I did months ago that, so far, has proven to be a **winning choice**, was **install** a **Linux**-based operating system, in persistent mode, * *on** a small **USB stick**.

The reasons why I wanted to do it initially are perhaps simple and banal, but it gave me, upon careful analysis, some **unexpected** advantages that were much more than welcome.

### Why was the pen needed?

The initial need for the key arose months ago from the fact that, in the computer room at school, I had to, like everyone else, log in to my GSuite account to access the virtual computer class. This apparently simple thing, in my case, hid two obstacles:

- **My password is** dozens of random characters long. I allow myself this because I use a password manager (for all my accounts), but typing by hand every time is painful;
- **Google doesn't trust the school's IP address**, and would ask me to confirm access, but as they haven't added any security methods to the account, they ask me to add a phone number. Just because he asks it in this way, with a clear excuse, I will never give my number to Gluglu: it makes no sense, if bad guys stole my account username and password, they could simply verify the latter with their own number, and according to Google it will be clear that the account belongs to them... but I won't go further.

I could have used any pen drive, with a portable Windows browser downloaded on it, containing my Google session saved from home, with access logged in with my IP address, and I would have solved the problem.  
I could have, _but it wouldn't have been fun_.  
And this is where the idea of ​​the key with an entire operating system emerged, bootable on any x86_64 PC, totally independently of the internal disk of the PC in question.

### Choice of hardware

First, **I thought about the memory I would use**.

In terms of ability, I'd like to say that I did it just for the challenge, but the truth is that, on the few very large pen drives I have, I keep other files, which I have to keep on the pen drive, and moving them onto many small pen drives is annoying and brings to future confusion. So, I took one of my 2 GB pen drives, and I told myself that I would make do with it (_and, **spoiler**, I was right, even if it wasn't easy_).  
In terms of speed, I only thought about avoiding stuff with levels lower than those of USB 2.0, because in any case I don't have any fast stick available. My only stick with a USB 3.0 bus (correctly detected by Linux as USB 3.0) is as fast as a 2.0... **Damn Kingston**.  
I have fast microSD cards, but my USB adapters for those cards are all slow.

In short, I take the trusty 2 GB USB 2.0 stick, mint color (_it would be perfect as a Linux Mint installation media!_), also from Kingston, and off I go.

![Photo of the USB stick I dedicated to Linux.]({{< assetsRoot >}}/Media/Chiavetta-Linux-2022-05-07.avif)

### Choice of software

Once you have chosen the stick, the **choice of distribution** Linux remains, perhaps even more important.

Here, not only are the popular distros (Ubuntu, Fedora, Mint, Pop!_OS, Manjaro, ...) too big to fit leaving room for a persistent partition, but they would be unusable due to the slowness of the stick.  
Fortunately, I had a path in mind that I could follow, because, in the past months, out of my curiosity, I had learned something about the world of lightweight Linux distros.

It was a time when I had just become interested in **[Alpine Linux](https://alpinelinux.org)**, for its ideals of **lightness and minimalism**. I even used it on desktop for a few weeks.  
It was responsive and snappy, thanks also to the presence of [musl libc](https://en.m.wikipedia.org/wiki/Musl) instead of the now bloated [GNU libc](https://en.m.wikipedia .org/wiki/Glibc), but the need to sometimes configure small things by hand, even after the initial installation, led me to move away from it. However, I thought it would be suitable for a system installed on small, slow storage, with few applications.  
I then installed it, including among the essential software (as well as video and audio servers): [Window Maker](https://www.windowmaker.org) (a lightweight window manager), [Firefox](https:/ /firefox.com), and smaller GUI applications, including: a terminal emulator, a file manager, and a text editor.

All in all, it worked well and quickly but, despite the few apps installed, the memory was overflowing. This would give me some problems later: for example, there was no space to put Minecraft and play [SpaccCraft](https://wikispacc.miraheze.org/wiki/SpaccCraft), which I wanted because it can be useful.  
This - together with the fact that later I thought that, perhaps, encrypting the pen drive would be necessary to protect my data against theft or loss of it, but my attempts to encrypt the already installed system failed - made me stop for a moment to reflect_.

Since I would have had to reinstall the system anyway, I took the opportunity to **change distribution**.

Although in the past, when I tried a little something, it had given me some trouble as a persistent system, I decided to give **[Puppy Linux](https://puppylinux-woof-ce.github.io)** a serious chance.  
The base image of the latest version of Puppy (at the time of writing, 9.5) weighs just 400 MB, but includes a fairly complete desktop system in itself, with dozens of preloaded applications for the most varied needs.  
How can it be so **compact but full of stuff** at the same time? Thanks to the use of [SquashFS](https://en.m.wikipedia.org/wiki/SquashFS), a read-only compressed file system, which supports extremely efficient compression algorithms such as [LZ4](https:// en.m.wikipedia.org/wiki/LZ4_(compression_algorithm)) and [ZSTD](https://en.m.wikipedia.org/wiki/Zstd). In fact, if it were completely decompressed, the image would weigh around 2.5 GB. Even the choice to include **more minimal applications**, however, contributes a lot, if you consider that practically all Linux live CDs use SquashFS, yet those of more traditional distributions weigh several GB.

### To date

**Puppy is the distribution that I still have** on the flash drive.  
Except for a few minor problems (like: how the hell do I connect a Bluetooth keyboard??? and well, now I don't need it anymore_), it works very well and is fast in every way.  
Having set up the [LUKS](https://en.m.wikipedia.org/wiki/Linux_Unified_Key_Setup) encryption on the writable partition, now my data (personal files and browser sessions) are protected against any accidents.  
The built-in window manager, [JWM](https://en.m.wikipedia.org/wiki/JWM), is also very clean and I quite like it - although I wish it had some window alignment function (it doesn't seem to has anything, or am I wrong?).  
And now, finally, I have enough free space; and I also have Minecraft!
 
![Screenshot of my Puppy Linux desktop, with neofetch open on the terminal emulator.]({{< assetsRoot >}}/Media/Screenshots/Desktop-Chiavetta-Linux-2022-05-07.png)  
_Background credits: [pixelartmaker.com/art/becdd8955dc57eb](http://pixelartmaker.com/art/becdd8955dc57eb)_

### Important benefits

Well, with this magical little pen I have **solved the problem** of accessing Google, but I would **continue to use it** even if I no longer need it for that purpose.  
The reasons, all important advantages, are as follows; some apply to live Linux in general (even amnesiac ones), others apply only to persistent systems like mine - all, however, are relevant when using a public PC:

- I have a **system that adapts** to my tastes, that I can carry in my pocket and use **on any PC**, without ever having to reconfigure anything (except, sometimes, the BIOS settings) .
- The system in question, contrary to what I could find on the vast majority of PCs around (Windows), **respects my freedoms**, and does not end up my data in the hands of a monopolistic corporation which, in exchange , it would give me absolutely nothing: on any PC I use, even those that aren't mine, I remain consistent with my values.
- The **secrecy** regarding what I do on the PC at that moment is much **more certain**, as is the security of my data: you are only right to be wary of any operating system installed on public PCs, there could be any spy tool installed (and, in fact, this is the case on some of the PCs at school: there is a remote desktop control program designed for schools, [LanSchool](https://en.m.wikipedia.org/ wiki/LanSchool)).
- I have all my **essential data always with me**, whether they are simple documents or open sessions on different apps (like the always convenient [Element](https://element.io), for messaging and exchanging notes and small files between my devices).
- Some **particular software**, such as Minecraft Java (which, apparently, may not work on some Windows PCs, because perhaps the GPU drivers do not work correctly, and Windows does not have the OpenGL emulation software from [Mesa] (https://en.m.wikipedia.org/wiki/Mesa_(computer_graphics)) system level, as opposed to Linux), **should always work**!
- I have an excuse to indirectly remind people that, even in 2022, **USB sticks are relevant**, even ultra-low-end ones.

### Some insights

I can conclude by saying: **you too should adopt a persistent Linux stick**, if you sometimes use PCs that aren't yours, you won't regret it! In truth, I tell you, do it even just for fun, if you have some disused USB stick in a drawer :)

Here are the websites of some distributions that I _didn't_ mention in the text, but which I have tried in the past or think are worth checking out:

- [SpaccCraftGo](https://github.com/Spacc-Inc/SpaccCraftGo-Images) - Puppy Linux rebranded from [Spacc Inc](https://wikispacc.miraheze.org/wiki/Spacc_Inc), with the inclusion of SpaccCraft in the system;
- [Slitaz](https://slitaz.org/en) - 50 MB live rolling release system;
- [Porteus](http://porteus.org) - Live distro based on modularity;
- [antiX](https://antixlinux.com)
- [Slax](https://slax.org)

### 🏷️ Notes/References

[^ Update 2022-08-13]: **Update 2022-08-13**: I imported this article from my old blog (<https://noblogo.org/loli-documentatrice/gli-inexpected-vantaggi- of the-linux-key>), to better preserve it and to test some things. I took advantage of this to, in addition to improving the formatting, partially change the form of some sentences. The content remains practically the same.