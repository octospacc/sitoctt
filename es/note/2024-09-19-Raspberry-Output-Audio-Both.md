+++
Title = "🔉️ Salida de audio HDMI+analógica simultánea en Raspberry Pi con ALSA"
Date = 2024-09-19
Description = "Para aprovechar al máximo RetroPie, que carece de formas humanas de cambiar del audio HDMI al conector 3.5 o viceversa, configuremos ALSA y RetroArch correctamente."
Featured_Image = "@/Media/Raspberry-Audio/RasperinoAudio-AlsaMixer.webp"
Downsync = "/it/note/Raspberry-Output-Audio-Both.html"
Categories = [ "Linux", "Juegos", "Rasperino" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Generado automáticamente por ListedDownsync.js. No lo edite (a menos que también establezca "% Downsync = False"); se sobrescribirá. -->

En mi nueva misión de integrar, en forma de consola de retrogaming doméstica, cualquier ordenador _que funcione_ con una configuración establecida con RetroArch, y que me permita jugar pasando ROMs y guardar archivos entre diferentes dispositivos... la Raspberry Pi , con la distribución de Linux RetroPie instalada, surgió como la pieza ideal del rompecabezas.

Sin desviarme del asunto en sí, para lo cual tengo más información en mi MicroBlog ([https://octospacc.altervista.org/series/gaming-1/](https://octospacc.altervista.org/series/gaming - 1/)), para cada uno de los problemas aliviados por esta configuración, surgieron otros tantos incómodos, _en teoría simples_ de resolver pero _en la práctica_ nada triviales... y uno de ellos se refiere al audio.

<script async="async" defer="defer" src="https://liminalgici.spacc.eu.org/embed.js"></script><iframe title="Inserción de publicación con píxeles" src="https://liminalgici.spacc.eu.org/p/the_octt/742372822008654489/embed?caption=true&likes=false&layout=full" class="pixelfed__embed" style="ancho: 400px; alto: 648px; alto: calc ((100vw/3*4) + 72 px); altura máxima: 648 px; /* altura: 516 px; */" ancho="400"></iframe >

## El problema de salida 🚰️

Para poder aprovechar al máximo este Rasperino así configurado, para poder tocar adaptándose a las diferentes situaciones de casa, es fundamental poder elegir en cada momento qué salida de audio escuchar.
Básicamente, está el audio transmitido a través de HDMI, la opción lógica y a menudo única para utilizar los altavoces del televisor... y luego está el que se emite a través del puerto jack analógico de 3,5 mm, integrado en el ordenador de placa única, muy útil. para jugar con cascos o cascos (porque el puerto está más cerca, y porque el volumen es controlable sin estar a merced del terrorífico firmware del televisor).

Todo aparentemente trivial, hasta que me di cuenta de que, listo para usar, el sistema no ofrece nada para cambiar la salida sobre la marcha (por ejemplo, con una combinación de teclas o una configuración rápida en el menú principal), ni la posibilidad de disparar el audio en ambas salidas independientemente.

En realidad, parece que en algunos sistemas se puede configurar la salida de audio en modo automático<sup id="fnref1"><a href="#fn1">1</a></sup>, es decir (como en cualquier dispositivo actual) va hacia o desde la salida externa cuando el conector está enchufado o desconectado, pero... aparte del hecho de que se dice que no es confiable, esta característica falta en mi Raspberry Pi 3, por alguna razón.

## La solución: todo 💡️

En una situación tan repugnante, donde la salida de audio tendría que cambiarse manualmente cada vez, regresando al menú del sistema y luego abriendo el muy feo (y desde un gamepad, muy incómodo; todas las teclas están gastadas) "ncurses" menú de configuración, y luego volver atrás -restando preciosos minutos de juego-, la opción menos mala era, de alguna manera, forzar esta salida simultáneamente.
No podría ser imposible, dado que, según leí durante la investigación, Kodi sobre Raspino tiene éxito...

![AlsaMixer]({{< assetsRoot >}}/Media/Raspberry-Audio/Alsamixer-1.png)

### Configuración de ALSA 🔩️

El principal problema fue configurar [ALSA](https://it.wikipedia.org/wiki/Advanced_Linux_Sound_Architecture), el sistema de sonido básico de Linux (y generalmente el único preinstalado en distribuciones que no son de escritorio como RetroPie), para Trabaja así aquí. Bueno, es una pena que ALSA sea notoriamente difícil de administrar, hasta el punto de que hay toneladas de hilos muertos en la web sobre cómo resolver exactamente este problema aquí...

Después de haber buscado en vano por todas partes, encontrando configuraciones largas o cortas pero todas igual de rotas, siento un ataque de arte y decido... preguntarle a ChatGPT<sup id="fnref2"><a href="#fn2">2 </ a></sup>. Aquí, más allá de algunos descuidos estúpidos que me hicieron perder aún más tiempo, la inteligencia artificial me proporcionó una configuración mínima, comprensible y que funciona según sea necesario.

La configuración final es, por tanto, la siguiente, asume audio puramente estéreo y puede usarse directamente en Raspberry Pi 3 sin modificaciones... o puede ser un punto de partida para otros usos y otros dispositivos (donde obviamente es necesario cambiar los parámetros) . La parte opcional al final hace que la tarjeta analógica sea la predeterminada para el control de volumen del software (para programas como `alsamixer`), en lugar de la tarjeta digital predeterminada, que es útil para usar con auriculares.
El contenido debe copiarse en un nuevo archivo `/etc/asound.conf`:

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

#### Configuración de trolling 👿️

Debes prestar atención a otros archivos que podrían tener prioridad sobre el insertado (como sistema) en `/etc/asound.conf`, por ejemplo `~/.asoundrc` (que es la configuración del usuario, precisamente en la carpeta de inicio del usuario). , en este caso `/home/pi/.asoundrc`).

Este último lo crea RetroPie automáticamente cuando usas su menú para elegir la salida de audio... lo cual no es un problema, porque con la nueva configuración también podemos descartar ese menú, pero hay que saber que ese archivo ahora está. y en el futuro será eliminado (si se recrea abriendo accidentalmente ese menú malvado).

#### Pruebas de configuración 🔉️

Este paso sería opcional, y puedes pasar directamente a probar juegos, sobre todo si la configuración ha sido copiada de forma precisa y para el mismo hardware, pero... si ya estás en el terminal, o no tardas en utilizarlo , una prueba no cuesta nada.
Conecta el Rasperino a un dispositivo HDMI con parlantes, luego conecta otros parlantes, o auriculares, lo que sea, a la salida analógica, simplemente ejecuta el programa "prueba de parlantes" y escucha para ver si sale el ruido.

Si tus oídos dicen que todo está bien, entonces todo está bien aquí y ni siquiera tienes que preocuparte por los horribles escritos que aparecen en la pantalla. Puede detener el programa con CTRL+C.
Si no escuchas nada, es hora de iniciar `alsamixer`, verificar los niveles y cambiar las salidas si están... Mientras, si el programa se cierra inmediatamente con errores, no sé qué decir: _on mi maquina funciona_.
Si percibes que las dos fuentes de audio no están en perfecta sincronía... creo que es completamente normal, y que no hay forma de solucionarlo (también porque a mí no me funcionó una configuración con varios plugins de ALSA), pero en Este caso no importa de todos modos.

### Configuración de RetroArch 👾️

Si intentas iniciar correctamente un juego en este punto, ten cuidado: la decepción está a la vuelta de la esquina. De hecho, aquí está algo aún más simple en lo que perdí aún más tiempo: asegurarme de que el audio funcione bien en RetroArch, sin crujidos, sacudidas, saltos de piezas o distorsiones en general.

En mi caso, el controlador de audio predeterminado utilizado por RetroArch es `alsathread`... que por alguna razón da estos problemas, mientras que el controlador normal `alsa` no.
Luego simplemente inicie la pantalla principal de RetroArch (desde el menú de EmulationStation: RetroPie > RetroArch), desde donde vaya a Configuración > Controladores y configure Audio en `alsa`.
Luego, antes de salir, para guardar los cambios: Menú principal > Archivo de configuración > Guardar configuración actual.

![Configuración del controlador de audio en RetroArch]({{< assetsRoot >}}/Media/Raspberry-Audio/RetroArch-Driver-Audio.png)

En este punto, volviendo al menú del sistema, toca probar algún juego para ver si todo está ok… y en mi caso así fue.
En teoría, el uso del controlador ALSA sin subprocesos puede tener un impacto negativo en el rendimiento general del sistema<sup id="fnref3"><a href="#fn3">3</a></sup> y, por lo tanto, en el emulación, pero en mis pruebas sobre la marcha no noté ninguna diferencia... incluso si no probé nada pesado. Por lo tanto, ni siquiera tuve la necesidad de cambiar otras opciones de audio, como el remuestreador o la sincronización, pero en caso de problemas es una buena idea juguetear ahí; no hay muchas otras maneras.

##¿Audio Bluetooth? (No.) 💙️

Estuve a punto de continuar por el camino de la tortura autoinfligida, para de alguna manera lograr encajar unos auriculares Bluetooth en todo este conjunto, pero... por muy útiles que serían para jugar remotamente desde un televisor, incluso si quisiera desperdiciar Aún más tiempo para configurarlos, probablemente no valga la pena. ¡Es mejor comprar un conector de audio para un adaptador Bluetooth o usar directamente algo conectado con un cable de extensión!

Teniendo en cuenta cuánto empezó a tartamudear mi antiguo teléfono inteligente simplemente porque reproducía videos con auriculares Bluetooth en lugar de con cable, no creo que la misma configuración en un Raspino beneficiaría el rendimiento.
Y de todos modos, ni siquiera pude conectar un par de auriculares Bluetooth; Durante el emparejamiento, se muestra un rastreo de error en la pantalla, pero luego el dispositivo parece estar emparejado... pero no se puede conectar. Quizás también falten los controladores de audio Bluetooth, o algo así.

![Error de Bluez]({{< assetsRoot >}}/Media/Raspberry-Audio/BluezError.png)

Además, tengo la sensación de que en cualquier caso es imposible hacer funcionar (bien) el audio Bluetooth con ALSA, porque, incluso en este caso, la web no ofrece muchos consejos. Sin embargo, PulseAudio es una molestia adicional de configurar, ya que agrega notoriamente una carga adicional de CPU y lo obliga a elegir entre tener retrasos o fallas en el audio. Su sucesor, PipeWire, tiene menos problemas pero es aún más engorroso.

##Conclusión 📢️

En retrospectiva, fue realmente una tontería; Ni siquiera merecía una nota tan larga. Lo importante es que todo funciona ahora y ¡por fin puedo jugar!

Desafortunadamente, por ahora, una vez más no he encontrado ninguna manera de cambiar el volumen que emite la Raspberry mientras estás en un juego, y para hacerlo tendrás que abrir `alsamixer` (ups) en un TTY (también accesible desde el menú del sistema yendo a RetroPie > Audio > Mezclador).
Si realmente lo necesito, en el peor de los casos inventaré un programa similar a AlsaMixer, sólo para cambiar los volúmenes, pero que en realidad se pueda usar sin teclado... o, idealmente, algo que permita hacer lo mismo en cualquier momento. tiempo, sin cambiar la aplicación activa, con una combinación de teclas; nada por ahora!

P.D: Esto iba a ser una perorata (o, como diría un diccionario, una invectiva) dentro de una publicación en el MicroBlog, pero después de escribir 2 párrafos tuve la corazonada de que resolvería el problema lo suficientemente rápido como para no justificarlo. Hablo de ello de inmediato... y, esta vez también, ¡estoy feliz de haber escuchado a los espíritus ocultos! Se emitió entonces una nota, porque el mordaz texto había perdido su significado y merecía la pena añadir detalles más precisos.

> _Lo repetiré hasta que me muera, es impactante: en Linux puedes hacer cualquier cosa si quieres, y en teoría todo es simple (lo digo genuinamente sin ironía), pero en la práctica nunca nada funciona por defecto, y en arreglar En la práctica siempre hay algunos inconvenientes. En este caso, RetroPie usa ALSA \[...\], que es lo peor que la humanidad ha inventado para configurar... Tengo unas diez páginas web abiertas al respecto, y hasta ahora los únicos resultados que he tenido \ [ ...\] hubo errores en el TTY y silencio en los parlantes, en lugar de salida simultánea. Es el fin. 🗡️_
>
> ~ Literalmente yo en mi punto más bajo.

## {{% i18n notes-refs %}}_

---

1. <span id="fn1"></span> "_Cambiar la salida de audio entre jack y HDMI en RetroPie_": [https://lofi-gaming.org.uk/blog/2014/04/switching-audio-output-between-jack-and-hdmi-on-retropie/](https://lofi-gaming.org.uk /blog/2014/04/cambio-de-salida-de-audio-entre-jack-y-hdmi-en-retropie/); las fotos de las pantallas muestran que en ciertos sistemas existe la salida automática fantasma... [↩](#fnref1)

2. <span id="fn2"></span> Aquí, como referencia, está la conversación que tuvimos con ChatGPT, aunque no es muy útil en sí misma: [https://chatgpt.com/share/66ebfd94-b7e8-8001-89c4-e7424dd128a9](https://chatgpt.com/share/66ebfd94-b7e8-8001-89c4-e7424dd128a9). [↩](#fnref2)

3. <span id="fn3"></span> De "_Use "alsathread" en lugar de "alsa" en RetroArch en RPI3+_": [https://forum.batocera.org/d/5509-use-alsathread-instead-of-alsa-in-retroarch-on-rpi3](https://forum.batocera.org/d/5509-use- alsathread-instead-of-alsa-in-retroarch-on-rpi3): "He notado que usar el controlador “alsathread” en lugar del controlador “alsa” en RetroArch produce un mejor audio. sincronización y suavizado de fotogramas en velocidades de fotogramas de pantalla no nativas \[...\] menos grietas y retrasos en el sonido en juegos/núcleos de bajo rendimiento." [↩](#fnref3)
