+++
Title = "🔓️ Open Source"
Categories = [ "Meta" ]
Lastmod = 2024-12-08
+++

Per quanto il sitoctt nasca principalmente con l'intento di essere un posto tutto bellino per la mia personale espressione digitale (non a caso [all'inizio si chiamava _postoctt_]({{< relref "/blog/2022-08-26-sitoctt-da-3-mesi-ad-oggi/#il-postoctt" >}})), l'ho concepito anche come bene pubblico e risorsa per tutti.

Per garantire ciò (e perché, incidentalmente, il fatto di avere tutto così mi rende più facile la gestione tecnica), tutto il codice che fa funzionare il sito (dalla compilazione alla visualizzazione) è lasciato completamente aperto, e i contenuti vari sono di seguito dichiarati come liberi.

## Licenze e Copyright

Tutto il contenuto presente su questo sito che ho creato io (i miei testi, media originali, e maggior parte del codice sorgente) è rilasciato sotto licenza <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.it?ref=chooser-v1&title=%E2%9C%A8sitoctt%E2%9C%A8&href=https://sitoctt.octt.eu.org&creator=OctoSpacc" rel="noopener" target="_blank">"Creative Commons Attribuzione - Condividi allo stesso modo 4.0 Internazionale" (CC BY-SA 4.0) (<span class="CCIcons"><img class="mw1" src="{{< assetsRoot >}}/Media/Icons/CC/CC.svg"/> <img class="mw1" src="{{< assetsRoot >}}/Media/Icons/CC/BY.svg"/> <img class="mw1" src="{{< assetsRoot >}}/Media/Icons/CC/SA.svg"/>)</span></a>, una licenza libera che promuove la condivisione, e non intacca i legittimi diritti alla cultura e la collaborazione dell'umanità in generale.

Sono presenti, però, anche contenuti non miei.  
In genere, se qualcosa viene dalla mia mano, non avrà nessuna indicazione di crediti vicino.  
Per la roba presa in prestito, invece, verrà quando possibile sempre indicata la fonte da cui ho prelevato e la licenza dell'oggetto, che sia questa di dominio pubblico, Creative Commons, o non specificata.  
Occhio, che i crediti per le cosine HTML e CSS spesso li lascio soltanto nei sorgenti della pagina.. Quindi, in caso, controlla lì per questo genere di crediti. Per cose come immagini o testi, invece, spesso eventuali crediti sono parte visibile della pagina, vicini all'elemento preso in prestito (come una descrizione); altre volte, lo stesso oggetto è un link che, se cliccato, riporta alla fonte.

## Repository

Tutti i sorgenti del sito sono scaricabili dalle rispettive repo Git (GitLab.com) (così divisi per tenere la cronologia pulita), alle condizioni descritte sopra:

* Principale: https://gitlab.com/octtspacc/sitoctt
* Media: https://gitlab.com/octtspacc/sitoctt-assets

Alcuni mirror aggiornati, sempre presenti nel caso succeda qualche _patatrac_ alle repository principali:
* GitHub: https://github.com/octospacc/sitoctt, https://github.com/octospacc/sitoctt-assets
* Gitea.it: https://gitea.it/octospacc/sitoctt, https://gitea.it/octospacc/sitoctt-assets

## Struttura dei sorgenti

Il repository secondario serve solo per accumulare file multimediali che embeddo sul sito (sia nelle pagine, che nel layout), eventuali download, e così via. Non è strutturato in branch multipli e i commit sono irrilevanti.

Il repository principale è strutturato secondo questi rami (branch):

#### `sitoctt-next` (principale)

Questo è il branch oggi impostato come predefinito, che ospita i file principali del sito, da quando questo è stato migrato al generatore di siti statici Hugo:

* Sorgenti di pagine e post (principalmente in formato Markdown)
* Sorgenti del layout delle pagine, quindi template HTML con sintassi Go e fogli di stile CSS
* Altri elementi di base delle pagine, come script lato client e piccole icone
* Script molto custom per ogni fase del processo di compilazione del sito: ottenimento delle dipedenze, compilazione delle pagine, sincronizzazione di dati esterni, ecc...

#### `sitoctt-old` (vecchio `main`)

Era il ramo principale del sito prima della migrazione ad Hugo, quando questo era ancora gestito dal mio generatore, staticoso.

La struttura generalizzata è uguale a quella di oggi, ma ovviamente le cartelle e i file erano un po' diversi.

#### `translate-cache`

Ramo dove conservo le versioni automaticamente tradotte di varie pagine e post del sito. Sono conservate separatamente perché sono file rigenerabili in ogni momento, e non ha senso quindi che sporchino la cronologia di commit effettivi del sito. Però, vanno conservati, perché generarli tutti da zero ad ogni compilazione del sito richiederebbe ore...

#### `requirements-cache`

Branch che uso un po' come deposito per varie dipendenze di build o di runtime del sito, visto che alcune sono estremamente fragili ed altre magari è semplicemente conveniente backupparle. Ma freca poco.
