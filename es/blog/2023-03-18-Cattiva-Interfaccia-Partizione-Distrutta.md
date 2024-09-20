+++
Title = "🥴 ¿Interfaz fea? ¡Todos los archivos destruidos!"
Date = 2023-03-18
Description = "Para hacer las cosas con prisa, accidentalmente borré parte del disco de la PC. Pero no es sólo culpa mía: el programa que utilicé está mal diseñado."
Downsync = "/it/blog/Bad-Interface-Partition-Destroyed.html"
Aliases = [ "/Publicaciones/2023-03-18-Bad-Interface-Partition-Destroyed.html" ]
Categories = [ "Administrador de sistemas" ]
Lastmod = 2023-03-20
+++

{{< noticeAutomaticTranslation it >}}



<!-- Generado automáticamente por ListedDownsync.js. No lo edite (a menos que también establezca "% Downsync = False"); se sobrescribirá. -->

**Comparemos visualmente** dos aplicaciones para PC: **Discos GNOME y GParted**.

![Las ventanas de los dos programas comparadas.]({{< assetsRoot >}}/Media/Partioning-Mar-2023/SideBySide.png)

Ambas son herramientas de partición de discos y, en términos generales, cumplen las mismas tareas; sólo hay **alguna diferencia** en funciones adicionales o más soporte a favor de un programa u otro. A pesar de esto, las dos herramientas presentan **diferencias obvias** en su **interfaz gráfica**.

## Tienes que tener ambos

Generalmente mantengo estos dos programas instalados y los **uso de una manera bastante **alterna**, porque:

<table><thead><tr><th>GParted</th><th>Discos GNOME</th></tr></thead><tbody><tr><td><img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GParted-Advanced.png" alt="Vista de GParted de información detallada sobre un disco."></td><td><img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-Advanced.png" alt="Menú emergente global de discos GNOME, que tiene algunas características especiales."></td></tr><tr ><td><strong>GParted</strong> tiene <strong>menos funciones distintas</strong>, pero todo tiene su lugar y un nivel <strong>suficiente</strong> de <strong>profundidad</strong>. strong> y características: información de disco de bajo nivel, formateo en toneladas de formatos y algunos otros detalles.</td><td><strong>Discos GNOME</strong> tiene <strong>menos profundidad</strong> > con operaciones individuales, pero ofrece algunas <strong>funciones extra</strong> no estrictamente vinculadas a la modificación de particiones, lo que siempre es útil: gestión de energía y rendimiento de los discos, una interfaz para el protocolo SMART y también una herramienta para realizar pruebas. ¡Rendimiento de la memoria!</td></tr></tbody></table>

## ¡Era una misión sencilla!

Anteayer, cuando inicié un **USB en vivo** Linux en [mi computadora portátil](https://sitoctt.octt.eu.org/Posts/2022-07-09-Come-ho-Riparato-il- my-Portatile-con-25-Euro.html), tenía en mente completar **sin daños** una misión _teóricamente_ fácil e indolora:

1. **Liberar espacio** en el disco de la PC, eliminando la mayoría de los archivos, excepto aquellos que quería conservar por un momento (para administrar quizás en el futuro).
2. **Cambie el tamaño de la partición** del disco, ya que en este momento estará bastante vacía.
3. **Cree una nueva** partición lo suficientemente grande para instalar el nuevo sistema operativo.<sup id="fnref1"><a href="#fn1">1</a></sup>
4. **Mueva archivos** de la partición antigua a la nueva, reduciendo gradualmente la primera y ampliando la segunda, **hasta** poder **eliminar la antigua**.

## Demasiado desorden.

...En la práctica, _algo salió un poco mal_. ¡No pudo haber sido una velada tranquila! 😾

Esta vez, por el simple hecho de que al buscar un editor de particiones entre las aplicaciones preinstaladas del sistema live en cuestión, **queriendo hacerlo de inmediato**, el primer programa que me llamó la atención fue **GNOME Discos** .
Oh, debería haberme mantenido alejado. Y hay muchas razones:

#### 1\. Los discos físicos se mezclan con particiones virtuales montadas a partir de discos físicos, en la lista a la izquierda de la ventana

Ya en este punto, si (como en mi caso) tienes particiones de _tipo extraño_, es decir, [LVM](https://wiki.archlinux.org/title/LVM), la situación se vuelve fea, porque **no lo es. deja claro dónde** tienes que ir** para realizar cambios.<sup id="fnref2"><a href="#fn2">2</a></sup>

<table><thead><tr><th>GParted</th><th>Discos GNOME</th></tr></thead><tbody><tr><td><img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GParted-List.png" alt="El selector de lista de discos en GParted."></td><td><img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-List.png" alt="La vista de lista de discos y particiones en discos GNOME."></td></tr><tr><td>< strong>GParted< /strong> solo tiene una <strong>lista de dispositivos</strong> (discos reales con seguridad, pero creo que también dispositivos virtuales) para seleccionar primero, y luego la vista grande con todas las particiones para el dispositivo elegido. Es <strong>ordenado</strong> y lógico.</td><td><strong>En los discos GNOME</strong>, sin embargo, para hacer lo que necesitas hacer, <strong>vas</strong> ¿A vista de disco o <strong>dónde?</strong> En el primer caso hay <strong>algunas opciones</strong> y otras <strong>faltan</strong>. ¿Probamos desde la vista dedicada a la partición virtual? Aquí también la lista de opciones está decididamente neutralizada, entre otras cosas tanto en el sentido de los botones de iconos rápidos como en el de los botones del menú emergente... pero ahora veamos qué problemas tienen.</td></ tr></tbody></table>

#### 2\. Según corresponda, los íconos rápidos disponibles para cada partición aparecen y desaparecen

Mientras está en **GParted**, la lista de **botones de íconos** en la parte superior de la ventana **nunca cambia**; más bien, los botones individuales se oscurecen o aclaran, dependiendo de si se pueden operar en la selección actual. o no - **en los Discos GNOME las teclas de acceso rápido** - de hecho, también están colocadas de una manera extraña, atrapadas debajo del área de la tabla de particiones, sobre lo cual honestamente ni siquiera puedo comentar - **aparecen o desaparecen** por completo.
A continuación se muestran los casos que he visto, pero quizás haya incluso más posibles, quién sabe:

* En el extremo izquierdo, para algunas selecciones ves un botón **reproducir/detener** (montar/desmontar partición), otras veces exactamente en el mismo punto hay un **candado** (bloquear/desbloquear partición cifrada), otras veces una **cruz** (crea una partición en un espacio vacío) y en algunos casos **nada**.
* Inmediatamente a la derecha, un botón **engranaje**, que abre un menú emergente con una lista más completa de opciones para la partición - notamos que esto termina **subiendo hacia el extremo izquierdo**, si antes No hay nada, solo para confundir más.
*Por último, en el extremo derecho, en algunos casos puede aparecer un botón con un **guión sobre fondo rojo** (destruir partición).

Ehh, esto no es tan bueno, porque hace **imposible asociar mentalmente** una _microzona_ específica de la ventana como dedicada a una operación específica. Y esto es potencialmente **peligroso**, si se tiene en cuenta el gran problema 5 (a continuación).

#### 3\. El menú emergente de opciones en una partición usa solo etiquetas de texto, nunca un solo ícono

Un detalle aparentemente pequeño, pero que en realidad es bastante importante.
Una cadena de texto permite entender inequívocamente qué hace una determinada clave, a diferencia de lo que puede pasar cuando solo tienes iconos, pero **lo mejor se obtendría** combinando las dos cosas: **teclas acompañadas de iconos**.

<table><thead><tr><th>GParted</th><th>Discos GNOME</th></tr></thead><tbody><tr><td><img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GParted-Context-Menu.png" alt="El menú contextual de una partición en GParted."></td><td><img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-Context-Menu.png" alt="El menú de opciones de una partición en discos GNOME."></td></tr><tr>< td ><strong>GParted hace esto para sus menús contextuales (al menos en los elementos más importantes), y esto le permite memorizar inmediatamente la <strong>acción</strong> correspondiente a cada opción y recuperarla inmediatamente <strong>en un vistazo</strong>.</td><td>Personalmente, <strong>al usar discos GNOME</strong> siempre me encuentro <strong>teniendo que releer</strong> una buena parte de la lista para seleccionar algo, aunque no es más largo que el de GParted, precisamente porque <strong>faltan los iconos</strong>.</td></tr></tbody></table>

#### 4\. Las teclas de acceso rápido y los menús emergentes no son alternativas entre sí

<table><thead><tr><th>GParted</th><th>Discos GNOME</th></tr></thead><tbody><tr><td><img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GParted-Buttons.png" alt="La barra de iconos rápidos en GParted."></td><td><img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-Buttons-1.png" alt="Creación de botones y opciones en una partición en discos GNOME."> <img src="{{< assetsRoot >}}/Media/ Partioning -Mar-2023/GNOME-Buttons-2.png" alt="Desmontar botones y opciones en una partición en Discos GNOME."> <img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023 / GNOME-Buttons-3.png" alt="Botones de bloqueo y opciones en una partición en Discos GNOME."> <img src="{{< assetsRoot >}}/Media/Partioning-Mar-2023/GNOME-Buttons- 4 .png" alt="Botón Opciones en una partición en Discos GNOME."></td></tr><tr><td>En <strong>GParted</strong> primero tienes el <strong>menú de la barra de tareas </strong> (de los cuales varios menús también pueden recordarse como contextuales en algunas áreas), que realmente contiene <strong>todas las operaciones</strong> posibles en el programa; sólo <strong>el</strong> hay una barra con <strong>iconos</strong> útiles para recordar rápidamente las acciones probablemente más comunes. En la práctica, mientras tengas la barra de menú, <strong>puedes</strong> incluso <strong>olvidarte</strong> de la existencia de <strong>esos pequeños íconos</strong> allí.</td> < td>Con los <strong>discos GNOME</strong> esto <strong>no es posible</strong>. En realidad, en <a href="https://duckduckgo.com/?q=gtk3+examples&ia=images&iax=images" rel="noopener nofollow" target="_blank">varias aplicaciones GTK3</a> es así : hay <strong>acciones</strong> fijadas en <strong>teclas-etiquetas</strong> en un menú, y otras fijadas en <strong>teclas-iconos</strong> directamente visibles. Sin embargo, en general, esos botones no <strong>desaparecen ni aparecen parcialmente</strong> cuando el estado cambia dentro de la misma vista de la aplicación. Tal vez tenga gustos extraños, pero esto afecta mi cerebro cuando uso el software.</td></tr></tbody></table>

Para comprenderlo, simplemente compare los botones de esta tabla con las opciones del menú contextual que se ven en la de arriba.

## ¿Qué he hecho?

¡Todos estos factores juntos condujeron a un enorme **patatrac**!
Entonces, ¿qué hago? Necesito **desmontar** la **partición** antes de poder **cambiar su tamaño**.

Salgo de **vista de disco**, y allí está **solo el botón** para el menú **opciones** - además de lo que me vendrá a la mente _solo después_ cuando ya esté **ya roto** para break up, es el botón para **destruir** la partición.
En la lista de opciones leo todo y **ni siquiera veo** una entrada para **desmontar** la partición. _Meh_.

Paso por la **pantalla** dedicada a esa **partición** montada, y vuelvo a abrir ese menú por no sé qué motivo, y con razón, sigo sin encontrar nada.
Al lado del botón del menú de opciones **estaba en teoría el botón de detener**, para desmontar la partición, pero está claro que realmente **no** lo noté**.

Voy **de ida y vuelta** entre las dos pantallas unas diez veces, y nada, estoy realmente **ciega**.

En cierto momento, mi inconsciente se aburre de todo este **dar vueltas**, y finalmente me permite notar otro **botón**... el peligroso **rojo**. _Ay ay_.
Lo presiono y, sinceramente, ni siquiera recuerdo si eliminé el diálogo de confirmación una vez, que no estaba en condiciones psicológicas de leer, y luego presioné el botón nuevamente para inmediatamente después confirmar el diálogo, pero una cosa está clara:

Si hasta ese momento no podía pensar con claridad, porque **con cada respiración** un áspero **"WTF?!"** sonaba en mi cabeza, fue cuestión de unos segundos desde el momento del * *clic fatal** porque un **mal presentimiento** comenzó a aparecer en mi cabeza perforada, deformada, llena de maní caducado... 😰️

...Bueno, ¿y qué? ¿Qué es?
...
_Ohhhhah_, está bien, **tú ganas**. Lo admito: **Yo también golpeo**. Sí. ¿Feliz? Al final moví la mano para hacer clic, claro... ¡Pero en mi vida **he hecho** estas operaciones **muchas veces**! Incluso usando Discos GNOME, ¡a veces entre muchos! 😭️

En cualquier caso, no, no le echaré toda la culpa al **pobre Octt** de hace tres días. Ahora juego mi _carta trampa_ y expongo el verdadero **toque de desgracia** sin el cual probablemente me habría salvado:

#### 5\. Cada acción se realiza cuando tú la solicitas, no hay cola

Debo admitir que a veces **en GParted** he estado cerca de la tragedia** - pero realmente una tragedia, no como esta vez que, considerando todo, todavía estoy experimentando.
La diferencia, sin embargo, radica precisamente en esta palabrita: con **GParted** el desastre siempre ha sucedido como máximo **_casi_**, pero con **Discos GNOME** esta vez se ha **consumido** y eso es él.

En **GParted** las operaciones que solicitas terminan en una **cola**, que debe aplicarse manualmente una vez que decidas continuar.
Y aquí también nos centramos en los **pequeños detalles**, pero algo como esto pesa mucho en la factura final. Lo podemos ver así: **en ese caso**, hay que **equivocarse** dos (**2**) **veces** para hacer un desastre, mientras que con el programa GNOME una ( 1) el error es suficiente.

![La vista de la cola de operaciones en GParted.]({{< assetsRoot >}}/Media/Partioning-Mar-2023/GParted-Queue.png)

## "¿Hay algún daño?"

En cualquier caso, noté que, **después** de dar la orden de **eliminar la partición**, ésta **permaneció** montable y todo el sistema de archivos era **navegable**.
Probablemente, lo que Linux necesitaba para usar la partición permanecía en la memoria (RAM), y dado que todos los datos nunca se eliminaban con una simple eliminación rápida de una partición, todos seguían siendo legibles.

Para ser honesto, viendo la situación así, **ni siquiera** me estaba dando** la realidad, todavía **no entendía** si mis **datos** habían sido **condenados** o no. ..
Interfaz poco clara, _lo dije_.

Cuando la sensación de prisa pasó y dio paso a **incomodidad**, busqué GParted**, descubrí que estaba incluido en el sistema en vivo y lo inicié.
En lugar de la partición veo "espacio vacío"... oh **sí, ya está hecho**. ¿Pero cómo es que me dejó **eliminar la partición** sin** obligarme a **desmontarla** primero? ¡Qué barbarie! GParted no permite esto, por buenas razones.

Sin embargo, en el fondo todavía **no he aceptado** que fue cancelado.
Quiero ver si, después de reiniciar, desaparece permanentemente.

Y así es, **sin** siquiera **preocuparme** por copiar un fragmento de archivo - porque ya era tarde y tenía que prepararme para irme a dormir - que **reinicio**.
¡Oh, sí, veo la pantalla negra de GRUB y no el sistema arrancando! ...**Está todo perdido**, no tiene sentido darle la vuelta ahora.

"_Después de que hiciste el daño, ¿¡¿pensaste en reiniciar inmediatamente sin siquiera guardar los archivos más importantes?!?! Pero entonces eres un idiota certificado, ¡dos veces, no una!_"
_Ooooooooooooo_, ¿cómo te atreves? ¿Cómo te atreves a tener **tanta razón** si el blog es MÍO?

Lo único que podemos hacer ahora es **recuento de daños**. No he perdido datos únicos y muy importantes, lo que **ya no tengo debería** en teoría poder **volver a descargarlo o reconstruir**. Hablemos de:

* 40 GB de datos exportados desde mi antigua cuenta de Google; Cuenta que planeaba eliminar, pero no había terminado de transferir todo, así que creo que **todavía está todo en la nube**.

* Varios **archivos** grandes y pequeños descargados **de la Web**, posiblemente algunos difíciles de encontrar, pero **nada vital**.

* **Códigos fuente cambiados**; Estamos hablando de intentos de portabilidad para plataformas oscuras que probé y fallé, u otros **experimentos muy olvidables**.

* **Volcados de discos** que todavía tengo en casa (algunos ya subidos a [Archive.org](https://archive.org/details/@andrigamerita)), **o copias adicionales** de otros datos .

* Documentos cuya **relevancia** actual es **nula**.


Sin embargo, si **olvidé algo** importante en esta lista, tal vez **no era importante**, y podemos estar tranquilos. De lo contrario lo recordaría, ¿verdad? _Bueno, conociéndome..._

## Evitar...

La **moraleja** de esta **mala historia** se puede condensar en:

1. Evite los discos GNOME.
2. **Tenga cuidado** al trabajar con particiones, incluso si lo ha hecho 50 veces en el pasado.
3. **¡Evita**, absolutamente, los **Discos GNOME**!

Y cierro con un **consejo**, o mejor dicho, una **filosofía de desarrollo**, que todos los que diseñamos **UI** (incluso yo, en mis cosas, no lo escondo) olvidamos con demasiada frecuencia: [El usuario está borracho](https://www.youtube.com/watch?v=r2CbbBLVaPk).

<iframe src="https://www.youtube-nocookie.com/embed/r2CbbBLVaPk" style="altura: calc(100vh / 16 * 9);" clase="YouTube"></iframe>

Entonces, saludos. Para el futuro **espero** no **perder datos** de manera estúpida (¡para ti y para mí!). 👋

_**P.D:** La distribución de Linux que instalé esta vez es [Pop!\_OS](https://pop.system76.com/). Tenía muchas ganas de probarlo, pero en 2 ocasiones intenté instalarlo en la PC de escritorio y siempre daba error. Aquí en la laptop funcionó, ¡guau, así que no es una distro rota! (**Quizás** 👀)_

## {{% i18n notas-refs %}}

---

1. El sistema que tenía hasta ese momento, Linux Mint, versión 19.3, después de 3 años:

<dl><dt><strong>Se ha vuelto obsoleto:</strong></dt><dd>La versión 19.3 está descontinuada y los repositorios ya no reciben software nuevo. Entonces, debería haber actualizado a la versión actual de Mint, pero aparentemente <strong>debería haberlo hecho de todos modos</strong> reinstalándolo <strong>desde cero</strong> (en <code class="prettyprint">apt dist-upgrade </code> no hay nuevas actualizaciones)</dd><dt><strong>Está roto:</strong></dt><dd>Algunas cosas (como controladores de video rotos y el entorno de escritorio que solo se inicia en modo alternativo) son definitivamente culpa mía (<em>me equivoqué</em> con los controladores <a href="https://en.wikipedia.org/wiki/Nvidia#:%7E:text=Nvidia "rel="noopener nofollow" target="_blank">ACCIDIA</a> en las últimas semanas), pero a otros (¿¡Bluetooth ya no funciona!?) Yo diría que no :/. En cualquier caso, <strong>cuando el sistema está tan roto, es más rápido reinstalar todo</strong>...</dd></dl>

 [↩](#fnref1)

2. Quizás sí, soy un idiota, pero no hasta el punto de montar voluntariamente los tabiques con una estructura que me es ajena. En ese momento, de manera muy simple, instalé Linux Mint con la configuración guiada predeterminada. Cada vez que instalaba Linux utilizaba la partición manual, en lugar de elegir borrar todo el disco y dejar que el programa de instalación decidiera las cosas, siempre creaba particiones normales. Entonces... **no me culpes**, [kthx](https://en.m.wiktionary.org/wiki/kthx#:%7E:text=\(Internet%20slang\)%20Abbreviation % 20de%20bien%2C%20gracias.)? [↩](#fnref2)
