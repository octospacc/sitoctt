+++
Title = "📄 Copie del Sito"
Categories = [ "Meta" ]
Lastmod = 2024-12-01
+++

Oltre alla versione "normale" del sito, cioè servita dagli indirizzi web ufficiali, il sitoctt è disponibile sotto forma di copie: archivi e mirror, in linea e offline. Possono essere utili per consultare il sito qualora questo dovesse in qualche momento andare giù, o si voglia per qualche motivo far riferimento ad un suo stato congelato nel passato.

## Archivi Offline

A parte [il codice sorgente disponibile]({{< relref "/miscellanea/Open-Source-sitoctt/#repository" >}}), che può essere archiviato e riutilizzato da chiunque ne abbia le competenze per rigenerare le pagine dalle loro parti essenziali, il sito è progettato per poter essere agevolmente accessibile a tutti senza dipendere dal mio server.

Senza bisogno di strumenti speciali (come ne esistono per clonare qualsiasi sito web), è possibile scaricare una copia precompilata di tutti i file del sito in formato di cartella ZIP, altamente compatibile con qualsiasi sistema. Basta scaricare una delle varianti di seguito, scompattare l'intero archivio, ed aprire `index.html` (o qualsiasi altro file HTML) con il browser per navigare offline.

* [sitoctt-offline.zip](/sitoctt-offline.zip): Tutte le pagine e i prerequisiti (metadati, fogli di stile, script, ecc...)
* [presto disponibile]: Tutte le pagine, i prerequisiti, + gli asset multimediali (foto e video allegati, ecc...)

## Mirror Online

Sul web esistono alcuni servizi che tengono copie di pagine o di interi siti, più o meno di frequente, a fini di ricerca e di preservazione; delle specie di biblioteche.

Il sitoctt non è escluso dall'archivio più grosso al mondo, la _Wayback Machine_ dell'_Internet Archive_: se ne possono cercare le pagine, per URL e data, da <http://web.archive.org/web/*/https://sitoctt.octt.eu.org>. Pagine specifiche vengono salvate solo quando qualcuno o qualcosa ne fa richiesta al servizio, quindi la disponibilità dei contenuti può essere limitata.

Esistono inoltre in giro archivi privati o aperti al pubblico, che potrebbero ospitare anche copie del mio sito. Non ne conosco nessuno, quindi consiglio di esercitare la giusta cautela nel consultarli, casomai dovessero uscirne fuori alcuni.

Chiunque voglia mettere a disposizione una copia del sitoctt su un proprio server può tranquillamente farlo, senza chiedermi esplicito permesso, [secondo i termini della licenza]({{< relref "/miscellanea/Open-Source-sitoctt/" >}}); chiedo soltanto che si renda chiaro si tratti di copie (con banner o simili inseriti sulle pagine), e che non si alterino i cosidetti "link canonical" nelle pagine HTML (`<link rel="canonical" ... />`, tag usati dai motori di ricerca per determinare la fonte dei contenuti).

## Domini Alternativi

Queste non sono propriamente copie nel senso che ho finora descritto, ma il sito è disponibile ufficialmente anche da domini e server secondari forniti da me. I contenuti sono esattamente gli stessi del dominio principale, ma può capitare che subiscano ritardi nell'aggiornamento. ...Dovrei listarli su qualche pagina specifica, ma per ora è bene almeno piazzarli da qualche parte, ecco qua:

* Principale, solo HTTPS: <https://sitoctt.octt.eu.org/>
* Secondario, solo HTTP non cifrato: <http://http.sitoctt.octt.eu.org/>
* Secondario, _hidden service_ sulla rete Tor: <http://sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion> (momentaneamente fuori servizio)
