+++
Title = "🌽 Compilez et installez le noyau Linux à partir des sources"
Date = 2024-09-01
Description = "Conseils généraux sur la façon de compiler Linux pour des ordinateurs à usage général, utiles pour résoudre des problèmes ou obtenir des fonctionnalités spéciales."
Featured_Image = "@/Media/Decor/dall-e_44be7d57-5b1d-44ff-bf54-421d95165b5f.jpeg"
Downsync = "/en/note/Compile-Install-Linux-Kernel.html"
Categories = [ "Linux" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Généré automatiquement par ListedDownsync.js. Ne modifiez pas (sauf si vous définissez également "% Downsync = False") - cela serait écrasé. -->

<p>Ce n'est pas souvent que de nouvelles idées viennent à l'esprit, mais quand elles surviennent, elles sont toujours juste ce qu'il faut de bizarre... Sans trop m'éloigner, c'est justement à cause de cette évolution des choses qu'il y a des années, pour le première fois, je me suis retrouvé à compiler le noyau Linux à partir des sources — sur un Raspberry Pi 3 entre autres, ce que, avec le recul, je ne recommanderais pas — et maintenant, hier précisément, encore une autre fois, après des années (cette fois sur PC, heureusement ), dans un but que je ne gâcherai pas.</p>

<h2>Pourquoi recompiler le noyau ? 😯️</h2>

<p>Linux est basé sur une architecture monolithique, ce qui ne nous préoccuperait guère... si ce n'était du fait que cela a une implication gênante : toute fonction qui fonctionne au niveau du noyau doit y être compilée. . Même le mécanisme des soi-disant modules ne couvre pas toutes les situations possibles (du moins pas sur le plan pratique), et on peut donc se retrouver dans des situations dans lesquelles le noyau fourni par la distribution (ou par le fabricant du matériel), même s'il est mis à jour, n'a pas quelque chose qui est nécessaire et doit donc être remplacé.</p>



<p>Considérant la variété infinie des distributions Linux, des référentiels qui distribuent des noyaux compatibles ou non, et en combinant cela avec la diversité des options individuelles qui peuvent être activées lors de la compilation du noyau... ce n'est pas seulement dans de rares cas que la compilation à partir des sources est la seule solution, mais c'est souvent la plus pratique. Heureusement, la compilation du noyau Linux est très simple — nettement plus facile que l'application de bureau Linucs moyenne, avec trois mille dépendances toujours en conflit — mais il n'y a peut-être pas de détails si immédiats dans le processus, alors… voici ma note </p> !

<h2>0. Départ et prérequis 📦️</h2>

<p>Cette note porte sur la recompilation plus générique du noyau Linux, c'est à dire la variante officielle (celle de Linus Torvalds) sur et pour un PC de bureau x86_64 (ou AMD64). Pas de forks ou de variantes corrigées, pas de versions OEM merdiques, pas d'installation sur des appareils embarqués ou autrement ésotériques, pas de compilation distribuée ou multiplateforme. Pour les cas plus ou moins limites, les choses à faire peuvent varier plus ou moins, même si la tendance reste la même... tu vois, allez, le fait est que j'assume cette situation. Dans mon cas, il n'y a même pas de modules de noyau propriétaires.</p>

<p>Mis à part les outils favoris pour obtenir le noyau, le décompresser si nécessaire, et quelques distractions pour passer un temps considérable, les prérequis sont assez minimes. Au minimum, vous avez besoin d'un compilateur C (gcc) pour des raisons évidentes, de GNU Make pour exécuter les makefiles, de quelques outils assortis au nom oubliable et de quelques bibliothèques super spécifiques d'intérêt limité. Ensuite, je pense que d'autres packages peuvent être nécessaires, en fonction de la distribution Linux utilisée ou des fonctionnalités à compiler.</p>

<p>En fait, il n'est pas très clair sur le Web quels packages sont vraiment nécessaires et lesquels quelqu'un qui a réalisé d'autres guides a dit "eh bien, mettons-le juste pour être sûr"... Je mettrai à jour ici avec le prix précis des listes au fur et à mesure que je vérifie, y compris des planches excessives si nécessaire (pour ceux qui acceptent de perdre de l'espace mais pas du temps). Pour moi, c'est généralement une stratégie d'installer le minimum possible lorsqu'une exigence n'est pas claire, de démarrer la compilation et d'installer toute autre dépendance lorsque des erreurs surviennent à cet égard.</p>



<p>Debian et dérivés (<code class="prettyprint">apt</code>) :</p>

<ul>
<li><code class="prettyprint">build-essential</code> <code class="prettyprint">libelf-dev</code> (obligatoire)</li>
<li><code class="prettyprint">ncurses-dev</code> (pour utiliser la configuration du menu TUI)</li>
</ul>

<h2>1. Obtention du code ⛓️</h2>

<p>Le code source Linux peut être pris officiellement <a href="https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git" rel="noopener nofollow" target =" _blank">depuis Git principal</a>, <a href="https://github.com/torvalds/linux" rel="noopener nofollow" target="_blank">depuis Torvalds GitHub</a> , ou < un href="https://kernel.org" rel="noopener nofollow" target="_blank">du site Kernel.org</a>. Je préfère la dernière option, qui affiche bien en évidence les dernières versions réellement nécessaires, jusqu'à la branche prise en charge la plus ancienne.</p>

<p>Il existe plusieurs versions prises en charge à un moment donné. Généralement, s'il n'y a aucune raison d'installer un noyau plus ancien, un noyau plus récent est préférable ; Ce n’est pas trop nouveau cependant, car vivre à la pointe de la technologie signifie perdre du sang, avec parfois des problèmes parfois même graves qui peuvent surgir ! Du coup, j'évite la branche <code class="prettyprint">mainline</code>, mise à jour quotidiennement ou presque, comme la peste, et choisis généralement <code class="prettyprint">stable</code>, mise à jour avec un peu "plus de jours. D'autres utilisateurs pourraient légitimement préférer le plus récent <code class="prettyprint">longterm</code> (celui du haut), pour encore plus de stabilité, mais je le trouve inutile.</p>

<p>Pour chaque ligne de version, à part la date, ce qui compte c'est le lien [tarball], donc vous téléchargez ce fichier là. Vous pouvez ensuite l'extraire dans un dossier pratique, entre autres, avec la commande <code class="prettyprint">tar xvf <file></code>. Toutes les commandes à exécuter à partir de ce point se trouveront dans le dossier préparé.<br>
<img src="{{< assetsRoot >}}/Media/Linux-Kernel/2024-09-02-kernel.org.png" alt="kernel.org"></p>

<p>...Vous devez également télécharger le fichier PGP, lorsqu'il est présent, qui sert à vérifier que le téléchargement est intact et qu'il provient de distributeurs légitimes. En réalité, cependant, toutes les versions ne l'ont pas déjà (ce qui implique qu'au fond...), le téléchargement se fait depuis le site officiel avec HTTPS (il sera donc difficile de le modifier), c'est une archive compressée (donc si elle est corrompue devrait échouer l'extraction), et faire la vérification est une douleur époustouflante dans le cul. D'autres institutions auront des exigences de sécurité plus élevées, mais pour les utilisateurs privés, c'est franchement ennuyeux, je ne le fais pas, je m'en fiche.</p>



<h2>2. Configuration du noyau 🔩️</h2>

<p>La configuration du noyau est la partie la plus complexe... parce que vous ne pouvez pas exécuter de commandes par inertie, mais vous devez <em>choisir</em> ce dont vous avez réellement besoin, eh bien, avoir le noyau avec des options osseuses . Il existe, comme mentionné, des configurations infinies et différentes manières de les utiliser. Le point principal est qu'il existe un énorme fichier texte, avec diverses options (principalement booléennes), que vous pouvez modifier.</p>

<p>Modifier cette chose à la main est cependant fou, car il existe des outils intelligents basés sur des menus intégrés au processus de construction pour gérer les différentes possibilités. Ici aussi, un demi-gâchis, mais le choix se porte principalement entre deux programmes respectivement TUI et GUI, qui peuvent être invoqués respectivement avec <code class="prettyprint">make menuconfig</code> et <code class="prettyprint">make xconfig</code >. Je préfère <code class="prettyprint">xconfig</code> pour plus de commodité et, bien que j'aie utilisé la configuration du menu Curses dans le passé, et qu'elle soit assez intuitive pour moi, apparemment pour beaucoup, ce n'est pas le cas... et le comment utiliser ce menu n'est pas le sujet d'aujourd'hui.</p>

<table><tête>
<tr>
<th>menuconfig contre xconfig</th>
</tr>
</thead><tbody>
<tr>
<td><img src="{{< assetsRoot >}}/Media/Linux-Kernel/menuconfig.png" alt="menuconfig"></td>
</tr>
<tr>
<td><img src="{{< assetsRoot >}}/Media/Linux-Kernel/xconfig.png" alt="xconfig"></td>
</tr>
</tbody></table>

<p>Si vous ne faites rien d'autre, la configuration que vous allez modifier est celle par défaut du noyau au fur et à mesure de son développement. Je n'ai jamais eu de problèmes pour l'utiliser comme base, mais, si nécessaire, en plus de ceux partagés par d'autres utilisateurs, vous pouvez utiliser celui de la distribution actuelle. Selon la façon dont votre système expose la configuration du noyau, vous pouvez (généralement) la lire avec <code class="prettyprint">cat /boot/config-$(uname r)</code>, <code class="prettyprint"> cat /boot/config</code>, ou <code class="prettyprint">zcat /proc/config.gz</code>. Écrivez-le simplement (<code class="prettyprint">></code>) dans le fichier <code class="prettyprint">./.config</code> pour l'appliquer à la configuration actuelle.</p>

<p>Dans ce cas, je voulais activer le support du nouveau pilote NTFS, donc dans xconfig j'appuie sur CTRL+F, je recherche "ntfs3" et je règle sur (Y) l'option qui parle de "NTFS Read/Write <em >quelque chose quelque chose</em>" ; puis, je sauvegarde la configuration, je ferme, et... j'ai terminé, incroyable.</p>

<h2>3. Compilation du code 🧑u200d🍳️</h2>

<p>Avec la compilation, c'est un moment ennuyeux, car il faut simplement laisser le temps à l'ordinateur de traiter des millions (!) de lignes de code. Ce n'est pas bon, mais au moins ce n'est pas la fin du monde : sur n'importe quel PC qui n'est pas vraiment un hack, vous devriez le faire en moins de 4 heures. Sur le Raspberry Pi 3 cela m'a pris une journée et demie avec le CPU à températures nucléaires (et aussi pour cette raison je le déconseille...), mais sur mon PC (Ryzen 3 3200G, 16 Go de RAM dont un peu sont occupés par la compilation, sur un SSD bas de gamme) Je pense qu'il m'a fallu un peu moins de 3 heures pour compiler la version 6.10.7.</p>

<p>Il vous suffit d'exécuter <code class="prettyprint">make</code>, et Linucs se adaptera à l'architecture CPU actuelle, vive la magie ! Mieux encore, <code class="prettyprint">make -j$(nproc)</code> pour utiliser tous les cœurs de processeur disponibles... La poignée d'heures, je dois le souligner, sont mesurées par rapport à cela, sinon ce serait une demi-journée, puisque mon PC a 4 cœurs ; il pourrait le faire beaucoup plus tôt en ayant plus de cœurs, car il peut compiler efficacement encore plus de fichiers en parallèle.</p>

<p>Au moins pendant les premières minutes, c'est une bonne idée de garder un œil sur le terminal, pour voir si des erreurs se produisent et si la compilation s'arrête. Des erreurs absurdes ne me sont jamais arrivées, mais, comme je l'ai dit, si vous n'installez pas toutes les dépendances, quelque chose en rapport avec celles-ci pourrait sortir... dans ce cas, vous installez ce qui manque (en référence à votre distribution), et continuez avec la commande précédente.</p>

<p>En fonction de votre configuration, vous aurez besoin de plus ou moins d'espace disque pour terminer la compilation. Même si le noyau lui-même ne pèse jamais plus de quelques Mo (et les modules quelques dizaines de Mo), le dossier pesait en fin de compte environ 22 Go, c'est donc une bonne idée soit de vous assurer que vous disposez de suffisamment d'espace, soit vérifiez de temps en temps que cela ne se termine pas. Et si cela se termine pendant le processus, vous libérez simplement de l’espace et continuez comme avant. (Tant que votre système de fichiers n'est pas corrompu simplement en étant plein à 100 %, n'est-ce pas BTRFS ?)</p>

<h2>4. Installation des noyaux et des modules 🏗️</h2>

<p>Vous n'avez pas besoin des autorisations root pour compiler le noyau, ce qui est pratique au cas où vous souhaiteriez voler temporairement l'ordinateur le plus puissant de quelqu'un d'autre pour faire le travail... mais, pour l'installer, vous avez évidemment besoin de celles du système actuel. .</p>

<p>Ici, c'est non seulement simple, mais aussi assez rapide (quelques minutes maximum) : en lançant (en tant que root) d'abord <code class="prettyprint">make install</code>, puis <code class=" Prettyprint"> INSTALL_MOD_STRIP=1 make install_modules</code>, ils seront installés respectivement dans les chemins appropriés (en supposant que vous n'ayez pas modifié les noms) : l'image du noyau (<code class="prettyprint">vmlinuz-x.x.x-. ..</code >), généralement dans <code class="prettyprint">/boot</code> et les modules, généralement dans <code class="prettyprint">/lib/modules/linux-x.x.x-...< /code> . Les modules sont des fichiers distincts du noyau, car ils sont chargés par le système lorsque cela est nécessaire... le fait est que certains d'entre eux sont utilisés pour terminer le démarrage, ils doivent donc être installés.</p>

<p>Vous devez également préparer ce que l'on appelle le système de fichiers init, ou disque virtuel initial ; normalement, il se retrouve également dans <code class="prettyprint">/boot</code>, sous le nom <code class="prettyprint">initrd.img-x.x.x-...</code>. Et cette étape serait assez gênante s'il n'y avait pas de <code class="prettyprint">kernel-install</code>, de script inclus avec systemd, ou son alternative <code class="prettyprint">installkernel</code>. Ayant systemd, au moins le premier devrait déjà être installé, et dans ce cas (en supposant les noms d'avant) faites simplement (en tant que root) <code class="prettyprint">kernel-install add x.x.x-... /boot/ vmlinuz- x.x.x-...</code>; alternativement, avec le deuxième, <code class="prettyprint">installkernel x.x.x-... /boot/vmlinuz-x.x.x-...</code>.<sup id="fnref1"><a class="footnote- ref" href="#fn1">1</a></sup></p>

<p>Remarque : ceux qui développent avec le noyau (pas ceux qui lisent cet article, j'en ai bien peur) voudront peut-être ne pas définir la variable d'environnement <code class="prettyprint">INSTALL_MOD_STRIP=1</code>, car le débogage sans le débogage, que cet indicateur supprime, est difficile... mais pour les utilisateurs mortels ordinaires comme moi, ils gaspillent simplement de l'espace (à tel point que les distributions les emballent séparément). De plus, ceux qui ne développent pas nécessairement avec le noyau, mais doivent compiler des modules externes ou faire d'autres astuces, devraient également installer les fichiers d'en-tête correspondants sur le système : <code class="prettyprint">make headers_install</code> ( toujours en tant que root </p>

<p>Au moins sur les distributions "complètes", <code class="prettyprint">make install</code> puis <code class="prettyprint">kernel-install</code> devraient également avoir déjà configuré le chargeur de démarrage, au moins avoir GRUB. Dans le cas, pour ainsi dire, de distributions "plus DIY" (que je n'utilise pas, <em>d'ailleurs</em>), ainsi que de configurations de démarrage plus inhabituelles... ce n'est pas mon cas, donc je sais rien, et je ne dirai rien. Les configurations de démarrage sont une bête pour une autre fois.</p>

<h2>5. Testez le noyau 💥️</h2>

<p>Si le noyau est installé et que le chargeur de démarrage a été correctement configuré, redémarrez simplement votre ordinateur pour en profiter. Il est bon de rappeler que si vous utilisez GRUB, certains disent que le nouveau noyau n'est pas sélectionné par défaut et qu'il faut le choisir manuellement depuis le menu de démarrage... mais dans mon cas, sous Linux Mint Debian Edition, il m'a semblé qu'à la place, il avait en fait été défini par défaut.</p>

<p>Encore une fois, si, grâce au pingouin, le système démarre enfin, utilisez simplement la commande <code class="prettyprint">uname -r</code> pour vérifier la version du noyau en cours d'exécution. À ce stade, c'est une bonne idée de vérifier que la configuration <em>souhaitée</em> fonctionne réellement... mais la manière de procéder varie d'une fonctionnalité à l'autre, au cas par cas. Pour au moins confirmer que la configuration <em>spécifiée</em> existe, vérifiez simplement la configuration actuelle du noyau comme au point 2.</p>

<p>À ce stade, si tout fonctionne et qu'aucune autre modification n'est nécessaire, vous pouvez également supprimer l'énorme dossier de compilation et le noyau restera. Si vous devez également désinstaller le noyau à l'avenir, supprimez simplement les fichiers précédemment installés normalement et reconfigurez le chargeur de démarrage de manière appropriée.</p>

<h2>Conclusion 🎊️</h2>

<p>Être capable de compiler le noyau à partir du code source est une autre de ces choses que nous, les utilisateurs de Linux, pouvons faire, et que les utilisateurs de Windows <strong>ne nous envient franchement pas</strong>. Mais c'est parce qu'ils aiment gagner facilement, avec leur NT, basé sur une conception de micro-noyau... c'est vrai, maintenant que le but de l'article est terminé, je peux dire des bêtises à ma guise.</p>

<p>Copium mis à part, compiler Linux peut être quelque chose d'amusant à faire au moins une fois. Si, comme moi, vous vous trouvez dans des situations inconfortables, il faut le faire, il n’y a pas grand-chose à faire ; Cependant, si vous voulez juste vous amuser un peu, l'une des nombreuses choses que vous pouvez faire est peut-être de compiler un noyau ultra-spécifique et super optimisé pour votre machine ou à des fins de virtualisation. Et bien sûr, cela consomme un peu d'énergie, mais jamais autant que le minage de crypto-monnaies ou le rendu de missiles nucléaires dans Blender !</p>



<h2>{{% i18n notes-refs %}}</h2>

<p><em>L'image de couverture décorative est obtenue via <a href="https://www.bing.com/images/create/beach-with-sand-and-rocks2c-computer-chips-and-wire/ 1-66d5a1ef220c4fae8bd786e10b88ae1e?id=Rt9hCy8E%2Fg%2BZK8rWhgwIPQ%3D%3D&view=detailv2&idpp=genimg" rel="noopener nofollow" target="_blank">L'intelligence artificielle générative de Microsoft</a>.</em> </p>

<ul>
<li>Le système de construction du noyau : <a href="https://www.kernel.org/doc/html/v6.6/kbuild/index.html" rel="noopener nofollow" target="_blank">https http://www.kernel.org/doc/html/v6.6/kbuild/index.html</a></li>
<li>Un guide pour compiler vous-même le noyau Linux : <a href="https://itsfoss.com/compile-linux-kernel/" rel="noopener nofollow" target="_blank">https:// itsfoss.com/compile-linux-kernel/</a></li>
<li>Création et installation de noyaux Linux personnalisés (Rocky Linux) : <a href="https://docs.rockylinux.org/guides/custom-linux-kernel/" rel="noopener nofollow" target="_blank"> https://docs.rockylinux.org/guides/custom-linux-kernel/</a></li>
</ul>

<div class="footnotes">
<ol>

<li id="fn1">
<p>Installer le noyau et installer le noyau (Gentoo Linux) : <a href="https://wiki.gentoo.org/wiki/Installkernel" rel="noopener nofollow" target="_blank">https://wiki. gentoo.org/wiki/Installkernel</a> <a href="#fnref1">↩</a></p>
</li>

</ol>
</div>
