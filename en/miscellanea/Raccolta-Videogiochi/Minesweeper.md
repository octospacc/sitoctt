+++
Title = "💣 Minesweeper"
Categories = [ "Gaming" ]
Lastmod = 2023-03-28
+++

{{< noticeAutomaticTranslation it >}}



<style>/*
*/#Body {
	Color: #000000;
	Background: #C0C0C0;
}

/*
*/#Background {
	Background-Color: #C0C0C0;
	Background-Image: /*linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),*/ url('{{< assetsRoot >}}/Media/Minesweeper/ XP-Window-www.techradar.com.webp');
	Filter: Blur(5px);
}

/**/#LeftBoxContainer, #RightBoxContainer { Color: #000000; }

/*
*/#MainBox {
	Background: RGBA(192, 192, 192, 0.80);
	Backdrop-Filter: Blur(5px);
}
</style>

In **Minesweeper** (in Italian officially "**Minefield**") you have a game grid in which bombs have been randomly placed (by an algorithm). To win, you need to locate them all without exploding any of them.

The rules are simple, but the game easily reaches high levels of complexity and has an I-don't-know-what that you can't do without.

<!-- For the type of game, a simple bland puzzle born in an era where almost no video games were built to cause addiction to players, it is terrifyingly capable of making you obsess. -->

* If you have won a game, you want to get back into the game right away, in the (in the long run) hope of being able to do even better, of being able to complete the board in just _that second_ of time less. So, aren't you having _just one more_ play?

* However, if you have lost the game, the need to immediately start a new one is compelling and difficult to ignore. If at this point you end the game, despite your desire, then there will be plenty of room for those thoughts that say how you don't know how to play Minesweeper, and your time will never get shorter!

This is all absurd if you consider what stuff we're talking about:

* An overall bland puzzle, with essential controls, sparse graphics (even the slightly more elaborate implementations have a practical limit to the graphical improvements they can make), and simple logic.

* A program that was born 3 decades ago, together with Windows Solitaire, simply to teach people to use the mouse in a fun way.

* A game belonging to a distant era in which the concept of "gamification" was alien to everyone, and free-to-play video games were truly free: **not** built specifically to create addiction or pressure on players, as in-app purchases didn't exist.

Personally, I also call the minefield "**minesweeper**", to joke about an incorrect pseudo-literal translation of the word "minesweeper" (literally but correctly "[minesweeper](https://it.wikipedia.org/Minesweeper) ") in Italian. At certain moments, in an instant it becomes "**minasp<span style="border: 2px dotted yellow;">i</span>azzante**", when it puts you in front of strange crossroads or intricate bomb placement schemes.

But, if these are all things that even a third party observer can notice, this apparently simple and office pastime hides much more. Minesweeper somehow manages to offer emotions that, again due to the objective circumstances, are difficult to communicate to the world.

Once you get the hang of it, after hundreds of games played and repeated over time, the moment of playing often becomes comparable to a meditative session capable of absorbing your soul. Only those who have made this puzzle their daily bread know the sensation: the hand is moved according to an overflowing flow of commands, imparted directly from an instinctive layer of the mind, often at a speed greater than that in which the conscious brain can register what the hell is happening; sometimes, after making the right moves in the heat of the situation (but never made at random), these are questioned by the conscious part of the mind about a fraction of a second later! - for no reason, because, again, correct.

By accumulating that single or double daily batch over the weeks, months, and years, you unconsciously learn to recognize all the mine placement patterns: the images of the numbered tiles - arranged exactly in a certain way, or another, of the dozens of possible - are imprinted in the mind and are then automatically fished out and analyzed the moment you are about to click. Hence some people claim to experience something similar to the "Tetris effect" with Minesweeper too: seeing patterns of numbered tiles in random semi-conscious situations (e.g., half-asleep).

Paraphrasing what [a PCGamesN author] writes (https://www.pcgamesn.com/minesweeper/get-free): **Minesweeper is one of the purest forms of digital escapism** that you can experience, because it is the practical demonstration of how a game, to be deeply immersive, does not have a vital need for a detailed _open world_, elaborate narrative, or characters to become attached to.

<p markdown="1" style="background: #fde; padding: 0.5em;">...Sorry, there's work in progress on this page, I'm setting mines around to troll the next people who come here to read and they will stumble upon a few words... if in the meantime you want to learn how to play read [Wikipedia](https://it.wikipedia.org/Campo_minato_(videogioco)), go ahead...</p>

## Curiosity

<div class="Minesweeper Locker"></div>

* In the 90s, **even at Microsoft** everyone was [obsessed with Minesweeper, especially Bill Gates](https://arstechnica.com/gaming/2023/02/how-bill-gates-minesweeper-addiction-helped -lead-to-the-xbox). I would say that it is not difficult to see how...

* In 1999, following complaints from a certain Sergio Chiodo (??), who argued that the concept of the minefield game was offensive to the victims of real anti-personnel mines in the world, the [International Campaign for the banning of Campo Minato](http://fc.retecivica.milano.it/rcmweb/fnm/princ.htm#italiano). Microsoft partially buckled under the pressure, and in Windows Me and 2000 replaced the bombs in the game with flowers, and renamed the game "Meadow of Flowers".[^Regional_Differences]

	* The campaign only caught on to a limited extent outside Italy (?), and only with Windows Vista did the concept of the meadow of flowers game become global. Microsoft has given the possibility to change the game included in the system between mine theme and flower theme, a setting which has a different default value based on the country.[^Windows_Vista_and_Windows_7]

## Implementations

<div class="ListNoInMargin" markdown="1">

* For **PC**, the **Microsoft original** isn't too bad. The **Windows** XP version works on the latest versions of the system, and even on **Wine**. Unfortunately, it scales a little poorly on high-resolution screens, as the squares are a fixed size and there is no zoom. It hasn't been included in Windows for years, perhaps for this reason, but it can be downloaded from the Web:  
	* Global XP Version: [Minesweeper.exe](https://archive.org/download/Minesweeper_201811/Minesweeper.exe)  
	* Italian XP version: [Prato Fiorito.exe](https://archive.org/download/prato-fiorito/PRATO_FIORITO.exe)

* On **Android**, and I dare say in general, the best implementation I've found is **Antimine**.  
	* Download from F-Droid: [dev.lucanlm.antimine](https://f-droid.org/packages/dev.lucanlm.antimine)  
	* Source Code: [antimine-android](https://github.com/lucasnlm/antimine-android)

* To play from **Web browser**, well, on this page I'm putting together something that for my personal tastes is the best available. It works well on both desktop and mobile (although the time you have to hold down a dial to plant a flag is long there), and has minimal graphics.  
I'm working on making the game customizable, for the moment you can only play with what I've implemented as a minigame to unlock reading the [Curiosities](#-Curiosities) section (if you don't see anything, activate JavaScript!).  
**Note**: My implementation is based on [vue-minesweeper](https://github.com/antfu/vue-minesweeper), with some personal modifications for embedding. All my modified code is [in the sitoctt repository](https://gitlab.com/octtspacc/sitoctt/-/tree/main/Assets/vuesweeper-core) (MIT license).

</div>

## Similar and Clones

* [Bullets](https://ojs.aaai.org/index.php/AAAI/article/view/21561/21310), Minefield playable on paper.

* [Kaboom](https://pwmarcz.pl/blog/kaboom), a "_cruel but honest_" Minesweeper:
	* The **placement of mines** is not **chosen** once and for all at the beginning, but **with each move**.
	* When you are in a situation of guessing (there are no adjacent cells proven to be safe), you have a 100% chance of surviving.
	* When you don't have to guess, and you do, the game chooses the worst possible outcome.

	The game with these rules develops in a **new and interesting** way, as you often find yourself in a situation where you have to think in a really tough way (at least, until you manage to unconsciously learn all the possible patterns: after months and months of usual matches).

## Other Resources

* [Authoritative Minesweeper](https://minesweepergame.com)

* [Minesweeper is one of the purest gaming experiences](https://old.reddit.com/r/patientgamers/comments/11i6zqy/minesweeper_is_one_of_the_purest_gaming/)

## {{% i18n notes-refs %}}

[^Regional_Differences]: <https://tcrf.net/Minesweeper_(Windows,_1990)/en#Regional_Differences>
[^Windows_Vista_and_Windows_7]: <https://en.wikipedia.org/wiki/Microsoft_Minesweeper#Windows_Vista_and_Windows_7>
[^PageBg]: **Page Background**: [Source](https://www.techradar.com/news/gaming/the-most-successful-game-ever-a-history-of-minesweeper-596504 )

<script src="/Assets/MinesweeperEmbed.js"></script>