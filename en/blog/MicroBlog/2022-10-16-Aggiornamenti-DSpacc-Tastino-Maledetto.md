+++
Title = "DSpacc Updates - Cursed Key"
Aliases = [
  "/Posts/MicroBlog/2022-10-16-Updates-DSpacc-Tastino-Maledetto.html",
]
Categories = [ "MicroBlog" ]
Dates = 2022-10-16
Lastmod = 2022-10-20
+++

{{< noticeAutomaticTranslation it >}}



A month ago, in the [post of October 18](./2022-09-18- Quando-Metto-Mano-Io-Spacc.html), I briefly said that it was the DSpacc, and what a new mess I had caused.  
Well, this time I did even worse; to understand the proportions, it is good to brush up on what I had written for a second.

The card I mentioned has arrived, the software modification to improve it works, and I'm still exploring it all a bit. I will have time to talk about everything in a long article, which I am already writing (but I don't know how much longer it will take me).  
What is important to talk about now is a problem that arose... I don't even know exactly when, but I only noticed it now: the L back button was causing some problems.

I saw that pressing key combinations to access the flashcart system menus had no effect. Getting suspicious, I decide to download a homebrew to test the keys, Diagnose (which can be found from [GameBrew.org](https://www.gamebrew.org/wiki/Diagnose){[:MdTgtBlank:]} [[pag. archived](https://web.archive.org/web/20220818023822/https://www.gamebrew.org/wiki/Diagnose){[:MdTgtBlank:]}]), and I actually confirm that the L button does not respond to the inputs.

On Nlhlehde's chat they advise me to soak the button in alcohol to clean it, and then give it some exercise - or, if I wanted to repair it correctly, unsolder the button and put a new one on.  
At that moment I get bored of opening the console, but I see that two minutes of exercise magically makes the button work again. The operating state, in reality, lasts just a few minutes, and was questionable at the time: on average, 1 click out of 3 was recorded.

Today I finally decide to disassemble the DSpacc, to see if I can do the service on the key. To my surprise, I see that this is sort of raised from the side; one of the many GND pins has desoldered, while the only one that closes the other side of the circuit, you can barely notice, has broken.

![Macro photo of raised key.]({{< assetsRoot >}}/Media/Misc/DSpacc-Shoulder-Macro-Front.avif)

Now, it cannot be said whether the problems registering the presses were due to the externally smashed button, or to internal problems that have nothing to do with the initial malfunction of the button (and the final destruction occurred due to my pressing the button a hundred of times a minute to make him exercise).. what is certain is that alcohol is not enough to fix 😅.

Initially, I try to solder just above the broken leg, which in itself should solve the problem; unfortunately, the side of the pins is so short, and the button in such an awkward position (since we are talking about a back button), that the solder on my pin touches a little next to it and shorts the ground. This makes the key always pressed, and therefore it's even worse (my flashcart menu doesn't open if any key is pressed at startup!) than what I had before.  
I try to fix the soldering a bit, but no, I can't improve anything.

At this point, I think about desoldering the button, because anyway... and it works fine, perhaps due to the size of the SMD device, small but not too much: the board has remained clean.  
Time to take a new button from the many I have aside, even if much larger than the dorsal one on the DS, and solder it.  
Oh well, enough, I'm bored of going around it any more: I try to solder a wire on the main contact, but the solder doesn't stick. The DSpacc PCB is deadly, oh. I try and try again... and in the end the metal pad to solder on comes away. A classic, dare I say, always ends like this! 😑

![Macro photo of the soldering area of ​​the backbone, with the central pad destroyed.]({{< assetsRoot >}}/Media/Misc/DSpacc-Shoulder-PCB-Pad-Broken.avif)

Was it better to have a back button that works with great difficulty, or is it better not to have one at all? I don't know, and I don't want to know. The fact is that now I will have to find solutions to the numerous problems resulting from this bad story,...,,,..,

_**P.S, update 2022-10-20:** I'll give you a photo of the broken button disassembled, before throwing it away, why not? The microSD in the corner acts as a scale, to make the dimensions clear._

![Macro photo of detached and disassembled button.]({{< assetsRoot >}}/Media/Misc/DSpacc-Shoulder-Button-Disassembled-Macro.avif)