// % Categories = MicroBlog
// % CreatedOn = 2022-09-23

# Nuove frontiere

Da quando qualche giorno fa l'ho scoperto. sto provando quell'epico software che è [TiddlyWiki](https://tiddlywiki.com){[:MdTgtBlank:]}.  
L'ho inizialmente trovato cercando qualcosa per organizzare note in formato ricco, da poter usare per la scuola, e che fosse ovviamente libero.

È un software di wiki, praticamente della stessa categoria di MediaWiki (il software su cui si basa Wikipedia), ma ha caratteristiche molto particolari.  
Innanzitutto, non ha bisogno di un server, è una app che funziona in locale.. ma in che modo assurdo (in positivo)! La app intera con tutti i dati personali è un singolo file HTML che si automodifica, ed è quindi possibile ricopiare e assicurare in un istante un sito intero. Di suo non può salvare i dati, ma bisogna ogni volta scaricare in locale il file HTML modificato, oppure usare dei sistemi di sincronizzazione (io uso Git, supportato in-app).

Se l'ho iniziato ad usare per il solo scopo limitato dello studio scolastico, ma poi in questi giorni sono finita con l'iniziare ad usarlo tanto anche per creare una mia cosiddetta base di conoscenza personale e pubblica, su tutto quello che posso scrivere al volo in un formato di documento non lineare che si adatta benissimo a note piccole e veloci tra loro interconnesse... vuol dire che davvero è interessante.

Un po' mi dispiace dirlo, ma è possibile che una parte del tempo che dedicherei in genere al sitoctt verrà ad esso sottratta, per essere dedicata alla neonata OcttKB - che, a tal proposito, è qui su <https://kb.octt.eu.org>{[:MdTgtBlank:]}.  
Per quanto mi piaccia tutto quello che ho costruito in questi mesi, che infatti continuerà a vivere - sia come posto in cui esprimere il mio stile di design, che come luogo in cui pubblicare contenuti elaborati e mai spezzettati - devo dire che ho trovato uno strumento che riesce ad incanalare bene alcuni miei pensieri, quelli che il sitoctt non può gestire.

Non sto ora a spiegare troppo il lato tecnico dei vantaggi o degli svantaggi di TiddlyWiki, perché parliamo di un software facile da iniziare ad usare, e assolutamente complicatissimo da padroneggiare (mi ci vorrà tempo!).  
Quello che dirò è che: con il suo essere orientato alla disposizione di informazioni in piccoli elementi fondamentali (i _tiddler_), che poi possono essere collegati tra loro per costruire informazioni elaborate - sia con link, che con la trasclusione (quando il contenuto di un elemento appare completamente ricopiato in mezzo ad un altro, cosa che si fa semplicemente scrivendo <span>`{`</span><span>`{`</span><span>`Nome Elemento`</span><span>`}`</span><span>`}`<span>) - si presta davvero bene all'organizzazione del pensiero a tutto tondo in generale.

Come bonus, TiddlyWiki si può usare come un generatore di siti statici più tradizionale: si possono scrivere gli elementi in tanti file, ed usare il programma CLI per compilare tutto nel file monolitico sopra descritto. Il sito ufficiale del progetto usa questa tecnica, ma per un sito personale non è necessaria e anzi, annulla il vantaggio che TiddlyWiki ha, di poter essere usato come una app di note moderna: apri, scrivi, tutto è salvato in cloud in automatico.

Il programma CLI però ha una funzione che trovo utile: il poter generare versioni statiche del sito, che non richiedono JavaScript per la navigazione. È ottima cosa, e credo che chiunque abbia un TiddlyWiki pubblico, se ha gli strumenti, dovrebbe impostare un sistema di build per rendere disponibili automaticamente le pagine statiche sul server.
