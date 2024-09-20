+++
Title = "🥴 Interface moche ? Fichiers tous détruits !"
Date = 2023-03-18
Description = "Pour faire les choses dans la précipitation, j'ai accidentellement supprimé une partie du disque du PC. Mais ce n'est pas seulement de ma faute : le programme que j'ai utilisé est mal conçu."
Downsync = "/it/blog/Bad-Interface-Partition-Destroyed.html"
Aliases = [ "/Posts/2023-03-18-Bad-Interface-Partition-Destroyed.html" ]
Categories = [ "Administrateur système" ]
Lastmod = 2023-03-20
+++

{{< noticeAutomaticTranslation it >}}



<!-- Généré automatiquement par ListedDownsync.js. Ne modifiez pas (sauf si vous définissez également "% Downsync = False") - cela serait écrasé. -->

Comparons **visuellement** deux applications PC : **GNOME Disks et GParted**.

![Les fenêtres des deux programmes comparées.]({{<assetsRoot >}}/Media/Partioning-Mar-2023/SideBySide.png)

Les deux sont des outils de partitionnement de disque et remplissent globalement les mêmes tâches ; il y a juste **une certaine différence** dans les fonctionnalités supplémentaires ou plus de support en faveur d'un programme ou de l'autre. Malgré cela, les deux outils présentent des **différences évidentes** dans leur **interface graphique**.

## Il faut avoir les deux

Je garde généralement ces deux programmes installés et je **les utilise de manière plutôt **alternative**, car :

<table><thead><tr><th>GParted</th><th>Disques GNOME</th></tr></thead><tbody><tr><td><img src="{{ < assetsRoot >}}/Media/Partioning-Mar-2023/GParted-Advanced.png" alt="Vue GParted des informations détaillées sur un disque."></td><td><img src="{{ < actifsRoot >}}/Media/Partioning-Mar-2023/GNOME-Advanced.png" alt="Menu contextuel global des disques GNOME, qui présente des fonctionnalités spéciales."></td></tr><tr ><td><strong>GParted</strong> a <strong>moins de fonctions distinctes</strong>, mais chaque chose a sa place, et un niveau <strong>suffisant</strong> de <strong>profondeur</strong> strong> et fonctionnalités : informations de bas niveau sur le disque, formatage dans des tonnes de formats et quelques autres détails.</td><td><strong>Les disques GNOME</strong> ont <strong>moins de profondeur</strong> > avec des opérations individuelles, mais propose quelques <strong>fonctions supplémentaires</strong> non strictement liées à la modification des partitions, ce qui est toujours utile : gestion de l'énergie et des performances des disques, une interface pour le protocole SMART, et aussi un outil pour tester performances de la mémoire !</td></tr></tbody></table>

## C'était une mission simple !

Avant-hier, lorsque j'ai démarré un Linux **live USB** sur [mon ordinateur portable](https://sitoctt.octt.eu.org/Posts/2022-07-09-Come-ho-Riparato-il- mon-Portatile-con-25-Euro.html), j'avais en tête de réaliser **sans dommage** une mission _théoriquement_ facile et indolore :

1. **Libérer de l'espace** sur le disque du PC, en supprimant la plupart des fichiers, à l'exception de ceux que je souhaitais conserver un instant (pour les gérer peut-être dans le futur).
2. **Redimensionnez la partition** sur le disque, car elle sera pratiquement vide à ce stade.
3. **Créez une nouvelle** partition suffisamment grande pour y installer le nouveau système d'exploitation.<sup id="fnref1"><a href="#fn1">1</a></sup>
4. **Déplacez les fichiers** de l'ancienne partition vers la nouvelle, en réduisant progressivement la première et en élargissant la seconde, **jusqu'à** pouvoir **supprimer l'ancienne**.

## Trop de désordre.

...Dans la pratique, _quelque chose s'est légèrement mal passé_. Cela n'aurait pas pu être une soirée tranquille ! 😾

Cette fois-ci, pour le simple fait qu'en recherchant un éditeur de partition parmi les applications préinstallées du système live en question, **en voulant le faire tout de suite**, le premier programme sur lequel mon regard est tombé était **GNOME Disques** .
Oh, j'aurais dû rester à l'écart. Et il y a plusieurs raisons :

#### 1\. Les disques physiques sont mélangés avec des partitions virtuelles montées à partir de disques physiques, dans la liste à gauche de la fenêtre

Déjà à ce stade, si (comme dans mon cas) vous avez des partitions de type étrange, c'est-à-dire [LVM](https://wiki.archlinux.org/title/LVM), la situation devient laide, car ** ce n'est pas le cas. indiquez où** vous devez aller** pour apporter des modifications.<sup id="fnref2"><a href="#fn2">2</a></sup>

<table><thead><tr><th>GParted</th><th>Disques GNOME</th></tr></thead><tbody><tr><td><img src="{{ <assetsRoot>}}/Media/Partioning-Mar-2023/GParted-List.png" alt="Le sélecteur de liste de disques dans GParted."></td><td><img src="{{<assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-List.png" alt="Vue de la liste des disques et partitions sur les disques GNOME."></td></tr><tr><td>< strong>GParted< /strong> n'a qu'une <strong>liste de périphériques</strong> (de vrais disques bien sûr, mais je pense aussi des périphériques virtuels) à sélectionner en premier, puis la grande vue avec toutes les partitions du périphérique choisi. C'est <strong>ordonné</strong> et logique.</td><td><strong>Sur les disques GNOME</strong>, cependant, pour faire ce que vous devez faire, <strong>vous y allez</strong> vers la vue disque ou <strong>où ?</strong> Dans le premier cas il y a <strong>certaines options</strong> et d'autres <strong>manquent</strong>. On essaie depuis la vue dédiée à la partition virtuelle ? Ici aussi, la liste des options est décidément neutralisée, entre autres à la fois au sens des boutons d'icônes rapides et au sens des boutons du menu contextuel... mais voyons maintenant quels problèmes elles ont.</td></ tr></tbody></table>

#### 2\. Le cas échéant, les icônes rapides disponibles pour chaque partition apparaissent et disparaissent

Lorsque vous êtes sur **GParted**, la liste des **boutons-icônes** en haut de la fenêtre **ne change jamais** - les boutons individuels s'assombrissent ou s'éclaircissent, selon qu'ils peuvent être utilisés sur la sélection actuelle. ou pas - **sur les disques GNOME, les raccourcis clavier** - en effet, positionnés d'une manière étrange également, coincés sous la zone de la table de partition, sur laquelle honnêtement je ne peux même pas commenter - ils **apparaissent ou disparaissent** complètement.
Voici les cas que j'ai vus, mais il y en a peut-être encore d'autres possibles, qui sait :

* À l'extrême gauche, pour certaines sélections, vous voyez un bouton **play/stop** (monter/démonter la partition), d'autres fois exactement au même endroit il y a un **cadenas** (verrouiller/déverrouiller la partition cryptée), d'autres fois, une **croix** (crée une partition dans un espace vide), et dans certains cas **rien**.
* Immédiatement à droite, un **engrenage**, bouton qui ouvre un menu pop-up avec une liste plus complète d'options pour la partition - on constate que cela finit par **monter tout à gauche**, si avant il n'y a rien, juste pour confondre davantage.
* Enfin, à l'extrême droite, dans certains cas, un bouton avec un **tiret sur fond rouge** (détruire la partition) peut apparaître.

Ehh, ce truc n'est pas si bon, car il rend **impossible d'associer mentalement** une _microzone_ spécifique de la fenêtre comme dédiée à une opération spécifique. Et c'est potentiellement **dangereux**, si l'on prend en compte le gros problème 5 (ci-dessous).

#### 3\. Le menu contextuel des options sur une partition utilise uniquement des étiquettes de texte, jamais une seule icône

Un détail en apparence mineur, mais qui est en réalité assez important.
Une chaîne de texte vous permet de comprendre sans équivoque ce que fait une certaine touche, contrairement à ce qui peut arriver lorsque vous n'avez que des icônes, mais **le meilleur serait obtenu** en combinant les deux choses : **touches accompagnées d'icônes**.

<table><thead><tr><th>GParted</th><th>Disques GNOME</th></tr></thead><tbody><tr><td><img src="{{ < actifsRoot >}}/Media/Partioning-Mar-2023/GParted-Context-Menu.png" alt="Le menu contextuel d'une partition dans GParted."></td><td><img src="{{ < assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-Context-Menu.png" alt="Le menu d'options d'une partition sur les disques GNOME."></td></tr><tr>< td ><strong>GParted fait cela pour ses menus contextuels (au moins sur les éléments les plus importants), et cela permet de mémoriser immédiatement l'<strong>action</strong> correspondant à chaque option, et de la rappeler immédiatement <strong>à un coup d'oeil</strong>.</td><td>Personnellement, <strong>en utilisant les disques GNOME</strong> je me retrouve toujours <strong>à devoir relire</strong> une bonne partie de la liste pour sélectionner quelque chose, même si ce n'est pas plus long que celui de GParted, précisément parce que <strong>les icônes manquent</strong>.</td></tr></tbody></table>

#### 4\. Les raccourcis clavier et les menus contextuels ne sont pas des alternatives les uns aux autres

<table><thead><tr><th>GParted</th><th>Disques GNOME</th></tr></thead><tbody><tr><td><img src="{{ <assetsRoot>}}/Media/Partioning-Mar-2023/GParted-Buttons.png" alt="La barre d'icônes rapide sur GParted."></td><td><img src="{{<assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-Buttons-1.png" alt="Création de boutons et options sur une partition dans les disques GNOME."> <img src="{{< assetsRoot >}}/Media/ Partitionnement -Mar-2023/GNOME-Buttons-2.png" alt="Démonter les boutons et les options d'une partition dans les disques GNOME."> <img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023 / GNOME-Buttons-3.png" alt="Blocs et boutons d'options sur une partition dans les disques GNOME."> <img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-Buttons- 4 .png" alt="Bouton Options sur une partition dans les disques GNOME."></td></tr><tr><td>Sur <strong>GParted</strong> vous avez d'abord le <strong>menu de la barre des tâches </strong> (dont divers menus peuvent également être rappelés comme contextuels dans certaines zones), qui contient véritablement <strong>toutes les opérations</strong> possibles dans le programme ; seul <strong>le</strong> existe une barre avec des <strong>icônes</strong> utiles pour rappeler rapidement les actions probablement les plus courantes. En pratique, tant que vous disposez de la barre de menus, <strong>vous pouvez</strong> même <strong>oublier</strong> l'existence de <strong>ces petites icônes</strong> là-bas.</td> < td>Avec les <strong>disques GNOME</strong>, ce n'est <strong>pas possible</strong>. En fait, sur <a href="https://duckduckgo.com/?q=gtk3+examples&ia=images&iax=images" rel="noopener nofollow" target="_blank">plusieurs applications GTK3</a>, c'est comme ça : il y a des <strong>actions</strong> fixées aux <strong>touches-étiquettes</strong> dans un menu, et d'autres fixées aux <strong>touches-icônes</strong> directement visibles. Cependant, généralement, ces boutons ne <strong>disparaissent pas ou n'apparaissent pas partiellement</strong> lorsque l'état change au sein de la même vue d'application ! J'ai peut-être des goûts étranges, mais cette chose me dérange le cerveau lorsque j'utilise le logiciel.</td></tr></tbody></table>

Pour comprendre, il suffit de comparer les boutons de ce tableau aux options de menu contextuel vues dans celui ci-dessus !

## Qu'ai-je fait ?

Tous ces facteurs réunis ont conduit à un énorme **patatrac** !
Alors, qu'est-ce que je fais ? Je dois **démonter** la **partition** avant de pouvoir la **redimensionner**.

Je passe de **la vue disque**, et il n'y a **que le bouton** pour le menu **options** - plus ce qui me viendra à l'esprit _seulement après_ quand j'aurai **déjà cassé** maintenant pour break up , est le bouton pour **détruire** la partition.
Dans la liste des options, j'ai tout lu et **je ne vois même pas** une entrée pour **démonter** la partition. _Meh_.

Je parcours l'**écran** dédié à cette **partition** montée, et j'appelle à nouveau ce menu pour je ne sais quelle raison, et à juste titre donc je ne trouve toujours rien.
A côté du bouton du menu options **il y avait en théorie le bouton stop**, pour démonter la partition, mais force est de constater que je ne l'ai vraiment **pas** remarqué**.

Je fais des **allers-retours** entre les deux écrans une dizaine de fois, et rien, je suis vraiment **aveugle**.

À un moment donné, mon inconscient s'ennuie de tout ce **cerclage**, et me permet enfin de remarquer un autre **bouton**... le dangereux **rouge**. _Aïe aïe_.
J'appuie dessus et honnêtement, je ne me souviens même pas si j'efface une fois le dialogue de confirmation - que je n'étais absolument pas dans un état psychologique pour lire - et puis j'appuie à nouveau sur le bouton pour confirmer immédiatement après le dialogue, mais une chose est claire :

Si jusqu'à ce moment-là je n'arrivais pas à penser clairement, parce que **à chaque respiration** un **"WTF ?!"** rugueux résonnait dans ma tête, ce n'était qu'une question de quelques secondes à partir du moment du * *clic fatal** car un **mauvais pressentiment** commençait à apparaître dans ma tête percée, déformée, pleine de cacahuètes périmées... 😰️

...Eh bien, et alors ? Qu'est-ce que c'est?
...
_Ohhhhah_, d'accord, **tu gagnes**. Je l'admets : **J'ai frappé aussi**. Oui. Heureux ? Au final j'ai bougé la main pour cliquer, bien sûr... Mais dans ma vie **j'ai fait** ces opérations **plusieurs fois** ! Même en utilisant des disques GNOME, parfois parmi tant d'autres ! 😭️

De toute façon, non, je ne rejetterai pas toute la faute sur le **pauvre Octt** d'il y a trois jours. Maintenant, je joue ma _carte piège_, et expose la vraie **touche de malheur** sans laquelle je me serais probablement sauvé :

#### 5\. Chaque action est effectuée lorsque vous la demandez, il n'y a pas de file d'attente

Je dois admettre que parfois **dans GParted** j'ai frôlé la tragédie** - mais vraiment la tragédie, pas comme cette période que, tout bien considéré, je vis encore.
La différence, cependant, réside précisément dans ce petit mot : avec **GParted**, le désastre s'est toujours produit au maximum **_presque_**, mais avec **GNOME Disks** cette fois, il a **consommé** et c'est tout. il.

Sur **GParted**, les opérations que vous commandez se retrouvent dans une **file d'attente**, qui doit être appliquée manuellement une fois que vous décidez de continuer.
Et là aussi, nous en sommes aux ** minuties **, et pourtant quelque chose comme ça pèse lourdement sur la facture finale. On peut le voir comme ceci : **dans ce cas**, il faut **faire une erreur** deux (**2**) **fois** pour faire des dégâts, alors qu'avec le programme GNOME une ( 1) une erreur suffit.

![La vue de la file d'attente des opérations sur GParted.]({{<assetsRoot >}}/Media/Partioning-Mar-2023/GParted-Queue.png)

## "Y a-t-il des dégâts ?"

Dans tous les cas, j'ai remarqué qu'**après** avoir donné l'ordre de **supprimer la partition**, elle **restait** montable et le système de fichiers était entièrement **navigable**.
Probablement, ce dont Linux avait besoin pour utiliser la partition restait en mémoire (RAM), et comme toutes les données n'étaient jamais supprimées avec une simple suppression rapide d'une partition, tout était toujours lisible.

Pour être honnête, en regardant une telle situation, je **ne me rendais même pas** compte** de la réalité, je **ne comprenais toujours pas** si mes **données** avaient été **condamnées** ou pas. ..
Interface peu claire, _Je l'ai dit_.

Alors que le sentiment de précipitation passait et cédait la place à **l'inconfort**, j'ai recherché GParted**, j'ai découvert qu'il était inclus dans le système live et je l'ai démarré.
Au lieu de la partition, je vois "espace vide"... oh **oui, c'est fait**. Mais comment se fait-il qu'il m'ait laissé **supprimer la partition** sans** m'obliger à la **démonter** au préalable ? Quelle barbarie ! GParted ne le permet pas, pour de bonnes raisons.

Pourtant, au fond, je n'ai toujours **pas accepté** qu'il soit annulé.
Je veux voir si, après un redémarrage, il disparaît définitivement.

Et c'est donc, **sans** même **s'inquiéter** de copier un lambeau de fichier - car il était tard et je devais me préparer à m'endormir - que je **redémarre**.
Oh oui, je vois l'écran noir de GRUB, et pas le démarrage du système ! ...**Tout est perdu**, ça ne sert à rien d'en faire le tour maintenant.

"_Après avoir fait les dégâts, as-tu pensé à redémarrer immédiatement sans même sauvegarder les fichiers les plus importants ?!?! Mais alors tu es un idiot certifié, deux fois, pas une fois !_"
_Ooooooooooooo_, comment oses-tu ? Comment oses-tu avoir **aussi raison** si le blog est le MIEN ??

La seule chose que nous pouvons faire maintenant est le **compte des dégâts**. Je n'ai pas perdu de données uniques et très importantes, ce que je **n'ai plus, je devrais** en théorie pouvoir **retélécharger ou reconstruire**. Parlons de :

* 40 Go de données exportées depuis mon ancien compte Google ; compte que j'avais prévu de supprimer, mais je n'avais pas fini de tout transférer et donc je pense que tout est **toujours dans le cloud**.

* Divers **fichiers** grands et petits téléchargés **à partir du Web**, peut-être certains difficiles à trouver, mais **rien de vital**.

* **Codes sources modifiés** ; nous parlons de tentatives de portage pour des plates-formes obscures que j'ai essayées et échouées, ou d'autres **expériences très oubliables**.

* **Dumps de disques** que j'ai encore chez moi (certains déjà téléchargés sur [Archive.org](https://archive.org/details/@andrigamerita)), **ou copies supplémentaires** d'autres données .

* Documents dont la **pertinence** actuelle est **nul**.


Si j'ai **oublié** quelque chose d'important dans cette liste, peut-être que ce n'était **pas important**, et nous pouvons être rassurés. Sinon je m'en souviendrais, non ? _Eh bien, me connaissant..._

## Éviter...

La **morale** de cette **mauvaise histoire** peut être condensée en :

1. Évitez les disques GNOME.
2. **Soyez prudent** lorsque vous manipulez des partitions, même si vous l'avez fait 50 fois dans le passé.
3. **Évitez**, absolument, les **disques GNOME** !

Et je termine par un **conseil**, ou plutôt une **philosophie de développement**, que tous ceux qui conçoivent des **UI** (même moi, dans mes affaires, je ne le cache pas) oublient trop souvent : [L'utilisateur est ivre](https://www.youtube.com/watch?v=r2CbbBLVaPk).

<iframe src="https://www.youtube-nocookie.com/embed/r2CbbBLVaPk" style="hauteur : calc(100vh / 16 * 9);" class="YouTube"></iframe>

Alors, salutations. Pour l'avenir, j'espère **ne pas **perdre de données** de manière stupide (pour vous et pour moi !). 👋

_**P.S :** La distribution Linux que j'ai installée cette fois est [Pop!\_OS](https://pop.system76.com/). Je voulais vraiment l'essayer, mais à 2 reprises j'ai essayé de l'installer sur le PC de bureau et cela donnait toujours une erreur. Ici, sur l'ordinateur portable, cela a fonctionné, wow, donc ce n'est pas une distribution cassée ! (**Peut-être** 👀)_

## {{% i18n notes-réfs %}}

---

1. Le système que j'avais jusqu'alors, Linux Mint, version 19.3, après 3 ans :

<dl><dt><strong>Elle est devenue obsolète :</strong></dt><dd>La version 19.3 est abandonnée et les référentiels ne reçoivent plus de nouveaux logiciels. Donc, j'aurais dû passer à la version actuelle de Mint, mais apparemment <strong>j'aurais dû quand même</strong> le faire en réinstallant <strong>à partir de zéro</strong> (sur <code class="prettyprint">apt dist-upgrade </code> il n'y a pas de nouvelles mises à jour)</dd><dt><strong>C'est cassé :</strong></dt><dd>Certaines choses (comme les pilotes vidéo cassés et l'environnement de bureau qui ne démarre qu'en mode de secours) sont définitivement de ma faute (<em>j'ai foiré</em> avec les pilotes <a href="https://en.wikipedia.org/wiki/Nvidia#:%7E:text=Nvidia " rel="noopener nofollow" target="_blank">ACCIDIA</a> ces dernières semaines), mais d'autres (Bluetooth ne fonctionne plus !?) je dirais non :/. De toute façon, <strong>quand le système est à ce point en panne, c'est plus rapide de tout réinstaller</strong>...</dd></dl>

 [↩](#fnref1)

2. Peut-être que oui, je suis un idiot, mais pas au point d'ériger volontairement les cloisons avec une structure qui m'est étrangère. A l’époque, très simplement, j’avais installé Linux Mint avec les paramètres guidés par défaut. Chaque fois que j'ai installé Linux, j'ai utilisé le partitionnement manuel, au lieu de choisir d'effacer tout le disque et de laisser le programme d'installation décider des choses, j'ai toujours créé des partitions normales. Alors... **ne me blâmez pas**, [kthx](https://en.m.wiktionary.org/wiki/kthx#:%7E:text=\(Internet%20slang\)%20Abbreviation % 20sur%20ok%2C%20merci.) ? [↩](#fnref2)
