+++
Titre = "Mises à jour DSpacc - Clé maudite"
Alias ​​= [
  "/Posts/MicroBlog/2022-10-16-Updates-DSpacc-Tastino-Maledetto.html",
]
Catégories = [ "MicroBlog" ]
Dates = 2022-10-16
Dernière modification = 20/10/2022
+++

{{< noticeAutomaticTranslation it >}}



Il y a un mois, dans le [post du 18 octobre](./2022-09-18- Quando-Metto-Mano-Io-Spacc.html), je disais brièvement que c'était le DSpacc, et quel nouveau bordel j'avais provoqué.  
Eh bien, cette fois, j'ai fait encore pire ; pour comprendre les proportions, il est bon de revoir un instant ce que j'avais écrit.

La carte dont je parlais est arrivée, la modification logicielle pour l'améliorer fonctionne, et j'explore encore un peu le tout. J'aurai le temps de parler de tout dans un long article, que j'écris déjà (mais je ne sais pas combien de temps cela me prendra).  
Ce qu'il est important de parler maintenant, c'est d'un problème qui est survenu... Je ne sais même pas quand exactement, mais je ne m'en suis rendu compte que maintenant : le bouton retour L posait quelques problèmes.

J'ai vu qu'appuyer sur des combinaisons de touches pour accéder aux menus du système flashcart n'avait aucun effet. Devenu méfiant, je décide de télécharger un homebrew pour tester les clés, Diagnose (qui peut être trouvé sur [GameBrew.org](https://www.gamebrew.org/wiki/Diagnose) [[ pag. archivé](https://web.archive.org/web/20220818023822/https://www.gamebrew.org/wiki/Diagnose)]), et je confirme en fait que le L Le bouton ne répond pas aux entrées.

Sur le chat de Nlhlehde, ils me conseillent de tremper le bouton dans de l'alcool pour le nettoyer, puis de lui faire un peu d'exercice - ou, si je veux le réparer correctement, de dessouder le bouton et d'en mettre un nouveau.  
À ce moment-là, j'en ai marre d'ouvrir la console, mais je constate que deux minutes d'exercice font à nouveau fonctionner le bouton comme par magie. L'état de fonctionnement ne dure en réalité que quelques minutes, et était à l'époque discutable : en moyenne, 1 clic sur 3 était enregistré.

Aujourd'hui je me décide enfin à démonter le DSpacc, pour voir si je peux faire la révision sur la clé. À ma grande surprise, je constate que cette question est en quelque sorte soulevée de côté ; l'une des nombreuses broches GND a dessoudée, tandis que la seule qui ferme l'autre côté du circuit, que l'on remarque à peine, est cassée.

![Photo macro de la clé en relief.]({{<assetsRoot >}}/Media/Misc/DSpacc-Shoulder-Macro-Front.avif)

Maintenant, on ne peut pas dire si les problèmes d'enregistrement des pressions étaient dus au bouton externe brisé, ou à des problèmes internes qui n'ont rien à voir avec le dysfonctionnement initial du bouton (et la destruction finale s'est produite suite à une pression d'une centaine de fois sur le bouton). de fois par minute pour le faire faire de l'exercice).. ce qui est sûr c'est que l'alcool ne suffit pas à réparer 😅.

Dans un premier temps, j'essaye de souder juste au dessus de la patte cassée, ce qui en soi devrait résoudre le problème ; malheureusement, le côté des broches est si court, et le bouton dans une position tellement inconfortable (puisqu'on parle d'un bouton retour), que la soudure de ma broche touche un peu à côté et court-circuite la masse. Cela fait que la touche est toujours enfoncée, et donc c'est encore pire (mon menu flashcart ne s'ouvre pas si une touche est enfoncée au démarrage !) que ce que j'avais auparavant.  
J'essaye de réparer un peu la soudure, mais non, je ne peux rien améliorer.

A ce stade, je pense à dessouder le bouton, parce que de toute façon... et ça marche bien, peut-être à cause de la taille du dispositif SMD, petit mais pas trop : la carte est restée propre.  
Il est temps de prendre un nouveau bouton parmi les nombreux que j'ai de côté, même s'il est beaucoup plus gros que celui dorsal de la DS, et de le souder.  
Ah bon ça suffit, j'en ai marre de faire encore le tour : j'essaye de souder un fil sur le contact principal, mais la soudure ne colle pas. Le PCB DSpacc est mortel, oh. J'essaye et réessaye... et à la fin la pastille métallique à souder se détache. Un classique, oserais-je dire, se termine toujours comme ça ! 😑

![Photo macro de la zone de soudure du backbone, avec le plot central détruit.]({{<assetsRoot >}}/Media/Misc/DSpacc-Shoulder-PCB-Pad-Broken.avif)

Vaut-il mieux avoir un bouton retour qui fonctionne avec beaucoup de difficulté, ou vaut-il mieux ne pas en avoir du tout ? Je ne sais pas et je ne veux pas savoir. Le fait est que maintenant je vais devoir trouver des solutions aux nombreux problèmes résultant de cette mauvaise histoire,...,,,..,

_**P.S, mise à jour 20/10/2022 :** Je vous mets une photo du bouton cassé démonté, avant de le jeter, pourquoi pas ? La microSD dans le coin agit comme une échelle pour rendre les dimensions claires._

![Photo macro du bouton détaché et démonté.]({{<assetsRoot >}}/Media/Misc/DSpacc-Shoulder-Button-Disassembled-Macro.avif)