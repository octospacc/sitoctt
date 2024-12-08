+++
Title = "⚙️ sitoctt Internals"
Categories = [ "Meta" ]
Lastmod = 2024-12-08
+++

Negli interminabili anni della sua esistenza, il sitoctt si è evoluto e continua ad evolversi, ottenendo funzionalità epiche ed in generale un'aura di magia... e chi vuole diventare come me potrebbe voler iniziare dal creare un proprio sito prendendo anche il mio come ispirazione.

Per questo, credo sia carino tenere una raccolta dettagliata delle varie specialità tecniche del sito, illustrate per bene; magari spiegate in modo che siano comprensibili anche a coloro che hanno un po' di curiosità ma non sono addetti ai lavori. (Il tutto, poi, sarebbe utile persino a me per tenere nota di dettagli mistissimi, quindi non ho di che indugiare.)

Il sitoctt è in ogni caso completamente libero e open-source; le note sul copyright, le licenze e la struttura completa dei sorgenti sono descritte alla pagina "[🔓️ Open Source]({{< relref "/miscellanea/Open-Source-sitoctt/" >}})"!

_...In costruzione..._

## Generale

Il sito è un cosidetto "sito statico", cioè una collezione di file HTML e risorse connesse senza un programma di backend server con logica e database. Questo comporta una manutenzione molto bassa e la possibilità di ospitare il sito praticamente ovunque, pure gratuitamente, nonché di distribuirlo senza troppe difficoltà in diversi formati.

Nel mio caso, come ormai è usanza comune, le pagine statiche del sito sono compilate con un "generatore". Da maggio 2022 ad agosto 2024 ho tenuto il sito sotto _staticoso_, il mio generatore creato appositamente e poi deprecato, poiché il codice era diventato troppo [_spaghetti_](https://it.wikipedia.org/wiki/Spaghetti_code); da agosto 2024 ho migrato il sito ad [_Hugo_](https://gohugo.io).

In passato, i template/temi del sito erano 3 molto semplici, non tecnicamente separabili da staticoso e creati da zero; dalla migrazione ad Hugo viene usato un tema personalizzato (con lievi modifiche a colori e layout) creato a partire da [_Ananke_](https://themes.gohugo.io/themes/gohugo-theme-ananke/), uno dei più consigliati per chi vuole fare modifiche.

## Ricerca

Il sitoctt integra un campo di ricerca testuale, con il quale si può raggiungere immediatamente qualsiasi altra pagina del sito. È implementato con due modalità:

* **JavaScript (locale)**: Al caricamento di ogni pagina, viene caricato un indice (quello per la lingua corrente, visto che sono separati per tenere alte le prestazioni) con i metadati di tutte le pagine del sito, che viene poi gestito dallo [script `site-search.js`](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/static/res/site-search.js) e il template [`search-applet.html`](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/layouts/partials/search-applet.html); l'ho costruito prendendo il codice di ricerca dal tema [_Blowfish_](https://themes.gohugo.io/themes/blowfish/) per Hugo. (L'indice è in realtà un file JavaScript che inizializza un oggetto globale JSON, e non un file JSON puro, cosa che permette alla ricerca di funzionare anche quando il sito è navigato da file locali; è generato dal [template `index.searchindex.js`](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/layouts/index.searchindex.js).)
* **Fallback**: Nel caso JavaScript non possa essere eseguito nel browser, la casella di ricerca funziona in modo più classico e si appoggia alla [mia istanza YaCy](https://yacy.spacc.eu.org), che funziona esattamente come un motore di ricerca web normale (Google, DuckDuckGo, ecc...) ma indicizza meglio tutte le mie pagine (e quindi non sta solo per bellezza).

## Multilingua

La gestione di lingue multiple per le varie pagine del sito è gestita con funzionalità integrate in Hugo.

Quasi tutte le pagine e i post sono tradotti automaticamente dall'italiano ad altre lingue, nella mia speranza di rendere il sito un pochino più utile, perché potenzialmente individuabile da più persone tramite motori di ricerca; questo lo faccio con [uno script Python creato proprio per questo](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/Scripts/Translate/Main.py), che sfrutta _Google Traduttore_ attraverso [lo script/libreria _Translate Shell_](https://memos.octt.eu.org/m/aC95aGEzJi7DvU2teM3eos).

## Altro?

Non lo so. Non sperate mi venga in mente altro da aggiungere dal nulla; piuttosto, lasciate un commento su questa pagina se qualcosa vi incuriosisce e volete maggiori dettagli, spiegati al di là del codice...

