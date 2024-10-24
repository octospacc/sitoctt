+++
Title = "📄 I documenti non devono diventare applicazioni"
Description = "Il Web sta diventando sempre più gonfiato, lento, e rischioso. Ogni sito sta diventando una app, anche se è una cosa sbagliatissima..."
Aliases = [
  "/Posts/2022-06-14-I-Documenti-Non-Devono-Diventare-Applicazioni.html",
  "/Posts/2022-06-14-0000-I-Documenti-Non-Devono-Diventare-Applicazioni.html",
]
Categories = [ "Internet" ]
Date = 2022-06-14
+++

Il Web di oggi è indiscutibilmente molto diverso da quello di 20 anni fa, e cambia sempre di più ogni anno che passa.  
Guardare i lati positivi del progresso è sempre molto facile e rassicurante, e per questo poco spesso si pensa ai lati oscuri che, in tante tante cose, ci sono. Il Web, purtroppo, è una di queste.

## Che sta succedendo?

Il Web dei documenti sta prendendo una brutta piega, diventando piano piano sempre più, a tutti gli effetti, Web delle app.  
Per capire il problema, però, dobbiamo ricordare cos'era il World Wide Web ai suoi inizi. Era una piattaforma Internet per lo scambio di informazioni sotto forma di ipertesti, basta. E gli ipertesti, che sono? Dei documenti. Certo, documenti molto particolari, dove la lettura può avvenire in modo non lineare grazie ai collegamenti ipertestuali, e il Web in particolare si è evoluto per essere un sistema di ipertesti con supporto a testo decorato, elementi multimediali, ed impaginazione avanzatissima.. ma alla base parliamo sempre di documenti.

Nei primissimi giorni del Web c'erano soltanto i cosiddetti siti statici, ossia che restano sempre uguali (a meno di aggiornamenti da parte di chi li amministra), e non c'è nulla che utenti che visitano possano fare per modificarli. In questa categoria rientrano cose come un semplice blog, il sitocto stesso ad esempio, un sito di notizie, il sito dimostrativo di un'azienda o un prodotto, un'enciclopedia.. insomma, cose semplici di questo tipo.

Poco più tardi (giorni o settimane, l'idea era già prevista nella primissima specifica di Web e HTML) si è iniziata ad applicare l'idea di usare server che potessero elaborare informazioni inserite dagli utenti con bottoni e campi di testo, interagire con dei database, e sostanzialmente fornire un'esperienza con contenuti generati dagli utenti. Sono quindi iniziati a nascere i forum in senso più classico, siti per creare siti (!) in modo più semplice (i CMS), i social network a noi più vicini, le webchat e, non dimentichiamo, i motori di ricerca. Questi sono i siti Web dinamici.

In questo periodo, ad ogni modo, non importava che si parlasse di siti statici o dinamici, ai computer di qualunque utente che contattava il sito ritornavano soltanto documenti. Che fosse la pagina HTML in sé, un file CSS per stilizzare la pagina, o dei file multimediali (all'epoca solo foto) messi tra un blocco di testo e l'altro, al browser, il programma che interpreta e visualizza questi documenti, tornavano solo documenti da interpretare, non programmi da eseguire.  
Qui siamo ancora all'esclusiva esistenza del Web dei documenti, per il Web delle applicazioni si dovrà aspettare ancora.

Con queste ultime frasi, chi ci vede lungo ha già capito dove devo andare a parare, ma ci arrivo con calma.
In quest'epoca, sostanzialmente, non poteva succedere nulla di che al tuo computer o alle tue informazioni semplicemente caricando una data pagina Web, perché il browser aveva a che fare solo con file che dicevano come disporre del testo a schermo (HTML e CSS, linguaggi di marcatura), oppure come disporre pixel colorati arbitrari a schermo (immagini).  
L'unica cosa di cui bisognava fidarsi era il browser in sé (e che fosse aggiornato), non dei siti Web individuali.

## Lo stato attuale delle cose

Poi, è arrivato lo scripting. Se ne sono viste di tutti i colori, ma alla fine solo JavaScript è sopravvissuto alla grande fino ad oggi, ed è alla base del pionieristico (e tragico) Web 3.  
Gli script Web altro sono veri e propri programmi, che un browser può eseguire se caricati da una pagina. Qui, però, sorge un evidente problema: bisogna fidarsi di ogni singolo sito Web che integra degli script, problema che è però decisamente complesso da affrontare.

A dire la verità, questo non è l'unico problema: gli script molto spesso rallentano le pagine, specialmente su dispositivi vecchi e meno potenti, e su certa roba molto vecchia non funzionano proprio, rompendo quindi siti che li usano in modo esteso. Nella pratica, ciò significa che i siti che scelgono inutilmente di integrare JavaScript sono, su qualunque hardware, spesso molto più lenti di quelli che non lo usano.  
Di questo, però, discutiamo nel dettaglio un altro giorno.

Innanzitutto, ci sono i siti che caricano codice offuscato, a tutti gli effetti software proprietario.. quelli, solo con molta molta pazienza e abbastanza esperienza si riesce a capire cosa fanno.
In ogni caso, però, il semplice fatto che un programma sia libero non vuol dire che sia per forza esente da problemi di privacy e sicurezza, e questo si è visto, ironia della sorte, in special modo nella comunità JS, dove sviluppatori di popolari librerie sono usciti di capoccia e hanno integrato malware nei loro progetti.
Pochi sviluppatori di software aperto mettono codice dannoso per gli utenti nei loro programmi, ma, quei 2 o 3 su 10000000 che lo fanno, a volte la fanno franca, perché non ci sono altre persone che si prendono la briga di leggere il codice ed agire in modo adeguato.  
Questo qui è un problema che riguarda tutti gli utenti del Web, e se già chi ne ha la capacità non va, per ovvi motivi di tempo e pazienza, a leggere tutto il codice degli script caricati da tutti i siti che visita, immaginate che chi non ne ha proprio la capacità di farlo (la stragrande maggioranza degli utenti) è senza speranze.

Molte persone si pongono problemi - alcuni sensati e altri no, per chi sa un minimo di come funziona un computer moderno - ad installare applicazioni native dal nulla, magari mai sentite prima.. tutti problemi che si ignorano quando si sta semplicemente navigando nel Web, senza sapere delle centinaia di script che vengono eseguiti in una sessione di navigazione variegata.

In che modo uno script, e quindi un sito che lo integra, può essere malevolo?  
I browser ad oggi eseguono gli script dei siti Web in un ambiente abbastanza sandboxato, certo, e per quanto ad oggi, per motivi che non sto a spiegare ora, di falle anche gravi ne esce fuori una nuova ogni mese, se si tiene il browser aggiornato la sicurezza è in teoria a posto.  
La privacy, però.. quella fa davvero una brutta fine.
C'era una demo fatta a mo' di gioco che faceva vedere personalmente perché bisogna avere paura.. peccato che non la trovo più, non ricordo da dove l'ho scoperta, e quindi niente :(. Al momento, per chi vuole approfondire, posso solo linkare [Device Info](https://deviceinfo.me), che mostra tanti dei dati (ma non tutti) che un sito Web può estrapolare dai dispositivi di chi lo visita. Magari date uno sguardo anche a [Cover Your Tracks](https://coveryourtracks.eff.org).

Il problema qui, va specificato, non sta nelle webapp definibili vere e proprie applicazioni, che usano JS per funzionare. Che sia una calcolatrice, un giochino, un programma di videoscrittura, una app di modifica fotografica, si parla sempre di applicazioni, non importa che siano scritte in linguaggio nativo come app native per una specifica piattaforma, o che siano scritte in JavaScript come applicazioni per i browser Web. Tutte queste cose richiedono che sia il client ad eseguire il codice, perché si parla di app molto interattive, e va bene così. Io stessa uso spesso app che girano in una finestra del browser.  
Ci sarebbe poi da discutere a lungo per quanto riguarda il Web come piattaforma di sviluppo di applicazioni, per tanti motivi (anche le falle), positivi e negativi, ma ne parlerò in futuro.

Piccola digressione: un modo per identificare in un attimo se un servizio sul Web è concepibile come documento o per forza solo come app, che io trovo intuitivo, è questo: basta chiedersi (supponendo non ci siano musica o immagini): "il contenuto generale di questo sito avrebbe senso se stampato interamente su carta (anche se non sarebbe più un ipertesto), oppure no?"
Se la risposta è si, allora parliamo di qualcosa che può tranquillamente restare come documento, e bisogna diffidare da chi afferma il contrario.  
Il contenuto di un forum ha senso se stampato su un libro, una rivista, o un semplice foglio volante (oggetti comunemente considerati documenti, anche se fisici)? Certamente, così come quello di un blog, un profilo social, una stanza di chat, oppure della pagina dei risultati di un motore di ricerca.  
Non ha senso, invece, la stampa di un'applicazione calcolatrice o di videoscrittura (al massimo, ha senso solo la stampa dei dati, inseriti in quella app o ottenuti da una sua elaborazione).

## Il disastro dell'appizzazione

Il vero problema sta nel fatto che i siti Web non direttamente interattivi, che prima abbiamo categorizzato in statici e dinamici, stanno sempre più diventando app, ma senza alcun valido motivo.  
Sempre più frequentemente vedo sempre più siti, che dovrebbero essere semplici documenti, non funzionare correttamente senza JavaScript.
Si passa da siti di notizie dove l'articolo non carica, a blog dove i menu di navigazione non funzionano più, forum dove sezioni dei messaggi non si vedono, forum che non caricano proprio, nuovi motori di ricerca che senza JS non funzionano assolutamente (e che si propongono come alternativa privata a Google, peccato che Google funziona bene anche senza eseguire script proprietari e questi cosi no!), e persino siti di social network che mostrano solo una schermata vuota se non si carica il JavaScript.

Questi servizi che ho elencato sono tutti classificabili come documenti e, a parte casi molto particolari, come quei siti che cifrano e decifrano i dati lato client volutamente per far si che il server non possa leggerli (vedi [PrivateBin](https://privatebin.info) per un blocco note, [Element](https://element.io) per una app di messaggistica), possono funzionare tranquillamente senza script e dovrebbero farlo (almeno opzionalmente).

Non mi piace parlare contro il software libero e aperto scritto nel tempo libero da appassionati, che magari non ci guadagnano neanche economicamente, ma una cosa di cui sono rimasta colpita in negativo è che la piaga dell'appizzazione ha colpito anche il Fediverso e le sue piattaforme.  
Per chi è allo scuro di questo nuovo universo virtuale, dico in breve che si tratta di un'idea e, nella pratica, di software, fondati su protocolli comuni, per garantire compatibilità e interoperabilità universale, in modo che chi sta su piattaforma A possa comunicare anche con chi è su X: insomma, il Web e Internet implementati nel modo in cui all'inizio erano e negli ultimi decenni non sono più stati, fondati sulla libertà degli utenti anziché sui monopoli dei giganti.

Mastodon e Friendica, almeno per la visualizzazione dei profili e dei loro post, oppure di discussioni con tutti i messaggi, trattano bene chi ama il Web dei documenti puri e, seppur le loro applicazioni interattive non funzionino senza JS (Mastodon totalmente, Friendica parzialmente) anche se potrebbero, siamo già ad un ottimo compromesso.  
Se una persona non fa parte di una determinata istanza, ma vuole vedere dei contenuti sapendo il link, può farlo senza paura, perché deve solo caricare dei documenti statici nel browser Web di fiducia.

Poi ci sono altre piattaforme, mi vengono in mente Misskey, Pleroma, e Pixelfed. Queste qui, per permetterti di visualizzare qualunque cosa, ti obbligano ad avere JavaScript.  
Magari, ci si può anche fidare degli autori dei software di per sé, ci sono solo i soliti 10 in giro, ma come ci si fa a fidare quando si trova un'istanza mai sentita prima e gestita da chissà chi? Risposta semplice: non si può; anche se in teoria si potrebbe controllare quali sono gli script che l'istanza carica e se sono conformi alla versione originale (o, in caso di fork, se le modifiche effettuate sono davvero quelle documentate), nessuno lo farà, per le ovvie ragioni di cui abbiamo parlato prima.  
Il problema dell'autorità inverificabile del codice, chiaramente, diventa anche peggio per siti Web individuali, non necessariamente basati su alcun software fatto e finito conosciuto, e che non hanno quindi alcuna reale controparte per fare un paragone riguardo lo stato del codice.

Sul Fediverso, dico che la questione mi colpisce particolarmente perché non me lo aspetterei.
Onestamente, da Big Tech, che si regge sullo spiare gli utenti per guadagnare vendendo i loro dati, me lo aspetto un abbandono progressivo del Web dei documenti in favore di quello esclusivamente delle app anche solo per la lettura di qualche paragrafo di testo (cosa che sta avvenendo, ma lentamente), considerando le potenzialità ampissime di soggiogare gli utenti.  
Da chi, invece, sviluppa software per comunità che si preoccupano di alcuni dei nuovi problemi di privacy del Web, e che per questo usano software alternativi meno popolari, non me lo aspetto assolutamente.

## Finirà tutto in tragedia

La situazione, ho paura, può solo peggiorare. Per quanto sono più che sicura che le mie parole e azioni non cambieranno per nulla l'avvenire, visto che credo in quello che dico e, incidentalmente, allo stesso tempo creo anche io contenuti e servizi per il Web, faccio quello che posso per creare le mie cose come vorrei io vederle ovunque.
Quindi, per i siti non interattivi, seguendo la tecnica del [miglioramento progressivo](https://en.wikipedia.org/wiki/Progressive_enhancement), mi assicuro prima che le cose di base funzionino senza scripting, gli script li uso il meno possibile e, se proprio devo, lo faccio per funzioni e caratteristiche opzionali, e mi impegno a tenere il codice (nei miei limiti) compatto e leggibile.

Mi appello personalmente a te che stai leggendo.  
Se crei siti Web, considera di tenere in conto quello che ho detto, ti scongiuro.  
Se, invece, navighi soltanto, magari prova ad iniziare a bloccare JavaScript nel tuo browser (Chromium integra la cosa come permesso per i siti, di cui puoi mettere l'impostazione globale a Bloccato, su Firefox devi installare [NoScript](https://addons.mozilla.org/firefox/addon/noscript)), così da tenere JS disattivato per i siti che non conosci, ed avere la possibilità di attivarlo temporaneamente o permanentemente per i domini che non funzionano oppure che già conosci e di cui ti fidi. Non solo navigherai in modo più sicuro e privato, ma con meno rallentamenti e caricamenti!
