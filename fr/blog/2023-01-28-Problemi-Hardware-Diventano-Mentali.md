+++
Title = "🤯 Quand les problèmes matériels deviennent mentaux (putain de Raspino)"
Date = 2023-01-28
Downsync = "/it/blog/Hardware-Problems-Become-Mental.html"
Aliases = [ "/Posts/2023-01-28-Hardware-Problems-Become-Mental.html" ]
Description = "Des services qui s'effondrent décrétant la fin de mon Règne de Terreur, des journées perdues à dire bon sang à Rasperino, et 2 mois de vicissitudes..."
Categories = [ "Administrateur système", "Rasperino" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Généré automatiquement par ListedDownsync.js. Ne modifiez pas (sauf si vous définissez également "% Downsync = False") - cela serait écrasé. -->

<p>Jusqu'à il y a 2 mois, mon <strong>royaume de Rasperino</strong> était à sa <strong>splendeur maximale</strong> : l'instance Misskey, mise en place à peine 2 semaines plus tôt, < strong>elle allait génial</strong>, et maintenant (presque) tout semblait destiné à bien continuer...<br>
Et au lieu de cela, <strong>des problèmes sont survenus</strong>. Disons qu'il m'a fallu un peu de temps pour m'en rendre compte, car ils se sont développés <strong>d'une manière étrangement <strong>graduelle</strong>.</p>

<h2>Les premières fissures</h2>

<p>J'ai remarqué la première chose vraiment <strong>étrange</strong> vers le début du mois de décembre, lorsque j'ai réalisé que <strong>le système pouvait planter</strong> en essayant d'effectuer une opération très banale mais < strong> spécification</strong> : créer une grande archive de fichiers (compressés ou non)... avec n'importe quel programme.<br>
Ce petit inconvénient a, à son tour, provoqué un <strong>problème secondaire</strong>... J'y arrive.<br>
Cependant, je n'y ai pas prêté trop attention. Comment pourrais-je ? Le reste, s'il n'était pas touché, <strong>fonctionnait</strong>, <strong>mis</strong> une légère <strong>dégradation des performances</strong> due au propre travail de Misskey.</p>



<h3>Le premier effondrement</h3>

<p>Mais ensuite, ces 2 autres semaines de paix relative se sont écoulées et je <a href="https://mastodon.uno/@octo/109508472717947364" rel="noopener nofollow" target="_blank">me réveille < /a> avec le <strong>serveur crashé</strong>, et qui <strong>meurt gravement</strong> après l'un de mes redémarrages manuels (débrancher et rebrancher l'alimentation, c'est le seul moyen). <a href="https://mastodon.uno/@octo/109518037875867744" rel="noopener nofollow" target="_blank">Après 2 jours</a> de <strong>recherches très compliquées</strong> je l'ai fait Je n'ai pas vraiment compris quelle était la cause générale du problème, mais seulement le symptôme le plus grave, et j'étais maintenant presque <strong>convaincu</strong> que, d'une manière <em>mystique</strong> > Misskey a réussi à lui seul à démonter l'intégralité du serveur, qui a recommencé à fonctionner correctement sans que ce logiciel particulier ne soit exécuté. Bon, il y avait une certaine logique dans mon raisonnement, étant donné que de toute façon l'utilisation <strong>moyenne</strong> du CPU et de la RAM était <strong>élevée</strong> (même si elle ne saturait pas complètement <). br>
Cependant, les jours suivants, avec <strong>quelques tests</strong>, j'ai découvert que le serveur ne plantait pas à cause du serveur de microblogging, mais à cause de ce qu'il fait office de <strong>base de données</strong> : PostgreSQL (dans Docker). Si j'exécutais Misskey sur mon PC, mais que je le laissais se connecter à la base de données du Raspino, en quelques secondes, avec l'arrivée de tant de notes, le serveur fruité mourait.</p>

<p>De toute façon, à présent, la nécessité <strong>d'installer autre chose</strong> était évidente pour moi, car j'étais convaincu que Misskey était trop lourd, et tant pis.<br>
Pendant 2 jours <strong>J'ai essayé Epicyon</strong>, une plateforme pour le moins <strong>particulière</strong>... et <a href="https://sitoctt.octt.eu.org /Posts /2022-12-26-Epicyon-Piattaforma-del-Fediverso-Durata-2-Giorni.html" rel="noopener nofollow" target="_blank">l'expérience n'a pas été vraiment agréable</a>, mais je Cette réflexion était complète, étant donné que j'ai écrit quatre mille mots dans mon article dédié. Immédiatement après, j'ai décidé d'essayer un autre logiciel que je n'avais jamais vu auparavant, à savoir <a href="https://github.com/superseriousbusiness/gotosocial" rel="noopener nofollow" target="_blank"> GoToSocial< /a>. Avec ce dernier, bien qu'il soit déclaré de qualité alpha (et en fait il a quelques problèmes), je me suis retrouvé - parce que hélas maintenant c'est fini... J'y arrive, j'y arrive - très bien, mais < strong>ce n'est pas le sujet </strong>.</p>

<h3>Problèmes de plus en plus suspects</h3>

<p>Quelques jours plus tard, ces étranges <strong>plantages</strong> ont recommencé à apparaître, mais cette fois ils étaient décidément <strong>suspects</strong>, car l'<strong>utilisation générale des ressources</strong > du système était <strong>faible</strong>. J'ai essayé de lire les <strong>logs système</strong> de manière productive, mais ma <strong>patience</strong> avait maintenant atteint <strong>la limite</strong>, et avec elle ma lucidité, donc chaque jour, j'ai cherché la moindre erreur suspecte mais lisible, en me concentrant là-dessus et en ignorant complètement <strong>l'erreur illisible</strong> qui était toujours devant moi.</p>

<p>À présent, juste <strong>par désespoir</strong>, mais pas parce que j'ai compris par raisonnement que c'était là le problème, je décide de <strong>changer</strong> la <strong>microSD</strong > carte, et maintenant que je l'ai fait, je regrette amèrement... <strong>de ne pas avoir essayé avant</strong> ! C'était là le problème, imprudent Maremme !<br>
La bonne chose est que la veille j'avais fait une vérification des systèmes de fichiers (ext4), à la fois de la carte et de mon disque dur USB, et tout était ressorti (à peu près) propre, j'avais donc exclu a priori les problèmes matériels : "<em>si les fichiers ne sont pas corrompus...</em>" ai-je pensé.<br>
À peu près au même moment (le destin a décidé que les secours devaient arriver en retard !), cependant, une personne m'a donné un coup de main pour comprendre ce que disaient ces lignes indéchiffrables, qui ressemblaient à quelque chose..</p>

<style>
.highlight.plaintext:first-of-type { hauteur maximale : 80vh ; }
</style>
<div class="highlight"><pre class="highlight plaintext"><code>27 décembre 06:32:35 noyau : [27230.964650] INFO : tâche kworker/2:0:21874 bloquée pendant plus de 860 secondes.
27 décembre 06:32:35 noyau : [27230.964693] Entaché : G C 5.15.76-v7+ #1597
27 décembre 06:32:35 noyau : [27230.964709] "echo 0 > /proc/sys/kernel/hung_task_timeout_secs" désactive ce message.
27 décembre 06:32:35 noyau : [27230.964723] tâche : kworker/2:0 état : pile D : 0 pid : 21874 ppid : 2 indicateurs : 0x00000000
27 décembre 06:32:35 noyau : [27230.964760] File d'attente : events_freezable mmc_rescan
27 décembre 06:32:35 noyau : [27230.964801] Backtrace :
27 décembre 06:32:35 noyau : [27230.964824] [<80a4ff38>] (__schedule) de [<80a50a7c>] (schedule+0x7c/0x134)
27 décembre 06:32:35 noyau : [27230.964868] r10:81f90800 r9:ffffe000 r8:00000000 r7:00000000 r6:60000013 r5:8d368000
27 décembre 06:32:35 noyau : [27230.964884] r4:ffffe000
27 décembre 06:32:35 noyau : [27230.964896] [<80a50a00>] (programme) de [<8083f658>] (__mmc_claim_host+0xe0/0x238)
27 décembre 06:32:35 noyau : [27230.964929] r5:81f90a18 r4:00000002
27 décembre 06:32:35 noyau : [27230.964942] [<8083f578>] (__mmc_claim_host) de [<8083f7e8>] (mmc_get_card+0x38/0x3c)
27 décembre 06:32:35 noyau : [27230.964979] r10:baaf8205 r9:00000000 r8:baaf8200 r7:00000080 r6:baaf4b80 r5:00000000
27 décembre 06:32:35 noyau : [27230.964994] r4:81f91800
27 décembre 06:32:35 noyau : [27230.965007] [<8083f7b0>] (mmc_get_card) de [<80849238>] (mmc_sd_detect+0x24/0x7c)
27 décembre 06:32:35 noyau : [27230.965039] r5:81f90800 r4:81f90800
27 décembre 06:32:35 noyau : [27230.965052] [<80849214>] (mmc_sd_detect) de [<80841ca4>] (mmc_rescan+0xac/0x2d4)
27 décembre 06:32:35 noyau : [27230.965083] r5:81f90800 r4:81f90a7c
27 décembre 06:32:35 noyau : [27230.965096] [<80841bf8>] (mmc_rescan) de [<8013e158>] (process_one_work+0x250/0x57c)
27 décembre 06:32:35 noyau : [27230.965140] r9:00000000 r8:baaf8200 r7:00000080 r6:baaf4b80 r5:8e898f00 r4:81f90a7c
27 décembre 06:32:35 noyau : [27230.965153] [<8013df08>] (process_one_work) de [<8013e4e4>] (worker_thread+0x60/0x5c4)
27 décembre 06:32:35 noyau : [27230.965195] r10:baaf4b80 r9:81003d00 r8:baaf4b98 r7:00000008 r6:baaf4b80 r5:8e898f18
27 décembre 06:32:35 noyau : [27230.965210] r4:8e898f00
27 décembre 06:32:35 noyau : [27230.965223] [<8013e484>] (worker_thread) de [<80146804>] (kthread+0x178/0x194)
27 décembre 06:32:35 noyau : [27230.965264] r10:837c4000 r9:8d3a7e74 r8:00000000 r7:8e898f00 r6:8013e484 r5:8285ee00
27 décembre 06:32:35 noyau : [27230.965279] r4:8d0d3640
27 décembre 06:32:35 noyau : [27230.965291] [<8014668c>] (kthread) de [<801000d4>] (ret_from_fork+0x14/0x20)
27 décembre 06:32:35 noyau : [27230.965321] Pile d'exceptions (0x837c5fb0 à 0x837c5ff8)
27 décembre 06:32:35 noyau : [27230.965341] 5fa0 : 00000000 00000000 00000000 00000000
27 décembre 06:32:35 noyau : [27230.965363] 5fc0 : 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
27 décembre 06:32:35 noyau : [27230.965383] 5fe0 : 00000000 00000000 00000000 00000000 00000013 00000000
27 décembre 06:32:35 noyau : [27230.965405] r10:00000000 r9:00000000 r8:00000000 r7:00000000 r6:00000000 r5:8014668c
27 décembre 06:32:35 noyau : [27230.965420] r4:8285ee00
</code></pre></div>
<p><strong>Chaque fois</strong> qu'une erreur comme celle-ci se produisait, tout le <strong>système mourait</strong> très gravement : <strong>maladie</strong> pour les petits robots, <strong>mort< /strong> strong> au serveur HTTP (nginx), <strong>blessures</strong> à mes agrégateurs d'articles et de flux (wallabag et FreshRSS), <strong>au revoir pour toujours</strong> à tout ce qui me permet d'ouvrir un console via Internet sur Rasperino (SSH, Telnet, et même un serveur mis en place avec netcat). La seule chose qui a continué à fonctionner est la <strong>crachat constant</strong> de ce type exact d'<strong>erreur</strong> dans le fichier journal.<br>
Maintenant, je sais que <em>je suis fort</em>, mais avec tous ces chiffres étranges dans mon chemin <strong>je ne pouvais absolument pas</strong> voir des mots comme <code class="prettyprint">mmc_get_card </strong> code> ou <code class="prettyprint">mmc_sd_detect</code> ! Et donc je n'ai vraiment pas compris que peut-être, <em>juste peut-être</em>, la <strong>microSD</strong> <em>cagona</em> que j'avais choisie pour Raspi début septembre ( parmi ceux libres à la maison), quand je remettais ce pauvre petit ordinateur en serveur, il <strong>tendait à mourir</strong>.</p>

<p><img src="{{< assetsRoot >}}/Media/Misc/microSD-8GB-Generic.webp" alt="La carte microSD qui a lentement réussi à me rendre fou. Notez l'absence de marques. "> </p>

<p>Je ne veux pas avoir recours à des <strong>lieux communs</strong>, mais cette fois <strong>il n'y a pas grand-chose à faire</strong> ! Je veux dire, la photo parle d'elle-même :</p>

<citation de bloc>
<p><em>La présence d'une marque renommée n'est pas une garantie de qualité, mais l'absence de marque est certainement une promesse d'une qualité absente.</em></p>
</blockquote>

<p>Bien que sur le PC, <strong>l'ancienne carte indésirable semble toujours <strong>fonctionner</strong> - j'ai pu le confirmer car au moins j'ai pu faire un dump de données - <strong>Je ne le fais pas Je ne veux plus avoir à gérer des trucs comme ça ! Je considère donc que c'est <em>mal</em> dans mon esprit.<br>
Encore plus de temps a été perdu à flasher le dump sur une nouvelle carte, étant donné que les deux seules autres cartes dont je disposais à l'époque étaient respectivement de 4 et 32 Go, et je voulais vraiment mettre (après avoir supprimé divers journaux et caches, car la mémoire précédente était de 8 Go) tout sur celle de 4 Go, mais rien ne pouvait être fait ; et au final c'était 32 Go.</p>



<h2>La paix violée</h2>

<p>L'important est que, <strong>J'ai mis la nouvelle SD</strong> dans le <em>serveur Raspberry</em>, ces erreurs terrifiantes ne se sont plus produites et les gros <strong>problèmes</strong > ils <strong>ont disparu</strong>... ou du moins c'est ce que <strong>je pensais, je voulais, j'espérais</strong>.<br>
Si cet article, qui aurait dû être publié à la fin de l’année dernière, n’est publié que maintenant, il y a des raisons. Immédiatement après avoir changé la carte SD, <strong>j'ai préféré attendre</strong> quelques jours, pour voir si les choses s'étaient vraiment calmées, et pour éviter de crier victoire trop tôt. <strong>J'ai bien fait !</strong></p>



<h3>Le disque souffrant</h3>

<p>Hélas, en fait, ces autres choses vues dans les journaux ces derniers jours <strong>n'étaient pas</strong> d'énormes <strong>trous d'eau</strong> (<em>encore troublés</em >), notamment les <strong>erreurs</strong> que j'ai immédiatement reconnues liées au <strong>disque USB</strong>.<br>
C'est quelque chose qui m'est déjà arrivé dans le passé avec un autre adaptateur USB pour disques SATA 2,5", même sur différentes machines (à l'époque où j'utilisais ma console Nintendo Switch comme serveur...), mais avec celui-ci qui J'utilise maintenant il n'y a <strong>jamais eu de problèmes</strong> Et pourtant maintenant, d'après ce que je peux voir, <strong>il se déconnecte</strong> de l'hôte <strong>de manière aléatoire</strong>, < strong>mourir</strong>tous ces <strong>processus</strong> qui dépendent des fichiers qui se trouvent sur ce disque, comme s'il y avait soudainement des moments où toute combinaison d'adaptateurs SATA et de câbles USB ne reçoit pas assez de puissance (à la fois court et long), <strong>le disque fonctionne toujours</strong> très bien <strong>sur PC</strong>, donc <strong>le problème</strong> vient clairement du <strong>Raspino</strong> >... mais allez comprendre pourquoi !</p>

<p>Ils me disent que <strong>les ports USB-A du Raspi</strong> sont nuls par nature<sup>[<em>citation requise (?)</em>]</sup>, mais le point c'est ce qui <strong>fonctionnait</strong> jusqu'à récemment (tous les 4) ! Une <em>diode est cassée</em> dans mon alimentation ? Que sur la carte de ce foutu ordinateur monocarte, un condensateur a <em>explosé</em> ? Que l'électricité dans ma maison n'est plus du 230V, mais du 229V, et donc le transformateur au lieu de donner 5 volts en sortie donne 4,98 ? <strong>...Mais qu'est-ce que j'en sais.</strong><br>
Pour en revenir au monde réel, la seule hypothèse sensée me semble être la suivante : en insérant et en débranchant le connecteur d'alimentation dans son port (micro USB-B 2.0, <em>cette grosse merde !!!</em>), le les broches d'un côté ou les plots de l'autre seront usés, donc leur surface de contact est plus petite, donc la résistance électrique est plus grande, et donc l'appareil est alimenté avec une tension légèrement inférieure, et lorsqu'un périphérique a besoin d'absorber beaucoup , voici les <em>patatracs</em>.</p>



<h3>Pour essayer de résoudre</h3>

<p>Ne pas avoir d'autre <em>Raspone</em> comme celui-ci, et ne pas avoir d'autres alimentations 5V 3A, <strong>Je ne découvrirai jamais la vérité</strong>, <strong>mais la solution</strong> d'une manière ou d'une autre <strong>je dois le trouver</strong> par la force.<br>
Après avoir <strong>attendu si longtemps</strong> que les <strong>problèmes</strong> du serveur n'ont fait que s'aggraver et que les <strong>temps d'arrêt</strong> sont beaucoup <strong>plus fréquents</strong>, je décide pour <strong>acheter un câble USB-A-Y</strong>. Dans le pire des cas, même si vous n'avez pas résolu le problème, il est toujours pratique d'avoir un câble de ce type car - malgré le <strong>respect des normes USB</strong> <sup id="fnref1"><a class="footnote -ref" href ="#fn1">1</a></sup>- certains appareils causent beaucoup de problèmes sans cela, et certains fabricants de périphériques <em>merdiques</em> recommandent même d'utiliser des câbles de ce type en cas de problème (et cependant, ils procèdent à <strong>ne pas</strong> en inclure un dans le colis, indécent !).</p>

<p><strong>Une fois le câble arrivé</strong>, j'arrange toutes les connectiques et je remarque quelque chose de particulier : <strong>le courant</strong> qui vient de la deuxième alimentation USB pour alimenter le disque, <strong >peut</strong> strong> remonter le câble jusqu'à ce qu'il <strong>rentre dans le Pi</strong>. Le problème n'est pas tant le <strong>câble</strong>, qui fonctionne et <strong>respecte</strong> toutes les <strong>lois de la physique</strong> (même si ce n'est pas celles de la norme USB), mais plus le fait que le Raspberry n'a même pas, je ne sais pas, de diodes dans les ports USB-A. Et c'est un problème que je ne découvre pas, lisez simplement <a href="https://forums.raspberrypi.com/viewtopic.php?t=44584" rel="noopener nofollow" target="_blank">sur le forum officiel </a>. Dans tous les cas, pour avoir un circuit configuré comme ceci :</p>

<ul>
<li><strong>Il n'y a aucun risque</strong> pour l'instrumentation ou l'environnement si vous utilisez des alimentations électriques appropriées en amont, et la mienne <em>devrait</em> être<sup id="fnref2"><a class="footnote-ref" href="#fn2">2</a></sup>;</li>
<li><strong>Des problèmes pratiques <strong>il y en a, mais aussi des solutions</strong> et des arrangements : je pourrais, comme ils le suggèrent sur le forum, appliquer du ruban isolant sur le plot +5V du connecteur USB qui va chez Raspantino ; mais pour l'instant il n'y a pas vraiment de besoin, la seule chose à laquelle je dois faire attention c'est que les choses sont alimentées dans cet ordre, les rares fois où je me retrouve à devoir faire un hard reset du système :

<ol>
<li><strong>Disque USB</strong> (connecté au port du câble Y) ;</li>
<li><strong>Raspi</strong> (depuis son port d'alimentation) ;</li>
<li>Après avoir attendu au moins ~10 secondes, <strong>disque</strong> connecté au Raspberry (connecteur de données du câble Y connecté au Raspberry).</li>
</ol></li>
</ul>

<p>Je ne sais pas pourquoi, d'autant plus que cela n'est pas nécessaire pour les redémarrages progressifs, mais sans cette procédure, le démarrage peut échouer.</p>

<h2>Enfin, reposez-vous</h2>

<p>En fin de compte, cependant, <strong>l'enfer</strong> semble <strong>terminé</strong> et le <strong>serveur</strong> <strong>fonctionne</strong> maintenant. <br>
Les flammes ont cependant fait quelques dégâts : les <strong>bases de données</strong> de plusieurs de mes services hébergés sont devenues <strong>corrompues</strong>, et de 2 en particulier (GoToSocial, dont j'ai déjà parlé, et Peka, un chatbot basé sur une chaîne de Markov) <strong>J'ai des sauvegardes trop anciennes</strong> (depuis des semaines) car, avec le serveur en train de mourir, mes scripts de sauvegarde n'ont jamais réussi à fonctionner... et donc <strong> ces programmes </strong> sont toujours <strong>hors ligne</strong> maintenant, car <strong>je n'ai pas encore eu <strong>la force de me résigner</strong> à restaurer les anciennes sauvegardes.<br>
Mais j'<strong>achète le câble un peu plus tôt</strong>, et j'éteins le serveur en attendant, <strong>pas vraiment, hein ?</strong></p>

<p><strong>En espérant</strong> que des choses comme celle-ci ne se reproduiront plus dans un avenir proche, sinon <strong>je deviendrai complètement et irrémédiablement fou</strong> à cause de ces foutus problèmes matériels, je vous salue et j'aimerais que tu n'aies jamais à <em>putain</em> autant que moi. 😔</p>





<h2>{{% i18n notes-refs %}}</h2>

<div class="footnotes">
<ol>

<li id="fn1">
<p>Cela a été une surprise pour moi aussi, mais <strong>la norme USB interdit les câbles en Y</strong> : voir <a href="https://compliance.usb.org/index.asp?UpdateFile= Politiques# 72" rel="noopener nofollow" target="_blank">Mise à jour 72</a>; traduit en anglais,</p><blockquote><em>L'utilisation d'un câble "Y" (un câble avec deux connecteurs A) est interdite sur tout périphérique USB. Si un périphérique USB nécessite plus d'énergie que celle autorisée par la spécification USB pour laquelle il a été conçu, il doit être auto-alimenté.</em></blockquote> Eh bien, comme les règles sont belles, mais vient ensuite la réalité et la réflexion. un peu différemment. L'ensemble du <strong>monde réel utilise des câbles Y</strong> sans trop de <em>chichi</em>. <a href="#fnref1">↩</a><p></p>
</li>

<li id="fn2">
<p>(Les deux <strong>5 V</strong>) </p><ul><li>Pour le <strong>Pi</strong>, une alimentation <strong>3A</strong> (juste au-dessus de < a href="https://github.com/raspberrypi/documentation/blob/develop/documentation/asciidoc/computers/raspberry-pi/power-supplies.adoc" rel="noopener nofollow" target="_blank">le suggéré par Raspberry Foundation</a>) qui était inclus dans un kit (hors ordinateur) d'accessoires pour le Raspante, par <strong>Aukru</strong>. Eh bien, après des années, ça n'a pas explosé, puis les critiques étaient bonnes quand même, et cette marque vend toujours de nouvelles alimentations, donc ça va...</li><li>Pour une puissance <strong>supplémentaire</strong> , un bloc <strong>1A</strong> qui était inclus dans le package de mon ancien téléphone <strong>Huawei</strong> bas de gamme (également commercialisé en Europe), de 2017.</li></ul> <a href="#fnref2">↩</a><p></p>
</li>

</ol>
</div>
