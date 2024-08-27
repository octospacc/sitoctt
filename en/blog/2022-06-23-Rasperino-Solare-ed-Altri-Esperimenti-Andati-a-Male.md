+++
Title = "☀️ Rasperino Solare (and other experiments gone wrong)"
Description = "When I bought a USB solar panel, I immediately put it to the test. It does a good job, but you have to have realistic expectations!"
Aliases = [
  "/Posts/2022-06-23-Rasperino-Solare-ed-Altri-Esperimenti-Andati-a-Male.html",
  "/Posts/2022-06-23-0000-Rasperino-Solare-ed-Altri-Esperimenti-Andati-a-Male.html",
]
Categories = [ "Rasperino", "Ecology", "Technology" ]
Dates = 2022-06-23
+++

{{< noticeAutomaticTranslation it >}}



A few months ago I bought a small [monocrystalline solar panel](https://www.amazon.it/Lixada-Pannello-Monocristallino-Caricabatterie-Cellulare/dp/B071Z1LGFV){[:MdTgtBlank:]} online, similar in size to those of an A4 sheet, for the sum of around €20 (on Amazon.it the sellers are all thieves, on Aliexpress it would have cost a little less).

[![Screenshot of a photo sent in chat. The photo shows the panel in its cardboard box. The caption reads "❗️ ENEL hates her! ⚠️ Find out how the Spacc Goddess began the slow but profitable path to energy independence! ➡️ @spacccraft".]({{< assetsRoot >}}/Media/Screenshots/ SpaccCraft-975.png)](https://t.me/SpaccCraft/975){[:MdTgtBlank:]}

## Electrical doubts

The panel declared, in the title of the advert, a maximum output power of 7.8W.  
It has a USB output port, clearly maximum 5V. Still in the details of the advertisement, but in the technical specifications, there were indicated 1A at 5V output... which would be 5W.  
Considering that the panel is declared to be 7.8W, and 5V photovoltaic cells do not exist, but 6V cells do, it is assumed that it should be able to output a theoretical maximum of 1.3A of current.  
The output voltage, however, as we said, does not go above 5V, so a conversion is involved (impossible, considering that the panel itself is a slab less than 1mm thick, and the protruding part with the USB port will be just 15x10x5mm.. there is no space), or a trivial voltage truncation, where the excess energy does not translate into a greater output current, but only in little heat..  
And therefore we have a maximum theoretical output of 1.3A at 5V.. i.e. 6.5W.

### Life advice..

This preamble, apparently useless, is to remind us that low-cost cinema cameras with zero documentation (this thing doesn't even have a manual or writing on the back!) can only be trusted up to a certain point, beyond which to solve the problems In case of doubts, it is necessary to rely on the use of other china machines.  
In my case, a USB multimeter, to be placed between the panel output and the input of a device capable of absorbing enough current. I don't have this little object, and I realize that I would be wise to buy it (it's cheap anyway), because at the moment I can't have any certainty about the performance of the magical silicon slab.

## Field tests

Thanks to both the need to test the full possibilities of the small panel and the desire to make use of it to reduce my parents' electricity bill by 0.001% (and satisfy a tiny part of my individual electricity needs with totally clean energy), I so I started doing simple practical tests in the field (the balcony of my house).

### The very first test

To tell the truth, I did the very first test away from home, the day immediately after the product was delivered because, for unrelated reasons, I was actually away that day.
On that occasion, the only one out for now, I only tried to recharge the battery of my smartphone (6000mAh).

I did 3 different tests, the first two lasting about 15 minutes in the few hours before midday, when the sky was clear, with the panel held by me in my hand to make it better catch the sun perpendicularly (ideal for a monocrystalline).  
I first tried to charge the phone while it was on, stalled and with all the radios off (but not in Android's deep sleep state), but unfortunately there was no way, the phone consumed so much energy that it was unable to recharge, it could only discharge slowly. I don't remember very well, because I didn't think of recording the data, but it seems to me that, on the app I use to see the charging statistics ([AccA](https://github.com/MatteCarra/AccA){[:MdTgtBlank: ]}), were only marked on the 300mA input.  
Trying the same formula immediately afterwards, but with the phone turned off, it seems to me that in 15 minutes it only charged 2% of the battery... it would practically take 12.5 hours to charge from 0 to 100% if this is the case.

I did the last test around 2pm, when the sky had unfortunately darkened. I placed the panel on a surface and used the phone normally, listening to music and I think using online messaging apps. As I suspected, it didn't recharge, but at least it was almost without running out of charge, which is still good considering the weather conditions.

![Screenshot of a photo sent in chat. The photo shows the panel resting on the roof of a parked car, with a connected cable leading down. The caption reads "Our car is parked and I put the solar panel on top of it."]({{< assetsRoot >}}/Media/Screenshots/OctoVoLTE-16754.png)

### Let's look further..

Okay, let's say that the very first test, outside with the phone, was a bit of a failure.  
However, without losing heart, in the following days I carried out other tests, all from the balcony of my house, some of which I will now give a rough overview of, because they were done once and with little data at hand.

The panel seems to be able to turn on my NodeMCU even with very little light, and I had no doubts about this, a microcontroller absorbs very little current, we are talking about tens of mA on average.  
I haven't tested any loads, but not that there can be any that big, the maximum you get with the NodeMCU is 250mA when you turn on the WiFi.

On a day with annoying clouds that come and go, another phone of mine (with a 3100mAh battery) manages to charge, but with difficulty, especially because when the phone enters or exits charging (and it happens in these light conditions), the screen turns back on and wastes energy.  
When turned off, it is even worse, because the screen always turns back on at maximum brightness and for longer. I found this last detail funny... basically, charging the phone when it's off in this way is worse than charging it when it's on.

On a more or less OK day, but still a modest day at the end of winter - beginning of spring, I managed, in this case too, not to load but to download a little more slowly, my first generation Nintendo Switch console (the one with the least efficient SoC), with Ubuntu turned on and the software working.

Something that there is little to say about, but which is undoubtedly a victory, is that at least I can charge my power banks.  
I've tried 3 of my 4, clearly the smaller capacity ones load sooner, but in any case all of them fill up well without any problems. One that I don't know how much it is, the memory would tell me 4000mAh, it recharges completely in just over a sunny day. A 5000mAh one, in maybe a day and a half.  
By charging these small batteries you can then easily charge or power devices that do not have enough current if connected directly to the panel, such as my smartphones or... a Rasperino.

### Solar Rasperino?

We are finally at the end of all this ambaradan, with my tests on a Raspberry Pi 3B.  
The idea popped into my head after I unfortunately left the magical product unused for a while, not knowing what useful things to do with it. I mean, I bought it because it's definitely useful to have a little thing like this in emergencies, but if I can put it to good use in the meantime, that's even better.

I thought, first of all, of configuring BOINC on Raspbian, a distributed computing software that can be used to contribute to scientific research projects, while earning a few cents a month (rip) in a kind of cryptocurrency, the [Gridcoin ](https://gridcoin.us){[:MdTgtBlank:]}.  
As I already said, the Raspino must be powered by the powerbank, the panel directly does not give it enough current. It seems to turn on, but in reality it seems to go into bootloop.  
Well, I won't beat around the bush too much: while (with the same powerbank, I think 4000mAh) for some low load applications, like [Pwnagotchi](https://pwnagotchi.ai/){[:MdTgtBlank:]}, the Pi can stay on for hours even with a backlit LCD screen connected... the CPU at 100%, which performs complex calculations, eats so much of that current that the battery flattens out in just 1 hour.

[![Screenshot of one of my toot. The photo shows the panel hanging on my balcony with hooks, with a cable connecting it to the Rasperino fixed to the panel itself. The text reads "#RasperinoVitaEcologica I fixed the Pi to my solar panel with the fabric elastic bands of the disposable masks (before throwing them away, I detach the elastic bands, wash them, and keep them), and it seems to have just the power it needs to work in the afternoon. Today I flashed the new SD with Raspbian, for now I choose to use the accrocco to run #BOINC, a distributed computing tool with which you can donate computing power to scientific projects. Tomorrow we will test how it goes BOINC".]({{< assetsRoot >}}/Media/Screenshots/mastodon.uno-octo-108211397314015161.png)](https://mastodon.uno/@octo/108211397314015161){[:MdTgtBlank:]}

_Psssss.. if you want to see other photos of the panel (3) and in a slightly more decent quality, I put them on Pixelfed: [pixelfed.uno/p/octo/426839557817260168](https://pixelfed.uno/p/ octo/426839557817260168){[:MdTgtBlank:]}!_

## The reality of the facts

Apart from this thing, which even if it doesn't make me money in practice would be useful as it is beneficial for scientific research, I have no practical uses in mind for the Rasperino Pi 3 Solare. Maybe a Pi Zero would be better: apparently, other people in the throes of madness (but better equipped), thought of using that to mine Bitcoin, with a small panel similar to mine ([YouTube/CbpfNU7oaws](https://invidious.snopyta .org/watch?v=CbpfNU7oaws){[:MdTgtBlank:]}).  
For now, I use the small panel sporadically to charge my power banks, which I discharge when I happen to use them around to charge my smartphone.

If there's anything I learned from this story, it's that I should buy the damn USB multimeter.  
I should have done it almost 4 months ago, but instead I'm procrastinating so as not to spend money.