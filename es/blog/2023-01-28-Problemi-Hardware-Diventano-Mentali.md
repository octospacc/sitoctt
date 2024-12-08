+++
Title = "🤯 Cuando los problemas de hardware se vuelven mentales (maldito Raspino)"
Date = 2023-01-28
Downsync = "/it/blog/Hardware-Problems-Become-Mental.html"
Aliases = [ "/Publicaciones/2023-01-28-Hardware-Problems-Become-Mental.html" ]
Description = "Servicios que colapsan decretando el fin de mi Reino del Terror, los días perdidos diciendo maldita sea a Rasperino, y 2 meses de vicisitudes..."
Categories = [ "Administrador de sistemas", "Rasperino" ]
+++

{{< noticeAutomaticTranslation it >}}



<!-- Generado automáticamente por ListedDownsync.js. No lo edite (a menos que también establezca "% Downsync = False"); se sobrescribirá. -->

Hasta ahora, hace 2 meses, mi **reino de Rasperino** estaba en su **máximo esplendor**: la instancia de Misskey, creada apenas 2 semanas antes, iba **muy bien**, y a estas alturas (casi ) todo parecía destinado a seguir bien...
Y en cambio, **surgieron problemas**. Digamos que me tomó un poco de tiempo darme cuenta, porque se desarrollaron **de una manera extrañamente **gradual**.

## Las grietas iniciales

Noté la primera cosa realmente **extraña** a principios de diciembre, cuando me di cuenta de que **el sistema podría fallar** al intentar realizar una operación muy banal pero **específica**: crear un gran archivo de archivos. (comprimido o no)... con cualquier programa.
Este pequeño inconveniente ha provocado, a su vez, un **problema secundario**... Ya llegaré.
Sin embargo, no le presté demasiada atención. ¿Cómo podría? El resto, si no se toca, **funcionó**, **aparte de** una ligera **degradación del rendimiento** debido al propio trabajo de Misskey.

### El primer colapso

Pero luego, esas otras 2 semanas de relativa paz pasaron, y [me despierto](https://mastodon.uno/@octo/109508472717947364) con el **servidor fallado**, y **muere gravemente** después cualquiera de mis reinicios manuales (desconectar y volver a conectar la fuente de alimentación, es la única forma). [Después de 2 días](https://mastodon.uno/@octo/109518037875867744) de **investigación muy enojada** no entendía en absoluto cuál era la causa general del problema, sino solo el síntoma más grave, y ahora * estaba casi **a punto de convencerme** de que de alguna manera _mística_ solo Misskey logró derribar todo el servidor, que en cambio volvió a funcionar correctamente sin ese software en particular ejecutándose. Bueno, había algo de lógica en mi razonamiento, dado que en cualquier caso el uso **promedio** de CPU y RAM fue **alto** (incluso si no se saturó por completo).
En los días siguientes, sin embargo, con **algunas pruebas** descubrí que el servidor no fallaba por el** servidor de microblogging, sino por lo que actúa como una **base de datos**: PostgreSQL (en Docker) . Si ejecutaba Misskey en mi PC, pero dejaba que se conectara a la base de datos de Raspino, a los pocos segundos, con la llegada de tantas notas, el servidor fruity moría.

A estas alturas, en cualquier caso, tenía clara la necesidad de **instalar algo más**, porque estaba convencido de que Misskey pesaba demasiado, y no importa.
Durante 2 días **probé Epicyon**, una plataforma que era nada menos que **particular**... y [la experiencia no fue precisamente agradable](https://sitoctt.octt.eu.org/Posts/ 2022-12-26-Epicyon-Piattaforma-del-Fediverso-Durata-2-Giorni.html), pero creo que estaba completo, dado que exprimí cuatro mil palabras en mi artículo dedicado. Inmediatamente después decidí probar otro software que nunca había visto antes, concretamente [GoToSocial](https://github.com/superseriousbusiness/gotosocial). Con este último, a pesar de ser declarado calidad alfa (y de hecho tiene algunos problemas), me encontré - porque desgraciadamente ya todo terminó... Estoy llegando, estoy llegando - muy bien, pero * *Ese no es el punto* *.

### Problemas cada vez más sospechosos

Sólo unos días después, esos extraños **bloqueos** comenzaron a ocurrir nuevamente, pero esta vez definitivamente eran **sospechosos**, porque el **uso general de recursos** del sistema era **bajo**. Intenté leer los **registros del sistema** de manera productiva, pero mi **paciencia** había llegado a **su límite**, y con ella mi lucidez, así que todos los días buscaba el más mínimo error sospechoso pero legible, concentrándome en eso e **ignorando** por completo el error **ilegible** que siempre estaba frente a mí.

Ahora, simplemente **por desesperación**, pero no porque entendí el razonamiento de que ese era el problema, decido **cambiar** la tarjeta **microSD**, y ahora que lo he hecho ** Me arrepiento** amargamente... **¡por no haberlo intentado antes**! ¡Ese era el problema, imprudente Maremma!
Lo bueno es que el día anterior había hecho una comprobación de los sistemas de archivos (ext4), tanto de la tarjeta como de mi HDD USB, y todo había salido (aproximadamente) limpio, por lo que había descartado problemas de hardware a priori: "_si los archivos no están corruptos..._" pensé.
Casi al mismo tiempo (¡el destino decidió que la ayuda tenía que llegar tarde!), sin embargo, una persona me dio una mano para entender qué carajo decían esas líneas indescifrables, que eran algo así como...

```
27 de diciembre 06:32:35 kernel: [27230.964650] INFORMACIÓN: tarea kworker/2:0:21874 bloqueada durante más de 860 segundos.
27 de diciembre 06:32:35 kernel: [27230.964693] Contaminado: G C 5.15.76-v7+ #1597
27 de diciembre 06:32:35 kernel: [27230.964709] "echo 0 > /proc/sys/kernel/hung_task_timeout_secs" desactiva este mensaje.
27 de diciembre 06:32:35 kernel: [27230.964723] tarea:kworker/2:0 estado:D pila: 0 pid:21874 ppid: 2 banderas:0x00000000
27 de diciembre 06:32:35 kernel: [27230.964760] Cola de trabajo: events_freezable mmc_rescan
27 de diciembre 06:32:35 kernel: [27230.964801] Seguimiento inverso:
27 de diciembre 06:32:35 kernel: [27230.964824] [<80a4ff38>] (__schedule) de [<80a50a7c>] (schedule+0x7c/0x134)
27 de diciembre 06:32:35 kernel: [27230.964868] r10:81f90800 r9:ffffe000 r8:00000000 r7:00000000 r6:60000013 r5:8d368000
27 de diciembre 06:32:35 kernel: [27230.964884] r4:ffffe000
27 de diciembre 06:32:35 kernel: [27230.964896] [<80a50a00>] (programación) de [<8083f658>] (__mmc_claim_host+0xe0/0x238)
27 de diciembre 06:32:35 kernel: [27230.964929] r5:81f90a18 r4:00000002
27 de diciembre 06:32:35 kernel: [27230.964942] [<8083f578>] (__mmc_claim_host) de [<8083f7e8>] (mmc_get_card+0x38/0x3c)
27 de diciembre 06:32:35 kernel: [27230.964979] r10:baaf8205 r9:00000000 r8:baaf8200 r7:00000080 r6:baaf4b80 r5:00000000
27 de diciembre 06:32:35 kernel: [27230.964994] r4:81f91800
27 de diciembre 06:32:35 kernel: [27230.965007] [<8083f7b0>] (mmc_get_card) de [<80849238>] (mmc_sd_detect+0x24/0x7c)
27 de diciembre 06:32:35 kernel: [27230.965039] r5:81f90800 r4:81f90800
27 de diciembre 06:32:35 kernel: [27230.965052] [<80849214>] (mmc_sd_detect) de [<80841ca4>] (mmc_rescan+0xac/0x2d4)
27 de diciembre 06:32:35 kernel: [27230.965083] r5:81f90800 r4:81f90a7c
27 de diciembre 06:32:35 kernel: [27230.965096] [<80841bf8>] (mmc_rescan) de [<8013e158>] (process_one_work+0x250/0x57c)
27 de diciembre 06:32:35 kernel: [27230.965140] r9:00000000 r8:baaf8200 r7:00000080 r6:baaf4b80 r5:8e898f00 r4:81f90a7c
27 de diciembre 06:32:35 kernel: [27230.965153] [<8013df08>] (process_one_work) de [<8013e4e4>] (worker_thread+0x60/0x5c4)
27 de diciembre 06:32:35 kernel: [27230.965195] r10:baaf4b80 r9:81003d00 r8:baaf4b98 r7:00000008 r6:baaf4b80 r5:8e898f18
27 de diciembre 06:32:35 kernel: [27230.965210] r4:8e898f00
27 de diciembre 06:32:35 kernel: [27230.965223] [<8013e484>] (worker_thread) de [<80146804>] (kthread+0x178/0x194)
27 de diciembre 06:32:35 kernel: [27230.965264] r10:837c4000 r9:8d3a7e74 r8:00000000 r7:8e898f00 r6:8013e484 r5:8285ee00
27 de diciembre 06:32:35 kernel: [27230.965279] r4:8d0d3640
27 de diciembre 06:32:35 kernel: [27230.965291] [<8014668c>] (kthread) de [<801000d4>] (ret_from_fork+0x14/0x20)
27 de diciembre 06:32:35 kernel: [27230.965321] Pila de excepciones (0x837c5fb0 a 0x837c5ff8)
27 de diciembre 06:32:35 kernel: [27230.965341] 5fa0: 00000000 00000000 00000000 00000000
27 de diciembre 06:32:35 kernel: [27230.965363] 5fc0: 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
27 de diciembre 06:32:35 kernel: [27230.965383] 5fe0: 00000000 00000000 00000000 00000000 00000013 00000000
27 de diciembre 06:32:35 kernel: [27230.965405] r10:00000000 r9:00000000 r8:00000000 r7:00000000 r6:00000000 r5:8014668c
27 de diciembre 06:32:35 kernel: [27230.965420] r4:8285ee00
```

**Cada vez** que ocurría un error como este, todo el **sistema moría** gravemente: **enfermedades** de los pequeños bots, **muerte** del servidor HTTP (nginx), **lesiones** a mi artículo y a los agregadores de feeds (wallabag y FreshRSS), **hola para siempre** a cualquier cosa que me permita abrir una consola a través de Internet en Rasperino (SSH, Telnet e incluso un servidor organizado con netcat). Lo único que siguió funcionando es **escupir constantemente** este tipo exacto de **errores** en el archivo de registro.
Ahora, sé que soy un monje fuerte, pero con todos estos números extraños involucrados, ¡no podía ver palabras como `mmc_get_card` o `mmc_sd_detect`! Y entonces realmente no entendía que tal vez, _sólo tal vez_, la **microSD** _cagona_ que había elegido para Raspi a principios de septiembre (entre las que hay gratis en casa), cuando volví a poner a funcionar este pobre computador como servidor, estaba **tendiendo hacia la muerte**.

![La tarjeta microSD que poco a poco logró volverme loco. Tenga en cuenta la ausencia de marcas.]({{< assetsRoot >}}/Media/Misc/microSD-8GB-Generic.webp)

No quiero tener que recurrir a **clichés**, pero esta vez **¡es poco lo que se puede hacer**! Quiero decir, la foto habla por sí sola:

> _La presencia de una marca reconocida no es garantía de calidad, pero la ausencia de una marca es ciertamente una promesa de calidad ausente._

Aunque en la PC la **vieja tarjeta basura todavía parece **funcionar** - pude confirmar esto porque al menos pude hacer un volcado de datos - no quiero tener que lidiar más con eso* * ¡para cosas de este tipo! Por lo tanto, lo noto mentalmente como "mal".
Luego se **desperdició** aún más **tiempo** al actualizar el volcado en una nueva tarjeta, dado que las únicas otras dos tarjetas que tenía disponibles en ese momento eran de 4 y 32 GB respectivamente, y realmente quería encajar ( después de borrar varios logs y cachés, porque la memoria anterior era de 8 GB) todo en la de 4 GB, pero nada que hacer; y al final fueron 32 GB.

## Paz violada

Lo importante es que, **ponga la nueva SD** en el _servidor raspberry_, esos terroríficos errores ya no ocurrieron, y los grandes **problemas** han **desaparecido**... o eso **pensé, Quería, esperaba**.
Si este artículo, que literalmente debería haberse publicado a finales del año pasado, se publica ahora, hay razones para ello. Inmediatamente después de cambiar la tarjeta SD, **preferí esperar** unos días, para ver si realmente las cosas se habían calmado y no cantar victoria demasiado pronto. **¡Lo hice bien!**

### El disco sufriente

Desgraciadamente, de hecho, esas otras cosas vistas en los últimos días en los registros **no eran** enormes **agujeros en el agua** (_todavía problemáticos_), en particular los **errores** que reconocí de inmediato. el **disco USB**.
Esto es algo que ya me pasó en el pasado con otro adaptador USB para discos SATA de 2,5", incluso en máquinas diferentes (en la época en la que usaba mi consola Nintendo Switch como servidor...), pero con este que Lo uso ahora, **nunca ha habido ningún problema** y, sin embargo, ahora, hasta donde puedo ver, se **desconecta** del host **al azar**, **matando** todos esos **procesos. **. que dependen de los archivos que hay en ese disco, como de la nada hay momentos en los que no le llega suficiente energía con cualquier combinación de adaptadores SATA y cables USB (tanto cortos como largos), **. el disco todavía funciona** muy bien **en PC**, así que **el problema** es claramente **el Raspino**... ¡pero descubre por qué!

Me dicen que **los **puertos USB-A** del Raspi son naturalmente asquerosos<sup>[<em>cita requerida (?)</em>]</sup>, pero la cuestión es que hasta hace poco **funcionó** (los 4)! ¿Se ha roto un diodo en mi fuente de alimentación? ¿Que en la placa de este maldito ordenador de placa única ha explotado un condensador? ¿Que la electricidad en mi casa ya no es de 230V, sino de 229V, y por tanto el transformador en lugar de dar 5 voltios en salida da 4,98? **...Pero ¿qué sé yo?**
Volviendo al mundo real, la única hipótesis sensata me parece ésta: introduciendo y desconectando el conector de alimentación en su puerto (micro USB-B 2.0, _¡¡que mierda!!!_), los pines de un lado o del las almohadillas del otro se habrán desgastado, por lo que su superficie de contacto es menor, por lo que la resistencia eléctrica es mayor, y por lo tanto el dispositivo se alimenta con un voltaje ligeramente menor, y cuando un periférico necesita absorber mucho, ya está _i patatrac_.

### Para intentar resolver

Al no tener otro _Raspone_ como este, y al no tener otras fuentes de alimentación de 5V 3A, nunca descubriré la verdad, pero de alguna manera tengo que encontrar la solución.
Después de **esperar tanto** que los **problemas** del servidor solo se han hecho más grandes y el **tiempo de inactividad** mucho **más frecuente**, decido **comprar un cable USB-A-Y* *. En el peor de los casos, aunque no hayas solucionado el problema, siempre es conveniente tener un cable de este tipo porque, aunque **viola los estándares USB** <sup id="fnref1"><a href="#fn1 ">1</a >>sup>\- algunos dispositivos causan muchos problemas sin él, y algunos fabricantes de periféricos _mierda_ incluso recomiendan usar cables de este tipo en caso de problemas (y aun así proceden a **no** incluye uno en el paquete, ¡indecente!) .

**Una vez que llega el cable**, organizo todas las conexiones y noto una cosa en particular: **la corriente** que viene de la segunda fuente de alimentación USB para alimentar el disco, **puede** viajar por el cable hasta * *reingresando al Pi**. El problema no es tanto el **cable**, que funciona y **respeta** todas las **leyes de la física** (aunque no las del estándar USB), sino más bien el hecho de que la Raspberry no lo hace. Incluso tengo, no lo sé, diodos en los puertos USB-A. Y es un problema que no estoy descubriendo, solo lee [en el foro oficial](https://forums.raspberrypi.com/viewtopic.php?t=44584). En cualquier caso, para tener un circuito configurado así:

* **Riesgos** para la instrumentación o el entorno circundante **no hay ninguno**, si se utilizan fuentes de alimentación adecuadas aguas arriba, y la mía _debería_ ser<sup id="fnref2"><a href="# fn2"> 2</a></sup>;
* **Problemas prácticos** **los hay, pero también soluciones** y arreglos: Podría, como se sugiere en el foro, aplicar cinta aislante en el pad de +5V del conector USB que va al Raspantino; pero por ahora no ha habido una necesidad real, lo único a lo que tengo que prestar atención es a que las cosas se enciendan en este orden, esas pocas veces en las que me encuentro teniendo que hacer un reinicio completo del sistema:
1. USB **Disco** (conectado al puerto del cable Y);
2. **Raspi** (desde su puerto de alimentación);
3. Después de esperar al menos ~10 segundos, **disco** conectado a la Raspberry (conector de datos del cable Y conectado a la Raspberry).

No sé por qué, especialmente considerando que no es necesario para reinicios suaves, pero sin este procedimiento el arranque puede fallar.

## Finalmente, descansa

Al final, sin embargo, todo el infierno parece haber terminado y el servidor ahora funciona.
Sin embargo, las llamas causaron algunos daños: las **bases de datos** de muchos de mis servicios alojados quedaron **corrompidas**, y de 2 en particular (GoToSocial, que mencioné antes, y Peka, un chatbot basado en una cadena de Markov) **Tengo copias de seguridad que son demasiado antiguas** (de hace semanas) porque, con el servidor muriendo, mis scripts de copia de seguridad nunca pudieron funcionar... y por lo tanto **estos programas** todavía están **fuera de línea ahora **, porque **todavía no** he tenido **la fuerza para resignarme** a restaurar las copias de seguridad antiguas.
Pero **compro el cable un poco antes** y apago el servidor mientras espero, **no realmente, ¿eh?**

**Esperando** que cosas como esta no vuelvan a suceder en el futuro cercano, de lo contrario **me volveré total e irremediablemente loco** debido a estos malditos problemas de hardware, te saludo y espero que nunca tengas que _maldita sea_ tanto como lo hago yo. 😔

## {{% i18n notas-refs %}}

---

1. También fue una sorpresa para mí, pero **el estándar USB prohíbe los cables Y**: consulte la [Actualización 72](https://compliance.usb.org/index.asp?UpdateFile=Policies#72); traducido al italiano,

> _Está prohibido el uso de un cable "Y" (un cable con dos conectores A) en cualquier dispositivo USB. Si un dispositivo USB requiere más energía de la que permite la especificación USB para la que fue diseñado, debe ser autoalimentado._

Bueno, que bonitas son las reglas, pero luego llega la realidad y piensa un poco diferente. Todo **el mundo real usa cables Y** sin preocuparse demasiado. [↩](#fnref1)

2. (Ambos **5V**)

* Para **Pi**, una fuente de alimentación **3A** (justo encima [la sugerida por la Fundación Raspberry](https://github.com/raspberrypi/documentation/blob/develop/documentation/asciidoc/ computadoras/raspberry -pi/power-supplies.adoc)) que se incluyó en un kit (excluyendo computadora) de accesorios para Raspante, de **Aukru**. Oh, bueno, después de años no explotó, entonces las críticas fueron buenas de todos modos, y aún así esta marca vende fuentes de alimentación nuevas, así que está bien...
* Para potencia **adicional**, un bloque **1A** que venía incluido en el paquete de mi antiguo teléfono **Huawei** de gama baja (también comercializado en Europa), del 2017.

 [↩](#fnref2)
