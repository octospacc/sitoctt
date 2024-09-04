+++
Title = "🌽 Compile e instale el kernel de Linux desde el código fuente"
Date = 2024-09-01
Description = "Guía general sobre cómo compilar Linux para computadoras de uso general, útil para resolver problemas u obtener características especiales."
Featured_Image = "@/Media/Decor/dall-e_44be7d57-5b1d-44ff-bf54-421d95165b5f.jpeg"
Downsync = "/es/nota/Compile-Install-Linux-Kernel.html"
Categories = [ "Linux" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Generado automáticamente por ListedDownsync.js. No lo edite (a menos que también establezca "% Downsync = False"); se sobrescribirá. -->

No es frecuente que se nos ocurran nuevas ideas, pero cuando lo hacen, siempre tienen la dosis justa de extrañeza... Sin divagar mucho, es precisamente por este desarrollo de las cosas que hace años, por primera vez, Me encontré compilando el kernel de Linux desde el código fuente (en una Raspberry Pi 3, entre otras cosas, lo que en retrospectiva no recomendaría) y ahora, precisamente ayer, otra vez, después de años (esta vez en la PC, afortunadamente), para un final que no estropearé.

## ¿Por qué recompilar el kernel? 😯️

Linux se basa en una arquitectura monolítica, lo cual nos importaría poco... si no fuera porque tiene una implicación incómoda: cualquier función que funcione a nivel del kernel debe compilarse en él. Incluso el mecanismo de los llamados módulos no cubre todas las situaciones posibles (al menos no a nivel práctico), por lo que podemos encontrarnos en situaciones en las que el kernel proporcionado por la distribución (o por el fabricante del hardware), incluso si se actualiza, no tiene algo que sea necesario y, por lo tanto, debe reemplazarse.

Considerando la infinita variedad de distribuciones de Linux, repositorios que distribuyen kernels compatibles o no compatibles, y combinando esto con la diversidad de opciones individuales que se pueden habilitar al compilar el kernel... no sólo en casos raros la compilación desde el código fuente es la única manera , pero a menudo y de buena gana es el más práctico. Afortunadamente, compilar el kernel de Linux es muy simple, significativamente más fácil que la aplicación de escritorio promedio de Linux, con tres mil dependencias siempre en conflicto, pero tal vez haya detalles no tan inmediatos en el proceso, así que... ¡aquí está mi nota!

## 0\. Salida y requisitos previos 📦️

Esta nota trata sobre la recopilación más genérica del kernel de Linux, es decir, la variante oficial (la de Linus Torvalds) en y para una PC de escritorio x86\_64 (o AMD64). Sin bifurcaciones ni variantes parcheadas, sin versiones OEM de mala calidad, sin instalación en dispositivos integrados o esotéricos, sin compilación distribuida o multiplataforma. Para casos más o menos límite, las cosas a hacer pueden variar más o menos, aunque la tendencia siga siendo la misma... ya ves, vamos, la cuestión es que asumo esta situación. En mi caso, ni siquiera existen módulos de kernel propietarios.

Aparte de las herramientas favoritas para obtener el kernel, descomprimirlo si es necesario y algunas distracciones para pasar el tiempo considerable, los requisitos previos son mínimos. Como mínimo, necesita un compilador de C (gcc) por razones obvias, GNU Make para ejecutar los archivos MAKE, algunas herramientas variadas con un nombre olvidable y algunas bibliotecas súper específicas de interés limitado. Entonces, creo que es posible que se necesiten otros paquetes, dependiendo de la distribución de Linux que se utilice o de las características que deban compilarse.

En realidad, no está muy claro en la web qué paquetes son realmente necesarios y cuáles alguien que ha hecho otras guías ha dicho "bueno, pongámoslo solo para estar seguros"... Actualizaré aquí con listas de precios precisas a medida que Lo compruebo, incluyendo si es necesario incluso tablas excesivas (para aquellos que están de acuerdo con perder espacio pero no tiempo). Para mí generalmente es una estrategia instalar el mínimo posible cuando algún requisito no está claro, iniciar la compilación e instalar cualquier otra dependencia según surjan errores al respecto.

Debian y derivados (`apt`):

* `build-essential` `libelf-dev` (obligatorio)
* `ncurses-dev` (para usar la configuración del menú TUI)

## 1\. Obteniendo el código ⛓️

El código fuente de Linux se puede tomar oficialmente [del Git principal](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git), [del GitHub de Torvalds](https ://github.com/torvalds/linux), o [desde el sitio Kernel.org](https://kernel.org). Prefiero la última opción, que muestra de forma destacada las últimas versiones realmente necesarias, hasta la rama compatible más antigua.

De hecho, existen diferentes versiones compatibles en un momento dado. Generalmente, si no hay razón para instalar un kernel más antiguo, es mejor uno más nuevo; Sin embargo, no es demasiado nuevo, porque vivir a la vanguardia significa perder sangre, ¡y ocasionalmente pueden surgir problemas incluso graves! Entonces, evito la rama `mainline`, actualizada diariamente o casi, como la plaga, y generalmente elijo `stable`, actualizada unos días más. Otros usuarios podrían preferir legítimamente el "largo plazo" más reciente (el que está en la parte superior), para obtener aún más estabilidad, pero lo encuentro inútil.

Para cada línea de versión, aparte de la fecha, lo que interesa es el enlace \[tarball\], así que descargas ese archivo allí. Luego puede extraerlo a una carpeta conveniente, entre muchas otras formas, con el comando `tar xvf <archivo>`. Todos los comandos que se ejecutarán desde este punto estarán dentro de la carpeta preparada.
![kernel.org]({{< assetsRoot >}}/Media/Linux-Kernel/2024-09-02-kernel.org.png)

...También debes descargar el archivo PGP, cuando esté presente, que sirve para verificar que la descarga está intacta y que proviene de distribuidores legítimos. Sin embargo, siendo realistas, no todas las versiones ya lo tienen (lo que implica que en el fondo...), la descarga se realiza desde el sitio oficial con HTTPS (por lo que será difícil modificarlo), es un archivo comprimido (por lo que, si se corrompe, debería fallar la extracción), y hacer la verificación es un dolor de cabeza alucinante. Otras instituciones tendrán mayores requisitos de seguridad, pero para los usuarios privados, francamente, es simplemente aburrido, yo no lo hago, no me importa.

## 2\. Configuración del núcleo 🔩️

Configurar el kernel es la parte más compleja... porque no puedes ejecutar comandos por inercia, pero tienes que _elegir_ lo que realmente necesitas para, bueno, tener el kernel con opciones óseas. Existen, como hemos dicho, infinitas configuraciones y diferentes formas de utilizarlas. El punto principal es que hay un archivo de texto enorme, con varias opciones (en su mayoría booleanas), que puedes editar.

Sin embargo, modificar eso a mano es una locura, porque hay herramientas ordenadas basadas en menús integradas en el proceso de construcción para manejar las diversas posibilidades. Aquí también hay un poco de lío, pero la elección es principalmente entre dos programas, TUI y GUI, respectivamente, que se pueden invocar con `make menuconfig` y `make xconfig` respectivamente. Prefiero `xconfig` por conveniencia y, aunque he usado la configuración del menú de curses en el pasado, y es bastante intuitivo para mí, aparentemente para muchos no lo es... y cómo usar ese menú no es el tema de hoy.

<table><thead><tr><th>menuconfig vs xconfig</th></tr></thead><tbody><tr><td><img src="{{< assetsRoot >}}/Media /Linux-Kernel/menuconfig.png" alt="menuconfig"></td></tr><tr><td><img src="{{< assetsRoot >}}/Media/Linux-Kernel/xconfig. png" alt="xconfig"></td></tr></tbody></table>

Si no haces nada más, la configuración que vas a cambiar es la predeterminada del kernel tal y como se está desarrollando. Nunca he tenido problemas para usar ese como base, pero, si es necesario, además de los compartidos por otros usuarios, puedes usar el de la distribución actual. Dependiendo de cómo su sistema exponga la configuración del kernel, puede (normalmente) leerla con `cat /boot/config-$(uname r)`, `cat /boot/config` o `zcat /proc/config .gz` . Simplemente escríbalo (`>`) en el archivo `./.config` para aplicarlo a la configuración actual.

En este caso quería activar el soporte para el nuevo controlador NTFS, así que en xconfig presiono CTRL+F, busco "ntfs3" y configuro la opción que habla de "Lectura/Escritura NTFS _algo_" en (Y); luego guardo la configuración, cierro y... listo, increíble.

## 3\. Compilando el código 🧑u200d🍳️

Con la compilación, es un momento aburrido, porque simplemente hay que darle tiempo a la computadora para procesar millones (!) de líneas de código. No es bueno, pero al menos no es el fin del mundo: en cualquier PC que no sea precisamente un hack deberías hacerlo en menos de 4 horas. En la Raspberry Pi 3 me llevó un día y medio con la CPU a temperaturas nucleares (y por eso también lo desaconsejo...), pero en mi PC (Ryzen 3 3200G, 16 GB de RAM de los cuales un pocos ocupados por la compilación, en un SSD de gama baja) Creo que me tomó poco menos de 3 horas compilar la versión 6.10.7.

Simplemente ejecute `make` y Linux se adaptará a la arquitectura de CPU actual. ¡Viva la magia! Mejor aún, `make -j$(nproc)` para usar todos los núcleos de CPU disponibles... Debo señalar que las pocas horas se miden en función de esto; de lo contrario, sería medio día, dado que mi PC tiene 4 núcleos; Podría hacerlo mucho más rápido al tener más núcleos, porque puede compilar aún más archivos en paralelo de manera efectiva.

Al menos durante los primeros minutos, es una buena idea estar atento al terminal para ver si se produce algún error y la compilación se detiene. Nunca me han pasado errores absurdos, pero como dije, si no instalas todas las dependencias, puede salir algo relacionado con esas... en este caso instalas lo que falta (refiriéndose a tu distribución), y continúa con el comando anterior.

Dependiendo de la configuración, necesitarás más o menos espacio en disco para completar la compilación. Si bien el kernel en sí nunca pesa más de unos pocos MB (y los módulos unas pocas decenas de MB), la carpeta al final del día pesaba ~22 GB, por lo que es una buena idea asegurarse de tener suficiente espacio o Comprueba de vez en cuando que esto no termine. Y si finaliza durante el proceso, simplemente liberas espacio y continúas, de nuevo, como antes. (Siempre y cuando su sistema de archivos no se corrompa simplemente por estar 100% lleno, ¿verdad BTRFS?)

## 4\. Instalación de kernels y módulos 🏗️

Para compilar el kernel no necesitas permisos de root, lo cual es útil en caso de que quieras robar temporalmente la computadora más poderosa de otra persona para hacer el trabajo... pero, para instalar, obviamente necesitas los del sistema actual.

Aquí no sólo es simple, sino también bastante rápido (máximo unos minutos): al ejecutar (como root) primero `make install` y luego `INSTALL_MOD_STRIP=1 make install_modules`, se instalarán en las rutas apropiadas, respectivamente. (suponiendo que no haya cambiado los nombres): la imagen del kernel (`vmlinuz-x.x.x-...`), generalmente en `/boot`, y los módulos, generalmente en `/lib/modules/linux-x.x.x-.. .`. Los módulos son archivos separados del kernel, porque el sistema los carga cuando es necesario... el punto es que algunos de los muchos se usan para completar el arranque, por lo que hay que instalarlos.

También es necesario preparar el llamado sistema de archivos init, o disco ram inicial; normalmente también termina en `/boot`, bajo el nombre `initrd.img-x.x.x-...`. Y este paso sería bastante inconveniente si no existiera "kernel-install", el script incluido con systemd, o su alternativa "installkernel". Teniendo systemd, al menos el primero ya debería estar instalado, y en ese caso (asumiendo los nombres anteriores) simplemente haga (como root) `kernel-install add x.x.x-... /boot/vmlinuz-x.x.x-... `; alternativamente, con el segundo, `installkernel x.x.x-... /boot/vmlinuz-x.x.x-...`.<sup id="fnref1"><a href="#fn1">1</a></sup >

Nota: aquellos que desarrollan con el kernel (me temo que no aquellos que están leyendo esta publicación) pueden no querer configurar la variable de entorno `INSTALL_MOD_STRIP=1`, porque la depuración sin los símbolos de depuración, que ese indicador elimina, es difícil. ... pero para usuarios mortales comunes y corrientes como yo simplemente desperdician espacio (tanto es así que las distribuciones los empaquetan por separado). Además, aquellos que no necesariamente desarrollan con el kernel, sino que tienen que compilar módulos externos o hacer otros trucos, de manera realista también deberían instalar los archivos de encabezado correspondientes en el sistema: `make headers_install` (siempre como root).

Al menos en distribuciones "completas", `make install` y luego `kernel-install` ya deberían haber configurado el gestor de arranque también, al menos teniendo GRUB. En el caso de, por así decirlo, distribuciones "más DIY" (que no uso, _por cierto_), así como configuraciones de arranque más inusuales... ese no es mi caso, así que no sé nada, y No diré nada. Las configuraciones de arranque son una bestia para otro momento.

##5\. Prueba de avellanas 💥️

Si el kernel está instalado y el gestor de arranque se ha configurado correctamente, simplemente reinicie su computadora para disfrutar. Es bueno recordar que, si estás usando GRUB, algunos dicen que el nuevo kernel no está seleccionado por defecto, y hay que elegirlo manualmente desde el menú de inicio... pero en mi caso, en Linux Mint Debian Edition, me pareció que en realidad se había configurado como predeterminado.

Nuevamente, si, agradeciendo al pingüino, el sistema finalmente arranca, simplemente use el comando `uname -r` para verificar la versión del kernel que está ejecutando. En este punto, es una buena idea verificar que la configuración _deseado_ realmente esté funcionando... pero la forma de hacerlo varía de una característica a otra, caso por caso. Para al menos confirmar que existe la configuración _especificada_, simplemente verifique la configuración actual del kernel como en el punto 2.

En este punto, si todo funciona y no se necesitan otros cambios, también puedes eliminar la enorme carpeta de compilación y el kernel permanecerá. Si también necesita desinstalar el kernel en el futuro, normalmente elimine los archivos instalados anteriormente y reconfigure el gestor de arranque adecuadamente.

##Conclusión 🎊️

Poder compilar el kernel a partir del código fuente es otra de esas cosas que podemos hacer los usuarios de Linux, y que francamente los usuarios de Windows **no** nos envidian. Pero es que les gusta ganar fácil, con su NT, basado en un diseño de microkernel... así es, ahora que se acabó el punto del artículo puedo decir tonterías como quiera.

Dejando a un lado a Copium, compilar Linux puede ser algo divertido de hacer al menos una vez. Si te encuentras en situaciones incómodas como yo hay que hacerlo, es poco lo que se puede hacer; Sin embargo, si sólo quiere divertirse, tal vez una de las muchas cosas que puede hacer es compilar un kernel ultraespecífico y súper optimizado para su máquina o con fines de virtualización. Y, claro, consume algo de energía, ¡pero nunca tanto como minar criptomonedas o generar misiles nucleares en Blender!

## {{% i18n notas-refs %}}

_La imagen de la portada decorativa se obtiene mediante [inteligencia artificial generativa de Microsoft](https://www.bing.com/images/create/beach-with-sand-and-rocks2c-computer-chips-and-wire /1-66d5a1ef220c4fae8bd786e10b88ae1e? id=Rt9hCy8E%2Fg%2BZK8rWhgwIPQ%3D%3D&view=detailv2&idpp=genimg)._

* Una guía para compilar el kernel de Linux usted mismo: [https://itsfoss.com/compile-linux-kernel/](https://itsfoss.com/compile-linux-kernel/)
* Creación e instalación de kernels de Linux personalizados (Rocky Linux): [https://docs.rockylinux.org/guides/custom-linux-kernel/](https://docs.rockylinux.org/guides/custom-linux-kernel /)
* Cómo construir un kernel de Linux desde cero {Guía paso a paso}: [https://phoenixnap.com/kb/build-linux-kernel](https://phoenixnap.com/kb/build-linux-kernel )
* El sistema de compilación del kernel: [https://www.kernel.org/doc/html/v6.6/kbuild/index.html](https://www.kernel.org/doc/html/v6.6/ kbuild/index.html)

---

1. Installkernel e instalación del kernel (Gentoo Linux): [https://wiki.gentoo.org/wiki/Installkernel](https://wiki.gentoo.org/wiki/Installkernel) [↩](#fnref1)
