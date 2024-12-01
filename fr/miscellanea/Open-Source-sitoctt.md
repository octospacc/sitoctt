+++
Title = "🔓️ Open Source"
Categories = [ "Méta" ]
Lastmod = 2024-11-05
+++

{{< noticeAutomaticTranslation it >}}



Tout le contenu de ce site que j'ai créé (mes propres écrits, les médias originaux et la plupart du code source) est sous licence <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.it?ref=chooser-v1&title=%E2%9C%A8sitoctt%E2%9C%A8&href=https://sitoctt.octt. eu.org&creator=OctoSpacc" rel="noopener" target="_blank">"Paternité Creative Commons - Partager dans les mêmes conditions 4.0 International" (CC BY-SA 4.0) (<span class="CCIcons"><img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/CC.svg"/> <img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/BY.svg"/> <img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/SA.svg"/>)</span></a>, une licence gratuite qui favorise le partage et n'affecte pas le les droits légitimes à la culture et à la collaboration de l’humanité en général.

Cependant, il y a aussi des contenus qui ne m’appartiennent pas.  
En règle générale, si quelque chose sort de ma main, il n'y aura aucun crédit à proximité.  
Cependant, pour les objets empruntés, dans la mesure du possible, la source d'où je les ai pris et la licence de l'objet seront toujours indiquées, qu'il s'agisse du domaine public, de Creative Commons ou non spécifié.  
Attention, je laisse souvent les crédits pour les éléments HTML et CSS uniquement dans les sources de la page. Donc, au cas où, vérifiez là ce genre de crédits. Cependant, pour des éléments comme les images ou les textes, les crédits sont souvent une partie visible de la page, proche de l'élément emprunté (comme une description) ; d'autres fois, le même objet est un lien qui, si vous cliquez dessus, vous ramène à la source.

## Dépôts

Toutes les sources du site peuvent être téléchargées depuis les référentiels Git respectifs (GitLab.com) (ainsi divisés pour garder l'historique propre), dans les conditions décrites ci-dessus :

* Principal : https://gitlab.com/octtspacc/sitoctt
* Médias : https://gitlab.com/octtspacc/sitoctt-assets

Quelques miroirs mis à jour, toujours présents au cas où un _patatrac_ arriverait aux référentiels principaux :
* GitHub : https://github.com/octospacc/sitoctt, https://github.com/octospacc/sitoctt-assets
* Gitea.it : https://gitea.it/octospacc/sitoctt, https://gitea.it/octospacc/sitoctt-assets

## Structure des sources

Le référentiel secondaire sert uniquement à accumuler les fichiers multimédias intégrés au site (à la fois dans les pages et dans la mise en page), les éventuels téléchargements, etc. Il n’est pas structuré en plusieurs branches et les commits ne sont pas pertinents.

Le référentiel principal est structuré selon ces branches :

#### `sitoctt-next` (principal)

Il s'agit de la branche désormais définie par défaut, qui héberge les fichiers principaux du site, depuis qu'elle a été migrée vers le générateur de site statique Hugo :

* Sources des pages et des publications (principalement au format Markdown)
* Sources de mise en page, donc modèles HTML avec syntaxe Go et feuilles de style CSS
* Autres éléments de base de la page, tels que les scripts côté client et les petites icônes
* Script très personnalisé pour chaque phase du processus de compilation du site : obtention des dépendances, compilation des pages, synchronisation des données externes, etc...

#### `sitoctt-old` (ancien `main`)

C'était la branche principale du site avant la migration vers Hugo, lorsque celle-ci était encore gérée par mon générateur, statique.

La structure généralisée est la même qu’aujourd’hui, mais évidemment les dossiers et fichiers étaient un peu différents.

#### `traduction-cache`

Branche où je stocke les versions traduites automatiquement des différentes pages et articles du site. Ils sont stockés séparément car ce sont des fichiers qui peuvent être régénérés à tout moment, et cela n'a donc aucun sens pour eux de salir l'historique des commits réels du site. Il faut cependant les conserver, car les générer de toutes pièces à chaque compilation du site prendrait des heures...

#### `exigences-cache`

Branche que j'utilise un peu comme référentiel pour diverses dépendances de build ou d'exécution du site, car certaines sont extrêmement fragiles et d'autres sont peut-être simplement pratiques pour les sauvegarder. Mais cela n'a pas beaucoup d'importance.