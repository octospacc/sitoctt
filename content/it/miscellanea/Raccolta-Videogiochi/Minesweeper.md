+++
Title = "💣 Minesweeper"
Categories = [ "Gaming" ]
Lastmod = 2023-03-28
+++

<style>/*
*/#Body {
	Color: #000000;
	Background: #C0C0C0;
}

/*
*/#Background {
	Background-Color: #C0C0C0;
	Background-Image: /*linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),*/ url('{{< assetsRoot >}}/Media/Minesweeper/XP-Window-www.techradar.com.webp');
	Filter: Blur(5px);
}

/**/#LeftBoxContainer, #RightBoxContainer { Color: #000000; }

/*
*/#MainBox {
	Background: RGBA(192, 192, 192, 0.80);
	Backdrop-Filter: Blur(5px);
}
</style>

In **Minesweeper** (in italiano ufficialmente "**Campo minato**") si ha una griglia di gioco in cui sono state posizionate casualmente (da un algoritmo) delle bombe. Per vincere, bisogna individuarle tutte senza farne esplodere nessuna.

Le regole sono semplici, ma il gioco raggiunge facilmente alti livelli di complessità ed ha un non-so-che di cui non si riesce a fare a meno.

<!-- Per il tipo di gioco, un semplice puzzle blandino nato in un'era in cui quasi nessun videogioco era costruito per causare dipendenza ai giocatori, è spaventosamente capace di farti ossessionare. -->

* Se hai vinto una partita, vuoi tornare nel gioco subito, nella (a lungo andare giusta) speranza di poter fare anche di meglio, di riuscire a completare la tavola in appena _quel secondo_ di tempo in meno. E quindi, non te la fai _solo un'altra_ giocata?

* Se la partita invece l'hai persa, il bisogno di iniziarne immediatamente una nuova è impellente, difficile da ignorare. Se a questo punto il gioco, nonostante la voglia, lo si chiude, allora si ampio spazio a quei pensieri che dicono come a Campo minato non ci sai giocare, e i tuoi tempi non si accorceranno mai!

Tutto questo è assurdo se si considera di che roba parliamo:

* Un rompicapo tutto sommato blandino, con controlli essenziali, grafica scarna (anche le implementazioni un attimino più elaborate hanno un limite pratico ai miglioramenti grafici che possono apportare), e una logica semplice.

* Un programma che 3 decenni fa era nato, assieme al Solitario di Windows, semplicemente per insegnare in maniera divertente alle persone ad usare il mouse.

* Un gioco appartenente ad un'epoca lontana in cui il concetto di "gamification" era alieno a tutti, e i videogiochi free-to-play erano veramente gratis: **non** costruiti appositamente per creare dipendenza o pressioni nei giocatori, in quanto gli acquisti-in-app non esistevano.

Personalmente, chiamo il campo minato anche "**minaspazzante**", per scherzare su una traduzione pseudo-letterale scorretta della parola "minesweeper" (letteralmente ma correttamente "[spazzamine](https://it.wikipedia.org/Dragamine)") in italiano. In certi momenti, in un attimo diventa "**minasp<span style="border: 2px dotted yellow;">i</span>azzante**", quando ti mette davanti a bivi strani o a schemi di piazzamento delle bombe intricati.

Ma, se queste sono tutte cose che può notare anche un osservatore terzo, questo passatempo **apparentemente semplice e da ufficio** nasconde ben di più. Campo minato riesce in qualche modo ad offrire emozioni che, sempre per via delle circostanze oggettive, è difficile comunicare al mondo.

Una volta che si è presi la mano, a furia di centinaia di partite fatte e ripetute nel tempo, il momento del gioco diventa spesso comparabile ad una sessione meditativa capace di assorbirti l'anima. Soltanto chi ha fatto di questo rompicapo il suo pane quotidiano conosce la sensazione: la mano è mossa secondo un flusso strabordante di comandi, impartito direttamente da uno strato istintivo della mente, spesso ad una velocità superiore a quella in cui il cervello cosciente riesce a registrare cosa cavolo stia accadendo; certe volte, dopo aver fatto mosse giuste nell'impeto della situazione (ma mai tirate a caso), queste vengono messe in discussione dalla parte cosciente della mente circa una frazione di secondo dopo! - senza motivo, perché, di nuovo, corrette.

Accumulando quella singola o doppia partita giornaliera nelle settimane, nei mesi, e negli anni, si impara inconsciamente a riconoscere tutti gli schemi di piazzamento delle mine: le immagini delle piastrelle numerate - disposte esattamente in un certo modo, o un altro, delle decine di possibili - si imprimono nella mente e vengono poi ripescate ed analizzate automaticamente nell'istante in cui si sta per andare a fare click. Da qui alcune persone affermano di subire qualcosa di simile all'"effetto Tetris" anche con Minesweeper: vedere schemi di tasselli numerati in situazioni casuali di semi-coscienza (ad esempio, in dormiveglia).

Parafrasando ciò che scrive [un autore di PCGamesN](https://www.pcgamesn.com/minesweeper/get-free): **Campo minato è una delle forme di escapismo digitale più pure** di cui si possa fare esperienza, perché è la dimostrazione pratica di come un gioco, per essere profondamente immersivo, non ha un vitale bisogno di un _open world_ dettagliato, narrativa elaborata, o personaggi a cui affezionarsi.

<p markdown="1" style="background: #fde; padding: 0.5em;">...Scusa, ci sono lavori in corso su questa pagina, sto piazzando le mine in giro per trollare le prossime persone che verranno qui a leggere e inciamperanno su qualche parola... se nel frattempo vuoi imparare a giocare leggiti [Wikipedia](https://it.wikipedia.org/Campo_minato_(videogioco)), vai va...</p>

{{< embed ouCe9OTmTUs youtube "16:9" "LGR — Minesweeper is Hardcore Gaming" >}}

## Curiosità

<div class="Minesweeper Locker"></div>

* Negli anni '90, **persino alla Microsoft** erano tutti [fissati con Minesweeper, soprattutto Bill Gates](https://arstechnica.com/gaming/2023/02/how-bill-gates-minesweeper-addiction-helped-lead-to-the-xbox). Direi che non è difficile vedere come...

* Nel 1999, a seguito di lamentele di un certo Sergio Chiodo (??), che argomentava come il concetto del gioco al campo minato fosse offensivo per le vittime di vere mine anti-uomo nel mondo, nasce in Italia la [Campagna Internazionale per la messa al Bando di Campo Minato](http://fc.retecivica.milano.it/rcmweb/fnm/princ.htm#italiano). Microsoft ha parzialmente ceduto alla pressione, e in Windows Me e 2000 ha sostituito le bombe nel gioco con dei fiori, e rinominato il gioco in "Prato fiorito".[^Regional_Differences]

	* La campagna ha preso piede solo limitatamente fuori dall'Italia (?), e solo con Windows Vista il concetto di gioco al prato fiorito è diventato globale. Microsoft ha dato la possibilità di cambiare il gioco incluso nel sistema tra tema mine e tema fiori, impostazione che ha un diverso valore predefinito in base alla nazione.[^Windows_Vista_and_Windows_7]

## Implementazioni

<div class="ListNoInMargin" markdown="1">

* Per **PC**, l'**originale di Microsoft** non è malaccio. La versione per **Windows** XP funziona sulle ultime versioni del sistema, e persino su **Wine**. Purtroppo, scala un po' male su schermi ad alta risoluzione, in quanto i quadratini sono di una dimensione fissa e non esiste zoom. Da anni non è incluso in Windows, forse per questo motivo, ma si può scaricare dal Web:  
	* Versione XP Globale: [Minesweeper.exe](https://archive.org/download/Minesweeper_201811/Minesweeper.exe)  
	* Versione XP Italiana: [Prato Fiorito.exe](https://archive.org/download/prato-fiorito/PRATO_FIORITO.exe)

* Su **Android**, e azzardo a dire in generale, la migliore implementazione che ho trovato è **Antimine**.  
	* Scaricare da F-Droid: [dev.lucanlm.antimine](https://f-droid.org/packages/dev.lucanlm.antimine)  
	* Codice Sorgente: [antimine-android](https://github.com/lucasnlm/antimine-android)

* Per giocare da **browser Web**, beh, su questa pagina sto mettendo su qualcosa che per i miei personali gusti è il meglio disponibile. Funziona bene sia su desktop che mobile (anche se lì il tempo per cui bisogna tenere un quadrante premuto per piantare una bandiera è lunghetto), ed ha una grafica minimale.  
Sto lavorando per rendere il gioco personalizzabile, per il momento si può solo giocare con ciò che ho implementato come minigioco per sbloccare la lettura della sezione [Curiosità](#-Curiosit) (se non vedi nulla, attiva JavaScript!).  
**Nota**: la mia implementazione è basata su [vue-minesweeper](https://github.com/antfu/vue-minesweeper), con alcune personali modifiche per l'embedding. Tutto il mio codice modificato è [nella repository del sitoctt](https://gitlab.com/octtspacc/sitoctt/-/tree/main/Assets/vuesweeper-core) (licenza MIT).

</div>

## Simili e Cloni

* [Bullets](https://ojs.aaai.org/index.php/AAAI/article/view/21561/21310), Campo minato giocabile su carta.

* [Kaboom](https://pwmarcz.pl/blog/kaboom), un Minesweeper "_crudele ma onesto_":
	* Il **posizionamento delle mine** non è **scelto** una volta per tutte all'inizio, ma **con ogni mossa**.
	* Quando ci si trova in situazione di dover tirare ad indovinare (non ci sono celle adiacenti provate come sicure), si ha il 100% di probabilità di sopravvivere.
	* Quando non c'è bisogno di indovinare, e lo si fa, il gioco sceglie il risultato peggiore possibile.

	Il gioco con queste regole si sviluppa in modo **novello ed interessante**, in quanto spesso ci si trova in situazione di dover pensare in modo davvero tosto (almeno, fino a quando non si riesce ad apprendere inconsciamente tutti gli schemi possibili: dopo mesi e mesi di partite abituali).

## Altre Risorse

* [Authoritative Minesweeper](https://minesweepergame.com)

* [Minesweeper is one of the purest gaming experiences](https://old.reddit.com/r/patientgamers/comments/11i6zqy/minesweeper_is_one_of_the_purest_gaming/)

## {{% i18n notes-refs %}}

[^Regional_Differences]: <https://tcrf.net/Minesweeper_(Windows,_1990)/en#Regional_Differences>
[^Windows_Vista_and_Windows_7]: <https://en.wikipedia.org/wiki/Microsoft_Minesweeper#Windows_Vista_and_Windows_7>
[^PageBg]: **Sfondo della Pagina**: [Fonte](https://www.techradar.com/news/gaming/the-most-successful-game-ever-a-history-of-minesweeper-596504)

<script src="/MinesweeperEmbed.js"></script>
