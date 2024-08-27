+++
Title = "Vérifiez les statistiques intéressantes et la santé des partitions sous Linux"
Dates = 09/08/2022
Alias ​​= [
  "/Posts/Notes/Linux/2022-08-09-Check-Interesting-Statistics-Partitions-Linux.html",
]
+++

{{< noticeAutomaticTranslation it >}}



Les mémoires de stockage, quelle que soit leur catégorie, se dégradent avec l'usure.  
Rien ne peut être fait pour éviter de devoir les changer, tôt ou tard, après tant d'années. Il est cependant possible de garder un œil sur leur état de santé, afin d’identifier d’éventuels problèmes.

Lorsqu'il s'agit de disques HDD ou SSD, le protocole [SMART](https://en.m.wikipedia.org/wiki/S.M.A.R.T.){[:MdTgtBlank:]} s'avère pratique mais, si, comme moi, vous utilisez ordinateurs d'une manière non conventionnelle, la vérification des disques classiques ne suffit pas.

## Linux va plus loin

Quelque chose d'assez secret, que peu de gens savent (du moins il me semble), c'est que sous Linux, il est possible d'accéder aux statistiques des partitions avec certains systèmes de fichiers.  
Ceci, évidemment, que vous utilisiez une clé USB, une carte SD, un disque dur, une disquette ou même une mémoire encore moins habituelle.

[Ext4](https://en.m.wikipedia.org/wiki/Ext4){[:MdTgtBlank:]} fournit plusieurs données curieuses - et ses versions précédentes, Ext3 et Ext2, devraient faire de même, mais je ne l'ai pas fait. Je n'ai pas vérifié.  
[F2FS](https://en.m.wikipedia.org/wiki/F2FS){[:MdTgtBlank:]} J'ai également vu, directement depuis mon smartphone Android, exposer des informations intéressantes.. que je n'aborderai pas dans des détails, parce qu'ils sont tous très sombres et je ne sais pas ce qu'ils veulent dire ; et si je ne sais pas ce qu'ils veulent dire, je ne suis pas curieux à leur sujet. Cela arrive.  
Quant aux autres systèmes de fichiers, je ne les ai pas vus du tout. En guise de devoir, je vous donne donc de voir si des trucs comme FAT32, exFAT, NTFS, ou pourquoi pas, BTRFS, exposent de belles informations, sous Linux. Et comment ?

## Récupérer les données

Sous Linux, parcourez simplement les chemins `/sys/fs/<filesystem>/<device>` pour trouver des fichiers intéressants.  
Vous pouvez imprimer le contenu de chacun à l'écran, à côté de son nom, avec une simple commande (exécutée dans le chemin approprié) : `for i in *; faire echo "$i: $(cat $i)"; fait». Sauf si SELinux est actif - généralement, par défaut, il n'est actif que sur les appareils Android, pas sur les systèmes de bureau - vous n'avez même pas besoin des autorisations root.  
J'ai mis les plus intéressantes dans le tableau ci-dessous, concernant la microSD de mon serveur (une pauvre Nintendo Switch qui fait tourner Ubuntu non-stop), nous y reviendrons prochainement.

| Nom | Valeur |
| --- | --- |
| erreurs_count | 0 |
| première_erreur_time | 0 |
| last_error_time | 0 |
| life_write_kbytes | 1959125105 |
| session_write_kbytes | 1423172308 |

Parlant spécifiquement des systèmes de fichiers Ext : pour connaître même quelques détails supplémentaires, et accompagnés d'un nom compréhensible, il y aurait aussi la commande `tune2fs -l /dev/<device>`. Cependant, cela nécessite des autorisations root et, bien qu'il rapporte également certaines des données qui peuvent être obtenues en examinant les fichiers précédents, comme le nombre d'écritures à vie, celles-ci peuvent être obsolètes et ne concerner que le dernier montage de la partition. Alors mieux vaut y prêter attention.  
Cette fois aussi, je ramènerai les choses intéressantes.

| Nom | Valeur |
| --- | --- |
| Système de fichiers créé | lundi 26 juillet 04:33:17 2021 |
| Heure du dernier montage | ven. 15 avril 11:55:30 2022 |
| Nombre de montures | 16 |

## Choses à surveiller

Voyons une à une l'utilité de ces valeurs.  
Il faut cependant prendre en compte, au cas où vous n'auriez pas compris, que les valeurs parlent de l'état **de la partition, pas du support de stockage**. Nous ne pouvons les lire que parce qu'Ext4 les enregistre et, par conséquent, si la partition est formatée, alors ces valeurs sont également réinitialisées. De plus, nous considérons qu'ils pourraient facilement être modifiés par toute personne disposant de programmes simples comme tune2fs, ils ne doivent donc pas être considérés comme parfaitement bons si des personnes non fiables ont accès à la mémoire.

• **Système de fichiers créé** :
: La date à laquelle la partition a été créée. Simple, mais cela peut être utile pour faire des estimations de santé, ainsi que les données suivantes.

• **Nombre de montures** :
: Le nombre de fois que la partition a été montée. Cela peut être intéressant, si l'on parle de mémoire qui n'est pas utilisée en permanence sur une machine qui est toujours allumée. Si SMART n'existait pas, qui donne ces données et encore plus, cette valeur serait très utile sur les disques durs.

• **Heure du dernier montage** :
: La date à laquelle la partition a été montée pour la dernière fois. Nous pouvons l'utiliser en combinaison avec d'autres données, et c'est tout, je pense.

• **session_write_kbytes** :
: La quantité, en Ko, de données écrites lors de la session en cours, c'est-à-dire depuis le dernier montage. Avec la valeur décrite juste ci-dessus, nous pouvons l'utiliser pour savoir combien nous avons écrit dans une période de temps active (la période actuelle).

• **lifetime_write_kbytes** :
: La quantité, en Ko, de données écrites depuis la création de la partition. Ces informations sont particulièrement utiles concernant les microSD, du moins si vous les utilisez de manière intensive comme moi. C'est aussi sur F2FS.

• **errors_count** :
: Le nombre d'erreurs, je crois aussi bien en lecture qu'en écriture, qui se sont produites au fil du temps. Des erreurs fréquentes peuvent être le symptôme d’une mémoire peu fiable ou simplement dégradée.

• **first_error_time** et **last_error_time** :
: Dates de la première et de la dernière fois qu'une erreur a été enregistrée, respectivement. Il peut être utile de comprendre si des erreurs se produisent continuellement et il est donc nécessaire d'enquêter plus en profondeur ; ou, si une erreur s'est produite une fois et puis plus jamais après une longue période, et donc tout va bien comme ça.

## Quand est-il nécessaire de vérifier ainsi votre santé ?

Bon, d’accord, cette information est intéressante, mais : quand est-elle réellement nécessaire ?

Si la mémoire de stockage utilisée - qui, si nous décidons de recourir à ces mesures au lieu d'utiliser SMART, est probablement une microSD ou une clé USB - commence à montrer des signes de défaillance, peut-être en ralentissant avec le temps ou en corrompant les données. . Il serait conseillé de vérifier au moins que tout va bien.

Si les données ne font pas peur, mais semblent en ordre... alors il est temps de faire d'abord un formatage complet (y compris la recréation de la table de partition à partir de zéro), quelque chose de simplifié par des programmes comme [GParted](https:// gparted. org){[:MdTgtBlank:]}, puis vous voyez comment l'histoire continue.

Dans tous les cas, par mesure de prudence, il serait judicieux de toujours effectuer des contrôles de routine, afin de pouvoir prédire les problèmes avant que quelque chose de grave ne se produise.

## Gardez un œil sur la microSD ?

En parlant de cartes microSD : elles sont quasiment jetables, elles ont une durée de vie extrêmement limitée, étant donné que leurs puces mémoire sont des déchets issus de la fabrication d'autres mémoires plus haut de gamme, comme les SSD.

Que sait-on de leur durabilité réelle, du moins de ceux qui sont bien sortis de l'usine et non des sous-marques ?  
Vous lisez toutes sortes de choses en ligne : il y a ceux qui disent que chaque cellule mémoire peut supporter 10 000 réécritures, ceux qui disent que l'on peut écrire au maximum 1 000 fois la capacité de la mémoire avant qu'elle ne tombe complètement en panne (passage en mode lecture seule). )... aucune conclusion n'est tirée.

J'ai eu des cartes comme celle examinée aujourd'hui, d'une capacité de 32 Go, qui, outre les presque 2 To écrits depuis le dernier formatage, ont vu à mon avis au moins 3 To au total dans toute sa vie, et pourtant elles ça semble toujours bien ; et puis, j'ai eu des cartes qui ont commencé à poser problème pour beaucoup moins cher. C'est peut-être parce que j'ai utilisé ce dernier avec des systèmes de fichiers merdiques, comme FAT32 ou exFAT, et pour cette raison, ils étaient constamment corrompus.

En conclusion : si l’on abuse des bulletins de paris, il est bon de pouvoir les contrôler, dans la mesure du possible, comme nous l’avons appris aujourd’hui.