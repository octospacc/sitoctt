+++
Title = "Evitare di richiamare comandi per sbaglio nel terminale"
Date = 2022-08-05
Draft = true
+++

Lavorando nel terminale, magari allo sviluppo di programmi, mi capita spesso di richiamare per sbaglio un comando che non dovrei.

Ciò mi succede perché lavoro in questo modo: modifico qualcosa nella finestra del mio editor di testo di fiducia, quindi passo alla finestra del terminale, e premo `[Freccia Su]` (che richiama l'ultimo comando eseguito) ed `[Invio]` per eseguirlo.

Quello che ho notato è che certe volte, nella fretta, mi capita di premere una volta di troppo `[Freccia Su]`, cosa che richiama il penultimo comando eseguito, o quello ancora prima.  
Visto che praticamente queste sequenze di azioni le faccio quasi in automatico, senza leggere per accertarmi che il comando selezionato sia effettivamente quello che voglio prima di premere `[Invio]` (perché solo quello mi aspetto), accade diverse volte che io esegua un comando che non dovrei: spesso, si tratta del comando per fare un commit [Git](https://en.wikipedia.org/wiki/Git){[:MdTgtBlank:]} delle mie modifiche alla cartella di lavoro, e subito caricarle in cloud.

Ora, questa cosa non va bene, perché significa che nella cronologia di Git avrò certi punti "sbagliati": con descrizioni dal testo duplicato, e il codice in uno stato inadatto, non funzionante, perché ero nel pieno di testare alcune modifiche.  
Avere una cronologia di Git così conciata intacca decisamente la sua qualità, perché è più difficile trovare un punto specifico passato del codice in futuro, cosa che nullifica una delle funzionalità utili di Git - e in generale è qualcosa che non mi piace, mi da fastidio, vedere la cronologia sporca.

## Lo script

Per risolvere il problema, mi sono inventata questo scriptino (testato con _sh_ e _bash_), l'idea è di avviare i comandi "pericolosi" attraverso di lui nelle situazioni in cui devo fare quelle mie mosse con il terminale (ma, volendo, lo si può impostare come alias per richiamarlo in maniera implicita sempre per un dato comando).

<pre class="CodeScroll"><code>
Profile="~/.bashrc"

a=${RANDOM: -1}
b=${RANDOM: -1}

echo "[!] Confirm your command"
echo "[?] $a + $b = ?"
read Input

if [ "$Input" -eq "$((a+b))" ] 2>/dev/null
then
	$SHELL -c "source "$Profile"; $@"
else
	echo "[!] Wrong input"
fi
</code></pre>

## Come si usa

Ho salvato il codice all'interno di una funzione `function comconf() { }` nel mio file di profilo bash.  
Ora, quando devo eseguire un comando marso, mi basta fare `comconf '<comando>'`; il programma mi chiederà di scrivere il risultato di un'operazione aritmetica semplice generata casualmente, e solo se ciò che scrivo è giusto (quindi, solo se sto prestando attenzione) il mio comando verrà eseguito.

<pre class="CodeScroll"><code>
$ # Esempio
$ comconf 'echo "Prova"; echo "Provina"'
[!] Confirm your command
[?] 1 + 3 = ?
4
Prova
Provina
$
</code></pre>

---

Lo script ha qualche aspetto strano, per esempio il fatto che non funziona se eseguito direttamente dalla shell corrente (ed è per questo che esegue il comando desiderato in un altro processo di shell, con l'argomento `-c`). Per questo motivo, devo anche caricare esplicitamente il mio file di profilo nella nuova shell, perché non viene fatto in automatico e lì ho altri alias e funzioni che mi servono.  
Come se non bastasse, se non uso i singoli apici per racchiudere il comando che voglio chiamare, se questo contiene altri apici è come se questi venissero ignorati, e quindi il comando finale si può rompere.

Vabbe, problema risolto ad ogni modo. Niente più incidenti a causa di un `[Freccia Su]` di troppo.
