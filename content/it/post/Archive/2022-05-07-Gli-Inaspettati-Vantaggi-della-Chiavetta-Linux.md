+++
Template = "loli-documentatrice.html"
Title = "Gli inaspettati vantaggi della chiavetta Linux"
Categories = [ "Blog", "Tecnologia" ]
Data = 2022-05-07
Lastmod = 2022-08-13
Feed = false
+++

Una cosa che ho fatto mesi fa e che, fino ad ora, si è rivelata una **scelta vincente**, è stata **l'installare** un sistema operativo basato su **Linux**, in modalità persistente, **su** una piccola **pennina USB**.

I motivi per cui ho voluto farlo inizialmente sono forse semplici e banali, ma la cosa mi ha fatto avere, in attenta analisi, alcuni **vantaggi inaspettati** e molto più che graditi.

### Perché serviva la pennetta?

La necessità iniziale della chiavina scaturì mesi fa dal fatto che, in aula di informatica a scuola, dovevo, come tutti, accedere al mio account GSuite per accedere alla classe virtuale di informatica. Questa cosa, apparentemente semplice, celava nel mio caso due ostacoli:

- **La mia password è lunga** decine di caratteri casuali. Me lo permetto perché uso un gestore di password (per tutti i miei account), però a digitare a mano ogni volta si soffre;
- **Google non si fida dell'indirizzo IP della scuola**, e mi chiederebbe di confermare l'accesso, ma non avendo aggiunto metodi di sicurezza sull'account, mi chiede di aggiungere un numero di telefono. Già solo perché lo chiede in questo modo, con una palese scusa, il mio numero a Gluglu non lo darò mai: non ha senso, se dei malintenzionati mi rubassero nome utente e password dell'account, potrebbero semplicemente verificare quest’ultimo con un proprio numero, e secondo Google sarà evidente che l'account appartiene a loro... ma non mi dilungo oltre.

Avrei potuto usare una pennetta qualunque, con su scaricato un browser per Windows in versione portatile, contenente la mia sessione di Google salvata da casa, con l'accesso effettuato con il mio indirizzo IP, e avrei risolto il problema.  
Avrei potuto, _ma non sarebbe stato divertente_.  
Ed è qui che è saltata fuori l'idea della chiave con su un intero sistema operativo, avviabile su qualsiasi PC x86_64, in modo totalmente indipendente dal disco interno del PC in questione.

### Scelta dell'hardware

Per prima cosa, **ho pensato alla memoria che avrei utilizzato**.

Come capacità, mi piacerebbe dire che l'ho fatto solo per la sfida, ma la verità è che, sulle poche pennette molto capienti che ho, conservo altri file, che devo tenere su pennetta, e spostarli su tante chiavette piccole è seccante e porta a confusione futura. Quindi, ho preso una delle mie pennine da 2 GB, e mi son detta che me la sarei fatta bastare (_e, **spoiler**, avevo ragione, anche se non è stato semplice_).  
In quanto a velocità, ho pensato solo ad evitare roba di livelli inferiori a quelli di USB 2.0, perché in ogni caso non ho alcuna chiavetta veloce a disposizione. La mia unica chiavettina con bus USB 3.0 (rilevata da Linux correttamente come USB 3.0) è veloce quanto una 2.0... **Maledetta Kingston**.  
Di schede microSD veloci ne avrei, ma i miei adattatori USB per quelle schedine sono tutti lenti.

Insomma, prendo la fidata pennina USB 2.0 da 2 GB, color menta (_sarebbe perfetta come media di installazione di Linux Mint!_), anche questa di Kingston, e parto.

![Foto della chiavina USB che ho dedicato a Linux.]({{< assetsRoot >}}/Media/Chiavetta-Linux-2022-05-07.avif)

### Scelta del software

Una volta scelta la chiavettina, rimane la **scelta della distribuzione** Linux, forse anche più importante.

Qui, non solo le distro gettonate (Ubuntu, Fedora, Mint, Pop!_OS, Manjaro, ...) sono troppo grosse per entrare lasciando spazio per una partizione persistente, ma sarebbero inutilizzabili per via della lentezza della chiavetta.  
Fortunatamente, avevo in mente una strada da poter percorrere, perché, nei mesi passati, per mia curiosità, avevo imparato qualcosa sul mondo delle distro Linux leggere.

Era un periodo in cui mi ero appena interessata ad **[Alpine Linux](https://alpinelinux.org){[:MdTgtBlank:]}**, per i suoi ideali di **leggerezza e minimalismo**. L'ho persino usato sul desktop per qualche settimana.  
Era reattivo e scattante, grazie anche alla presenza della [musl libc](https://en.m.wikipedia.org/wiki/Musl){[:MdTgtBlank:]} anziché l'ormai bloattata [GNU libc](https://en.m.wikipedia.org/wiki/Glibc){[:MdTgtBlank:]}, ma la necessità di configurare a volte minime cose a mano, anche dopo l'installazione iniziale, mi ha portata ad allontanarmene. Ho comunque pensato che sarebbe stato adatto per un sistema installato su una memoria di archiviazione piccola e lenta, con poche applicazioni.  
L'ho quindi installato, includendo tra i software essenziali (oltre a server video e audio): [Window Maker](https://www.windowmaker.org){[:MdTgtBlank:]} (un gestore di finestre leggero), [Firefox](https://firefox.com){[:MdTgtBlank:]}, ed applicazioni GUI minori, tra cui: un emulatore terminale, un gestore di file, ed un editor di testo.

Tutto sommato, funzionava bene e velocemente ma, nonostante le poche app installate, la memoria era strapiena. Questa cosa mi avrebbe dato alcuni problemi successivamente: ad esempio, non c'era spazio per mettere Minecraft e giocare a [SpaccCraft](https://wikispacc.miraheze.org/wiki/SpaccCraft){[:MdTgtBlank:]}, cosa che volevo perché può tornare utile.  
Questo - assieme al fatto che più tardi ho pensato che, forse, cifrare la pennetta sarebbe necessario per proteggere i miei dati contro furto o smarrimento della stessa, ma i miei tentativi di cifrare il sistema già installato sono falliti - mi ha fatto un attimo _fermare a riflettere_.

Visto che in ogni caso avrei quindi dovuto reinstallare il sistema, ne ho approfittato per **cambiare distribuzione**.

Nonostante in passato, provando qualcosina, mi avesse dato qualche rogna come sistema persistente, ho deciso di dare una possibilità a **[Puppy Linux](https://puppylinux-woof-ce.github.io){[:MdTgtBlank:]}** in modo serio.  
L'immagine base dell'ultima versione di Puppy (al momento in cui scrivo, la 9.5) pesa appena 400 MB, ma include un sistema desktop di per sé abbastanza completo, con decine di applicazioni precaricate per le necessità più varie.  
Come fa ad essere allo stesso tempo così **compatto ma pieno di roba**? Grazie all'uso di [SquashFS](https://en.m.wikipedia.org/wiki/SquashFS){[:MdTgtBlank:]}, un file system compresso di sola lettura, che supporta algoritmi di compressione estremamente efficienti come [LZ4](https://en.m.wikipedia.org/wiki/LZ4_(compression_algorithm)){[:MdTgtBlank:]} e [ZSTD](https://en.m.wikipedia.org/wiki/Zstd){[:MdTgtBlank:]}. Se fosse completamente decompressa, infatti, l'immagine peserebbe sui 2.5 GB. Anche la scelta di includere **applicazioni più minimali**, però, contribuisce molto, se si considera che praticamente tutti i live CD Linux usano SquashFS, eppure quelli di distribuzioni più tradizionali pesano diversi GB.

### Ad oggi

**Puppy è la distribuzione che tutt’ora ho** sulla chiavetta.  
Eccetto che per qualche problema minore (_tipo: come cavolo faccio a collegare una tastiera Bluetooth??? e boh, tanto ora non mi serve più_), funziona molto bene ed è veloce in tutto.  
Avendo provveduto ad impostare la cifratura [LUKS](https://en.m.wikipedia.org/wiki/Linux_Unified_Key_Setup){[:MdTgtBlank:]} sulla partizione scrivibile, adesso i miei dati (file personali e sessioni del browser) sono protetti contro eventuali incidenti.  
Anche il gestore di finestre integrato, [JWM](https://en.m.wikipedia.org/wiki/JWM){[:MdTgtBlank:]}, è molto pulito e mi piace abbastanza - anche se mi piacerebbe avesse qualche funzione di allineamento delle finestre (sembra non abbia nulla, o mi sbaglio?).  
E ora, infine, di spazio libero ne ho abbastanza; e ho anche Minecraft!
 
![Schermata del desktop del mio Puppy Linux, con neofetch aperto sull'emulatore terminale.]({{< assetsRoot >}}/Media/Screenshots/Desktop-Chiavetta-Linux-2022-05-07.png)  
_Crediti sfondo: [pixelartmaker.com/art/becdd8955dc57eb](http://pixelartmaker.com/art/becdd8955dc57eb){[:MdTgtBlank:]}_

### Vantaggi importanti

Bene, con questa magica pennettina quindi ho **risolto il problema** dell’accesso a Google, ma **continuerei ad usarla** anche se non mi servisse più a ciò.  
I motivi, tutti vantaggi d'importanza, sono i seguenti; alcuni riguardano le live Linux in generale (anche quelle amnesiche), altri si applicano solo ai sistemi persistenti come il mio - tutti, comunque, sono rilevanti quando si usa un PC pubblico:

- Ho a disposizione un **sistema che si adatta** ai miei gusti, che posso portare in tasca e usare **su qualsiasi PC**, senza che io debba mai riconfigurare nulla (eccetto, a volte, le impostazioni del BIOS).
- Il sistema in questione, al contrario di ciò che potrei trovare sulla enorme maggioranza dei PC in giro (Windows), **rispetta le mie libertà**, e non fa finire i miei dati in mano ad una corporazione monopolistica che, in cambio, non mi darebbe assolutamente nulla: su qualunque PC che uso, anche quelli non miei, rimango coerente con i miei valori.
- La **segretezza** riguardo cosa faccio sul PC in quel momento è molto **più certa**, così come la sicurezza dei miei dati: di un qualunque sistema operativo installato su PC pubblici si fa solo bene a diffidare, potrebbe esserci su installato qualsiasi strumento di spionaggio (e, in realtà, così è su alcuni dei PC a scuola: è presente un programma di controllo desktop remoto pensato per le scuole, [LanSchool](https://en.m.wikipedia.org/wiki/LanSchool){[:MdTgtBlank:]}).
- Ho tutti i miei **dati essenziali sempre con me**, che siano semplici documenti oppure sessioni aperte su diverse app (come la sempre comoda [Element](https://element.io){[:MdTgtBlank:]}, per messaggistica e scambio di note e file piccoli tra i miei dispositivi).
- Alcuni **software particolari**, come Minecraft Java (che, a quanto pare, su alcuni PC Windows può non funzionare, perché magari i driver della GPU non funzionano correttamente, e Windows non ha l’emulazione OpenGL software di [Mesa](https://en.m.wikipedia.org/wiki/Mesa_(computer_graphics)){[:MdTgtBlank:]} a livello di sistema, al contrario di Linux), **dovrebbero funzionare sempre**!
- Ho una scusa per ricordare in giro indirettamente che, anche nel 2022, **le pennine USB sono rilevanti**, anche quelle di fascia ultra-bassa.

### Alcuni approfondimenti

Posso concludere dicendo: **adottate anche voi una pennettina Linux** persistente, se a volte utilizzate PC non vostri, non ve ne pentirete! In verità, vi dico, fatelo anche solo per lo sfizio, se avete qualche penna USB in disuso in un cassetto :)

Riporto qui i siti Web di alcune distribuzioni che _non_ ho menzionato nel testo, ma che ho provato in passato o credo comunque valga la pena controllare:

- [SpaccCraftGo](https://github.com/Spacc-Inc/SpaccCraftGo-Images){[:MdTgtBlank:]} - Puppy Linux ribrandizzato da [Spacc Inc](https://wikispacc.miraheze.org/wiki/Spacc_Inc){[:MdTgtBlank:]}, con l'inclusione di SpaccCraft nel sistema;
- [Slitaz](https://slitaz.org/en){[:MdTgtBlank:]} - Sistema live rolling release da 50 MB;
- [Porteus](http://porteus.org){[:MdTgtBlank:]} - Distro live basata sulla modularità;
- [antiX](https://antixlinux.com){[:MdTgtBlank:]}
- [Slax](https://slax.org){[:MdTgtBlank:]}

### 🏷️ Note/Riferimenti

[^ Aggiornamento 2022-08-13]: **Aggiornamento del 2022-08-13**: Ho importato questo articolo dal mio vecchio blog (<https://noblogo.org/loli-documentatrice/gli-inaspettati-vantaggi-della-chiavetta-linux>{[:MdTgtBlank:]}), per preservarlo meglio e per testare alcune cose. Ne ho approfittato per, oltre a migliorare la formattazione, cambiare in parte la forma di alcune frasi. Il contenuto resta praticamente uguale.
