+++
Title = "🐕u200d🦺 Epicyon, plataforma Fediverse que dura 2 días"
Date = 2022-12-26
Downsync = "/es/blog/Epicyon-Piattaforma-del-Fediverso-Durata-2-Giorni.html"
Aliases = [ "/Publicaciones/2022-12-26-Epicyon-Piattaforma-del-Fediverso-Durata-2-Giorni.html" ]
Description = "Probé cierta plataforma de Fediverse. Bonitas promesas de sencillez y ligereza, ¡pero después de sólo 3 días tuve que desmontarla!"
Featured_Image = "@/Media/Epicyon-Dec-2022/Featured-LCD.png"
Categories = [ "Internet" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Generado automáticamente por ListedDownsync.js. No lo edite (a menos que también establezca "% Downsync = False"); se sobrescribirá. -->

A estas alturas, lo sabemos, cuanto más pasa el tiempo, más termino **explorando** detalles cada vez más minuciosos del **Fediverse**.
Hoy les hablaré un poco sobre una **plataforma** bastante **desconocida** en este mundo, que tenía buenas premisas, pero resultó ser un callejón sin salida: **Epicyon**.
Sin embargo, antes de comenzar, veamos en qué **situación desesperada** terminé.

Hace 5 semanas finalmente instalé mi instancia de Misskey, hasta la fecha una plataforma de **microblogging** muy respetable en el panorama **ActivityPub**, que poco a poco ha ido ganando más y más usuarios últimamente.
Una de las razones por las que Misskey está creciendo es sin duda que es **más ligero** que Mastodon, y es también por eso que inicialmente preferí su instalación. Por desgracia, el destino **todavía** quería maltratarme, decidiendo hacer que todo terminara en un **gran fiasco** (con uno pequeño para probar primero).
Sin entrar en demasiados detalles, cualquiera que crea querer saber puede leer mis quejas sobre Mastodon el [jueves 1](https://mastodon.uno/@octo/109439207514394158) y el [martes 13](https:// mastodon .uno/@octo/109508472717947364) <small>(claramente no es una coincidencia...)</small> (pero la buena discusión comenzó [2 días después](https://mastodon.uno/@octo/ 109518037875867744) ) de este diciembre, o esperar un artículo que _tal vez_ escriba - desde el fatídico día hasta el 19 de diciembre volví a quedar sin instancia _mi mi mía_. Nuevamente **sin poder**, ya que mi **reino** quedó reducido a **cenizas**.

Después de toda esta semana, en la que intenté e intenté que mi servidor volviera a funcionar, **fallando** estrepitosamente, entendí claramente que necesitaba una reconfiguración desde cero, preferiblemente con algún software más liviano** que Misskey.
Fue en ese momento que me dije "sí, probemos este **Epicyon**; ¿qué podría salir mal?". Eh eh, ¿qué...?

## Una mirada a Epicyon

[Epicyon](https://epicyon.net) Lo descubrí hace semanas, totalmente por casualidad, mientras buscaba algo, no recuerdo qué, en la Web.

Esa lista de **puntos a favor** que aparece en la página principal del sitio inmediatamente me llama la atención: una pila de tecnología que no es llamativa ni se usa solo porque está de moda, con **poca complejidad** en el lado del servidor ( y por lo tanto requiere pocos recursos), incluso con **cero JavaScript del lado del cliente** (por lo que la aplicación no pesa prácticamente nada), adecuado para su instalación en [computadoras de placa única](https://it.wikipedia.org/wiki / Single-board_computer), también diseñado para [navegadores con interfaz de terminal](https://en.wikipedia.org/wiki/Text-based_web_browser)... las **instalaciones** eran **buenas**.

Las ventajas de la **tecnología de baja escala** fueron inmediatamente mostradas por este pequeño programa: la configuración consistió en instalar algunas dependencias adecuadas, descargar las fuentes del repositorio y crear las configuraciones para el _proxy inverso_ (Nginx) y el sistema de arranque. (sistema).
Absolutamente cero problemas en el camino; **¡los problemas**, de hecho, **¡vinieron después!**

Habiendo creado mis cuentas - primero la "_sysadmin_", que tiene los permisos de administración y que uso para escribir como administrador de instancia, y luego la personal - a medida que empiezo a orientarme en la aplicación, **varios problemas* * Los menores notan mi presencia y, como pequeños espíritus, uno a la vez **comienzan a manifestarse**.

## La interfaz de usuario

Comencemos con la interfaz, que es lo primero con lo que te enfrentas cuando utilizas cualquier aplicación; bueno, **¡es realmente extraño**!
Una vez que lo aprendes **no es difícil**, **pero** tiene ciertas cosas que parecen diseñadas para causar **confusión**.

En su página de perfil, hace clic en el banner (que desperdicia espacio, diría yo, en comparación con un botón pequeño) en la parte superior de la página de inicio.
Sólo desde la página de perfil se pueden abrir las **configuraciones** de la cuenta, que se **mezclan** con las de administración de instancias sin una división clara.<sup id="fnref1"><a href=" #fn1 ">1</a></sup>
En la pantalla principal **no todas las subsecciones** (incluidas las vistas específicas para flujos de mensajes) son **visibles**; debe hacer clic en un botón para mostrar todos los botones.
Opciones cuestionables.

Esta no parece ser la intención en absoluto, pero **me gusta pensar** que esto es un **punto a favor**, porque realiza una **selección artificial** de usuarios: esos refugiados de Twitter, que hace meses (ya se calmó la situación) llegaron a Mastodon para portarse mal -publicando mensajes públicos como "_ooo pero ¿cómo carajos usas esta cosa?_", o "_que red social de mierda no entiendes mierda_", y no informo nada más - No se buscarán refugio ni siquiera por error de lo que es "más que un perro" (esta es la etimología del nombre de la plataforma, [según Wikipedia] (https://en.m.wikipedia.org/wiki/Epicyon)).

### Personalización gráfica

Una de las cosas que más buscaba en la configuración era la configuración de **temas**.
Inicialmente solo encontré las opciones de **personalización de colores** y tamaño de texto del tema aplicado, pero por suerte eso no fue todo: estaba un poco escondido, pero al final encontré la opción **de cambiar a una plantilla * *completamente diferente.

De hecho, no me gustó mucho el tema predeterminado, pero encontré **algunos bonitos** entre los otros ya incluidos. Mi **favorito** se llama "**Pixel**" y ofrece una vista que me parece **relajante**, con sus fondos **pseudo violeta lavanda** (`#9ba0d4`) y el texto se muestra con una **fuente particular**, con caracteres formados por pequeños cuadrados juntos (de hecho, para simular píxeles claramente visibles). El efecto que tiene es **interesante**, porque evidentemente es un tema que no se puede clasificar ni en claro ni en oscuro; existe en su categoría. O tal vez se pueda definir como claro, porque el texto es negro, entonces el fondo es necesariamente claro por contraste. Oh, bueno, no me importa: la conclusión es que, para mí, es **realmente bueno**.

![La herramienta de personalización de temas ("Theme Designer"), vista con el tema "Pixel" cargado.]({{< assetsRoot >}}/Media/Epicyon-Dec-2022/Theme-Designer-Pixel.png)

Otro tema que me llamó la atención fue "LCD", que simula una antigua pantalla LCD monocromática con **fondo verdoso**. Lo **aprecio** mucho **artísticamente**, pero simplemente no puedo usarlo, ¡es **demasiado pesado** para los ojos usando una pantalla retroiluminada moderna!

Es una **lástima** sin embargo, en mi opinión, que los **cambios** en los gráficos se apliquen a nivel de instancia y, por lo tanto, **reservados** sólo **para administradores** (aquellos con el rango " Artista", precisamente). Otras plataformas, como Friendica y Misskey, implementan temas de manera más flexible.

### Problemas de escala

También hay temas que son más adecuados para todos, pero lamentablemente los gráficos de la interfaz tienen un problema aún más grave en cuanto a lo que puede caer en deseos estéticos insatisfechos: **escalar mal**.
Quizás con algunos de los temas el problema no se nota demasiado, pero con otros el **texto** suele ser **demasiado grande**, y sucede varias veces que los **botones o iconos** son **desproporcionados** o por llegar desalineado.

Probando en pantalla casi completa (por tanto, hay que tener en cuenta el espacio de pantalla que ocupan los elementos del navegador y del sistema operativo), en un PC de sobremesa con un monitor de 1360x768 y en un móvil con una pantalla de 6,2" y 9:18, creo que * *Yo** tal vez un poco **menos** que **padding**, aunque en general la interfaz está bien. La **inutilizabilidad** surge cuando intentas resoluciones un poco más cuadradas, por ejemplo, sin mantener el navegador de la ventana. completamente ampliado horizontalmente en mi monitor 16:9... bueno, dejaré que el siguiente video hable por sí solo. Incluso en mi teléfono inteligente puede verse feo si lo giro horizontalmente.

<video title="Video que muestra la escala en diferentes resoluciones y cómo está demasiado torcido en algunas, con el tema "Pixel"." class="Center" src="{{< assetsRoot >}}/Media/Epicyon-Dec-2022/UI-Scaling-Bug-Pixel.webm" controles="true" muted="true" loop="true" reproducción automática ="true">Video que muestra la escala en diferentes resoluciones y cómo está demasiado torcido en algunas, con el tema "Píxel".</video>

## Llegar al meollo de las cosas

Creo que sería fácil para mí arreglar la interfaz, ya que solo sería cuestión de ajustar un poco el CSS y ese es el final de la historia.
Antes de que pudiera siquiera pensar en ello, desafortunadamente, surgieron otros **problemas**, esta vez de **funcionalidad**.

### Intentando publicar...

**La primera publicación** que envié desde la plataforma, hecha sin tocar ninguna opción más allá del simple campo de texto, **parecía bien**.

Un momento después, tan pronto como creé la segunda cuenta, **noté** una característica apreciable - que Mastodon introdujo hace sólo unos meses, mientras que otras plataformas populares no incluyen ninguna característica: **la elección del idioma** utilizado en su publicación, utilizado para permitir que otros usuarios **filtren** mensajes públicos que aparecen en idiomas no deseados. Luego **configuré** mi nuevo mensaje **en italiano**, solo para publicarlo... y el mensaje **no apareció** en ninguna línea de tiempo. Sin embargo, sólo en Epicyon y en mis dos cuentas; en otros casos apareció normalmente.
Me tomó unos buenos 10 minutos entender que no, mi cuenta no sólo había fallado, sino que simplemente **No puedo** ni siquiera ver mis propios mensajes si se publican en un **idioma que no está presente en la lista** de los que se van a enviar me aceptan, que por defecto solo es ingles. Tuve que agregar **manualmente** al menos italiano (agregué todos los idiomas mientras estaba en eso) a la lista blanca.
Sin duda es un **descuido de la programación**, porque este comportamiento no tendría el más mínimo sentido desde el punto de vista del diseño de la experiencia del usuario... pero **¡no es nada bueno!**

Sin embargo, tus **publicaciones** son **editables**, lo cual es genial. Aquí también estamos a la par de Mastodon, pero **por encima** de otras plataformas federadas.

### El mensaje principal fluye

Algunos puntos pueden ser pros y contras, dependiendo de su punto de vista.

La **ausencia** de una **línea de tiempo federada** es un poco incómoda, porque dificulta el descubrimiento de nuevos contenidos, pero no es el fin del mundo: como en otros servicios, **en el hogar ** (que aquí se llama "**Bandeja de entrada**") **comparticiones de **mensajes de usuarios desconocidos** llegan de usuarios que se siguen entre sí, por lo que de vez en cuando **puedes descubrirlos** nuevos perfiles de eso.
Al mismo tiempo, sin embargo, **el servidor no corre el riesgo** de tener que lidiar con **cantidades inmanejables de tráfico de datos** a lo largo del tiempo, que será proporcional únicamente a la actividad de los usuarios en la instancia y de aquellos seguido directamente por ellos.

Sin embargo, la **falta de historia local** probablemente se sentirá si deseas alojar un servidor para tu grupo de amigos. Bueno, tal vez ni siquiera demasiado: Epicyon parece estar diseñado para **tener unos pocos usuarios locales activos**, una docena como máximo, y en ese punto todos simplemente nos seguimos unos a otros.

![Una parte de la línea de tiempo de inicio, vista en teléfonos inteligentes con el tema "Pixel".]({{< assetsRoot >}}/Media/Epicyon-Dec-2022/Timeline-Pixel.png)

### Excelente rendimiento

La **idea** de ejecutar un programa como este **sin** ningún sistema de **base de datos** centralizado, en lugar de hacer que almacene todos los datos como archivos dispersos en el sistema de archivos del sistema, **por favor** conceptualmente Yo también, pero tiene **límites de escalabilidad** concretos.
Quién sabe qué pasaría si intentara montar un proyecto como "Epicyon**.uno**" o "Epicyon**.social**"... Me imagino un desastre enorme.

Sin embargo, básicamente, cuando no se lo lleva al límite, este software realmente **funciona** según lo prometido**.
Con **htop** podemos entrar en detalles: en mi **[Raspberry Pi 3](https://web.archive.org/web/20211120100907/https://www.alliedelec.com/m/d/ 4252b1ecd92888dbb9d8a39b536e7bf2 .pdf)**, en momentos de **cuasi-bloqueo** (cuando no estoy usando la aplicación, pero el servidor obviamente tiene tareas que hacer), el uso del **CPU** ronda el * *3%* * (sobre un total teórico máximo de 400%, considerando los 4 núcleos), y la **RAM** utilizada entre **40 y 70 MB** (aproximadamente 4,5 a 7,5% de la RAM de un Pi3). El HTML generado por el servidor, entonces, es esencial y, por lo tanto, el cliente tarda sólo **unos instantes** en recibirlo.

El software no prometió no tener errores aterradores, por lo que realmente no puedes quejarte de eso, pero **las pocas promesas** que hizo **las cumplieron** muy bien. Oh Dios, el programa en realidad declara estar [en estado "Producción/Estable"](https://gitlab.com/bashrc2/epicyon/-/blob/66203c6558a1bb4fa2a405c45e84f786b606b499/epicyon.py#L7), así que esta excusa se sostiene hasta cierto punto...

### Reacciones a las publicaciones

¡Por suerte, las cosas buenas no terminan aquí!
Inmediatamente me alegró notar que la plataforma te permite **reaccionar a los mensajes** usando **emoji**, además de permitir el clásico envío de agradecimiento por la publicación: el estándar "me gusta", por así decirlo. que aquí hay un corazón.

![Pantalla para seleccionar una reacción a un mensaje (visto con el tema "LCD").]({{<assetsRoot >}}/Media/Epicyon-Dec-2022/React-LCD.png)

Desafortunadamente, la **separación** de las reacciones del aprecio es decididamente **poco inteligente**.
Esta opinión no es sólo mía, sino también de los desarrolladores de Misskey y, creo (nunca lo he comprobado en persona) también de Pleroma: reaccionar desde allí a un mensaje proveniente de una plataforma que no admite reacciones (como Mastodon) se traduce en un agradecimiento recibido de ese otro servidor. En Epicyon, sin embargo, **reaccionar** a una publicación que proviene de instancias con menos funciones **es prácticamente inútil**.
Además de todo eso, no creo que haya siquiera una manera de ver una lista de todos los mensajes a los que has reaccionado; Entonces, **adiós a la idea** de usar **reacciones** al menos **como filtro personal** para las publicaciones leídas y que les gustan a lo largo del tiempo.

### La búsqueda

Al encontrar publicaciones de otras personas a través de la interfaz de la plataforma, tenemos **algunas limitaciones menos** en comparación con lo que vemos en Mastodon.
La **búsqueda de texto** con palabras clave normales lamentablemente se limita a tus propios mensajes, pero existen otras opciones para otras situaciones: además de poder **buscar por hashtag** (que, por cierto, recomienda la interfaz de búsqueda ), ¡aparentemente incluso puedes buscar **por emoji**! Sin embargo, no probé esta función adicional porque me di cuenta demasiado tarde.
Finalmente, puedes **buscar elementos** relacionados con las funciones **económicas** de compartir (a las que ahora estoy llegando): habilidades u objetos y servicios.

![La pantalla para iniciar una búsqueda (vista desde el tema "Pixel").]({{< assetsRoot >}}/Media/Epicyon-Dec-2022/Search-Pixel.png)

## Funciones avanzadas

Desde Epicyon, continuando, existen **diferentes modos** que se pueden configurar para un **mensaje**. No es necesario explicar los que tienen en común con las principales plataformas, pero algunas merecen especial atención.

### Economía colaborativa

Uno de los puntos clave de Epicyon, al menos esa es la idea, lo componen sus características orientadas a la llamada "[economía colaborativa](https://it.wikipedia.org/wiki/Economia_collaborativa)".
Puedes crear publicaciones que describan **objetos o servicios** que estás **buscando** o que estás **poniendo a disposición**, especificando la **categoría** relevante y (opcionalmente) un **precio* * .
Estos mensajes pueden aparecer en las **líneas de tiempo** dedicadas a ellos** y, por defecto, no están federados; el administrador del servidor puede especificar una lista de instancias de terceros con las que federar este tipo de publicación.
En tu perfil, podrás indicar una **lista de** tus **habilidades** (_skill_), con un nivel porcentual.

Desafortunadamente, y ahora estamos empezando a notar una tendencia, con fallas de funcionamiento, para mí publicar la **solicitud** de algo **funcionó**, mientras intentaba publicar una **oferta** (como un mensaje nuevo, no relacionado con el anterior) **no efectivo**. Lo intenté dos veces pero realmente no, no apareció la nueva publicación.

### Mezcla de modos

**Joder**, porque aquí también se ha hecho una **ensalada** indigesta: aquellas que son **modalidades** definibles como "recepción", es decir, que determinan a quién llegará el mensaje y cómo se mostrará. - público, no listado, solo seguidores o directo - están **mezclados** con los modos que puedo definir como "típicos", es decir, que configuran la publicación como normal (que contiene texto y/o archivos adjuntos), o como perteneciente a una categoría especial.

![Pantalla de publicación, con el menú de selección de modo abierto (visto con el tema "Pixel").]({{<assetsRoot >}}/Media/Epicyon-Dec-2022/Post-Modes-Pixel.png)

En la práctica, esto significa que **no puedes** cambiar el nivel de **privacidad** de esas publicaciones de tipo **especial**.
Si esto quizás no sea un problema para las funciones de _economía colaborativa_, que ni siquiera colocan elementos en la página de perfil del usuario, podría ser un problema para las encuestas, que lamentablemente se implementan como una especie de publicación y no como una opción adicional para los normales.

### Problemas con las encuestas

El hecho de que tengan que ser públicas no es lo más extraño de implementar encuestas, porque hay cosas peores.

Parece que **seleccionar** (con los botones dedicados, obviamente) una de las **opciones** disponibles, y luego presionar guardar, no tiene el mismo efecto en el backend que en las otras plataformas; Se crea un comentario de respuesta (visible como tal para otros servidores), como si la opción deseada hubiera sido escrita a mano en un nuevo mensaje bajo la misma discusión.
Esto no sólo arruina el anonimato de las encuestas proporcionado por todas las demás aplicaciones, sino que **no funciona** y eso es todo: esa extraña respuesta no se agrega a los contadores de votos de la encuesta.

![Una encuesta creada por Epicyon, votada y mostrada tanto por Epicyon como por Mastodon. Tenga en cuenta el problema descrito.]({{< assetsRoot >}}/Media/Epicyon-Dec-2022/Polls-Bug.png)

### Mira los eventos

Sin embargo, para cualquier tipo de publicación, puedes opcionalmente **establecer una ubicación** (insertando un enlace de OpenStreetMap, lo cual no funcionó en absoluto para mí) **y una fecha**, las cuales son potencialmente útiles si quiere informar un **evento**, algo que Epicyon predice.

Las publicaciones fechadas también deberían aparecer en la sección **calendario** de la aplicación. Desafortunadamente, no verifiqué si al menos esto funcionó, pero probé el mensaje "**recordatorio**" y dice: un mensaje de este tipo **llega** de tu cuenta, como **directo* *, a la hora establecida; Además de aparecer en el calendario, se puede acceder a él mediante un **botón** (**resaltado** con un color alternativo) que aparece en la barra de navegación en la parte superior de la página de inicio.

![La pantalla que muestra un recordatorio tomado (visto con el tema "Pixel").]({{<assetsRoot >}}/Media/Epicyon-Dec-2022/Reminder-Pixel.png)

### Blogs que no son micro

El último modo que se puede configurar para las publicaciones es el de "**artículo**", por lo que tiene un **título y no hay un límite** estricto** para el cuerpo**; algo previsto por ActivityPub, apto para blogs más clásicos, y que ya se observa desde hace algún tiempo con WriteFreely, Plume, Lemmy o Friendica.

Los artículos deberían terminar en tu página de perfil... pero eso no me pasa a mí. La **funcionalidad** está **rota** y la **única manera** de encontrar artículos, propios o de otros usuarios de la instancia, es **recorrer la línea de tiempo dedicada**.
Ah, **además de este** aquí, que en realidad es una **línea de tiempo** con visualización especial, también hay **uno** que muestra **solo mensajes multimedia**, algo así como Pixelfed.

### Contenido a nivel de instancia

Estas vistas especiales aquí se pueden, entre otras cosas, configurar como **modo de instancia**, de una manera que hace posible la **navegación local de publicaciones** para los visitantes del sitio** sin iniciar sesión.

En realidad, también existe una tercera opción para el tipo de instancia: "**noticias**". Esto resalta las **noticias** que llegan de las **transmisiones establecidas** por los administradores del servidor.
Así es, en este sentido Epicyon ofrece herramientas especialmente interesantes: las noticias, procedentes de fuentes **RSS**, aparecen en una **barra lateral** del escritorio. Según una configuración adicional, pueden estar sujetos a **filtros**, que agregan automáticamente **hashtags** o **advertencias de contenido_) según el texto.
El servidor también muestra un feed que agrega todas las noticias que descarga gradualmente.

En el lado opuesto, todavía en el escritorio, finalmente hay una **barra adicional**, que hace que los **enlaces externos** estén convenientemente disponibles. Algunos **apuntan** a información o documentación de la instancia, mientras que otros pueden ser configurados por los administradores y apuntan **a cualquier URL**.

![La pantalla "Destacados", que aparece seleccionable desde un botón dedicado en la barra de navegación cuando la instancia está configurada en modo "noticias" (vista desde el tema "LCD"). En el centro aparece el flujo de artículos escritos por los miembros del servidor.]({{<assetsRoot >}}/Media/Epicyon-Dec-2022/Featured-LCD.png)

## ¡Mucho lío!

Hasta ahora, en general, este software **no parecía** malo en absoluto: con algunos inconvenientes menores, claro, pero ningún programa más complejo que _Hello World_ puede ser perfecto, y este Epicyon tiene de todos modos algunos * *puntos sólidos a su favor**.
El problema, el gran lío, es que esos **problemas** graves que **hay** allí son enormes. Me atrevo a decir **mastodoncia**, para una plataforma cuyo animal es grande, ¡pero no elefantino!

No hay mucho espacio para discutir aquí, así que prefiero hacer un **resumen** rápido.
Algo sobre buena parte de estos errores salió en los **logs** del servidor, pero de forma **demasiado genérica**, y por lo tanto (aunque no quería perder mucho tiempo en ello) estaba No puedo descifrar por qué ocurrieron ciertos problemas.

* Después de unos minutos de enviarlos, **algunos** de tus **mensajes pueden desaparecer aleatoriamente de la instancia**. Ya no se pueden encontrar navegando; llegar a ellos directamente desde el enlace devuelve un error 404, pero **en instancias de terceros** que los recibieron a tiempo **permanecen** visibles. De manera similar, algunos mensajes pueden desaparecer de la página de perfil de otro usuario local de su instancia cuando los busca.

* Por ley de represalias, **algunos mensajes aparecen** como **duplicados** en determinadas situaciones. He observado que ciertamente sucede con las publicaciones en su página de perfil ([imagen aquí 🖼️]({{< assetsRoot >}}/Media/Epicyon-Dec-2022/Self-Profile-Pixel.png)), donde incluso ** se dividen en grupos pequeños**, pero potencialmente también para **cualquier publicación** en la línea de tiempo personal **si realizas alguna acción** como _impulsar_.

* Hablando de **interacciones** en las publicaciones, he visto que a veces **pueden no dar en el blanco**. Recuerdo perfectamente que puede pasar con la función **reacción** - en un caso **tuve que intentar** por segunda vez asignar uno a un mensaje para que la acción funcionara - y me parece que también puede sucede con el corazón y compartiendo, pero no enmarqué bien estos dos casos.

* Continuar con las interacciones, esta vez con perfiles: es trágico que _en algunos casos_\* **intentar seguir** algunas cuentas **no funcione** en absoluto. Al presionar "Seguir", a veces tenía que esperar unas decenas de segundos para que el usuario apareciera realmente en mi lista de siguientes, sin ninguna indicación por parte de la aplicación; **otras veces**, incluso **esperar** horas (días...) o volver a intentarlo varias veces **no ayudó**. Parece que el problema no depende del software en el que se ejecuta la instancia remota, así que no tengo idea de por qué sucede.

* Hay **dos páginas diferentes** que pueden aparecer **para perfiles**: una con una vista de publicaciones recientes (que vinculé a una captura de pantalla arriba), pero sin más opciones que seguir, y otra con diferentes opciones ( del cual dejo una [imagen aquí 🖼️]({{<assetsRoot >}}/Media/Epicyon-Dec-2022/Profile-Options-Pixel.png)). **A veces se abre el primero, a veces el segundo.** No centra de qué parte de la aplicación viniste para abrir la pantalla, y no veo ninguna forma de cambiar de una sección a otra. El segundo parece surgir con más frecuencia cuando ya sigues la cuenta que estás viendo, pero no siempre. **Si quieres ver mensajes** de un usuario en particular, **pero el software ha decidido no hacerlo** en ese momento, básicamente lo **atacas**.

* Error muy extraño: **Las cuentas Misskey aparecen con un ID alfanumérico en lugar del nombre de usuario normal** (solo la primera parte, la que indica el dominio, está bien). No hay problemas si intentas referirte a una cuenta con su nombre de usuario real, porque llega el mensaje (o la búsqueda tiene éxito, si esa es la función que estás usando)... sin embargo, **si estás respondiendo** a la cuenta en cuestión, **el nombre de usuario sugerido será el** extraño, **que** no existe y por lo tanto **no funciona**. Incluso si no rompiera los mensajes, este problema seguiría siendo molesto, porque no te permitiría entender de un vistazo con quién estás hablando... Ya puedo imaginar cómo sería participar en hilos. con muchos usuarios.
![Un usuario de Misskey, mostrado en Epicyon con foto de perfil, nombre y descripción correctos (censurados aquí), pero nombre de usuario tomado de la nada ("@91f967c3pb@misskey.social").]({{< assetsRoot >}}/ Medios/Epicyon-Dec-2022/Misskey-ID-Bug.png)

* Algunas **configuraciones** de instancias son **conscientes** y **cambian de estado por sí solas**. A veces, por ejemplo, después de reiniciar el servidor, **la opción que abre **nuevos registros** a cualquier persona **se reactiva**. También pasó algo con respecto al modo de instancia, que pasó de estándar a "noticias" sin que yo lo configurara así; sin embargo, esto podría no ser un error, tal vez alguna acción que hice como administrador (y que no recuerdo, aquí tienes) tuvo este efecto secundario que los desarrolladores esperaban. Nunca lo sabremos, pero da un poco de **miedo**.

* Hay algún **problema con la recuperación** y/o el almacenamiento en caché excesivo **de los metadatos de la cuenta por parte de instancias de terceros**. Lo verifiqué en varios otros servidores y realicé algunas pruebas que me llevaron a algunas _conclusiones no concluyentes_; en particular, **respecto a las fotos de perfil** (la de la plaza principal):

* Mastodon, lo he intentado varias veces, se niega por completo a ver la _foto_ y coloca el marcador de posición elefantino en su lugar.
* Misskey va así y así: algunas instancias ponen su marcador de posición, mientras que otras cargan la foto del banner como imagen de perfil (que sin embargo nunca he configurado, y por eso veo que Epicyon pone uno propio según el tema de la instancia; ¡Qué sorpresa!)... No haré preguntas, vete.
* Friendica (de la cual solo pude usar una instancia), sin embargo, puedo ver la foto. Friendica, sin embargo, es un software un poco más avanzado e internamente utiliza métodos complejos para obtener los metadatos de muchos tipos de recursos web. En definitiva, podría ser un **problema de almacenamiento en caché** (quién sabe si del lado de. mi servidor u otros), y tal vez no sean datos con formato incorrecto, pero aún así son cosas que **no funcionan**.

## ¿Y ahora?

El **sueño** de un **servidor** ActivityPub **ligero pero rico en funciones** se ha **colapsado** inexorablemente, realmente no hay nada más que podamos decir. Después de ver los primeros problemas **pensé que quería conservar Epicyon** durante al menos una semana, para poder probarlo correctamente, **pero** al final empezó a comportarse muy mal. **Tuve que quitármelo** después de sólo 2 días.
Es realmente **una pena**, entonces, que resultó estar **demasiado roto** para ser utilizable de manera realista. Por ahora, por lo tanto, tengo que optar por otro software, y tal vez encontré algo bueno - y esta es una historia para la próxima vez - pero realmente **espero** que Epicyon pueda** en el futuro **volverse utilizable* * .

**Afortunadamente**, incluso si está en manos de una sola persona, por lo tanto lentamente, **el desarrollo avanza** a un ritmo de [varias confirmaciones por día](https://gitlab.com/bashrc2/epicyon/activity) .
Hablando de esto, después de haber hecho un vistazo **touch-and-go** a las fuentes, tengo que decir una cosa: en comparación con los servidores más establecidos, **el código** de este **me parece ser bastante desordenado* *malo**. Los archivos no están bien divididos en carpetas, hay algunas que llegan a los cientos (o incluso [¡mil!](https://gitlab.com/bashrc2/epicyon/-/blob/66203c6558a1bb4fa2a405c45e84f786b606b499/daemon.py)) de kilobytes, y hay funciones enormes en las que los bucles y controles aparecen bajo muchos, muchos niveles de sangría.
No me gustaría estar en el lugar de quien lo mantiene porque, tal como están las cosas, me temo que **arreglar este software** para que funcione correctamente **no será algo sencillo**, y no tomará mucho tiempo..

## {{% i18n notas-refs %}}

---

1. Mirar **todas las configuraciones disponibles** puede brindarle una buena idea de cuáles son algunas de las capacidades de cualquier plataforma determinada. Comentarlos todos, especialmente los que no he probado, sería una locura; Sin embargo, pensé en dejar [aquí una captura de pantalla 🖼️]({{< assetsRoot >}}/Media/Epicyon-Dec-2022/Settings.png) completo, quien quiera al menos puede leer las distintas opciones por su cuenta. [↩](#fnref1)
