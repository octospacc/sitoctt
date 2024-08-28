+++
Title = "Aggiornamenti DSpacc - Tastino maledetto"
Aliases = [
  "/Posts/MicroBlog/2022-10-16-Aggiornamenti-DSpacc-Tastino-Maledetto.html",
]
Categories = [ "MicroBlog" ]
Date = 2022-10-16
Lastmod = 2022-10-20
+++

Un mesetto fa, nel [post del 18 ottobre](./2022-09-18-Quando-Metto-Mano-Io-Spacc.html), avevo brevemente detto che fosse il DSpacc, e che nuovo guaio avessi combinato.  
Beh, stavolta ho fatto pure di peggio; per capire le proporzioni, è bene rispolverare un secondo cosa avevo scritto.

La schedina che menzionai è arrivata, la modifica software per migliorarla funziona, e io sto ancora esplorando un po' il tutto. Avrò tempo di parlare di ogni cosa in un lungo articolo, che già sto scrivendo (ma non so quanto ancora mi ci vuole).  
Ciò di cui è importante parlare adesso è di un problema sorto.. non so neanche io esattamente quando, ma l'ho notato solo adesso: il tasto dorsale L dava qualche problemino.

Vedevo che premere le combinazioni di tasti per accedere ai menu di sistema della flashcart non sortiva effetti. Insospettendomi, decido di scaricare un homebrew per testare i tasti, Diagnose (che si può reperire da [GameBrew.org](https://www.gamebrew.org/wiki/Diagnose) [[pag. archiviata](https://web.archive.org/web/20220818023822/https://www.gamebrew.org/wiki/Diagnose)]), ed effettivamente confermo che il tastino L non risponde agli input.

Sulla chat di Nlhlehde mi consigliano di immergere il tasto in alcol per pulirlo, e poi di fargli fare esercizio - oppure, nel caso io avessi voluto ripararlo correttamente, dissaldare il bottone e metterne uno nuovo.  
In quel momento mi scoccio di aprire la console, ma vedo che due minuti di esercizio fanno magicamente tornare a funzionare il tasto. Lo stato di funzionamento, in realtà, dura appena qualche minuto, e sul momento era comunque discutibile: in media, 1 click su 3 veniva registrato.

Oggi decido finalmente di rismontare il DSpacc, per vedere di fare il servizio al tastino. Con mia sorpresa, vedo che questo è come rialzato dal lato; uno dei tanti pin GND si è dissaldato, mentre l'unico che chiude l'altro lato del circuito, si nota appena, si è spezzato.

![Foto macro del tasto rialzato.]({{< assetsRoot >}}/Media/Misc/DSpacc-Shoulder-Macro-Front.avif)

Ora, non si può dire se i problemi a registrare le pressioni fossero dovute al tasto fracassato esternamente, oppure a problemi interni che non centrano nulla con il malfunzionamento iniziale del tasto (e la distruzione finale è avvenuta a causa del mio premere il bottone un centinaio di volte al minuto per farlo esercitare).. quel che è certo è che non basta l'alcol per sistemare 😅.

Inizialmente, tento di saldare appena il giusto sopra la gambetta spezzata, cosa che dovrebbe di per sé risolvere il problema; purtroppo, il lato dei pin è così corto, e il bottone in una posizione così scomoda (visto che parliamo di un tasto dorsale), che la saldatura sul mio pin tocca un po' affianco e fa corto a massa. La cosa rende il tasto sempre premuto, e quindi è anche peggio (il menu della mia flashcart non si apre se un qualunque tasto è premuto all'avvio!) di cosa avevo prima.  
Provo un po' a sistemare la saldatura, ma no, non riesco a migliorare nulla.

A questo punto, penso di dissaldare il bottoncino, perché tanto ormai... e la cosa va a buon fine, forse per via delle dimensioni del dispositivo SMD, ridotte ma non troppo: la board è rimasta pulita.  
Tempo di prendere un nuovo tastino dai tanti che ho da parte, anche se molto più grande di quello dorsale del DS, e saldarlo.  
Vabbè, basta, mi scoccio di girarci ancora attorno: tento di saldare un filo sul contatto principale, ma lo stagno non attacca. È micidiale la PCB del DSpacc, oh. Provo, riprovo.. e finisce che il pad metallico su cui saldare se ne viene via. Un classicocto, oserei proprio dire, finisce sempre così! 😑

![Foto macro della zona di saldatura del dorsale, con il pad centrale distrutto.]({{< assetsRoot >}}/Media/Misc/DSpacc-Shoulder-PCB-Pad-Broken.avif)

Era meglio un tasto dorsale che funziona con grande fatica, o è meglio non averlo proprio? Non lo so, e non voglio saperlo. Fatto sta che ora dovrò trovare delle soluzioni, ai numerosi problemi frutto di questa storiaccia,...,,,..,

_**P.S, aggiornamento del 2022-10-20:** Vi concedo una foto del bottone rotto smontato, prima di buttarlo, perché no? La microSD nell'angolo fa da scala, per far capire le dimensioni._

![Foto macro del tasto staccato e smontato.]({{< assetsRoot >}}/Media/Misc/DSpacc-Shoulder-Button-Disassembled-Macro.avif)
