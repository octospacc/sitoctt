// % Title = 💾 Archivi Devlogs
// % HTMLTitle = <span class="twa twa-floppy-disk twa-💾">💾</span> Archivi Devlogs
// % Style = @import "[staticoso:Site:RelativeRoot]Assets/Pages/Devlogs.css";
// % Categories = Tecnologia Blog MicroBlog

Ho dimenticato di annunciarlo nell'articolo "[🎇 Il resocontoctt di questo 2023, almeno in termini di posting!](./Posts/2023-12-31-Resocontoctt-2023.html#-Il-MicroBlog-nuovissimo-alla-fa)", ma, così come per il PicoBlog e il Vecchio MicroBlog, i Devlogs sono ora deprecati, e non verranno più aggiornati. Quello che segue è l'archivio dei vecchi contenuti, che rimarrà leggibile. I nuovi post verranno quindi pubblicati sul Nuovo MicroBlog unificato, raggiungibile dal menu del sito.

---

# <span class="twa twa-floppy-disk twa-💾">💾</span> Archivi Devlogs

Per mesi, in maniera occasionale, ho (ab)usato il PicoBlog come se fosse un devlog.  
Ad un certo punto (_era quasi ora.._) [ho però pensato](./PicoBlog.html#-2022-08-23-Devlogs) al fatto che le cose non andassero bene.

La scrittura sul PicoBlog è, per natura dello stesso, molto limitata in lunghezza e in scopo. Per tenere una buona traccia di tutto quello che sviluppo - tra cui questo sito, ma non solo - urgeva la creazione di una sezione si stile diario, ma dedicata alla cosa.

Quindi, si dia inizio ai miei Devlogs!  
_Ovviamente, scriverò soltanto la roba interessante, non tutto quello che faccio in ogni minimo dettaglio - i bug si dimenticano una volta che si risolvono._

## Leggi i Devlogs

<!-- noprocess />
<h3 class="NoTitle InlineBlock">Filtri:</h3>
<input type="checkbox" id="CheckBox-sitoctt" checked><label for="CheckBox-sitoctt">#sitoctt</label>
<input type="checkbox" id="CheckBox-staticoso" checked><label for="CheckBox-staticoso">#staticoso</label>
</ noprocess --->

<div markdown="1" class="BorderBoxContainer" HTMLJournal="1" JournalTitle="💾 Devlogs di Octt">

<details markdown="1" class="Box-sitoctt Box-staticoso" open><summary>
#### [2022-11-11] Novità estetiche incollate con lo sputo </summary>
-> #sitoctt #staticoso

Da quanto che non scrivevo un devlog! Qualcosina però, per **sitoctt e staticoso**, l'ho fatta nel frattempo.

Il primo **cambiamento notevole** che ho apportato al sito in questi giorni è l'applicazione del **nuovo tema** (esclusivamente) alla [pagina home](./index.html). Lascio una foto, cosicché questo post sia comprensibile anche a distanza di tempo senza che serva controllare la Wayback Machine.  
La cosa bella? **Avevo iniziato** a progettarlo diversi **mesi fa**, pian piano, giorno per giorno, fino a che ad un certo punto.. _ho dimenticato di continuare!_ 😵 Alla fine, però, ho finito tutte le rifiniture e aggiunto **nuovi dettagli**.

![Schermata ritagliata della home page corrente.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Screenshots/sitoctt/home-2022-11-06.png)

Non so cosa stavo pensando mentre costruivo il template, e quindi è venuto un **miscuglio di roba**: **stile** ambiente **desktop**.. ma con lo sfondo _Bubbles_ di **Windows 95** ricolorato di viola, tema **quasi-metro** per taskbar (dove a sinistra si trova il tasto menu) e decorazioni di finestra, con la barra del titolo che ha il titolo al centro, ma un'icona rappresentante la finestra a destra, e un tasto per **collassare/riaprire** le stesse. Quest'ultima roba, assieme al poter portare una finestra mezza nascosta in primo piano cliccandola (su PC basta passarci sopra il cursore del mouse), l'ho fatta ovviamente funzionare **senza alcuno script**!

Il **riposizionamento** in primo piano è molto **facile**: con la pseudo-classe CSS _Hover_, applicato alla classe delle finestre, si imposta un valore Z superiore al default di tutte le altre finestre. In questo modo, la finestra verrà rialzata quando ci si passa il puntatore virtuale sopra.

```{ .css .CodeScroll }
.Window:Hover {
	/* Non ci sono al momento finestre con Z-Index maggiore di questo, quindi va bene */
	Z-Index: 128;
}
```

**La storia dello shading** delle finestre, invece, è più complicata e mi **ha richiesto** l'uso di qualche **hack**, e ora spiego il tutto. Segue l'HTML rappresentante un'ipotetica finestra, e del relativo CSS.

```{ .html .CodeScroll }
<div class="Window" id="ExampleWindow">
	<div class="TitleBar">
		<input type="checkbox" class="CheckToggle" id="ExampleWindowCheck">
		<div class="TitleBarContent">
			<span> <label class="CheckLabel" for="MainWindowCheck"></label> </span> &nbsp;&nbsp; <span> <b>Finestra Esempio</b> </span>
		</div>
		<div class="WindowContent ToggleBox">
			<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit...
			</p>
		</div>
	</div>
</div>
```

```{ .css .CodeScroll }
/* Input checkbox della classe specifica per i bottoni no-JS */

/* Impostato come invisibile per motivi estetici */
.CheckToggle {
	Position: Fixed;
	Opacity: 0;
	Visibility: Hidden;
}

/* Di default, sui label dedicati alle checkbox, figura un simbolo rappresentante lo stato di unshaded */
.CheckLabel:Before {
	Content: '🔼';
}

/* A checkbox spuntata, sul label nidificato adiacente figura un simbolo rappresentante lo stato di shaded */
:Checked ~ .TitleBarContent > Span > .CheckLabel:Before {
	Content: '🔽';
}

/* A checkbox spuntata, sparisce il div del contenuto */
:Checked ~ .ToggleBox {
	Display: None;
	Visibility: Hidden;
}
```

Insomma, se questa _robaccia_ si può fare è grazie all'**abuso** del selettore CSS `~` (tilde), che permette di applicare una proprietà ad un elemento adiacente ad un altro, in questo caso verificando prima una condizione con una pseudo-classe (la proprietà _Checked_ della casella).

Il problema è che, non esistendo alcun selettore per raggiungere elementi genitori del DOM, ho dovuto piazzare il **div del contenuto in quello della barra del titolo**: una schifezza, _pure abbastanza grossa_ considerando cosa ho dovuto fare poi per rendere le finestre esteticamente a posto nonostante il loro scheletro _affetto dalle devianze_.

Continuando con il vedere le **classi CSS delle finestre** in sé.. i commenti bastano.

```{ .css .CodeScroll }
.Window {
	Position: Absolute;
	Margin: Var(--WindowMargin);
	/* Bordo per estetica, 4px nel mio caso */
	Border: Solid Var(--WindowBorderSize) Var(--TitleBarBackground);
}
.WindowContent {
	/* Minima larghezza del div contenuto della finestra pari alla totale finestra */
	Min-Width: Calc(100% + Var(--WindowMargin)*2 + Var(--WindowBorderSize)*2);
	/* Padding per estetica */
	Padding: Calc(Var(--WindowPadding)*2);
	Padding-Top: Var(--WindowPadding);
	/* Overflow Y permesso nel solo div contenuto 
	Overflow-Y: Auto;
	/* Allineamento del contenuto nella finestra tenendo conto dei margini */
	Margin-Left: Calc(0px - Var(--WindowMargin) - Var(--WindowBorderSize));
	Margin-Top: Var(--WindowBorderSize);
}
```

Questo, infine, è il **CSS applicato alle singole finestre**, che differisce sempre in valori.. e, a parte i commenti, anche qui non so proprio cosa dire! 🤐 _La soluzione funziona? E allora va bene così._

```{ .css .CodeScroll }
/*
*/ #ExampleWindow {
	/* Dimensioni massime della finestra */
	Max-Width: 80vw;
	Max-Height: 75vh;
	/* Posizione assoluta a schermo */
	Top: 8px;
	Left: 16px;
	Z-Index: 8;
}
/*
*/ #FeedWindow .WindowContent {
	/* Impostazione della massima altezza del div contenuto della finestra;
	 * Per qualche motivo, se non esplicito la cosa, il contenuto sborda sempre.
	 * All'altezza massima dell'intera finestra devo sottrarre, oltre al margine,
	 * ben 2 volte l'altezza della barra del titolo (ma forse basterebbe una costante arbitraria),
	 * altrimenti il contenuto può andare comunque troppo giù.
	 */
	Max-Height: Calc(75vh - (Var(--TitleBarHeight) * 2) - Var(--WindowMargin));
}
```

Questa **complessa soluzione** funziona perfettamente su Firefox e su Chromium desktop, ma su Chromium per Android questi **posizionamenti pixel-perfect** fanno _imbizzarrire_ il motore CSS, che _non si vergogna affatto_ di mostrare dello spazio vuoto tra i bordi decorativi e lo sfondo degli altri div che compongono la finestra.

![Schermata ritagliata e zoomata della home page renderizzata da Chromium su Android.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Screenshots/sitoctt/WM-Chromium-Mobile-Glitch.png)

Vabbè, lo diciamo che fa schifo? Ma sì: **FA SCHIFO!** Se hai una soluzione migliore senza JavaScript, io [sto aspettando la tua pull request](https://gitlab.com/octtspacc/sitoctt){[:MdTgtBlank:]}. _Forza, sto aspettando, aiutami a togliere lo schifo._

Grazie a questo nuovo tema posso permettermi di aggiungere, in modo un minimo sensato, alcuni **meta-contenuti** ripetuti tra le pagine del sito che lo usano - anche se per il momento l'ho applicato solo alla home, perchè ho paura che causi un po' troppa confusione visiva sulle pagine dove il contenuto deve stare al primo posto. Una cosa che ho messo, per dire, è la **lista di post recenti** in una finestrella dedicata.

Per quest'ultima cosa, ho chiaramente dovuto aggiornare **staticoso**, che genera la lista quando nel codice di una pagina trova la stringa `<staticoso:Feed>`.  
Ne ho approfittato per fare anche altri piccoli miglioramenti, ad esempio ho aggiunto la generazione automatica di **pagine di redirect** per una serie di URL alternativi specificati nei metadati di una pagina; con questa funzione ho potuto facilmente rinominare i file di alcune pagine nel sito senza rompere gli URL vecchi, ed ho aggiunto **alias di convenienza** per certe pagine: ad esempio, [/Blog.html](./Blog.html) che rimanda a [/Categories/Blog.html](./Categories/Blog.html).

Come ultime cose: al generatore ho aggiunto anche la creazione di **liste di** tutte le pagine contenute in **una cartella** e relative sottocartelle del sito, che richiamo con `<staticoso:DirectoryList:{DIRECTORY}>` e _forse, credo, mi servirà più tardi_, anche se ho già creato [una pagina che ne fa uso](./Posts/index.html).
</details>


<!-- ---- ---- --->


<details markdown="1" class="Box-sitoctt"><summary>
#### [2022-09-05] Filtri intelligenti </summary>
-> #sitoctt

_Le soluzioni semplici sono spesso le migliori_.  
Con questa filosofia, come in altri casi, ho preso e ho implementato questa piccola cosa che mi serviva sul **sitoctt**.

Al momento i Devlogs sono ancora un po' vuoti, ma, per quando inizieranno a riempirsi di più, sarebbe carino poter efficacemente **filtrare** le mie scritture **per categoria**.  
Problema risolto in appena qualche riga di HTML e CSS!

```{ .html .CodeScroll }
<input type="checkbox" id="CheckBox-CATEGORIA" checked>
<label for="CheckBox-CATEGORIA">#CATEGORIA</label>
...
```

```{ .css .CodeScroll }
.Box-CATEGORIA,
...
{
	Display: None;
}

/*
*/ #CheckBox-CATEGORIA:Checked ~ Div > .Box-CATEGORIA,
...
{
	Display: Inherit;
}
```

Mi basta questo codice di base - che devo però duplicare per ogni singola categoria - per definire degli elementi (che dovranno avere una o più classi di categoria; io uso `<details>` per avere i collassabili) che possono essere fatti sparire quando si toglie la spunta alle eventuali caselle.  
Diversi elementi possono inoltre appartenere a **multiple categorie**, cosa che per me è utile.

La cosa è molto più complicata a spiegarsi, di quanto non lo sia a farsi e _ad essere usata.. quindi..._ 😳!

_Nota: I simboli hash (#) nei nomi **visibili** delle categorie non centrano nulla con l'id HTML degli elementi, li uso come prefisso semplicemente per simboleggiare un hashtag._
</details>


<!-- ---- ---- --->


<details markdown="1" class="Box-staticoso"><summary>
#### [2022-09-01] Ottimizzazioni necessarie </summary>
-> #staticoso

Nei giorni appena passati ho apportato qualche **miglioria interna** a **staticoso**.

La prima cosa che ho fatto è stata aggiungere il supporto alla **compilazione differenziale** dei siti, ossia: ad ogni esecuzione, il programma ricompila solo le pagine che sono effettivamente cambiate dalla compilazione precedente, arrivando quindi ad una **maggiore efficienza**.

La funzione è **ancora da perfezionare**, in quanto non controlla se l'HTML di template cambia, ma solo se lo fanno i file di pagine e post.  
La cosa può risultare in confusione durante l'uso: eventuali utenti che usano il software (_me in primis_) magari modificano un template, non vedono le differenze dopo una ricompilazione, e _apriti cielo_. Per questo motivo, per il momento la funzionalità non è attiva di default; chi vuole usarla deve attivare una flag.

Oltre a ciò, la build differenziale va ancora a calcolare alcune cose che non cambiano, quindi non siamo ancora alla massima efficienza; per arrivarci, dovrò implementare una cache per alcune di quelle cose che servono solo durante l'esecuzione, in modo che il programma possa ripescarle dall'archiviazione locale.

La compilazione differenziale può arrivare a far **risparmiare tantissimo tempo**, reale oltre che di CPU, ma si può fare di più per guadagnare fino all'ultimo millisecondo della prima categoria: usare il **multithreading**.  
Con il multithreading - anche questo implementato parzialmente nei giorni passati - il programma può usare **tutti i processori** (fisici e logici) **allo stesso tempo**, anziché uno solo, dividendo quindi il tempo reale necessario al completamento di tutti i calcoli. Viene da sé che, più processori si hanno, più è possibile dividere il tempo.

Il mio sito, con **30 pagine Markdown** (ho escluso l'unica in Pug, che richiede una chiamata ad un programma esterno, apposta per testare) che in totale ad oggi pesano **~180 KB**, appena qualche giorno fa impiegava attorno ai 2200 millisecondi per compilarsi sul mio PC desktop[^ groso 2022-09-01]. Con le nuove ottimizzazioni, invece.. si parla di **~850 ms** per una compilazione pulita, e **~450 ms** per una differenziale senza alcuna modifica da ricompilare. Non male!

Giusto per, ho voluto fare un **test** - che, se avessi voluto fare davvero per bene, avrei dovuto fare in confronto ad altri generatori di siti statici - su un ipotetico sito da **1500 pagine**. Ho quindi copiato la cartella del mio sito, sdoppiato tutte le pagine per farle arrivare alla grossa cifra (in peso dei file avrò avuto un totale di **9 MB**, considerando `(180/30)*1500`), e ho acceso il programmino.  
Esecuzioni diverse hanno dato risultati un po' diversi, forse perché avevo diversi _altri programmi_ aperti che _mangiavano CPU_ (primo di tutti, Firefox che riproduceva un video da Invidious; almeno il 20% di CPU era occupato); ma posso dire di aver visto **~160 s** per una build pulita e **~17 s** per la differenziale (di nuovo, senza alcuna effettiva modifica).

![Schermata di Task Manager nel momento della compilazione del sito grosso.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Screenshots/Task-Manager-staticoso-Test-1500-2022-08-30.avif)

Quei 17 secondi in particolare, comunque, mostrano senza alcun dubbio che il mio codice **va ancora ottimizzato** - oltre il poco che ho già fatto. Vabbè, in ogni caso mi soddisfa già il punto in cui sono arrivata!
</details>


<!-- ---- ---- --->


<details markdown="1" class="Box-staticoso Box-sitoctt"><summary>
#### [2022-08-29] Titoli delle sezioni, ma ancora meglio </summary>
-> #staticoso #sitoctt

Soprattutto a causa della necessità di rendere **staticoso** leggermente più adatto alla creazione di siti di documentazione, oltre che di blog e cose così, ho sentito di dover apportare **qualche miglioramento** alla generazione dei _✨magici✨_ **titoli delle sezioni**.

Ispirandomi parzialmente a cosa fa [mdBook](https://rust-lang.github.io/mdBook){[:MdTgtBlank:]}, ho aggiunto un **target ancora** (`<a>`) al fianco di ogni heading nel testo.  
mdBook rende ogni titolo un link in sé; soluzione elegante ed intuitiva per copiare un link alla sezione all'istante, ma che può dare (da) problemi grossi in certi casi. Ad esempio, le sezioni `<details>`, _che io tanto amo_, diventerebbero difficili da aprire, perché gran parte della loro hitbox sarebbe coperta da quella di un link.  
Dovevo inventarmi qualcos'altro.

A livello di **HTML**, allora, staticoso genera per ogni titolo la seguente struttura: elemento heading, che contiene prima un elemento span racchiudente l'ancora, a sua volta contenente il semplice testo `»`, e poi un altro span (con id univoco) che ha il titolo in sé.  
Facendo un esempio pratico, questo è cosa esce fuori:  

```{ .html .CodeScroll }
<!--
--> <h1 class="SectionHeading">
	<span class="SectionLink">
		<a href="#-Titolo-di-esempio">
			<span>»</span>
		</a>
	</span>
	<span class="SectionTitle" id="-Titolo-di-esempio">
		Titolo di esempio
	</span>
</h1>
```

Senza CSS, i titoli sulla pagina renderizzata si vedono come al solito, eccetto per il fatto che hanno un carattere `»` cliccabile alla loro sinistra. Andrebbe bene già così, ma ovviamente io avevo la **personalizzazione** in mente da subito.  
Sul tema principale del **sitoctt**, infatti, ho personalizzato la cosa in modo da avere:

- L'emoji della catena (`🔗`) come carattere per il link;
- Il posizionamento un po' a sinistra del tastino, per far rimanere i titoli in linea con il testo normale;
- Opacità del carattere molto ridotta, e un po' meno ridotta quando il mouse/dito ci passa sopra;
- Evidenziazione e sottolineatura di un heading attivato.

In codice **CSS**, la mia visione si è tradotta in queste righe:  
```{ .css .CodeScroll }
.SectionTitle:Target {
	Color: #EEDDFF !Important;
	Background: #700070 !Important;
	Text-Decoration: Underline;
}
.SectionLink {
	Position: Absolute;
	Left: -1.5em;
	Opacity: 0.08;
}
.SectionLink:Hover {
	Opacity: 0.8;
}
.SectionLink > A::Before {
	Content: '🔗';
}
.SectionLink > A > Span {
	Font-Size: 0;
}
```

In tutta onestà, lo ripeto: forse per il sitoctt questa cosa non serviva; ma, per la [**documentazione di staticoso**](https://gitlab.com/octtspacc/staticoso-docs){[:MdTgtBlank:]}, credo **sarà utilissima**.
</details>


<!-- ---- ---- --->


<details markdown="1" class="Box-sitoctt"><summary>
#### [2022-08-24] Titoli delle sezioni - ora ovunque </summary>
-> #sitoctt

**Una delle caratteristiche** delle pagine di questo sito, anche quelle di blog - cosa che, riconosco, non si vede tutti i giorni, se non su Wikipedia (_che un blog non è_) - è **il menu con i titoli** delle sezioni della pagina.  
Su pagine con tanto e tanto contenuto è qualcosa di ottimo, perché **permette** a chi legge **di** saltare rapidamente tra diverse zone del testo, per poter **trovare al volo determinate informazioni**.

Il mio generatore di siti statici genera i menu con i titoli guardando (_appunto, direi_) i titoli (heading), presenti nel testo, quindi: _se quelli non ci sono, il menu non si riempie_.

Ecco, _io non so per quale assurdo motivo_, ma fino ad ora **ho tenuto senza titoli magici alcune pagine** (in particolare, quella del [PicoBlog](./PicoBlog.html)) che hanno contenuti divisi in sezioni collassabili.

È vero che, grazie ai collassabili (creati con il grazioso tag `<details>`), queste pagine sono facilmente scorrevoli, visto che a tutti gli effetti le stesse diventano un menu... ma, senza i titoli fatti per bene, è **impossibile linkare a sezioni** specifiche!  
Eh già, perché l'injecting dell'attributo `id` da parte di staticoso va, giustamente, a braccetto con la ricerca degli heading.

Un po' con il trova e sostituisci del mio editor di testo, e un po' a manina, **ho fatto questa sistemazione** nelle _2_ pagine in cui dovevo. Ora, anche per quelle, ho la possibilità di **creare** dei **link di rimando alle sezioni** che voglio.
</details>


<!-- ---- ---- --->


<details markdown="1" class="Box-staticoso Box-sitoctt"><summary>
#### [2022-08-24] La data di compilazione </summary>
-> #staticoso #sitoctt

È una cosina semplice, quella che ho fatto ieri (e che solo oggi ho tempo di scrivere), ma può secondo me avere **grandi implicazioni**: ho aggiunto a **staticoso** la possibilità di scrivere nell'HTML **il momento** (data e ora) **in cui** il programma **ha compilato** ogni pagina, che posso sfruttare aggiungendo la macro `\[staticoso:BuildTime]` dove preferisco.

Ritengo sia qualcosa di utile almeno per il **sitoctt**: mi fa più che piacere che il sito possa venire archiviato e distribuito parallelamente ai miei server - se non fosse stato così, non avrei scelto con tale convinzione la licenza **CC BY-SA** - però potrebbero sorgere problemi in caso venissero fatti circolare backup obsoleti _che non mettono in chiaro di esserlo_.

Nel tempo, **il sito** inevitabilmente **subisce modifiche**. Alcune sono semplici aggiunte, e in quei casi un archivio obsoleto del sito avrà banalmente cose in meno; altre volte, si tratta di rettifiche.  
Data la possibilità di quest'ultimo tipo di aggiornamenti, **è bene che chi legga una copia** del sito **possa** eventualmente **accorgersi** del fatto **che la stessa sia vecchia** (ad esempio, di una settimana o più, considerando la frequenza con cui di solito aggiorno il sito).

**Revisioni** ai miei vecchi contenuti **possono avvenire** per diversi fattori: magari ritengo giusto aggiornarli perché non più in linea con qualche verità oggettiva, oppure con le mie opinioni personali.  
Non che le versioni precedenti debbano per forza sparire - la cronologia di Git sta bene dove sta - ma il punto è che **le edizioni antiche del sitocto devono specificarlo bene**, **per evitare** di indurre una qualsiasi persona in **confusione**.

E quindi, alla fine, ecco che **ora ho la data di compilazione al piè di** ogni **pagina**.  
_O almeno, così è al momento in cui scrivo_. Non è mica da escludere che lo stile del mio sito possa cambiare prima o poi, e con esso anche il posizionamento della mia bella riga di testo! 😬️
</details>

</div>

## [:HNotesRefsHTML:]

[^ groso 2022-09-01]: In data **2022-09-01**, il mio PC fisso è: **CPU** [AMD Ryzen 3 3200G](https://www.amd.com/en/products/apu/amd-ryzen-3-3200g){[:MdTgtBlank:]}; **OS** [Void GNU+Linux](https://voidlinux.org){[:MdTgtBlank:]} x86_64, libc musl. 
