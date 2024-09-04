+++
Title = "Consulte estadísticas interesantes y el estado de las particiones en Linux"
Date = 2022-08-09
Aliases = [
  "/Publicaciones/Notas/Linux/2022-08-09-Check-Interesting-Statistics-Partitions-Linux.html",
]
+++

{{< noticeAutomaticTranslation it >}}



Las memorias de almacenamiento, cualquiera que sea su categoría, se degradan con el desgaste.  
No se puede hacer nada para evitar tener que cambiarlos, tarde o temprano, después de tantos años. Sin embargo, es posible vigilar su estado de salud para identificar cualquier problema.

Cuando se trata de discos HDD o SSD, el protocolo [SMART] (https://en.m.wikipedia.org/wiki/S.M.A.R.T.) viene al rescate pero, si, como yo, utilizas los ordenadores de forma poco convencional, entonces ver discos clásicos no es suficiente.

## Linux va más allá

Algo bastante secreto, que no mucha gente sabe (al menos eso me pareció a mí), es que en Linux es posible acceder a las estadísticas de particiones con algunos sistemas de archivos.  
Esto, obviamente, independientemente de si estás utilizando un pendrive, una tarjeta SD, un disco duro, un disquete o incluso una memoria aún menos habitual.

[Ext4](https://en.m.wikipedia.org/wiki/Ext4) proporciona algunos datos curiosos, al igual que sus versiones anteriores, Ext3 y Ext2, pero no lo he comprobado.  
[F2FS](https://en.m.wikipedia.org/wiki/F2FS) También vi, directamente desde mi teléfono inteligente Android, expone información interesante... que no abordaré en detalle, porque es todo muy oscuro y no sé lo que significan; y si no sé lo que significan, no tengo curiosidad por conocerlos. Sucede.  
En cuanto a otros sistemas de archivos, no los he visto en absoluto. Como tarea, por tanto, os dejo ver si cosas como FAT32, exFAT, NTFS, o por qué no, BTRFS, exponen buena información, en Linux. ¿Y cómo?

## Obtener los datos

En Linux, simplemente explore las rutas `/sys/fs/<sistema de archivos>/<dispositivo>` para encontrar algunos archivos interesantes.  
Puedes imprimir el contenido de cada uno en pantalla, junto con su nombre, con un simple comando (ejecutado en la ruta correspondiente): `for i in *; hacer eco "$i: $(cat $i)"; hecho`. A menos que tenga SELinux activo (generalmente, de forma predeterminada solo está activo en dispositivos Android, no en sistemas de escritorio), ni siquiera necesita permisos de root.  
Las más interesantes las he puesto en la tabla siguiente, respecto a la microSD de mi servidor (una pobre Nintendo Switch que ejecuta Ubuntu sin parar), volveremos a ello en breve.

| Nombre | Valor |
| --- | --- |
| recuento_errores | 0 |
| primer_tiempo_error | 0 |
| último_error_hora | 0 |
| vida_escritura_kbytes | 1959125105 |
| sesión_escritura_kbytes | 1423172308 |

Hablando específicamente de los sistemas de archivos Ext: para conocer incluso algunos detalles más, y acompañado de un nombre comprensible, también estaría el comando `tune2fs -l /dev/<dispositivo>`. Sin embargo, esto requiere permisos de root y, si bien también informa algunos de los datos que se pueden obtener mirando los archivos anteriores, como el número de escrituras de por vida, estos pueden estar desactualizados y relacionados solo con el último montaje de la partición. Entonces, será mejor que prestes atención a estos.  
Esta vez también traeré las cosas interesantes.

| Nombre | Valor |
| --- | --- |
| Sistema de archivos creado | Lunes 26 de julio 04:33:17 2021 |
| Hora del último montaje | Vie 15 de abril 11:55:30 2022 |
| Recuento de monturas | 16 |

## Cosas a tener en cuenta

Veamos, uno por uno, la utilidad de estos valores.  
Hay que tener en cuenta, sin embargo, por si no lo has entendido, que los valores hablan del estado **de la partición, no del medio de almacenamiento**. Podemos leerlos solo porque Ext4 los guarda y, en consecuencia, si se formatea la partición, entonces estos valores también se restablecen. Además, consideramos que cualquier persona podría modificarlos fácilmente con programas simples como tune2fs, por lo que no deben considerarse perfectamente buenos si personas no confiables tienen acceso a la memoria.

• **Sistema de archivos creado**:
: La fecha en que se creó la partición. Sencillo, pero puede resultar útil para realizar estimaciones de salud, junto con los siguientes datos.

• **Recuento de montajes**:
: El número de veces que se ha montado la partición. Esto puede resultar interesante, si hablamos de memoria que no se utiliza de forma permanente en una máquina que está siempre encendida. Si no existiera SMART, que da estos y más datos, este valor sería muy útil en los HDD.

• **Última hora de montaje**:
: La fecha en que se montó la partición por última vez. Podemos usarlo en combinación con otros datos y eso es todo, creo.

• **session_write_kbytes**:
: La cantidad, en KB, de datos escritos durante la sesión actual, es decir, desde el último montaje. Junto al valor descrito justo arriba, podemos utilizar este para saber cuánto hemos escrito en un periodo de tiempo activo (el actual).

• **vida_escritura_kbytes**:
: la cantidad, en KB, de datos escritos desde que se creó la partición. Esta información es particularmente útil sobre las microSD, al menos si las usas de forma intensiva como yo. También está en F2FS.

• **recuento_errores**:
: El número de errores, creo que tanto de lectura como de escritura, que se produjeron a lo largo del tiempo. Los errores frecuentes pueden ser un síntoma de una memoria poco fiable o simplemente degradada.

• **primer_error_hora** y **último_error_hora**:
: fechas de la primera y última vez que se registró un error, respectivamente. Puede resultar útil comprender si se producen errores continuamente y, por tanto, es necesario investigar más a fondo; o, si un error ocurrió una vez y nunca más después de mucho tiempo, y por lo tanto estás bien así.

## ¿Cuándo es necesario controlar así tu salud?

Bueno, vale, esta información es interesante, pero: ¿cuándo es realmente necesaria?

Si la memoria de almacenamiento en uso -que, si hemos decidido recurrir a estas medidas en lugar de utilizar SMART, probablemente sea una microSD o un pendrive- empieza a dar signos de fallo, quizás ralentizándose con el tiempo, o corrompiendo los datos. . Sería recomendable al menos comprobar que todo está bien.

Si los datos no dan miedo, pero parecen estar en orden... entonces es hora de hacer primero un formateo completo (incluyendo recrear la tabla de particiones desde cero), algo que se simplifica con programas como [GParted](https:// gparted. org), y luego ves cómo continúa la historia.

En cualquier caso, por precaución, sería una buena idea realizar siempre controles rutinarios, para poder predecir problemas antes de que suceda algo grave.

## ¿Estar atento a la microSD?

Hablando de tarjetas microSD: son casi desechables, tienen una vida extremadamente limitada, dado que sus chips de memoria son el residuo de la fabricación de otras memorias de gama más alta, como las SSD.

¿Qué se sabe de su durabilidad real, al menos de los que salieron bien de fábrica y no de submarcas?  
Se lee todo tipo de cosas en línea: hay quienes dicen que cada celda de memoria puede soportar 10.000 reescrituras, y quienes dicen que como máximo se pueden escribir 1.000 veces la capacidad de la memoria antes de que falle por completo (pasando a modo de sólo lectura). modo)... no se llega a ninguna conclusión.

He tenido tarjetas como la que examinamos hoy, con una capacidad de 32 GB, que, aparte de los casi 2 TB escritos desde el último formateo, en mi opinión ha visto al menos 3 TB en total en toda su vida, y sin embargo todavía parece estar bien; y luego, he tenido tarjetas que empezaron a dar problemas por mucho menos. Quizás sea porque usaba este último con sistemas de archivos cutres, como FAT32 o exFAT, y por eso se corrompían constantemente.

En conclusión: si abusamos de las boletas de apuestas, es bueno poder controlarlas, en la medida de lo posible, como hemos aprendido hoy.