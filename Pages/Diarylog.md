// % Title = 📅 Diarylog
// % HTMLTitle = <span class="twa twa-📅">📅</span> Diarylog
// % Index = True
// % Order = 32

# <span class="twa twa-📅">📅</span> Diarylog

Eccoci. Perché un'ennesima sezione "*log"?

Ho il [Blog](./Categories/Blog.html), che è adatto solo ad articoli di un livello minimo e scritti (ci provo) per bene...  
Ho il [PicoBlog](./PicoBlog.html), che è però adatto solo per messaggi "scrivi e fuggi", troppo corti...  
Ho i [Devlogs](./Devlogs.html), che ho creato per sopperire alle limitazioni del PicoBlog per parlare delle cose che sviluppo e programmo...

Ma ancora non mi basta, ora mi rendo conto.  
Mi serve una sezione del sitoctt per scrivere cose troppo corte e con troppa poca sostanza per entrare nel Blog, troppo lunghe per il PicoBlog, e di categorie sparse e variegate.  
In sintesi, ecco il mio **Diarylog** - perché "diario" e basta mi da un'impressione di qualcosa di troppo personale, quindi preferisco inventarmi l'ennesima parola bizzarra per descrivere questa nuova pagina!

## Leggi il Diarylog

<div markdown="1" class="BorderBoxContainer">

<details markdown="1"><summary>
#### [2022-10-16] Aggiornamenti DSpacc - Tastino maledetto </summary>

Un mesetto fa, nel [post del 18 ottobre](#-2022-09-18-Quando-metto-mano-i), avevo brevemente detto che fosse il DSpacc, e che nuovo guaio avessi combinato.  
Beh, stavolta ho fatto pure di peggio; per capire le proporzioni, è bene rispolverare un secondo cosa avevo scritto.

La schedina che menzionai è arrivata, la modifica software per migliorarla funziona, e io sto ancora esplorando un po' il tutto. Avrò tempo di parlare di ogni cosa in un lungo articolo, che già sto scrivendo (ma non so quanto ancora mi ci vuole).  
Ciò di cui è importante parlare adesso è di un problema sorto.. non so neanche io esattamente quando, ma l'ho notato solo adesso: il tasto dorsale L dava qualche problemino.

Vedevo che premere le combinazioni di tasti per accedere ai menu di sistema della flashcart non sortiva effetti. Insospettendomi, decido di scaricare un homebrew per testare i tasti, Diagnose (che si può reperire da [GameBrew.org](https://www.gamebrew.org/wiki/Diagnose){[:MdTgtBlank:]} [[pag. archiviata](https://web.archive.org/web/20220818023822/https://www.gamebrew.org/wiki/Diagnose){[:MdTgtBlank:]}]), ed effettivamente confermo che il tastino L non risponde agli input.

Sulla chat di Nlhlehde mi consigliano di immergere il tasto in alcol per pulirlo, e poi di fargli fare esercizio - oppure, nel caso io avessi voluto ripararlo correttamente, dissaldare il bottone e metterne uno nuovo.  
In quel momento mi scoccio di aprire la console, ma vedo che due minuti di esercizio fanno magicamente tornare a funzionare il tasto. Lo stato di funzionamento, in realtà, dura appena qualche minuto, e sul momento era comunque discutibile: in media, 1 click su 3 veniva registrato.

Oggi decido finalmente di rismontare il DSpacc, per vedere di fare il servizio al tastino. Con mia sorpresa, vedo che questo è come rialzato dal lato; uno dei tanti pin GND si è dissaldato, mentre l'unico che chiude l'altro lato del circuito, si nota appena, si è spezzato.

![Foto macro del tasto rialzato.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Misc/DSpacc-Shoulder-Macro-Front.avif)

Ora, non si può dire se i problemi a registrare le pressioni fossero dovute al tasto fracassato esternamente, oppure a problemi interni che non centrano nulla con il malfunzionamento iniziale del tasto (e la distruzione finale è avvenuta a causa del mio premere il bottone un centinaio di volte al minuto per farlo esercitare).. quel che è certo è che non basta l'alcol per sistemare 😅.

Inizialmente, tento di saldare appena il giusto sopra la gambetta spezzata, cosa che dovrebbe di per sé risolvere il problema; purtroppo, il lato dei pin è così corto, e il bottone in una posizione così scomoda (visto che parliamo di un tasto dorsale), che la saldatura sul mio pin tocca un po' affianco e fa corto a massa. La cosa rende il tasto sempre premuto, e quindi è anche peggio (il menu della mia flashcart non si apre se un qualunque tasto è premuto all'avvio!) di cosa avevo prima.  
Provo un po' a sistemare la saldatura, ma no, non riesco a migliorare nulla.

A questo punto, penso di dissaldare il bottoncino, perché tanto ormai... e la cosa va a buon fine, forse per via delle dimensioni del dispositivo SMD, ridotte ma non troppo: la board è rimasta pulita.  
Tempo di prendere un nuovo tastino dai tanti che ho da parte, anche se molto più grande di quello dorsale del DS, e saldarlo.  
Vabbè, basta, mi scoccio di girarci ancora attorno: tento di saldare un filo sul contatto principale, ma lo stagno non attacca. È micidiale la PCB del DSpacc, oh. Provo, riprovo.. e finisce che il pad metallico su cui saldare se ne viene via. Un classicocto, oserei proprio dire, finisce sempre così! 😑

Era meglio un tasto dorsale che funziona con grande fatica, o è meglio non averlo proprio? Non lo so, e non voglio saperlo. Fatto sta che ora dovrò trovare delle soluzioni, ai numerosi problemi frutto di questa storiaccia,...,,,..,
</details>

<details markdown="1"><summary>
#### [2022-09-23] Nuove frontiere </summary>

Da quando qualche giorno fa l'ho scoperto. sto provando quell'epico software che è [TiddlyWiki](https://tiddlywiki.com){[:MdTgtBlank:]}.  
L'ho inizialmente trovato cercando qualcosa per organizzare note in formato ricco, da poter usare per la scuola, e che fosse ovviamente libero.

È un software di wiki, praticamente della stessa categoria di MediaWiki (il software su cui si basa Wikipedia), ma ha caratteristiche molto particolari.  
Innanzitutto, non ha bisogno di un server, è una app che funziona in locale.. ma in che modo assurdo (in positivo)! La app intera con tutti i dati personali è un singolo file HTML che si automodifica, ed è quindi possibile ricopiare e assicurare in un istante un sito intero. Di suo non può salvare i dati, ma bisogna ogni volta scaricare in locale il file HTML modificato, oppure usare dei sistemi di sincronizzazione (io uso Git, supportato in-app).

Se l'ho iniziato ad usare per il solo scopo limitato dello studio scolastico, ma poi in questi giorni sono finita con l'iniziare ad usarlo tanto anche per creare una mia cosiddetta base di conoscenza personale e pubblica, su tutto quello che posso scrivere al volo in un formato di documento non lineare che si adatta benissimo a note piccole e veloci tra loro interconnesse... vuol dire che davvero è interessante.

Un po' mi dispiace dirlo, ma è possibile che una parte del tempo che dedicherei in genere al sitoctt verrà ad esso sottratta, per essere dedicata alla neonata OcttKB - che, a tal proposito, è qui su <https://kb.octt.eu.org>{[:MdTgtBlank:]}.  
Per quanto mi piaccia tutto quello che ho costruito in questi mesi, che infatti continuerà a vivere - sia come posto in cui esprimere il mio stile di design, che come luogo in cui pubblicare contenuti elaborati e mai spezzettati - devo dire che ho trovato uno strumento che riesce ad incanalare bene alcuni miei pensieri, quelli che il sitoctt non può gestire.

Non sto ora a spiegare troppo il lato tecnico dei vantaggi o degli svantaggi di TiddlyWiki, perché parliamo di un software facile da iniziare ad usare, e assolutamente complicatissimo da padroneggiare (mi ci vorrà tempo!).  
Quello che dirò è che: con il suo essere orientato alla disposizione di informazioni in piccoli elementi fondamentali (i _tiddler_), che poi possono essere collegati tra loro per costruire informazioni elaborate - sia con link, che con la trasclusione (quando il contenuto di un elemento appare completamente ricopiato in mezzo ad un altro, cosa che si fa semplicemente scrivendo `{{Nome Elemento}}`) - si presta davvero bene all'organizzazione del pensiero a tutto tondo in generale.

Come bonus, TiddlyWiki si può usare come un generatore di siti statici più tradizionale: si possono scrivere gli elementi in tanti file, ed usare il programma CLI per compilare tutto nel file monolitico sopra descritto. Il sito ufficiale del progetto usa questa tecnica, ma per un sito personale non è necessaria e anzi, annulla il vantaggio che TiddlyWiki ha, di poter essere usato come una app di note moderna: apri, scrivi, tutto è salvato in cloud in automatico.

Il programma CLI però ha una funzione che trovo utile: il poter generare versioni statiche del sito, che non richiedono JavaScript per la navigazione. È ottima cosa, e credo che chiunque abbia un TiddlyWiki pubblico, se ha gli strumenti, dovrebbe impostare un sistema di build per rendere disponibili automaticamente le pagine statiche sul server.
</details>

<details markdown="1"><summary>
#### [2022-09-18] Quando metto mano io spacc </summary>

Dall'altro giorno mi è, diciamo così, tornato alla mente il fatto che ho un [Nintendo DSpacc](https://wikispacc.miraheze.org/wiki/DSpacc){[:MdTgtBlank:]} nel cassetto.

![Il mio DSpacc, che esegue Pokémon Rubino dalla sua cartuccia.](https://static.miraheze.org/wikispaccwiki/thumb/c/c5/DSpacc_Pokemon_Rubino.jpg/960px-DSpacc_Pokemon_Rubino.jpg)

Non mi vergogno ad ammettere che è in disuso, perché l'unica cosa a cui posso giocarci è Pokémon Rubino.  
Ma mica perché è rimasto uno schermo solo! È perché..

**Lo slot DS della console è rotto**
: Non ho ben capito come, ma lo slot 1 si è rotto: alcuni pin sono semplicemente piegati, ma 2 sono proprio mancanti, e questi ultimi sfortunatamente sono alcuni degli importanti, non doppioni come quelli di terra. Quindi, non si gioca a nessuno dei miei giochi DS fisicamente posseduti, né si usa una flashcart.

<meta>

**Quella di Pokémon è l'unica cartuccia GBA che possiedo**
: Del GBA non ho altre cartucce! Questa di Pokémon la ho solo perché la trovai ad una fiera anni fa e, non possedendo alcuna cartuccia GBA ma il DS già rotto all'epoca, decisi di comprarla. L'ho giocata abbastanza, ma vorrei altre cose. Però non ho altre cartucce e nemmeno una flashcart GBA.

Fatto sta che, anche perché dovevo fare una foto per l'articolo di WikiSpacc, l'ho tirato fuori l'altro giorno. Quando lo vedo mi dispiace di non usarlo, ma c'è purtroppo poco da fare.

La mia pazza mente, però, oggi ha richiamato un'idea che, se fossi capace di fare queste cose, forse sarebbe stata anche buona.. ma io sono io.  
Ho pensato: e **se saldassi una flashcart DS al posto dello slot?** La cosa non l'ho pensata proprio dal nulla, l'ho vista tempo fa in una modifica del DS fatta da una persona che fa queste cose per bene. In alcuni video di un anno fa, come [questo](https://invidious.nerdvpn.de/2wxKDzUO23c?t=156){[:MdTgtBlank:]}, si vede proprio che questo DS di altra forma ha una flashcart saldata sulla scheda madre.

Prendo il cacciavite e le punte, e smonto la console. Tutto OK, l'ho fatto almeno 4 volte contando solo il DS Lite.  
Ma poi, mi armo di saldatore.. onestamente dovrebbero togliermi il porto d'armi, considerando i danni che faccio.

La prima cosa che mi trovo a dover fare è dissaldare lo slot. _Ahia_.  
Dopo aver tagliato i punti non elettrici che tenevano fissato lo slot alla scheda madre - che sembravano punti di saldatura, ma non si scioglievano - inizio prima provando a riscaldare tutti i pin pian piano, tirando leggermente fuori lo slot. Ma non va. Allora provo a riscaldare ogni singolo pin e tirare via lo stagno con quello strumento strano che serve per aspirarlo.. ma ne viene su poco e niente. Alla fine torno al metodo iniziale, ma fatto più velocemente e scorrendo.. **che disastro**!

<div class="MediaRow2" markdown="1">
![Foto dell'area in cui c'era lo slot DS.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Misc/IMG_20220918_170148.avif)
![Foto macro dell'area in cui c'era lo slot DS.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Misc/IMG_20220918_170157.avif)
</div>

Se ne son venuti via quasi tutti i punti di saldatura, e ora c'è il marrone. Conosco il trucchetto del graffiare via lo strato verde della PCB, per esporre metallo pulito su cui saldare, ma qui proprio non c'è spazio. Su questa scheda è tutto messo vicino, non c'è il minimo spazio di manovra.

Ci sono dei piccolissimi buchini con il diametro conduttivo attorno (largo appena quanto un singolo filino di rame), tipo testpoint, che in effetti sembrano essere collegati a dove erano collegati i pad di saldatura che ho distrutto. Giusto per, provo a saldare lì sopra, ma non c'è assolutamente da fare. Quelli son piccoli e non c'è spazio buono attorno, quindi lo stagno non si deposita.

Ho solo perso tempo, e ridimostratami che proprio non son capace a fare lavori di saldatura che vadano oltre il collegare 2 fili su pad enormi (cosa che comunque faccio male, con un lavoro sporco).  
Comprerò una flashcart GBA adesso, e la userò.. per avviare software DS. Con mia sorpresa, è possibile, e magari ne parlerò la prossima volta.
</details>

<details markdown="1"><summary>
#### [2022-09-11] Che accade </summary>
Questi ultimi 7 giorni, davvero poco è stato detto o fatto qui sul sitoctt.  
Ho creato questa sezione per usarla come diario generico, ma solo ora sto scrivendo qualcosa.

Innanzitutto, a me l'altro ieri è iniziata di nuovo la scuola.  
È ancora troppo presto perché arrivi a rubarmi tempo di pomeriggio, ma la mattina comunque la storia è un po' quella che è. Così come anche il casino di quando si ricomincia è sempre lo stesso, con gli orari sballati e in generale ancora le vacanze per la testa.  
Per questi fattori, di tempo in totale per fare le cosine ne ho un po' di meno.

Aggiungiamo che, per via di una mia curiosa necessità, negli ultimi giorni ho dovuto iniziare a programmare un [ennesimo nuovo strumento](https://gitlab.com/octospacc/links){[:MdTgtBlank:]}... non inizio a blaterare sulla cosa in sé, perché questa sezione è per tutto tranne che le mie avventure di sviluppo, però i travagli si possono raccontare: ho iniziato a sviluppare giovedì, ed ho avuto uno strumento minimo funzionante solo ieri sera.  
Tutto questo, perché ho voluto esagerare con l'idea (come mio solito), e perché tutti i pomeriggi da giovedì a domenica, fino a sera presto, ero [in fiera](./PicoBlog.html#-2022-09-11-La-fiera) e, tornando a casa stanca, la voglia di programmare era scarsa.

A questo mix aggiungiamo un'altra distrazione: dopo 5 anni, è uscito un nuovo capitolo della saga di Splatoon, e quindi c'è poco da fare, si deve giocare. Sto cercando comunque, dopo una breve analisi, di non giocarci troppo, tentare di centellinarlo più possibile per non consumarlo subito.  
Oggi non ci ho proprio giocato, per esempio, e credo che finirò la serata senza; ma forse è perché oggi ho avuto esperimenti da fare per quanto riguarda il dumpare i libri digitali di scuola, per averli senza DRM.  
A proposito, quando avrò finito la storia ed avrò provato anche un minimo sindacale di multiplayer, pubblicherò una recensione del gioco, che sto già scrivendo strada facendo.

All'inizio il giochino ho provato a metterlo su emulatore per PC, ma tra glitch (che verranno presto risolti), un po' di lag, e l'impossibilità di giocare via dalla scrivania decentemente, ho dovuto provare sull'hardware reale.  
La mia console Switch, però, era da ormai 7 mesi a lavorare come server. Basta, Spoon è vitale: rimetto fuori il Raspino.

Non ho ancora rimesso tutti i miei software, ma gli importanti (SpaccCraft e i miei bot) ci sono. Ho anche messo una cosina nuova, qbittorrent, che si occupa di seminare un po' alcuni torrent anche quando il mio PC è spento.  
Devo anche risistemare alcune cose riguardanti i backup, per alcuni miei bot, ci vuole un po'.
</details>

</div>
