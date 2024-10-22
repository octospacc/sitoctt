+++
Title = "🔉️ Output audio in contemporanea HDMI+analogico su Raspberry Pi con ALSA"
Date = 2024-09-19
Description = "Per sfruttare al meglio RetroPie, che pecca di vie umane per passare da audio HDMI a quello su jack 3.5 o viceversa, configuriamo per bene ALSA e RetroArch."
Featured_Image = "@/Media/Raspberry-Audio/RasperinoAudio-AlsaMixer.webp"
Downsync = "/it/note/Raspberry-Output-Audio-Both.html"
Categories = [ "Linux", "Gaming", "Rasperino" ]
+++

<!-- Autogenerated by ListedDownsync.js. Do not edit (unless also set "% Downsync = False") - it would be overwritten. -->

Nella mia nuova missione per integrare, sotto forma di console da retrogaming casalinga, un qualsiasi computer _che funzioni_ con una configurazione ben consolidata con RetroArch, e che mi permetta di giocare passando ROM e salvataggi tra diversi dispositivi... il Raspberry Pi, con installata la distro Linux RetroPie, è saltato fuori come pezzo ideale del puzzle.

Senza divagare sulla faccenda in sé, per cui ho invece più informazioni sul mio MicroBlog ([https://octospacc.altervista.org/series/gaming-1/](https://octospacc.altervista.org/series/gaming-1/)), per ognuno dei problemi alleviati da questa configurazione ne sono usciti altrettanti di scomodi, _in teoria semplici_ da risolvere ma _nella pratica_ per nulla triviali... e uno di questi riguarda l'audio.

<script async="async" defer="defer" src="https://liminalgici.spacc.eu.org/embed.js"></script><iframe title="Pixelfed Post Embed" src="https://liminalgici.spacc.eu.org/p/the_octt/742372822008654489/embed?caption=true&amp;likes=false&amp;layout=full" class="pixelfed__embed" style="width: 400px; height: 648px; height: calc((100vw / 3 * 4) + 72px); max-height: 648px; /* height: 516px; height: calc((100vw / 3 * 4) + 64px + 16px); max-height: 516px; */" width="400"></iframe>

## Il problema degli output 🚰️

Volendo sfruttare al massimo questo Rasperino così predisposto, per poter giocare adattandomi a diverse situazioni in casa, è essenziale poter scegliere attimo per attimo quale uscita audio ascoltare.  
Sostanzialmente, c'è l'audio trasmesso via HDMI, la scelta logica e spesso unica per usare le casse della TV... e poi c'è quello emesso sulla porta jack analogica da 3.5 mm, integrata nel single-board computer, utilissimo invece per giocare con cuffie o auricolari (perché la porta è più vicina, e perché il volume è controllabile senza stare alla mercé dei terrificanti firmware delle TV).

Tutto apparentemente banale, finché non mi sono accorta che, out-of-the-box, il sistema non offre niente né per cambiare output al volo (ad esempio, con una combinazione di tasti, o un'impostazione rapida nel menu principale), né tantomeno la possibilità di sparare l'audio su entrambe le uscite a prescindere.

In realtà, pare che su alcuni sistemi si possa impostare l'output audio in modalità automatica<sup id="fnref1"><a href="#fn1">1</a></sup>, cioè che (come su qualsiasi dispositivo odierno) va verso o ritorna dall'uscita esterna quando il connettore viene inserito o disinserito, ma... a parte il fatto che si dice sia inaffidabile, questa funzione manca sul mio Raspberry Pi 3, per qualche motivo.

## La soluzione: il tutto 💡️

In una situazione così schifosa, dove l'output audio andrebbe cambiato a mano ogni volta tornando al menu di sistema, per poi aprire i bruttissimi (e da gamepad, scomodissimi; i tasti sono tutti sminchiati) menu di configurazione `ncurses`, per poi tornare indietro — sottraendo preziosissimi minuti di gaming — l'opzione meno brutta era proprio di, in qualche modo, forzare questo output in simultanea.  
Impossibile non poteva essere, dato che, stando a quanto letto durante le ricerche, Kodi sul Raspino ci riesce...

![AlsaMixer]({{< assetsRoot >}}/Media/Raspberry-Audio/Alsamixer-1.png)

### Configurazione di ALSA 🔩️

Il problema principale era configurare [ALSA](https://it.wikipedia.org/wiki/Advanced_Linux_Sound_Architecture), il sistema audio di base di Linux, (e in genere l'unico preinstallato su distro non-desktop come RetroPie), per funzionare in questo modo qui. Bene, peccato che ALSA sia notoriamente rognoso da gestire, al punto tale che sul web ci sono valanghe di thread morti su come risolvere esattamente questo problema qui...

Dopo aver invano cercato ovunque, trovando configurazioni lunghe o corte ma tutte ugualmente rotte, mi sale un attacco d'arte e decido di... chiedere a ChatGPT<sup id="fnref2"><a href="#fn2">2</a></sup>. Ecco, al di là di qualche svista stupida, per cui di tempo ne ho perso ancora di più, l'intelligenza artificiale mi ha dato una configurazione minimale, comprensibile, e che funziona come necessario.

La configurazione finale quindi è la seguente, assume audio prettamente stereo e si può usare direttamente su Raspberry Pi 3 senza modifiche... oppure può essere un punto di partenza per altri usi e altri dispositivi (dove vanno ovviamente cambiati i parametri). La parte opzionale alla fine rende la scheda analogica la predefinita per il controllo del volume via software (per programmi come `alsamixer`), al posto della predefinita digitale, cosa utile appunto per l'uso con cuffie.  
Il contenuto è da ricopiare in un nuovo file `/etc/asound.conf`:

```
# Output audio su entrambe le schede
pcm.!default {
  type plug
  slave.pcm "both"
}
pcm.both {
  type route
  slave.pcm {
    type multi
    slaves {
      a { # HDMI
        pcm "hw:0,0"
        channels 2
      }
      b { # Analogico
        pcm "hw:1,0"
        channels 2
      }
    }
    bindings {
      0 { slave a; channel 0 }
      1 { slave a; channel 1 }
      2 { slave b; channel 0 }
      3 { slave b; channel 1 }
    }
  }
  ttable {
    0.0 = 1 # HDMI Sx
    1.1 = 1 # HDMI Dx
    0.2 = 1 # Analogico Sx
    1.3 = 1 # Analogico Dx
  }
}
# Controllo volume default sull'analogico (opzionale)
ctl.!default {
  type hw
  card 1
}
```

#### Configurazione del trolling 👿️

Bisognerebbe fare attenzione ad altri file che potrebbero prendere precedenza su quello inserito (come di sistema) in `/etc/asound.conf`, ad esempio `~/.asoundrc` (che è la configurazione utente, appunto nella cartella home dell'utente, in questo caso `/home/pi/.asoundrc`).

Quest'ultimo viene creato in automatico da RetroPie quando si usa il suo menu per scegliere l'output audio... il che non è un problema, perché con la nuova configurazione quel menu possiamo anche buttarlo, ma bisogna sapere che quel file adesso va, e in futuro andrà (se ricreato aprendo per sbaglio quel malefico menu), cancellato.

#### Test della configurazione 🔉️

Questo passaggio sarebbe opzionale, e si può passare direttamente a provare con dei giochi, specialmente se la configurazione è stata copincollata precisamente e per lo stesso hardware, ma... se si è già nel terminale, o ci si mette poco ad usarlo, un test non costa nulla.  
Si collega il Rasperino ad un dispositivo HDMI con casse, poi si collegano altre casse, o cuffie, qualsiasi cosa, all'uscita analogica, si esegue semplicemente il programma `speaker-test`, e si ascolta se il rumore esce.

Se le orecchie dicono che è tutto OK, allora qui è tutto a posto, e non bisogna nemmeno stare a preoccuparsi di alcuna delle eventuali orribili scritte che escono a schermo. Si può fermare il programma con CTRL+C.  
Se non si sente nulla, è il caso di avviare `alsamixer`, controllare i livelli, e smutare le uscite nel caso lo siano... Mentre, se il programma si chiude da subito con degli errori, non so che dire: _sulla mia macchina funziona_.  
Se si percepisce che le due fonti audio non sono in perfetta sincronia... credo sia del tutto normale, e che non ci sia modo di sistemarlo (anche perché, una configurazione con vari plugin di ALSA non mi ha funzionato), ma in questo caso non importa comunque.

### Configurazione RetroArch 👾️

Provando giustamente ad avviare un gioco a questo punto, attenzione: la delusione è dietro l'angolo. Ecco infatti la cosa ancora più semplice per cui ho perso ancora più tempo: far si che in RetroArch l'audio funzioni per bene, senza gracchiare, andare a scatti, saltare pezzi, o in generale distorcersi.

Nel mio caso, il driver audio usato di default da RetroArch è `alsathread`... che per qualche motivo da questi problemi, mentre il normale driver `alsa` no.  
Basta allora avviare la schermata principale di RetroArch (dal menu di EmulationStation: RetroPie > RetroArch), dalla quale andare su Settings (Impostazioni) > Drivers, e impostare Audio ad `alsa`.  
Poi, prima di uscire, per salvare i cambiamenti: Main Menu (Menu principale) > Configuration File (File di Configurazione) > Save Current Configuration (Salva Configurazione Corrente).

![Impostazione del driver Audio in RetroArch]({{< assetsRoot >}}/Media/Raspberry-Audio/RetroArch-Driver-Audio.png)

A questo punto, tornando al menu di sistema, è il caso di provare un gioco, per vedere se è tutto apposto... e nel mio caso lo è stato.  
In teoria, usare il driver ALSA non-threaded può avere un impatto negativo sulle prestazioni di tutto il sistema<sup id="fnref3"><a href="#fn3">3</a></sup>, e quindi dell'emulazione, ma nei miei test al volo così non ho notato alcuna differenza... anche se non ho provato nulla di pesante. Non ho quindi neanche avuto l'esigenza di cambiare altre opzioni dell'audio, come il resampler o la sincronizzazione, ma in caso di problemi è bene smanettare lì; non ci sono molte altre vie.

## Audio Bluetooth? (No.) 💙️

Stavo quasi per continuare sulla strada della tortura autoinflitta, per riuscire in qualche modo ad infilare delle cuffie Bluetooth in tutta questa configurazione, ma... per quanto sarebbero utili per giocare a distanza da una TV, anche ammesso di voler buttare ancora più tempo a configurarle, non ne vale probabilmente la pena. Meglio comprare un adattatore da audio jack a Bluetooth, o usare direttamente qualcosa di cablato con una prolunga!

Considerando quanto iniziava ad andare a scatti il mio vecchio smartphone per il solo fatto di riprodurre video con auricolari Bluetooth anziché cablati, non penso che su un Raspino lo stesso setup possa giovare alle prestazioni.  
E comunque, non sono riuscita nemmeno a collegarlo un paio di cuffie Bluetooth; durante l'associazione, viene sparato un traceback di errore sullo schermo, però dopo l'apparecchio risulta associato... ma non riesce a connettersi. Forse mancano anche i driver audio Bluetooth, o qualcosa.

![Errore di Bluez]({{< assetsRoot >}}/Media/Raspberry-Audio/BluezError.png)

Per giunta, ho come il presentimento che sia in ogni caso impossibile far funzionare (bene) l'audio Bluetooth con ALSA, perché, anche in questo caso, il web non offre molti consigli. Però, PulseAudio è un'ulteriore rogna da configurare, aggiunge notoriamente un carico in più sulla CPU, e costringe a scegliere tra l'avere ritardi o glitch nell'audio. Il suo successore, PipeWire, ha meno problemi ma è ancora più rognoso.

## Conclusione 📢️

Col senno di poi, era veramente una minchiata; non meritava nemmeno una nota tanto lunga. L'importante è che ora funzioni tutto, e posso finalmente commettere il mio gaming!

Purtroppo, per ora, ancora una volta non ho trovato alcun modo di modificare il volume emesso dal Raspberry mentre si è in un gioco, e per farlo bisognerà aprire per forza `alsamixer` (ops) su una TTY (raggiungibile anche dal menu di sistema andando in RetroPie > Audio > Mixer).  
Se proprio dovesse servirmi, mi inventerò alla peggio un programma simile ad AlsaMixer, giusto per modificare i volumi, che però sia effettivamente utilizzabile senza tastiera... o, idealmente, qualcosa che permetta di fare lo stesso in qualunque momento, senza cambiare app attiva, con una combinazione di tasti; per ora niente!

P.S: Questo stava per essere un rantolo — o, come direbbe un vocabolario, un'invettiva — all'interno di un post sul MicroBlog, ma dopo aver scritto ben 2 paragrafi ho avuto come _il sentore_ che avrei risolto abbastanza velocemente il problema da non giustificare il parlarne subito... e, anche stavolta, sono felice di aver dato retta agli spiriti occulti! Ne è uscita quindi una nota, perché il testo al vetriolo aveva perso di senso, e valeva la pena aggiungere dettagli più precisi.

> _Lo ripeterò fino alla morte, è allucinante: su Linux si può volendo fare tutto, e in teoria è tutto semplice (lo dico genuinamente senza ironia), ma, nella pratica non funziona mai niente di default, e nel sistemare le cose nella pratica c'è sempre qualche intoppo. In questo caso, RetroPie usa ALSA \[...\], che è la cosa peggiore mai inventata dall'umanità da configurare... ho una decina di pagine web aperte a riguardo, e finora gli unici risultati che ho avuto \[...\] sono stati errori sulla TTY e silenzio sugli speaker, altro che output in simultanea. È La Fine. 🗡️_  
>   
> ~ Letteralmente io al mio punto più basso.

## {{% i18n notes-refs %}}

---

1. <span id="fn1"></span>  "_Switching audio output between jack and HDMI on RetroPie_": [https://lofi-gaming.org.uk/blog/2014/04/switching-audio-output-between-jack-and-hdmi-on-retropie/](https://lofi-gaming.org.uk/blog/2014/04/switching-audio-output-between-jack-and-hdmi-on-retropie/); le foto delle schermate mostrano che su certi sistemi il fantomatico output automatico c'è... [↩](#fnref1)
    
2. <span id="fn2"></span>  Qui per reference la conversazione avuta con ChatGPT, anche se non è di per sé utilissima: [https://chatgpt.com/share/66ebfd94-b7e8-8001-89c4-e7424dd128a9](https://chatgpt.com/share/66ebfd94-b7e8-8001-89c4-e7424dd128a9). [↩](#fnref2)
    
3. <span id="fn3"></span>  Da "_Use "alsathread" instead of "alsa" in RetroArch on RPI3+_": [https://forum.batocera.org/d/5509-use-alsathread-instead-of-alsa-in-retroarch-on-rpi3](https://forum.batocera.org/d/5509-use-alsathread-instead-of-alsa-in-retroarch-on-rpi3): "I’ve noticed that using “alsathread” instead of “alsa” driver in RetroArch leads better audio sync and frame smoothing on non-native screen framerates \[...\] less sound cracks and lags on low-performace games/cores." [↩](#fnref3)