// % Title: 👾 L'emulazione NDS, Google Play, e una storia oscura
// % HTMLTitle: <span class="twa twa-alien-monster"><span>👾</span></span> L'emulazione NDS, Google Play, e una storia oscura
// % URLs = Posts/2022-07-27-0000-Emulazione-NDS-Google-Play-e-una-Storia-Oscura.html
// % Image: [staticoso:Folder:Assets:AbsoluteRoot]/Media/Emulazione-NDS-Android/ACWW-on-Androids.avif
// % CreatedOn: 2022-07-27
// % EditedOn: 2022-07-29
// % Categories: Blog Tecnologia Gaming Mobile

# <span class="twa twa-alien-monster"><span>👾</span></span> L'emulazione NDS, Google Play, e una storia oscura

Il Nintendo DS. Basta, non serve dire altro; in fondo, tra _nintenditori_, ci si intende.  
Una console che, 15 anni fa, ha saputo innovare il mercato con lo stesso spirito con cui il Gameboy innovò a suo tempo. Una console le cui esclusive rimangono, ancora oggi, delle perle senza tempo.

Per quanto mi piacerebbe stare a tessere interminabili lodi al DS, però, oggi sono qui a parlarvi di altro.  
Oggi vi parlo di emulazione, e di un'area specifica della scena dell'**emulazione NDS: quella Android**.

## L'emulazione in generale

Tante console, nei loro anni di vita e anche dopo, vengono [reversate](https://it.wikipedia.org/wiki/Reverse_engineering){[:MdTgtBlank:]} da gente appassionata e capace che ha l'interesse di capire come queste funzionino, per poi magari creare degli emulatori, ossia dei software che replicano il funzionamento della console su una macchina completamente diversa.  
Il Nintendo DS, ovviamente, non fa eccezione.

In genere, lo sviluppo di emulatori avviene per una di 2 filosofie:

- Creare qualcosa di veloce, che funzioni, e permetta subito a più gente possibile di usare l'emulatore come alternativa pratica alla console originale;  
- Creare qualcosa di accurato e più tecnicamente vicino possibile alla console originale, per poter preservare la stessa in una forma metafisica per il futuro, mettendo in secondo piano la velocità, che si potrà avere solo eseguendo l'emulatore su una macchina abbastanza potente, fosse anche futura.

### Emulazione "qui ed ora"

Per quanto la seconda filosofia sia senza dubbio la più nobile, anche quella del "qui ed ora" è molto importante: permette di giocare a chi non può permettersi la console originale o l'ha ridotta a [spacc](https://wikispacc.miraheze.org/wiki/Spacc){[:MdTgtBlank:]}, rende le cose facili a chi vuole sviluppare i suoi giochi, e migliora la vita dei giocatori che, con un emulatore, possono godere di tante comodità mai viste.

Io, al momento, faccio parte delle persone che giocano su emulatore nonostante posseggano la console originale.  
Ho un Nintendo 3DS XL, che è si retrocompatibile con i giochi DS, ma male, al punto che per me è peggio che giocare su telefono: i giochi ci mettono un sacco a partire, a schermo vengono scalati male, ed è un ulteriore dispositivo (più grande e pesante del mio smartphone) da portare in giro.

## Lo stato dell'emulazione NDS

L'emulazione DS su PC tradizionali è al momento in un'ottimo stato.  
Il miglior emulatore lì ad oggi è indubbiamente [melonDS](https://melonds.kuribo64.net){[:MdTgtBlank:]}: libero, supporta il gioco online, è sufficientemente veloce, ed è accurato. Non gira proprio bene su PC di magari 10 anni fa ma, in tale situazione, se ci si accontenta di giocare offline, si può sempre contare sull'ottimo [DeSmuME](https://desmume.org){[:MdTgtBlank:]} (che è apparentemente tornato in sviluppo da qualche mese?!).

Il semplice fatto che io stia scrivendo questo articolo, però, dovrebbe far sentire puzza di problemi; problemi che, infatti, ci sono.  
Mentre su PC possiamo dire di essere a posto, **su mobile la situazione non è affatto rosea**.  
Un po' in generale su dispositivi embedded di gamma bassa (non solo gli smartphone, anche i single-board computer), i due emulatori che ho appena menzionato non funzionano proprio benissimo.

### La mia esperienza su mobile

Sul mio fonino attuale, con sistema operativo Android 10 (variante stock del produttore Xiaomi, MIUI 12) e SoC [Snapdragon 662](https://en.wikichip.org/wiki/qualcomm/snapdragon_600/662){[:MdTgtBlank:]}, né melonDS né DeSmuME fanno girare i giochi in maniera soddisfacente.  
Di entrambi gli emulatori ho provato sia i rispettivi porting Android nativi non ufficiali, e sia i core [Libretro](https://www.libretro.com){[:MdTgtBlank:]} disponibili (già presenti o scaricabili nell'ultima versione delle rispettive applicazioni di seguito) per i frontend [RetroArch](https://www.retroarch.com){[:MdTgtBlank:]} e [Lemuroid](https://github.com/Swordfish90/Lemuroid){[:MdTgtBlank:]}.

Allora, prima di continuare devo forse fare una precisazione.  
Le prove che ho fatto in questi giorni le ho fatte con un solo gioco, ossia _Animal Crossing Wild World_, per un motivo semplicissimo: in questo momento mi interessa di giocare questo sul mio smartphone, e basta. Per cui, l'unica cosa che mi interessa, è che questo gioco giri perfettamente.  
Già con questo, sento le persone che urlano alla poca scientificità delle mie prove, effettivamente limitate in scopo; che si accontentino, dico io, **questo è un blog personale, non un laboratorio di ricerca** 🥱️.  
Ad ogni modo, tutti questi emulatori li ho provati in passato diverse volte anche con altri giochi, e i miei giudizi di oggi sono più o meno allineati con i miei passati - ma ora entro nei dettagli.

### Test variegati

Tenendo in mente che questi test sono stati fatti guardando semplicemente le prestazioni della schermata del titolo di _Animal Crossing Wild World_ (che richiede circa le stesse prestazioni richieste dal gioco avviato nell'overworld):

• APK compilato il 13 novembre 2021 del porting non ufficiale di [melonDS per Android](https://github.com/rafaelvcaetano/melonDS-android){[:MdTgtBlank:]}:
:	Gira praticamente come girava la versione precedente circa un annetto fa, luglio 2021, periodo in cui presi il nuovo telefono;

<meta>

• Core Libretro di melonDS, un po' più aggiornato:
:	Gira leggermente meglio del porting nativo, ma non proprio alla perfezione;

<meta>

• APK compilato il 27 agosto 2017 del fork morto di [nds4droid di tangalbert919](https://github.com/tangalbert919/nds4droid){[:MdTgtBlank:]}, il cui progetto a monte (altrettanto morto) è un porting Android non ufficiale di DeSmuME:
:	Forse con frameskip a 3 gira un po' meglio dell'APK, ma un po' peggio del core Libretro, di melonDS;

<meta>

• Core Libretro di DeSmuME:
:	Praticamente gira come l'ultima versione del branch originale di nds4droid (2016) (si, ho testato anche quell'APK giusto per, ma non lo dico a parte perché non è rilevante); Peggio di tutto quello visto sopra.

Come bonus, menziono anche questo altro emulatore che, cercando robe, ho scoperto per caso: [NooDS](https://github.com/Hydr8gon/NooDS){[:MdTgtBlank:]}. Si fissa come obbiettivo quello di essere un emulatore veloce, ma al momento, da come ho potuto constatare e da cosa il README dice, ancora non ci siamo.  
Mi gira più o meno come l'APK di melonDS che fino ad ora ho menzionato. Spero che lo sviluppo continui e vada a buon fine, comunque, il progetto promette.

Quindi, è la fine della storia? Mi devo accontentare di emulare il gioco rallentato di almeno un buon 7-10% su melonDS? Beh, in realtà, no.. _forse_.

## Una sola soluzione

Nella scena dell'emulazione NDS per Android, tutti gli emulatori di cui ho parlato fino ad ora sono in realtà i meno famosi (anche se, ultimamente, melonDS sta guadagnando terreno). Ne esiste uno molto più conosciuto, che chi almeno una volta ha provato ad emulare il DS su Android conoscerà almeno di nome.  
Insomma, parliamo un po' di [Drastic](https://play.google.com/store/apps/details?id=com.dsemu.drastic){[:MdTgtBlank:]}.

Drastic è l'emulatore del Nintendo DS più veloce esistente per Android. Non è affatto accurato, ma fa girare tutti i giochi senza grossi glitch, e già su smartphone bassi di gamma di 5 anni fa riesce a far girare a **velocità piena** praticamente qualunque gioco 2D e 3D;  
Su dispositivi ancora più vecchi magari è un po' incerto, ma resta un vero miracolo. Ad esempio, guardate i video alla voce "_[2019-09-17 15:16] Test più disparati con il Galaxy Player_" sulla mia pagina [Archivi MicroBlog di Settembre 2019](./MicroBlog-Archive/2019/09/index.html). Assolutamente assurdo il fatto che quel dispositivo, che comprai a soli 90 euro 9 anni fa, riesca già solo in primo luogo ad emulare il DS; figuriamoci far girare in maniera ottima un gioco come Super Mario 64 DS.

Dove sta l'inghippo? Eh eh, da dove iniziamo?

### Casini in vista

Innanzitutto, Drastic è **software proprietario**; già soltanto questo, per me, è male.  
Anche se, purtroppo, non ci riesco al 100%, vorrei usare quanto più software libero sia per me possibile. Visto che questo emulatore è l'unico ad essere una scheggia, una vera alternativa non ci sarebbe.  
Mi tengo l'emulatore proprietario e pazienza, non è la fine del mondo, considerando anche che i giochi che voglio emulare sono loro stessi proprietari, e che anche la console originale (nel mio caso, con il 3DS, ancora peggio, perché ha un intero OS anziché solo un BIOS) è proprietaria.

Il vero grave ostacolo qui sta nel fatto che Drastic integra un **DRM**, ossia un sistema di Gestione delle Restrizioni Digitali.  
In teoria, ciò vorrebbe dire: se paghi il programma, non lo puoi usare, a meno di trovare o creare una crack.  
Almeno, l'idea teorica del DRM in generale sarebbe questa. Nella pratica però, e le [FAQ di Defective by Design](https://www.defectivebydesign.org/faq){[:MdTgtBlank:]} (una campagna anti-DRM) lo spiegano sicuramente meglio di me, **il DRM fa** più **male** ai consumatori di quanto bene faccia ai produttori.

In questo caso specifico, il DRM di Drastic in cosa è problematico, oltre al fatto che di design neghi l'accesso ad un programma utile a chi non può spendere 4,49 €?  
È problematico perché si basa sull'acquisto dal Google Play; ciò significa che chi non ha Google Play Services e Google Play Store sul proprio dispositivo - come me che, per motivi di privacy e prestazioni, li rimuovo sempre dai miei da anni - anche se magari fa l'acquisto dal sito di Google Play e installa l'applicazione accedendo con l'account Google su [Aurora Store](https://f-droid.org/packages/com.aurora.store){[:MdTgtBlank:]}, non potrà usare la app acquistata, perché questa non avrà modo di verificare l'acquisto sul dispositivo.

### La tradizione appikapposa

Insomma, in ogni caso, l'unica soluzione possibile per usare effettivamente il programmino resta avere una patch.  
In passato, sia ai tempi in cui Drastic non potevo permettermelo, sia da quando posso ma non ho più Google Play, la ricerca dell'APK patchato sul Web - fatta ogni volta che aggiornavo Android o cambiavo dispositivo - era in sé il gioco noioso che precedeva il gioco più carino (quello emulato nell'app funzionante).  
Spesso serviva cercare un nuovo APK, sia perché il DRM di Drastic è sempre stato minchione e spesso le crack smettevano di funzionare, sia perché la parte interattiva dell'applicazione era ed è scritta con i piedi: usa API di sistema in modi strani, che Google con ogni nuova versione di Android rompe, e quindi rompe la app.

Una versione di Drastic che usavo sul mio vecchio cellulare con Android 7, infatti, sul mio attuale non funziona: il selettore di file, banalmente, non vede file e cartelle nella memoria di archiviazione. Nemmeno un vecchio trucchetto, quello di usare un gestore di file esterno per aprire una ROM nella app di emulazione, funziona più su Android 10: la app crasha.  
Quindi, mi trovo a dover cercare la versione più aggiornata crackata.  
Ho cercato, l'altro giorno, e apparentemente ho scaricato una cosa funzionante. Peccato che - e questo è il DRM merdone di cui parlavo, stando anche a cosa riporta gente che, sul forum ufficiale di Drastic, chiede supporto pur avendo piratato il programma (ci vuole coraggio oh, una medaglia a questi impavidi eroi) - dopo che si avvia un gioco appena una o due volte, tutte le successive la app ti si chiude in faccia (esatto, non crasha, si chiude, perché non esce il messaggio di errore di Android).

A questo punto, la situazione appare davvero brutta. Che fare?

## Cosa nasconde Google Play?

Mi ricordo che sullo stesso Play Store - e sulle implicazioni di questo ci torno alla fine - si può trovare un'applicazione gratuita, [Free DS Emulator - For Android](https://play.google.com/store/apps/details?id=com.cpu.free.dsemulatorv6){[:MdTgtBlank:]}. L'avevo provata in passato e, sorprendentemente, faceva girare i giochi come Drastic.  
Come è possibile? Allora esiste un altro emulatore veloce per Android? Assolutamente no, perché questa app **è Drastic**.  
Certo, è Drastic che ha subito qualche sostanziale modifica, tra cui, oltre alla rimozione del DRM: un rebranding totale, la ristrutturazione dei menu, l'aggiunta di pubblicità invasive, la riscrittura del selettore di file (che adesso almeno funziona, ma è grezzissimo), e, per qualche assurdo motivo, la rimozione di alcune impostazioni di emulazione; ma resta tecnicamente Drastic.  
Parliamo quindi di una vera e propria **copia non autorizzata** del famoso emulatore, **creata con il solo fine di lucrare sul lavoro altrui** grazie alle pubblicità (che, diamo a Cesare quel che è di Cesare, nell'app originale di Drastic almeno non ci sono) - pubblicità che io, comunque, non vedrei, perché ho [Adaway](https://adaway.org){[:MdTgtBlank:]} installato e blocco sempre l'accesso Internet alle applicazioni proprietarie.  
L'unica cosa di cui sono stupita, e non poco, è di aver trovato questa **app clandestina sullo store di Google**.

Comunque, bell'impegno che ci hanno messo i creatori dell'app nel rimuovere ogni riferimento a Drastic. Ci sono _quasi_ riusciti.  
Nel programma non compare mai il famigerato nome, ma una decompilazione del file APK tramite [apktool](https://ibotpeaches.github.io/Apktool){[:MdTgtBlank:]}, e poi ricerca in tutti i file estratti (con `grep -iR Drastic *`) della stringa "Drastic", mostra che il nome della app da cui quella sospetta ha rubato il codice è presente 2 volte in totale, in 2 file diversi. Giusto così, ecco la conferma, nel caso ci fossero dubbi sulla natura di questa applicazione.

![Schermata del comando grep sopracitato.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Emulazione-NDS-Android/Free-DS-Emulator-Grep-Drastic.avif)

### Nuove ricerche

Che dire? Questa app funziona, ed è comunque un'ottima soluzione, pur essendo leggermente peggio del Drastic originale.  
Solo che, ad un certo punto, penso: ma è possibile che questo sia l'unico fork _illegittimo_ di Drastic che si trova sul Play Store?  
Di conseguenza, apro Aurora Store e mi metto a cercare, sperando di trovare di meglio. A parte i vari rebrand di nds4droid - anche questi esistenti solo per permettere a chi li ha messi online di lucrare con le pubblicità, visto che la app ufficiale è già sul Play Store, gratis e senza schifezze - qualche altro elemento della lista attira la mia attenzione.

Scarico 2 app in particolare, molto simili ma con nomi e colori diversi.  
Gli screenshot presenti nelle pagine delle applicazioni puzzano di truffa da lontano un miglio, sembrano di quelle app che trovi su Aptoide o altri store alternativi cercando proprio programmi crackati. Quelle app che: se va bene, non fanno nulla oltre a mostrare decine di pubblicità all'apertura; se va male, sono malware, senza mezzi termini.

Tutte e due, quando le apro, mi presentano un bottone "Play" che, quando premuto, fa partire l'installazione di un APK (credo patchato) di Drastic (!!!).  
Avete capito bene: questa **app**, **proveniente dal Play Store**, **contiene** nel suo pacchetto **un file** APK (non lo scarica nemmeno da Internet!), **crackato**, di un'altra app. Una delle due, tra l'altro, integra anche la ROM pirata di un gioco DS che non ho mai sentito prima: _Zoo Quest Puzzle Fun_. Che gentili, che bel regalo, non solo l'emulatore gratis ma anche il gioco gratis. Sembra di essere su app store strani, e invece siamo su Google Play.

![Schermata delle pagine Google Play delle 2 app, affiancate, e schermata della lista dei file in violazione del copyright in uno dei due APK.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Emulazione-NDS-Android/Adware-Emulator-Installers.avif)

Per gli scettici, non solo vi rimando a <a href="https://mastodon.uno/@octo/108709092014240395" target="_blank" rel="noopener">questo video</a> che ho registrato qualche giorno fa, ma vi invito a scaricare le applicazioni in questione (e, magari, _bloccate l'accesso di rete o disattivate la connessione Internet_ prima di avviarle) e toccare con mano il tutto: [Green Emu NDS](https://play.google.com/store/apps/details?id=com.nud.ndsemu){[:MdTgtBlank:]}, [The FrieNDS Emu](https://play.google.com/store/apps/details?id=com.blackversion.citra_platinum){[:MdTgtBlank:]}.  
Ad ogni modo, non è stata una scoperta utile: i regalini dati da queste app hanno gli stessi problemi degli APK di Drastic che si trovano sul Web.

### Finalmente..

Nel mio giro sullo store, finalmente, vedo ancora un'altra app che mi puzza di Drastic ribrandizzato, non so perché, forse per la disposizione dei tasti negli screenshot: [vDS](https://play.google.com/store/apps/details?id=com.icorewwwi.vDS){[:MdTgtBlank:]}. Costa ben 1,29€ ma, per fortuna, dopo neanche 10 secondi di ricerca ho già trovato l'APK ricaricato da altre persone sul Web, e l'ho installato.  
All'apertura, confermo i miei sospetti: il menu principale è identico a quello di Drastic, eccetto per i colori cambiati. Anche tutti gli altri menu sono identici, e il motore di emulazione anche. Come se non bastasse, la cartella in cui salva i dati è esattamente la stessa di Drastic (`/sdcard/Drastic`!). Non ci hanno nemmeno provato a nascondere il furto, questi!

![I menu iniziali di Drastic e di vDS, affiancati per confronto.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Emulazione-NDS-Android/Drastic-VS-vDS-Main-Menu.avif)

Comunque, si, l'emulatore funziona, fa aprire i file e non fa il trolling del chiudersi in faccia. Da ormai 3 giorni lo sto usando, e non ho da ridire.

La storia quindi, almeno per me, è finita bene.. ma **potrei aggiungere qualcosa**.

## Google, Mannaggia.

Le [norme per sviluppatori di Google Play](https://play.google.com/about/developer-content-policy){[:MdTgtBlank:]} vietano categoricamente le applicazioni che, come queste ultime di cui ho parlato, violano il diritto d'autore. Eppure, queste 4 che stanno letteralmente rubando tutto il codice di un'altra app, proprietaria e venduta a pagamento, sono ancora tutte lì. Alcune da mesi, altre da anni, ma sono lì.  
Tecnicamente, anche le applicazioni che integrano direttamente e immediatamente al loro interno app installabili per il solo scopo di esserne a tutti gli effetti degli "installatori impacchettati", come quelle 2 specifiche, sarebbero contro le norme di Google Play, perché ~~conterebbero come un app store alternativo~~ violerebbero delle specifiche norme riguardo l'uso dell'installatore di pacchetti Android da parte delle app.[^ APK dentro le app]

In tutto questo, però, **Google cosa fa?** Cosa fa Google quando a violare le norme sono applicazioni poco famose che allo stesso tempo portano a Google stessa qualche soldino?  
**Se ne sbatte, proprio.** Io credevo che nessuno avesse provato a segnalare queste applicazioni a Google per la rimozione, e invece effettivamente qualcuno lo ha fatto.. e non ha ottenuto nulla. Ci ho provato anche io ma, dopo ben 3 giorni, ancora è tutto sullo store e non ho nemmeno ricevuto una risposta via email da Google.

Ed è proprio così che, con questa storia, oggi riconfermiamo due importanti fatti.

## Cosa abbiamo imparato?

1. **I DRM si dimostrano**, ancora una volta, non solo come inutili (eludibili, visto che io ora starei giocando con una versione modificata di Drastic con il DRM tolto), ma soprattutto come **dannosi** (visto che, anche comprando Drastic stando alle regole, non lo potrei usare comunque sui miei dispositivi);  
In generale, i programmi che usano DRM, ossia quel software proprietario che non garantisce nemmeno la "[libertà](https://www.gnu.org/philosophy/free-sw.it.html){[:MdTgtBlank:]} 0" (poter eseguire il software come si vuole), si dimostrano come inaffidabile. Meglio preferire sempre software senza DRM e, quando possibile, completamente libero e comunitario.

2. **Google**, come troppe altre multinazionali, **non merita un briciolo di fiducia**. Sul suo store ha la spazzatura e se ne frega volutamente, pur avendo in teoria dei sistemi automatici per controllare le marsità che, tra l'altro, [fanno spesso vittime innocenti](https://www.ghisler.ch/board/viewtopic.php?t=76643){[:MdTgtBlank:]}.  
Prima che arrivino i fanboy: no, ok che l'Apple App Store è un po' messo meglio del Google Play Store - anche perché la tassa per poter pubblicare qualcosa lì è di un'ingorda somma di [99$ all'anno](https://developer.apple.com/it/support/enrollment){[:MdTgtBlank:]}, anziché i [25$ una tantum](https://support.google.com/googleplay/android-developer/answer/6112435?hl=it#zippy=%2Cstep-pay-registration-fee%2Cpassaggio-paga-la-quota-di-registrazione){[:MdTgtBlank:]} di Google - ma anche lì ogni tanto cicciano fuori app discutibili, spesso predatorie per gli utenti. Almeno, però, Google vede il permettere l'installazione di applicazioni da fonti non ufficiali come parte standard del suo sistema operativo, mentre Apple mette attivamente i bastoni tra le ruote al sideloading perché "è per la sicurezza degli utenti";  
In generale, bisognerebbe diffidare dai padri padroni, e preferire le pagine Web degli sviluppatori stessi per scaricare le app, oppure store come [F-Droid](https://f-droid.org){[:MdTgtBlank:]}.

## Ho un regalinocto..!

E, finalmente, posso dire di aver finito. Vi lascio con un **regalino**: <a href="https://archive.org/details/Emulation-Archive" target="_blank" rel="noopener">archive.org/details/Emulation-Archive</a>.  
Su questa pagina di Archive.org da me creata ho messo qualche cosina.  
Innanzitutto, l'APK di vDS, che però funziona solo da Android 4.1 in su; Per questo motivo ho messo anche 2 APK patchati di Drastic vero, uno di forse 3 anni fa e uno anche più vecchio, che invece funzionano da Android 2.3 _in su_ ("in su" inteso come: fino a quando il problema del selettore di file rotto non si presenta, che credo sia fino ad Android 5, esso compreso, su molti dispositivi). **Tutti devono poter giocare!**  
Nell'archivio ci sono anche altri emulatori sparsi, anche liberi, di cui ho comunque archiviato il codice giusto per preservarlo.

---

Grazie per la lettura. Vi invito a seguire il blog, anche se non in tutti gli articoli futuri ci saranno file binari in regalo 😁!  
**P.S.**: Ma quanto sono bellini tutti i miei androidi che fanno girare _ACWW_ insieme? Vi lascio la foto, giusto per.

![Foto di 3 dei miei dispositivi Android tascabili, che mostrano la schermata del titolo di Animal Crossing Wild World.]([staticoso:Folder:Assets:AbsoluteRoot]/Media/Emulazione-NDS-Android/ACWW-on-Androids.avif)

## 🏷️ Note/Riferimenti

[^ APK dentro le app]: **Aggiornamento del 2022-07-29**: Ho corretto questa parte perché ricordavo che app del genere violassero le norme perché "conterebbero come app store alternativi", ma in realtà non riesco a verificare la cosa. Ho però trovato questa oscura pagina della guida per sviluppatori, che dice chiaramente a quali scopi le app possono richiamare l'installatore di pacchetti di sistema di Android: <https://support.google.com/googleplay/android-developer/answer/12085295?hl=it#zippy=%2Cutilizzi-consentiti-dellautorizzazione-request-install-packages%2Cutilizzi-non-validi>{[:MdTgtBlank:]}. Lo scopo pratico di queste app, ossia quello di essere dei banali wrapped installer, tecnicamente non sarebbe a posto.
