+++
Title = "Évitez d'appeler accidentellement des commandes dans le terminal"
Date = 2022-08-05
Draft = true
+++

{{< noticeAutomaticTranslation it >}}



Lorsque je travaille dans le terminal, peut-être en développant des programmes, j'appelle souvent accidentellement une commande que je ne devrais pas.

Cela m'arrive parce que je travaille comme ceci : j'édite quelque chose dans la fenêtre de mon éditeur de texte préféré, puis je vais dans la fenêtre du terminal et j'appuie sur `[Flèche vers le haut]` (qui rappelle la dernière commande exécutée) et `[Entrée] ` pour exécutez-le.

Ce que j'ai remarqué, c'est que parfois, dans ma hâte, il m'arrive d'appuyer une fois de trop sur `[Flèche vers le haut]`, ce qui rappelle l'avant-dernière commande exécutée, ou celle qui la précédait même.  
Comme je fais pratiquement ces séquences d'actions presque automatiquement, sans lire pour m'assurer que la commande sélectionnée est bien celle que je veux avant d'appuyer sur `[Entrée]` (car c'est tout ce que j'attends), il arrive plusieurs fois que j'exécute une commande qui Je ne devrais pas : souvent, c'est la commande qui permet de valider [Git](https://en.wikipedia.org/wiki/Git) mes modifications apportées au classeur et de les télécharger immédiatement sur le cloud.

Maintenant, ce n'est pas bon, car cela signifie que dans l'historique de Git j'aurai certains "mauvais" endroits : avec des descriptions avec du texte en double, et le code dans un état inapproprié et non fonctionnel, car j'étais en train de tester quelques changements.  
Avoir un historique de Git aussi compliqué affecte définitivement sa qualité, car il est plus difficile de trouver un point passé spécifique dans le code dans le futur, ce qui annule l'une des fonctionnalités utiles de Git - et en général, c'est quelque chose que je n'aime pas, c'est ça m'énerve, voir sale histoire.

## Le scénario

Pour résoudre le problème, j'ai inventé ce petit script (testé avec _sh_ et _bash_), l'idée est de lancer les commandes "dangereuses" via celui-ci dans les situations où je dois effectuer ces mouvements avec le terminal (mais, si je le souhaite, je il peut être défini comme alias pour toujours l'appeler implicitement pour une commande donnée).

<pre class="CodeScroll"><code>
Profil="~/.bashrc"

a=${ALÉATOIRE : -1}
b=${ALÉATOIRE : -1}

echo "[!] Confirmez votre commande"
echo "[?] $a + $b = ?"
lire l'entrée

if [ "$Input" -eq "$((a+b))" ] 2>/dev/null
alors
	$SHELL -c "source "$Profil"; $@"
autre
	echo "[!] Mauvaise entrée"
fi
</code></pre>

## Comment l'utiliser

J'ai enregistré le code dans une fonction `function comconf() { }` dans mon fichier de profil bash.  
Maintenant, quand j'ai besoin d'exécuter une commande marso, je fais simplement `comconf '<command>'` ; le programme me demandera d'écrire le résultat d'une opération arithmétique simple générée aléatoirement, et seulement si ce que j'écris est correct (donc seulement si je fais attention) ma commande sera exécutée.

<pre class="CodeScroll"><code>
$ # Exemple
$ comconf 'echo "Essayer" ; echo "Test"'
[!] Confirmez votre commande
[?] 1 + 3 = ?
4
Procès
Test
$
</code></pre>

---

Le script présente des aspects étranges, par exemple le fait qu'il ne fonctionne pas s'il est exécuté directement depuis le shell actuel (c'est pourquoi il exécute la commande souhaitée dans un autre processus shell, avec l'argument `-c`). Pour cette raison, je dois également charger explicitement mon fichier de profil dans le nouveau shell, car cela ne se fait pas automatiquement et j'ai d'autres alias et fonctions dont j'ai besoin.  
Comme si cela ne suffisait pas, si je n'utilise pas de guillemets simples pour entourer la commande que je veux appeler, si celle-ci contient d'autres guillemets, c'est comme si ceux-ci étaient ignorés, et donc la commande finale peut être interrompue.

Eh bien, problème résolu de toute façon. Plus d'accidents dus à un `[Up Arrow]` de trop.
