// % Title = ⚡️ Il blogging rapido con Standard Notes
// % CreatedOn = 2022-12-13
// % HTMLTitle = <span class="twa twa-⚡️"><span>⚡️</span></span> Il blogging rapido con Standard Notes
// % UpdatedOn = 2022-12-14
// % Categories = Blog Tecnologia

# ⚡️ Il blogging rapido con Standard Notes

<p>È da direi parecchio tempo che uso <a href="https://standardnotes.com" rel="noopener nofollow" target="_blank">Standard Notes</a> come app di note personali.<br>
Anni fa l'avevo scelta per il suo essere libera e open-source, ma allo stesso tempo molto pulita, curata, e funzionale. Capitava a pennello in un momento in cui cercavo qualcosa che supportasse una cifratura dei dati che funziona, senza inficiare sull'usabilità.</p>

<p>Senza dilungarmi su perché poi mi è piaciuto continuare ad usarla, poi ho smesso, e poi ho ripreso fino ad arrivare ad ora, bisogna approfondire su una in particolare delle sue funzioni integrate: <a href="https://listed.to">Listed</a>.<br>
Si tratta di una piattaforma di blogging concepita dagli stessi sviluppatori di Standard Notes, e disponibile per il self-hosting oppure l'uso gratuito sull'istanza ufficiale. Per quanto io non l'abbia mai davvero usata prima, ho trovato fin dall'inizio interessante il concetto e la sua applicazione.</p>

<p>Da qualche giorno fa, invece, ho iniziato a giochicchiare con <a href="https://listed.to/@ChatGPT_Experiences">ChatGPT</a>. Questione totalmente diversa questa, si, ma centra perché mi sono posta una domanda: tutte queste conversazioni che sto facendo con l'intelligenza artificiale, dove posso metterle per tenerle integrali, organizzate, ritrovabili e accessibili a chiunque, e per me facili da caricare?</p>

<p>La scelta stava per ricadere sull'usare <a href="https://gitlab.com/octtspacc/staticoso" rel="noopener nofollow" target="_blank">staticoso</a>, il mio generatore di siti statici che già uso per il <a href="https://sitoctt.octt.eu.org" rel="noopener nofollow" target="_blank">sitoctt</a>, ma poi ci ho ripensato.</p>

<p>Ho pensato che voglio rendere effettivamente la mia collezione di esperienze ritrovabile sul Web, il problema qui però, che ho potuto amaramente constatare in tutti questi mesi, è come il mio sito ad esempio sia, come dire... I motori di ricerca non se lo cagano. 😭<br>
Oltre ad essere pure questo un argomento a parte, va precisato che la colpa della orrenda sorte del mio sito non dipende dal suo codice; è colpa del dominio e/o dell'host. Quindi, no, non abbandonerò mai il mio staticoso: il solo cambiare generatore (e i template di conseguenza) con uno magari fatto seriamente non risolverebbe alcun problema.</p>

<p>Ho dovuto insomma cestinare totalmente l'idea dell'hosting su GitHub e GitLab, e pensare ad altro.</p>

<ul>
<li><strong>Blogger</strong> di Google? L'esperienza editoriale lascia a desiderare su mobile.</li>
<li><strong>WordPress</strong>? Sarebbe OK, ma sappiamo cosa potrebbe succedere tra tanti anni a dati inseriti in un sistema complesso; e WordPress è molto complesso. Ho a fatica trovato un <a href="https://github.com/lonekorean/wordpress-export-to-markdown" rel="noopener nofollow" target="_blank">programmino che converte un suo backup</a> XML in file Markdown... che con buona probabilità si romperà tra qualche anno, essendo non ufficiale, dato che a quanto pare il team di WordPress ha il vizio di cambiare la struttura di quell'XML di tanto in tanto; altre soluzioni di conversione che avevo trovato un attimo prima erano vecchie di qualche annetto e non hanno funzionato, per dire.</li>
<li>Magari <strong><a href="https://writefreely.org" rel="noopener nofollow" target="_blank">WriteFreely</a></strong>? Ho già un account sull'<a href="https://noblogo.org" rel="noopener nofollow" target="_blank">istanza di Devol</a>, ma il limite di blog per ogni account è 5 e non volevo potenzialmente sprecarne uno.</li>
<li><strong><a href="https://joinplu.me" rel="noopener nofollow" target="_blank">Plume</a></strong>, forse? Sembrava carina quest'altra piattaforma di blogging, ospitata da molti e compatibile con ActivityPub (non una necessità per me, ma comunque un bel bonus), ma non permette di impostare del CSS personalizzato; mancanza grave per questo mio caso d'uso, dato che non c'è altra via per impaginare tutto nella maniera specifica di cui ho bisogno per rappresentare una chat senza boilerplate ad ogni paragrafo di HTML.</li>
</ul>

<p>Le mie idee erano finite e, dato che avevo fretta di mettere su questo sito ed iniziare a caricarci le esperienze avute con ChatGPT, considerando quanto <em>mamma mia</em> era comodo copiare ed incollare le cose direttamente in Standard Notes, questo era il momento buono di provare Listed.</p>

<p>A dirla tutta, mi preoccupa un po' il prospetto che il file di backup settimanale delle note possa diventare grosso decine di MB, ma ormai il dado è tratto.<br>
Potrei creare un secondo account da usare solo per le note di ChatGPT, esportandole dal primario ed importandole lì, per poi cancellarle dal primo account per alleggerire la raccolta, però ci sono dei problemi. Forse riesco a trasferire l'username, ma i link ai singoli post saranno rotti, perché includono degli ID automatici, e quindi via di redirect alla home per chi ne segue uno vecchio. Inoltre, i vecchi messaggi del guestbook non vengono ricopiati, e mi sa che nemmeno le iscrizioni via email sono trasferite.</p>



<p>Tutto sommato comunque, per questo scopo limitato ho apprezzato quanto sia efficiente avere Standard Notes come parte finale del mio flusso di lavoro. Mi sembra riduca di molto l'<em>effetto "mi scoccio"</em>.</p>

<p>Considerato dunque il piacere della scoperta, ho per un attimo riflettuto su come il <em>fattore "che palle"</em> sia una delle cose che mi trattiene dall'aggiornare il sitoctt con migliore frequenza.</p>

<p>Lasciamo stare le pagine tematiche, che sono bestie a parte; lasciamo stare pure i post lunghi, che mi richiedono forte ispirazione e abbastanza tempo di stesura; però che cavolo, almeno qualcosa per il MicroBlog, che va per le corte, mi andrebbe di crearla più spesso! Però mi passa proprio la voglia, per qualche motivo, considerando tutta la trafila che devo fare.<br>
A dire il vero, avevo preso già da subito l'abitudine di iniziare a scrivere un post in Standard Notes, così da poter più flessibilmente gestire il tutto, magari passando rapidamente da un dispositivo all'altro. Però, se dovevo mettermi a scrivere qualcosa di non lungo ed elaborato, da pubblicare prima possibile, non mi veniva proprio la voglia di agire.</p>

<p>"<em>Ma perché non passo a Listed almeno per il mio MicroBlog?</em>", penso dunque. Beh, c'è un motivo se addirittura sono arrivata a farmi il mio generatore di siti statici: mi serve!... E se anche non mi servisse più e potrei dunque smettere di usarlo, non ci vorrei onestamente nemmeno pensare a fare una cosa del genere, dopo tutto il lavoro! 😖</p>

<p>Comunque, per dirla bene, Listed è parecchio scarno: permette appena di inserire CSS personalizzato, e di formattare i post in Markdown e un sottoinsieme ristretto di HTML (di cui propongo di seguito le mie analisi):</p>

<ul>
<li>Tutti gli elementi che sono di loro natura inline vengono automaticamente inseriti in un blocco <code class="prettyprint">&lt;p&gt;</code> (ad esempio, non si può avere <code class="prettyprint">&lt;body&gt;&lt;span&gt;Erre&lt;/span&gt;&lt;/body&gt;</code>, sarà sempre <code class="prettyprint">&lt;body&gt;&lt;p&gt;&lt;span&gt;Erre&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;</code>);</li>
<li>Qualsiasi attributo di elemento che non sia <code class="prettyprint">id</code>, <code class="prettyprint">class</code>, o <code class="prettyprint">style</code>, (ed <code class="prettyprint">href</code> o <code class="prettyprint">src</code>, così come credo roba come <code class="prettyprint">title</code>, <code class="prettyprint">width</code>, o <code class="prettyprint">height</code>, nei casi opportuni) viene buttato via: scordatevi quindi, per dire, di deviare dalla configurazione predefinita della piattaforma per quanto riguarda il comportamento dei link (il <code class="prettyprint">rel</code> non si tocca);</li>
<li>Certi elementi proprio non vanno: quelli con tag non-standard (custom insomma, tipo <code class="prettyprint">&lt;pincopallino&gt;</code>) sono eliminati, così come<code class="prettyprint">&lt;script&gt;</code>, <code class="prettyprint">&lt;link&gt;</code>, e a quanto pare pure roba come <code class="prettyprint">&lt;video&gt;</code> - però <code class="prettyprint">&lt;iframe&gt;</code>, per dire, funge, e per fortuna anche il mio adorato <code class="prettyprint">&lt;details&gt;</code>.</li>
</ul>

<p>È chiarissimo che non può sostituire al 100% assolutamente nessuna sezione del sitoctt, nemmeno quella del MicroBlog, e anche se potesse andrebbe a creare frammentazione: il sito principale non conterrebbe più tutti tutti i post in modo centralizzato, e chi ne avesse interesse dovrebbe quindi seguire ben 2 siti diversi.</p>

<p>Mi stavo <em>quasi</em> per rassegnare, ma per fortuna ho il lampo di genio: <em>Ma posso scrivere su Standard Notes, ed avere le note che in automatico si sincronizzano come file sul sito? ...No, non c'è verso. No, aspè, e chi lo ha detto? Io dico che c'è verso.</em></p>

<p>Ora, Standard Notes, come ho detto, usa un sistema di cifratura client-side dei dati, quindi per accedere alle note dal proprio account va usato un software un minimo specializzato.<br>
C'è <em>sn-cli</em>, il client ufficiale a riga di comando, che potrebbe essere utile per creare script... però <a href="https://github.com/jonhadfield/sn-cli/issues/33" rel="noopener nofollow" target="_blank">pare proprio sia stato abbandonato</a>: niente da fare.</p>

<p>E allora, anche qui io quindi parlo, e dico: <em>Chi lo ha detto che devo fare le cose per bene e usare le API "vere"?</em><br>
Io dico che, visto che per qualche motivo l'HTML di un blog su Listed (nello specifico, la pagina <a href="https://listed.to/@u8/all">/all</a>, l'unica che mi sembra includere davvero tutto, e non solo gli ultimi X post) include come stringa JSON i dati di tutti i post, allora io posso semplicemente pubblicare su Listed da Standard Notes ed avere un programma che fa lo sporco - ma in questo caso davvero semplice, visto che deve solo scaricare e parsare 1 file - lavoro dello scraping.</p>

<p><em>E script fu scripto.</em> Lo lascio qui: <a href="https://gitlab.com/octtspacc/sitoctt/-/blob/main/Scripts/ListedDownsync.js" rel="noopener nofollow" target="_blank">gitlab.com/octtspacc/sitoctt/Scripts/ListedDownsync.js</a>; attenzione però che non c'è niente di bello da leggere, anche perché non ho ancora implementato tutto quello che dovrebbe servirmi a lungo termine, ma per chi vuole usarlo sta là.<br>
È tecnicamente indipendente dal sitoctt e da staticoso, in quanto salva semplici file Markdown su disco (anche se la sintassi delle righe di metadati in essi scritti è quella mia; per cui, in caso, andrebbe cambiata qualche stringa di testo nel programma per supportare il più classico formato dei metadati YAML).</p>

<p>Non voglio dire che ho pensato davvero a tutto, però ci sono andata vicina.<br>
No non mi so ancora decidere - per colpa di mie paturnie - su che standard usare per indicare blocchi speciali (di metadati, o di HTML da non far interpretare al SSG di Listed).<br>
No, non ho ancora fatto lo script da avviare come cronjob sul server, che ogni tanto dovrebbe scaricare i dati dal blog di Listed e aggiornare i file nella repository Git se ci sono aggiornamenti.<br>
Però, ho pensato alle cose veramente inderogabili, tipo la possibilità per il programma di sincronizzazione di non sovrascrivere un file già nella repo se questo specifica la cosa nei metadati. Metti che succede un qualunque casino, e io devo modificare i dati del post per il sitoctt senza toccare quelli della nota su Standard Notes: impostando questa flag, lo script di sincronizzazione non lo sostituirà la prossima volta che gira.</p>

<p>Come concludere, dunque.<br>
Oggi ho già scritto troppo, e la chiudo qui. Però spero vivamente che tutta questa nuova efficienza e comodità, l'avere ulteriore tecnologia che lavora per me, e non obbliga me a lavorare per lei <em>(in teoria, tanto comunque i problemi devono uscire fuori, altrimenti io non sono io!)</em>, possa farmi scrivere di più e con più piacere. Che sia sul <a href="https://sitoctt.octt.eu.org" rel="noopener nofollow" target="_blank">sitoctt</a>, o sulle lastre di pietra.</p>

<p>Ah, si, questo qui è stato il primo post sul <a href="https://listed.to/@u8">mio blog Listed</a>, è giusto precisarlo per chi legge dal sitoctt... ma io spero che almeno la versione Listed del blog possa venire indicizzata per bene e scoperta da più persone, già che ci siamo.</p>
