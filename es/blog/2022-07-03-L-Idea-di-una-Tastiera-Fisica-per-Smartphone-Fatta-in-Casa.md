+++
Title = "⌨️ La idea de un teclado físico casero para teléfono inteligente"
Description = "Con dificultad compré un teclado ultracompacto. La idea es construir una cubierta de teclado para mi teléfono, ¡pero encontré problemas!"
Aliases = [
  "/Publicaciones/2022-07-03-La-idea-de-un-teclado-físico-para-teléfono-inteligente-hecho-en-casa.html",
  "/Publicaciones/2022-07-03-0000-La-idea-de-un-teclado-físico-para-teléfono-inteligente-hecho-en-casa.html",
]
Categories = [ "Tecnología", "Móvil", "Bricolaje" ]
Date = 2022-07-03
Lastmod = 2023-03-21
Featured_Image = "@/Media/Cover-Tastiera-mobilefun.com.avif"
+++

{{< noticeAutomaticTranslation it >}}



Quizás hace un año, en parte por curiosidad y en parte porque ya imaginaba que podría haber sido algo conveniente, desarrollé un interés marginal por los smartphones equipados con teclados físicos completos.

No me refiero a los malditos teclados numéricos, que todavía se ven hoy en día en los teléfonos que no son inteligentes, me refiero a teclados con docenas de teclas individuales dedicadas a letras y símbolos.  
Este tipo de teclado ya era raro de ver en los teléfonos antes de la era de los smartphones: no apareció por primera vez en modelos ultrabaratos, pero en cualquier caso no siempre resulta muy cómodo debido a su pequeño tamaño.  
Cuanto más se extendieron los teléfonos inteligentes, más desaparecieron los teclados físicos, aunque rara vez existían en algunos teléfonos modernos, incluso de generosas dimensiones.

No recuerdo si esta época del año pasado fue justo antes o poco después de que comprara un nuevo teléfono inteligente, el actual; el caso es que tuve que elegirlo en base a criterios precisos y restrictivos, ante todo el coste y, lamentablemente, no había gama baja con teclado físico.

## Una nueva idea

Con el paso del tiempo me olvidé un poco del tema, hasta que hace unas semanas encontré un vídeo en Invidious ([YouTube/JXdLzinnqms](https://invidious.snopyta.org/JXdLzinnqms)) que muestra una modificación casera a un teléfono inteligente.  
El vídeo lo muestra y la discusión vinculada en la portada está pensada.

Inmediatamente tuve el deseo de crear algo como esto pero, mientras buscaba, comencé a pensar que este tipo de funda ya no la produce nadie... era absolutamente imposible encontrar una, no sólo a buen precio, sino en absoluto. Ni online ni en tiendas físicas.

Como no había esperanza, intenté cambiar un poco mi estrategia y buscar un teclado Bluetooth muy pequeño, pero sin soportes extraños como las fundas incluidas: sólo el teclado tosco, habría hecho mis propios arreglos para conectarlo al teléfono. .  
La búsqueda en Amazon fue absolutamente infructuosa, meh. En AliExpress por unos 13€ estaba el teclado que buscaba, pero para mí comprarlo es cuanto menos complicado. Sin embargo, por suerte, uno de los muchos artículos para el hogar multiusos (esos que venden miles de millones de películas) de mi zona tenía el producto que necesitaba, por sólo 2 euros más de lo que habría pagado por él en Ali.  
Una ganga, así que lo compré.

![La parte frontal del miniteclado]({{< assetsRoot >}}/Media/Mini-Bluetooth-Keyboard/Keyboard-Front.avif)

## Después de la compra

En casa lo llevé a cargar un rato y lo probé sobre la marcha. Qué puedo decir, funcionó y no encontré mala sensación al escribir, a pesar de que estamos hablando de un teclado de membrana.  
Entonces todo está bien.  
O eso parecía.

A la mañana siguiente, intento volver a encender el hermoso objeto pequeño para hacer algunas pruebas más. No enciende. ¿Eso? ¿Como? Vuelvo a colocar el teclado en el cargador y, de hecho, funciona después de dos minutos.  
Qué extraño, pero el día anterior lo mantuve cargando durante horas. Quizás no cargó bien desde el puerto de mi PC, por lo que este día también el teclado sigue cargando, esta vez desde el bloque que uso para mi celular y otros dispositivos.

### Investigando rarezas

A la mañana siguiente, el mismo problema. Cualquiera sea el caso, es evidente que la batería se está agotando mucho, de la nada, por alguna razón. Para que conste, el teclado tiene un interruptor físico, que nunca olvidé apagar después de guardar el teclado... todo muy extraño.  
Decido dejarlo cargar un poco, luego lo desmonto y mido con un multímetro el voltaje de la batería de litio soldada a la placa, el cual noto que cae 0.01V aproximadamente cada 10 segundos. Oh.

Suponiendo que la placa esté diseñada correctamente, de modo que el interruptor físico de ENCENDIDO/APAGADO corte la corriente entre la batería y la placa hasta el punto donde debería, y que el circuito de administración de la batería no sea una pieza de basura, la culpa de un problema como este sólo puede ser una: la banal vejez de la batería.

![Foto de la batería del teclado pequeño]({{< assetsRoot >}}/Media/Battery-SCW302030-2015-08-27.avif)

De hecho, no sólo la batería visualmente estaba bastante hinchada, sino que tiene una fecha en el exterior: "2015/8/27", hace casi 8 años.  
Juraría que el teclado en sí es aún más antiguo, considerando las referencias a una época ligeramente anterior presentes en la caja y las instrucciones: iPhone 4 y iOS anterior a 7, Galaxy S4 y un Touchwiz visiblemente muy antiguo, Windows Mobile 6 y Windows 8. escritorio, Symbian 3, la PS3... bueno, ha pasado un tiempo.

![Escaneos de algunas partes de la parte posterior de la caja e instrucciones, que contienen referencias a cosas antiguas.]({{< assetsRoot >}}/Media/Mini-Bluetooth-Keyboard/Rimandi-Vecchi.avif)

## Mal final

¿Qué puedo decir? ¿Debería haber esperado un problema como este? Quizás sí. Sin embargo, dudo que otras personas en mi lugar hubieran esperado esto.  
Finalmente lo único que puedo decir es que este artículo no debería haber salido; o mejor dicho, no con este fin. Debería haber hablado del Prototipo 0 ya creado del soporte de mi teléfono inteligente que agrega este pequeño teclado, pero, desafortunadamente, siento que no he tenido la oportunidad de probarlo lo suficiente.

Esperando poder solucionar el problema de la batería (pero creo que sí)[^New Battery], en el próximo artículo, de lo que creo será una serie, explicaré cómo lo arreglé todo, e ilustraré el curioso Prototipo. 0.

[^Nueva batería]: **Actualización 2023-03-21**: Estaba pasando por aquí, arreglando algunas cosas internas en archivos antiguos, y pensé: aunque al final no haya escrito (todavía) ningún artículo. about Después de esto, vale la pena escribir al menos una nota de actualización aquí. **Poco después de este post** soldé una vieja batería de litio que tenía por casa, más o menos del mismo tamaño, y... **el teclado ahora funciona** perfectamente. ¡No está mal, vamos, **resolví** el problema **sin gastar** más dinero!