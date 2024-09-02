+++
Title = "2️⃣ Gaming synchronisé entre PlayStation 2 et smartphone"
Date = 2023-10-17
Downsync = "/it/note/Gaming-Sincronizzato-PS2-Smartphone.html"
Aliases = [ "/Posts/Notes/2023-10-17-Gaming-Sincronizzato-PS2-Smartphone.html" ]
Description = "En détail, comment j'ai conçu un système pour que les jeux et les sauvegardes soient toujours synchronisés entre l'émulateur et la vraie console PS2, partagé ici."
Categories = [ "Jeux" ]
Lastmod = 2023-10-18
+++

{{< noticeAutomaticTranslation it >}}



<!-- Généré automatiquement par ListedDownsync.js. Ne modifiez pas (sauf si vous définissez également "% Downsync = False") - cela serait écrasé. -->

<p>Ceux qui suivent mes aventures depuis assez longtemps et avec l'attention voulue le savent peut-être, mais le plus gros problème de l'informatique est : comment concilier correctement les divergences qui se créent lorsque nous sommes confrontés au problème de jouer à des jeux vidéo à la fois à la maison qu'en portabilité ? Entre les jeux qui dans un cas sont confortables à jouer et dans un autre peut-être même ne fonctionnent pas, et les sauvegardes qui sont réparties sur d'innombrables appareils différents, résoudre complètement ce problème ne sera jamais possible...<br>
Pourtant, parfois, l'entropie du cerveau est capable de générer des idées particulièrement utiles à cet égard aussi, comme cela m'est arrivé l'autre jour pour la PS2.</p>

<p>En fait, j'ai une vraie PlayStation 2, une console de salon qui quand on trouve le moyen de l'utiliser est certainement appréciable... et que je me suis souvent retrouvé à ne pas utiliser, pour les raisons évoquées plus haut : pas directement, car à la maison, je n'y vais souvent pas, ni avec un émulateur sur le smartphone, car j'aurais l'impression qu'à la maison je n'utiliserais pas la vraie console puisque les sauvegardes mises à jour ne seraient que sur le téléphone.<br>
Et puis, l'autre jour, en regardant la console (je ne sais pas pourquoi), je pense qu'il devrait y avoir un moyen de synchroniser facilement les sauvegardes entre celle-ci et le téléphone...</p>

<h2>Objet 1 : clé USB ou carte mémoire ?</h2>

<p>À l'époque, l'idée la plus simple à laquelle j'ai pensé était : ils existent <a href="https://www.amazon.it/Adattatore-Memoria-Lettore-Sostitutivo-trasparente/dp/B0C8TTQFJY" rel= "noopener nofollow" target="_blank">adaptateurs</a> pour utiliser une carte microSD comme carte mémoire PlayStation (qui utilisent une interface non standard à la place)... cela vaut peut-être la peine d'en acheter un, donc je les garde tous c'est là que se trouvent les sauvegardes, et si je le souhaite, je peux également y accéder depuis d'autres appareils en déplaçant la carte.<sup id="fnref1"><a class="footnote-ref" href="#fn1">1</a> </sup> <br>
Avec une carte de plusieurs Go (il n'y en a plus de petites dans le coin), en plus, je pourrais même me passer de la clé USB et garder tous les jeux uniquement sur la carte mémoire !</p>

<p>Heureusement, ce n'est pas le seul moyen, du moins pour certains jeux : <a href="https://github.com/ps2homebrew/Open-PS2-Loader" rel="noopener nofollow" target="_blank " >Open PS2 Loader</a>, l'homebrew qui exécute des jeux commerciaux à partir d'un stockage de sauvegarde (tel que des clés USB), prend en charge l'utilisation de cartes mémoire virtuelles (VMC) qui sont enregistrées sous forme de fichiers sur la clé USB. Les jeux sont assez lents à enregistrer dessus (la PS2 ne prend en charge que l'USB 1.1, et il y a en plus une charge étrange), mais c'est une solution apparemment réalisable.</p>

<h2>Attelage 2 : Enregistrer la conversion</h2>

<p>Quel que soit le choix précédent, je découvre cependant un autre obstacle : les sauvegardes doivent être converties pour passer de la console à l'émulateur (au moins <a href="https://aethersx2.com" rel="noopener nofollow" target=" _blank">AetherSX2</a>, pour le meilleur ou pour le pire, le seul vraiment décent à ce jour) et vice versa.<br>
Heureusement, je trouve immédiatement <a href="http://www.csclub.uwaterloo.ca:11068/mymc" rel="noopener nofollow" target="_blank">mymc</a>, un programme si ancien qu'il nécessite Python 2 (alors que pour le moment nous sommes à 3 depuis des années et des années), qui pourtant fonctionne, et Dieu merci, il propose une interface en ligne de commande.</p>

<p>Il n'effectue pas de véritables conversions de cartes mémoire virtuelles en soi, mais il vous permet de manipuler les fichiers contenus de différentes manières. Tout cela est très rudimentaire, mais heureusement suffisamment exploitable pour faire exactement ce dont j'ai besoin, après avoir assemblé un script idéal.<br>
Je ne vais pas essayer d'expliquer comment ça marche, en bas de l'article on peut le télécharger et le lire, c'est ennuyeux. J'ai empaqueté mymc dans le script, afin qu'il n'ait pas besoin d'être installé séparément.</p>

<h3>Décrochage 3 : Conversion depuis votre téléphone</h3>

<p><em>Note 2023-10-18 : J'ai trouvé un fork moderne (en Python 3) de mymc, <a href="https://sr.ht/%7Ethestr4ng3r/mymcplus/" rel="noopener nofollow " target="_blank">mymc+</a>... Je ne l'ai pas (encore) essayé, mais il est possible que cela fonctionne également sur Android, éliminant ainsi la configuration fastidieuse qui suit, je vais donc le mentionner. </em> </p>

<p>Malheureusement, mymc a quelques problèmes de fonctionnement sous <a href="https://termux.dev/en" rel="noopener nofollow" target="_blank">Termux</a> (l'environnement Linux natif très pratique pour ce type d'intégrations) sur mon Android : je ne sais pas ce qui est à blâmer, mais en pratique le programme a des problèmes pour lire les fichiers VMC, lançant une erreur du type <code class="prettyprint">file.vmc : Bad file descriptor< /code>. Je n'ai trouvé aucune solution en ligne, pas même pour des recherches générales sur le problème, j'ai donc dû me débrouiller. Peut-être qu'utiliser un système GNU+Linux conteneurisé en root, avec ses bibliothèques et une version différente de Python 2.7, suffirait à résoudre le problème, mais qui sait.<br>
Pour ma part, je commençais à m'énerver, j'ai donc choisi de déléguer la conversion à mon serveur Debian, en faisant en sorte qu'un script Termux effectue la simple tâche de charger la VMC sur le serveur, d'y exécuter le script de conversion proprement dit, puis téléchargez le fichier converti au bon endroit localement.</p>

<p>Avant d'oublier : sur Android 13 et supérieur (mais déjà sur certaines versions antérieures), les autorisations root sont nécessaires pour lire et écrire des fichiers depuis/sur des mémoires externes (comme la clé USB) et des dossiers d'applications privés (comme celui où AetherSX2 stocke les cartes mémoire virtuelles).<br>
D'après ce que j'ai pu prouver, si vous n'avez pas root vous devrez forcément utiliser un gestionnaire de fichiers adapté (et je ne pense pas qu'il en existe de scriptables, il faudra donc utiliser vos mains), ou peut-être ADB , pour déplacer les fichiers... merci Google.<br>
Quoi qu'il en soit, mes scripts ont écrit dans les chemins spéciaux utilisés pour tous les ambaradan.</p>

<p>En utilisant <a href="https://wiki.termux.com/wiki/Termux:Widget" rel="noopener nofollow" target="_blank">Termux:Widget</a>, j'ai finalement ajouté deux liens vers mon lanceur de système, pour la conversion VMC :</p>

<ul>
<li>celui qui va du format PS2 à celui de l'émulateur, à exécuter lorsque je veux jouer sur mon téléphone mais que les sauvegardes sur la clé USB ont été modifiées en dernier lieu par la PS2 ;</li>
<li>l'autre pour la conversion inverse, à effectuer lorsque je veux aller jouer sur PS2 une fois que l'émulateur aura mis à jour mes sauvegardes.</li>
</ul>

<p>Pour l'expliquer je me rends compte que cela semble très compliqué, en pratique il suffit d'appuyer sur un bouton et d'attendre quelques secondes.</p>

<h2>En pratique : la valeur de la mémoire unique</h2>

<p>Une fois les défauts éliminés, la configuration est faite, et son point fort réside dans la centralisation des jeux et des sauvegardes sur un seul appareil : la clé USB. Comme ceci :</p>

<ul>
<li>J'évite la confusion générée par les jeux que j'ai d'un côté mais pas de l'autre, notamment lorsque je souhaite modifier ma collection ;</li>
<li>Je n'ai pas besoin d'une microSD beaucoup plus grande dans mon smartphone pour contenir tous les jeux que j'ai déjà sur une autre mémoire portable, avec des avantages pour la stabilité des autres données et le poids du portefeuille ;</li>
<li>il n'y a pas de confusion supplémentaire pour la gestion même des sauvegardes, celles-ci étant gérées comme je l'ai déjà dit.</li>
</ul>

<p>Sur la PS2, je connecte normalement la clé USB lorsque j'en ai besoin, cependant sur le smartphone, je dois utiliser un adaptateur USB-C OTG, ce qui est en moyenne peu pratique mais il n'y a pas grand-chose à faire. Pour éviter de perdre ces objets, j'ai ensuite attaché un mousqueton à la clé USB et un porte-clés dans le trou pour les cordons sur la coque du téléphone.</p>

<h2>Conclusion : idées de chaîne</h2>

<p>Je pense que c'est le système le plus idéal compte tenu de mes conditions initiales, et dans les jours suivants je le testerai minutieusement.<br>
Cependant, je devrai probablement me procurer une mémoire externe plus grande pour stocker plus de jeux, car celle de 32 Go que j'utilise actuellement a toujours été trop petite pour moi.</p>

<p>Peut-être qu'en en prenant un assez grand et en écrivant un homebrew spécial, je pense pouvoir adapter mon système aux jeux Wii également, en utilisant la même mémoire pour ceux-là aussi... spoilers ? 👀</p>

<p>Enfin, voici les ressources supplémentaires pour cet article :</p>

<ul>
<li>Ma question initiale et brève discussion sur le système Sony Hacking Zone : <a href="https://t.me/SonyHacking/46784" rel="noopener nofollow" target="_blank">https:/ /t. moi/SonyHacking/46784</a>;</li>
<li>Guide d'utilisation de VMC sur OPL : <a href="https://youtube.com/watch?v=tBrKcJC_E4U" rel="noopener nofollow" target="_blank">https://youtube.com /watch ?v=tBrKcJC_E4U</a></li>
<li>Mes scripts de conversion (sur GitLab) : <a href="https://gitlab.com/octospacc/Snippets/-/blob/main/Ps2EmuVmcConvert.sh" rel="noopener nofollow" target="_blank "> direct</a>, <a href="https://gitlab.com/octospacc/Snippets/-/blob/main/Ps2EmuVmcConvertCloud.sh" rel="noopener nofollow" target="_blank">via le serveur< /a >;</li>
<li>version Android d'AetherSX2 avec laquelle je joue (dernière version sans logiciel publicitaire) : <a href="https://www.apkmirror.com/apk/aethersx2/aethersx2/aethersx2-v1-4-3060-release/aethersx2-v1 -4 -3060-android-apk-download/" rel="noopener nofollow" target="_blank">https://www.apkmirror.com/apk/aethersx2/aethersx2/aethersx2-v1-4-3060-release/ aethersx2- v1-4-3060-android-apk-download/</a>.</li>
</ul>



<div class="footnotes">
<ol>

<li id="fn1">
<p>Sur cette question, je trouve des avis contradictoires ou des conseils peu clairs, alors soyez prudent : il n'est pas clair si ces adaptateurs fonctionnent également comme des cartes mémoire normales pour sauvegarder des jeux (et donc éventuellement aussi comme une carte FMCB), ou seulement comme mémoire externe pour les homebrews comme OPL... en tout cas ce serait un achat potentiellement valable, compte tenu des inconvénients techniques de l'USB sur PS2. <a href="#fnref1">↩</a></p>
</li>

</ol>
</div>