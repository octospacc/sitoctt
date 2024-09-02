+++
Title = "🐕u200d🦺 Epicyon, plateforme Fediverse d'une durée de 2 jours"
Date = 2022-12-26
Downsync = "/it/blog/Epicyon-Piattaforma-del-Fediverso-Durata-2-Giorni.html"
Aliases = [ "/Posts/2022-12-26-Epicyon-Piattaforma-del-Fediverso-Durata-2-Giorni.html" ]
Description = "J'ai essayé une certaine plateforme du Fediverse. De belles promesses de simplicité et de légèreté, mais au bout de seulement 3 jours j'ai dû arrêter !"
Featured_Image = "@/Media/Epicyon-Dec-2022/Featured-LCD.png"
Categories = [ "Internet" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Généré automatiquement par ListedDownsync.js. Ne modifiez pas (sauf si vous définissez également "% Downsync = False") - cela serait écrasé. -->

<p>Maintenant, nous le savons, plus le temps passe, plus je finis par <strong>explorer</strong> des détails toujours plus infimes du <strong>Fediverse</strong>.<br>
Aujourd'hui je vais vous parler un peu d'une <strong>plateforme</strong> de ce monde assez <strong>inconnue</strong>, et qui avait de bons locaux, mais qui s'est avérée être un trou dans l'eau : <strong>Épicyon</strong> strong>.<br>
Mais avant de commencer, voyons dans quelle <strong>situation désespérée</strong> je me suis retrouvé.</p>



<p>Il y a 5 semaines, j'avais enfin installé mon instance de Misskey, jusqu'à présent une plateforme de <strong>microblogging</strong> très respectable dans le panorama <strong>ActivityPub</strong>, qui gagne lentement de plus en plus de place dans utilisateurs récents.<br>
Une des raisons pour laquelle Misskey grandit est certainement qu'il est <strong>plus léger</strong> que Mastodon, et c'est aussi pour cela que j'ai initialement préféré son installation. Hélas, le destin a <strong>toujours</strong> voulu me maltraiter, décidant de laisser tout se terminer par un <strong>gros fiasco</strong> (avec un petit fiasco d'abord).<br>
Sans entrer dans trop de détails - tous ceux qui veulent savoir peuvent lire mes plaintes concernant Mastodon à l'époque de <a href="https://mastodon.uno/@octo/109439207514394158" rel="noopener nofollow" target= "_blank ">Jeudi 1</a> et <a href="https://mastodon.uno/@octo/109508472717947364" rel="noopener nofollow" target="_blank">Mardi 13</a> <small> (ce n'est clairement pas une coïncidence...)</small> (mais la bonne discussion a commencé <a href="https://mastodon.uno/@octo/109518037875867744" rel="noopener nofollow" target="_blank"> 2 jours après</a>) de ce mois de décembre, ou attendez un article que <em>peut-être</em> j'écrirai - du jour fatidique jusqu'au 19 décembre, j'étais à nouveau sans instance <em>ma ma mienne< /em >. Encore une fois <strong>sans pouvoir</strong>, puisque mon <strong>royaume</strong> a été réduit <strong>en cendres</strong>.</p>

<p>Après toute cette semaine, au cours de laquelle j'ai essayé et réessayé de remettre mon serveur en marche, <strong>échouant</strong> lamentablement, <strong>j'ai clairement compris</strong> que c'était <strong> nécessaire</strong> > une reconfiguration à partir de zéro, de préférence avec un <strong>logiciel plus léger</strong> que Misskey.<br>
C'est à ce moment-là que je me suis dit "oui, essayons cet <strong>Epicyon</strong> ; qu'est-ce qui pourrait bien se passer ?". Eh eh, quoi...</p>



<h2>Un regard sur Epicyon</h2>

<p><a href="https://epicyon.net" rel="noopener nofollow" target="_blank">Epicyon</a> Je l'ai découvert il y a des semaines, totalement par hasard, alors que je cherchais quelque chose, Je ne me souviens plus quoi, sur le Web.</p>

<p>Cette liste de <strong>plus</strong> qui apparaît sur la page principale du site attire immédiatement mon attention : une pile technologique qui n'est pas tape-à-l'oeil ou utilisée uniquement parce qu'elle est tendance, avec <strong>peu de complexité </strong> strong> côté serveur (et donc nécessitant peu de ressources), même avec <strong>zéro JavaScript côté client</strong> (donc l'application ne pèse pratiquement rien), adapté à une installation sur <a href="https : //it.wikipedia.org/wiki/Single-board_computer" rel="noopener nofollow" target="_blank">ordinateur monocarte</a>, également conçu pour <a href="https://en. wikipedia.org/wiki/Text-based_web_browser" rel="noopener nofollow" target="_blank">navigateur avec interface de terminal</a>... les <strong>locaux</strong> étaient <strong>bons</strong > >.</p>

<p>Les avantages de la <strong>technologie à faible échelle</strong> ont été immédiatement mis en valeur par ce petit programme : l'installation revenait à installer quelques dépendances depuis apt, à télécharger les sources depuis le référentiel et à créer les configurations pour le <em >proxy inverse</em> (Nginx) et le système de démarrage (systemd).<br>
Absolument aucun problème en cours de route ; <strong>les ennuis</strong>, en fait, <strong> sont venus plus tard !</strong></p>

<p>J'ai créé mes comptes - d'abord celui "<em>sysadmin</em>", qui détient les autorisations d'administration et que j'utilise pour écrire en tant qu'administrateur d'instance, puis le compte personnel - alors que je commence à m'orienter dans l'application, <strong>plusieurs problèmes mineurs</strong> prennent conscience de ma présence et, comme les esprits, un à la fois <strong>commencez à se manifester</strong>.</p>

<h2>L'interface utilisateur</h2>

<p>Commençons par l'<strong>interface</strong>, qui est la première chose à laquelle vous faites face lorsque vous utilisez une application ; eh bien, <strong>c'est vraiment étrange</strong> !<br>
Une fois que vous l'avez appris, <strong>ce n'est pas difficile</strong>, <strong>mais</strong> il contient certaines choses qui semblent conçues pour provoquer <strong>la confusion</strong>.</p>

<p>Sur votre page de profil, vous cliquez sur la bannière (ce qui fait perdre de la place, j'ai envie de dire, par rapport à un petit bouton) en haut de la page d'accueil.<br>
Ce n'est qu'à partir de la page de profil que vous pourrez ensuite ouvrir les <strong>paramètres</strong> du compte, qui sont <strong>mélangés</strong> avec ceux de l'administration de l'instance sans séparation claire.<sup id="fnref1" > <a class="footnote-ref" href="#fn1">1</a></sup><br>
Sur l'écran principal, <strong>toutes les sous-sections</strong> (y compris les vues spécifiques pour les flux de messages) ne sont <strong>visibles</strong>, vous devez cliquer sur un bouton pour afficher tous les boutons.<br>
Des choix discutables.</p>

<p>Cela ne semble pas du tout être l'intention, mais <strong>j'aime penser</strong> que c'est un <strong>point en faveur</strong>, car cela effectue un <strong>effet artificiel sélection</strong> des utilisateurs : ces réfugiés de Twitter, qui il y a des mois (maintenant la situation s'est calmée) sont arrivés sur Mastodon pour se comporter mal - en publiant des messages publics comme "<em>ooo mais comment tu utilises ce truc ? </em>", ou " <em>quel réseau social de merde, tu ne comprends rien à la merde</em>", et je ne rapporterai rien d'autre - ils ne chercheront pas refuge, même par erreur, contre ce qui est "plus qu'un chien" (c'est l'étymologie du nom de la plateforme, <a href="https://en.m.wikipedia.org/wiki/Epicyon" rel="noopener nofollow" target="_blank" >d'après Wikipédia</a>).</p>

<h3>Personnalisation graphique</h3>

<p>L'une des choses que je recherchais le plus dans les paramètres était la configuration du <strong>thème</strong>.<br>
Au départ, je n'ai trouvé que les options de <strong>personnalisation des couleurs</strong> et de taille du texte du thème appliqué, mais heureusement, ce n'était pas tout : c'était un peu caché, mais au final j'ai trouvé l'<strong>option pour changer de thème. vers un modèle complètement différent</strong>.</p>

<p>En fait, je n'ai pas beaucoup aimé le thème par défaut, mais j'en ai trouvé <strong>des jolis</strong> parmi ceux déjà inclus. Mon <strong>favori</strong> s'appelle "<strong>Pixel</strong>", et offre une vue qui me paraît <strong>relaxante</strong>, avec ses fonds d'un <strong>pseudo violet - lavande</strong> (<code class="prettyprint" style="Background: #9ba0d4; Color:#000000;">#9ba0d4</code>) et le texte affiché avec une <strong>police particulière</strong> >, avec des caractères constitués de petits carrés assemblés (en effet, pour simuler des pixels bien visibles). L'effet qu'il produit est <strong>intéressant</strong>, car il s'agit évidemment d'un thème qui ne peut être classé ni comme clair ni comme sombre ; existe dans sa catégorie. Ou peut-être peut-on le définir comme clair, car le texte est noir, alors le fond est nécessairement clair par contraste. Eh bien, je m'en fiche : le point fondamental, c'est que, pour moi, c'est <strong>vraiment beau</strong>.</p>

<p><img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Theme-Designer-Pixel.png" alt="L'outil de personnalisation de thème ("Theme Designer"), vu avec chargé le Thème "Pixel"."></p>

<p>Un autre thème qui a retenu mon attention était "LCD", qui simule un vieil écran LCD monochrome avec un <strong>fond verdâtre</strong>. Je <strong>l'apprécie</strong> beaucoup <strong>sur le plan artistique</strong>, mais je ne peux tout simplement pas l'utiliser, c'est <strong>trop lourd</strong> pour les yeux avec un rétroéclairage moderne écran !</p>

<p>Il est <strong>dommage</strong> cependant, à mon avis, que les <strong>modifications</strong> des graphiques soient appliquées au niveau de l'instance, et donc <strong>réservées</strong> uniquement. < strong>aux administrateurs</strong> (à ceux qui ont le rang « Artiste », justement). D'autres plateformes, telles que Friendica et Misskey, implémentent les thèmes de manière plus flexible.</p>

<h3>Problèmes de mise à l'échelle</h3>

<p>Il existe également des thèmes qui conviennent mieux à tout le monde, mais malheureusement, les graphismes de l'<strong>interface</strong> présentent un problème encore plus grave concernant ce qui peut relever de désirs esthétiques insatisfaisants : <strong>une mauvaise mise à l'échelle</strong> fort> fort>.<br>
Peut-être qu'avec certains thèmes le problème n'est pas trop visible, mais avec d'autres le <strong>texte</strong> est souvent <strong>trop grand</strong>, et il arrive plusieurs fois que des <strong>boutons ou icônes< /strong> > sont <strong>disproportionnés</strong> voire mal alignés.</p>

<p>Test sur un écran quasi plein (il faut donc tenir compte de l'espace écran occupé par les éléments du navigateur et du système d'exploitation), sur un PC de bureau avec un moniteur 1360x768, et sur un mobile avec un écran 6,2" 9:18, Je pense que <strong j'aimerais peut-être un peu moins de <strong>remplissage</strong>, même si dans l'ensemble l'interface est OK. L'<strong>inutilisabilité</strong> survient lorsque j'essaie des résolutions légèrement plus carrées, par exemple. exemple en gardant la fenêtre du navigateur pas complètement agrandie horizontalement sur mon moniteur 16:9. Dans ce cas, je laisserai la vidéo suivante parler Même sur mon smartphone, les choses peuvent paraître moche si je la tourne horizontalement. p>




<video title="Vidéo montrant la mise à l'échelle à différentes résolutions, et à quel point elle est trop tordue dans certaines, avec le thème "Pixel"." class="Center" src="{{<assetsRoot >}}/Media/Epicyon-Dec-2022/UI-Scaling-Bug-Pixel.webm" contrôles="true" muted="true" loop="true" lecture automatique ="true">Vidéo montrant la mise à l'échelle à différentes résolutions, et comment elle est trop tordue dans certaines, avec le thème "Pixel".</video>

<h2>Aller au cœur du problème</h2>

<p>Je pense qu'il serait facile pour moi de réparer l'interface, car cela impliquerait de changer un peu le CSS et c'est la fin de l'histoire.<br>
Avant même que je puisse y penser, malheureusement, d'autres <strong>problèmes</strong> sont apparus, cette fois <strong>de fonctionnalité</strong>.</p>

<h3>Essayer de publier...</h3>

<p><strong>Le tout premier message</strong> que j'ai envoyé depuis la plateforme, rédigé sans toucher à aucune option autre que le simple champ de texte, <strong>semblait bien</strong>.</p>

<p>Un instant plus tard, dès que j'ai créé le deuxième compte, <strong>j'ai remarqué</strong> une fonction appréciable - que Mastodon a introduite il y a seulement quelques mois, alors que d'autres plateformes populaires n'en proposent pas du tout : <strong >le choix de la langue </strong> utilisée dans votre propre message, utilisée pour permettre aux autres utilisateurs de <strong>filtrer</strong> les messages publics qui apparaissent dans des langues indésirables. J'ai ensuite <strong>mis</strong> mon nouveau message <strong>en italien</strong>, histoire de le publier... et le message <strong>ne m'est apparu</strong> dans aucune timeline. Seulement sur Epicyon, cependant, et depuis mes deux comptes ; dans d'autres cas, il est apparu normalement.<br>
Il m'a fallu 10 bonnes minutes pour comprendre que non, mon compte n'avait pas juste planté, mais simplement <strong>je ne peux même pas voir mes propres messages s'ils sont publiés dans une <strong>langue non présente dans la liste</strong > de ceux acceptés par moi, qui par défaut sont uniquement en anglais. J'ai dû <strong>manuellement</strong> ajouter au moins l'italien (j'ai ajouté toutes les langues pendant que j'y étais) à la liste blanche.<br>
Il s'agit certainement d'un <strong>oubli de programmation</strong>, car ce comportement n'aurait pas le moindre sens du point de vue de la conception de l'expérience utilisateur... mais <strong>ce n'est pas bon du tout !</strong>< /p>

<p>Cependant, vos <strong>publications</strong> sont <strong>modifiables</strong>, ce qui est génial. Ici aussi nous sommes à égalité avec Mastodon, mais <strong>au-dessus</strong> des autres plateformes fédérées.</p>

<h3>Le message principal circule</h3>

<p>Certains points peuvent être des avantages et des inconvénients, selon votre point de vue.</p>

<p>L'<strong>absence</strong> d'une <strong>timeline fédérée</strong> est un peu gênante, car elle rend la découverte de nouveaux contenus plus difficile, mais ce n'est pas la fin du monde : comme sur d'autres services, <strong>à la maison</strong> (qui s'appelle ici "<strong>Boîte de réception</strong>") <strong>arrivent</strong> les partages de <strong>messages d'utilisateurs inconnus</strong > strong> par les utilisateurs qui se suivent, donc de temps en temps <strong>vous pouvez découvrir</strong> de nouveaux profils à partir de là.<br>
Dans le même temps, cependant, <strong>le serveur ne risque pas</strong> d'avoir à gérer des <strong>quantités de trafic de données ingérables</strong> au fil du temps, qui seront plutôt proportionnelles uniquement à l'activité des utilisateurs sur l'instance et celles directement suivies par elles.</p>

<p>Le <strong>manque d'histoire locale</strong> se fera cependant probablement sentir si vous souhaitez héberger un serveur pour votre groupe d'amis. Bon, peut-être même pas trop : Epicyon semble être conçu pour <strong>avoir quelques utilisateurs locaux actifs</strong>, une douzaine au maximum, et à ce stade, nous nous suivons tous simplement.</p>

<p><img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Timeline-Pixel.png" alt="Une partie de la timeline d'accueil, vue sur les smartphones avec le thème "Pixel". " ></p>

<h3>Excellentes performances</h3>

<p>L'<strong>idée</strong> d'exécuter un programme de ce type <strong>sans</strong> aucun système de <strong>base de données</strong> centralisé, mais de lui permettre de stocker toutes les données sous forme de fichiers dispersés partout. le système de fichiers du système, je l'<strong>aime</strong> aussi beaucoup sur le plan conceptuel, mais il a des <strong>limites d'évolutivité</strong> concrètes.<br>
Qui sait ce qui se passerait si j'essayais de monter un projet comme "Epicyon<strong>.uno</strong>" ou "Epicyon<strong>.social</strong>"... J'imagine un énorme désastre.</strong> fort> p>

<p>Mais fondamentalement, lorsqu'il n'est pas poussé à ses limites, ce logiciel <strong>fonctionne</strong> vraiment comme promis.<br>
Avec <strong>htop</strong> on peut entrer dans les détails : sur mon <strong><a href="https://web.archive.org/web/20211120100907/https://www.alliedelec.com/m / d/4252b1ecd92888dbb9d8a39b536e7bf2.pdf" rel="noopener nofollow" target="_blank">Raspberry Pi 3</a></strong>, dans les moments de <strong>quasi-décrochage</strong> (dans lesquels je ne suis pas utilisant l'application, mais le serveur a évidemment des tâches à effectuer), l'utilisation du <strong>CPU</strong> est d'environ <strong>3%</strong> (sur un maximum théorique total de 400%, en considérant les 4 cœurs ), et la <strong>RAM</strong> utilisée entre <strong>40 et 70 Mo</strong> (environ 4,5 à 7,5% de la RAM d'un Pi3). Le HTML généré par le serveur est donc essentiel, et le client ne met donc que <strong>quelques instants</strong> pour le recevoir.</p>

<p>Le logiciel n'a pas promis de ne pas avoir de bugs terrifiants, donc en fait vous ne pouvez pas vous en plaindre, mais <strong>les quelques promesses</strong> qu'il a faites <strong>il a très bien tenu</strong> . Oh mon Dieu, le programme prétend en fait être <a href="https://gitlab.com/bashrc2/epicyon/-/blob/66203c6558a1bb4fa2a405c45e84f786b606b499/epicyon.py#L7" rel="noopener nofollow" target="_blank" > en statut "Production/Stable"</a>, donc cette excuse tient jusqu'à un certain point...</p>

<h3>Réactions aux publications</h3>

<p>Les bonnes choses, heureusement, ne s'arrêtent pas là !<br>
J'ai été immédiatement heureux de remarquer que la plateforme vous permet de <strong>réagir aux messages</strong> à l'aide d'<strong>emoji</strong>, ainsi que de permettre l'envoi classique d'appréciation pour le message - le "j'aime" standard. , pour ainsi dire, qui est ici un cœur.</p>

<p><img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/React-LCD.png" alt="Écran de sélection d'une réaction à un message (visualisé avec le thème "LCD") "></p>

<p>Malheureusement, la <strong>séparation</strong> des réactions et de l'appréciation n'est décidément <strong>pas très intelligente</strong>.<br>
Cet avis n'est pas seulement le mien, mais aussi celui des développeurs de Misskey et, je crois (je n'ai jamais vérifié personnellement) aussi de Pleroma : réagir de là à un message venant d'une plateforme qui ne supporte pas les réactions (comme Mastodon) se traduit en une appréciation reçue de cet autre serveur. Sur Epicyon, cependant, <strong>réagir</strong> à une publication provenant d'instances moins riches en fonctionnalités <strong>est pratiquement inutile</strong>.<br>
En plus de tout cela, je ne pense pas qu'il existe même un moyen de voir une liste de tous les messages auxquels vous avez réagi ; alors, <strong>adieu à l'idée</strong> d'utiliser les <strong>réactions</strong> au moins <strong>comme filtre personnel</strong> des messages lus et aimés au fil du temps.</p>

<h3>La recherche</h3>

<p>Lorsque nous recherchons les publications d'autres personnes via l'interface de la plateforme, nous avons juste <strong>quelques limitations en moins</strong> par rapport à ce que nous voyons sur Mastodon.<br>
La <strong>recherche textuelle</strong> avec des mots-clés normaux est malheureusement limitée à vos propres messages, mais il existe d'autres options pour d'autres situations : en plus de pouvoir <strong>rechercher par hashtag</strong> (qui, par d'ailleurs, l'interface de recherche le recommande), apparemment, vous pouvez même effectuer une recherche <strong>par emoji</strong> ! Cependant, je n'ai pas testé cette fonction supplémentaire, ne l'ayant remarqué que trop tard.<br>
Enfin, vous pouvez <strong>rechercher des éléments</strong> relatifs aux fonctions de l'économie du partage (que j'aborde maintenant) : les compétences, ou encore les objets et services.</p>

<p><img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Search-Pixel.png" alt="L'écran de lancement d'une recherche (vu depuis le thème "Pixel")"> </p>

<h2>Fonctionnalités avancées</h2>

<p>Depuis Epicyon, en continuant, il existe <strong>différents modes</strong> qui peuvent être définis pour un <strong>message</strong>. Il n'est pas nécessaire d'expliquer ceux qui sont communs avec les grandes plateformes, mais certains méritent une attention particulière.</p>

<h3>Économie collaborative</h3>

<p>L'un des points clés d'Epicyon, du moins c'est l'idée, est constitué de ses fonctionnalités orientées vers ce que l'on appelle "<a href="https://it.wikipedia.org/wiki/Economia_collaborativa" rel="noopener nofollow " target="_blank">économie du partage</a>".<br>
Il est possible de créer des articles décrivant des <strong>objets ou services</strong> que vous <strong>recherchez</strong> ou que vous <strong>mettez à disposition</strong>, en précisant la <strong>catégorie< /strong> et (éventuellement) un <strong>prix</strong>.<br>
Ces messages peuvent apparaître dans les <strong>timelines</strong> qui leur sont dédiées, et par défaut ils ne sont pas fédérés ; l'administrateur du serveur peut spécifier une liste d'instances tierces avec lesquelles fédérer ce type de publication.<br>
Sur votre profil, vous pouvez ensuite indiquer une <strong>liste de vos <strong>compétences</strong>, avec un niveau de pourcentage.</p>

<p>Malheureusement - et là on commence maintenant à remarquer une tendance, avec des dysfonctionnements - que je publie la <strong>demande</strong> de quelque chose <strong>ça a fonctionné</strong>, en essayant de poster un <strong> strong>l'offre</strong> (en tant que nouveau message, sans rapport avec le précédent) <strong>n'a eu aucun effet</strong>. J'ai essayé deux fois mais vraiment non, le nouveau message n'est pas apparu.</p>

<h3>Mélange de modes</h3>

<p><strong>Merde</strong>, car là aussi une <strong>salade</strong> indigeste a été faite : celles qui sont des <strong>modalités</strong> définissables comme "réception", c'est-à-dire qui déterminer à qui le message atteindra et comment il sera affiché - public, non répertorié, réservé aux abonnés ou direct - sont mélangés à des modes que je peux définir comme "typologiques", c'est-à-dire qui définissent la publication comme normale (contenant du texte et /ou fichiers joints), ou en tant que catégorie spéciale.</p>

<p><img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Post-Modes-Pixel.png" alt="Écran de publication, avec le menu de sélection de mode ouvert (affiché avec l'icône "Pixel "thème)."></p>

<p>En pratique, cela signifie que <strong>vous</strong> ne pouvez pas modifier le niveau de <strong>confidentialité</strong> de ces publications de type <strong>spécial</strong> strong>.<br>
Si cela ne pose peut-être pas de problème pour les fonctions <em>d'économie du partage</em>, qui ne placent même pas d'éléments sur la page de profil de l'utilisateur, cela pourrait poser problème pour les enquêtes, qui sont malheureusement mises en œuvre sous forme de type de publication et pas comme option supplémentaire pour les normaux.</p>

<h3>Problèmes avec les enquêtes</h3>

<p>Le fait qu'ils doivent nécessairement être publics n'est pas la chose la plus <strong>bizarre</strong> dans la <strong>mise en œuvre de sondages</strong>, car il y a des choses pires.</p>

<p>Il semble que <strong>sélectionner</strong> (avec les boutons dédiés, évidemment) une des <strong>options</strong> disponibles, puis appuyer sur Enregistrer, n'ait pas le même effet dans le backend que d'autres plates-formes ont ; <strong>vous créez un commentaire de réponse</strong> (visible comme tel depuis d'autres serveurs), comme si vous aviez écrit à la main l'option souhaitée dans un nouveau message sous la même discussion.<br>
Non seulement cela bousille l'anonymat des sondages fourni par toutes les autres applications, mais cela ne fonctionne tout simplement pas : cette réponse étrange n'est pas ajoutée aux compteurs de votes du sondage.</p>

<p><img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Polls-Bug.png" alt="Un sondage créé par Epicyon, voté et affiché par Epicyon et Mastodon. S'il vous plaît notez le problème décrit."></p>

<h3>Un regard sur les événements</h3>

<p>Dans tous les cas, pour tout type de publication vous pouvez éventuellement <strong>définir une position</strong> (en insérant un lien OpenStreetMap - ce qui n'a pas fonctionné du tout pour moi) <strong>et une date</strong> strong> strong>, qui sont tous deux potentiellement utiles si vous souhaitez signaler un <strong>événement</strong>, ce à quoi s'attend Epicyon.</p>

<p>Les publications datées doivent également apparaître dans la <strong>section calendrier</strong> de l'application. Je n'ai pas vérifié si au moins cette chose fonctionnait, malheureusement, mais j'ai essayé le message "<strong>rappel</strong>", et ça marche : un message de ce type <strong>vient</strong> de votre compte , comme <strong> >direct</strong>, à l'heure convenue ; en plus d'apparaître dans le calendrier, il est accessible via un <strong>bouton</strong> (<strong>mis en surbrillance</strong> avec une couleur alternative) qui apparaît dans la barre de navigation en haut de la page d'accueil.< /p>

<p><img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Reminder-Pixel.png" alt="L'écran affichant un rappel déclenché (visualisé avec le thème "Pixel"). " ></p>

<h3>Blogging non micro</h3>

<p>Le dernier mode paramétrable pour les posts est celui de "<strong>article</strong>", ayant donc un <strong>titre et pas de limite stricte</strong> <strong>pour le corps</strong > ; quelque chose de prévu par ActivityPub, adapté aux blogs plus classiques, et qui a déjà été observé depuis quelques temps avec WriteFreely, Plume, Lemmy ou Friendica.</p>

<p>Les articles devraient apparaître sur votre page de profil... mais cela n'arrive pas pour moi. La <strong>fonctionnalité</strong> est <strong>cassé</strong> et la <strong>seule façon</strong> de trouver des articles, les vôtres ou ceux d'autres utilisateurs de l'instance, est de <strong>passer par pour la chronologie dédiée.<br>
Ah, <strong>en plus</strong> ici, qui est en fait une <strong>timeline</strong> avec une visualisation spéciale, il y en a aussi <strong>une</strong> qui met en <strong> >show uniquement des messages multimédia</strong>, un peu comme si c'était Pixelfed.</p>

<h3>Contenu au niveau de l'instance</h3>

<p>Ces vues spéciales ici peuvent, entre autres choses, être définies comme <strong>mode instance</strong>, de manière à rendre la <strong>navigation dans les publications locales</strong> possible <strong> à ceux qui les visitent. le site</strong> sans vous connecter.</p>

<p>En fait, il existe également une troisième option pour le type d'instance : "<strong>news</strong>". Ceci met en évidence les <strong>actualités</strong> provenant des <strong>flux définis</strong> par les administrateurs du serveur.<br>
C'est vrai, en ce sens, Epicyon propose des outils particulièrement intéressants : les actualités, définies par les sources <strong>RSS</strong>, apparaissent dans une <strong>barre latérale</strong> sur le bureau. En fonction d'une configuration ultérieure, ils peuvent être soumis à des <strong>filtres</strong>, qui ajoutent automatiquement des <strong>hashtag</strong> ou des <strong>avertissements de contenu</strong> /em>) en fonction du texte.<br >
Le serveur affiche également un flux qui regroupe toutes les actualités qu'il télécharge progressivement.</p>

<p>Sur le côté opposé, toujours sur le bureau, il y a une <strong>barre supplémentaire</strong>, qui rend les <strong>liens externes</strong> facilement disponibles. Certains <strong>pointent</strong> vers des informations ou de la documentation de l'instance, tandis que d'autres peuvent être définis par les administrateurs et pointer <strong>vers n'importe quelle URL</strong>. </p>

<p><img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Featured-LCD.png" alt="L'écran "En vedette", qui apparaît sélectionnable à partir d'un bouton dédié dans la barre de navigation lorsque l'instance est en mode "actualités" (visualisé depuis le thème "LCD"), le flux des articles rédigés par les membres du serveur apparaît au centre."></p>

<h2>Beaucoup de dégâts !</h2>

<p>Jusqu'à présent, dans l'ensemble, ce logiciel <strong>ne semblait pas <strong>mauvais</strong> du tout : avec quelques petits inconvénients, bien sûr, mais aucun programme plus complexe qu'un <em> Bonjour Le monde ne peut jamais être parfait, et cet Epicyon a encore quelques <strong>points solides en sa faveur</strong>.<br>
Le problème, le grand gâchis, c’est que les problèmes graves qui existent sont énormes. J'ose dire <strong>mastodontique</strong>, pour une plateforme dont l'animal est grand, mais pas éléphantine !</p>

<p>Il n'y a pas beaucoup de place pour discuter ici, je préfère donc faire un <strong>aperçu rapide</strong>.<br>
Quelque chose à propos d'une bonne partie de ces erreurs est ressorti dans les logs du serveur, mais de manière trop générique, et donc (même si je ne voulais pas perdre trop de temps là-dessus) ) je n'arrivais pas à comprendre pourquoi certains problèmes s'est produit.</p>

<ul>
<li><p>Après quelques minutes d'envoi, <strong>certains</strong> de vos messages peuvent disparaître aléatoirement de l'instance</strong>. Ils ne peuvent plus être trouvés en naviguant, les atteindre directement depuis le lien renvoie une erreur 404, mais <strong>sur les instances tierces</strong> qui les ont reçus à temps, ils <strong>restent</strong> visibles. De même, certains messages peuvent disparaître de la page de profil d'un autre utilisateur local à votre instance, lorsque vous les recherchez.</p></li>
<li><p>En vertu de la loi des représailles, <strong>certains messages apparaissent</strong> comme des <strong>doublons</strong> dans certaines situations. J'ai remarqué que cela se produit définitivement pour les publications sur votre page de profil (<a href="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Self-Profile-Pixel.png" rel="noopener nofollow" target ="_blank">image ici 🖼️</a>), où ils se sont même <strong>divisés en petits groupes</strong>, mais potentiellement aussi pour <strong>n'importe quelle publication</strong> sur la timeline personnelle <strong>si effectué une action</strong>comme <em>boost</em>.</p></li>
<li><p>En parlant d'<strong>interactions</strong> avec les publications, j'ai constaté que parfois <strong>elles peuvent ne pas réussir</strong>. Je me souviens parfaitement que cela peut arriver avec la fonction <strong>réaction</strong> - dans un cas j'ai <strong>dû essayer</strong> une seconde fois d'en assigner une à un message pour que l'action fonctionne - et il me semble que cela pourrait arriver aussi avec du cœur et du partage, mais je n'ai pas bien cadré ces deux cas.</p></li>
<li><p>Restons sur les interactions, cette fois avec les profils : il est tragique que <em>dans certains cas</em>* essayer de suivre</strong> certains comptes <strong>ne fonctionne pas</strong> > précisément. En appuyant sur « Suivre », je devais parfois attendre quelques dizaines de secondes pour que l'utilisateur apparaisse effectivement dans ma liste suivante, sans aucune indication de l'application ; <strong>D'autres fois</strong>, même <strong>attendre</strong> pendant des heures (des jours...) ou réessayer plusieurs fois <strong>n'aidait</strong> rien. Il semble que le problème ne dépend pas du logiciel sur lequel l'instance distante est exécutée, je n'ai donc aucune idée de la raison pour laquelle cela se produit.</p></li>
<li><p>Il y a <strong>deux pages différentes</strong> qui peuvent apparaître <strong>pour les profils</strong> : une avec la vue des publications récentes (dont j'ai lié une capture d'écran ci-dessus), mais non des options autres que follow, et une avec plusieurs options (dont je laisse un <a href="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Profile-Options-Pixel.png" rel= "noopener nofollow " target="_blank">image ici 🖼️</a>). <strong>Parfois le premier s'ouvre, d'autres fois le second.</strong> Il ne centre pas la partie de l'application à partir de laquelle on vient ouvrir l'écran, et je ne vois aucun moyen de passer d'une section à un autre. La seconde semble apparaître plus fréquemment lorsque vous suivez déjà le compte que vous consultez, mais pas toujours. <strong>Si vous souhaitez voir les messages</strong> d'un utilisateur particulier, <strong>mais que le logiciel a décidé de ne pas le faire</strong> à ce moment-là, en pratique, <strong>vous attaquez</strong> . </p></li>
<li><p>Bug vraiment étrange : <strong>Les comptes Misskey apparaissent avec un identifiant alphanumérique au lieu du nom d'utilisateur normal</strong> (uniquement la première partie - celle qui indique que le domaine est correct). Il n'y a aucun problème si vous essayez de faire référence à un compte avec son vrai nom d'utilisateur, car le message arrive (ou la recherche réussit, si c'est la fonction que vous utilisez)... cependant, <strong>si vous répondez à le compte en question, <strong>le nom d'utilisateur suggéré sera le nom étrange, <strong>qui</strong> n'existe pas et donc <strong>ne fonctionne pas</strong>. Même si cela ne cassait pas les messages, ce problème serait quand même ennuyeux, car il ne vous permettrait pas de comprendre d'un seul coup d'œil à qui vous parlez... J'imagine déjà ce que ce serait de participer à des discussions avec de nombreux utilisateurs.<br>
<img src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Misskey-ID-Bug.png" alt="Un utilisateur Misskey, affiché sur Epicyon avec une photo de profil, un nom et une description corrects (censuré ici), mais nom d'utilisateur pris de nulle part ("@91f967c3pb@misskey.social")."></p></li>
<li><p>Certains <strong>paramètres d'instance</strong> sont <strong>sensibles</strong> et <strong>changent d'état d'eux-mêmes</strong>. Parfois par exemple, après un redémarrage du serveur, <strong>l'option qui ouvre</strong> de nouveaux enregistrements</strong> à tout le monde <strong>se réactive</strong> d'elle-même. Quelque chose s'est également produit concernant le mode instance, qui est passé du standard au "news" sans que je le définisse ainsi ; cependant, ce n'est peut-être pas un bug, peut-être qu'une action que j'ai faite en tant qu'administrateur (et dont je ne me souviens pas, voilà) a eu cet effet secondaire mais attendu par les développeurs. Nous ne le saurons jamais, mais c'est <strong>effrayant</strong>.</p></li>
<li><p>Il existe quelques <strong>problèmes de récupération</strong> et/ou de mise en cache excessive <strong>des métadonnées de compte par des instances tierces</strong>. J'ai vérifié plusieurs autres serveurs, effectué des tests qui m'ont conduit à des <em>conclusions peu concluantes</em> ; en particulier, <strong>concernant les photos de profil</strong> (celle carrée principale) :</p>

<ul>
<li>Mastodon, j'ai essayé plusieurs fois, refuse complètement de voir l'<em>image</em> et met l'espace réservé de l'éléphant à sa place.</li>
<li>Misskey fonctionne ainsi : certaines instances mettent leur espace réservé, tandis que d'autres chargent la photo de la bannière comme image de profil (que je n'ai cependant jamais définie, et je vois donc qu'Epicyon en met une seule en fonction du thème de l'instance ; belle surprise !)... Je ne poserai pas de questions, allez-y.</li>
<li>Friendica (dont je n'ai pu utiliser qu'un seul exemplaire) peut cependant voir la photo. Friendica, cependant, est un logiciel légèrement plus avancé et utilise en interne des méthodes complexes pour obtenir les métadonnées de nombreux types de ressources Web.
Dans l'ensemble, cela pourrait être un <strong>problème de mise en cache</strong> (qui sait si c'est du côté de mon serveur, ou des autres), et peut-être pas de données mal formées, mais c'est quand même quelque chose qui <strong>ne fonctionne pas< /strong> >.</li>
</ul></li>
</ul>



<h2>Et maintenant ?</h2>

<p>Le <strong>rêve</strong> d'un <strong>serveur ActivityPub <strong>léger mais riche en fonctionnalités</strong> s'est inexorablement <strong>effondré</strong>, il n'y a pas vraiment rien d'autre à dire. Après avoir vu les premiers problèmes <strong>j'ai pensé que je voulais garder Epicyon</strong> pendant au moins une semaine, afin de le tester correctement, <strong>mais</strong> à la fin il a commencé à se comporter aussi gravement. <strong>J'ai dû le retirer</strong> après seulement 2 jours.<br>
C'est donc vraiment <strong>dommage</strong> qu'il se soit avéré <strong>trop cassé</strong> pour être utilisable de manière réaliste. Pour l'instant, je dois opter pour un autre logiciel, et peut-être ai-je trouvé quelque chose de bien - et c'est une histoire pour une prochaine fois - mais j'espère vraiment <strong>qu'Epicyon pourra</strong> à l'avenir <strong>devenir utilisable</strong> fort>.</p>

<p><strong>Heureusement</strong>, même s'il est réalisé par une seule personne, donc lentement, <strong>le développement progresse</strong> au rythme de <a href="https://gitlab. com/bashrc2/epicyon/activity" rel="noopener nofollow" target="_blank">plusieurs commits par jour</a>.<br>
En parlant de ça, après avoir fait un <strong>touch and go</strong> regarder les sources, je dois dire une chose : par rapport aux serveurs plus établis, <strong>le code</strong> de celui-ci <strong > Il me semble qu'il est en assez mauvais état. Les fichiers ne sont pas bien répartis en dossiers, il y en a qui se comptent par centaines (voire même <a href="https://gitlab.com/bashrc2/epicyon/-/blob/66203c6558a1bb4fa2a405c45e84f786b606b499/daemon.py" rel=" noopener nofollow" target="_blank">un millier !</a>) de kilo-octets, et il existe d'énormes fonctions dans lesquelles les boucles et les contrôles apparaissent sous de très nombreux niveaux d'indentation.<br>
Je ne voudrais pas être à la place de la personne qui le maintient car, dans l'état actuel des choses, je crains que <strong>réparer ce logiciel</strong> pour le faire fonctionner correctement <strong>ne soit pas une chose simple </strong>, et cela ne prendra pas peu de temps...</p>



<h2>{{% i18n notes-refs %}}</h2>



<div class="footnotes">
<ol>

<li id="fn1">
<p>L'examen de <strong>tous les paramètres disponibles</strong> peut donner un bon aperçu du potentiel de n'importe quelle plate-forme. Les commenter tous, surtout ceux que je n'ai pas testés, serait une folie ; Cependant, j'ai pensé laisser <a href="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/Settings.png" rel="noopener nofollow" target="_blank">une capture d'écran ici 🖼️</a > complet, celui qui le souhaite peut au moins lire seul les différentes options. <a href="#fnref1">↩</a></p>
</li>

</ol>
</div>
