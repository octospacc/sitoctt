+++
Title = "🔉️ Sortie audio HDMI+analogique simultanée sur Raspberry Pi avec ALSA"
Date = 2024-09-19
Description = "Pour tirer le meilleur parti de RetroPie, qui manque de moyens humains pour passer de l'audio HDMI à celui de la prise 3.5 ou vice versa, configurons correctement ALSA et RetroArch."
Featured_Image = "@/Media/Raspberry-Audio/RasperinoAudio-AlsaMixer.webp"
Downsync = "/it/note/Raspberry-Output-Audio-Both.html"
Categories = [ "Linux", "Jeux", "Rasperino" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Généré automatiquement par ListedDownsync.js. Ne modifiez pas (sauf si vous définissez également "% Downsync = False") - cela serait écrasé. -->

Dans ma nouvelle mission d'intégrer, sous forme de console rétrogaming domestique, n'importe quel ordinateur _qui fonctionne_ avec une configuration bien établie avec RetroArch, et qui me permet de jouer en passant des ROM et de sauvegarder des fichiers entre différents appareils... le Raspberry Pi , avec la distribution Linux RetroPie installée, est apparu comme la pièce idéale du puzzle.

Sans m'étendre sur le sujet lui-même, pour lequel j'ai plutôt plus d'informations sur mon MicroBlog ([https://octospacc.altervista.org/series/gaming-1/](https://octospacc.altervista.org/series/gaming - 1/)), pour chacun des problèmes atténués par cette configuration, autant de problèmes inconfortables sont apparus, _en théorie simples_ à résoudre mais _en pratique_ pas du tout triviaux... et l'un d'entre eux concerne l'audio.

<script async="async" defer="defer" src="https://liminalgici.spacc.eu.org/embed.js"></script><iframe title="Pixelfed Post Embed" src="https://liminalgici.spacc.eu.org/p/the_octt/742372822008654489/embed?caption=true&likes=false&layout=full" class="pixelfed__embed" style="largeur : 400 px ; hauteur : 648 px ; hauteur : calc ((100vw / 3*4) + 72px); hauteur maximale : 648px ; /* hauteur : 516px ; */" width="400"></iframe >

## Le problème de sortie 🚰️

Voulant profiter au maximum de ce Rasperino ainsi configuré, pour pouvoir jouer en s'adaptant aux différentes situations de la maison, il est essentiel de pouvoir choisir à chaque instant quelle sortie audio écouter.
En gros, il y a l'audio transmis via HDMI, choix logique et souvent unique pour utiliser les enceintes du téléviseur... et puis il y a celui émis sur le port jack analogique 3,5 mm, intégré à l'ordinateur monocarte, bien utile en revanche. pour jouer avec un casque ou des écouteurs (car le port est plus proche, et parce que le volume est contrôlable sans être à la merci du terrifiant firmware du téléviseur).

Tout cela semblait trivial, jusqu'à ce que je réalise que, prêt à l'emploi, le système ne propose rien ni de modifier la sortie à la volée (par exemple, avec une combinaison de touches, ou un réglage rapide dans le menu principal), ni la possibilité de déclencher l'audio sur les deux sorties indépendamment.

En réalité, il semble que sur certains systèmes, vous puissiez régler la sortie audio en mode automatique<sup id="fnref1"><a href="#fn1">1</a></sup>, c'est-à-dire (comme sur n'importe quel appareil aujourd'hui) va vers ou depuis la sortie externe lorsque le connecteur est branché ou déconnecté, mais... mis à part le fait qu'elle est considérée comme peu fiable, cette fonctionnalité est absente sur mon Raspberry Pi 3, pour une raison quelconque.

## La solution : tout 💡️

Dans une situation aussi dégoûtante, où la sortie audio devrait être modifiée manuellement à chaque fois en revenant au menu système, puis en ouvrant le très laid (et depuis une manette de jeu, très inconfortable ; les touches sont toutes usées) « ncurses » menu de configuration, puis revenir en arrière - en soustrayant de précieuses minutes de jeu - la moins mauvaise option était, d'une manière ou d'une autre, de forcer cette sortie simultanément.
Cela ne pourrait pas être impossible, étant donné que, d'après ce que j'ai lu lors de la recherche, Kodi sur Raspino réussit...

![AlsaMixer]({{< assetsRoot >}}/Media/Raspberry-Audio/Alsamixer-1.png)

### Configuration ALSA 🔩️

Le principal problème était de configurer [ALSA](https://it.wikipedia.org/wiki/Advanced_Linux_Sound_Architecture), le système audio Linux de base (et généralement le seul préinstallé sur les distributions non-ordinateur de bureau comme RetroPie), pour fonctionne comme ça ici. Eh bien, c'est dommage qu'ALSA soit notoirement difficile à gérer, au point qu'il y a des tonnes de discussions mortes sur le Web sur la façon exacte de résoudre ce problème ici...

Après avoir cherché partout en vain, trouvant des configurations longues ou courtes mais toutes également cassées, je ressens une attaque d'art et décide de... demander à ChatGPT<sup id="fnref2"><a href="#fn2">2 </ a></sup>. Ici, au-delà de quelques oublis stupides, qui m'ont fait perdre encore plus de temps, l'intelligence artificielle m'a donné une configuration minimale, compréhensible, qui fonctionne comme il faut.

La configuration finale est donc la suivante, elle suppose un audio purement stéréo et peut être utilisée directement sur Raspberry Pi 3 sans modifications... ou elle peut être un point de départ pour d'autres utilisations et d'autres appareils (dont les paramètres doivent évidemment être modifiés) . La partie optionnelle à la fin fait de la carte analogique la carte par défaut pour le contrôle du volume logiciel (pour des programmes comme « alsamixer »), au lieu de la carte numérique par défaut, ce qui est utile pour une utilisation avec des écouteurs.
Le contenu doit être copié dans un nouveau fichier `/etc/asound.conf` :

```
# Output audio su entrambe le schede
pcm.!default {
  type plug
  slave.pcm "both"
}
pcm.both {
  type route
  slave.pcm {
    type multi
    slaves {
      a { # HDMI
        pcm "hw:0,0"
        channels 2
      }
      b { # Analogico
        pcm "hw:1,0"
        channels 2
      }
    }
    bindings {
      0 { slave a; channel 0 }
      1 { slave a; channel 1 }
      2 { slave b; channel 0 }
      3 { slave b; channel 1 }
    }
  }
  ttable {
    0.0 = 1 # HDMI Sx
    1.1 = 1 # HDMI Dx
    0.2 = 1 # Analogico Sx
    1.3 = 1 # Analogico Dx
  }
}
# Controllo volume default sull'analogico (opzionale)
ctl.!default {
  type hw
  card 1
}
  ```  

#### Configuration de la pêche à la traîne 👿️

Vous devez faire attention aux autres fichiers qui pourraient avoir priorité sur celui inséré (en tant que système) dans `/etc/asound.conf`, par exemple `~/.asoundrc` (qui est la configuration utilisateur, précisément dans le dossier personnel de l'utilisateur , dans ce cas `/home/pi/.asoundrc`).

Ce dernier est créé automatiquement par RetroPie lorsque vous utilisez son menu pour choisir la sortie audio... ce qui n'est pas un problème, car avec la nouvelle configuration on peut aussi supprimer ce menu, mais il faut savoir que ce fichier est maintenant , et à l'avenir, il sera (s'il est recréé en ouvrant accidentellement ce menu maléfique), supprimé.

#### Tests de configuration 🔉️

Cette étape serait facultative, et vous pouvez passer directement à l'essai des jeux, surtout si la configuration a été copiée précisément et pour le même matériel, mais... si vous êtes déjà dans le terminal, ou ne tardez pas à l'utiliser , un test ne coûte rien.
Vous connectez le Rasperino à un appareil HDMI avec des haut-parleurs, puis connectez d'autres haut-parleurs ou des écouteurs, peu importe, à la sortie analogique, exécutez simplement le programme « test de haut-parleur » et écoutez pour voir si le bruit sort.

Si vos oreilles disent que tout va bien, alors tout va bien ici, et vous n'avez même pas à vous soucier des horribles écritures qui apparaissent à l'écran. Vous pouvez arrêter le programme avec CTRL+C.
Si vous n'entendez rien, il est temps de démarrer `alsamixer`, de vérifier les niveaux, et de changer les sorties si elles le sont... Tandis que, si le programme se ferme immédiatement avec des erreurs, je ne sais pas quoi dire : _on ma machine fonctionne_.
Si vous percevez que les deux sources audio ne sont pas en parfaite synchronisation... Je pense que c'est tout à fait normal, et qu'il n'y a aucun moyen d'y remédier (aussi parce qu'une configuration avec différents plugins ALSA n'a pas fonctionné pour moi), mais en cette affaire n'a pas d'importance de toute façon.

### Configuration de RetroArch 👾️

Si vous essayez à juste titre de démarrer un jeu à ce stade, méfiez-vous : la déception est au coin de la rue. En fait, voici la chose encore plus simple sur laquelle j'ai perdu encore plus de temps : m'assurer que l'audio fonctionne bien dans RetroArch, sans grésillements, saccades, sauts de morceaux ou généralement distorsion.

Dans mon cas, le pilote audio par défaut utilisé par RetroArch est « alsathread »... ce qui, pour une raison quelconque, pose ces problèmes, alors que le pilote « alsa » normal ne le fait pas.
Ensuite, lancez simplement l'écran principal de RetroArch (à partir du menu EmulationStation : RetroPie > RetroArch), à partir duquel allez dans Paramètres > Pilotes, et réglez Audio sur « alsa ».
Puis, avant de quitter, pour enregistrer les modifications : Menu principal > Fichier de configuration > Enregistrer la configuration actuelle.

![Configuration du pilote audio dans RetroArch]({{< assetsRoot >}}/Media/Raspberry-Audio/RetroArch-Driver-Audio.png)

À ce stade, en revenant au menu système, il est temps d'essayer un jeu pour voir si tout va bien... et dans mon cas, c'était le cas.
En théorie, l'utilisation du pilote ALSA sans thread peut avoir un impact négatif sur les performances globales du système<sup id="fnref3"><a href="#fn3">3</a></sup>, et donc sur les émulation, mais lors de mes tests à la volée je n'ai remarqué aucune différence... même si je n'ai rien essayé de lourd. Je n'ai donc même pas eu besoin de modifier d'autres options audio, comme le rééchantillonneur ou la synchronisation, mais en cas de problème, c'est une bonne idée d'y bricoler ; il n'y a pas beaucoup d'autres moyens.

## Audio Bluetooth ? (Non.) 💙️

J'étais presque sur le point de continuer sur la voie de la torture auto-infligée, pour réussir d'une manière ou d'une autre à intégrer des écouteurs Bluetooth dans toute cette configuration, mais... aussi utiles soient-ils pour jouer à distance depuis un téléviseur, même si je voulais gaspiller encore plus de temps pour les configurer, cela n'en vaut probablement pas la peine. Mieux vaut acheter un adaptateur prise audio vers Bluetooth, ou utiliser directement quelque chose de câblé avec une rallonge !

Considérant à quel point mon ancien smartphone a commencé à bégayer simplement parce que je lisais des vidéos avec des écouteurs Bluetooth au lieu d'écouteurs filaires, je ne pense pas que la même configuration sur un Raspino bénéficierait aux performances.
Et de toute façon, je ne pouvais même pas connecter une paire d’écouteurs Bluetooth ; lors de l'appairage, un traçage d'erreur s'affiche à l'écran, mais ensuite l'appareil semble être appairé... mais ne parvient pas à se connecter. Peut-être que les pilotes audio Bluetooth sont également manquants, ou quelque chose du genre.

![Erreur Bluez]({{< assetsRoot >}}/Media/Raspberry-Audio/BluezError.png)

De plus, j'ai le sentiment qu'il est de toute façon impossible de faire (bien) fonctionner l'audio Bluetooth avec ALSA, car, même dans ce cas, le web ne donne pas beaucoup de conseils. Cependant, PulseAudio est une tâche supplémentaire à configurer, ajoutant notoirement une charge supplémentaire sur le processeur et vous obligeant à choisir entre des retards ou des problèmes dans l'audio. Son successeur, PipeWire, pose moins de problèmes mais est encore plus encombrant.

## Conclusion 📢️

Avec le recul, c’était vraiment de la connerie ; ça ne méritait même pas une si longue note. L'important c'est que tout fonctionne maintenant, et que je puisse enfin jouer !

Malheureusement, pour l'instant, encore une fois je n'ai pas trouvé de moyen de changer le volume émis par le Raspberry pendant que vous êtes en jeu, et pour cela il faudra ouvrir `alsamixer` (oups) sur un TTY (accessible aussi depuis le menu système en allant dans RetroPie > Audio > Mixer).
Si j'en ai vraiment besoin, j'inventerai au pire un programme similaire à AlsaMixer, juste pour changer les volumes, mais qui peut effectivement être utilisé sans clavier... ou, idéalement, quelque chose qui permette de faire la même chose à tout moment. l'heure, sans changer l'application active, avec une combinaison de touches ; rien pour l'instant !

P.S : Cela allait être un coup de gueule – ou, comme dirait un dictionnaire, une invective – au sein d'un article sur le MicroBlog, mais après avoir écrit 2 paragraphes j'avais _le pressentiment_ que je résoudrais le problème assez rapidement pour ne pas justifier j'en parle tout de suite... et, cette fois aussi, je suis contente d'avoir écouté les esprits occultes ! Une note a alors été émise, car le texte au vitriol avait perdu son sens, et il valait la peine d'y ajouter des détails plus précis.

> _Je le répéterai jusqu'à ma mort, c'est choquant : sous Linux on peut tout faire si on veut, et en théorie tout est simple (je le dis sincèrement sans ironie), mais en pratique rien ne fonctionne jamais par défaut, et en réparant les choses dans la pratique, il y a toujours des accrocs. Dans ce cas, RetroPie utilise ALSA \[...\], qui est la pire chose que l'humanité ait jamais inventée pour configurer... J'ai une dizaine de pages Web ouvertes à ce sujet, et jusqu'à présent, les seuls résultats que j'ai eu \ [ ...\] il y avait des erreurs sur le téléscripteur et du silence sur les haut-parleurs, plutôt qu'une sortie simultanée. C'est la fin. 🗡️_
>
> ~ Littéralement moi au plus bas.

## {{% i18n notes-refs %}}_

---

1. <span id="fn1"></span> "_Commutation de la sortie audio entre prise et HDMI sur RetroPie_" : [https://lofi-gaming.org.uk/blog/2014/04/switching-audio-output-between-jack-and-hdmi-on-retropie/](https://lofi-gaming.org.uk /blog/2014/04/switching-audio-output-between-jack-and-hdmi-on-retropie/); les photos des écrans montrent que sur certains systèmes il y a la sortie automatique fantôme... [↩](#fnref1)

2. <span id="fn2"></span> Voici pour référence la conversation que nous avons eue avec ChatGPT, même si elle n'est pas très utile en soi : [https://chatgpt.com/share/66ebfd94-b7e8-8001-89c4-e7424dd128a9](https://chatgpt.com/share/66ebfd94-b7e8-8001-89c4-e7424dd128a9). [↩](#fnref2)

3. <span id="fn3"></span> De "_Utilisez "alsathread" au lieu de "alsa" dans RetroArch sur RPI3+_ : [https://forum.batocera.org/d/5509-use-alsathread-instead-of-alsa-in-retroarch-on-rpi3](https://forum.batocera.org/d/5509-use- alsathread-instead-of-alsa-in-retroarch-on-rpi3) : "J'ai remarqué que l'utilisation de "alsathread" au lieu du pilote "alsa" dans RetroArch permet d'obtenir un meilleur son. synchronisation et lissage des images sur les fréquences d'images d'écran non natives \[...\] moins de fissures et de décalages sonores sur les jeux/cœurs à faibles performances." [↩](#fnref3)
