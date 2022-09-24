// % Title: ☀️ Rasperino Solare (ed altri esperimenti andati a male)
// % HTMLTitle: <span class="twa twa-sun"><span>☀️</span></span> Rasperino Solare (ed altri esperimenti andati a male)
// % Categories: Blog Rasperino Ecologia Tecnologia
// % CreatedOn: 2022-06-23

# <span class="twa twa-sun"><span>☀️</span></span> Rasperino Solare (ed altri esperimenti andati a male)

Qualche mese fa comprai un piccolo [pannello solare monocristallino](https://www.amazon.it/Lixada-Pannello-Monocristallino-Caricabatterie-Cellulare/dp/B071Z1LGFV){[:MdTgtBlank:]} online, dalle dimensioni simili a quelle di un foglio A4, per la cifra di circa 20€ (su Amazon.it i venditori sono tutti ladri, su Aliexpress sarebbe costato un pochino in meno).

[![Schermata di una foto inviata in chat. La foto mostra il pannello nella sua scatola di cartone. La didascalia recita "❗️ L'ENEL la odia! ⚠️ Scopri come la Dea dello Spacc ha iniziato il lento ma proficuo percorso per l'indipendenza energetica! ➡️ @spacccraft".]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Screenshots/SpaccCraft-975.png)](https://t.me/SpaccCraft/975){[:MdTgtBlank:]}

## Dubbi elettrici

Il pannellino dichiarava, nel titolo dell'inserzione, una potenza di output massima di 7.8W.  
Ha come porta di uscita una USB, chiaramente massimo 5V. Sempre nei dettagli dell'inserzione, ma nelle specifiche tecniche, c'erano indicati 1A a 5V di output.. che sarebbero 5W.  
Considerando che il pannello viene dichiarato a 7.8W, e celle fotovoltaiche da 5V non esistono, ma da 6V si, si suppone che dovrebbe riuscire a dare in output un massimo teorico di 1.3A di corrente.  
La tensione di output però, abbiamo detto, non va sopra i 5V, quindi c'è di mezzo o una conversione (impossibile, considerando che il pannellino in sé è una lastra spessa meno di 1mm, e la parte sporgente con la porta USB sarà appena 15x10x5mm.. non c'è spazio), o un banale troncamento di tensione, dove l'energia in eccesso non si traduce in una maggiore corrente di output, ma solo in poco calore..  
E quindi abbiamo un output teorico massimo di 1.3A a 5V.. ossia 6.5W.

### Consiglio di vita..

Questo preambolo, apparentemente inutile, è per ricordare come delle cinesate a basso costo con zero documentazione (non ha neanche un manuale o delle scritte sul retro questo affare!) ci si possa fidare solo fino a un certo punto, oltre il cui per risolvere i dubbi del caso è necessario affidarsi all'uso di altre cinesate.  
Nel mio caso, un multimetro USB, da mettere tra l'output del pannello e l'input di un dispositivo capace di assorbire abbastanza corrente. Questo oggettino io non lo ho, e mi rendo conto che farei bene a comprarlo (tanto, costa poco), perché al momento non riesco ad avere alcuna certezza sulle prestazioni della magica lastra di silicio.

## Prove sul campo

Complici sia la necessità di testare le piene possibilità del pannellino, che la voglia di mettere a frutto lo stesso per alleggerire dello 0.001% la bolletta elettrica dei miei genitori (e soddisfare una minuscola parte del mio individuale fabbisogno elettrico con energia totalmente pulita), ho quindi iniziato a fare semplici test pratici, sul campo (il balcone di casa mia).

### La primissima prova

A dire il vero, il primissimo test l'ho fatto fuori casa, il giorno subito successivo a quello di avvenuta consegna del prodotto perché, per motivi non correlati, quel giorno ero appunto fuori.
In quell'occasione, l'unica in giro fuori per ora, ho provato soltanto a ricaricare la batteria del mio smartphone (6000mAh).

Ho fatto 3 prove diverse, le prime due di circa 15 minuti nelle poche ore prima di mezzogiorno, quando il cielo era pulito, con il pannello tenuto da me in mano per fargli prendere meglio il sole perpendicolarmente (ideale per un monocristallino).  
Ho prima provato a caricare il telefono da acceso, in stallo e con tutte le radio spente (ma non nello stato di deep sleep di Android), ma purtroppo non c'era verso, il telefono consumava talmente tanta energia da non riuscire a ricaricarsi, riusciva solo a scaricarsi lentamente. Non ricordo benissimo, perché non ho pensato di segnare i dati, ma mi pare che, sulla app che uso per vedere le statistiche di ricarica ([AccA](https://github.com/MatteCarra/AccA){[:MdTgtBlank:]}), venissero segnati solo sui 300mA in ingresso.  
Provando la stessa formula subito dopo, ma con il telefono spento, mi pare che in 15 minuti abbia caricato soltanto il 2% di batteria.. praticamente ci metterebbe 12.5 ore a caricare da 0 a 100% se l'andazzo è questo.

L'ultimo test l'ho fatto verso le 14, quando il cielo si era purtroppo scurito. Ho appoggiato il pannellino su un piano e ho usato il telefono normalmente, ascoltando musica e credo usando app di messaggistica online. Come sospettavo, non si è ricaricato, ma almeno è stato quasi senza scaricarsi, il che è comunque buono considerate le condizioni atmosferiche.

![Schermata di una foto inviata in chat. La foto mostra il pannello appoggiato sul tettuccio di un'auto parcheggiata, con un cavo collegato che scende giù. La didascalia recita "La nostra macchina è parcheggiata e io ci appoggio il pannello solare sopra".]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Screenshots/OctoVoLTE-16754.png)

### Guardiamo oltre..

Vabbe, diciamo che la primissima prova, fuori col telefono, è stata un pochino fallimentare.  
Comunque, senza perdermi d'animo, già nei giorni successivi ho fatto altre prove, tutte dal balcone di casa mia, alcune di cui ora farò una carrellata grezza, perché fatte una volta e con pochi dati sotto mano.

Il pannello sembra riuscire ad accendere il mio NodeMCU anche con pochissima luce, e su questo non avevo dubbi, un microcontrollore assorbe pochissima corrente, parliamo di decine di mA in media.  
Non ho provato alcun carico, ma non che ce ne possano essere di così grossi, il massimo a cui si arriva con il NodeMCU è di 250mA quando si accende il WiFi.

In una giornata con nuvole moleste che vanno e vengono, un mio altro telefono (con batteria da 3100mAh) riesce a caricare, ma a fatica, soprattutto perché quando il telefono entra in carica o ne esce (e succede con queste condizioni di luce), lo schermo si riaccende e spreca energia.  
Da spento, è anche peggio, perché lo schermo si riaccende sempre a luminosità massima e per più tempo. Quest'ultimo dettaglio l'ho trovato buffo.. praticamente, a caricare il telefono da spento in questo modo, si fa peggio che a caricarlo da acceso.

In una giornata più o meno OK, ma che resta una modesta giornata di fine inverno - inizio primavera, riuscivo, anche in questo caso non a caricare ma a far scaricare un po' più lentamente, la mia console Nintendo Switch di prima generazione (quella con il SoC meno efficiente), con Ubuntu acceso e del software a lavoro.

Qualcosa su cui c'è poco da dire, ma che si tratta senza dubbio di una vittoria, è che almeno riesco a caricare i miei powerbank.  
Ne ho provati 3 dei miei 4, chiaramente quelli a capacità minore si caricano prima, ma comunque tutti senza rogne si riempiono bene. Uno che non so di quanto sia, la memoria mi direbbe 4000mAh, si ricarica completamente in poco più di una giornata di sole. Uno da 5000mAh, in forse una giornata e mezza.  
Caricando queste piccole batterie si riesce poi tranquillamente a caricare o alimentare dispositivi che non hanno abbastanza corrente se collegati direttamente al pannello, come i miei smartphone o.. un Rasperino.

### Rasperino Solare?

Finalmente siamo alla fine di tutto questo ambaradan, con i miei test su un Raspberry Pi 3B.  
L'idea mi è saltata in mente dopo che ho purtroppo lasciato il magico prodotto in disuso per un po', non sapendo cosa farci di utile. Voglio dire, l'ho comprato perché è sicuramente utile avere un cosino così in casi di emergenza, ma se nel frattempo riesco a metterlo a frutto è anche meglio.

Ho ben pensato, come prima cosa, di configurare BOINC su Raspbian, un software di calcolo distribuito che si può usare per contribuire a progetti di ricerca scientifica, guadagnando nel frattempo pochi centesimi al mese (rip) in una specie di criptovaluta, il [Gridcoin](https://gridcoin.us){[:MdTgtBlank:]}.  
Come ho già detto, il Raspino va alimentato dal powerbank, il pannello direttamente non gli da abbastanza corrente. Sembra che si accenda, ma in realtà pare vada in bootloop.  
Bene, non ci girerò attorno troppo: mentre (con lo stesso powerbank, quello di credo 4000mAh) per alcune applicazioni a basso carico, come [Pwnagotchi](https://pwnagotchi.ai/){[:MdTgtBlank:]}, il Pi riesce a stare acceso per ore anche con uno schermo LCD retroilluminato collegato... la CPU al 100%, che svolge calcoli complessi, mangia tanta di quella corrente che la batteria si appiattisce in appena 1 ora.

[![Schermata di un mio toot. La foto mostra il pannello appeso sul mio balcone con dei ganci, con un cavo che lo collega al Rasperino fissato al pannello stesso. Il testo recita "#RasperinoVitaEcologica Ho fissato il Pi al mio pannellino solare con gli elastici di stoffa delle mascherine usa e getta (prima di buttarle, stacco gli elastici, li lavo, e li conservo), e pare avere appena la corrente che gli serve per funzionare al pomeriggio. Oggi ho flashato la nuova SD con Raspbian, per ora scelgo di usare l'accrocco per eseguire #BOINC, strumento per il calcolo distribuito con cui si può donare potenza di calcolo a progetti scientifici. Domani si testa come va su BOINC".]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Screenshots/mastodon.uno-octo-108211397314015161.png)](https://mastodon.uno/@octo/108211397314015161){[:MdTgtBlank:]}

_Psssss.. se vuoi vedere altre foto del pannello (3) e in qualità un po' più decente, le ho messe su Pixelfed: [pixelfed.uno/p/octo/426839557817260168](https://pixelfed.uno/p/octo/426839557817260168){[:MdTgtBlank:]}!_

## La realtà dei fatti

A parte questa cosa, che anche se non mi fa guadagnare nel pratico sarebbe utile in quanto benefica per la ricerca scientifica, non avrei in mente utilizzi pratici per il Rasperino Pi 3 Solare. Magari un Pi Zero andrebbe meglio: apparentemente, altra gente in preda alla pazzia (ma meglio attrezzata), ha pensato di usare quello per minare Bitcoin, con un pannellino simile al mio ([YouTube/CbpfNU7oaws](https://invidious.snopyta.org/watch?v=CbpfNU7oaws){[:MdTgtBlank:]}).  
Per ora, il pannellino lo uso sporadicamente per caricare i miei powerbank, che scarico quando capita di usarli in giro per ricaricare il mio smartphone.

Se c'è qualcosa che ho imparato da questa storia, è che dovrei comprare il maledetto multimetro USB.  
Avrei dovuto quasi 4 mesi fa, invece procrastino per non spendere dindini.
