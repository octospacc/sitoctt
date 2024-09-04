+++
Title = "📄 Los documentos no deben convertirse en solicitudes"
Description = "La Web se está volviendo cada vez más inflada, lenta y riesgosa. Cada sitio se está convirtiendo en una aplicación, incluso si eso no es lo correcto..."
Aliases = [
  "/Publicaciones/2022-06-14-Documentos-No-deben-convertirse-en-aplicaciones.html",
  "/Publicaciones/2022-06-14-0000-Los documentos-no-deberían-convertirse-en-aplicaciones.html",
]
Categories = [ "Internet" ]
Date = 2022-06-14
+++

{{< noticeAutomaticTranslation it >}}



La Web actual es sin duda muy diferente a la de hace 20 años, y cambia cada vez más con cada año que pasa.  
Mirar los lados positivos del progreso siempre es muy fácil y tranquilizador, y por esta razón rara vez pensamos en los lados oscuros que, en muchas, muchas cosas, existen. La Web, lamentablemente, es uno de ellos.

## ¿Lo que está sucediendo?

La Web de documentos está empeorando y poco a poco se está convirtiendo, a todos los efectos, en la Web de aplicaciones.  
Sin embargo, para comprender el problema debemos recordar qué era la World Wide Web en sus inicios. Era una plataforma de Internet para intercambiar información en forma de hipertexto, eso es todo. ¿Y qué son los hipertextos? Algunos documentos. Por supuesto, documentos muy particulares, cuya lectura puede realizarse de forma no lineal gracias a enlaces de hipertexto, y la Web en particular ha evolucionado hasta convertirse en un sistema de hipertexto con soporte para texto decorado, elementos multimedia y una maquetación muy avanzada. . pero básicamente siempre hablamos de documentos.

En los primeros días de la Web sólo existían los llamados sitios estáticos, lo que significa que siempre permanecen iguales (a menos que los actualicen quienes los administran), y no hay nada que los usuarios que los visitan puedan hacer para cambiarlos. En esta categoría se incluyen cosas como un simple blog, el sitio en sí por ejemplo, un sitio de noticias, el sitio de demostración de una empresa o producto, una enciclopedia... en definitiva, cosas sencillas de este tipo.

Un poco más tarde (días o semanas, la idea ya estaba prevista en las primeras especificaciones de Web y HTML) surgió la idea de utilizar servidores que pudieran procesar información ingresada por los usuarios mediante botones y campos de texto, interactuar con bases de datos y, esencialmente, Proporcionar una experiencia de contenido generado por el usuario. Por eso empezaron a surgir foros en un sentido más clásico, sitios para crear sitios (!) de forma más sencilla (CMS), las redes sociales más cercanas a nosotros, webchats y, no lo olvidemos, buscadores. Estos son los sitios web dinámicos.

En este período, sin embargo, no importaba si estábamos hablando de sitios estáticos o dinámicos, sólo los documentos regresaban a las computadoras de cualquier usuario que contactaba el sitio. Ya sea la propia página HTML, un archivo CSS para estilizar la página, o archivos multimedia (en ese momento sólo fotografías) colocados entre un bloque de texto y otro, hasta el navegador, el programa que interpreta y muestra estos documentos, sólo documentos. para ser interpretados devueltos, no programas para ser ejecutados.  
Aquí todavía estamos en la existencia exclusiva de la Web de documentos, para la Web de aplicaciones todavía habrá que esperar.

Con estas últimas frases, los que piensan en el futuro ya han entendido adónde quiero llegar con esto, pero llegaré con calma.
En esta era, esencialmente no podía pasarle gran cosa a su computadora o a su información simplemente cargando una página web determinada, porque el navegador sólo tenía que manejar archivos que le indicaban cómo diseñar el texto en la pantalla (HTML y CSS, marcas). idiomas), o cómo organizar píxeles de colores arbitrarios en la pantalla (imágenes).  
Lo único en lo que había que confiar era en el navegador en sí (y en que estuviera actualizado), no en sitios web individuales.

## El estado actual de las cosas

Luego vino el guión. Hemos visto todo tipo de cosas, pero al final sólo JavaScript ha sobrevivido hasta el día de hoy, y es la base de la pionera (y trágica) Web 3.  
Otros scripts web son programas reales que un navegador puede ejecutar si se cargan desde una página. Aquí, sin embargo, surge un problema evidente: hay que confiar en todos los sitios web que integran scripts, un problema que, sin embargo, es decididamente complejo de abordar.

Para ser honesto, este no es el único problema: los scripts muy a menudo ralentizan las páginas, especialmente en dispositivos más antiguos y menos potentes, y en algunos dispositivos muy antiguos no funcionan en absoluto, dañando así los sitios que los utilizan ampliamente. En la práctica, esto significa que los sitios que innecesariamente eligen integrar JavaScript son, en cualquier hardware, a menudo mucho más lentos que aquellos que no lo hacen.  
Sin embargo, hablaremos de esto en detalle otro día.

En primer lugar, hay sitios que suben código ofuscado, a todos los efectos software privativo... esos, sólo con mucha paciencia y suficiente experiencia puedes entender lo que hacen.
En cualquier caso, sin embargo, el simple hecho de que un programa sea gratuito no significa que necesariamente esté libre de problemas de privacidad y seguridad, y esto se ha visto, irónicamente, especialmente en la comunidad JS, donde los desarrolladores de bibliotecas populares han salido a la luz. de su camino e integraron malware en sus proyectos.
Pocos desarrolladores de software abierto incluyen código que sea perjudicial para los usuarios en sus programas, pero esos 2 o 3 de cada 1.000.000 que lo hacen, a veces se salen con la suya, porque no hay otras personas que se molesten en leer el código y actuar adecuadamente.  
Este es un problema que concierne a todos los usuarios de la Web, y si los que ya tienen la capacidad no van, por obvias razones de tiempo y paciencia, a leer todo el código de los scripts cargados por todos los sitios que visitan, imagínense que aquellos que simplemente no tienen la capacidad para hacerlo (la gran mayoría de usuarios) no tienen remedio.

Mucha gente tiene problemas -algunos sensatos y otros no, para aquellos que saben un mínimo de cómo funciona una computadora moderna- al instalar aplicaciones nativas desde cero, tal vez nunca antes haya oído hablar de ellas... todos problemas que se ignoran cuando simplemente estás navegando por la Web. , sin conocer los cientos de scripts que se ejecutan en una variada sesión de navegación.

¿Cómo puede ser malicioso un script, y por tanto un sitio que lo integra?  
Los navegadores hoy en día ejecutan scripts de sitios web en un entorno bastante aislado, por supuesto, y a partir de hoy, por razones que no explicaré ahora, incluso fallas graves surgen cada mes; si mantienes el navegador actualizado, la seguridad en teoría está bien.  
La privacidad, sin embargo... eso realmente termina mal.
Hubo una demostración hecha como juego que mostró personalmente por qué hay que tener miedo... lástima que ya no puedo encontrarlo, no recuerdo de dónde lo descubrí y, por lo tanto, nada :(. Por el momento , para aquellos que quieran saber más, solo puedo vincular [Información del dispositivo](https://deviceinfo.me), que muestra muchos de los datos (pero no todos) que un sitio web puede extraer de los dispositivos de quienes visítelo. Quizás también eche un vistazo a [Cover Your Tracks] (https://coveryourtracks.eff.org).

El problema aquí, hay que precisar, no reside en las aplicaciones web que se pueden definir como aplicaciones reales, que utilizan JS para funcionar. Ya sea una calculadora, un juego, un procesador de textos, una aplicación de edición de fotografías, siempre estamos hablando de aplicaciones, sin importar si están escritas en un idioma nativo como aplicaciones nativas para una plataforma específica, o si están escritas en JavaScript como Aplicaciones para navegadores web. Todas estas cosas requieren que el cliente ejecute el código, porque son aplicaciones muy interactivas, y eso está bien. Yo mismo uso a menudo aplicaciones que se ejecutan en una ventana del navegador.  
Habría entonces una larga discusión sobre la Web como plataforma de desarrollo de aplicaciones, por muchas razones (incluso los defectos), positivas y negativas, pero hablaré de ello en el futuro.

Pequeña digresión: una manera de identificar rápidamente si un servicio en la Web es concebible como un documento o necesariamente sólo como una aplicación, lo cual me parece intuitivo, es la siguiente: pregúntese (suponiendo que no haya música ni imágenes): "el El contenido de este sitio tendría sentido si se imprimiera íntegramente en papel (incluso si ya no fuera hipertexto), ¿o no?
Si la respuesta es sí, entonces estamos hablando de algo que fácilmente puede quedar como documento, y debemos desconfiar de quien afirme lo contrario.  
¿Tiene sentido el contenido de un foro si se imprime en un libro, una revista o un simple folleto (objetos comúnmente considerados documentos, incluso si son físicos)? Por supuesto, así como el de un blog, un perfil social, un chat o la página de resultados de un buscador.  
Sin embargo, imprimir una calculadora o una aplicación de procesamiento de textos no tiene sentido (a lo sumo, solo tiene sentido imprimir los datos insertados en esa aplicación u obtenidos de su procesamiento).

## El desastre de la aplicación

El verdadero problema radica en el hecho de que los sitios web no directamente interactivos, que antes clasificamos en estáticos y dinámicos, se están convirtiendo cada vez más en aplicaciones, pero sin ningún motivo válido.  
Cada vez veo más y más sitios, que deberían ser documentos simples, que no funcionan correctamente sin JavaScript.
Pasamos de sitios de noticias donde el artículo no carga, a blogs donde los menús de navegación ya no funcionan, foros donde las secciones de mensajes no son visibles, foros que no cargan en absoluto, nuevos motores de búsqueda que no funcionan en absoluto sin JS (y que se presentan como una alternativa privada a Google, ¡es una pena que Google funcione bien incluso sin ejecutar scripts propietarios y estos no lo hacen!), e incluso sitios de redes sociales que sólo muestran una pantalla en blanco si no se carga JavaScript .

Estos servicios que he enumerado se pueden clasificar todos como documentos y, salvo casos muy particulares, como aquellos sitios que cifran y descifran datos del lado del cliente deliberadamente para garantizar que el servidor no pueda leerlos (ver [PrivateBin](https:/ /privatebin .info) para un bloc de notas, [Element](https://element.io) para una aplicación de mensajería), puede funcionar bien sin secuencias de comandos y debería (al menos opcionalmente).

No me gusta hablar en contra del software libre y abierto escrito en su tiempo libre por entusiastas, que quizás ni siquiera ganan dinero con él, pero una cosa que me impactó negativamente es que la plaga de la aplicación también ha afectado al Fediverso y a sus plataformas.  
Para aquellos que desconocen este nuevo universo virtual, diré brevemente que es una idea y, en la práctica, un software, basado en protocolos comunes, para garantizar la compatibilidad y la interoperabilidad universal, de modo que quienes están en la plataforma A también puedan comunicarse con aquellos que estan en

Mastodon y Friendica, al menos para ver perfiles y sus publicaciones, o discusiones con todos los mensajes, tratan bien a quienes aman la Web de puros documentos y, aunque sus aplicaciones interactivas no funcionan sin JS (Mastodon totalmente, Friendica parcialmente) aunque podríamos, ya estamos en un excelente compromiso.  
Si una persona no forma parte de una determinada instancia, pero quiere ver un contenido conociendo el enlace, puede hacerlo sin miedo, porque sólo debe cargar documentos estáticos en el navegador web de confianza.

Luego hay otras plataformas, me vienen a la mente Misskey, Pleroma y Pixelfed. Estos aquí, para permitirle ver cualquier cosa, requieren que tenga JavaScript.  
Tal vez incluso puedas confiar en los autores del software, solo existen los 10 habituales, pero ¿cómo puedes confiar cuando encuentras una instancia de la que nunca has oído hablar antes y administrada por quién sabe quién? Respuesta simple: no puedes; aunque en teoría se podría comprobar qué scripts carga la instancia y si se ajustan a la versión original (o, en el caso de un fork, si los cambios realizados son realmente los documentados), nadie lo hará, por razones obvias. de los que hablamos antes.  
El problema de la autoridad no verificable del código, claramente, se agrava aún más para los sitios web individuales, que no necesariamente se basan en ningún software terminado conocido y que, por lo tanto, no tienen una contraparte real con la que hacer una comparación sobre el estado del código.

Sobre el Fediverse, digo que la pregunta me llama particularmente la atención porque no me lo esperaba.
Sinceramente, de parte de las Big Tech, que apuestan por espiar a los usuarios para ganar dinero vendiendo sus datos, espero un progresivo abandono de la Web de documentos en favor de la exclusivamente de apps aunque sólo sea para leer unos pocos párrafos de texto (lo que está sucediendo , pero lentamente), considerando el enorme potencial para subyugar a los usuarios.  
De aquellos que desarrollan software para comunidades que están preocupadas por algunos de los nuevos problemas de privacidad en la Web y que, por lo tanto, utilizan software alternativo menos popular, no lo espero en absoluto.

## Todo terminará en tragedia

Me temo que la situación sólo puede empeorar. Aunque estoy más que seguro de que mis palabras y acciones no cambiarán en absoluto el futuro, dado que creo en lo que digo y, de paso, al mismo tiempo también creo contenidos y servicios para la Web, hago lo que puedo. para crear mis cosas como me gustaría verlas en todas partes.
Entonces, para los sitios no interactivos, siguiendo la técnica de [mejora progresiva](https://en.wikipedia.org/wiki/Progressive_enhancement), primero me aseguro de que las cosas básicas funcionen sin secuencias de comandos, utilizo secuencias de comandos lo menos posible y, si Realmente tengo que hacerlo, lo hago para funciones y características opcionales, y trato de mantener el código (dentro de mis límites) compacto y legible.

Personalmente hago un llamamiento a ustedes que están leyendo esto.  
Si creas sitios web, considera tener en cuenta lo que he dicho, te lo ruego.  
Sin embargo, si solo navega, tal vez intente comenzar a bloquear JavaScript en su navegador (Chromium integra esto como permiso para sitios, de los cuales puede establecer la configuración global en Bloqueado; en Firefox necesita instalar [NoScript](https:/ /addons.mozilla.org/firefox/addon/noscript)), para mantener JS desactivado para sitios que no conoces, y tener la posibilidad de activarlo temporal o permanentemente para dominios que no funcionan o que ya conoces. saben y son conscientes de confiar en mí. ¡No solo navegarás de forma más segura y privada, sino que también tendrás menos ralentizaciones y cargas!