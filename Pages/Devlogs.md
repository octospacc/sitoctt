// % Title = 💾 Devlogs
// % HTMLTitle = <span class="twa twa-floppy-disk twa-💾">💾</span> Devlogs
// % Style = @import "[staticoso:Site:RelativeRoot]Assets/Pages/Devlogs.css";
// % Index = True
// % Order = 35
// % Categories = Tecnologia

# <span class="twa twa-floppy-disk twa-💾">💾</span> Devlogs

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

<div markdown="1" class="BorderBoxContainer">

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

<!-- ---- --->

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

<!-- ---- --->

<details markdown="1" class="Box-staticoso Box-sitoctt"><summary>
#### [2022-08-29] Titoli delle sezioni, ma ancora meglio </summary>
-> #staticoso #sitoctt

Soprattutto a causa della necessità di rendere **staticoso** leggermente più adatto alla creazione di siti di documentazione, oltre che di blog e cose così, ho sentito di dover apportare **qualche miglioramento** alla generazione dei _✨magici✨_ **titoli delle sezioni**.

Ispirandomi parzialmente a cosa fa [mdBook](https://rust-lang.github.io/mdBook){[:MdTgtBlank:]}, ho aggiunto un **target ancora** (`<a>`) al fianco di ogni heading nel testo.  
mdBook rende ogni titolo un link in sé; soluzione elegante ed intuitiva per copiare un link alla sezione all'istante, ma che può dare (da) problemi grossi in certi casi. Ad esempio, le sezioni `<details>`, _che io tanto amo_, diventerebbero difficili da aprire, perché gran parte della loro hitbox sarebbe coperta da quella di un link.  
Dovevo inventarmi qualcos'altro.

A livello di **HTML**, allora, staticoso genera per ogni titolo la seguente struttura: elemento heading, che contiene prima un elemento span racchiudente l'ancora, a sua volta contenente il semplice testo `»`, e poi un altro span (con id univoco) che ha il titolo in sé.  
Facendo un esempio pratico, questo è cosa esce fuori:  
<pre class="CodeScroll"><code class="language-html">
&lt;h1 class="SectionHeading">
	&lt;span class="SectionLink">
		&lt;a href="#-Titolo-di-esempio">
			&lt;span>»&lt;/span>
		&lt;/a>
	&lt;/span>
	&lt;span class="SectionTitle" id="-Titolo-di-esempio">
		Titolo di esempio
	&lt;/span>
&lt;/h1>
</code></pre>

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

<!-- ---- --->

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

<!-- ---- --->

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
