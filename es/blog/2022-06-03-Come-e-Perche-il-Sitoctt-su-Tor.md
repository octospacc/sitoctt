+++
Title = "🌐️ ¿Cómo y por qué sitectt en Tor?"
Description = "En poco tiempo desde que abrí el sitio ctt, creé un espejo Tor del mismo. ¿Por qué? ¡Mayor seguridad, privacidad para quienes lo visitan y diversión para mí!"
Aliases = [
  "/Publicaciones/2022-06-03-Come-e-Perche-il-Sitoctt-su-Tor.html",
  "/Publicaciones/2022-06-03-0000-Cómo-y-por-qué-el-Sitoctt-su-Tor.html",
]
Categories = [ "Internet", "Administrador de sistemas" ]
Date = 2022-06-03
Lastmod = 2022-06-29
+++

{{< noticeAutomaticTranslation it >}}



En los últimos días he resuelto las primeras cuestiones relativas a la disponibilidad del sitio en la red <span style='Color:#59316b;'>Tor</span>. Hay quienes me llamarán exagerado por siquiera tener la idea de hacer algo como esto, pero es poco lo que se puede hacer.  
Si nada ha salido mal, aún puede comunicarse con el servicio Onion en esta dirección:
<pequeño>~~[onmfrk2acl4xdeawfjg3nfepq7gcufolctmhiwwxpcknazus5bxzxhqd.onion](http://onmfrk2acl4xdeawfjg3nfepq7gcufolctmhiwwxpcknazus5bxzxhqd.onion){: estilo='Color:#a060c0;' }~~</pequeño>
[sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion](http://sitoctt2fxjvx3lc2iqqef2aeulflprjaasv2xl4zi7sxxbmvjy5b5yd.onion)[^ Nuevo dominio estético].

La idea, aparentemente exitosa, era utilizar un servicio PaaS gratuito, Replit, para hacerlo todo.  
De esta manera, no cargo más a mi servidor inadecuado. Desde hace meses, precisamente desde principios de febrero de 2022, uso una consola Switch como servidor para demasiadas cosas: además del histórico servidor SpaccCraft, tengo mi propia instancia de Matrix, algunos bots de Telegram que quizás sean las cosas que requieren menos recursos, y software variados menores. Sí, Nintendo Switch en el que inicié Ubuntu.  
No entraré en detalles, es mejor hacerlo en un artículo aparte, pero en resumen, la razón es que los SBC como el Raspini, hasta la fecha, debido a los acontecimientos mundiales actuales, tienen costos aterradores, y el Switch fue el único bajo. -Cuesta el consumo del ordenador con bastante RAM (4GB) que ya tenía en casa. Tienes que adaptarte.

Este también es el primer post que escribo en el blog postocto, quién sabe cómo va y sobre todo quién sabe cuándo aparecerá, porque debería arreglar por un momento mi generador de sitios estáticos para poder gestionar páginas como esta que , en lugar de páginas comunes, deben tratarse como subpáginas de la página "Blog" (generada automáticamente).

## ¿Cómo?

Volvamos a la discusión del postoctt: con Replit, tomando como base un Repl encontrado que demostraba cómo alojar otro tipo de servicio en Tor, construí mi Repl que: en cada nuevo inicio, descarga localmente todo lo necesario para compilar. e implementar mi sitio estático (desde mis repositorios de Git), preparar todo e iniciar un servidor HTTP y el demonio Tor, que actúa como un proxy al exponer el servidor HTTP al exterior a través de la red Tor. Luego, sin cesar, a través de Git, descargue las actualizaciones de cualquiera de las partes y, cuando sea necesario, regenere el sitio.  
Dejo aquí el enlace a un fragmento de GitLab con mis archivos, para cualquiera que quiera hacer el mismo servicio que yo para su propio sitio web, quizás construido con mi generador de sitios estáticos de muy baja calidad (a nivel de código, si me disgusta). a nivel conceptual o práctico no lo estaría desarrollando lentamente todavía): [gitlab.com/-/snippets/2338457](https://gitlab.com/-/snippets/2338457).

Sin embargo, con los servicios PaaS gratuitos como Replit, hay un pequeño problema: existen límites en los tiempos de ejecución del software. En el caso de esta plataforma, todo entra en suspensión si la dirección web del proyecto no recibe pings durante no sé cuántos minutos. Si recibe algo más tarde, se activa después del tiempo necesario para rehacer las operaciones de inicio.  
Es una pena, sin embargo, que, aparte del hecho de que significaría hacer que cualquiera que quiera visitar mi sitio espere al menos 30 segundos para que se establezca la primera conexión, es necesario contactar con la dirección HTTPS del dominio Replit, por ejemplo. Razones obvias no son la dirección Tor. Y hacer que la gente se conecte a través de la dirección HTTPS anula el propósito de tener un sitio Tor (al que llegaré en breve, lo juro).

La solución sería utilizar, en un ordenador que esté siempre encendido en casa, un script o un cronjob (más bien, un temporizador systemd, dado que es precisamente por systemd que los cronjobs clásicos hoy en día fallan y no funcionan correctamente) para hacer ping continuamente al dirección de mi sitio en Replit. Podría hacerlo, pero me gustaría encontrar una manera de resolver el problema limitado a los mismos servicios PaaS gratuitos, ya que algo como esto significaría que incluso aquellos que no tienen un servidor en casa podrían hacer lo que yo hice.  
Inicialmente probé con UptimeRobot, pero parece ser un problema, configuré todo por la noche y a la mañana siguiente mi sitio estaba desconectado.  
Buscando, encontré varios sitios (llamados "pingers") que te invitan a ingresar la dirección de tu proyecto Replit para que haga ping continuamente y así mantenerlo activo. Usé como 3 al azar, que ni siquiera recuerdo, y desde entonces el sitectt parece que ya no se apaga.  
O, tal vez, el mérito fue que creé un segundo proyecto Replit, que tiene el único propósito de hacer ping al primero sin cesar (mientras que el principal siempre hace ping al segundo). No lo sé, porque el segundo parece que siempre se apaga, no sé si es porque no tiene ningún servidor HTTP expuesto, tengo que investigar..

## ¿Por qué?

Saquemos inmediatamente el elefante de la habitación (que ya es pequeño): el deseo de montar un sitio que contenga material inmoral en niveles graves (que lo diferencio del material ilegal per se), que si estuviera alojado en la web tradicional sería muy fácil de rastrear hasta los propietarios con todas las consecuencias del caso, no es la única razón sensata para querer usar Tor (o cualquier otra red basada en los mismos principios técnicos, pero Tor es, para bien o para mal, la más famosa y usado).  
Este sitio también está en la web clara sin problemas, es decir, no tiene problemas para estar ahí.

Tor proporciona un gran anonimato en comparación con Internet sin filtros. La razón por la que debería ser de interés para aquellos que no trafican con contenidos ilícitos se explica rápidamente no con una respuesta, sino con una pregunta: ¿quieres dar a conocer lo que haces (incluyendo visitar un sitio web en particular, como mi blog) a corporaciones multimillonarias? que a cambio no te darán nada, de hecho no tienen escrúpulos en hacer todo lo posible incluso en tu detrimento (seguimiento) para obtener ganancias de una forma u otra?  
¿Cómo desea que su ISP sepa acerca de los servicios de Internet particulares con los que contacta? O haga que la persona que aloja esos servicios de Internet lo identifique (mi ISP y yo si es algo alojado en mi casa; de lo contrario, el proveedor particular de servidores proporcionados por empresas, como Replit o GitLab.com, donde alojo el sitio en la web clara). , si no ganarás nada con ello?  
Para mucha gente, por alguna razón, este razonamiento no cuadra, pero a pocos les importa y, aunque no me excedo, entiendo los puntos de vista de las pocas personas que quieren mantener el mayor anonimato posible. incluso cuando hacen cosas morales y morales de abogados en línea. En consecuencia, acepto y aliento el uso de Tor para acceder a los servicios y contenidos que proporciono.

¿Todavía no te convenzo? Así que escuche esto. Tor permite, por ejemplo, a los periodistas que viven bajo regímenes de censura total o parcial informar la verdad, ya sea directamente o no. O permite a quienes viven en estos regímenes informarse libremente y sin la influencia de la propaganda gubernamental, y comunicarse con otras personas en otras partes del mundo.  
El verdadero principio de que es más fácil ocultar quién eres y lo que haces a nivel individual en medio de una gran multitud, que cuando estás con otras pocas personas, también se aplica a las redes distribuidas: más personas las usan, Incluso para una navegación web sencilla, los usuarios individuales están más seguros. Entonces, al usar Tor para navegar por la web, incluso si no te importa el anonimato, ayudarás a quienes lo necesitan.  
Al menos ayudar a los usuarios que no hacen nada malo: los delincuentes que venden drogas y armas, o venden fotos y vídeos que muestran violaciones o torturas, a menudo se les sube la cabeza y acaban descuidando a la opsec hasta tal punto que tarde o temprano luego terminan (y yo diría que esto lo disfruto) más que mal.

Sin embargo, una duda que puede surgir para los no muy expertos es por qué es necesario ofrecer el sitio también como un servicio Onion, dado que cualquier contenido en Internet normal sigue siendo accesible detrás de Tor, que en ese caso funcionará mejor. como un proxy tradicional. Los problemas aquí, sin embargo, son más sutiles y tienen que ver con la naturaleza de la infraestructura clásica de Internet.

No creo que sea necesario explicar los problemas que surgen al pasar datos sin cifrar a través de Internet: la información no sólo puede ser robada (lo que para un blog público no es un gran problema), sino incluso modificada y presentada como si nada. cambiado, con enorme facilidad, desde cualquiera de las partes intermedias de la conexión, por ejemplo el ISP del cliente o el servidor.  
HTTPS para sitios web resuelve este problema. Malo. No hablamos mucho de ello, pero todo el correcto funcionamiento de estos sistemas de protección depende de una compleja infraestructura metafísica global, que tiene más fallas de las que se podría pensar.  
Buscando en Whoogle, encontré este PDF, que más o menos da un vistazo rápido a los problemas que sufre HTTPS: [Weakest_Link_in_the_Chain.pdf](https://www.accessnow.org/cms/assets/uploads/archive/docs/ El eslabón_más_débil_de_la_cadena.pdf).  
Lo que es esencialmente importante decir es que todo el sistema actual, basado en CA, consiste en la confianza en una autoridad ascendente. Sin entrar en detalles, os remito al PDF, el sistema es frágil y puede romperse, dando lugar, en raros casos especiales, a los mismos problemas que las conexiones no cifradas; de hecho, quizás incluso peor, porque la presencia de HTTPS puede llevarnos a confiar siempre y en cualquier caso: los navegadores web modernos nos han condicionado a hacer preguntas sólo cuando vemos el candado abierto o un triángulo de advertencia, no cuando vemos el brillante cerrado. candado verde.

Cuando usas Tor para conectarte a sitios en Tor, la conexión no solo se enruta entre aún más nodos en la red, sino que los datos se cifran con un sistema de claves públicas y privadas entre el cliente y el servidor del servicio Onion: el único débil. El punto de la cadena es el propio servidor, que almacena la clave privada, no hay otras autoridades en las que confiar.  
El sistema tiene problemas, no lo niego en absoluto, empezando por el hecho de que si se roba la clave privada, los ladrones pueden suplantar el sitio y en ese momento lo único que pueden hacer quienes lo administran es cambiar la clave, por lo tanto Además cambiando el dominio, no se puede ir a la CA a revocar el certificado. Así funciona un sistema basado 100% en matemáticas y 0% en confianza.  
A decir verdad, estaría cometiendo un error al utilizar la máquina de otra persona para alojar el sitio Tor... Greve. Está bien.

## En conclusión

Tor no es ni mucho menos perfecto: tiene varios tipos de fallos, generalmente basados ​​en la desanonimización de los usuarios porque eso es lo que interesa a las agencias de 3 letras, pero hablemos claro: es un paso adelante para tener más protección, y sin duda es un gran paso adelante hacia la seguridad de los datos, de forma que se garantice que la comunicación entre cliente y servidor sea tan segura como la del servidor y el cliente, sin preocuparse por los detalles introducidos por terceros.

Sin embargo, el hecho de que Tor cuente con el apoyo financiero, al menos en parte, del gobierno de Estados Unidos, sin entrar en demasiados detalles, quizás conlleva algunas implicaciones profundas y peligrosas. Por eso quiero, más o menos pronto, dar una oportunidad a servicios similares a Tor pero diferentes a él. Lokinet me inspira, a decir verdad, creo que será la primera red alternativa que pruebe.

## {{% i18n notas-refs %}}

[^Nuevo dominio estético]: **Actualización 2022-06-29**: ¡Cambié el dominio por razones estéticas a este nuevo! Información adicional (pero aún limitada) en [la publicación de PicoBlog de hoy](../PicoBlog.html#-2022-06-29-Minare-domini-Tor).