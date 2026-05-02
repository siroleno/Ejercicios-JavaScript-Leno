¿Cuál es la diferencia entre let, const y var?
Entre var y const y let, las diferencias son el scope, que es mucho más amplio en var.
¿Cuándo usarías let?
Usaría let cuando necesito una variable cuyo valor puede cambiar durante la ejecución del programa, como puntaje, vida o contadores.
¿Cuándo usarías const?
Usaría const cuando el valor no debe cambiar después de ser asignado. Como nombre del jugador, configuracones fijas, objetos o arrays que no se van a reasignar.

¿Por qué actualmente se recomienda evitar var?
Se recomienda evitar var porque tiene comportamientos antiguos que pueden generar errores:
No respeta bien el bloque {} (scope poco claro)
Puede ser redeclarada sin error
Tiene hoisting confuso (se eleva de forma poco intuitiva)
Puede causar bugs difíciles de detectar

¿Qué es el scope?
El scope es el lugar del código donde una variable puede ser accedida o utilizada.
En JavaScript existen principalmente:
Scope global
Scope local (dentro de funciones o bloques)

Análisis del código

Qué se muestra primero?
Local
¿Qué se muestra después?
Global
¿Por qué?
Dentro de la función mostrarNombre(), se crea una variable nombre local, que solo existe dentro de esa función.
Por eso console.log(nombre) dentro de la función muestra "Local".
Fuera de la función se usa la variable global nombre, que nunca fue modificada.
Por eso se muestra "Global".

Diferencia entre array y objeto
¿Cuándo conviene usar un array?
Un array se usa cuando queremos guardar una lista de elementos del mismo tipo o relacionados, y nos importa el orden o recorrerlos.
El array de ejemplo representa el inventario del jugador, es decir, una colección de objetos que puede tener. Es una lista que se recorre con bucles y se accede por posición (inventario[0])

¿Cuándo conviene usar un objeto?
Un objeto se usa cuando queremos representar algo con propiedades específicas (características).
En el ejemplo el objeto representa un jugador, con datos concretos sobre él. Tiene propiedades con nombre, describe una entidad y se accede con punto (jugador.vida)

Eventos en JavaScript
Un evento es una acción que ocurre en la página (como un clic, escribir, mover el mouse, etc.) y que JavaScript puede “escuchar” para ejecutar código.

¿Qué elemento escucha el evento?
El elemento boton. Es el botón del DOM sobre el cual se está detectando la interacción del usuario.

¿Qué evento se está escuchando?
El evento "click". Esto significa que JavaScript está esperando que el usuario haga clic en el botón.

¿Qué acción se ejecuta?
Se ejecuta una función que muestra un mensaje en consola: "El usuario hizo clic"

¿Dónde podríamos aplicar esto en una página web o videojuego?
En videojuegos:
Hacer que un botón “Ataque” ejecute daño
Saltar con un clic o toque
Iniciar o pausar el juego

En páginas web:
Enviar formularios
Abrir menús o modales
Sumar puntos en un contador
Mostrar/ocultar información

