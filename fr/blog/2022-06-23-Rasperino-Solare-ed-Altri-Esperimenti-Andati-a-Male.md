+++
Title = "☀️ Rasperino Solare (et autres expériences qui ont mal tourné)"
Description = "Quand j'ai acheté un panneau solaire USB, je l'ai immédiatement testé. Il fait du bon travail, mais il faut avoir des attentes réalistes !"
Aliases = [
  "/Posts/2022-06-23-Rasperino-Solare-ed-Altri-Esperimenti-Andati-a-Male.html",
  "/Posts/2022-06-23-0000-Rasperino-Solare-ed-Altri-Esperimenti-Andati-a-Male.html",
]
Categories = [ "Rasperino", "Ecologie", "Technologie" ]
Date = 2022-06-23
+++

{{< noticeAutomaticTranslation it >}}



Il y a quelques mois, j'ai acheté en ligne un petit [panneau solaire monocristallin](https://www.amazon.it/Lixada-Pannello-Monocristallino-Caricabatterie-Cellulare/dp/B071Z1LGFV), avec des dimensions similaires à celles d'une feuille A4, pour le chiffre d'environ 20 € (sur Amazon.it les vendeurs sont tous des voleurs, sur Aliexpress cela aurait coûté un peu moins cher).

[![Capture d'écran d'une photo envoyée en chat. La photo montre le panneau dans sa boîte en carton. La légende dit "❗️ ENEL la déteste ! ⚠️ Découvrez comment la déesse Spacc a commencé le chemin lent mais rentable vers l'indépendance énergétique ! ➡️ @spacccraft".]({{<assetsRoot >}}/Media/Screenshots/ SpaccCraft-975.png )](https://t.me/SpaccCraft/975)

## Doutes électriques

Le panneau déclarait, dans le titre de l'annonce, une puissance de sortie maximale de 7,8W.  
Il dispose d'un port de sortie USB, clairement 5V maximum. Toujours dans le détail de l'annonce, mais dans les spécifications techniques, il y avait indiqué 1A en sortie 5V... ce qui ferait 5W.  
Étant donné que le panneau est déclaré de 7,8 W et que les cellules photovoltaïques de 5 V n'existent pas, mais que les cellules de 6 V existent, on suppose qu'il devrait être capable de produire un maximum théorique de 1,3 A de courant.  
La tension de sortie, cependant, comme nous l'avons dit, ne dépasse pas 5V, donc une conversion est impliquée (impossible, étant donné que le panneau lui-même est une dalle de moins de 1 mm d'épaisseur, et la partie saillante avec le port USB ne fera que 15x10x5mm. . il n'y a pas d'espace), ou une troncature de tension triviale, où l'excès d'énergie ne se traduit pas par un courant de sortie plus important, mais seulement par peu de chaleur.  
Et donc nous avons une sortie théorique maximale de 1,3A à 5V... soit 6,5W.

### Conseils de vie..

Ce préambule, apparemment inutile, est pour rappeler que les caméras de cinéma à bas prix et sans documentation (ce truc n'a même pas de manuel ni d'écriture au dos !) ne sont fiables que jusqu'à un certain point, au-delà duquel il faut résoudre les problèmes En cas de doute, il faut s'appuyer sur l'utilisation d'autres machines en porcelaine.  
Dans mon cas, un multimètre USB, à placer entre la sortie du panneau et l'entrée d'un appareil capable d'absorber suffisamment de courant. Je n'ai pas ce petit objet, et je me rends compte que je ferais bien de l'acheter (c'est pas cher quand même), car pour le moment je ne peux avoir aucune certitude sur les performances de la dalle magique en silicium.

## Tests sur le terrain

Grâce à la fois à la nécessité de tester toutes les possibilités du petit panneau et à l'envie de l'utiliser pour réduire la facture d'électricité de mes parents de 0,001% (et satisfaire une infime partie de mes besoins individuels en électricité avec une énergie totalement propre), je j'ai donc commencé à faire des tests pratiques simples sur le terrain (le balcon de ma maison).

### Le tout premier test

A vrai dire, j'ai fait le tout premier test hors de chez moi, le lendemain de la livraison du produit car, pour des raisons indépendantes, j'étais effectivement absent ce jour-là.
A cette occasion, la seule absente pour l'instant, j'ai seulement essayé de recharger la batterie de mon smartphone (6000mAh).

J'ai fait 3 tests différents, les deux premiers d'une durée d'environ 15 minutes dans les quelques heures avant midi, quand le ciel était clair, avec le panneau que je tenais à la main pour qu'il capte mieux le soleil perpendiculairement (idéal pour un monocristallin).  
J'ai d'abord essayé de charger le téléphone alors qu'il était allumé, au point mort et avec toutes les radios éteintes (mais pas en état de veille profonde d'Android), mais malheureusement, il n'y avait aucun moyen, le téléphone consommait tellement d'énergie qu'il ne pouvait pas se recharger. ne pouvait se décharger que lentement. Je ne me souviens pas très bien, car je n'ai pas pensé à enregistrer les données, mais il me semble que, sur l'application que j'utilise pour voir les statistiques de charge ([AccA](https://github.com/MatteCarra /AccA)), uniquement sur l'entrée 300mA.  
En essayant la même formule immédiatement après, mais avec le téléphone éteint, il me semble qu'en 15 minutes il n'a chargé que 2% de la batterie... il faudrait pratiquement 12h30 pour charger de 0 à 100% si c'est le cas. cas.

J'ai fait le dernier test vers 14h, alors que le ciel s'était malheureusement assombri. J'ai placé le panneau sur une surface et j'ai utilisé le téléphone normalement, en écoutant de la musique et, je pense, en utilisant des applications de messagerie en ligne. Comme je m'en doutais, il ne s'est pas rechargé, mais au moins il était presque sans tomber en panne de charge, ce qui est quand même bien compte tenu des conditions météorologiques.

![Capture d'écran d'une photo envoyée en chat. La photo montre le panneau posé sur le toit d'une voiture garée, avec un câble connecté descendant. La légende dit "Notre voiture est garée et j'ai mis le panneau solaire dessus."]({{<assetsRoot >}}/Media/Screenshots/OctoVoLTE-16754.png)

### Regardons plus loin..

Bon, disons que le tout premier test, en extérieur avec le téléphone, a été un peu un échec.  
Cependant, sans me décourager, j'ai effectué les jours suivants d'autres tests, tous depuis le balcon de ma maison, dont je vais maintenant donner un aperçu approximatif, car ils ont été effectués une seule fois et avec peu de données à disposition.

Le panneau semble pouvoir allumer mon NodeMCU même avec très peu de lumière, et je n'en doutais pas, un microcontrôleur absorbe très peu de courant, on parle de dizaines de mA en moyenne.  
Je n'ai testé aucune charge, mais il ne peut pas y en avoir autant, le maximum que vous obtenez avec le NodeMCU est de 250 mA lorsque vous allumez le WiFi.

Par une journée avec des nuages ​​​​ennuyants qui vont et viennent, un autre de mes téléphones (avec une batterie de 3100 mAh) parvient à se charger, mais avec difficulté, surtout parce que lorsque le téléphone entre ou sort de la charge (et cela arrive dans ces conditions d'éclairage), l'écran se rallume et gaspille de l'énergie.  
Lorsqu'il est éteint, c'est encore pire, car l'écran se rallume toujours avec la luminosité maximale et plus longtemps. J'ai trouvé ce dernier détail amusant... en gros, charger le téléphone lorsqu'il est éteint de cette façon est pire que le charger lorsqu'il est allumé.

Par une journée plus ou moins OK, mais quand même modeste de fin d'hiver - début de printemps, j'ai réussi, dans ce cas aussi, non pas à charger mais à télécharger un peu plus lentement, ma console Nintendo Switch de première génération (la celui avec le SoC le moins efficace), avec Ubuntu activé et le logiciel fonctionnel.

Quelque chose dont il y a peu à dire, mais qui est sans aucun doute une victoire, c'est qu'au moins je peux recharger mes powerbanks.  
J'en ai essayé 3 sur mes 4, clairement ceux de plus petite capacité se chargent plus tôt, mais en tout cas ils se remplissent tous bien sans problème. Celui dont je ne sais pas combien il coûte, la mémoire me dirait 4000mAh, il se recharge complètement en un peu plus d'une journée ensoleillée. Un 5000mAh, en peut-être un jour et demi.  
En chargeant ces petites batteries vous pourrez alors facilement charger ou alimenter des appareils qui n'ont pas assez de courant s'ils sont connectés directement au panneau, comme mes smartphones ou... un Rasperino.

### Rasperino solaire ?

Nous voici enfin au bout de tout cet ambaradan, avec mes tests sur un Raspberry Pi 3B.  
L’idée m’est venue à l’esprit après avoir malheureusement laissé le produit magique inutilisé pendant un certain temps, ne sachant pas quelles choses utiles en faire. Je veux dire, je l'ai acheté parce que c'est certainement utile d'avoir un petit truc comme ça en cas d'urgence, mais si je peux l'utiliser à bon escient en attendant, c'est encore mieux.

J'ai pensé, tout d'abord, configurer BOINC sur Raspbian, un logiciel de calcul distribué qui permet de contribuer à des projets de recherche scientifique, tout en gagnant quelques centimes par mois (rip) dans une sorte de cryptomonnaie, le [Gridcoin ](https ://gridcoin.us).  
Comme je l'ai déjà dit, le Raspino doit être alimenté par le powerbank, le panneau directement ne lui donne pas assez de courant. Il semble s'allumer, mais en réalité, il semble entrer dans le bootloop.  
Bon, je ne vais pas trop tourner autour du pot : alors que (avec la même powerbank, je pense 4000mAh) pour certaines applications à faible charge, comme [Pwnagotchi](https://pwnagotchi.ai/), le Pi parvient à rester allumé pendant des heures même avec un écran LCD rétroéclairé connecté... le CPU à 100%, effectuant des calculs complexes, consomme tellement de courant que la batterie s'aplatit en seulement 1 heure.

[![Capture d'écran d'un de mes orteils. La photo montre le panneau accroché sur mon balcon avec des crochets, avec un câble le reliant au Rasperino fixé sur le panneau lui-même. Le texte dit "#RasperinoVitaEcologica J'ai fixé le Pi à mon panneau solaire avec les élastiques en tissu des masques jetables (avant de les jeter, je détache les élastiques, les lave et les garde), et il semble avoir juste le pouvoir il doit fonctionner dans l'après-midi. Aujourd'hui, j'ai flashé la nouvelle SD avec Raspbian, pour l'instant j'ai choisi d'utiliser l'accrocco pour exécuter #BOINC, un outil informatique distribué avec lequel vous pouvez donner de la puissance de calcul à des projets scientifiques. Demain, nous testerons comment. ça devient BOINC".]({{<assetsRoot >}}/Media/Screenshots/mastodon.uno-octo-108211397314015161.png)](https://mastodon.uno/@octo/108211397314015161)

_Psssss.. si vous voulez voir d'autres photos de la dalle (3) et dans une qualité un peu plus convenable, je les mets sur Pixelfed : [pixelfed.uno/p/octo/426839557817260168](https://pixelfed.uno/ p/ octo/426839557817260168)!_

## La réalité des faits

A part cette chose, qui même si elle ne me rapporte pas d'argent en pratique serait utile car bénéfique pour la recherche scientifique, je n'ai aucune utilisation pratique en tête pour le Rasperino Pi 3 Solare. Peut-être qu'un Pi Zero serait mieux : apparemment, d'autres personnes en proie à la folie (mais mieux équipées) ont pensé à l'utiliser pour miner du Bitcoin, avec un petit panel similaire au mien ([YouTube/CbpfNU7oaws](https://invidious. snopyta .org/watch?v=CbpfNU7oaws)).  
Pour l'instant, j'utilise le petit panneau de manière sporadique pour recharger mes powerbanks, que je décharge lorsqu'il m'arrive de les utiliser pour recharger mon smartphone.

S’il y a quelque chose que j’ai appris de cette histoire, c’est que je devrais acheter ce foutu multimètre USB.  
J'aurais dû le faire il y a presque 4 mois, mais au lieu de cela, je tergiverse pour ne pas dépenser d'argent.