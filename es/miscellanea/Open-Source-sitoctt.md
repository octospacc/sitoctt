+++
Title = "🔓️ Código abierto"
Categories = [ "Meta" ]
Lastmod = 2024-11-05
+++

{{< noticeAutomaticTranslation it >}}



Todo el contenido de este sitio que creé (mis propios escritos, medios originales y la mayor parte del código fuente) tiene licencia bajo <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.it?ref=chooser-v1&title=%E2%9C%A8sitoctt%E2%9C%A8&href=https://sitoctt.octt. eu.org&creator=OctoSpacc" rel="noopener" target="_blank">"Atribución Creative Commons - Compartir por igual 4.0 Internacional" (CC BY-SA 4.0) (<span class="CCIcons"><img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/CC.svg"/> <img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/BY.svg"/> <img class="mw1" src="{{< assetsRoot >}}_/Media/Icons/CC/SA.svg"/>)</span></a>, una licencia gratuita que promueve el intercambio y no afecta la derechos legítimos a la cultura y a la colaboración de la humanidad en general.

Sin embargo, también hay contenidos que no son míos.  
Normalmente, si algo sale de mi mano, no tendrá ningún crédito cerca.  
Para material prestado, sin embargo, siempre que sea posible, siempre se indicará la fuente de donde lo tomé y la licencia del objeto, ya sea de dominio público, Creative Commons o no especificada.  
Tenga cuidado, a menudo dejo los créditos para elementos HTML y CSS solo en las fuentes de la página. Así que, por si acaso, consulte allí para ver este tipo de créditos. Sin embargo, para cosas como imágenes o textos, los créditos suelen ser una parte visible de la página, cerca del elemento prestado (como una descripción); otras veces, el mismo objeto es un enlace que, si se hace clic, lo lleva de regreso a la fuente.

## Repositorios

Todas las fuentes del sitio se pueden descargar desde los respectivos repositorios de Git (GitLab.com) (divididos para mantener limpio el historial), en las condiciones descritas anteriormente:

* Principal: https://gitlab.com/octtspacc/sitoctt
* Medios: https://gitlab.com/octtspacc/sitoctt-assets

Algunos mirrors actualizados, siempre presentes en caso de que ocurra algún _patatrac_ en los repositorios principales:
* GitHub: https://github.com/octospacc/sitoctt, https://github.com/octospacc/sitoctt-assets
* Gitea.it: https://gitea.it/octospacc/sitoctt, https://gitea.it/octospacc/sitoctt-assets

## Estructura fuente

El repositorio secundario sólo se utiliza para acumular archivos multimedia incrustados en el sitio (tanto en las páginas como en el diseño), descargas, etc. No está estructurado en múltiples ramas y las confirmaciones son irrelevantes.

El repositorio principal se estructura según estas ramas:

#### `sitoctt-next` (principal)

Esta es la rama ahora configurada como predeterminada, que aloja los archivos principales del sitio, ya que se migró al generador de sitios estáticos de Hugo:

* Fuentes de páginas y publicaciones (principalmente en formato Markdown)
* Fuentes de diseño de página, es decir, plantillas HTML con sintaxis Go y hojas de estilo CSS
* Otros elementos básicos de la página, como scripts del lado del cliente e íconos pequeños
* Script muy personalizado para cada fase del proceso de compilación del sitio: obtención de dependencias, compilación de páginas, sincronización de datos externos, etc...

#### `sitoctt-old` (antiguo `principal`)

Era la rama principal del sitio antes de la migración a Hugo, cuando todavía lo administraba mi generador, estático.

La estructura generalizada es la misma que hoy, pero obviamente las carpetas y archivos eran un poco diferentes.

#### `traducir-caché`

Rama donde almaceno las versiones traducidas automáticamente de varias páginas y publicaciones del sitio. Se almacenan por separado porque son archivos que se pueden regenerar en cualquier momento y, por lo tanto, no tiene sentido que ensucien el historial de confirmaciones reales del sitio. Sin embargo, hay que conservarlos, porque generarlos todos desde cero cada vez que se compila el sitio llevaría horas...

#### `caché de requisitos`

Rama que uso un poco como repositorio para varias dependencias de compilación o tiempo de ejecución del sitio, ya que algunas son extremadamente frágiles y otras tal vez simplemente sea conveniente hacer una copia de seguridad de ellas. Pero no importa mucho.