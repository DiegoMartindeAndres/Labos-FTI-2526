# 🧪 Laboratorio 7: jQuery

## 1. Introducción a jQuery

jQuery es una biblioteca de JavaScript que facilita tareas comunes en el front-end: selección de elementos del DOM, manejo de eventos, manipulación de estilos y contenido, animaciones sencillas y llamadas AJAX.

Para este laboratorio nos interesa, sobre todo, aprender a:

- Seleccionar elementos con **selectores** (por id, clase o etiqueta).
- Reaccionar a acciones del usuario (**eventos** como `click` o `input`).
- Cambiar contenido/atributos/estilos del DOM (`.text()`, `.attr()`, `.css()`).
- Usar animaciones simples como `.fadeIn()`.

Recurso recomendado (con ejemplos y explicación paso a paso):

- https://www.w3schools.com/jquery/default.asp

Para usar jQuery en una página HTML, basta con incluirlo desde un CDN:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

Selectores y métodos que verás en este laboratorio:

```js
$("#id")        // Selección por id
$(".clase")     // Selección por clase
$("button")     // Selección por etiqueta

$("#p").text("Nuevo texto")            // Cambia texto
$("#img").attr("src", "ruta.jpg")      // Cambia atributo
$("body").css("background-color", "red") // Cambia estilo
```

Ejemplo guiado (código de inicio):

- [Mundo Capibara](code/Inicio/index.html)

---

## 2. Instrucciones

### Opción A (recomendada): descargar ZIP

En la versión publicada del laboratorio tendrás un `.zip` con el proyecto. El flujo de trabajo esperado será:

1. Descarga el ZIP desde GitHub (botón **Code** → **Download ZIP**) o desde el enlace que te proporcione el profesor.
2. Descomprime el ZIP.
3. Abre la carpeta descomprimida en Visual Studio Code.
4. Abre el ejemplo guiado en el navegador: [code/Inicio/index.html](code/Inicio/index.html)

### Opción B: clonar con Git (si ya lo usas)

1. Clona el repositorio.
2. Abre la carpeta en VS Code.
3. Abre [code/Inicio/index.html](code/Inicio/index.html) en tu navegador.

Sugerencia: cuando estudies el código, ten **dos ventanas abiertas**: el navegador (para probar) y VS Code (para leer/modificar).

---

## 3. Estudiar la página

Antes de hacer los ejercicios, analiza el ejemplo guiado “Mundo Capibara”:

- ¿Qué elementos del HTML tienen `id`?
- ¿Qué botones escuchan el evento `click`?
- ¿Qué cambia en la página al hacer click?
- ¿Qué métodos de jQuery se están usando y por qué?

En [code/Inicio/index.html](code/Inicio/index.html) encontrarás:

- Un párrafo con id `descripcion`.
- Una imagen con id `fotoCapibara`.
- Un `div` con id `mensaje` inicialmente oculto (`display:none`).
- Cuatro botones (los que vas a estudiar).

Importante: el `<script>` está al final del documento, así que cuando se ejecuta, los elementos del DOM ya existen y se pueden seleccionar sin problemas.

### Botón 1: “Cambiar descripción” (`#cambiarTexto`)

Código (simplificado):

```js
$("#cambiarTexto").click(function () {
  $("#descripcion").text(
    "Las capibaras pueden dormir en el agua y vivir en grupos grandes."
  );
});
```

Qué hace:

- Selecciona el botón con id `cambiarTexto`.
- Cuando haces click, ejecuta una función.
- Dentro de la función, selecciona el párrafo `#descripcion` y cambia su texto con `.text(...)`.

Idea (opcional, para practicar más): ahora mismo el botón cambia el texto, pero si lo vuelves a pulsar “no se nota” porque pone el mismo texto otra vez. Dos mejoras típicas que podrías plantearte (sin necesidad de hacerlas en este laboratorio si no quieres):

- Hacer un “toggle”: si el texto ya está cambiado, al volver a pulsar restaurar la descripción original.
- Deshabilitar el botón tras el primer click (por ejemplo, dejándolo “apagado” o con un texto tipo “Descripción cambiada”).

### Botón 2: “Cambiar color de fondo” (`#cambiarColor`)

Código (simplificado):

```js
$("#cambiarColor").click(function () {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  $("body").css("background-color", color);
});
```

Qué hace:

- Genera un color hexadecimal aleatorio.
- Cambia el estilo CSS del `body` usando `.css("background-color", color)`.

Observación: el color se genera con un número aleatorio en el rango `0..16777215` (que equivale a `0x000000..0xFFFFFF`).

### Botón 3: “Mostrar mensaje secreto” (`#mostrarMensaje`)

Código (simplificado):

```js
$("#mostrarMensaje").click(function () {
  $("#mensaje")
    .text("¡Las capibaras son animales muy sociales! 🧡")
    .fadeIn();
});
```

Qué hace:

- Selecciona el `div` `#mensaje` (que empieza oculto).
- Cambia su texto.
- Lo muestra con una animación (`.fadeIn()`), pasando de oculto a visible.

### Botón 4: “Cambiar foto de capibara” (`#cambiarFoto`)

En el código hay un array con rutas locales de imágenes:

```js
const fotosCapibaras = [
  "img/fotoCapibara1.jpg",
  "img/fotoCapibara2.jpg",
  "img/fotoCapibara3.jpg",
  "img/fotoCapibara4.jpg",
  "img/fotoCapibara5.jpg",
];
```

Y el botón hace esto:

```js
$("#cambiarFoto").click(function () {
  const indice = Math.floor(Math.random() * fotosCapibaras.length);
  $("#fotoCapibara").attr("src", fotosCapibaras[indice]);
});
```

Qué hace:

- Calcula un índice aleatorio entre `0` y `fotosCapibaras.length - 1`.
- Cambia el atributo `src` de la imagen `#fotoCapibara` con `.attr("src", ...)`.

---

## 4. Ejercicios para practicar jQuery

En este laboratorio **sí vas a reutilizar la página “Mundo Capibara”** como base. Harás los ejercicios dentro del mismo archivo:

- [code/Inicio/index.html](code/Inicio/index.html)

En ese archivo encontrarás una sección “Zona de práctica” con el HTML necesario para los ejercicios. Tu trabajo consistirá en **añadir el código jQuery** (en el mismo `<script>` del final) para que cada ejercicio funcione.

Intenta cada ejercicio antes de mirar las soluciones.

### Ejercicio 1

Crea un botón que al hacer click cambie el color de una caja a un color aleatorio.

HTML (ya incluido en la “Zona de práctica”):

```html
<button id="ej1CambiarColor">Cambiar color de la caja</button>
<div id="ej1Caja" style="width: 120px; height: 120px; background: gray;"></div>
```

### Ejercicio 2

Agrega un nuevo ítem a una lista cada vez que se pulse el botón, usando el valor del input.

HTML (ya incluido en la “Zona de práctica”):

```html
<input type="text" id="nuevoItem" />
<button id="agregar">Agregar</button>
<ul id="lista"></ul>
```

### Ejercicio 3

Cuenta los caracteres escritos en tiempo real.

HTML (ya incluido en la “Zona de práctica”):

```html
<input type="text" id="entrada" />
<p>Caracteres: <span id="contador">0</span></p>
```

### Ejercicio extra (opcional, sin solución)

Desafío: crea un sistema tipo “to-do list” donde:

- Se puedan añadir tareas.
- Se puedan marcar como completadas (tachadas).
- Se puedan eliminar.

El HTML base para empezar ya está incluido en la “Zona de práctica” de [code/Inicio/index.html](code/Inicio/index.html). No hay solución para este ejercicio.

---

<details>
  <summary>🧩 Soluciones</summary>

### Solución ejercicio 1

```js
$("#ej1CambiarColor").click(function () {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  $("#ej1Caja").css("background-color", color);
});
```

### Solución ejercicio 2

```js
$("#agregar").click(function () {
  const texto = $("#nuevoItem").val();
  if (texto !== "") {
    $("#lista").append("<li>" + texto + "</li>");
    $("#nuevoItem").val("");
  }
});
```

### Solución ejercicio 3

```js
$("#entrada").on("input", function () {
  const longitud = $(this).val().length;
  $("#contador").text(longitud);
});
```

### Extra con solución (opcional)

Crea un botón que oculte/muestre un elemento con una transición suave.

HTML (ya incluido en la “Zona de práctica”):

```html
<button id="toggle">Mostrar/Ocultar</button>
<p id="bloque">Este texto aparece y desaparece.</p>
```

Solución:

```js
$("#toggle").click(function () {
  $("#bloque").fadeToggle();
});
```

</details>

