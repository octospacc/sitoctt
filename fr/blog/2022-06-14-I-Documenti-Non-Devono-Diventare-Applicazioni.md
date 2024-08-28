+++
Title = "📄 Les documents ne doivent pas devenir des candidatures"
Description = "Le Web devient de plus en plus volumineux, lent et risqué. Chaque site devient une application, même si ce n'est pas la bonne chose à faire..."
Alias ​​= [
  "/Posts/2022-06-14-Documents-Not-Should-Become-Applications.html",
  "/Posts/2022-06-14-0000-Documents-ne devrait pas-devenir-applications.html",
]
Catégories = [ "Internet" ]
Dates = 2022-06-14
+++

{{< noticeAutomaticTranslation it >}}



Le Web d'aujourd'hui est incontestablement très différent de celui d'il y a 20 ans, et il évolue de plus en plus chaque année.  
Regarder les côtés positifs du progrès est toujours très facile et rassurant, et c’est pour cette raison que nous pensons rarement aux côtés sombres qui, dans de très nombreux domaines, existent. Le Web, malheureusement, en fait partie.

## Ce qui se passe?

Le Web des documents prend une tournure pire, devenant peu à peu, à toutes fins utiles, le Web des applications.  
Cependant, pour comprendre le problème, nous devons nous rappeler ce qu’était le World Wide Web à ses balbutiements. C'était une plateforme Internet d'échange d'informations sous forme d'hypertexte, c'est tout. Et que sont les hypertextes ? Quelques documents. Bien sûr, des documents très particuliers, où la lecture peut s'effectuer de manière non linéaire grâce aux liens hypertextes, et le Web en particulier a évolué pour devenir un système hypertexte avec prise en charge de textes décorés, d'éléments multimédias et d'une mise en page très avancée. . mais au fond, on parle toujours de documents.

Au tout début du Web, il n’existait que des sites dits statiques, ce qui signifie qu’ils restent toujours les mêmes (sauf s’ils sont mis à jour par ceux qui les administrent), et que les utilisateurs qui les visitent ne peuvent rien faire pour les modifier. Cette catégorie regroupe des choses comme un simple blog, le site lui-même par exemple, un site d'actualité, le site de démonstration d'une entreprise ou d'un produit, une encyclopédie... bref des choses simples de ce type.

Un peu plus tard (des jours ou des semaines, l'idée était déjà envisagée dans la toute première spécification du Web et du HTML) l'idée d'utiliser des serveurs capables de traiter les informations saisies par les utilisateurs avec des boutons et des champs de texte, d'interagir avec la base de données, et essentiellement offrir une expérience de contenu généré par l’utilisateur. Ainsi ont commencé à apparaître les forums au sens plus classique, les sites permettant de créer des sites (!) de manière plus simple (CMS), les réseaux sociaux les plus proches de nous, les webchats et, n'oublions pas, les moteurs de recherche. Ce sont les sites Web dynamiques.

À cette époque, cependant, peu importe qu'il s'agisse de sites statiques ou dynamiques, seuls les documents retournaient sur les ordinateurs de tout utilisateur qui contactait le site. Qu'il s'agisse de la page HTML elle-même, d'un fichier CSS pour styliser la page, ou de fichiers multimédias (à l'époque uniquement des photos) placés entre un bloc de texte et un autre, au navigateur, le programme qui interprète et affiche ces documents, uniquement des documents à interpréter renvoyés, pas aux programmes à exécuter.  
Ici nous sommes encore dans l'existence exclusive du Web des documents, pour le Web des applications il faudra encore attendre.

Avec ces dernières phrases, ceux qui anticipent ont déjà compris où je veux en venir, mais j'y arriverai sereinement.
À cette époque, pratiquement rien ne pouvait arriver à votre ordinateur ou à vos informations simplement en chargeant une page Web donnée, car le navigateur n'avait qu'à gérer des fichiers qui vous indiquaient comment disposer le texte à l'écran (HTML et CSS, balisage langues), ou comment disposer des pixels de couleur arbitraires sur l'écran (images).  
La seule chose à laquelle vous deviez faire confiance était le navigateur lui-même (et qu'il était à jour), et non les sites Web individuels.

## L'état actuel des choses

Puis est venu le scénario. Nous avons vu toutes sortes de choses, mais au final, seul JavaScript a survécu à ce jour et constitue la base du Web 3 pionnier (et tragique).  
Les scripts Web sont de véritables programmes qu'un navigateur peut exécuter s'il est chargé à partir d'une page. Ici, cependant, un problème évident se pose : il faut faire confiance à chaque site Web qui intègre des scripts, un problème qui est pourtant décidément complexe à résoudre.

Pour être honnête, ce n'est pas le seul problème : les scripts ralentissent très souvent les pages, surtout sur les appareils plus anciens et moins puissants, et sur certains éléments très anciens, ils ne fonctionnent pas du tout, cassant ainsi les sites qui les utilisent beaucoup. En pratique, cela signifie que les sites qui choisissent inutilement d'intégrer JavaScript sont, sur n'importe quel matériel, souvent beaucoup plus lents que ceux qui ne le font pas.  
Cependant, nous en reparlerons en détail un autre jour.

Tout d'abord, il existe des sites qui téléchargent du code obscurci, à toutes fins pratiques, des logiciels propriétaires... ceux-là, ce n'est qu'avec beaucoup de patience et suffisamment d'expérience que vous pourrez comprendre ce qu'ils font.
Quoi qu'il en soit, le simple fait qu'un programme soit gratuit ne signifie pas nécessairement qu'il est exempt de problèmes de confidentialité et de sécurité, et cela a été observé, ironiquement, notamment dans la communauté JS, où les développeurs de bibliothèques populaires se sont mobilisés. à leur manière et ont intégré des logiciels malveillants dans leurs projets.
Peu de développeurs de logiciels ouverts mettent du code nuisible aux utilisateurs dans leurs programmes, mais les 2 ou 3 sur 1 000 000 qui le font s'en sortent parfois, car personne d'autre ne prend la peine de lire le code et d'agir de manière adéquate.  
C'est un problème qui concerne tous les utilisateurs du Web, et si ceux qui en ont déjà la possibilité ne vont pas, pour des raisons évidentes de temps et de patience, lire tout le code des scripts chargés par tous les sites qu'ils visitent, imaginez que ceux qui n'en ont tout simplement pas la capacité (la grande majorité des utilisateurs) sont désespérés.

Beaucoup de gens ont des problèmes - certains sensés, d'autres non, pour ceux qui connaissent un minimum le fonctionnement d'un ordinateur moderne - pour installer des applications natives à partir de zéro, peut-être jamais entendues auparavant... autant de problèmes qui sont ignorés lorsque vous naviguez simplement sur le Web. , sans connaître les centaines de scripts qui s'exécutent au cours d'une session de navigation variée.

Comment un script, et donc un site qui l'intègre, peut-il être malveillant ?  
Les navigateurs d'aujourd'hui exécutent des scripts de sites Web dans un environnement assez sandbox, bien sûr, et à partir d'aujourd'hui, pour des raisons que je n'expliquerai pas maintenant, même des failles graves apparaissent chaque mois, si vous maintenez le navigateur à jour, la sécurité est en théorie bonne.  
Cependant, la vie privée... cela finit vraiment mal.
Il y avait une démo faite comme un jeu qui montrait personnellement pourquoi il fallait avoir peur... dommage je ne la retrouve plus, je ne me souviens plus d'où je l'ai découvert, et donc rien :(. Pour le moment , pour ceux qui veulent en savoir plus, je ne peux que lier [Device Info](https://deviceinfo.me), qui montre la plupart des données (mais pas toutes) qu'un site Web peut extrait des appareils de ceux qui le visitent, jetez également un œil à [Cover Your Tracks](https://coveryourtracks.eff.org).

Le problème ici, il faut le préciser, ne réside pas dans les web apps que l’on peut définir comme de véritables applications, qui utilisent JS pour fonctionner. Qu'il s'agisse d'une calculatrice, d'un jeu, d'un traitement de texte, d'une application de retouche photo, nous parlons toujours d'applications, qu'elles soient écrites dans un langage natif en tant qu'applications natives pour une plateforme spécifique, ou qu'elles soient écrites en JavaScript comme applications pour navigateurs Web. Toutes ces choses nécessitent que le client exécute le code, car ce sont des applications très interactives, et ce n'est pas grave. J'utilise moi-même souvent des applications qui s'exécutent dans une fenêtre de navigateur.  
Il y aurait alors une longue discussion sur le Web en tant que plateforme de développement d'applications, pour de nombreuses raisons (même les défauts), positives et négatives, mais j'en parlerai dans le futur.

Petite parenthèse : une façon d'identifier rapidement si un service sur le Web est envisageable comme un document ou nécessairement uniquement comme une application, que je trouve intuitive, est la suivante : il suffit de se demander (en supposant qu'il n'y ait pas de musique ni d'images) : « le général Le contenu de ce site aurait un sens s'il était imprimé entièrement sur papier (même s'il ne serait plus hypertexte), ou pas ?
Si la réponse est oui, nous parlons alors de quelque chose qui peut facilement rester un document, et nous devons nous méfier de quiconque prétend le contraire.  
Le contenu d’un forum a-t-il un sens s’il est imprimé dans un livre, un magazine ou un simple dépliant (objets communément considérés comme des documents, même physiques) ? Certainement, ainsi que celui d'un blog, d'un profil social, d'un salon de discussion ou de la page de résultats d'un moteur de recherche.  
Cependant, imprimer une calculatrice ou une application de traitement de texte n’a aucun sens (tout au plus, seule l’impression des données saisies dans cette application ou obtenues lors de son traitement a du sens).

## Le désastre des applications

Le vrai problème réside dans le fait que les sites Web non directement interactifs, que nous classions auparavant en statiques et dynamiques, deviennent de plus en plus des applications, mais sans aucune raison valable.  
De plus en plus fréquemment, je vois de plus en plus de sites, qui devraient être de simples documents, ne fonctionnant pas correctement sans JavaScript.
On passe des sites d'actualités où l'article ne se charge pas, aux blogs où les menus de navigation ne fonctionnent plus, aux forums où les sections de messages ne sont pas visibles, aux forums qui ne se chargent pas du tout, aux nouveaux moteurs de recherche qui ne fonctionnent absolument pas sans JS (et qui se présentent comme une alternative privée à Google, c'est dommage que Google fonctionne bien même sans exécuter de scripts propriétaires et ceux-là ne le font pas !), et même des sites de réseaux sociaux qui n'affichent un écran vide que si le JavaScript n'est pas chargé .

Ces services que j'ai répertoriés peuvent tous être classés comme des documents et, sauf cas très particuliers, comme ces sites qui cryptent et déchiffrent délibérément les données côté client pour garantir que le serveur ne puisse pas les lire (voir [PrivateBin](https:/ /privatebin .info) pour un bloc-notes, [Element](https://element.io) pour une application de messagerie), peut et doit fonctionner correctement sans script ( à au moins facultativement).

Je n'aime pas parler contre les logiciels libres et ouverts écrits pendant leur temps libre par des passionnés, qui ne gagnent peut-être même pas d'argent avec cela, mais une chose qui m'a frappé négativement est que le fléau de l'appisation a également frappé le Fediverse et ses plates-formes.  
Pour ceux qui ne connaissent pas ce nouvel univers virtuel, je dirai en bref que c'est une idée et, en pratique, un logiciel, basé sur des protocoles communs, pour garantir une compatibilité et une interopérabilité universelles, afin que ceux qui se trouvent sur la plateforme A puissent également communiquer avec ceux qui sont sur

Mastodon et Friendica, au moins pour visualiser les profils et leurs messages, ou les discussions avec tous les messages, traitent bien ceux qui aiment le Web de purs documents et, bien que leurs applications interactives ne fonctionnent pas sans JS (Mastodon totalement, Friendica partiellement) même s'ils pourrait, nous sommes déjà à un excellent compromis.  
Si une personne ne fait pas partie d'une certaine instance, mais souhaite voir du contenu connaissant le lien, elle peut le faire sans crainte, car elle n'a qu'à charger des documents statiques dans le navigateur Web de confiance.

Ensuite, il y a d'autres plates-formes, Misskey, Pleroma et Pixelfed viennent à l'esprit. Ceux-ci ici, pour vous permettre de visualiser n'importe quoi, nécessitent que vous ayez JavaScript.  
Peut-être pouvez-vous même faire confiance aux auteurs du logiciel eux-mêmes, il n'y en a que 10 habituels, mais comment pouvez-vous faire confiance lorsque vous trouvez une instance dont vous n'avez jamais entendu parler auparavant et gérée par on ne sait qui ? Réponse simple : vous ne pouvez pas ; bien qu'en théorie on puisse vérifier quels scripts l'instance charge et s'ils sont conformes à la version originale (ou, dans le cas d'un fork, si les modifications apportées sont réellement celles documentées), personne ne le fera, pour les raisons évidentes dont nous avons parlé auparavant.  
Le problème de l'autorité invérifiable du code devient clairement encore pire pour les sites Web individuels, qui ne sont pas nécessairement basés sur un logiciel fini connu et qui n'ont donc pas de véritable contrepartie pour faire une comparaison concernant l'état du code.

Sur le Fediverse, je dis que la question me frappe particulièrement car je ne m'y attendais pas.
Honnêtement, de la part des Big Tech, qui comptent sur l'espionnage des utilisateurs pour gagner de l'argent en vendant leurs données, j'attends un abandon progressif du Web des documents au profit de celui exclusivement des applications ne serait-ce que pour lire quelques paragraphes de texte (ce qui est en train de se produire , mais lentement), compte tenu du très grand potentiel de subjugation des utilisateurs.  
De la part de ceux qui développent des logiciels pour des communautés préoccupées par certains des nouveaux problèmes de confidentialité sur le Web, et qui utilisent donc des logiciels alternatifs moins populaires, je ne m'y attends absolument pas.

## Tout se terminera par une tragédie

La situation, je le crains, ne peut qu’empirer. Même si je suis plus que sûr que mes paroles et mes actions ne changeront en rien l'avenir, étant donné que je crois en ce que je dis et, incidemment, en même temps je crée également du contenu et des services pour le Web, je fais ce que je peux créer mes choses comme j'aimerais les voir partout.
Donc, pour les sites non interactifs, en suivant la technique d'[amélioration progressive](https://en.wikipedia.org/wiki/Progressive_enhancement), je m'assure d'abord que les éléments de base fonctionnent sans script, j'utilise scripts le moins possible et, si je le dois vraiment, je le fais pour des fonctions et fonctionnalités optionnelles, et j'essaie de garder le code (dans mes limites) compact et lisible.

Je fais personnellement appel à vous qui lisez ceci.  
Si vous créez des sites Web, pensez à prendre en compte ce que j'ai dit, je vous en supplie.  
Si toutefois vous naviguez uniquement, essayez peut-être de commencer à bloquer JavaScript dans votre navigateur (Chromium l'intègre comme autorisation pour les sites, dont vous pouvez définir le paramètre global sur Bloqué ; sur Firefox, vous devez installer [NoScript](https:/ / addons.mozilla.org/firefox/addon/noscript)), afin de garder JS désactivé pour les sites que vous ne connaissez pas, et d'avoir la possibilité de l'activer temporairement ou définitivement pour les domaines que vous ne connaissez pas. Cela ne fonctionne pas ou que vous connaissez déjà et en qui vous avez confiance. Non seulement vous naviguerez de manière plus sécurisée et privée, mais avec moins de ralentissements et de chargements !