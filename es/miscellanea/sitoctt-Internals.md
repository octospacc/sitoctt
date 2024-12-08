+++
Title = "⚙️ sitoctt Internos"
Categories = [ "Meta" ]
Lastmod = 2024-12-08
+++

{{< noticeAutomaticTranslation it >}}



En los interminables años de su existencia, el sitio ctt ha evolucionado y continúa evolucionando, obteniendo características épicas y en general un aura de magia... y aquellos que quieran ser como yo tal vez quieran comenzar creando su propio sitio, también tomando el mío como inspiración.

Por este motivo, creo que es bueno conservar una colección detallada de las distintas especialidades técnicas del sitio, bien ilustradas; tal vez explique para que sean comprensibles incluso para aquellos que tienen un poco de curiosidad pero no son expertos. (Todo esto, entonces, sería útil incluso para mí para tomar nota de detalles muy contradictorios, para no tener que demorarme).

En cualquier caso, el sitio ctt es completamente gratuito y de código abierto; Las notas de derechos de autor, las licencias y la estructura fuente completa se describen en la página "[🔓️ Abrir Fuente]({{< relref "/miscellanea/Open-Source-sitoctt/" >}}_)"!

_...Bajo construcción..._

## General

El sitio es un llamado "sitio estático", es decir, una colección de archivos HTML y recursos conectados sin un programa de servidor backend con lógica y base de datos. Esto implica un mantenimiento muy bajo y la posibilidad de alojar el sitio prácticamente en cualquier lugar, incluso de forma gratuita, así como distribuirlo sin demasiada dificultad en diferentes formatos.

En mi caso, como ya es práctica común, las páginas estáticas del sitio se compilan con un "generador". Desde mayo de 2022 hasta agosto de 2024 mantuve el sitio en _staticoso_, mi generador lo creó específicamente y luego quedó obsoleto, porque el código se había vuelto demasiado [_spaghetti_](https://it.wikipedia.org/wiki/Spaghetti_code); desde agosto de 2024 migré el sitio a [_Hugo_](https://gohugo.io).

En el pasado, las plantillas/temas del sitio eran muy simples, técnicamente no separables de los estáticos y creados desde cero; desde la migración a Hugo se utiliza un tema personalizado (con ligeros cambios de color y diseño) creado a partir de [_Ananke_](https://themes.gohugo.io/themes/gohugo-theme-ananke/), uno de los más recomendados para aquellos que quieran hacer cambios.

## Investigación

El sitio ctt integra un campo de búsqueda de texto, con el que se puede llegar inmediatamente a cualquier otra página del sitio. Se implementa de dos maneras:

* **JavaScript (local)**: Cuando se carga cada página, se carga un índice (el del idioma actual, ya que están separados para mantener el rendimiento alto) con los metadatos de todas las páginas del sitio, que luego se administrado por el [script `site-search.js`](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/static/res/site-search.js) y la plantilla [`search-applet.html`](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/layouts/partials/search-applet.html); Lo construí tomando el código de búsqueda del tema [_Blowfish_](https://themes.gohugo.io/themes/blowfish/) para Hugo. (El índice es en realidad un archivo JavaScript que inicializa un objeto JSON global, y no un archivo JSON puro, lo que permite que la búsqueda funcione incluso cuando se navega por el sitio desde archivos locales; es generado por la [plantilla `index.searchindex .js `](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/layouts/index.searchindex.js).)
* **Reserva**: En caso de que JavaScript no se pueda ejecutar en el navegador, el cuadro de búsqueda funciona de una manera más clásica y se basa en [mi instancia de YaCy](https://yacy.spacc.eu.org), que funciona exactamente como un motor de búsqueda web normal (Google, DuckDuckGo, etc...) pero indexa mejor todas mis páginas (y por lo tanto no solo representa belleza).

## Multilingüe

La gestión de varios idiomas para las distintas páginas del sitio se realiza con funciones integradas en Hugo.

Casi todas las páginas y publicaciones se traducen automáticamente del italiano a otros idiomas, con la esperanza de que el sitio sea un poco más útil, porque potencialmente puede ser descubierto por más personas a través de los motores de búsqueda; Hago esto con [un script de Python creado solo para esto](https://gitlab.com/octtspacc/sitoctt/-/blob/sitoctt-next/Scripts/Translate/Main.py), que usa _Google Translate_ a través de [el script/library _Translate Shell_](https://memos.octt.eu.org/m/aC95aGEzJi7DvU2teM3eos).

## ¿Otro?

No lo sé. No espero que se me ocurra nada más que agregar de la nada; más bien, deja un comentario en esta página si algo te intriga y quieres más detalles, explicados más allá del código...