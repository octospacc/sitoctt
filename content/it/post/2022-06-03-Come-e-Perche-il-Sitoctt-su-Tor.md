+++
Title = "🌐️ Come e perché il sitoctt su Tor?"
Description = "In poco tempo dall'apertura del sitoctt, ne ho creato un mirror Tor. Perché? Maggiore sicurezza, privacy per chi visita, e divertimento mio!"
URLs = "Posts/2022-06-03-0000-Come-e-Perche-il-Sitoctt-su-Tor.html"
Categories = [ "Blog", "Internet", "Sysadmin" ]
Date = 2022-06-03
Lastmod = 2022-06-29
+++

In questi giorni ho sistemato i primi affari riguardanti il rendere disponibile il sitocto sulla rete <span style='Color:#59316b;'>Tor</span>. C'è chi mi definirà esagerata anche soltanto per aver avuto il pensiero di fare una cosa del genere, ma c'è poco da fare.  
Se nulla è andato storto, il servizio Onion è ancora raggiungibile a questo indirizzo:
<small>~~[onmfrk2acl4xdeawfjg3nfepq7gcufolctmhiwwxpcknazus5bxzxhqd.onion](http://onmfrk2acl4xdeawfjg3nfepq7gcufolctmhiwwxpcknazus5bxzxhqd.onion){: style='Color:#a060c0;' }~~</small>
[sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion](http://sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion)[^ Nuovo dominio estetico].

L'idea - apparentemente riuscita - è stata quella di utilizzare un servizio PaaS gratuito, Replit, per fare il tutto.  
In questo modo, non appesantisco ulteriormente il mio improprio server. Ormai da mesi, precisamente da inizio-metà di febbraio 2022, uso una console Switch come server per troppe cose: oltre lo storico server SpaccCraft, ho una mia istanza Matrix, qualche bot Telegram che forse è la roba che meno richiede risorse, e software minori assortiti. Si, Nintendo Switch su cui ho avviato Ubuntu..  
Non vado nei dettagli, meglio farlo in un articolo a parte, ma in breve il motivo è che gli SBC come i Raspini, ad oggi, per via degli eventi mondiali correnti, hanno dei costi paurosi, e Switch era l'unico computer a basso consumo con abbastanza RAM (4GB) che avevo già in casa. Bisogna adattarsi.

Questo qui è anche il primissimo post che scrivo sul blog del postocto, chissà come va e soprattutto chissà quando spunterà fuori, perché dovrei sistemare un attimo il mio generatore di siti statici per poter gestire le pagine come questa che, anziché comuni pagine, dovrebbero essere trattate come sottopagine della pagina "Blog" (autogenerata).

## Come?

Torniamo al discorso del postoctt: con Replit, prendendo come base un Repl trovato in giro che dimostrava come ospitare un altro tipo di servizio su Tor, ho costruito il mio Repl che: ad ogni nuovo avvio, scarica in locale tutto ciò che serve a compilare e distribuire il mio sito statico (dalle mie repo Git), prepara tutto, ed avvia un server HTTP e il demone Tor, che fa da proxy esponendo il server HTTP sull'esterno tramite la rete Tor. Poi all'infinito, tutto tramite Git, scarica eventuali aggiornamenti a qualsiasi delle parti e, quando necessario, rigenera il sito.  
Lascio qui il link ad uno snippet GitLab con i miei file, per chiunque voglia fare il mio stesso servizio per un proprio sito web, magari costruito proprio con il mio generatore di siti statici di infima qualità (a livello di codice, se mi facesse schifo a livello concettuale o pratico non lo starei ancora a sviluppare pian piano): [gitlab.com/-/snippets/2338457](https://gitlab.com/-/snippets/2338457){[:MdTgtBlank:]}.

Con servizi PaaS gratuiti come Replit, comunque, c'è un problemino: ci sono limiti sui tempi di esecuzione dei software. Nel caso di questa piattaforma, il tutto va in sospensione se l'indirizzo web del progetto non riceve ping per non ho capito bene quanti minuti. In caso ne riceva dopo, si risveglia dopo il tempo necessario a rifare le operazioni di avvio.  
Peccato però che, a parte che significherebbe far aspettare 30 secondi minimo chi vuole visitare il mio sito per lo stabilimento del primo collegamento, è l'indirizzo HTTPS sul dominio di Replit che va contattato, per ovvi motivi non l'indirizzo Tor. E far collegare la gente tramite l'indirizzo HTTPS nullifica gli scopi dell'avere un sito Tor (a cui arrivo a breve, lo giuro).

La soluzione sarebbe usare, su un computer sempre acceso in casa, uno script o un cronjob (piuttosto, un timer systemd, visto che proprio per colpa di systemd i cronjob classici ad oggi sono rotti spaccati malfunzionanti) per pingare in continuazione l'indirizzo del mio sito su Replit. Io potrei farlo, ma vorrei trovare un modo confinato agli stessi servizi PaaS gratuiti per risolvere il problema, in quanto una cosa del genere significherebbe che anche chi non ha un server in casa può fare quello che ho fatto io.  
Inizialmente ho provato con UptimeRobot, ma pare dia delle rogne, ho settato il tutto la sera, e la mattina dopo il mio sito era offline.  
Cercando in giro ho trovato poi diversi siti (definiti "pinger") che invitano ad inserire l'indirizzo del proprio progetto Replit per farlo pingare in continuazione così da farlo rimanere attivo. Ne ho usati tipo 3 a caso, che non ricordo nemmeno, e da allora il sitoctt sembra non spegnersi più.  
O, forse, il merito è stato del mio aver creato un secondo progetto Replit, che ha come unico scopo il pingare il mio primo all'infinito (mentre il principale pinga sempre il secondo). Non lo so, perché il secondo sembra spegnersi sempre, non so se è perché non ha nessun server HTTP esposto, devo indagare..

## Perché?

Facciamo subito uscire l'elefante dalla stanza (che già è piccola): il voler mettere in piedi un sito che contiene materiale immorale a livelli gravi (che differenzio dal materiale illegale di per sé), che se ospitato sul web tradizionale sarebbe molto facile da tracciare indietro ai proprietari con tutte le conseguenze del caso, non è l'unico motivo sensato per voler usare Tor (o qualsiasi altra rete fondata sugli stessi principi tecnici, ma Tor è nel bene e nel male la più famosa e usata).  
Questo sito è anche sul clear web senza problemi, per dire, non ha problemi a stare lì.

Tor garantisce un forte anonimato rispetto all'Internet non filtrato. Il perché dovrebbe interessare a chi non traffica contenuti illeciti, è presto spiegato non con una risposta, ma con una domanda: volete per caso far conoscere quello che fate (incluso il visitare un sito web in particolare, come il mio blog) a corporazioni multimiliardarie che in cambio non vi daranno nulla, anzi non si fanno scrupoli a fare tutto il possibile anche a vostro discapito (tracciamento) per trarne in un modo o nell'altro profitto?  
A quale pro volete far sapere al vostro ISP i particolari servizi Internet che contattate? Oppure farvi identificare da chi ospita quei servizi Internet (me e il mio ISP se si tratta di qualcosa ospitato in casa mia, altrimenti il provider particolare per server forniti da aziende, come Replit stesso oppure GitLab.com su cui ospito il sitocto nel clear web), se dalla cosa non ci guadagnerete nulla?  
A molte persone, per qualche motivo, questo ragionamento non quadra, ma a poche importa e, nonostante io non arrivi ad alcuni estremi, capisco i punti di vista delle poche persone che vogliono mantenere il più possibile l'anonimato anche quando fanno cose morali e legali online. Di conseguenza, condivido e incoraggio l'uso di Tor per accedere ai servizi e i contenuti da me forniti.

Ancora non vi convinco? E allora sentite questa. Tor permette, ad esempio, a giornalisti che vivono in regimi di censura totali o parziali di fare informazione sul vero, che sia in modo diretto o meno. Oppure, permette a chi vive in questi regimi di informarsi in maniera libera e non influenzata dalla propaganda del governo, e di comunicare con altre persone in altre parti del mondo.  
Il principio reale per cui è più facile nascondere chi si è e cosa si fa a livello individuale in mezzo ad una enorme folla, piuttosto che quando si è con poche altre persone, si applica anche per le reti distribuite: più gente le usa, anche per semplice navigazione web, più gli individuali utenti sono al sicuro. Quindi, usando Tor per girare sul web, anche se non vi interessa l'anonimità, aiuterete chi ne ha bisogno.  
Almeno, aiutate gli utenti che non fanno niente di male: i criminaletti che vendono droga e armi, oppure smerciano foto e video ritraenti stupri o torture, spesso si montano la testa, ed arrivano a trascurare l'opsec a tal punto che prima o poi finiscono (e direi che godo di ciò) più che maluccio.

Un dubbio che può sorgere ai non super-addetti ai lavori, però, è il perché serva fornire il sito anche come servizio Onion, visto che qualsiasi contenuto sul normale Internet è accessibile comunque dietro Tor, che in quel caso funzionerà più come un tradizionale proxy. I problemi qui però sono più subdoli, e hanno a che fare con la natura dell'infrastruttura classica di Internet.

Non penso di dover spiegare i problemi derivanti dal passare dati in forma non cifrata via Internet: le informazioni possono essere non solo trafugate (che per un blog pubblico non è un grosso problema), ma persino modificate e presentate come se nulla fosse cambiato, con facilità disarmante, da una qualsiasi delle parti intermedie del collegamento, ad esempio l'ISP del client o del server.  
HTTPS per i siti web risolve questo problema.. Male. Non se ne parla tanto, ma tutto il corretto funzionamento di questi sistemi di protezione dipende da una complessa infrastruttura metafisica globale, che ha più falle di quanto si pensi.  
Cercando su Whoogle, ho trovato questo PDF, che più o meno da un rapido sguardo ai problemi di cui HTTPS è affetto: [Weakest_Link_in_the_Chain.pdf](https://www.accessnow.org/cms/assets/uploads/archive/docs/Weakest_Link_in_the_Chain.pdf){[:MdTgtBlank:]}.  
Ciò che c'è da dire di importante in sostanza è che, tutto il sistema attuale, basato sulle CA, consiste nella fiducia verso un'autorità a monte. Senza andare nei dettagli, per cui rimando al PDF, il sistema è fragile e può essere rotto, potendo risultare, in rari speciali casi, negli stessi problemi di connessioni non cifrate; anzi, forse anche peggio, perché la presenza di HTTPS può indurre a fidarsi sempre e comunque: i browser web moderni ci hanno condizionato a farci domande solo quando vediamo il lucchetto aperto o un triangolo di avvertimento, non quando vediamo il lucchetto verde luccicante chiuso.

Quando si usa Tor per collegarsi a siti su Tor, la connessione non solo viene smistata tra ancora più nodi della rete, ma i dati vengono cifrati con un sistema di chiave pubblica e privata tra il client e il server del servizio Onion: l'unico punto debole della catena è il server stesso, che conserva la chiave privata, non ci sono altre autorità di cui fidarsi.  
Il sistema ha dei problemi, non lo negherò assolutamente, partendo dal fatto che se la chiave privata viene rubata, i ladri possono impersonare il sito e a quel punto l'unica cosa da fare per chi lo gestisce è cambiare chiave, cambiando così anche dominio, non si può andare dalla CA per revocare il certificato. È così che funziona un sistema basato al 100% sulla matematica e 0% sulla fiducia.  
A dire il vero, io starei quindi sbagliando ad usare una macchina altrui per ospitare il sito Tor... Greve. Vabbe.

## In conclusione

Tor non è assolutamente perfetto: ha delle falle di vario tipo, in genere basate sulla deanonimizzazione degli utenti perché è quello che interessa alle agenzie a 3 lettere, ma parliarmoci chiaramente: è un passo avanti per avere più protezione, e sicuramente è un enorme passo in avanti verso la sicurezza dei dati, in una maniera che fa si che la comunicazione tra client e server sia sicura soltanto quanto server e client, senza preoccuparsi delle minuzie introdotte da alcuna terza parte.

Il fatto che Tor sia economicamente supportato almeno in parte dal governo statunitense comunque, senza scendere troppo nei dettagli, comporta forse alcune implicazioni profonde pericolose. Per questo voglio, più o meno a breve, dare una chance a servizi simili a Tor ma diversi da esso. Lokinet mi ispira, a dire la verità, penso sarà la prima rete alternativa che proverò.

## [:HNotesRefsHTML:]

[^ Nuovo dominio estetico]: **Aggiornamento del 2022-06-29**: ho cambiato il dominio per motivi estetici con questo nuovo! Info aggiuntive (ma pur sempre scarne) al [post del PicoBlog di oggi](../PicoBlog.html#-2022-06-29-Minare-domini-Tor).
