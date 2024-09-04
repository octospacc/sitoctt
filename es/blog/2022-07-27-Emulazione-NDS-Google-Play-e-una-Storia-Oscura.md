+++
Title = "👾 Emulación NDS, Google Play y una historia oscura"
Description = "Lo que comenzó como una búsqueda de un emulador de NDS que se ejecutara, bueno, en mi Android, rápidamente reveló verdades y eventos absurdos..."
Aliases = [
  "/Posts/2022-07-27-Emulazione-NDS-Google-Play-e-una-Storia-Oscura.html",
  "/Posts/2022-07-27-0000-Emulazione-NDS-Google-Play-e-una-Storia-Oscura.html",
]
Featured_Image = "@/Media/Android-NDS-Emulation/ACWW-on-Androids.avif"
Date = 2022-07-27
Lastmod = 2022-07-29
Categories = [ "Tecnología", "Juegos", "Móviles" ]
+++

{{< noticeAutomaticTranslation it >}}



La Nintendo DS. Basta, no hace falta decir nada más; después de todo, entre los conocedores nos entendemos.
Una consola que, hace 15 años, supo innovar el mercado con el mismo espíritu con el que innovó la Gameboy en su momento. Una consola cuyas exclusivas siguen siendo, aún hoy, perlas atemporales.

Por mucho que me gustaría cantar infinitas alabanzas al DS, hoy estoy aquí para hablarles de otra cosa.
Hoy os hablo de emulación, y de un área concreta del panorama de la emulación **NDS: la de Android**.

## Emulación en general

Muchas consolas, en sus años de vida e incluso después, son [revertidas](https://it.wikipedia.org/wiki/Reverse_engineering) por personas apasionadas y capaces que están interesadas en comprender cómo funcionan y luego tal vez crear emuladores. , es decir, un software que replica el funcionamiento de la consola en una máquina completamente diferente.
La Nintendo DS, por supuesto, no es una excepción.

Normalmente, el desarrollo del emulador se produce bajo una de dos filosofías:

- Crear algo rápido, que funcione y que permita inmediatamente a la mayor cantidad de personas posible usar el emulador como una alternativa práctica a la consola original;
- Crear algo preciso y lo más parecido técnicamente posible a la consola original, con el fin de preservarla en una forma metafísica para el futuro, dejando en un segundo plano la velocidad, que sólo se puede lograr ejecutando el emulador en una máquina suficientemente potente, incluso si también futuro.

### Emulación "aquí y ahora"

Aunque la segunda filosofía es sin duda la más noble, la del "aquí y ahora" también es muy importante: permite jugar a quienes no pueden permitirse la consola original o la han reducido a [spacc](https://wikispacc). miraheze.org/wiki/Spacc), facilita las cosas a quienes quieren desarrollar sus juegos y mejora la vida de los jugadores que, con un emulador, pueden disfrutar de muchas comodidades nunca antes vistas.

Actualmente soy de las personas que juegan en emuladores a pesar de tener la consola original.
Tengo una Nintendo 3DS XL, que es retrocompatible con juegos de DS, pero mal, hasta el punto de que para mí es peor que jugar en un teléfono: los juegos tardan mucho en iniciarse, escalan mal en la pantalla y es un dispositivo adicional (más grande y pesado que mi teléfono inteligente) para llevar a todas partes.

## El estado de la emulación NDS

La emulación de DS en los PC convencionales está actualmente en muy buena forma.
El mejor emulador que existe hasta la fecha es sin duda [melonDS](https://melonds.kuribo64.net): gratuito, admite juego en línea, es lo suficientemente rápido y preciso. No funciona muy bien en PC de hace quizás 10 años pero, en esta situación, si te contentas con jugar sin conexión, siempre puedes contar con el excelente [DeSmuME](https://desmume.org) (que es aparentemente nuevamente en desarrollo durante unos meses?!).

Sin embargo, el simple hecho de que esté escribiendo este artículo debería hacerle oler problemas; problemas que, de hecho, existen.
Mientras que en PC podemos decir que estamos bien, **en dispositivos móviles la situación no es nada halagüeña**.
En general, en dispositivos integrados de gama baja (no sólo teléfonos inteligentes, incluso computadoras de placa única), los dos emuladores que acabo de mencionar no funcionan muy bien.

### Mi experiencia móvil

En mi teléfono actual, con sistema operativo Android 10 (variante stock del fabricante Xiaomi, MIUI 12) y SoC [Snapdragon 662](https://en.wikichip.org/wiki/qualcomm/snapdragon_600/662), ni melonDS ni DeSmuME hacen que los juegos funcionen satisfactoriamente.
De ambos emuladores probé los respectivos puertos nativos no oficiales de Android y los núcleos [Libretro](https://www.libretro.com) disponibles (ya presentes o descargables en la última versión de las respectivas aplicaciones a continuación) para [RetroArch ](https://www.retroarch.com) y [Lemuroid](https://github.com/Swordfish90/Lemuroid) interfaces.

Así que antes de continuar tal vez debería hacer una aclaración.
Las pruebas que he hecho estos últimos días las he hecho con un solo juego, concretamente _Animal Crossing Wild World_, por una razón muy sencilla: de momento estoy interesado en jugar a este en mi smartphone, y listo. Entonces, lo único que me importa es que este juego funcione perfectamente.
Ya con esto escucho a la gente gritar por la falta de carácter científico de mis pruebas, que en realidad tienen un alcance limitado; Que se conformen, digo, **este es un blog personal, no un laboratorio de investigación** 🥱️.
En cualquier caso, he probado todos estos emuladores en el pasado varias veces con otros juegos, y mis opiniones de hoy están más o menos en línea con las del pasado, pero ahora entraré en detalles.

### Pruebas variadas

Teniendo en cuenta que estas pruebas se realizaron simplemente observando el rendimiento de la pantalla de título de _Animal Crossing Wild World_ (que requiere aproximadamente el mismo rendimiento que requiere el juego que se ejecuta en el supramundo):

• APK compilado el 13 de noviembre de 2021 del port no oficial de [melonDS para Android](https://github.com/rafaelvcaetano/melonDS-android):
: Funciona prácticamente como lo hacía la versión anterior hace aproximadamente un año, julio de 2021, período en el que obtuve el nuevo teléfono;

<meta>

• Core Libretro de melonDS, un poco más actualizado:
: Funciona un poco mejor que el puerto nativo, pero no del todo perfecto;

<meta>

• APK compilado el 27 de agosto de 2017 de la bifurcación muerta de [nds4droid por tangalbert919] (https://github.com/tangalbert919/nds4droid), cuyo proyecto upstream (igualmente muerto) es un puerto no oficial de Android de DeSmuME:
: Quizás con frameskip en 3 corre un poco mejor que el APK, pero un poco peor que el núcleo Libretro, por melonDS;

<meta>

• Libretro principal de DeSmuME:
: Básicamente se ejecuta como la última versión de la rama nds4droid original (2016) (sí, también probé ese APK solo, pero no lo diré más que porque no es relevante); Peor que todo lo visto arriba.

Como beneficio adicional, también menciono este otro emulador que descubrí por casualidad mientras buscaba cosas: [NooDS](https://github.com/Hydr8gon/NooDS). El objetivo es ser un emulador rápido, pero de momento, por lo que he visto y por lo que dice el README, todavía no hemos llegado a ese punto.
Funciona más o menos como el APK de melonDS que mencioné hasta ahora. Espero que el desarrollo continúe y tenga éxito, pero el proyecto promete.

Entonces, ¿es este el final de la historia? ¿Debería contentarme con emular el juego ralentizado al menos entre un 7 y un 10 % en melonDS? Bueno, en realidad, no... _tal vez_.

## Sólo una solución

En la escena de la emulación de Android NDS, todos los emuladores de los que he hablado hasta ahora son en realidad los menos famosos (aunque melonDS ha estado ganando terreno últimamente). Hay uno mucho más conocido, que cualquiera que haya intentado emular al menos una vez el DS en Android sabrá al menos por su nombre.
Entonces, hablemos un poco sobre [Drástico](https://play.google.com/store/apps/details?id=com.dsemu.drastic).

Drastic es el emulador de Nintendo DS más rápido para Android. No es nada preciso, pero ejecuta todos los juegos sin mayores fallos, y ya en smartphones de gama baja de hace 5 años puede ejecutar prácticamente cualquier juego 2D y 3D a **máxima velocidad**;
Incluso en dispositivos más antiguos puede resultar un poco dudoso, pero sigue siendo un verdadero milagro. Por ejemplo, mire los videos en "_[2019-09-17 15:16] Varias pruebas con Galaxy Player_" en mi página [Archivos MicroBlog de septiembre de 2019](./MicroBlog-Archive/2019/09/index. HTML). Es absolutamente absurdo que ese dispositivo, que compré por apenas 90 euros hace 9 años, ya sea capaz de emular la DS; y mucho menos hacer que un juego como Super Mario 64 DS funcione de manera excelente.

¿Dónde está el truco? Eh eh, ¿por dónde empezamos?

### Problemas por delante

En primer lugar, Drastic es un **software propietario**; Sólo esto, para mí, es malo.
Aunque lamentablemente no pueda hacerlo al 100%, me gustaría utilizar la mayor cantidad de software gratuito posible. Dado que este emulador es el único que es pequeño, no habría una alternativa real.
Me quedo con el emulador propietario y no importa, no es el fin del mundo, teniendo en cuenta además que los juegos que quiero emular son en sí propietarios, y que incluso la consola original (en mi caso, con la 3DS, peor aún, porque tiene un sistema operativo completo en lugar de solo un BIOS) es propietario.

El verdadero obstáculo aquí radica en el hecho de que Drastic integra un **DRM**, es decir, un sistema de gestión de restricciones digitales.
En teoría, esto significaría: si pagas por el programa, no podrás usarlo a menos que encuentres o crees un crack.
Al menos, esta es la idea teórica de DRM en general. Sin embargo, en la práctica, y las [Preguntas frecuentes sobre Defective by Design](https://www.defectivebydesign.org/faq) (una campaña anti-DRM) ciertamente lo explican mejor que yo, **DRM hace** más** daño* * a los consumidores que a los productores.

En este caso concreto, ¿qué es lo problemático del DRM de Drastic, además de que por diseño niega el acceso a un programa útil a quienes no pueden gastar 4,49€?
Es problemático porque depende de la compra en Google Play; esto significa que aquellos que no tienen Google Play Services y Google Play Store en su dispositivo - como yo que, por razones de privacidad y rendimiento, siempre los he eliminado del mío durante años - incluso si tal vez realizan la compra desde el sitio de Google Play e instale la aplicación iniciando sesión con la cuenta de Google en [Aurora Store](https://f-droid.org/packages/com.aurora.store), no podrá utilizar la aplicación comprada porque no tener la posibilidad de verificar la compra en el dispositivo.

### La tradición appikapposa

En definitiva, en cualquier caso, la única solución posible para utilizar realmente el programita es disponer de un parche.
En el pasado, tanto cuando no podía permitirme Drastic como cuando podía pero ya no tenía Google Play, buscar el APK parcheado en la Web (que hacía cada vez que actualizaba Android o cambiaba de dispositivo) era en sí mismo el juego aburrido que precedió al juego más bonito (el que se emula en la aplicación en funcionamiento).
A menudo era necesario buscar un nuevo APK, tanto porque el DRM de Drastic siempre ha sido estúpido y los cracks a menudo dejaban de funcionar, como porque la parte interactiva de la aplicación fue y está escrita con los pies: utiliza las API del sistema de maneras extrañas, lo que Con cada nueva versión de Android Google se estropea, y por tanto estropea la aplicación.

Una versión de Drastic que usaba en mi antiguo teléfono con Android 7, de hecho, no funciona en el actual: el selector de archivos, trivialmente, no ve archivos ni carpetas en la memoria de almacenamiento. Incluso un viejo truco, usar un administrador de archivos externo para abrir una ROM en la aplicación de emulación, ya no funciona en Android 10: la aplicación falla.
Entonces, me veo obligado a buscar la versión crackeada más actualizada.
Lo busqué el otro día y aparentemente descargué algo que funcionó. Es una pena que - y este es el DRM de mierda del que hablaba, también según lo que cuenta la gente que, en el foro oficial de Drastic, pide apoyo a pesar de haber pirateado el programa (se necesita coraje oh, una medalla para estos héroes intrépidos ) - después de iniciar un juego solo una o dos veces, cada vez siguiente la aplicación se cierra en tu cara (así es, no falla, se cierra porque el mensaje de error de Android no aparece).

En este punto, la situación parece realmente mala. ¿Qué hacer?

## ¿Qué esconde Google Play?

Recuerdo que en la propia Play Store (y volveré a las implicaciones de esto al final) puedes encontrar una aplicación gratuita, [Free DS Emulator - For Android](https://play.google.com/ tienda/aplicaciones/detalles ?id=com.cpu.free.dsemulatorv6). Lo había probado en el pasado y, sorprendentemente, ejecutaba juegos como Drastic.
¿Cómo es esto posible? Entonces, ¿existe otro emulador rápido para Android? Absolutamente no, porque esta aplicación **es drástica**.
Por supuesto, es Drastic el que ha sufrido algunos cambios sustanciales, entre ellos, además de la eliminación de DRM: un cambio de marca total, la reestructuración de los menús, la adición de publicidad invasiva, la reescritura del selector de archivos (que ahora al menos funciona, pero es muy tosco), y, por alguna razón absurda, la eliminación de algunas configuraciones de emulación; pero sigue siendo técnicamente drástico.
Estamos pues ante una auténtica **copia no autorizada** del famoso emulador, **creada con el único objetivo de lucrar con el trabajo de otros** gracias a la publicidad (que, demos el mérito a quien lo merece, en la aplicación original de Drastic al menos no hay ninguna) - anuncios que no vería de todos modos, porque tengo [Adaway](https://adaway.org) instalado y siempre bloqueo el acceso a Internet a aplicaciones propietarias.
Lo único que me sorprende, y bastante, es que encontré esta **aplicación ilegal en la tienda de Google**.

Sin embargo, los creadores de la aplicación se han esforzado mucho en eliminar cualquier referencia a Drastic. Casi lo lograron.
El infame nombre nunca aparece en el programa, sino una descompilación del archivo APK a través de [apktool](https://ibotpeaches.github.io/Apktool), y luego busca en todos los archivos extraídos (con `grep -iR Drastic * ` ) de la cadena "Drastic", muestra que el nombre de la aplicación de la que el sospechoso robó el código está presente 2 veces en total, en 2 archivos diferentes. De todas formas, aquí tenéis la confirmación, por si hubiera alguna duda sobre la naturaleza de esta aplicación.

![Captura de pantalla del comando grep anterior.]({{< assetsRoot >}}/Media/NDS-Android-Emulation/Free-DS-Emulator-Grep-Drastic.avif)

### Nueva investigación

¿Qué puedo decir? Esta aplicación funciona y sigue siendo una gran solución, a pesar de ser un poco peor que la Drastic original.
Excepto que, en cierto momento, pienso: ¿es posible que esta sea la única bifurcación _ilegítima_ de Drastic que se encuentra en Play Store?
En consecuencia, abro Aurora Store y empiezo a buscar, con la esperanza de encontrar algo mejor. Aparte de los diferentes cambios de nombre de nds4droid (estos también existen sólo para permitir a quienes los ponen en línea beneficiarse de la publicidad, dado que la aplicación oficial ya está en Play Store, gratuita y sin basura), algunos otros elementos de la lista me llaman la atención. Atención.

Descargo 2 apps en particular, muy similares pero con diferentes nombres y colores.
Las capturas de pantalla en las páginas de las aplicaciones huelen a estafas a kilómetros de distancia, se parecen a esas aplicaciones que encuentras en Aptoide u otras tiendas alternativas cuando buscas programas crackeados. Esas apps que: si todo va bien no hacen más que mostrar decenas de anuncios al abrirlas; si sale mal, son malware, sin rodeos.

Ambos, cuando los abro, me presentan un botón "Play" que, al presionarlo, inicia la instalación de un APK (parchado, creo) de Drastic (!!!).
Has entendido bien: esta **app**, **proveniente de Play Store**, **contiene** en su paquete **un** archivo APK (¡ni siquiera lo descargues de Internet!), * *agrietado**, de otra aplicación. Uno de los dos, entre otras cosas, también integra la ROM pirateada de un juego de DS del que nunca había oído hablar: _Zoo Quest Puzzle Fun_. Que amable, que lindo regalo, no solo el emulador gratuito sino también el juego gratuito. Parece que estamos en tiendas de aplicaciones extrañas, pero en cambio estamos en Google Play.

![Captura de pantalla de las páginas de Google Play de las 2 aplicaciones, una al lado de la otra, y captura de pantalla de la lista de archivos que infringen derechos de autor en uno de los dos APK.]({{< assetsRoot >}}/Media/Emulación-NDS-Android /Emulador-Adware-Installers.avif)

Para los escépticos, no sólo los remito a <a href="https://mastodon.uno/@octo/108709092014240395" target="_blank" rel="noopener">este video</a> que grabé algunos hace días, pero te invito a descargar las aplicaciones en cuestión (y, quizás, _bloquear el acceso a la red o desactivar la conexión a Internet_ antes de iniciarlas) y verlo todo de primera mano: [Green Emu NDS](https://play.google .com/store/apps/details?id=com.nud.ndsemu), [The FrieNDS Emu](https://play.google.com/store/apps/details?id=com.blackversion.citra_platinum).
De cualquier manera, no fue un descubrimiento útil: los beneficios que ofrecen estas aplicaciones tienen los mismos problemas que los APK Drásticos que se encuentran en la web.

### Finalmente..

En mi visita a la tienda, finalmente, veo otra aplicación que huele a Drastic renombrada, no sé por qué, quizás por la disposición de los botones en las capturas de pantalla: [vDS](https://play. google.com/store/apps/details?id=com.icorewwwi.vDS). Cuesta unos buenos 1,29€ pero, por suerte, en menos de 10 segundos de búsqueda ya encontré el APK resubido por otras personas en la Web, y lo instalé.
Al abrirlo confirmo mis sospechas: el menú principal es idéntico al de Drastic, excepto por los colores cambiados. Todos los demás menús también son idénticos, al igual que el motor de emulación. Por si fuera poco, la carpeta donde guarda los datos es exactamente la misma que Drastic (`/sdcard/Drastic`!). ¡Estos tipos ni siquiera intentaron ocultar el robo!

![Menús de inicio de Drastic y vDS, uno al lado del otro para comparar.]({{< assetsRoot >}}/Media/Android-NDS-Emulation/Drastic-VS-vDS-Main-Menu.avif)

De todos modos, sí, el emulador funciona, abre archivos y no hace el trolling de cerrarlos en tu cara. Llevo 3 días usándolo y no tengo ninguna queja.

Entonces la historia, al menos para mí, terminó bien... pero **podría agregar algo**.

## Google, maldita sea.

La [Política de desarrolladores de Google Play](https://play.google.com/about/developer-content-policy) prohíbe categóricamente aplicaciones que, como las que mencioné, violen los derechos de autor. Sin embargo, estos cuatro que literalmente están robando todo el código de otra aplicación, propietaria y vendida por una tarifa, siguen ahí. Algunos desde hace meses, otros desde hace años, pero ahí están.
Técnicamente, incluso las aplicaciones que integran directa e inmediatamente aplicaciones instalables con el único propósito de ser, a todos los efectos, "instaladores empaquetados", como esos dos específicos, irían en contra de las reglas de Google Play, porque contarían como una aplicación alternativa. store~~ violaría reglas específicas con respecto al uso del instalador de paquetes de Android por parte de las aplicaciones.[^ APK dentro de las aplicaciones]

En todo esto, sin embargo, **¿Qué hace Google?** ¿Qué hace Google cuando las que violan las reglas no son aplicaciones muy famosas que al mismo tiempo le reportan algo de dinero al propio Google?
**Realmente le importa un comino.** Pensé que nadie había intentado reportar estas aplicaciones a Google para su eliminación, pero en realidad alguien lo hizo... y no obtuvo nada. Yo también lo intenté pero, después de 3 días, todo sigue en la tienda y ni siquiera he recibido una respuesta por correo electrónico de Google.

Y es precisamente así que, con esta historia, hoy reconfirmamos dos hechos importantes.

## ¿Qué aprendimos?

1. **DRM demuestra**, una vez más, no sólo ser inútil (evitable, dado que ahora estaría jugando con una versión modificada de Drastic sin el DRM), sino sobre todo ser **dañino** ( dado que, incluso si compré Drastic de acuerdo con las reglas, todavía no podría usarlo en mis dispositivos);
En general, los programas que utilizan DRM, es decir, software propietario que ni siquiera garantiza "[libertad](https://www.gnu.org/philosophy/free-sw.it.html) 0" (poder ejecutar el software como desee), resultan poco fiables. Es mejor preferir siempre software sin DRM y, cuando sea posible, completamente gratuito y basado en la comunidad.

2. **Google**, como muchas otras multinacionales, **no merece ni un ápice de confianza**. Tiene basura en su tienda y deliberadamente no le importa, aunque en teoría tiene sistemas automáticos para controlar la marsitis que, entre otras cosas, [a menudo causa víctimas inocentes](https://www.ghisler.ch/board/ ver tema .php?t=76643).
Antes de que lleguen los fanáticos: no, está bien que Apple App Store esté un poco mejor que Google Play Store, también porque la tarifa por publicar algo allí es una enorme suma de [$99 por año]( https://developer.apple .com/it/support/enrollment), en lugar de los [$25 únicos](https://support.google.com/googleplay/android-developer/answer/6112435?hl=it# zippy=%2Cstep-pay -registration-fee%2Cstep-pay-the-registration-fee) de Google, pero incluso allí de vez en cuando descartan aplicaciones cuestionables, a menudo depredadoras para los usuarios. Sin embargo, al menos Google considera que permitir la instalación de aplicaciones de fuentes no oficiales es una parte estándar de su sistema operativo, mientras que Apple pone freno a la descarga porque "es por la seguridad del usuario";
En general, hay que desconfiar de los padres maestros y preferir las páginas web de los propios desarrolladores para descargar las aplicaciones, o tiendas como [F-Droid](https://f-droid.org).

##¡Tengo un regalito..!

Y, finalmente, puedo decir que he terminado. Os dejo con un **pequeño regalo**: <a href="https://archive.org/details/Emulation-Archive" target="_blank" rel="noopener">archive.org/details/Emulation- Archivo< /a>.
En esta página de Archive.org que creé puse algunas cosas.
En primer lugar, el APK vDS, que sin embargo sólo funciona a partir de Android 4.1 y superior; Por esta razón también puse 2 APK parcheados de Drastic vero, uno de hace quizás 3 años y otro aún más antiguo, que en cambio funcionan desde Android 2.3 _up_ ("arriba" significa: hasta que no aparece el problema del selector de archivos roto, lo cual creo está hasta Android 5, incluido él, en muchos dispositivos). **¡Todos deberían poder jugar!**
En el archivo también hay otros emuladores dispersos, incluso gratuitos, de los cuales he archivado el código correcto para conservarlos.

---

Gracias por leer. ¡Te invito a seguir el blog, aunque no en todos los artículos futuros habrá archivos binarios gratis 😁!
**P.D.**: ¿Qué lindos son todos mis androides ejecutando _ACWW_ juntos? Os dejo la foto, solo por.

![Fotos de 3 de mis dispositivos Android de bolsillo, que muestran la pantalla de título de Animal Crossing Wild World.]({{<assetsRoot >}}/Media/NDS-Android-Emulation/ACWW-on-Androids.avif)

## {{% i18n notas-refs %}}

[^ APK dentro de las aplicaciones]: **Actualización 2022-07-29**: Corregí esta parte porque recordé que aplicaciones como esta violaban las reglas porque "contarían como tiendas de aplicaciones alternativas", pero en realidad no puedo. No verificar el qué. Sin embargo, encontré esta oscura página de ayuda para desarrolladores, que dice claramente con qué fines las aplicaciones pueden llamar al instalador de paquetes del sistema de Android: <https://support.google.com/googleplay/android-developer/answer/ 12085295?hl=en#zippy =%2Usos-permitidos-de-los-paquetes-de-instalación-de-solicitud%2Cautorización-inválida>. El propósito práctico de estas aplicaciones, es decir, ser instaladores triviales y empaquetados, técnicamente no estaría bien.
