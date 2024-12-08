+++
Title = "⚙️ internes du sitoctt"
Categories = [ "Méta" ]
Lastmod = 2024-12-08
+++

{{< noticeAutomaticTranslation it >}}



Au cours des innombrables années de son existence, le site ctt a évolué et continue d'évoluer, obtenant des fonctionnalités épiques et en général une aura de magie... et ceux qui veulent devenir comme moi voudront peut-être commencer par créer leur propre site, également en prenant le mien comme source d'inspiration.

Pour cette raison, je pense qu'il est agréable de conserver une collection détaillée des différentes spécialités techniques du site, bien illustrée ; peut-être expliquer pour qu'ils soient compréhensibles même pour ceux qui ont un peu de curiosité mais ne sont pas des experts. (Le tout serait donc utile, même pour moi, pour noter des détails très mitigés, afin de ne pas avoir à m'attarder.)

Le site ctt est en tout cas totalement gratuit et open-source ; les notes de droits d'auteur, les licences et la structure complète des sources sont décrites sur la page "[🔓️ Ouvrir Source]({{< relref "/miscellanea/Open-Source-sitoctt/" >}}_) !

_...En cours de construction..._

## Général

Le site est ce qu'on appelle un « site statique », c'est-à-dire une collection de fichiers HTML et de ressources connectées sans programme serveur backend avec logique et base de données. Cela implique une maintenance très faible et la possibilité d'héberger le site pratiquement n'importe où, même gratuitement, ainsi que de le distribuer sans trop de difficultés dans différents formats.

Dans mon cas, comme c'est désormais une pratique courante, les pages statiques du site sont compilées avec un "générateur". De mai 2022 à août 2024 j'ai gardé le site sous _staticoso_, mon générateur créé spécifiquement puis obsolète, car le code était devenu trop [_spaghetti_](https://it.wikipedia.org/wiki/Spaghetti_code) ; depuis août 2024 j'ai migré le site vers [_Hugo_](https://gohugo.io).

Dans le passé, les modèles/thèmes de site étaient très simples, non techniquement séparables du statique et créés à partir de zéro ; depuis la migration vers Hugo, un thème personnalisé est utilisé (avec de légères modifications de couleur et de mise en page) créé à partir de [_Ananke_](https://themes.gohugo.io/themes/gohugo-theme-ananke/), l'un des plus recommandés pour ceux qui veulent apporter des changements.

## Recherche

Le site ctt intègre un champ de recherche de texte, avec lequel vous pouvez accéder immédiatement à n'importe quelle autre page du site. Il est mis en œuvre de deux manières :

* **JavaScript (local)** : Au chargement de chaque page, un index est chargé (celui de la langue actuelle, puisqu'elles sont séparées pour maintenir des performances élevées) avec les métadonnées de toutes les pages du site, qui est ensuite géré par le [`site-search.js` script](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/static/res/site-search.js) et le modèle [`search-applet.html`](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/layouts/partials/search-applet.html) ; Je l'ai construit en prenant le code de recherche du thème [_Blowfish_](https://themes.gohugo.io/themes/blowfish/) pour Hugo. (L'index est en fait un fichier JavaScript qui initialise un objet JSON global, et non un fichier JSON pur, qui permet à la recherche de fonctionner même lorsque le site est parcouru à partir de fichiers locaux ; il est généré par le [template `index.searchindex .js `](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/layouts/index.searchindex.js).)
* **Retour** : Dans le cas où JavaScript ne peut pas être exécuté dans le navigateur, le champ de recherche fonctionne de manière plus classique et s'appuie sur [mon instance YaCy](https://yacy.spacc.eu.org), qu'il fonctionne exactement comme un moteur de recherche Web normal (Google, DuckDuckGo, etc...) mais indexe mieux toutes mes pages (et donc il ne représente pas seulement la beauté).

## Multilingue

La gestion de plusieurs langues pour les différentes pages du site est gérée avec des fonctionnalités intégrées à Hugo.

Presque toutes les pages et tous les articles sont automatiquement traduits de l'italien vers d'autres langues, dans mon espoir de rendre le site un peu plus utile, car il est potentiellement découvrable par davantage de personnes via les moteurs de recherche ; Je fais cela avec [un script Python créé spécialement pour cela](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/Scripts/Translate/Main.py), qui utilise _Google Translate_ via [le script/library _Translate Shell_](https://memos.octt.eu.org/m/aC95aGEzJi7DvU2teM3eos).

## Autre?

Je ne sais pas. N'espérez pas pouvoir penser à autre chose à ajouter de nulle part ; laissez plutôt un commentaire sur cette page si quelque chose vous intrigue et que vous souhaitez plus de détails, expliqués au-delà du code...