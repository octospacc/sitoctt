+++
Title = "⚡️ Blog rapide avec notes standard"
Date = 2022-12-13
Downsync = "/it/blog/Blogging-Rapido-con-Standard-Notes.html"
Aliases = [ "/Posts/2022-12-13-Blogging-Rapido-con-Standard-Notes.html" ]
Description = "En voulant écrire et publier davantage, je trouve que mon flux de travail me ralentit, et en cherchant des moyens plus rapides de bloguer, je me tourne vers Listed."
Lastmod = 2022-12-16
Categories = [ "Technologie" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Généré automatiquement par ListedDownsync.js. Ne modifiez pas (sauf si vous définissez également "% Downsync = False") - cela serait écrasé. -->

<p>Je dirais que j'utilise <strong><a href="https://standardnotes.com" rel="noopener nofollow" target="_blank">Notes standard</a></strong> depuis longtemps en tant qu'application < strong>notes personnelles</strong>.<br>
Il y a des années, je l'ai choisi parce qu'il était <strong>gratuit et open-source</strong>, mais en même temps très <strong>propre, bien entretenu et fonctionnel</strong>. C'était la solution idéale à une époque où je recherchais quelque chose prenant en charge le cryptage des données qui fonctionne, sans affecter la convivialité.</p>

<p><img src="{{< assetsRoot >}}/Media/Misc/Standard-Notes-Tablet.webp" alt="Ancienne application Android Standard Notes sur ma tablette."></p>

<p>Sans m'attarder sur les raisons pour lesquelles j'ai aimé continuer à l'utiliser, puis j'ai arrêté, puis j'ai recommencé jusqu'à présent, il faut approfondir une de ses <strong>fonctions intégrées</strong> en particulier : <strong> <a href="https://listed.to">Répertorié</a></strong>.<br>
Il s'agit d'une plateforme de <strong>blogging</strong> conçue par les mêmes développeurs que Standard Notes, et disponible en auto-hébergement ou en utilisation <strong>gratuite</strong> sur l'instance officielle. Même si je ne l'ai jamais vraiment utilisé auparavant, j'ai trouvé le concept et son application intéressants dès le début.</p>

<h2>Un besoin rapide</h2>

<p>Il y a quelques jours, cependant, j'ai commencé à jouer avec <a href="https://listed.to/@ChatGPT_Experiences">ChatGPT</a>. C'est une question totalement différente, oui, mais elle est pertinente car je me suis posé une question : toutes ces conversations que j'ai avec l'intelligence artificielle, où puis-je les mettre pour qu'elles restent intégrales, organisées, trouvables et accessibles à tous, et < strong>facile à charger</strong> pour moi ?</p>

<p>Le choix était sur le point d'<strong>utiliser <a href="https://gitlab.com/octtspacc/staticoso" rel="noopener nofollow" target="_blank">staticoso</a></ strong> , <strong>mon générateur</strong> de sites statiques que j'utilise déjà pour <a href="https://sitoctt.octt.eu.org" rel="noopener nofollow" target="_blank"> sitoctt</ a>, mais ensuite <strong>j'ai changé d'avis</strong>.</p>

<p>Je pensais qu'en fait, je voulais rendre ma collection d'expériences visible sur le Web. Le <strong>problème</strong> ici, cependant, que j'ai pu observer avec amertume au cours de tous ces mois, est voilà à quoi ressemble mon exemple de site, comment dire... <strong>Les moteurs de recherche s'en foutent</strong>. 😭<br>
Outre qu'il s'agit d'un sujet distinct, il convient de noter que la responsabilité du sort horrible de mon site ne dépend pas de son code ; C'est la faute du domaine et/ou de l'hébergeur. Alors non, je n'abandonnerai jamais mon statique : se contenter de changer le générateur (et par conséquent les templates) par un plus sérieux ne résoudrait aucun problème.</p>

<p>En bref, j'ai dû complètement <strong>abandonner</strong> l'idée d'<strong>héberger sur GitHub et GitLab</strong>, et penser à autre chose.</p>

<ul>
Google <li><strong>Blogueur</strong> ? L'expérience éditoriale laisse à désirer sur mobile.</li>
<li><strong>WordPress</strong> ? Ce serait bien, mais nous savons ce qui pourrait arriver dans de nombreuses années aux données insérées dans un système complexe ; et WordPress est très complexe. J'ai eu du mal à trouver un <a href="https://github.com/lonekorean/wordpress-export-to-markdown" rel="noopener nofollow" target="_blank">petit programme qui convertit votre sauvegarde</a> XML dans le fichier Markdown... qui tombera très probablement en panne dans quelques années, n'étant pas officiel, car apparemment l'équipe WordPress a l'habitude de changer la structure de ce XML de temps en temps ; d'autres solutions de conversion que j'avais trouvées un instant plus tôt dataient de quelques années et ne fonctionnaient pas, pour ainsi dire.</li>
<li>Peut-être <strong><a href="https://writefreely.org" rel="noopener nofollow" target="_blank">WriteFreely</a></strong> ? J'ai déjà un compte sur l'<a href="https://noblogo.org" rel="noopener nofollow" target="_blank">instance Devol</a>, mais la limite de blog pour chaque compte est de 5 et je je ne voulais pas en gaspiller un.</li>
<li><strong><a href="https://joinplu.me" rel="noopener nofollow" target="_blank">Plume</a></strong>, peut-être ? Cette autre plateforme de blogs semblait sympa, hébergée par beaucoup et compatible avec ActivityPub (pas une nécessité pour moi, mais quand même un joli bonus), mais elle ne vous permet pas de définir du CSS personnalisé ; grave lacune pour mon cas d'utilisation, car il n'y a pas d'autre moyen de tout présenter de la manière spécifique dont j'ai besoin pour représenter une discussion sans passe-partout pour chaque paragraphe de HTML.</li>
</ul>

<h2>Le choix des Listés</h2>

<p>Mes idées étaient terminées et, comme j'étais pressé de mettre sur ce site et de commencer à télécharger les expériences que j'avais eues avec ChatGPT, considérant à quel point <em>mon Dieu</em> c'était <strong>pratique</strong > pour copier et coller des éléments <strong>directement dans Standard Notes</strong>, c'était le bon moment pour essayer <strong>Listed</strong>.</p>

<p>Pour être honnête, je suis un peu inquiet à l'idée que le fichier de sauvegarde hebdomadaire des notes puisse atteindre plusieurs dizaines de Mo, mais les dés sont maintenant jetés.<br>
Je pourrais créer un deuxième compte à utiliser uniquement pour les notes ChatGPT, en les exportant du compte principal et en les important là-bas, puis en les supprimant du premier compte pour alléger la collection, mais il y a des problèmes. Je peux peut-être transférer le nom d'utilisateur, mais les liens vers les publications individuelles seront rompus, car ils incluent des identifiants automatiques, et donc une redirection vers la page d'accueil pour ceux qui suivent une ancienne publication. De plus, les anciens messages du livre d'or ne sont pas copiés et je ne pense pas non plus que les abonnements par courrier électronique soient transférés.</p>



<h2>La pensée de "quelle galère"</h2>

<p>Cependant, dans l'ensemble, dans ce but limité, <strong>j'ai apprécié</strong> à quel point il est <strong>efficace</strong> d'avoir des <strong>notes standard</strong> comme <strong>final< /strong> fait partie de</strong> > mon <strong>workflow</strong>. Cela me semble réduire grandement l'effet <em>"Je suis énervé"</em>.</p>

<p>Considérant le plaisir de la découverte, j'ai <strong>réfléchi</strong> un instant à la façon dont le <strong><em>facteur "quelle douleur"</em></strong> est l'une des choses cela < strong>m'empêche de mettre à jour</strong> le site ctt plus fréquemment.</p>

<p>Laissons de côté les pages thématiques, qui sont <em>des bêtes à part</em> ; laissons de côté les longs posts, qui nécessitent une forte inspiration et suffisamment de temps d'écriture ; mais bon, au moins <strong>quelque chose</strong> pour le MicroBlog qui fait fureur, j'aimerais <strong>aimer</strong> le créer <strong>plus souvent</strong> ! Mais <strong>Je n'en ai tout simplement pas envie</strong>, pour une raison quelconque, compte tenu de tout le processus que je dois suivre.<br>
À vrai dire, j'avais déjà immédiatement pris l'habitude de commencer à rédiger un article dans Standard Notes, afin de pouvoir tout gérer de manière plus flexible, en passant peut-être rapidement d'un appareil à l'autre. Cependant, si je devais commencer à écrire quelque chose de pas long et élaboré, pour être publié le plus tôt possible, je n'avais tout simplement pas envie d'agir.</p>

<p>"<em>Mais pourquoi ne pas passer à <strong>Listed au moins pour</strong> mon <strong>microblog</strong> ?</em>", je pense donc. Eh bien, il y a une raison pour laquelle j'en suis même arrivé au point de créer mon propre générateur de site statique : j'en ai besoin !...<em>Et même si je n'en avais plus besoin et que je pouvais donc arrêter de l'utiliser, honnêtement, je ne le ferais pas je veux même y penser, faire quelque chose comme ça, après tout le travail !</em> 😖</p>

<h2>Limitations des listes</h2>

<p>Cependant, pour bien le dire, <strong>Listed est assez simple</strong> : il vous permet à peine d'insérer du <strong>CSS</strong> personnalisé et de formater les publications en <strong>Markdown< /strong> et un <strong>sous-ensemble</strong> restreint de <strong>HTML</strong>. Je vous propose mes analyses de cette dernière ci-dessous :</p>

<ul>
<li>Tous les <strong>éléments</strong> qui sont <strong>en ligne par nature sont</strong> automatiquement <strong>insérés dans un bloc</strong> <code class="prettyprint"><p> </ code> (par exemple, vous ne pouvez pas avoir <code class="prettyprint"><body><span>Err</span></body></code>, ce sera toujours <code class="prettyprint"> < body><p><span>Err</span></p></body></code>);</li>
<li>Tout <strong>attribut</strong> d'élément qui n'est pas <code class="prettyprint">id</code>, <code class="prettyprint">class</code> ou <code class= " Prettyprint">style</code>, (et <code class="prettyprint">href</code> ou <code class="prettyprint">src</code>, ainsi que je crois des trucs comme <code class= " Prettyprint">titre</code>, <code class="prettyprint">largeur</code> ou <code class="prettyprint">hauteur</code>, dans les cas appropriés) <strong>est jeté< /strong > go : donc oubliez par exemple de s'écarter de la configuration par défaut de la plateforme concernant le comportement des liens (le <code class="prettyprint">rel</code> n'est pas touché) ;</li>
<li><strong>Certains éléments</strong> ne fonctionnent tout simplement pas : ceux avec des balises non standards (personnalisées en bref, comme <code class="prettyprint"><pincopallino></code>) <strong>sont éliminé</strong> strong>, ainsi que <code class="prettyprint"><script></code>, <code class="prettyprint"><link></code>, et apparemment des trucs comme <code class ="prettyprint" aussi ><video></code> - mais <code class="prettyprint"><iframe></code>, pour ainsi dire, fonctionne, et heureusement, mon bien-aimé <code class="prettyprint" aussi ><détails>< /code>.</li>
</ul>

<p>Il est très clair qu'<strong>il ne peut remplacer</strong> à 100% absolument <strong>aucune section du site ctt</strong>, pas même celle du MicroBlog, et même s'il le pouvait, il créerait fragmentation : le site principal ne contiendrait pas tous les posts de manière centralisée, et toute personne intéressée devrait donc suivre 2 sites différents.</p>

<h2>Le blogoctt avec Standard Notes</h2>

<p>J'étais <em>presque</em> sur le point d'abandonner, mais heureusement, j'ai un éclair de génie : <em>Mais je peux <strong>écrire sur Standard Notes</strong> et avoir le <strong >note que se <strong>synchronisent-ils automatiquement</strong> en tant que fichiers <strong>sur le site</strong> ? ...Non, il n'y a aucun moyen. Non, attends, qui a dit ça ? Je dis qu'il existe un moyen.</em></p>

<p>Maintenant, Standard Notes, comme je l'ai dit, utilise un système de cryptage des données côté client, donc pour accéder aux notes depuis votre compte <strong>vous devez utiliser</strong> au minimum un <strong>logiciel</strong> spécifique. <strong>spécialisé</strong>.<br>
Il existe <em>sn-cli</em>, le client officiel en ligne de commande, qui pourrait être utile pour créer des scripts... mais <a href="https://github.com/jonhadfield/sn- cli/issues /33" rel="noopener nofollow" target="_blank">il semble avoir été abandonné</a> : rien à faire.</p>

<h3>Solution "à ma façon"</h3>

<p>Alors, là aussi, je parle, et je dis : <em>Qui a dit que je devais faire les choses correctement et utiliser de "vraies" API ?</em><br>
Je dis cela, car pour une raison quelconque, le <strong>HTML</strong> d'un blog <strong>sur Listed</strong> (plus précisément, la page <a href="https://listed.to/ @u8/ all">/all</a>, le seul qui me semble vraiment tout inclure, et pas seulement les X derniers posts) <strong>include as</strong> string <strong>JSON</strong> i data de <strong>tous les messages</strong>, je peux alors simplement <strong>publier</strong> dans Listed <strong>by Standard Notes</strong> et avoir un <strong>programme qui fait</strong> le dirt - mais dans ce cas très simple, puisqu'il suffit de télécharger et d'analyser 1 fichier - travail de <strong>scraping</strong>.</p>

<p><em>Et script fu scripto.</em> Je le laisse ici : <a href="https://gitlab.com/octtspacc/sitoctt/-/blob/main/Scripts/ListedDownsync.js" rel = "noopener nofollow" target="_blank">gitlab.com/octtspacc/sitoctt/Scripts/ListedDownsync.js</a>; Attention cependant, il n'y a <em>rien de sympa à lire</em>, aussi parce que je n'ai pas encore implémenté tout ce qui devrait me servir sur le long terme, mais <strong>pour ceux qui veulent l'utiliser</strong > c'est là <br>
Il est techniquement <strong>indépendant du site ctt</strong> et statique, car il <strong>enregistre</strong> de simples <strong>fichiers Markdown</strong> sur le disque (même si la syntaxe des lignes de métadonnées écrites en eux, c'est le mien ; donc, dans ce cas, certaines chaînes de texte du programme doivent être modifiées pour prendre en charge le format de métadonnées YAML plus classique).</p>

<p>Je ne veux pas dire que j'ai vraiment pensé à tout, mais je m'en suis approché.<br>
Non, je n'arrive toujours pas à décider - à cause de mon <em>paturnia</em> - quel standard utiliser pour indiquer les blocs spéciaux (de métadonnées ou de HTML à ne pas interpréter par le SSG de Listed).<br>
Non, je n'ai pas encore créé le script pour démarrer en tant que <strong>cronjob</strong> sur le serveur, qui devrait de temps en temps <strong>télécharger les données</strong> du <strong>Listed</strong>. strong> blog et < strong>mettre à jour</strong> les fichiers dans le <strong>dépôt Git</strong> s'il y a des mises à jour.<br>
Cependant, j'ai pensé aux choses vraiment obligatoires, comme la possibilité pour le programme de synchronisation de ne pas écraser un fichier déjà dans le repo si cela précise la chose dans les métadonnées. Supposons qu'un désordre se produise et que je doive modifier les données de publication du site ctt sans toucher aux données de note sur Standard Notes : en définissant cet indicateur, le script de synchronisation ne le remplacera pas lors de sa prochaine exécution.</p>

<h2>Conclusions</h2>

<p>Comment conclure, alors.<br>
Aujourd'hui <strong>J'ai déjà trop écrit</strong> (il s'est avéré qu'il s'agissait d'un article de blog et non d'un microblog !), et je vais terminer ici. Mais j'espère sincèrement que toute cette nouvelle efficacité et commodité, ayant une <strong>technologie supplémentaire qui fonctionne pour moi</strong>, et ne m'oblige pas à travailler pour cela <em>(en théorie, de toute façon, les problèmes doivent ressortir , sinon je ne suis pas moi !)</em>, que cela <strong>me fasse écrire davantage</strong> et <strong>avec plus de plaisir</strong>. Que ce soit sur le <strong><a href="https://sitoctt.octt.eu.org" rel="noopener nofollow" target="_blank">sitoctt</a></strong>, ou sur les dalles de pierre .</p>

<p>Ah, oui, voici le <strong>premier article</strong> sur <a href="https://listed.to/@u8">mon <strong>blog répertorié</strong>< / a>, c'est juste de le souligner pour ceux qui lisent sur le site ctt... mais j'espère qu'au moins la version répertoriée du blog pourra être bien indexée et <strong>découverte par plus de personnes</strong>, pendant que nous J'y suis.<br >
C'est justement dans l'espoir d'atteindre cet objectif que j'accepte quelques <strong>compromis</strong> lorsque j'écris ici, comme se passer des macros (que je peux utiliser avec statiso, alors qu'ici elles produiraient des trous dans le texte et liens brisés), afin que les articles puissent également être consultés efficacement à partir des pages répertoriées.</p>





<h2>{{% i18n notes-refs %}}</h2>

<ul>
<li><strong>Mises à jour</strong> du message :

<ul>
<li><strong>16/12/2022</strong> : j'ai ajouté une photo de couverture pour l'article et clarifié le dernier détail que j'avais oublié.</li>
<li><strong>14/12/2022</strong> : j'ai ajouté une mise en forme supplémentaire et corrigé certaines expressions.</li>
</ul></li>
</ul>
