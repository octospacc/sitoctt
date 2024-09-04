+++
Title = "⚡️ Blogs rápidos con notas estándar"
Date = 2022-12-13
Downsync = "/it/blog/Blogging-Rapido-con-Standard-Notes.html"
Aliases = [ "/Publicaciones/2022-12-13-Blogging-Rapido-con-Standard-Notes.html" ]
Description = "Al querer escribir y publicar más, encuentro que mi flujo de trabajo me ralentiza y, al buscar formas más rápidas de escribir blogs, vuelvo a Listados."
Lastmod = 2022-12-16
Categories = [ "Tecnología" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Generado automáticamente por ListedDownsync.js. No lo edite (a menos que también establezca "% Downsync = False"); se sobrescribirá. -->

He estado usando **[Standard Notes](https://standardnotes.com)** como mi **aplicación de notas** personal desde hace mucho tiempo.  
Hace años lo elegí por ser **gratuito y de código abierto**, pero al mismo tiempo muy **limpio, ordenado y funcional**. Encajaba perfectamente en un momento en el que buscaba algo que admitiera el cifrado de datos que funcionara, sin afectar la usabilidad.

![Antigua aplicación de Android Standard Notes en mi tableta.]({{< assetsRoot >}}/Media/Misc/Standard-Notes-Tablet.webp)

Sin entrar en detalles de por qué me gustó seguir usándolo, luego lo dejé y luego comencé de nuevo hasta ahora, toca profundizar en una en particular de sus **funciones integradas**: **[Listado](https :/ /listado.to)**.  
Es una plataforma de **blogging** diseñada por los mismos desarrolladores que Standard Notes y disponible para autohospedaje o uso **gratuito** en la instancia oficial. Aunque nunca lo había usado antes, el concepto y su aplicación me parecieron **interesantes** desde el principio.

## Una necesidad rápida

Sin embargo, hace unos días comencé a jugar con [ChatGPT](https://listed.to/@ChatGPT_Experiences). Esta es una pregunta totalmente diferente, sí, pero es relevante porque me hice una pregunta: todas estas conversaciones que estoy teniendo con la inteligencia artificial, ¿dónde puedo ponerlas para mantenerlas integrales, organizadas, **encontrables** y accesibles? ¿Alguien y para mí **fácil de cargar**?

La elección estuvo a punto de **usar [staticoso](https://gitlab.com/octtspacc/staticoso)**, **mi generador de sitios estáticos** que ya uso para el [sitoctt](https://sitoctt .octt.eu.org), pero luego **lo pensé mejor**.

Pensé que, de hecho, quería que mi colección de experiencias se pudiera encontrar en la Web. Sin embargo, el **problema** aquí, que he podido observar con amargura durante todos estos meses, es cómo funciona mi sitio. Por ejemplo, es, por así decirlo... **A los motores de búsqueda les importa un carajo**. 😭  
Además de ser un tema aparte, cabe señalar que la culpa del horrendo destino de mi sitio no depende de su código; Es culpa del dominio y/o del host. Entonces, no, nunca abandonaré mi generador estático: simplemente cambiar el generador (y en consecuencia las plantillas) por uno más serio no resolvería ningún problema.

En resumen, tuve que **desechar** por completo la idea de**alojar en GitHub y GitLab** y pensar en otra cosa.

* **¿Bloguero** de Google? La experiencia editorial deja mucho que desear en el móvil.
* **WordPress**? Estaría bien, pero sabemos lo que podría pasar dentro de muchos años con los datos insertados en un sistema complejo; y WordPress es muy complejo. Luché por encontrar un [pequeño programa que convierte su copia de seguridad](https://github.com/lonekorean/wordpress-export-to-markdown) XML en archivos Markdown... que probablemente se estropearán en unos años, ya que no oficial, ya que aparentemente el equipo de WordPress tiene la costumbre de cambiar la estructura de ese XML de vez en cuando; Otras soluciones de conversión que había encontrado un momento antes tenían algunos años y no funcionaban, por así decirlo.
* ¿Quizás **[WriteFreely](https://writefreely.org)**? Ya tengo una cuenta en la [instancia Devol](https://noblogo.org), pero el límite de blogs para cada cuenta es 5 y no quería desperdiciar una.
* **[Plume](https://joinplu.me)**, ¿tal vez? Esta otra plataforma de blogs parecía buena, alojada por muchos y compatible con ActivityPub (no es una necesidad para mí, pero sigue siendo una buena ventaja), pero no te permite configurar CSS personalizado; Una seria deficiencia en este caso de uso mío, ya que no hay otra forma de diseñar todo de la manera específica que necesito para representar un chat sin texto estándar en cada párrafo de HTML.

## La elección de Listado

Mis ideas estaban terminadas y, como tenía prisa por montar este sitio y comenzar a cargar las experiencias que tuve con ChatGPT, considerando lo _oh Dios mío_ que era **conveniente** copiar y pegar cosas **directamente en Notas estándar. **, este fue el **buen momento** para probar **Listado**.

Para ser honesto, estoy un poco preocupado por la posibilidad de que el archivo de respaldo semanal de notas pueda alcanzar decenas de MB, pero la suerte ya está echada.  
Podría crear una segunda cuenta para usarla solo para notas de ChatGPT, exportarlas desde la principal e importarlas allí, y luego eliminarlas de la primera cuenta para aligerar la colección, pero hay problemas. Tal vez pueda transferir el nombre de usuario, pero los enlaces a las publicaciones individuales se romperán porque incluyen identificaciones automáticas y, por lo tanto, una redirección a la página de inicio para aquellos que siguen una antigua. Además, los mensajes antiguos del libro de visitas no se copian y tampoco creo que se transfieran las suscripciones por correo electrónico.

## La idea de "qué fastidio"

Considerándolo todo, para este propósito limitado **aprecié** lo **eficiente** que es tener **Notas estándar** como la parte **final** de** mi **flujo de trabajo**. Me parece que reduce mucho el efecto "estoy molesto".

Por lo tanto, considerando el placer del descubrimiento, **reflexioné** por un momento sobre cómo el factor **_"qué dolor"_** es una de las cosas que **me impide actualizar** el sitio ctt. más frecuentemente.

Dejemos de lado las páginas temáticas, que son _fieras aparte_; dejemos de lado los posts largos, que requieren mucha inspiración y suficiente tiempo para escribir; pero qué carajo, al menos **algo** para el MicroBlog, que está de moda, **¡me gustaría** crearlo **más a menudo**! Pero **simplemente no tengo ganas**, por alguna razón, considerando todos los problemas por los que tengo que pasar.  
A decir verdad, ya me había acostumbrado inmediatamente a empezar a escribir un post en Standard Notes, para poder gestionar todo de forma más flexible, quizás cambiando rápidamente de un dispositivo a otro. Sin embargo, si tuviera que empezar a escribir algo no largo y elaborado, para publicarlo lo antes posible, simplemente no tenía ganas de actuar.

"_Pero ¿por qué no cambio a **Listado al menos para** mi **microblog**?_", pienso entonces. Bueno, hay una razón por la que incluso llegué al punto de hacer mi propio generador de sitios estáticos: ¡lo necesito!... _E incluso si ya no lo necesitara y pudiera por lo tanto dejar de usarlo, honestamente ni siquiera lo haría. ¡Quiero pensar en hacer algo así, después de todo el trabajo!_ 😖

## Limitaciones de los listados

Sin embargo, para decirlo amablemente, **Listed es bastante básico**: apenas te permite insertar **CSS** personalizado y formatear publicaciones en **Markdown** y un **subconjunto** limitado de **HTML. * *. Propongo mis análisis de este último a continuación:

* Todos los **elementos** que están inherentemente **en línea** se **colocan automáticamente en un** bloque `<p>` (por ejemplo, no puede tener `<body><span>Erre< /span><). /body>`, siempre será `<body><p><span>Erre</span></p></body>`);
* Cualquier elemento **atributo** que no sea `id`, `class` o `style` (y `href` o `src`, así como también cosas como `title`, `width` o ` height`, en los casos apropiados) **se desecha**: así que olvídese, por ejemplo, desviarse de la configuración predeterminada de la plataforma en cuanto al comportamiento de los enlaces (el `rel` no se toca);
* **Ciertos elementos** simplemente no funcionan: aquellos con etiquetas no estándar (personalizadas en resumen, como `<pincopallino>`) **se eliminan**, al igual que `<script>`, `<link> `, y otros aparentemente también cosas como `<video>` - pero `<iframe>`, por así decirlo, funciona, y afortunadamente también lo hace mi amado `<detalles>`.

Está muy claro que absolutamente **no puede reemplazar** 100% **ninguna sección del sitio**, ni siquiera la del MicroBlog, y aunque pudiera crearía fragmentación: el sitio principal ya no contendría todo las publicaciones de forma centralizada, por lo que cualquier persona interesada debe seguir 2 sitios diferentes.

## El blogoctt con notas estándar

Estaba _casi_ a punto de rendirme, pero afortunadamente tuve un destello de genialidad: _Pero puedo **escribir en Notas estándar** y tener las **notas que** se **sincronizan** automáticamente como archivos **en el sitio* *? ...No, no hay manera. No, espera, ¿quién dijo eso? Yo digo que hay una manera._

Ahora bien, Standard Notes, como dije, utiliza un sistema de encriptación de datos del lado del cliente, por lo que para acceder a las notas desde su cuenta se debe utilizar **un software mínimo **especializado**.  
Existe _sn-cli_, el cliente de línea de comandos oficial, que podría ser útil para crear scripts... pero [parece haber sido abandonado](https://github.com/jonhadfield/sn-cli/issues/ 33) : nada que hacer.

### Solución "a mi manera"

Entonces, aquí también hablo, y digo: _¿Quién dijo que tengo que hacer las cosas bien y utilizar las API "reales"?_  
Digo esto, dado que por alguna razón el **HTML** de un blog **en Listed** (específicamente, la página [/all](https://listed.to/@u8/all), la única uno que me parece que realmente incluye todo, y no solo el último en Listado **de Notas estándar** y que tiene un **programa que hace** el trabajo sucio, pero en este caso es realmente simple, ya que solo tiene que descargue y analice 1 archivo: el trabajo de **scraping**.

_Y script fu scripto._ Lo dejo aquí: [gitlab.com/octtspach/sitoctt/Scripts/ListedDownsync.js](https://gitlab.com/octtspach/sitoctt/-/blob/main/Scripts/ListedDownsync.js ) ; Pero tenga cuidado, no hay _nada bueno para leer_, también porque todavía no he implementado todo lo que debería servirme a largo plazo, pero **para aquellos que quieran usarlo** está ahí.  
Es técnicamente **independiente del sitio ctt** y estático, ya que **guarda** simples **archivos Markdown** en el disco (incluso si la sintaxis de las líneas de metadatos escritas en ellos es mía; por lo tanto, en caso , algunas cadenas de texto en el programa deben cambiarse para admitir el formato de metadatos YAML más clásico).

No quiero decir que realmente pensé en todo, pero estuve cerca.  
No, todavía no puedo decidir - por mis _paturnias_ - qué estándar usar para indicar bloques especiales (de metadatos, o de HTML que no debe ser interpretado por el SSG de Listed).  
No, todavía no he creado el script para iniciar como **cronjob** en el servidor, que de vez en cuando debería **descargar los datos del** blog **Listado** y **actualizar** los archivos en** el repositorio de Git** si hay actualizaciones.  
Sin embargo, pensé en las cosas realmente esenciales, como la posibilidad de que el programa de sincronización no sobrescriba un archivo que ya está en el repositorio si esto lo especifica en los metadatos. Supongamos que ocurre algún lío y tengo que modificar los datos de la publicación para el sitio ctt sin tocar los datos de las notas en Standard Notes: al configurar este indicador, el script de sincronización no lo reemplazará la próxima vez que se ejecute.

## Conclusiones

Entonces, cómo concluir.  
Hoy **ya he escrito demasiado** (¡resultó ser un artículo de blog y no un microblog!), y lo terminaré aquí. Pero espero sinceramente que toda esta nueva eficiencia y conveniencia, tener **tecnología adicional que funcione para mí** y no me obligue a trabajar para ello _(en teoría, de todos modos los problemas deben surgir, de lo contrario no soy yo !)_, puede **hacerme escribir más** y **con más gusto**. Ya sea en el **[sitoctt](https://sitoctt.octt.eu.org)**, o en las losas de piedra.

Ah, sí, esta fue la **primera publicación** en [mi blog **listado**](https://listed.to/@u8), es correcto señalarlo para aquellos que leen el sitio. .. pero espero que al menos la versión listada del blog pueda indexarse ​​bien y **descubierta por más personas**, mientras estamos en ello.  
Precisamente con la esperanza de lograr este objetivo acepto algunos **compromisos** cuando escribo aquí, como prescindir de las macros (que puedo usar con statiso, mientras que aquí producirían textos y enlaces rotos), para garantizar que los artículos también estén realmente disponibles en las páginas listadas.

## {{% i18n notas-refs %}}

* **Actualizaciones** de la publicación:
    * **2022-12-16**: Agregué una foto de portada para el artículo y aclaré el último detalle que había olvidado.
    * **2022-12-14**: Agregué algunos formatos adicionales y corregí algunas expresiones.
