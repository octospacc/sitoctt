+++
Title = "Actualizaciones de DSpacc - Clave maldita"
Aliases = [
  "/Publicaciones/MicroBlog/2022-10-16-Actualizaciones-DSpacc-Tastino-Maledetto.html",
]
Categories = [ "MicroBlog" ]
Date = 2022-10-16
Lastmod = 2022-10-20
+++

{{< noticeAutomaticTranslation it >}}



Hace un mes, en el [post del 18 de octubre](./2022-09-18- Quando-Metto-Mano-Io-Spacc.html), dije brevemente que era el DSpacc, y que nuevo lío tenía causado.  
Bueno, esta vez lo hice aún peor; Para entender las proporciones, es bueno repasar por un segundo lo que había escrito.

Llegó la tarjeta que mencioné, la modificación del software para mejorarla funciona y todavía estoy explorando un poco todo. Tendré tiempo para hablar de todo en un artículo largo, que ya estoy escribiendo (pero no sé cuánto más me llevará).  
Lo que es importante hablar ahora es un problema que surgió... Ni siquiera sé exactamente cuándo, pero recién lo noté ahora: el botón L de retroceso estaba causando algunos problemas.

Vi que presionar combinaciones de teclas para acceder a los menús del sistema flashcart no tuvo ningún efecto. Sospechando, decido descargar un homebrew para probar las claves, Diagnose (que se puede encontrar en [GameBrew.org](https://www.gamebrew.org/wiki/Diagnose) [[página archivada](https:/ / web.archive.org/web/20220818023822/https://www.gamebrew.org/wiki/Diagnose)]), y de hecho confirmo que el botón L no responde a las entradas.

En el chat de Nlhlehde me aconsejan remojar el botón en alcohol para limpiarlo y luego darle un poco de ejercicio o, si quisiera repararlo correctamente, desoldar el botón y poner uno nuevo.  
En ese momento me aburro de abrir la consola, pero veo que dos minutos de ejercicio hacen que mágicamente el botón vuelva a funcionar. El estado operativo en realidad dura sólo unos minutos y en su momento fue cuestionable: en promedio se registró 1 clic de cada 3.

Hoy por fin me decido a desmontar el DSpacc, para ver si puedo hacerle el service a la llave. Para mi sorpresa, veo que está algo elevado desde un lado; uno de los muchos pines GND se ha desoldado, mientras que el único que cierra el otro lado del circuito, apenas se nota, se ha roto.

![Foto macro de tecla levantada.]({{< assetsRoot >}}/Media/Misc/DSpacc-Shoulder-Macro-Front.avif)

Ahora bien, no se puede decir si los problemas que registraron las pulsaciones se debieron al botón roto externamente o a problemas internos que no tienen nada que ver con el mal funcionamiento inicial del botón (y la destrucción final se produjo debido a que presioné el botón cien veces). de veces por minuto para que haga ejercicio).. lo cierto es que el alcohol no es suficiente para arreglarlo 😅.

Inicialmente, intento soldar justo encima de la pata rota, lo que por sí solo debería resolver el problema; desafortunadamente, el lado de los pines es tan corto y el botón está en una posición tan incómoda (ya que estamos hablando de un botón de retroceso), que la soldadura de mi pin toca un poco al lado y provoca un cortocircuito en el suelo. Esto hace que la tecla esté siempre presionada y, por lo tanto, es incluso peor (¡el menú de mi flashcart no se abre si se presiona alguna tecla al inicio!) que lo que tenía antes.  
Intento arreglar un poco la soldadura, pero no, no puedo mejorar nada.

Llegados a este punto pienso en desoldar el botón, porque de todos modos... y funciona bien, quizás por el tamaño del dispositivo SMD, pequeño pero no demasiado: la placa ha quedado limpia.  
Es hora de coger un botón nuevo de los muchos que tengo aparte, aunque sea mucho más grande que el dorsal del DS, y soldarlo.  
Bueno, ya es suficiente, ya estoy aburrido de darle vueltas: intento soldar un cable en el contacto principal, pero la soldadura no se pega. El PCB DSpacc es mortal, oh. Lo intento una y otra vez... y al final la almohadilla de metal para soldar sale. Un clásico, me atrevo a decir, ¡siempre termina así! 😑

![Foto macro de la zona de soldadura del backbone, con el pad central destruido.]({{<assetsRoot >}}/Media/Misc/DSpacc-Shoulder-PCB-Pad-Broken.avif)

¿Era mejor tener un botón de retroceso que funciona con gran dificultad o es mejor no tener ninguno? No lo sé y no quiero saberlo. El caso es que ahora tendré que buscar soluciones a los numerosos problemas derivados de esta mala historia,...,,,..,

_**P.D, actualización 2022-10-20:** Os paso una foto del botón roto desmontado, antes de tirarlo, ¿por qué no? La microSD en la esquina actúa como balanza, para dejar claras las dimensiones._

![Foto macro del botón desmontado y desmontado.]({{< assetsRoot >}}/Media/Misc/DSpacc-Shoulder-Button-Disassembled-Macro.avif)