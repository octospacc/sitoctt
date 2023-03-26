// % Categories = Gaming
// % EditedOn = 2023-03-26

<style>/*
*/#Body {
	Color: #000000;
	Background: #C0C0C0;
}

/*
*/#Background {
	Background-Color: #C0C0C0;
	Background-Image: /*linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),*/ url('[staticoso:CustomPath:Assets]/Media/Minesweeper/XP-Window-www.techradar.com.webp');
	Filter: Blur(5px);
}

/**/#LeftBoxContainer, #RightBoxContainer { Color: #000000; }

/*
*/#MainBox {
	Background: RGBA(192, 192, 192, 0.80);
	Backdrop-Filter: Blur(5px);
}
</style>

# 💣 Minesweeper

In **Minesweeper** (in italiano ufficialmente "**Campo minato**") si ha una griglia di gioco in cui sono state posizionate casualmente (da un algoritmo) delle bombe. Per vincere, bisogna individuarle tutte senza farne esplodere nessuna.

Le regole sono semplici, ma il gioco raggiunge facilmente alti livelli di complessità. Per il tipo di gioco, un semplice puzzle blandino nato in un'era in cui quasi nessun videogioco era costruito per causare dipendenza ai giocatori, è spaventosamente capace di farti ossessionare.

Personalmente, chiamo il campo minato anche "**minaspazzante**", per scherzare su una traduzione pseudo-letterale scorretta della parola "minesweeper" (letteralmente ma correttamente "[spazzamine](https://it.wikipedia.org/wiki/Dragamine){[:MdTgtBlank:]}") in italiano. In certi momenti, in un attimo diventa "**minasp<span style="border: 2px dotted yellow;">i</span>azzante**", quando ti mette davanti a bivi strani o a schemi di piazzamento delle bombe intricati.

<p markdown="1" style="background: #fde; padding: 0.5em;">...Scusa, ci sono lavori in corso su questa pagina, sto piazzando le mine in giro per trollare le prossime persone che verranno qui a leggere e inciamperanno su qualche parola... se nel frattempo vuoi imparare a giocare leggiti [Wikipedia](https://it.wikipedia.org/wiki/Campo_minato_(videogioco)){[:MdTgtBlank:]}, vai va...</p>

## Curiosità

<div class="Minesweeper Locker"></div>

* Negli anni '90, erano tutti [fissati con Minesweeper a Microsoft, soprattutto Bill Gates](https://arstechnica.com/gaming/2023/02/how-bill-gates-minesweeper-addiction-helped-lead-to-the-xbox/){[:MdTgtBlank:]}. Direi che non è difficile vedere come...

* Nel 1999, a seguito di lamentele di un certo Sergio Chiodo (??), che argomentava come il concetto del gioco al campo minato fosse offensivo per le vittime di vere mine anti-uomo nel mondo, nasce in Italia la [Campagna Internazionale per la messa al Bando di Campo Minato](http://fc.retecivica.milano.it/rcmweb/fnm/princ.htm#italiano){[:MdTgtBlank:]}. Microsoft ha parzialmente ceduto alla pressione, e in Windows Me e 2000 ha sostituito le bombe nel gioco con dei fiori, e rinominato il gioco in "Prato fiorito".[^Regional_Differences]

	* La campagna ha preso piede solo limitatamente fuori dall'Italia (?), e solo con Windows Vista il concetto di gioco al prato fiorito è diventato globale. Microsoft ha dato la possibilità di cambiare il gioco incluso nel sistema tra tema mine e tema fiori, impostazione che ha un diverso valore predefinito in base alla nazione.[^Windows_Vista_and_Windows_7]

## Implementazioni

<div class="ListNoInMargin" markdown="1">

* Per **PC**, l'**originale di Microsoft** non è malaccio. La versione per **Windows** XP funziona sulle ultime versioni del sistema, e persino su **Wine**. Purtroppo, scala un po' male su schermi ad alta risoluzione, in quanto i quadratini sono di una dimensione fissa e non esiste zoom. Da anni non è incluso in Windows, forse per questo motivo, ma si può scaricare dal Web:  
	* Versione XP Globale: [Minesweeper.exe](https://archive.org/download/Minesweeper_201811/Minesweeper.exe){[:MdTgtBlank:]}  
	* Versione XP Italiana: [Prato Fiorito.exe](https://archive.org/download/prato-fiorito/PRATO_FIORITO.exe){[:MdTgtBlank:]}

* Su **Android**, e azzardo a dire in generale, la migliore implementazione che ho trovato è **Antimine**.  
	* Scaricare da F-Droid: [dev.lucanlm.antimine](https://f-droid.org/packages/dev.lucanlm.antimine/){[:MdTgtBlank:]}  
	* Codice Sorgente: [antimine-android](https://github.com/lucasnlm/antimine-android){[:MdTgtBlank:]}

* Per giocare da **browser Web**, beh, su questa pagina sto mettendo su qualcosa che per i miei personali gusti è il meglio disponibile. Funziona bene sia su desktop che mobile (anche se lì il tempo per cui bisogna tenere un quadrante premuto per piantare una bandiera è lunghetto), ed ha una grafica minimale.  
Sto lavorando per rendere il gioco personalizzabile, per il momento si può solo giocare con ciò che ho implementato come minigioco per sbloccare la lettura della sezione [Curiosità](#-Curiosit) (se non vedi nulla, attiva JavaScript!).  
**Nota**: la mia implementazione è basata su [vue-minesweeper](https://github.com/antfu/vue-minesweeper){[:MdTgtBlank:]}, con alcune personali modifiche per l'embedding. Tutto il mio codice modificato è [nella repository del sitoctt]([:sitocttRepoBase:]/-/tree/main/Assets/vuesweeper-core){[:MdTgtBlank:]} (licenza MIT).

</div>

## Altre Risorse

* [Authoritative Minesweeper](https://minesweepergame.com/){[:MdTgtBlank:]}

## [:HNotesRefsHtml:]

[^Regional_Differences]: <https://tcrf.net/Minesweeper_(Windows,_1990)/en#Regional_Differences>{[:MdTgtBlank:]}
[^Windows_Vista_and_Windows_7]: <https://en.wikipedia.org/wiki/Microsoft_Minesweeper#Windows_Vista_and_Windows_7>{[:MdTgtBlank:]}
[^PageBg]: **Sfondo della Pagina**: [Fonte](https://www.techradar.com/news/gaming/the-most-successful-game-ever-a-history-of-minesweeper-596504){[:MdTgtBlank:]}

<script src="/Assets/MinesweeperEmbed.js"></script>
