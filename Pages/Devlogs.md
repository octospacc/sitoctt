// % Title = 💾 Devlogs
// % HTMLTitle = <span class="twa twa-floppy-disk"><span>💾</span></span> Devlogs
// % Index = True
// % Order = 35
// % Categories = Tecnologia

# <span class="twa twa-floppy-disk"><span>💾</span></span> Devlogs

Per mesi, in maniera occasionale, ho (ab)usato il PicoBlog come se fosse un devlog.  
Ad un certo punto (_era quasi ora.._) [ho però pensato](./PicoBlog.html#-2022-08-23-Devlogs) al fatto che le cose non andassero bene.

La scrittura sul PicoBlog è, per natura dello stesso, molto limitata in lunghezza e in scopo. Per tenere una buona traccia di tutto quello che sviluppo - tra cui questo sito, ma non solo - urgeva la creazione di una sezione si stile diario, ma dedicata alla cosa.

Quindi, si dia inizio ai miei Devlogs!  
_Ovviamente, scriverò soltanto la roba interessante, non tutto quello che faccio in ogni minimo dettaglio - i bug si dimenticano una volta che si risolvono._

## Leggi i Devlogs

<div markdown="1" class="BorderBoxContainer">

<details markdown="1"><summary>
#### [2022-08-29] Titoli delle sezioni, ma ancora meglio </summary>
-> #staticoso #sitoctt

Soprattutto a causa della necessità di rendere **staticoso** leggermente più adatto alla creazione di siti di documentazione, oltre che di blog e cose così, ho sentito di dover apportare **qualche miglioramento** alla generazione dei _✨magici✨_ **titoli delle sezioni**.

Ispirandomi parzialmente a cosa fa [mdBook](https://rust-lang.github.io/mdBook){[:MdTgtBlank:]}, ho aggiunto un **target ancora** (`<a>`) al fianco di ogni heading nel testo.  
mdBook rende ogni titolo un link in sé; soluzione elegante ed intuitiva per copiare un link alla sezione all'istante, ma che può dare (da) problemi grossi in certi casi. Ad esempio, le sezioni `<details>`, _che io tanto amo_, diventerebbero difficili da aprire, perché gran parte della loro hitbox sarebbe coperta da quella di un link.  
Dovevo inventarmi qualcos'altro.

A livello di **HTML**, allora, staticoso genera per ogni titolo la seguente struttura: elemento heading, che contiene prima un elemento span racchiudente l'ancora, a sua volta contenente il semplice testo `»`, e poi un altro span (con id univoco) che ha il titolo in sé.  
Facendo un esempio pratico, questo è cosa esce fuori:  
<pre class="CodeScroll"><code>
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
<pre class="CodeScroll"><code>
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
</code></pre>

In tutta onestà, lo ripeto: forse per il sitoctt questa cosa non serviva; ma, per la [**documentazione di staticoso**](https://gitlab.com/octtspacc/staticoso-docs){[:MdTgtBlank:]}, credo **sarà utilissima**.
</details>

<details markdown="1"><summary>
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

<details markdown="1"><summary>
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
