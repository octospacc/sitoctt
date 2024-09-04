+++
Title = "☀️ Rasperino Solare (y otros experimentos que salieron mal)"
Description = "Cuando compré un panel solar USB, inmediatamente lo puse a prueba. Hace un buen trabajo, ¡pero hay que tener expectativas realistas!"
Aliases = [
  "/Publicaciones/2022-06-23-Rasperino-Solare-ed-Altri-Esperimenti-Andati-a-Male.html",
  "/Publicaciones/2022-06-23-0000-Rasperino-Solare-ed-Altri-Esperimenti-Andati-a-Male.html",
]
Categories = [ "Rasperino", "Ecología", "Tecnología" ]
Date = 2022-06-23
+++

{{< noticeAutomaticTranslation it >}}



Hace unos meses compré online un pequeño [panel solar monocristalino](https://www.amazon.it/Lixada-Pannello-Monocristallino-Caricabatterie-Cellulare/dp/B071Z1LGFV), con unas dimensiones similares a las de una hoja A4, por unos 20€ (en Amazon.it los vendedores son todos unos ladrones, en Aliexpress habría costado un poco menos).

[![Captura de pantalla de una foto enviada en el chat. La foto muestra el panel en su caja de cartón. El título dice "❗️ ¡ENEL la odia! ⚠️ ¡Descubra cómo la Diosa Spacc comenzó el lento pero rentable camino hacia la independencia energética! ➡️ @spacccraft".]({{< assetsRoot >}}/Media/Screenshots/ SpaccCraft-975.png )](https://t.me/SpaccCraft/975)

##Dudas electricas

El panel declaraba, en el título del anuncio, una potencia máxima de salida de 7,8W.  
Tiene un puerto de salida USB, claramente máximo 5V. Aún en los detalles del anuncio, pero en las especificaciones técnicas, se indicaba 1A a 5V de salida... que serían 5W.  
Teniendo en cuenta que el panel está declarado como de 7,8W y que no existen células fotovoltaicas de 5V, pero sí de 6V, se supone que debería poder emitir un máximo teórico de 1,3A de corriente.  
La tensión de salida, sin embargo, como decíamos, no supera los 5V, por lo que se trata de una conversión (imposible, teniendo en cuenta que el panel en sí es una losa de menos de 1mm de espesor, y la parte que sobresale con el puerto USB será de apenas 15x10x5mm). . no hay espacio), o un truncamiento de voltaje trivial, donde el exceso de energía no se traduce en una mayor corriente de salida, sino solo en poco calor.  
Y por lo tanto tenemos una salida teórica máxima de 1,3A a 5V... es decir, 6,5W.

### Consejos de vida..

Este preámbulo, aparentemente inútil, pretende recordarnos que las cámaras de cine de bajo coste y sin documentación (¡esta cosa ni siquiera tiene manual ni escritura en la parte trasera!) sólo se pueden confiar hasta cierto punto, más allá del cual resolver los problemas En caso de dudas, es necesario confiar en el uso de otras máquinas chinas.  
En mi caso, un multímetro USB, para colocar entre la salida del panel y la entrada de un dispositivo capaz de absorber suficiente corriente. No tengo este pequeño objeto y me doy cuenta de que sería prudente comprarlo (de todos modos es barato), porque por el momento no puedo tener ninguna certeza sobre el rendimiento de la losa mágica de silicio.

## Pruebas de campo

Gracias tanto a la necesidad de probar todas las posibilidades del pequeño panel como al deseo de utilizarlo para reducir la factura eléctrica de mis padres en un 0,001% (y satisfacer una ínfima parte de mis necesidades eléctricas individuales con energía totalmente limpia), así que comencé a hacer pruebas prácticas sencillas en el campo (el balcón de mi casa).

### La primera prueba

A decir verdad, la primera prueba la hice fuera de casa, el día inmediatamente posterior a la entrega del producto porque, por motivos ajenos, ese día estaba fuera.
En aquella ocasión, la única disponible por ahora, sólo intenté recargar la batería de mi smartphone (6000mAh).

Hice 3 pruebas diferentes, las dos primeras duraron unos 15 minutos en las horas previas al mediodía, cuando el cielo estaba despejado, con el panel sostenido en la mano para que captara mejor el sol en forma perpendicular (ideal para un monocristalino).  
Primero intenté cargar el teléfono mientras estaba encendido, parado y con todas las radios apagadas (pero no en el estado de suspensión profunda de Android), pero desafortunadamente no hubo manera, el teléfono consumía tanta energía que no podía recargarlo, Sólo podía descargar lentamente. No lo recuerdo muy bien, porque no pensé en registrar los datos, pero me parece que, en la aplicación que uso para ver las estadísticas de carga ([AccA](https://github.com/MatteCarra /AccA)), sólo en la entrada de 300mA.  
Probando inmediatamente después la misma fórmula, pero con el teléfono apagado, me parece que en 15 minutos solo cargó el 2% de la batería... prácticamente tardaría 12,5 horas en cargar del 0 al 100% si este es el caso.

Hice la última prueba alrededor de las 14:00 horas, cuando lamentablemente el cielo se había oscurecido. Coloqué el panel sobre una superficie y usé el teléfono normalmente, escuchando música y creo que usando aplicaciones de mensajería online. Como sospechaba no se recargó, pero al menos estuvo casi sin quedarse sin carga, lo cual no deja de ser bueno teniendo en cuenta las condiciones meteorológicas.

![Captura de pantalla de una foto enviada en el chat. La foto muestra el panel apoyado sobre el techo de un coche aparcado, con un cable conectado hacia abajo. El título dice "Nuestro auto está estacionado y puse el panel solar encima".]({{<assetsRoot >}}/Media/Screenshots/OctoVoLTE-16754.png)

### Miremos más allá..

Bien, digamos que la primera prueba, afuera con el teléfono, fue un poco fallida.  
Sin embargo, sin desanimarme, en los días siguientes realicé otras pruebas, todas desde el balcón de mi casa, algunas de las cuales ahora daré un repaso aproximado, porque se hicieron una sola vez y con pocos datos a mano.

El panel parece ser capaz de encender mi NodeMCU incluso con muy poca luz, y no tenía dudas al respecto, un microcontrolador absorbe muy poca corriente, estamos hablando de decenas de mA en promedio.  
No he probado ninguna carga, pero no es que pueda haber ninguna tan grande, el máximo que obtienes con el NodeMCU es 250 mA cuando enciendes el WiFi.

En un día con molestas nubes que van y vienen, otro teléfono mío (con batería de 3100mAh) logra cargar, pero con dificultad, sobre todo porque cuando el teléfono entra o sale de carga (y pasa en estas condiciones de luz), la pantalla se vuelve a encender y desperdicia energía.  
Cuando se apaga es aún peor, porque la pantalla siempre se vuelve a encender con el brillo máximo y por más tiempo. Este último detalle me pareció gracioso... básicamente, cargar el teléfono cuando está apagado de esta manera es peor que cargarlo cuando está encendido.

En un día más o menos bueno, pero todavía modesto, de finales de invierno - principios de primavera, logré, también en este caso, no cargar sino descargar un poco más lentamente, mi consola Nintendo Switch de primera generación (la uno con el SoC menos eficiente), con Ubuntu encendido y el software funcionando.

Algo que poco hay que decir, pero que sin duda es una victoria, es que al menos puedo cargar mis powerbanks.  
He probado 3 de mis 4, claramente los de menor capacidad cargan antes, pero de todas formas todos se llenan bien sin problemas. Uno que no sé cuanto es, la memoria me diría 4000mAh, se recarga por completo en poco más de un día soleado. Uno de 5000 mAh, tal vez en un día y medio.  
Al cargar estas pequeñas baterías, puedes cargar o alimentar fácilmente dispositivos que no tienen suficiente corriente si se conectan directamente al panel, como mis smartphones o... un Rasperino.

### ¿Rasperino solar?

Finalmente llegamos al final de todo este ambaradan, con mis pruebas en una Raspberry Pi 3B.  
La idea surgió en mi cabeza después de que desafortunadamente dejé el producto mágico sin usar por un tiempo, sin saber qué cosas útiles hacer con él. Quiero decir, lo compré porque definitivamente es útil tener una cosita como esta en emergencias, pero si puedo darle un buen uso mientras tanto, será aún mejor.

Pensé, en primer lugar, en configurar BOINC en Raspbian, un software informático distribuido que puede utilizarse para contribuir a proyectos de investigación científica, ganando al mismo tiempo unos céntimos al mes (rip) en una especie de criptomoneda, el [Gridcoin ](https ://gridcoin.us).  
Como ya dije el Raspino hay que alimentarlo del powerbank, directamente el panel no le da suficiente corriente. Parece encenderse, pero en realidad parece entrar en ciclo de arranque.  
Bueno, no me andaré demasiado con rodeos: mientras (con el mismo powerbank, creo que 4000mAh) para algunas aplicaciones de baja carga, como [Pwnagotchi](https://pwnagotchi.ai/), el Pi puede quedarse encendido durante horas incluso con una pantalla LCD retroiluminada conectada... la CPU al 100%, haciendo cálculos complejos, consume tanta corriente que la batería se agota en solo 1 hora.

[![Captura de pantalla de uno de mis dedos. La foto muestra el panel colgado en mi balcón con ganchos, con un cable que lo conecta al Rasperino fijado al propio panel. El texto dice "#RasperinoVitaEcologica Fijé el Pi a mi panel solar con las gomas elásticas de tela de las mascarillas desechables (antes de tirarlas, separo las gomas, las lavo y las guardo), y parece tener justo el potencia que necesita para funcionar por la tarde. Hoy actualicé la nueva SD con Raspbian, por ahora elijo usar accrocco para ejecutar #BOINC, una herramienta informática distribuida con la que puedes donar potencia informática a proyectos científicos. cómo va BOINC".]({{< assetsRoot >}}/Media/Screenshots/mastodon.uno-octo-108211397314015161.png)](https://mastodon.uno/@octo/108211397314015161)

_Psssss.. si queréis ver otras fotos del panel (3) y en una calidad un poco más decente, os las subo a Pixelfed: [pixelfed.uno/p/octo/426839557817260168](https://pixelfed.uno/ p/octo/426839557817260168)!_

## La realidad de los hechos

Aparte de esto, que aunque no me genere dinero en la práctica sería útil ya que es beneficioso para la investigación científica, no tengo ningún uso práctico en mente para el Rasperino Pi 3 Solare. Quizás un Pi Zero sería mejor: aparentemente, otras personas en medio de la locura (pero mejor equipadas) pensaron en usarlo para minar Bitcoin, con un pequeño panel similar al mío ([YouTube/CbpfNU7oaws](https://invidious. snopyta.org/watch?v=CbpfNU7oaws)).  
Por ahora, uso el panel pequeño esporádicamente para cargar mis baterías externas, que descargo cuando las uso para cargar mi teléfono inteligente.

Si algo aprendí de esta historia es que debería comprarme el maldito multímetro USB.  
Debería haberlo hecho hace casi 4 meses, pero en lugar de eso estoy postergando las cosas para no gastar dinero.
