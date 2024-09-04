+++
Title = "Las ventajas inesperadas del dispositivo Linux"
Aliases = [
  "/Publicaciones/Archivo/2022-05-07-Las-ventajas-inesperadas-de-la-clave-Linux.html",
]
Categories = [ "Tecnología" ]
Date = 2022-05-07
Lastmod = 2022-08-13
#Template = "loli-documentatrice.html"
+++

{{< noticeAutomaticTranslation it >}}



Una cosa que hice hace meses y que, hasta ahora, ha demostrado ser una **elección ganadora**, fue **instalar** un sistema operativo basado en **Linux**, en modo persistente, **en** un pequeña **memoria USB**.

Las razones por las que quise hacerlo inicialmente son quizás simples y banales, pero me dio, tras un análisis cuidadoso, algunas ventajas **inesperadas** que fueron mucho más que bienvenidas.

### ¿Por qué se necesitaba el bolígrafo?

La necesidad inicial de la clave surgió hace meses porque, en el aula de informática del colegio, tenía, como todo el mundo, que iniciar sesión en mi cuenta de GSuite para acceder a la clase virtual de informática. Esta cosa aparentemente sencilla, en mi caso, escondía dos obstáculos:

- **Mi contraseña tiene** docenas de caracteres aleatorios. Me permito esto porque uso un administrador de contraseñas (para todas mis cuentas), pero escribir a mano siempre es doloroso;
- **Google no confía en la dirección IP de la escuela**, y me pediría que confirme el acceso, pero como no han agregado ningún método de seguridad a la cuenta, me piden que agregue un número de teléfono. Sólo porque me lo pide de esta manera, con una excusa clara, nunca le daré mi número a Gluglu: no tiene sentido, si los malos robaron el nombre de usuario y la contraseña de mi cuenta, simplemente podrían verificar este último con su propio número, y según Google quedará claro que la cuenta les pertenece... pero no voy a ir más lejos.

Podría haber usado cualquier pendrive, con un navegador portátil de Windows descargado, que contuviera mi sesión de Google guardada desde casa, con acceso registrado con mi dirección IP, y habría solucionado el problema.  
Podría haberlo hecho, pero no habría sido divertido.  
Y aquí surgió la idea de la clave con un sistema operativo completo, arrancable en cualquier PC x86_64, totalmente independiente del disco interno del PC en cuestión.

### Elección del hardware

Primero, **pensé en la memoria que usaría**.

En cuanto a capacidad, me gustaría decir que lo hice solo por el desafío, pero la verdad es que, en los pocos pendrives muy grandes que tengo, guardo otros archivos, que tengo que guardar en el pendrive. , y moverlos a muchos pendrives pequeños es molesto y genera confusión en el futuro. Entonces, tomé uno de mis pendrives de 2 GB y me dije que me conformaría con él (_y, **spoiler**, tenía razón, aunque no fue fácil_).  
En cuanto a velocidad, sólo pensé en evitar cosas con niveles inferiores a los del USB 2.0, porque de todas formas no tengo ningún fast stick disponible. Mi único dispositivo con un bus USB 3.0 (detectado correctamente por Linux como USB 3.0) es tan rápido como un 2.0... **Maldito Kingston**.  
Tengo algunas tarjetas microSD rápidas, pero mis adaptadores USB para esas tarjetas son lentos.

En resumen, tomo la confiable memoria USB 2.0 de 2 GB, color menta (¡sería perfecta como medio de instalación de Linux Mint!), también de Kingston, y listo.

![Foto de la memoria USB que dediqué a Linux.]({{< assetsRoot >}}/Media/Chiavetta-Linux-2022-05-07.avif)

### Elección del software

Una vez que haya elegido el dispositivo, la **elección de la distribución** Linux permanece, quizás incluso más importante.

Aquí, las distribuciones populares (Ubuntu, Fedora, Mint, Pop!_OS, Manjaro, ...) no sólo son demasiado grandes para caber dejando espacio para una partición persistente, sino que además quedarían inutilizables debido a la lentitud del dispositivo.  
Afortunadamente, tenía un camino en mente que podía seguir, porque, en los últimos meses, por curiosidad, había aprendido algo sobre el mundo de las distribuciones ligeras de Linux.

Era una época en la que recién me había interesado en **[Alpine Linux](https://alpinelinux.org)**, por sus ideales de **ligereza y minimalismo**. Incluso lo usé en el escritorio durante algunas semanas.  
Era responsivo y ágil, gracias también a la presencia de [musl libc](https://en.m.wikipedia.org/wiki/Musl) en lugar de la ahora inflada [GNU libc](https://en.m .wikipedia .org/wiki/Glibc), pero la necesidad de configurar a veces pequeñas cosas a mano, incluso después de la instalación inicial, me llevó a alejarme de él. Sin embargo, pensé que sería adecuado para un sistema instalado en un almacenamiento pequeño, lento y con pocas aplicaciones.  
Luego lo instalé, incluyendo entre el software esencial (así como servidores de video y audio): [Window Maker](https://www.windowmaker.org) (un administrador de ventanas liviano), [Firefox](https:/ / firefox.com) y aplicaciones GUI más pequeñas, que incluyen: un emulador de terminal, un administrador de archivos y un editor de texto.

En general, funcionó bien y rápidamente pero, a pesar de las pocas aplicaciones instaladas, la memoria estaba desbordada. Esto me daría algunos problemas después: por ejemplo, no había espacio para poner Minecraft y jugar [SpaccCraft](https://wikispacc.miraheze.org/wiki/SpaccCraft), que quería porque puede ser útil.  
Esto -junto con el hecho de que más tarde pensé que, tal vez, cifrar el pendrive sería necesario para proteger mis datos contra robo o pérdida de los mismos, pero mis intentos de cifrar el sistema ya instalado fracasaron- me hizo detenerme por un momento para reflejar_.

Como de todos modos habría tenido que reinstalar el sistema, aproveché la oportunidad para **cambiar la distribución**.

Aunque en el pasado, cuando probé alguna cosita, me había dado algunos problemas como sistema persistente, decidí darle **[Puppy Linux](https://puppylinux-woof-ce.github.io)** una seria oportunidad.  
La imagen base de la última versión de Puppy (en el momento de escribir este artículo, 9.5) pesa apenas 400 MB, pero incluye de por sí un sistema de escritorio bastante completo, con decenas de aplicaciones precargadas para las más variadas necesidades.  
¿Cómo puede ser tan **compacto pero lleno de cosas** al mismo tiempo? Gracias al uso de [SquashFS](https://en.m.wikipedia.org/wiki/SquashFS), un sistema de archivos comprimidos de solo lectura, que admite algoritmos de compresión extremadamente eficientes como [LZ4](https:// en.m.wikipedia.org/wiki/LZ4_(compression_algorithm)) y [ZSTD](https://en.m.wikipedia.org/wiki/Zstd). De hecho, si se descomprimiera por completo, la imagen pesaría alrededor de 2,5 GB. Sin embargo, incluso la elección de incluir **aplicaciones más mínimas** contribuye mucho, si se tiene en cuenta que prácticamente todos los Live CD de Linux utilizan SquashFS, aunque los de distribuciones más tradicionales pesan varios GB.

### Hasta la fecha

**Puppy es la distribución que todavía tengo** en el pendrive.  
Salvo algunos pequeños problemas (como: ¿cómo carajos conecto un teclado Bluetooth??? y bueno, ahora ya no lo necesito_), funciona muy bien y es rápido en todos los sentidos.  
Habiendo configurado el cifrado [LUKS](https://en.m.wikipedia.org/wiki/Linux_Unified_Key_Setup) en la partición grabable, ahora mis datos (archivos personales y sesiones del navegador) están protegidos contra cualquier accidente.  
El administrador de ventanas integrado, [JWM](https://en.m.wikipedia.org/wiki/JWM), también es muy limpio y me gusta bastante, aunque me gustaría que tuviera alguna función de alineación de ventanas (no Parece que no tiene nada, ¿o me equivoco?).  
Y ahora, por fin, tengo suficiente espacio libre; ¡Y también tengo Minecraft!
 
![Captura de pantalla de mi escritorio Puppy Linux, con neofetch abierto en el emulador de terminal.]({{< assetsRoot >}}/Media/Screenshots/Desktop-Chiavetta-Linux-2022-05-07.png)  
_Créditos de fondo: [pixelartmaker.com/art/becdd8955dc57eb](http://pixelartmaker.com/art/becdd8955dc57eb)_

### Beneficios importantes

Bueno, con este rotulador mágico he **solucionado el problema** de acceder a Google, pero **seguiría usándolo** aunque ya no lo necesitara para ese fin.  
Las razones, todas ventajas importantes, son las siguientes; algunos se aplican a Linux en general (incluso a los amnésicos), otros se aplican solo a sistemas persistentes como el mío; sin embargo, todos son relevantes cuando se usa una PC pública:

- Tengo un **sistema que se adapta** a mis gustos, que puedo llevar en el bolsillo y utilizar **en cualquier PC**, sin tener que reconfigurar nunca nada (excepto, a veces, la configuración de la BIOS).
- El sistema en cuestión, al contrario de lo que pude encontrar en la gran mayoría de los PC (Windows), **respeta mis libertades** y no deja mis datos en manos de una corporación monopólica que, a cambio, no me aportaría absolutamente nada: en cualquier PC que uso, incluso en los que no son míos, sigo siendo coherente con mis valores.
- El **secreto** sobre lo que hago en el PC en ese momento es mucho **más seguro**, al igual que la seguridad de mis datos: tienes razón en desconfiar de cualquier sistema operativo instalado en los PC públicos, podría haber cualquier herramienta espía instalada (y, de hecho, este es el caso de algunos ordenadores del colegio: existe un programa de control de escritorio remoto diseñado para colegios, [LanSchool](https://en.m.wikipedia. org/wiki/LanSchool)).
- Tengo todos mis **datos esenciales siempre conmigo**, ya sean documentos simples o sesiones abiertas en diferentes aplicaciones (como el siempre conveniente [Element](https://element.io), para enviar mensajes e intercambiar notas y archivos pequeños entre mis dispositivos).
- Algún **software particular**, como Minecraft Java (que, aparentemente, puede no funcionar en algunas PC con Windows, porque quizás los controladores de la GPU no funcionan correctamente y Windows no tiene el software de emulación OpenGL de [Mesa] ( https://en.m.wikipedia.org/wiki/Mesa_(computer_graphics)) nivel de sistema, a diferencia de Linux), **¡siempre debería funcionar**!
- Tengo una excusa para recordar indirectamente a la gente que, incluso en 2022, **las memorias USB son relevantes**, incluso las de gama ultrabaja.

### Algunas ideas

Puedo concluir diciendo: **tú también deberías adoptar un dispositivo Linux persistente**, si a veces usas PC que no son tuyos, ¡no te arrepentirás! La verdad te digo, hazlo aunque sea por diversión, si tienes alguna memoria USB en desuso en algún cajón :)

Aquí están los sitios web de algunas distribuciones que _no_ mencioné en el texto, pero que probé en el pasado o creo que vale la pena revisar:

- [SpaccCraftGo](https://github.com/Spacc-Inc/SpaccCraftGo-Images) - Puppy Linux pasó a llamarse [Spacc Inc](https://wikispacc.miraheze.org/wiki/Spacc_Inc), con la inclusión de SpaccCraft en el sistema;
- [Slitaz](https://slitaz.org/en) - Sistema de lanzamiento en vivo de 50 MB;
- [Porteus](http://porteus.org) - Distribución en vivo basada en modularidad;
-[antiX](https://antixlinux.com)
- [Slax](https://slax.org)

### 🏷️ Notas/Referencias

**Actualización 2022-08-13**: importé este artículo de mi antiguo blog (<https://noblogo.org/loli-documentatrice/gli-inexpected-vantaggi-della-chiavetta-linux>), para preservarlo mejor y probar algunas cosas. Aproveché esto para, además de mejorar el formato, cambiar parcialmente la forma de algunas frases. El contenido sigue siendo prácticamente el mismo.