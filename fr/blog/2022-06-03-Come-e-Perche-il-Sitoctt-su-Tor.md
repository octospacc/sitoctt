+++
Title = "🌐️ Comment et pourquoi sitect sur Tor ?"
Description = "Peu de temps après l'ouverture du site ctt, j'en ai créé un miroir Tor. Pourquoi ? Une plus grande sécurité, une plus grande confidentialité pour ceux qui le visitent et du plaisir pour moi !"
Aliases = [
  "/Posts/2022-06-03-Come-e-Perche-il-Sitoctt-su-Tor.html",
  "/Posts/2022-06-03-0000-Comment-et-Pourquoi-le-Sitoctt-su-Tor.html",
]
Categories = [ "Internet", "Administrateur système" ]
Date = 2022-06-03
Lastmod = 2022-06-29
+++

{{< noticeAutomaticTranslation it >}}



Ces derniers jours, j'ai réglé les premières questions concernant la mise à disposition du site sur le réseau <span style='Color:#59316b;'>Tor</span>. Il y a ceux qui me traiteront d’exagéré même si j’ai eu l’idée de faire quelque chose comme ça, mais il y a peu de choses à faire.  
Si tout va bien, le service Onion reste joignable à cette adresse :
<small>~~[onmfrk2acl4xdeawfjg3nfepq7gcufolctmhiwwxpcknazus5bxzxhqd.onion](http://onmfrk2acl4xdeawfjg3nfepq7gcufolctmhiwwxpcknazus5bxzxhqd.onion){: style='Color:#a060c0;' }~~</small>
[sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion](http://sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion)[^ Nouveau domaine esthétique].

L’idée – apparemment réussie – était d’utiliser un service PaaS gratuit, Replit, pour tout faire.  
De cette façon, je n'alourdis pas davantage mon serveur inapproprié. Depuis des mois, précisément depuis le début de la mi-février 2022, j'utilise une console Switch comme serveur pour trop de choses : en plus du serveur historique SpaccCraft, j'ai ma propre instance Matrix, des robots Telegram qui sont peut-être les choses qui nécessitent le moins de ressources et les logiciels assortis pour les mineurs. Oui, la Nintendo Switch sur laquelle j'ai démarré Ubuntu.  
Je n'entrerai pas dans les détails, il vaut mieux le faire dans un article séparé, mais en bref la raison est que les SBC comme le Raspini, à ce jour, en raison des événements mondiaux actuels, ont des coûts effrayants, et la Switch était la seule faible -coût de la consommation informatique avec suffisamment de RAM (4 Go) que j'avais déjà chez moi. Il faut s'adapter.

Voilà aussi le tout premier post que j'écris sur le blog postocto, qui sait comment ça se passe et surtout qui sait quand il paraîtra, car je devrais réparer un instant mon générateur de site statique pour pouvoir gérer des pages comme celle-ci qui , au lieu de pages communes, doivent être traitées comme des sous-pages de la page "Blog" (générées automatiquement).

## Comment?

Revenons à la discussion du postoctt : avec Replit, en prenant comme base un Repl trouvé autour qui montrait comment héberger un autre type de service sur Tor, j'ai construit mon Repl qui : à chaque nouveau démarrage, télécharge localement tout le nécessaire pour compiler et déployez mon site statique (à partir de mes dépôts Git), préparez tout, et démarrez un serveur HTTP et le démon Tor, qui fait office de proxy en exposant le serveur HTTP à l'extérieur via le réseau Tor. Puis sans fin, tout au long de Git, téléchargez toutes les mises à jour de n'importe quelle partie et, si nécessaire, régénérez le site.  
Je laisse ici le lien vers un extrait de GitLab avec mes fichiers, pour tous ceux qui souhaitent faire le même service que moi pour leur propre site web, peut-être construit avec mon générateur de site statique de très mauvaise qualité (au niveau du code, si ça me dégoûte sur un niveau conceptuel ou pratique, je ne le développerais pas encore lentement) : [gitlab.com/-/snippets/2338457](https://gitlab.com/-/snippets/2338457).

Avec les services PaaS gratuits comme Replit, il y a cependant un petit problème : il y a des limites sur les temps d'exécution des logiciels. Dans le cas de cette plateforme, tout est suspendu si l'adresse web du projet ne reçoit pas de pings pendant je n'ai pas bien compris combien de minutes. S'il en reçoit plus tard, il se réveille après le temps nécessaire pour refaire les opérations de démarrage.  
Il est cependant dommage que, outre le fait que cela reviendrait à faire attendre au moins 30 secondes toute personne souhaitant visiter mon site pour que la première connexion s'établisse, c'est l'adresse HTTPS du domaine Replit qu'il faut contacter, par exemple des raisons évidentes ne sont pas l'adresse Tor. Et le fait que les gens se connectent via l'adresse HTTPS va à l'encontre de l'objectif d'avoir un site Tor (auquel je reviendrai sous peu, je le jure).

La solution serait d'utiliser, sur un ordinateur toujours allumé à la maison, un script ou un cronjob (plutôt un timer systemd, étant donné que c'est précisément à cause de systemd que les cronjobs classiques d'aujourd'hui sont cassés et fonctionnent mal) pour pinger en permanence le adresse de mon site sur Replit. Je pourrais le faire, mais j'aimerais trouver un moyen limité aux mêmes services PaaS gratuits pour résoudre le problème, car quelque chose comme ça signifierait que même ceux qui n'ont pas de serveur à la maison peuvent faire ce que j'ai fait.  
Au départ j'ai essayé avec UptimeRobot, mais cela semble être un problème, j'ai tout configuré le soir et le lendemain matin mon site était hors ligne.  
En fouillant j'ai alors trouvé plusieurs sites (appelés "pingers") qui vous invitent à saisir l'adresse de votre projet Replit pour le faire pinger en continu afin de le garder actif. J'en ai utilisé genre 3 au hasard, dont je ne me souviens même plus, et depuis le sitectt ne semble plus s'éteindre.  
Ou, peut-être, le mérite était que j'ai créé un deuxième projet Replit, qui a pour seul but de cingler mon premier sans fin (tandis que le principal cingle toujours le second). Je ne sais pas, parce que le second semble toujours s'arrêter, je ne sais pas si c'est parce qu'il n'a pas de serveur HTTP exposé, je dois enquêter.

## Pourquoi?

Sortons immédiatement l'éléphant de la pièce (qui est déjà petite) : le désir de créer un site contenant du matériel immoral à des niveaux sérieux (que je différencie du matériel illégal en soi), qui, s'il était hébergé sur le Web traditionnel, serait très facile de remonter aux propriétaires avec toutes les conséquences de l'affaire, n'est pas la seule raison sensée de vouloir utiliser Tor (ou tout autre réseau basé sur les mêmes principes techniques, mais Tor est pour le meilleur ou pour le pire le plus célèbre et utilisé).  
Ce site est également sur le Web clair sans problème, c'est-à-dire qu'il n'a aucun problème à y être.

Tor offre un fort anonymat par rapport à Internet non filtré. La raison pour laquelle cela devrait intéresser ceux qui ne trafiquent pas de contenus illicites s'explique rapidement non pas par une réponse, mais par une question : souhaiteriez-vous faire connaître ce que vous faites (y compris visiter un site Web particulier, comme mon blog) à des sociétés multimilliardaires ? qu'en retour elles ne vous donneront rien, en effet elles n'ont aucun scrupule à faire tout leur possible même à votre détriment (tracking) pour en tirer profit d'une manière ou d'une autre ?  
Comment voulez-vous que votre FAI soit informé des services Internet particuliers que vous contactez ? Ou demandez à la personne qui héberge ces services Internet de vous identifier (moi et mon FAI si c'est quelque chose hébergé chez moi, sinon le fournisseur particulier de serveurs fournis par des entreprises, comme Replit lui-même ou GitLab.com où j'héberge le site sur le Web clair) , si vous n'y gagnez rien ?  
Pour beaucoup de gens, pour une raison quelconque, ce raisonnement ne tient pas, mais peu s'en soucient et, même si je ne vais pas à certains extrêmes, je comprends les points de vue des quelques personnes qui souhaitent conserver le plus d'anonymat possible. même lorsqu'ils font des choses morales et morales en ligne. En conséquence, j'accepte et encourage l'utilisation de Tor pour accéder aux services et au contenu que je propose.

Je ne vous convainc toujours pas ? Alors écoutez ça. Tor permet par exemple aux journalistes qui vivent sous des régimes de censure totale ou partielle de rapporter la vérité, directement ou non. Ou encore, cela permet à ceux qui vivent dans ces régimes de s'informer librement et sans être influencés par la propagande gouvernementale, et de communiquer avec d'autres personnes dans d'autres parties du monde.  
Le véritable principe selon lequel il est plus facile de cacher qui vous êtes et ce que vous faites individuellement au milieu d'une foule immense, plutôt que lorsque vous êtes avec quelques autres personnes, s'applique également aux réseaux distribués : davantage de personnes les utilisent, même pour une simple navigation sur le Web, plus les utilisateurs individuels sont en sécurité. Ainsi, en utilisant Tor pour surfer sur le Web, même si vous ne vous souciez pas de l'anonymat, vous aiderez ceux qui en ont besoin.  
Aidez au moins les utilisateurs qui ne font rien de mal : les criminels qui vendent de la drogue et des armes, ou qui vendent des photos et des vidéos montrant des viols ou des actes de torture, deviennent souvent fous et finissent par négliger l'Opsec à tel point que tôt ou tard plus tard, ils se terminent (et je dirais que j'apprécie ça) plus que mal.

Un doute qui peut surgir pour les non-super-experts est de savoir pourquoi il est nécessaire de fournir également le site en tant que service Onion, étant donné que tout contenu sur l'Internet normal est toujours accessible derrière Tor, ce qui dans ce cas fonctionnera davantage. comme un proxy traditionnel. Les problèmes ici sont cependant plus subtils et sont liés à la nature de l’infrastructure Internet classique.

Je ne pense pas avoir besoin d'expliquer les problèmes liés à la transmission de données en clair via Internet : les informations peuvent non seulement être volées (ce qui pour un blog public n'est pas un gros problème), mais même modifiées et présentées comme si de rien n'était. modifié, avec une simplicité désarmante, depuis n'importe quelle partie intermédiaire de la connexion, par exemple le FAI du client ou du serveur.  
HTTPS pour les sites Web résout ce problème. Mauvais. On en parle peu, mais tout le bon fonctionnement de ces systèmes de protection dépend d’une infrastructure métaphysique globale complexe, qui présente plus de défauts qu’on ne le pense.  
En recherchant sur Whoogle, j'ai trouvé ce PDF, qui donne plus ou moins un aperçu rapide des problèmes dont souffre HTTPS : [Weakest_Link_in_the_Chain.pdf](https://www.accessnow.org/cms/assets/uploads/archive/docs / Le plus faible_lien_de_la_chaîne.pdf).  
Ce qu’il est essentiellement important de dire, c’est que tout le système actuel, basé sur les AC, repose sur la confiance dans une autorité en amont. Sans entrer dans les détails, je vous renvoie donc au PDF, le système est fragile et peut être cassé, entraînant, dans de rares cas particuliers, les mêmes problèmes que les connexions non cryptées ; en fait, peut-être même pire, car la présence du HTTPS peut nous amener à faire confiance toujours et dans tous les cas : les navigateurs Web modernes nous ont conditionnés à poser des questions uniquement lorsque nous voyons le cadenas ouvert ou un triangle de présignalisation, et non lorsque nous voyons le brillant fermé. cadenas vert.

Lorsque vous utilisez Tor pour vous connecter à des sites sur Tor, la connexion est non seulement acheminée entre encore plus de nœuds sur le réseau, mais les données sont cryptées avec un système de clé publique et privée entre le client et le serveur de service Onion : le seul le plus faible. Le point de la chaîne est le serveur lui-même, qui stocke la clé privée, il n'y a aucune autre autorité à qui faire confiance.  
Le système a des problèmes, je ne le nierai absolument pas, à commencer par le fait que si la clé privée est volée, les voleurs peuvent usurper l'identité du site et à ce moment-là, la seule chose à faire pour ceux qui le gèrent est de changer la clé, donc en changeant également de domaine, vous ne pouvez pas vous adresser à l'autorité de certification pour révoquer le certificat. C’est ainsi que fonctionne un système basé à 100 % sur les mathématiques et à 0 % sur la confiance.  
A vrai dire, je commettrais donc une erreur en utilisant la machine d'un autre pour héberger le site Tor... Greve. Bien.

## En conclusion

Tor n'est en aucun cas parfait : il présente différents types de défauts, basés généralement sur la désanonymisation des utilisateurs car c'est ce qui intéresse les agences 3 lettres, mais parlons-en clairement : c'est un pas en avant vers plus de protection, et c'est certainement un énorme pas en avant vers la sécurité des données, de manière à garantir que la communication entre client et serveur est aussi sécurisée que le serveur et le client, sans se soucier des détails introduits par un tiers.

Le fait que Tor soit soutenu financièrement au moins en partie par le gouvernement américain, sans entrer dans trop de détails, comporte peut-être de profondes implications dangereuses. C'est pourquoi je souhaite, plus ou moins prochainement, donner leur chance à des services similaires à Tor mais différents de celui-ci. Lokinet m'inspire, à vrai dire, je pense que ce sera le premier réseau alternatif que j'essaierai.

## {{% i18n notes-réfs %}}

[^Nouveau domaine esthétique] : **Mise à jour 2022-06-29** : J'ai changé le domaine pour des raisons esthétiques pour ce nouveau ! Informations supplémentaires (mais toujours limitées) sur [article PicoBlog d'aujourd'hui] (../PicoBlog.html#-2022-06-29-Minare-domini-Tor).
