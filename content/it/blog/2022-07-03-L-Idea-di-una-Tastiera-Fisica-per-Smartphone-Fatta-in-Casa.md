+++
Title = "⌨️ L'idea di una tastiera fisica per smartphone fatta in casa"
Description = "Con difficoltà ho comprato una tastiera ultra-compatta. L'idea è di costruire una cover-tastiera per il mio telefono, ma ho riscontrato intoppi!"
Aliases = [
  "/Posts/2022-07-03-L-Idea-di-una-Tastiera-Fisica-per-Smartphone-Fatta-in-Casa.html",
  "/Posts/2022-07-03-0000-L-Idea-di-una-Tastiera-Fisica-per-Smartphone-Fatta-in-Casa.html",
]
Categories = [ "Tecnologia", "Mobile", "DIY" ]
Date = 2022-07-03
Lastmod = 2023-03-21
Featured_Image = "@/Media/Cover-Tastiera-mobilefun.com.avif"
+++

Forse un annetto fa, un po' per curiosità e un po' perché immaginavo già che potrebbe essere stato qualcosa di comodo, ho sviluppato un marginale interesse per gli smartphone dotati di tastiere fisiche complete.

Non intendo i maledetti tastierini numerici, che ancora oggi si vedono sui telefoni non-smart, intendo tastiere con decine di singoli tasti dedicati per lettere e simboli.  
Questo tipo di tastiere era già raro vederlo sui telefoni precedenti all'era degli smartphone: faceva la sua comparsa innanzitutto non sui modelli ultraeconomici, ma comunque poteva non essere sempre comodissimo per via delle dimensioni ridotte.  
Più gli smartphone hanno iniziato a diffondersi, e più le tastiere fisiche hanno iniziato a scomparire, anche se, raramente, su alcuni telefoni moderni ci sono state, e di dimensioni anche generose.

Non ricordo se questo periodo dell'anno scorso era di poco prima o poco dopo aver comprato un nuovo smartphone, il mio corrente ad oggi; fatto sta che ho dovuto sceglierlo in base a criteri precisi e restrittivi, in primis il costo e, purtroppo, non c'era alcun basso di gamma con una tastiera fisica.

## Un nuovo spunto

Con il tempo che passava ho un po' dimenticato la questione, fino a che, qualche settimana fa, mi imbatto in un video su Invidious ([YouTube/JXdLzinnqms](https://invidious.snopyta.org/JXdLzinnqms){[:MdTgtBlank:]}) che mostra una modifica fatta in casa ad uno smartphone.  
Il video mostra, e la discussione su XDA collegata spiega, una trovata interessante: è stata comprata una cover a scorrimento con tastiera Bluetooth integrata, e la si è adattata per ospitare un telefono completamente diverso (ma di simili dimensioni) da quello per cui la cover è pensata.

Subito mi è venuta la voglia di creare qualcosa del genere ma, cercando ho iniziato a pensare che questo tipo di cover non sia ormai più prodotto da nessuno.. è stato assolutamente impossibile trovarne una, non solo a buon prezzo, ma in assoluto. Né online, né in negozi fisici.

Non essendoci speranza, ho provato a cambiare leggermente strategia, e cercare una tastiera Bluetooth si molto piccola, ma senza supporti strani a mo' di cover inclusi: solo la tastiera grezza, mi sarei arrangiata io poi per agganciarla al telefono.  
La ricerca su Amazon è stata assolutamente infruttuosa, mah. Su AliExpress, attorno ai 13€ c'era la tastiera come la cercavo, ma per me comprare lì è una rogna a dir poco. Per fortuna, però, uno dei tanti casalinghi tuttoavere (quelli che vendono miliardi di cinesate) nella mia zona aveva il prodotto che mi serviva, a soli 2€ in più di quanto l'avrei pagato da Ali.  
Un affare, e quindi ho comprato.

![Il fronte della mini-tastiera]({{< assetsRoot >}}/Media/Mini-Bluetooth-Keyboard/Tastiera-Fronte.avif)

## Dopo l'acquisto

A casa l'ho messa un po' a caricare e l'ho provata al volo. Che dire, funzionava e la sensazione di quando si digita non l'ho trovata male, nonostante parliamo di una tastiera a membrana.  
Tutto benissimo quindi.  
O così sembrava.

La mattina dopo, provo di nuovo ad accendere il bell'oggettino, per fare altre prove. Non si accende. Che? Come? Rimetto in carica la tastiera, e in effetti dopo due minuti funziona.  
Che strano, eppure l'ho tenuta in carica per ore il giorno prima. Magari non si è caricata bene dalla porta del mio PC, quindi anche questo giorno la tastiera resta in carica, stavolta dal blocco che uso per cellulare e altri dispositivi.

### Investigare sulle stranezze

La mattina dopo, stessa questione. Qualquadra non cosa, è evidente che la batteria subisce un drenaggio pesante, dal nulla, per qualche motivo. Per la cronaca, la tastiera ha un interruttore fisico, che non ho mai dimenticato di spegnere dopo aver riposto la tastiera.. tutto molto strano.  
Decido di farla caricare un po', per poi smontarla, e misurare con un multimetro la tensione della batteria al litio saldata alla scheda, che noto scendere di 0.01V ogni 10 secondi circa. Oh.

Supponendo che la scheda sia correttamente progettata, quindi che l'interruttore ON/OFF fisico tagli la corrente tra batteria e scheda al punto in cui dovrebbe, e che il circuito di gestione della batteria non sia una ciofeca, la colpa di un problema del genere può essere solo una: la banale vecchiaia della batteria.

![Foto della piccola batteria della tastiera]({{< assetsRoot >}}/Media/Batteria-SCW302030-2015-08-27.avif)

In effetti, non solo la batteria era visivamente abbastanza gonfia, ma riporta una data sull'esterno: "2015/8/27", quasi 8 anni fa.  
Giurerei che la tastiera stessa sia anche più vecchia, considerando i richiami ad un epoca anche un po' precedente presenti sulla scatola e le istruzioni: iPhone 4 e iOS pre-7, Galaxy S4 e una Touchwiz visibilmente vecchissima, Windows Mobile 6 e Windows 8 desktop, Symbian 3, la PS3.. insomma, ne è passato di tempo.

![Scansioni di alcune parti del retro della scatola e delle istruzioni, contenenti rimandi a cose vecchie.]({{< assetsRoot >}}/Media/Mini-Bluetooth-Keyboard/Rimandi-Vecchi.avif)

## Fine bruttina

Che dire. Avrei forse dovuto aspettarmelo un problema del genere? Forse si. Sicuramente, però, dubito che altre persone al posto mio se lo sarebbero aspettato.  
Per finire, l'unica cosa che posso dire è che questo articolo non sarebbe dovuto uscire; o meglio, non con questa fine. Avrei dovuto parlare del Prototipo 0, già realizzato, del mio supporto per smartphone che aggiunge questa tastiera piccina, ma, purtroppo, sento di non aver avuto modo di testarlo abbastanza.

Sperando di riuscire a risolvere il problema della batteria (ma credo di si)[^Nuova Batteria], nel prossimo articolo, di questa che credo sarà una serie, spiegherò come ho sistemato il tutto, e illustrerò il curioso Prototipo 0.

[^Nuova Batteria]: **Aggiornamento 2023-03-21**: Mi trovavo a passare di qui, a sistemare alcune cose interne in vecchi file, e ho pensato: anche se alla fine non ho (ancora) scritto nessun articolo di seguito a questo, almeno una nota di aggiornamento qui è degno scriverla. **Poco dopo questo post** ho saldato una vecchia batteria al litio che avevo per casa, grande più o meno uguale, e... **la tastiera ora funziona** perfettamente. Non male dai, **ho risolto** il problema **senza spendere** altri soldi!
