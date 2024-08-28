+++
Title = "⌨️ The idea of ​​a homemade physical smartphone keyboard"
Description = "With difficulty I bought an ultra-compact keyboard. The idea is to build a keyboard cover for my phone, but I encountered problems!"
Aliases = [
  "/Posts/2022-07-03-The-Idea-of-a-Physical-Keyboard-for-Smartphone-Made-in-Home.html",
  "/Posts/2022-07-03-0000-The-Idea-of-a-Physical-Keyboard-for-Smartphone-Made-in-Home.html",
]
Categories = [ "Technology", "Mobile", "DIY" ]
Dates = 2022-07-03
Lastmod = 2023-03-21
Featured_Image = "@/Media/Cover-Tastiera-mobilefun.com.avif"
+++

{{< noticeAutomaticTranslation it >}}



Maybe a year ago, partly out of curiosity and partly because I already imagined that it might have been something convenient, I developed a marginal interest in smartphones equipped with complete physical keyboards.

I don't mean the damn numeric keypads, which you still see on non-smart phones today, I mean keyboards with dozens of individual keys dedicated for letters and symbols.  
This type of keyboard was already rare to see on phones prior to the smartphone era: it first appeared not on ultra-cheap models, but in any case it might not always be very comfortable due to its small size.  
The more smartphones began to spread, the more physical keyboards began to disappear, even if they rarely existed on some modern phones, and even of generous dimensions.

I don't remember if this time last year was just before or shortly after I bought a new smartphone, my current one today; the fact is that I had to choose it based on precise and restrictive criteria, first and foremost the cost and, unfortunately, there was no low range with a physical keyboard.

## A new idea

As time passed I forgot about the issue a bit, until, a few weeks ago, I came across a video on Invidious ([YouTube/JXdLzinnqms](https://invidious.snopyta.org/JXdLzinnqms)) which shows a homemade modification to a smartphone.  
The video shows, and the linked discussion on cover is thought out.

I immediately had the desire to create something like this but, as I searched, I started to think that this type of cover is no longer produced by anyone... it was absolutely impossible to find one, not only at a good price, but at all. Neither online nor in physical stores.

Since there was no hope, I tried to change my strategy slightly and look for a very small Bluetooth keyboard, but without any strange supports such as covers included: just the rough keyboard, I would have made my own arrangements to attach it to the phone.  
The search on Amazon was absolutely fruitless, meh. On AliExpress, for around €13 there was the keyboard I was looking for, but for me buying there is a hassle to say the least. Luckily, however, one of the many all-purpose housewares (those that sell billions of films) in my area had the product I needed, for just €2 more than I would have paid for it at Ali.  
A bargain, so I bought it.

![The front of the mini-keyboard]({{< assetsRoot >}}/Media/Mini-Bluetooth-Keyboard/Keyboard-Front.avif)

## After purchase

At home I took it to charge for a while and tried it on the fly. What can I say, it worked and I didn't find the feeling when typing bad, even though we're talking about a membrane keyboard.  
So everything is fine.  
Or so it seemed.

The next morning, I try to turn on the beautiful little object again, to do some more tests. It doesn't turn on. That? As? I put the keyboard back on the charger, and it actually works after two minutes.  
How strange, yet I kept it charging for hours the day before. Maybe it didn't charge well from my PC port, so this day too the keyboard remains charging, this time from the block I use for my cell phone and other devices.

### Investigating oddities

The next morning, same issue. Whatever the case, it's evident that the battery is taking a heavy drain, out of nowhere, for some reason. For the record, the keyboard has a physical switch, which I never forgot to turn off after putting the keyboard away... all very strange.  
I decide to let it charge a little, then disassemble it, and measure the voltage of the lithium battery soldered to the board with a multimeter, which I notice drops by 0.01V approximately every 10 seconds. Oh.

Assuming the board is properly designed, so that the physical ON/OFF switch cuts the current between the battery and the board where it should, and that the battery management circuitry isn't a dud, a problem like this is to blame. it can only be one: the banal old age of the battery.

![Photo of the small keyboard battery]({{< assetsRoot >}}/Media/Battery-SCW302030-2015-08-27.avif)

In fact, not only was the battery visually quite swollen, but it has a date on the outside: "2015/8/27", almost 8 years ago.  
I would swear that the keyboard itself is even older, considering the references to a slightly earlier era present on the box and the instructions: iPhone 4 and pre-7 iOS, Galaxy S4 and a visibly very old Touchwiz, Windows Mobile 6 and Windows 8 desktop, Symbian 3, the PS3... well, it's been a while.

![Scans of some parts of the back of the box and instructions, containing references to old things.]({{< assetsRoot >}}/Media/Mini-Bluetooth-Keyboard/Rimandi-Vecchi.avif)

## Bad ending

What can I say. Should I have expected a problem like this? Maybe yes. Surely, however, I doubt that other people in my place would have expected this.  
Finally, the only thing I can say is that this article should not have come out; or rather, not with this end. I should have talked about the already made Prototype 0 of my smartphone stand that adds this tiny keyboard, but, unfortunately, I feel like I haven't had a chance to test it enough.

Hoping to be able to solve the battery problem (but I think so)[^New Battery], in the next article, of what I believe will be a series, I will explain how I fixed everything, and I will illustrate the curious Prototype 0.

[^New Battery]: **Update 2023-03-21**: I was passing by here, fixing some internal things in old files, and I thought: even if in the end I haven't (yet) written any articles about Following this, at least one update note here is worth writing. **Shortly after this post** I soldered an old lithium battery I had around the house, more or less the same size, and... **the keyboard now works** perfectly. Not bad come on, **I solved** the problem **without spending** any more money!