+++
Title = "2️⃣ Juegos sincronizados entre PlayStation 2 y teléfono inteligente"
Date = 2023-10-17
Downsync = "/it/note/Gaming-Sincronizzato-PS2-Smartphone.html"
Aliases = [ "/Publicaciones/Notas/2023-10-17-Gaming-Sincronizzato-PS2-Smartphone.html" ]
Description = "En detalle, cómo diseñé un sistema para tener juegos y guardados siempre sincronizados entre el emulador y la consola PS2 real, compartido aquí."
Categories = [ "Juegos" ]
Lastmod = 2023-10-18
+++

{{< noticeAutomaticTranslation it >}}



<!-- Generado automáticamente por ListedDownsync.js. No lo edite (a menos que también establezca "% Downsync = False"); se sobrescribirá. -->

Quienes han seguido mis aventuras durante bastante tiempo y con la debida atención quizás lo sepan, pero el mayor problema en TI es: cómo conciliar adecuadamente las discrepancias que se crean cuando surge el problema de jugar videojuegos tanto en casa como en una computadora portátil. surge. Entre juegos que en un caso son cómodos de jugar y en otro tal vez ni siquiera se ejecutan, y las partidas guardadas que están repartidas en infinidad de dispositivos diferentes, resolver este problema por completo nunca será posible...  
Sin embargo, a veces la entropía del cerebro es capaz de generar ideas particularmente útiles también en este sentido, como me pasó el otro día con la PS2.

De hecho, tengo una verdadera PlayStation 2, una consola doméstica que cuando encuentras una manera de utilizarla es ciertamente apreciable... y que a menudo no uso, por las razones mencionadas anteriormente: ni directamente, porque a menudo no No me apetece en casa, ni con el emulador en el smartphone, porque sentiría que en casa no usaría la consola real ya que los guardados actualizados sólo estarían en el teléfono.  
Y luego, el otro día, mirando la consola (no estoy seguro de por qué), creo que debería haber una manera de sincronizar fácilmente las partidas guardadas entre ella y el teléfono...

## Problema 1: ¿memoria USB o tarjeta de memoria?

En ese momento, la idea más sencilla que se me ocurrió fue: existen [adaptadores](https://www.amazon.it/Adattatore-Memoria-Lettore-Sostitutivo-trasparente/dp/B0C8TTQFJY) para utilizar una tarjeta microSD como la memoria de PlayStation tarjetas (que en su lugar utilizan una interfaz no estándar)... podría ser mejor comprar una de esas, así guardo todos los archivos guardados allí y, si lo deseo, también puedo acceder a ellos desde otros dispositivos moviendo la tarjeta.< sup id= "fnref1"><a href="#fn1">1</a></sup>  
Con una tarjeta de varios GB (ya no hay ninguna pequeña), además, podría prescindir de la memoria USB y guardar todos los juegos sólo en la tarjeta de memoria.

Por suerte, esta no es la única manera, al menos para ciertos juegos: [Open PS2 Loader](https://github.com/ps2homebrew/Open-PS2-Loader), el homebrew que ejecuta juegos comerciales desde memorias de respaldo (como USB sticks), admite el uso de tarjetas de memoria virtuales (VMC) que se guardan como archivos en la unidad USB. Los juegos son bastante lentos para guardar eso (la PS2 solo admite USB 1.1, además hay algunos gastos generales extraños), pero es una solución aparentemente viable.

## Problema 2: Guardar conversión

Sin embargo, independientemente de la elección anterior, descubro otro obstáculo: los guardados deben convertirse para pasar de la consola al emulador (al menos [AetherSX2](https://aethersx2.com), para bien o para mal, el único uno verdaderamente decente hasta la fecha) y luego viceversa.  
Afortunadamente, encontré inmediatamente [mymc](http://www.csclub.uwaterloo.ca:11068/mymc), un programa tan antiguo que requiere Python 2 (mientras que por el momento llevamos años y años en 3). ), pero funciona y, gracias a Dios, ofrece una interfaz de línea de comandos.

No realiza verdaderas conversiones de tarjetas de memoria virtuales per se, pero le permite manipular los archivos contenidos de varias maneras. Todo muy tosco, pero afortunadamente lo suficientemente explotable para hacer justo lo que necesito, después de armar un guión ideal.  
No intentaré explicar cómo funciona, al final del artículo puedes descargarlo y leerlo, es aburrido. Empaqueté mymc dentro del script, para que no sea necesario instalarlo por separado.

### Problema 3: Conversión desde tu teléfono

_Nota 2023-10-18: Encontré una bifurcación moderna (en Python 3) de mymc, [mymc+](https://sr.ht/%7Ethestr4ng3r/mymcplus/)... no la he probado (todavía), pero es posible que esto también funcione en Android, eliminando la complicada configuración que sigue, así que lo menciono.

Desafortunadamente, mymc tiene algunos problemas para funcionar en [Termux](https://termux.dev/en) (el entorno Linux nativo muy conveniente para este tipo de integraciones) en mi Android: no sé cuál es la culpa, pero en En la práctica el programa tiene problemas para leer archivos VMC, arrojando un error del tipo `file.vmc: Bad file descriptor`. No pude encontrar ninguna solución en línea, ni siquiera para búsquedas generales del problema, así que tuve que conformarme. Quizás usar un sistema GNU+Linux en contenedores en la raíz, con sus bibliotecas y una versión diferente de Python 2.7, sería suficiente para resolver el problema, pero quién sabe.  
Por mi parte, estaba empezando a molestarme, así que opté por delegar la conversión a mi servidor Debian, haciendo que un script Termux realizara la simple tarea de cargar el VMC en el servidor, ejecutar el script de conversión real allí y luego descargue el archivo convertido a la ubicación correcta localmente.

Antes de que lo olvide: en Android 13 y superiores (pero ya en algunas versiones anteriores) se necesitan permisos de root para leer y escribir archivos desde/hacia memorias externas (como la memoria USB) y carpetas privadas de aplicaciones (como aquella donde se conserva AetherSX2). tarjetas de memoria virtuales).  
Por lo que he podido comprobar, si no tienes root necesariamente tendrás que usar un administrador de archivos adecuado (y no creo que los haya scriptables, así que tendrás que usar las manos), o quizás ADB. , para mover los archivos... gracias a Google.  
En cualquier caso, mis scripts se han escrito en rutas especiales utilizadas para todos los ambaradan.

Usando [Termux:Widget](https://wiki.termux.com/wiki/Termux:Widget), finalmente agregué dos accesos directos al iniciador de mi sistema, para la conversión de VMC:

* uno que pasa de formato PS2 a emulador, para ejecutar cuando quiero jugar en mi teléfono pero los guardados en el pendrive fueron modificados por última vez por la PS2;
* el otro para la conversión inversa, que se realizará cuando quiera ir a jugar en la PS2 una vez que el emulador haya actualizado mis partidas guardadas.

Para explicarlo me doy cuenta que parece muy complicado, en la práctica solo tengo que presionar un botón y esperar unos segundos.

## En la práctica: el valor de la memoria única

Una vez eliminados los problemas se procede a la configuración, y su punto fuerte reside en la centralización de juegos y guardados en un único dispositivo: la llave USB. De este modo:

* Evito la confusión que generan los juegos que tengo de un lado pero no del otro, sobre todo cuando quiero modificar mi colección;
* No necesito una microSD mucho más grande en mi smartphone para guardar todos los juegos que ya tengo en otra memoria portátil, con ventajas para la estabilidad de los demás datos y el peso de la cartera;
* No hay confusión adicional al administrar los guardados también, ya que estos se administran como dije antes.

En la PS2 normalmente adjunto el pendrive cuando lo necesito, sin embargo en el smartphone tengo que usar un adaptador USB-C OTG, lo cual es en promedio un inconveniente pero es poco lo que se puede hacer. Para evitar perder estas cosas, coloqué un mosquetón en la memoria USB y un llavero en el orificio para los cordones en la cubierta del teléfono.

## En conclusión: ideas en cadena

Creo que este es el sistema más ideal dadas mis condiciones iniciales y en los próximos días lo probaré a fondo.  
Sin embargo, probablemente tendré que conseguir una memoria externa más grande para almacenar más juegos, porque la de 32 GB que uso ahora siempre se me ha quedado pequeña.

Tal vez, tomando uno lo suficientemente grande y escribiendo un homebrew específico, creo que puedo adaptar este sistema mío también para juegos de Wii, usando la misma memoria para esos también... ¿spoilers? 👀

En realidad, aquí están los recursos adicionales para este artículo:

* Mi pregunta inicial y breve discusión sobre el sistema sobre Sony Hacking Zone: [https://t.me/SonyHacking/46784](https://t.me/SonyHacking/46784);
* Guía para usar VMC en OPL: [https://youtube.com/watch?v=tBrKcJC\_E4U](https://youtube.com/watch?v=tBrKcJC_E4U)
* Mis scripts de conversión (en GitLab): [directo](https://gitlab.com/octospacc/Snippets/-/blob/main/Ps2EmuVmcConvert.sh), [a través del servidor](https://gitlab.com/octospacc /Snippets/-/blob/main/Ps2EmuVmcConvertCloud.sh);
* Versión de AetherSX2 para Android que juego (la última sin adware): [https://www.apkmirror.com/apk/aethersx2/aethersx2/aethersx2-v1-4-3060-release/aethersx2-v1-4-3060-android -apk -descargar/](https://www.apkmirror.com/apk/aethersx2/aethersx2/aethersx2-v1-4-3060-release/aethersx2-v1-4-3060-android-apk-download/).

---

1. Sobre esta conclusión encuentro opiniones encontradas o consejos que no son demasiado claros, así que tenga cuidado: no está claro si estos adaptadores también funcionan como tarjetas de memoria normales para guardar juegos (y por lo tanto, posiblemente también como tarjetas para FMCB), o sólo como memoria externa para homebrew como OPL... en cualquier caso sería una compra potencialmente válida, considerando los inconvenientes técnicos del USB en PS2. [↩](#fnref1)