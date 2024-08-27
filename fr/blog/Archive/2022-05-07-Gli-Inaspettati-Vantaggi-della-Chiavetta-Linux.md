+++
Title = "Les avantages inattendus de la clé Linux"
Alias ​​= [
  "/Posts/Archive/2022-05-07-Les-avantages-inattendus-de-la-clé-Linux.html",
]
Catégories = [ "Technologie" ]
Date = 2022-05-07
Dernière modification = 2022-08-13
#Template = "loli-documentatrice.html"
+++

{{< noticeAutomaticTranslation it >}}



Une chose que j'ai faite il y a des mois et qui, jusqu'à présent, s'est avérée être un **choix gagnant**, a été d'**installer** un système d'exploitation basé sur **Linux**, en mode persistant, * *sur** un petite **clé USB**.

Les raisons pour lesquelles j'ai voulu le faire au départ sont peut-être simples et banales, mais cela m'a apporté, après une analyse minutieuse, des avantages **inattendus** qui étaient bien plus que bienvenus.

### Pourquoi le stylo était-il nécessaire ?

Le besoin initial de la clé est né il y a des mois du fait que, dans la salle informatique de l'école, je devais, comme tout le monde, me connecter à mon compte GSuite pour accéder au cours d'informatique virtuelle. Cette chose apparemment simple, dans mon cas, cachait deux obstacles :

- **Mon mot de passe contient** des dizaines de caractères aléatoires. Je me le permets car j'utilise un gestionnaire de mots de passe (pour tous mes comptes), mais taper à la main à chaque fois est pénible ;
- **Google ne fait pas confiance à l'adresse IP de l'école** et me demanderait de confirmer l'accès, mais comme ils n'ont ajouté aucune méthode de sécurité au compte, ils me demandent d'ajouter un numéro de téléphone. Juste parce qu'il me le demande de cette manière, avec une excuse claire, je ne donnerai jamais mon numéro à Gluglu : cela n'a aucun sens, si des méchants volaient le nom d'utilisateur et le mot de passe de mon compte, ils pourraient simplement vérifier ce dernier avec leur propre numéro, et selon Google il sera clair que le compte leur appartient... mais je n'irai pas plus loin.

J'aurais pu utiliser n'importe quelle clé USB, avec un navigateur Windows portable téléchargé dessus, contenant ma session Google enregistrée depuis chez moi, avec un accès connecté avec mon adresse IP, et j'aurais résolu le problème.  
J'aurais pu, _mais ça n'aurait pas été amusant_.  
Et c'est là qu'est née l'idée de la clé avec un système d'exploitation complet, bootable sur n'importe quel PC x86_64, totalement indépendamment du disque interne du PC en question.

### Choix du matériel

Tout d'abord, **j'ai pensé à la mémoire que j'utiliserais**.

En termes de capacité, je voudrais dire que je l'ai fait juste pour le défi, mais la vérité est que, sur les quelques très grandes clés USB dont je dispose, je garde d'autres fichiers, que je dois conserver sur la clé USB. , et les déplacer sur de nombreuses petites clés USB est ennuyeux et entraîne une confusion future. Du coup, j'ai pris une de mes clés USB de 2 Go, et je me suis dit que j'allais m'en contenter (_et, **spoiler**, j'avais raison, même si ce n'était pas facile_).  
Au niveau de la vitesse, je n'ai pensé qu'à éviter les trucs avec des niveaux inférieurs à ceux de l'USB 2.0, car de toute façon je n'ai pas de fast stick disponible. Mon seul stick avec un bus USB 3.0 (correctement détecté par Linux comme USB 3.0) est aussi rapide qu'un 2.0... **Merde Kingston**.  
J'ai des cartes microSD rapides, mais mes adaptateurs USB pour ces cartes sont tous lents.

Bref, je prends la fidèle clé USB 2.0 de 2 Go, couleur menthe (_elle serait parfaite comme support d'installation de Linux Mint !_), également de chez Kingston, et c'est parti.

![Photo de la clé USB que j'ai dédiée à Linux.]({{<assetsRoot >}}/Media/Chiavetta-Linux-2022-05-07.avif)

### Choix du logiciel

Une fois que vous avez choisi la clé, le **choix de distribution** Linux reste, peut-être encore plus important.

Ici, non seulement les distributions populaires (Ubuntu, Fedora, Mint, Pop!_OS, Manjaro, ...) sont trop volumineuses pour laisser la place à une partition persistante, mais elles seraient inutilisables en raison de la lenteur du stick.  
Heureusement, j'avais un chemin en tête que je pouvais suivre, car, au cours des derniers mois, par curiosité, j'avais appris quelque chose sur le monde des distributions Linux légères.

C'était une époque où je venais de m'intéresser à **[Alpine Linux](https://alpinelinux.org){[:MdTgtBlank:]}**, pour ses idéaux de **légèreté et de minimalisme**. Je l'ai même utilisé sur ordinateur pendant quelques semaines.  
Il était réactif et vif, grâce également à la présence de [musl libc](https://en.m.wikipedia.org/wiki/Musl){[:MdTgtBlank:]} au lieu de la désormais surchargée [GNU libc]( https://en.m.wikipedia.org/wiki/Glibc){[:MdTgtBlank:]}, mais la nécessité de configurer parfois de petites choses à la main, même après l'installation initiale, m'a amené à m'en éloigner. Cependant, je pensais que cela conviendrait à un système installé sur un stockage petit et lent, avec peu d'applications.  
Je l'ai ensuite installé, incluant parmi les logiciels indispensables (ainsi que serveur vidéo et audio) : [Window Maker](https://www.windowmaker.org){[:MdTgtBlank:]} (un gestionnaire de fenêtres léger), [ Firefox](https://firefox.com){[:MdTgtBlank:]} et des applications GUI mineures, notamment : un émulateur de terminal, un gestionnaire de fichiers et un éditeur de texte.

Dans l’ensemble, cela a bien fonctionné et rapidement mais, malgré le peu d’applications installées, la mémoire débordait. Cela me poserait quelques problèmes plus tard : par exemple, il n'y avait pas d'espace pour mettre Minecraft et jouer à [SpaccCraft](https://wikispacc.miraheze.org/wiki/SpaccCraft){[:MdTgtBlank:]}, ce que je voulais parce que ça peut être utile.  
Ceci - ainsi que le fait que plus tard j'ai pensé que, peut-être, le chiffrement de la clé USB serait nécessaire pour protéger mes données contre le vol ou la perte, mais mes tentatives de chiffrement du système déjà installé ont échoué - m'a fait m'arrêter un instant pour refléter_.

Comme j'aurais de toute façon dû réinstaller le système, j'en ai profité pour **changer de distribution**.

Bien que dans le passé, lorsque j'essayais un petit quelque chose, cela m'avait posé quelques problèmes en tant que système persistant, j'ai décidé de donner **[Puppy Linux](https://puppylinux-woof-ce.github.io){[ :MdTgtBlank:] une chance }** sérieusement.  
L'image de base de la dernière version de Puppy (au moment de la rédaction, 9.5) ne pèse que 400 Mo, mais elle inclut un système de bureau assez complet, avec des dizaines d'applications préchargées pour les besoins les plus variés.  
Comment peut-il être si **compact mais plein de trucs** à la fois ? Grâce à l'utilisation de [SquashFS](https://en.m.wikipedia.org/wiki/SquashFS){[:MdTgtBlank:]}, un système de fichiers compressé en lecture seule, qui prend en charge des algorithmes de compression extrêmement efficaces tels que [ LZ4](https://en.m.wikipedia.org/wiki/LZ4_(compression_algorithm)){[:MdTgtBlank:]} et [ZSTD](https://en.m.wikipedia.org/wiki/Zstd) {[:MdTgtBlank:]}. En effet, si elle était complètement décompressée, l’image pèserait environ 2,5 Go. Même le choix d'inclure **plus d'applications minimales** apporte cependant beaucoup, si l'on considère que pratiquement tous les live CD Linux utilisent SquashFS, alors que ceux des distributions plus traditionnelles pèsent plusieurs Go.

### À ce jour

**Puppy est la distribution que j'ai encore** sur la clé USB.  
A part quelques petits soucis (genre : comment diable connecter un clavier Bluetooth ??? et bon, maintenant je n'en ai plus besoin_), il fonctionne très bien et est rapide à tous points de vue.  
Après avoir configuré le cryptage [LUKS](https://en.m.wikipedia.org/wiki/Linux_Unified_Key_Setup){[:MdTgtBlank:]} sur la partition inscriptible, mes données (fichiers personnels et sessions de navigateur) sont désormais protégées contre d'éventuels accidents.  
Le gestionnaire de fenêtres intégré, [JWM](https://en.m.wikipedia.org/wiki/JWM){[:MdTgtBlank:]}, est également très propre et je l'aime bien - même si j'aurais aimé qu'il l'ait certaines fonctionnalités d'alignement des fenêtres (il semble n'y avoir rien, ou est-ce que je me trompe ?).  
Et maintenant, enfin, j'ai suffisamment d'espace libre ; et j'ai aussi Minecraft !
 
![Capture d'écran de mon bureau Puppy Linux, avec neofetch ouvert sur l'émulateur de terminal.]({{<assetsRoot >}}/Media/Screenshots/Desktop-Chiavetta-Linux-2022-05-07.png)  
_Crédits de fond : [pixelartmaker.com/art/becdd8955dc57eb](http://pixelartmaker.com/art/becdd8955dc57eb){[:MdTgtBlank:]}_

### Avantages importants

Eh bien, avec ce petit stylo magique, j'ai **résolu** le problème d'accès à Google, mais je **continuerais à l'utiliser** même si je n'en ai plus besoin à cette fin.  
Les raisons, tous avantages importants, sont les suivantes ; certains s'appliquent à Linux live en général (même les amnésiques), d'autres s'appliquent uniquement aux systèmes persistants comme le mien - tous, cependant, sont pertinents lors de l'utilisation d'un PC public :

- J'ai un **système qui s'adapte** à mes goûts, que je peux emporter dans ma poche et utiliser **sur n'importe quel PC**, sans jamais avoir à reconfigurer quoi que ce soit (sauf parfois les paramètres du BIOS) .
- Le système en question, contrairement à ce que j'ai pu trouver sur la grande majorité des PC du moment (Windows), **respecte mes libertés**, et ne finit pas mes données entre les mains d'une société monopolistique qui, en échange, cela ne m'apporterait absolument rien : sur tous les PC que j'utilise, même ceux qui ne sont pas les miens, je reste cohérent avec mes valeurs.
- Le **secret** concernant ce que je fais sur le PC à ce moment-là est bien **plus certain**, tout comme la sécurité de mes données : vous avez bien raison de vous méfier de tout système d'exploitation installé sur les PC publics, n'importe quel outil d'espionnage pourrait être installé (et, en fait, c'est le cas sur certains PC de l'école : il existe un programme de contrôle de bureau à distance conçu pour les écoles, [LanSchool](https://en.m.wikipedia. org/wiki/LanSchool){[:MdTgtBlank:]}).
- J'ai toujours toutes mes **données essentielles avec moi**, qu'il s'agisse de simples documents ou de sessions ouvertes sur différentes applications (comme le toujours pratique [Element](https://element.io){[:MdTgtBlank:]} , pour envoyer des messages et échanger des notes et des petits fichiers entre mes appareils).
- Certains **logiciels particuliers**, comme Minecraft Java (qui, apparemment, peuvent ne pas fonctionner sur certains PC Windows, car peut-être que les pilotes GPU ne fonctionnent pas correctement et que Windows ne dispose pas du logiciel d'émulation OpenGL de [Mesa] ( https://en.m.wikipedia.org/wiki/Mesa_(computer_graphics)){[:MdTgtBlank:]} au niveau du système, par opposition à Linux), **devrait toujours fonctionner** !
- J'ai un prétexte pour rappeler indirectement que, même en 2022, les **clés USB sont pertinentes**, même ultra bas de gamme.

### Quelques idées

Je peux conclure en disant : **vous aussi devriez adopter une clé Linux persistante**, si vous utilisez parfois des PC qui ne sont pas le vôtre, vous ne le regretterez pas ! En vérité, je vous le dis, faites-le même juste pour vous amuser, si vous avez une clé USB désaffectée dans un tiroir :)

Voici les sites Web de certaines distributions que je n'ai _pas_ mentionnées dans le texte, mais que j'ai essayées dans le passé ou qui valent la peine d'être consultées :

- [SpaccCraftGo](https://github.com/Spacc-Inc/SpaccCraftGo-Images){[:MdTgtBlank:]} - Puppy Linux rebaptisé [Spacc Inc](https://wikispacc.miraheze.org/wiki/ Spacc_Inc){[:MdTgtBlank:]}, avec l'inclusion de SpaccCraft dans le système ;
- [Slitaz](https://slitaz.org/en){[:MdTgtBlank:]} - Système de version continue de 50 Mo ;
- [Porteus](http://porteus.org){[:MdTgtBlank:]} - Distribution live basée sur la modularité ;
- [antiX](https://antixlinux.com){[:MdTgtBlank:]}
- [Slax](https://slax.org){[:MdTgtBlank:]}

### 🏷️ Notes/Références

[^ Mise à jour 2022-08-13] : **Mise à jour 2022-08-13** : J'ai importé cet article de mon ancien blog (<https://noblogo.org/loli-documentatrice/gli-inexpected-vantaggi- of the-linux-key>{[:MdTgtBlank:]}), pour mieux la préserver et tester certaines choses. J'en ai profité pour, en plus d'améliorer la mise en forme, modifier partiellement la forme de certaines phrases. Le contenu reste pratiquement le même.