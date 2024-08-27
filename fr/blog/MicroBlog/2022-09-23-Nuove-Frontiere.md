+++
Titre = "Nouvelles frontières"
Alias ​​= [
  "/Posts/MicroBlog/2022-09-23-Nuove-Frontiere.html",
]
Catégories = [ "MicroBlog" ]
Dates = 2022-09-23
+++

{{< noticeAutomaticTranslation it >}}



Depuis que je l'ai découvert il y a quelques jours. J'essaie ce logiciel épique qu'est [TiddlyWiki](https://tiddlywiki.com){[:MdTgtBlank:]}.  
Je l'ai d'abord trouvé en cherchant quelque chose pour organiser des notes dans un format riche, que je pourrais utiliser pour l'école, et qui était évidemment gratuit.

Il s'agit d'un logiciel wiki, pratiquement dans la même catégorie que MediaWiki (le logiciel sur lequel est basé Wikipédia), mais il présente des caractéristiques bien particulières.  
Tout d'abord, elle n'a pas besoin de serveur, c'est une application qui fonctionne localement... mais quelle absurdité (dans le bon sens) ! L'intégralité de l'application avec toutes vos données personnelles est un fichier HTML unique à édition automatique, ce qui signifie que vous pouvez copier et sécuriser un site entier en un instant. Il ne peut pas enregistrer les données seul, mais vous devez télécharger le fichier HTML modifié localement à chaque fois, ou utiliser des systèmes de synchronisation (j'utilise Git, pris en charge dans l'application).

Si j'ai commencé à l'utiliser dans le seul but limité de mes études scolaires, mais ces jours-ci, j'ai fini par commencer à l'utiliser beaucoup aussi pour créer ma soi-disant base de connaissances personnelle et publique, sur tout ce que je peux écrire au Je vole dans un format de document non linéaire très bien adapté aux petites notes rapides et interconnectées... ce qui veut dire que c'est vraiment intéressant.

Je suis un peu désolé de le dire, mais il est possible qu'une partie du temps que je consacrerais normalement au site ctt lui soit retirée, pour être consacrée au OcttKB nouvellement créé - qui, à cet égard, est ici sur <https://kb.octt .eu.org>{[:MdTgtBlank:]}.  
Autant j'aime tout ce que j'ai construit ces derniers mois, et qui continuera en fait à vivre - à la fois comme lieu d'expression de mon style de conception et comme lieu de publication de contenus élaborés et jamais fragmentés - je dois dire que j'ai trouvé un outil qui arrive à bien canaliser certaines de mes pensées, celles que le site CTTT n'arrive pas à gérer.

Je ne vais pas trop m'expliquer sur le côté technique des avantages ou inconvénients de TiddlyWiki, car on parle d'un logiciel facile à prendre en main, et absolument très compliqué à maîtriser (ça me prendra du temps !) .  
Ce que je dirai, c'est que : étant orienté vers l'agencement de l'information en petits éléments fondamentaux (les _tiddlers_), qui peuvent ensuite être connectés les uns aux autres pour construire une information élaborée - à la fois par des liens et par la transclusion (lorsque le contenu d'un un élément apparaît complètement copié au milieu d'un autre, ce qui se fait simplement en écrivant <span>`{`</span><span>`{`</span><span>`Element Name`</span><span> `}`</span><span>`}`<span>) - se prête très bien à une organisation de réflexion globale en général.

En prime, TiddlyWiki peut être utilisé comme un générateur de site statique plus traditionnel : vous pouvez écrire des éléments dans de nombreux fichiers et utiliser le programme CLI pour tout compiler dans le fichier monolithique décrit ci-dessus. Le site officiel du projet utilise cette technique, mais pour un site personnel ce n'est pas nécessaire et en fait, cela annule l'avantage qu'a TiddlyWiki, de pouvoir être utilisé comme une application de notes moderne : ouvrez, écrivez, tout est enregistré automatiquement dans le cloud.

Cependant, le programme CLI a une fonction que je trouve utile : la possibilité de générer des versions statiques du site, qui ne nécessitent pas de JavaScript pour la navigation. C'est génial, et je pense que toute personne disposant d'un TiddlyWiki public, si elle dispose des outils, devrait mettre en place un système de construction pour rendre automatiquement les pages statiques disponibles sur le serveur.