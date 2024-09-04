+++
Title = "Evite llamar accidentalmente a comandos en la terminal"
Date = 2022-08-05
Draft = true
+++

{{< noticeAutomaticTranslation it >}}



Mientras trabajo en la terminal, tal vez desarrollando programas, a menudo invoco accidentalmente un comando que no debería.

Esto me sucede porque trabajo así: edito algo en la ventana de mi editor de texto favorito, luego voy a la ventana de terminal y presiono `[Flecha arriba]` (que recuerda el último comando ejecutado) y `[Enter] ` para ejecutarlo.

Lo que he notado es que a veces, en mi prisa, presiono `[Flecha arriba]` demasiadas veces, lo que recuerda el penúltimo comando ejecutado, o incluso el anterior.  
Como prácticamente hago estas secuencias de acciones casi automáticamente, sin leer para asegurarme de que el comando seleccionado es realmente lo que quiero antes de presionar `[Enter]` (porque eso es todo lo que espero), sucede varias veces que ejecuto un comando que No debería: a menudo, es el comando para realizar una confirmación [Git](https://en.wikipedia.org/wiki/Git) de mis cambios en el libro de trabajo y subirlos inmediatamente a la nube.

Ahora bien, esto no es bueno, porque significa que en el historial de Git tendré ciertos lugares "incorrectos": con descripciones con texto duplicado y el código en un estado inadecuado, que no funciona, porque estaba en medio de pruebas. algunos cambios.  
Tener un historial de Git tan desordenado definitivamente afecta su calidad, porque es más difícil encontrar un punto pasado específico en el código en el futuro, lo que anula una de las características útiles de Git y, en general, es algo que no me gusta. Me molesta ver historia sucia.

## El guión

Para solucionar el problema inventé este pequeño script (probado con _sh_ y _bash_), la idea es lanzar a través de él los comandos "peligrosos" en situaciones en las que tengo que hacer esos movimientos con la terminal (pero, si lo deseo, se puede configurar como un alias para llamarlo siempre implícitamente para un comando determinado).

<pre clase="CodeScroll"><código>
Perfil="~/.bashrc"

a=${ALEATORIO: -1}
b=${ALEATORIO: -1}

echo "[!] Confirma tu comando"
eco "[?] $a + $b =?"
leer entrada

si [ "$Entrada" -eq "$((a+b))" ] 2>/dev/null
entonces
	$SHELL -c "fuente "$Perfil"; $@"
demás
	echo "[!] Entrada incorrecta"
fi
</código></pre>

## Cómo usarlo

Guardé el código dentro de una función `function comconf() { }` en mi archivo de perfil bash.  
Ahora, cuando necesito ejecutar un comando marso, simplemente hago `comconf '<command>'`; el programa me pedirá que escriba el resultado de una operación aritmética simple generada aleatoriamente, y sólo si lo que escribo es correcto (es decir, sólo si estoy prestando atención) se ejecutará mi comando.

<pre clase="CodeScroll"><código>
$ # Ejemplo
$ comconf 'echo "Probar"; echo "Prueba"'
[!] Confirma tu comando
[?] 1 + 3 = ?
4
Ensayo
Prueba
$
</código></pre>

---

El script tiene algunos aspectos extraños, por ejemplo el hecho de que no funciona si se ejecuta directamente desde el shell actual (razón por la cual ejecuta el comando deseado en otro proceso del shell, con el argumento `-c`). Por esta razón, también tengo que cargar explícitamente mi archivo de perfil en el nuevo shell, porque no se hace automáticamente y tengo otros alias y funciones que necesito allí.  
Como si eso no fuera suficiente, si no uso comillas simples para encerrar el comando que quiero llamar, si este contiene otras comillas es como si estas se ignoraran y, por lo tanto, el comando final puede fallar.

Ah, bueno, problema resuelto de todos modos. No más accidentes debido a demasiadas `[Flecha arriba]`.