+++
Title = "Nuevas fronteras"
Aliases = [
  "/Publicaciones/MicroBlog/2022-09-23-Nuove-Frontiere.html",
]
Categories = [ "MicroBlog" ]
Date = 2022-09-23
+++

{{< noticeAutomaticTranslation it >}}



Desde que lo descubrí hace unos días. Estoy probando ese software épico que es [TiddlyWiki](https://tiddlywiki.com).  
Inicialmente lo encontré mientras buscaba algo para organizar notas en un formato rico, que pudiera usar para la escuela y que obviamente fuera gratis.

Es un software wiki, prácticamente en la misma categoría que MediaWiki (el software en el que se basa Wikipedia), pero tiene características muy particulares.  
En primer lugar, no necesita servidor, es una app que funciona localmente... ¡pero qué absurdo (en el buen sentido)! Toda la aplicación con todos sus datos personales es un único archivo HTML autoeditable, lo que significa que puede copiar y proteger un sitio completo en un instante. No puede guardar datos por sí solo, pero debe descargar el archivo HTML modificado localmente cada vez o usar sistemas de sincronización (yo uso Git, compatible con la aplicación).

Si comencé a usarlo con el único propósito limitado de estudiar en la escuela, pero luego en estos días terminé comenzando a usarlo mucho también para crear mi llamada base de conocimiento personal y público, sobre todo lo que puedo escribir en el vuelo. un formato de documento no lineal que se adapta muy bien a notas pequeñas y rápidas interconectadas... lo que significa que es realmente interesante.

Lamento un poco decirlo, pero es posible que parte del tiempo que normalmente dedicaría al sitio ctt me sea quitado para dedicarlo al recién creado OcttKB, que, en este sentido, está aquí. en <https://kb.octt.eu.org>.  
Por mucho que me guste todo lo que he construido en los últimos meses, que de hecho seguirá vivo - tanto como un lugar en el que expresar mi estilo de diseño como un lugar en el que publicar contenido elaborado y nunca fragmentado - debo decir que he encontrado una herramienta que consigue canalizar bien algunos de mis pensamientos, aquellos que el sitio CTTT no puede gestionar.

No voy a explicar demasiado sobre el aspecto técnico de las ventajas o desventajas de TiddlyWiki ahora, porque estamos hablando de un software que es fácil de empezar a usar y absolutamente muy complicado de dominar (¡me llevará tiempo!). .  
Lo que diré es que: al estar orientado hacia la disposición de la información en pequeños elementos fundamentales (los _tiddlers_), que luego pueden conectarse entre sí para construir información elaborada -tanto con enlaces como con transclusión (cuando el contenido de un elemento aparece completamente copiado en medio de otro, lo cual se hace simplemente escribiendo <span>`{`</span><span>`{`</span><span>`Nombre del elemento`</span><span> `}`</span><span>`}`<span>) - se presta muy bien a una organización de pensamiento integral en general.

Como beneficio adicional, TiddlyWiki se puede usar como un generador de sitios estáticos más tradicional: puede escribir elementos en muchos archivos y usar el programa CLI para compilar todo en el archivo monolítico descrito anteriormente. El sitio oficial del proyecto utiliza esta técnica, pero para un sitio personal no es necesario y de hecho anula la ventaja que tiene TiddlyWiki de poder usarse como una aplicación de notas moderna: abre, escribe, todo es guardado en la nube automáticamente.

Sin embargo, el programa CLI tiene una función que encuentro útil: la capacidad de generar versiones estáticas del sitio, que no requieren JavaScript para la navegación. Esto es genial, y creo que cualquiera que tenga un TiddlyWiki público, si tiene las herramientas, debería configurar un sistema de compilación para que las páginas estáticas estén disponibles automáticamente en el servidor.