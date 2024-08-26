+++
Title = "Controllare statistiche interessanti e sulla salute di partizioni su Linux"
Date = 2022-08-09
+++

Le memorie di archiviazione, di qualunque categoria siano, con l'usura si degradano.  
Niente si può fare per evitare di doverle cambiare, prima o poi, dopo tanti anni. È però possibile tenere d'occhio il loro stato di salute, per poter identificare eventuali problemi.

Quando si parla di dischi HDD o SSD, il protocollo [SMART](https://en.m.wikipedia.org/wiki/S.M.A.R.T.){[:MdTgtBlank:]} corre in aiuto ma, se, come me, si usano i computer in maniera poco convenzionale, allora il controllare dischi classici non basta.

## Linux va oltre

Un qualcosa di abbastanza segreto, che non molti sanno (così mi è parso, almeno), è che su Linux è possibile accedere alle statistiche di partizioni con alcuni filesystem.  
Ciò, ovviamente, in modo indipendente da se si stia usando una pennetta, una scheda SD, un disco rigido, un floppy disk, o anche una memoria ancora meno usuale.

[Ext4](https://en.m.wikipedia.org/wiki/Ext4){[:MdTgtBlank:]} fornisce diversi dati curiosi - e lo stesso dovrebbero fare anche le sue versioni precedenti, Ext3 ed Ext2, ma non ho controllato.  
Anche [F2FS](https://en.m.wikipedia.org/wiki/F2FS){[:MdTgtBlank:]} ho visto, direttamente dal mio smartphone Android, espone delle informazioni interessanti.. che non affronterò in dettaglio, perché sono tutte molto oscure e non so cosa significhino; e se non so cosa significano, non sono per me curiose. Capita.  
Per quanto riguarda altri file system, non ho visto proprio. Come compito per casa, quindi, vi do quello di vedere se roba come FAT32, exFAT, NTFS, o perché no, BTRFS, espone informazioni belline, su Linux. E come?

## Ottenere i dati

Su Linux, basta navigare nei percorsi `/sys/fs/<filesystem>/<device>` per trovare qualche file interessante.  
Si può stampare a schermo il contenuto di ciascuno, affiancato al suo nome, con un semplice comando (eseguito nel relativo percorso): `for i in *; do echo "$i: $(cat $i)"; done`. A meno di avere SELinux attivo - in genere, di default lo è solo sui dispositivi Android, non sui sistemi desktop - non servono nemmeno i permessi di root.  
Metto qui sotto in tabella i più interessanti, riguardanti la microSD del mio server (una povera Nintendo Switch che fa girare Ubuntu senza sosta), ci torneremo tra poco.

| Nome | Valore |
| --- | --- |
| errors_count | 0 |
| first_error_time | 0 |
| last_error_time | 0 |
| lifetime_write_kbytes | 1959125105 |
| session_write_kbytes | 1423172308 |

Parlando nello specifico dei file system Ext: per conoscere persino qualche dettaglio in più, e affiancato da un nome comprensibile, ci sarebbe anche il comando `tune2fs -l /dev/<device>`. Questo richiede però i permessi di root e, mentre riporta anche alcuni dei dati che si possono ottenere sbirciando i file di prima, come il numero di lifetime_write, questi possono essere non aggiornati, e relativi solo all'ultimo montaggio della partizione. Quindi, meglio prestare attenzione a questi.  
Anche stavolta, riporto le cose interessanti.

| Nome | Valore |
| --- | --- |
| Filesystem created | Mon Jul 26 04:33:17 2021 |
| Last mount time | Fri Apr 15 11:55:30 2022 |
| Mount count | 16 |

## Cose da osservare

Vediamo, uno per uno, l'utilità di questi valori.  
Bisogna tenere in conto, però, nel caso non si fosse capito, che i valori parlano dello stato **della partizione, non del media** di archiviazione. Possiamo leggerli solo perché Ext4 li salva e, di conseguenza, se la partizione viene formattata, allora anche questi valori si resettano. Inoltre, consideriamo che potrebbero tranquillamente essere alterati da chiunque con programmi semplici come tune2fs, quindi non sono dati da prendere come perfettamente buoni se persone non fidate hanno accesso alla memoria.

• **Filesystem created**:
: La data di creazione della partizione. Semplice, ma può tornare utile per fare stime sulla salute, assieme ai prossimi dati.

• **Mount count**:
: Il numero di volte in cui la partizione è stata montata. Questo può essere interessante, se parliamo di una memoria che non è usata in modo permanente su una macchina sempre accesa. Se non esistesse SMART, che dà questo e anche più dati, questo valore sarebbe molto utile sugli HDD.

• **Last mount time**:
: La data dell'ultimo montaggio della partizione. Ci può servire in combinazione con altri dati, e basta, credo.

• **session_write_kbytes**:
: La quantità, in KB, di dati scritti durante la sessione corrente, ossia dal momento dell'ultimo montaggio. Assieme al valore descritto appena sopra, possiamo usare questo per sapere quanto abbiamo scritto in un periodo di tempo attivo (il corrente).

• **lifetime_write_kbytes**:
: La quantità, in KB, di dati scritti da quando la partizione è stata creata. Questa informazione è particolarmente utile sulle microSD, almeno se se ne fa un uso intensivo come me. C'è anche su F2FS.

• **errors_count**:
: Il numero di errori, credo sia di lettura che di scrittura, avvenuti nel tempo. Errori frequenti possono essere sintomo di una memoria inaffidabile o semplicemente degradata.

• **first_error_time** e **last_error_time**:
: Date, rispettivamente della prima e dell'ultima volta in cui un errore è stato registrato. Può essere utile a capire se eventuali errori capitano di continuo, e quindi bisogna investigare oltre; oppure, se un errore è capitato una volta e poi mai più dopo molto tempo, e quindi si sta bene così.

## Quando serve controllare la salute così?

Bene, OK, queste informazioni sono interessanti, ma: quando servono effettivamente?

Se la memoria di archiviazione in uso - che, se abbiamo deciso di ricorrere a queste misure anziché usare SMART, è probabilmente una microSD o una chiavetta - inizia a dare segni di cedimento, magari rallentandosi nel tempo, oppure corrompendo dati.. Sarebbe opportuno almeno controllare che sia tutto a posto.

Se poi i dati non fanno paura, ma sembrano in regola.. allora è il caso prima di fare una formattazione completa (incluso il ricreare la tabella delle partizioni da zero), cosa resa semplice da programmi come [GParted](https://gparted.org){[:MdTgtBlank:]}, e poi si vede come continua la storia.

In ogni caso, giusto per scrupolo, sarebbe bene fare sempre controlli di routine, così da poter prevedere problemi prima che accada qualcosa di grave.

## Tenere d'occhio le microSD?

Parlando di schede microSD: sono quasi usa e getta, hanno una vita estremamente limitata, visto che i loro chip di memoria sono gli scarti degli scarti della fabbricazione di altre memorie, di gamma più alta, come gli SSD.

Sulla loro effettiva durata, almeno di quelle uscite bene dalla fabbrica e non di sottomarche, cosa si sa?  
Se ne leggono di tutti i colori online: chi dice che ogni singola cella di memoria resiste 10000 riscritture, chi dice che puoi al massimo scrivere 1000 volte la capacità della memoria prima che questa fallisca completamente (andando in modalità di sola lettura)... non si arriva ad alcuna conclusione.

Ho avuto schede come quella esaminata oggi, della capacità di 32 GB, che, a parte i quasi 2 TB scritti dall'ultima formattazione, secondo me minimo 3 TB totali in tutta la sua vita li ha visti, eppure sembra ancora a posto; e poi, ho avuto schede che hanno iniziato a dare problemi per molto meno. Sarà che quest'ultime le ho usate con file system schifosi però, come FAT32 o exFAT, e per questo si corrompevano in continuazione.

In conclusione: se abusiamo di schedine, è bene riuscire a controllarle, nei limiti del possibile, nel modo in cui abbiamo imparato oggi.
