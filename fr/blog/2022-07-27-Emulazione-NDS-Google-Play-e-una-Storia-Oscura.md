+++
Title = "👾 Émulation NDS, Google Play et un sombre historique"
Description = "Ce qui a commencé comme une recherche d'un émulateur NDS qui fonctionnait sur mon Android, a rapidement révélé des vérités et des événements absurdes..."
Aliases = [
  "/Posts/2022-07-27-Emulazione-NDS-Google-Play-e-una-Storia-Oscura.html",
  "/Posts/2022-07-27-0000-Emulazione-NDS-Google-Play-e-una-Storia-Oscura.html",
]
Featured_Image = "@/Media/Android-NDS-Emulation/ACWW-on-Androids.avif"
Date = 2022-07-27
Lastmod = 2022-07-29
Categories = [ "Technologie", "Jeux", "Mobile" ]
+++

{{< noticeAutomaticTranslation it >}}



La Nintendo DS. Assez, il n'est pas nécessaire de dire autre chose ; après tout, entre _connaisseurs_, on se comprend.
Une console qui, il y a 15 ans, a su innover sur le marché avec le même esprit avec lequel la Gameboy innovait à son époque. Une console dont les exclusivités restent, encore aujourd'hui, des perles intemporelles.

Autant j'aimerais chanter des louanges sans fin à la DS, autant aujourd'hui je suis ici pour vous parler d'autre chose.
Aujourd'hui je vous parle d'émulation, et d'un domaine spécifique de la scène d'émulation **NDS : celle d'Android**.

## L'émulation en général

De nombreuses consoles, au cours de leurs années de vie et même après, sont [inversées](https://it.wikipedia.org/wiki/Reverse_engineering) par des personnes passionnées et compétentes qui souhaitent comprendre comment elles fonctionnent, et ensuite peut-être créer des émulateurs. , c’est à dire un logiciel qui réplique le fonctionnement de la console sur une machine complètement différente.
La Nintendo DS, bien entendu, ne fait pas exception.

En règle générale, le développement d'émulateurs se déroule selon l'une des deux philosophies suivantes :

- Créer quelque chose de rapide, qui fonctionne, et qui permette immédiatement au plus grand nombre d'utiliser l'émulateur comme alternative pratique à la console d'origine ;
- Créer quelque chose de précis et d'aussi proche techniquement que possible de la console originale, afin de la conserver sous une forme métaphysique pour le futur, en mettant la vitesse au second plan, ce qui ne peut être obtenu qu'en faisant tourner l'émulateur sur une machine suffisamment puissante, même si c'est aussi futur.

### Émulation "Ici et maintenant"

Si la deuxième philosophie est sans doute la plus noble, celle du « ici et maintenant » est également très importante : elle permet à ceux qui n'ont pas les moyens de s'offrir la console d'origine ou qui l'ont réduite à [spacc](https://wikispacc) de jouer. miraheze.org/wiki/Spacc), facilite les choses pour ceux qui souhaitent développer leurs jeux et améliore la vie des joueurs qui, avec un émulateur, peuvent profiter de nombreuses commodités jamais vues auparavant.

En ce moment, je fais partie de ceux qui jouent sur des émulateurs même si je possède la console d'origine.
J'ai une Nintendo 3DS XL, qui est rétrocompatible avec les jeux DS, mais mal, au point que pour moi c'est pire que de jouer sur téléphone : les jeux mettent beaucoup de temps à démarrer, ils s'adaptent mal à l'écran, et c'est un appareil supplémentaire (plus gros et plus lourd que mon smartphone) à transporter.

## L'état de l'émulation NDS

L'émulation DS sur les PC grand public est actuellement en très bon état.
Le meilleur émulateur à ce jour est sans aucun doute [melonDS](https://melonds.kuribo64.net) : gratuit, prend en charge le jeu en ligne, est assez rapide et précis. Il ne fonctionne pas très bien sur les PC d'il y a peut-être 10 ans mais, dans cette situation, si vous vous contentez de jouer hors ligne, vous pouvez toujours compter sur l'excellent [DeSmuME](https://desmume.org) (qui est apparemment de retour en développement depuis quelques mois ?!).

Le simple fait que j’écrive cet article devrait cependant vous faire sentir le trouble ; des problèmes qui, en fait, existent.
Alors que sur PC on peut dire que tout va bien, **sur mobile la situation n'est pas rose du tout**.
De manière générale, sur les appareils embarqués bas de gamme (pas seulement les smartphones, même les ordinateurs monocarte), les deux émulateurs que je viens de citer ne fonctionnent pas très bien.

### Mon expérience mobile

Sur mon téléphone actuel, avec le système d'exploitation Android 10 (variante d'origine du fabricant Xiaomi, MIUI 12) et SoC [Snapdragon 662](https://en.wikichip.org/wiki/qualcomm/snapdragon_600/662), ni melonDS ni DeSmuME, ils font fonctionner les jeux de manière satisfaisante.
Parmi les deux émulateurs, j'ai essayé à la fois les ports Android natifs non officiels respectifs et les cœurs [Libretro](https://www.libretro.com) disponibles (déjà présents ou téléchargeables dans la dernière version des applications respectives ci-dessous) pour le [RetroArch ](https://www.retroarch.com) et [Lemuroid](https://github.com/Swordfish90/Lemuroid).

Alors, avant de continuer, je devrais peut-être apporter une précision.
Les tests que j'ai effectués ces derniers jours ont été réalisés avec un seul jeu, à savoir _Animal Crossing Wild World_, pour une raison très simple : pour le moment, je suis intéressé à jouer à celui-ci sur mon smartphone, et c'est tout. Donc, la seule chose qui m'importe, c'est que ce jeu fonctionne parfaitement.
Déjà avec cela, j'entends crier sur le manque de caractère scientifique de mes tests, qui sont en fait limités dans leur portée ; qu'ils soient satisfaits, dis-je, **c'est un blog personnel, pas un laboratoire de recherche** 🥱️.
En tout cas, j'ai essayé tous ces émulateurs plusieurs fois dans le passé avec d'autres jeux également, et mes avis d'aujourd'hui sont plus ou moins conformes à mes avis passés - mais je vais maintenant entrer dans les détails.

### Tests variés

En gardant à l'esprit que ces tests ont été effectués simplement en examinant les performances de l'écran titre _Animal Crossing Wild World_ (qui nécessite à peu près les mêmes performances que celles requises par le jeu fonctionnant dans l'overworld) :

• APK compilé le 13 novembre 2021 du portage non officiel de [melonDS pour Android](https://github.com/rafaelvcaetano/melonDS-android) :
: Il fonctionne pratiquement comme la version précédente il y a environ un an, juillet 2021, période au cours de laquelle j'ai reçu le nouveau téléphone ;

<méta>

• Core Libretro de melonDS, un peu plus mis à jour :
: Fonctionne légèrement mieux que le port natif, mais pas tout à fait parfait ;

<méta>

• APK compilé le 27 août 2017 du fork mort de [nds4droid par tangalbert919](https://github.com/tangalbert919/nds4droid), dont le projet amont (également mort) est un portage Android non officiel de DeSmuME :
: Peut-être qu'avec frameskip à 3, il fonctionne un peu mieux que l'APK, mais un peu moins bien que le noyau Libretro, de melonDS ;

<méta>

• Core Libretro de DeSmuME :
: Il fonctionne essentiellement comme la dernière version de la branche nds4droid originale (2016) (oui, j'ai aussi testé cet APK juste pour, mais je ne le dirai pas autrement que parce que ce n'est pas pertinent) ; Pire que tout ce qu'on a vu ci-dessus.

En bonus, je mentionne également cet autre émulateur que j'ai découvert par hasard en cherchant des trucs : [NooDS](https://github.com/Hydr8gon/NooDS). Le but est d'être un émulateur rapide, mais pour le moment, d'après ce que j'ai vu et d'après ce que dit le README, nous n'en sommes pas encore là.
Cela fonctionne plus ou moins comme l’APK melonDS que j’ai mentionné jusqu’à présent. J'espère que le développement se poursuivra et réussira, cependant, le projet promet.

Alors, est-ce la fin de l'histoire ? Dois-je me contenter d'émuler un jeu ralenti d'au moins 7 à 10 % sur melonDS ? Eh bien, en fait, non… _peut-être_.

## Une seule solution

Dans la scène de l'émulation Android NDS, tous les émulateurs dont j'ai parlé jusqu'à présent sont en fait les moins connus (bien que melonDS ait gagné du terrain ces derniers temps). Il en existe un bien plus connu, que quiconque a essayé d'émuler la DS sur Android au moins une fois connaît au moins de nom.
Parlons donc un peu de [Drastic](https://play.google.com/store/apps/details?id=com.dsemu.drastic).

Drastic est l'émulateur Nintendo DS le plus rapide pour Android. Ce n'est pas précis du tout, mais il exécute tous les jeux sans problèmes majeurs, et déjà sur les smartphones bas de gamme d'il y a 5 ans, il peut exécuter pratiquement n'importe quel jeu 2D et 3D à **pleine vitesse** ;
Sur des appareils encore plus anciens, cela peut paraître un peu incertain, mais cela reste un véritable miracle. Par exemple, regardez les vidéos sous "_[2019-09-17 15:16] Divers tests avec le Galaxy Player_" sur ma page [Archives MicroBlog de septembre 2019](./MicroBlog-Archive/2019/09/index . html). Il est absolument absurde que cet appareil, que j'ai acheté pour seulement 90 euros il y a 9 ans, soit déjà capable d'imiter la DS ; et encore moins faire fonctionner un jeu comme Super Mario 64 DS à merveille.

Où est le piège ? Eh eh, par où commencer ?

### Problèmes à venir

Tout d'abord, Drastic est un **logiciel propriétaire** ; Cela seul, pour moi, est mauvais.
Même si malheureusement je n'y arrive pas à 100%, j'aimerais utiliser autant de logiciels libres que possible. Puisque cet émulateur est le seul à être un ruban, il n’y aurait pas de véritable alternative.
Je garde l'émulateur propriétaire et tant pis, ce n'est pas la fin du monde, sachant aussi que les jeux que je souhaite émuler sont eux-mêmes propriétaires, et que même la console d'origine (dans mon cas, avec la 3DS, pire encore, car il dispose d'un système d'exploitation complet plutôt que d'un simple BIOS) est propriétaire.

Le véritable obstacle sérieux réside ici dans le fait que Drastic intègre un **DRM**, c'est-à-dire un système de gestion numérique des restrictions.
En théorie, cela signifierait : si vous payez pour le programme, vous ne pouvez pas l'utiliser à moins de trouver ou de créer un crack.
C'est du moins l'idée théorique du DRM en général. En pratique cependant, et la [FAQ Defective by Design](https://www.defectivebydesign.org/faq) (une campagne anti-DRM) l'explique certainement mieux que moi, **DRM fait** plus** de mal* * aux consommateurs qu'aux producteurs.

Dans ce cas précis, quel est le problème du DRM de Drastic, outre le fait que, de par sa conception, il refuse l'accès à un programme utile à ceux qui ne peuvent pas dépenser 4,49 € ?
C'est problématique car cela repose sur les achats sur Google Play ; cela signifie que ceux qui n'ont pas les services Google Play et Google Play Store sur leur appareil - comme moi qui, pour des raisons de confidentialité et de performances, les ai toujours supprimés du mien depuis des années - même s'ils effectuent peut-être l'achat sur le site Google Play et installez l'application en vous connectant avec le compte Google sur [Aurora Store](https://f-droid.org/packages/com.aurora.store), vous ne pourrez pas utiliser l'application achetée, car elle ne le fera pas. avoir la possibilité de vérifier l'achat sur l'appareil.

### La tradition appikapposa

Bref, de toute façon, la seule solution possible pour utiliser réellement le petit programme est de disposer d'un patch.
Dans le passé, à la fois lorsque je ne pouvais pas me permettre Drastic et lorsque je ne pouvais plus avoir Google Play, la recherche de l'APK corrigé sur le Web - effectuée à chaque fois que je mettais à jour Android ou changeais d'appareil - était en soi le jeu ennuyeux qui il a précédé le jeu le plus joli (celui émulé dans l'application de travail).
Il était souvent nécessaire de chercher un nouvel APK, à la fois parce que le DRM de Drastic a toujours été stupide et que les cracks cessaient souvent de fonctionner, et parce que la partie interactive de l'application était et est écrite avec les pieds : elle utilise les API du système de manière étrange, ce qui A chaque nouvelle version d'Android, Google casse, et casse donc l'application.

Une version de Drastic que j'utilisais sur mon ancien téléphone avec Android 7, en fait, ne fonctionne pas sur mon actuel : le sélecteur de fichiers ne voit tout simplement pas les fichiers et dossiers dans la mémoire de stockage. Même une vieille astuce, utiliser un gestionnaire de fichiers externe pour ouvrir une ROM dans l'application d'émulation, ne fonctionne plus sur Android 10 : l'application plante.
Je me retrouve donc obligé de rechercher la version crackée la plus mise à jour.
Je l'ai consulté l'autre jour et j'ai apparemment téléchargé quelque chose qui fonctionnait. C'est dommage que - et c'est de ce DRM merdique dont je parlais, également d'après ce que rapportent les gens qui, sur le forum officiel de Drastic, demandent de l'aide bien qu'ils aient piraté le programme (il faut du courage oh, une médaille pour ces héros intrépides ) - après avoir démarré un jeu une ou deux fois, chaque fois que l'application se ferme devant vous (c'est vrai, elle ne plante pas, elle se ferme, car le message d'erreur Android ne s'affiche pas).

À ce stade, la situation semble vraiment mauvaise. Ce qu'il faut faire?

## Que cache Google Play ?

Je me souviens que sur le Play Store lui-même - et j'y reviendrai à la fin - vous pouvez trouver une application gratuite, [Free DS Emulator - For Android](https://play.google.com/ store/apps/details ?id=com.cpu.free.dsemulatorv6). Je l'avais essayé dans le passé et, étonnamment, il exécutait des jeux comme Drastic.
Comment est-ce possible ? Alors, existe-t-il un autre émulateur rapide pour Android ? Absolument pas, car cette application **est drastique**.
Bien sûr, c'est Drastic qui a subi quelques changements substantiels, dont, outre la suppression des DRM : un rebranding total, la restructuration des menus, l'ajout de publicités invasives, la réécriture du sélecteur de fichiers (qui désormais au moins fonctionne, mais c'est très approximatif) et, pour une raison absurde, la suppression de certains paramètres d'émulation ; mais cela reste techniquement drastique.
Nous parlons donc d'une véritable **copie non autorisée** du célèbre émulateur, **créée dans le seul but de profiter du travail des autres** grâce aux publicités (qui, rendons à César ce qui mérite, en l'application Drastic est originale, du moins il n'y en a pas) - des publicités que je ne verrais pas de toute façon, car j'ai [Adaway](https://adaway.org) installé et je bloque toujours l'accès Internet aux applications propriétaires.
La seule chose qui me surprend, et pas mal, c'est que j'ai trouvé cette **application illégale sur la boutique Google**.

Cependant, les créateurs de l’application ont déployé beaucoup d’efforts pour supprimer toute référence à Drastic. Ils ont _presque_ réussi.
Le fameux nom n'apparaît jamais dans le programme, mais une décompilation du fichier APK via [apktool](https://ibotpeaches.github.io/Apktool), puis une recherche dans tous les fichiers extraits (avec `grep -iR Drastic * ` ) de la chaîne "Drastic", montre que le nom de l'application dont le suspect a volé le code est présent 2 fois au total, dans 2 fichiers différents. Justement, voici la confirmation, au cas où il y aurait des doutes sur la nature de cette candidature.

![Capture d'écran de la commande grep ci-dessus.]({{<assetsRoot >}}/Media/NDS-Android-Emulation/Free-DS-Emulator-Grep-Drastic.avif)

### Nouvelle recherche

Que puis-je dire ? Cette application fonctionne et reste une excellente solution, même si elle est légèrement pire que le Drastic original.
Sauf qu'à un moment donné, je me dis : est-il possible que ce soit le seul fork _illégitime_ de Drastic trouvé sur le Play Store ?
Par conséquent, j'ouvre Aurora Store et commence à chercher, en espérant trouver mieux. Hormis les différents rebrands de nds4droid - ceux-là aussi n'existent que pour permettre à ceux qui les mettent en ligne de bénéficier de la publicité, étant donné que l'application officielle est déjà sur le Play Store, gratuite et sans conneries - quelques autres éléments de la liste attirent mon attention Attention.

Je télécharge 2 applications en particulier, très similaires mais avec des noms et des couleurs différents.
Les captures d'écran sur les pages de l'application sentent les arnaques à un kilomètre et demi, elles ressemblent à ces applications que vous trouvez sur Aptoide ou d'autres magasins alternatifs lorsque vous recherchez des programmes piratés. Ces applications qui : si tout se passe bien, ne font rien d'autre que d'afficher des dizaines de publicités à l'ouverture ; si ça tourne mal, ce sont des logiciels malveillants, sans détour.

Les deux, lorsque je les ouvre, me présentent un bouton "Play" qui, une fois enfoncé, démarre l'installation d'un APK (je pense patché) de Drastic (!!!).
Vous avez bien compris : cette **application**, **venant du Play Store**, **contient** dans son package **un** fichier APK (ne le téléchargez même pas sur Internet !), * *craqué**, depuis une autre application. L'un des deux intègre également, entre autres, la ROM piratée d'un jeu DS dont je n'ai jamais entendu parler auparavant : _Zoo Quest Puzzle Fun_. Comme c'est gentil, quel beau cadeau, non seulement l'émulateur gratuit mais aussi le jeu gratuit. Il semble que nous soyons sur d'étranges magasins d'applications, mais à la place, nous sommes sur Google Play.

![Capture d'écran des pages Google Play des 2 applications côte à côte et capture d'écran de la liste des fichiers portant atteinte aux droits d'auteur dans l'un des deux APK.]({{<assetsRoot >}}/Media/Emulation-NDS-Android /Adware-Emulator -Installers.avif)

Pour les sceptiques, je ne vous renvoie pas seulement à <a href="https://mastodon.uno/@octo/108709092014240395" target="_blank" rel="noopener">cette vidéo</a> dont j'ai enregistré quelques il y a quelques jours , mais je vous invite à télécharger les applications en question (et, peut-être, à _bloquer l'accès au réseau ou à désactiver la connexion Internet_ avant de les démarrer) et à tout voir par vous-même : [Green Emu NDS](https://play.google .com/store/apps/details?id=com.nud.ndsemu), [L'émeu FrieNDS](https://play.google.com/store/apps/details?id=com.blackversion.citra_platinum).
Cependant, cette découverte n'a pas été utile : les goodies offerts par ces applications ont les mêmes problèmes que les APK Drastic trouvés sur le Web.

### Enfin..

Lors de ma visite au magasin, enfin, je vois encore une autre application qui sent le Drastic renommé, je ne sais pas pourquoi, peut-être à cause de la disposition des boutons dans les captures d'écran : [vDS](https://play. google.com/store/apps/details?id=com.icorewwwi.vDS). Il coûte un bon 1,29 € mais, heureusement, après moins de 10 secondes de recherche, j'ai déjà trouvé l'APK rechargé par d'autres personnes sur le Web et je l'ai installé.
En l'ouvrant, je confirme mes soupçons : le menu principal est identique à celui de Drastic, à l'exception des couleurs modifiées. Tous les autres menus sont également identiques, ainsi que le moteur d'émulation. Comme si cela ne suffisait pas, le dossier dans lequel il enregistre les données est exactement le même que celui de Drastic (`/sdcard/Drastic` !). Ils n'ont même pas essayé de cacher le vol, ces gars-là !

![Menus d'accueil Drastic et vDS, côte à côte pour comparaison.]({{<assetsRoot >}}/Media/Android-NDS-Emulation/Drastic-VS-vDS-Main-Menu.avif)

Quoi qu'il en soit, oui, l'émulateur fonctionne, il ouvre les fichiers et ne fait pas la pêche à la traîne en vous fermant la face. Je l'utilise depuis 3 jours maintenant et je n'ai rien à redire.

Donc l'histoire, du moins pour moi, s'est bien terminée... mais **je pourrais ajouter quelque chose**.

## Google, putain.

La [Politique des développeurs de Google Play](https://play.google.com/about/developer-content-policy) interdit catégoriquement les applications qui, comme celles que j'ai mentionnées, violent les droits d'auteur. Pourtant, ces 4 qui volent littéralement tout le code d’une autre application, propriétaire et vendue contre rémunération, sont tous toujours là. Certains depuis des mois, d’autres depuis des années, mais ils sont là.
Techniquement, même les applications qui intègrent directement et immédiatement des applications installables dans le seul but d'être à toutes fins utiles des "installateurs packagés", comme ces 2 applications spécifiques, seraient contraires aux règles de Google Play, car elles seraient considérées comme une application alternative. store~~ violerait des règles spécifiques concernant l'utilisation du programme d'installation du package Android par les applications.[^ APK dans les applications]

Mais dans tout cela, **Que fait Google ?** Que fait Google lorsque ceux qui enfreignent les règles ne sont pas des applications très connues qui en même temps rapportent de l'argent à Google ?
**Il s'en fout vraiment.** Je pensais que personne n'avait essayé de signaler ces applications à Google pour suppression, mais en fait, quelqu'un l'a fait... et n'a rien obtenu. J'ai essayé aussi mais, au bout de 3 jours, tout est toujours sur le store et je n'ai même pas reçu de réponse par email de Google.

Et c’est précisément ainsi qu’avec cette histoire, nous reconfirmons aujourd’hui deux faits importants.

## Qu'avons-nous appris ?

1. **DRM s'avère**, encore une fois, non seulement comme inutile (évitable, étant donné que je jouerais désormais avec une version modifiée de Drastic sans le DRM supprimé), mais surtout comme **nuisible** (étant donné que , même si j'achetais Drastic selon les règles, je ne pourrais toujours pas l'utiliser sur mes appareils) ;
En général, les programmes qui utilisent des DRM, c'est-à-dire des logiciels propriétaires qui ne garantissent même pas "[liberté](https://www.gnu.org/philosophy/free-sw.it.html) 0" (pouvoir exécuter le logiciel comme vous le souhaitez), ils s'avèrent peu fiables. Il vaut mieux toujours privilégier les logiciels sans DRM et, lorsque cela est possible, totalement gratuits et communautaires.

2. **Google**, comme trop d'autres multinationales, **ne mérite pas la moindre confiance**. Il a des déchets dans son magasin et il s'en fiche délibérément, même s'il dispose en théorie de systèmes automatiques pour contrôler les marsitis qui, entre autres, [font souvent des victimes innocentes](https://www.ghisler.ch/board/ viewtopic.php?t=76643).
Avant l'arrivée des fanboys : non, d'accord, l'App Store d'Apple est un peu mieux loti que le Google Play Store - également parce que les frais de publication de quelque chose s'élèvent à une somme énorme de [99 $ par an]( https://developer.apple .com/it/support/enrollment), au lieu des [25 $ uniques](https://support.google.com/googleplay/android-developer/answer/6112435?hl=it# zippy=%2Cstep-pay -registration-fee%2Cstep-pay-the-registration-fee) de Google - mais même là, ils lancent occasionnellement des applications douteuses, souvent prédatrices pour les utilisateurs. Au moins, cependant, Google considère l'autorisation de l'installation d'applications provenant de sources non officielles comme un élément standard de son système d'exploitation, tandis qu'Apple met activement des bâtons dans les roues du chargement latéral parce que « c'est pour la sécurité des utilisateurs » ;
De manière générale, il faut se méfier des pères maîtres, et préférer les pages web des développeurs eux-mêmes pour télécharger les applications, ou des magasins comme [F-Droid](https://f-droid.org).

## J'ai un petit cadeau..!

Et enfin, je peux dire que j'ai terminé. Je vous laisse avec un **petit cadeau** : <a href="https://archive.org/details/Emulation-Archive" target="_blank" rel="noopener">archive.org/details/Emulation- Archiver< /a>.
Sur cette page Archive.org que j'ai créée, j'ai mis quelques éléments.
Tout d’abord, l’APK vDS, qui ne fonctionne cependant qu’à partir d’Android 4.1 ; Pour cette raison, j'ai également mis 2 APK corrigés de Drastic vero, un d'il y a peut-être 3 ans et un encore plus ancien, qui fonctionnent à la place à partir d'Android 2.3 _up_ ("up" signifiant : jusqu'à ce que le problème du sélecteur de fichier cassé n'apparaisse pas, ce que je crois est jusqu'à Android 5, y compris, sur de nombreux appareils). **Tout le monde devrait pouvoir jouer !**
Dans l'archive il y a aussi d'autres émulateurs dispersés, même gratuits, dont j'ai cependant archivé le bon code pour le conserver.

---

Merci d'avoir lu. Je vous invite à suivre le blog, même si dans tous les prochains articles il n'y aura pas de fichiers binaires gratuits 😁 !
**P.S.** : À quel point tous mes androïdes qui exécutent _ACWW_ ensemble sont-ils mignons ? Je vous laisse la photo, juste pour.

![Photos de 3 de mes appareils Android de poche, montrant l'écran titre d'Animal Crossing Wild World.]({{<assetsRoot >}}/Media/NDS-Android-Emulation/ACWW-on-Androids.avif)

## {{% i18n notes-réfs %}}

[^ APK dans les applications] : **Mise à jour 2022-07-29** : J'ai corrigé cette partie car je me suis souvenu que des applications comme celle-ci violaient les règles car elles "compteraient comme des magasins d'applications alternatifs", mais en réalité je peux' Je ne vérifie pas le quoi. Cependant, j'ai trouvé cette page d'aide obscure pour les développeurs, qui indique clairement à quelles fins les applications peuvent appeler le programme d'installation du package système d'Android : <https://support.google.com/googleplay/android-developer/answer/ 12085295?hl=en#zippy =%2Utilisations-autorisées-des-packages-d'installation-de-demande%2Cautorisation-invalide>. L’objectif pratique de ces applications, à savoir être des installateurs triviaux, ne serait techniquement pas acceptable.
