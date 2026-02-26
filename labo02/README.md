# 🖥️ Laboratorio de HTML - FTI

## 📌 Introducción

En este laboratorio aprenderemos los fundamentos de **HTML (HyperText Markup Language)**, el lenguaje de marcado estándar para la creación de páginas web. Exploraremos la estructura básica de un documento HTML y practicaremos con las principales etiquetas.

Para escribir y probar nuestro código, usaremos **Visual Studio Code (VS Code)** como editor de referencia. ✅

📌 **Importante:** VS Code es una **recomendación**, no una obligación. Puedes realizar el laboratorio en el entorno que te resulte más cómodo (por ejemplo: Sublime Text, Notepad++, Vim, WebStorm, etc.). No somos dogmáticos: lo importante es que puedas **editar** el HTML y **previsualizarlo** en un navegador.

## 📝 Nota

El producto del trabajo realizado en este laboratorio se utilizará en los siguientes laboratorios.  
Por lo tanto, se recomienda **encarecidamente** que guardes todos los ficheros necesarios, especialmente:

- **`index.html`**: Archivo principal de la página web.
- **Recursos adicionales**: Todos los scripts, imágenes, estilos CSS u otros archivos que utilices.

💡 *Mantener una estructura organizada te facilitará el trabajo en futuras sesiones.*

### ✅ Objetivo del laboratorio

Al finalizar, deberías ser capaz de:

- Crear una página HTML válida con estructura mínima (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
- Usar etiquetas básicas de contenido (títulos, párrafos, enlaces, listas, imágenes).
- Entender el rol de atributos comunes (`href`, `src`, `alt`, `id`, `class`, `style`).
- Trabajar con una estructura simple de carpetas para tus recursos.

---

## 🛠️ Visual Studio Code

### 🎯 ¿Qué es Visual Studio Code?

**Visual Studio Code (VS Code)** es un editor de código fuente desarrollado por Microsoft. Es gratuito, de código abierto y está diseñado para ser ligero pero potente, con muchas características útiles para desarrolladores.

### 🔹 Características principales:

- **Multiplataforma** 🖥️: Disponible para Windows, macOS y Linux.
- **Integración con Git y GitHub** 🛠️: Permite gestionar repositorios directamente desde el editor.
- **Gran cantidad de extensiones** 🔌: Se pueden instalar plugins para añadir funcionalidades como resaltado de sintaxis, autocompletado y depuración.
- **Editor de código más usado** 🌍: Actualmente, es el editor más popular entre los desarrolladores.

💡 *Para este laboratorio, nos enfocaremos en su uso básico para la edición y visualización de archivos HTML. Sin añadirle estilos ni JavaScript, eso lo haremos en futuros pasos*

🧩 **Si usas otro editor**: no pasa nada. Asegúrate de que puedas (1) guardar archivos como `.html` y (2) abrirlos en un navegador para ver el resultado.

## 🔌 Extensiones recomendadas para Visual Studio Code

Para mejorar tu experiencia de desarrollo en este laboratorio, te recomendamos instalar las siguientes extensiones en Visual Studio Code:

### Live Preview (Microsoft)
Esta extensión permite ver una vista previa en vivo de tu página web directamente en Visual Studio Code, facilitando la visualización de cambios en tiempo real.

### Markdown All in One (Yu Zhang)
Una herramienta completa para trabajar con archivos Markdown, que incluye atajos de teclado, vista previa en vivo y otras funcionalidades útiles.

### (Opcionales para más adelante) JavaScript / REST / ESLint
Estas extensiones son muy útiles cuando empecemos con **JavaScript** y consumo de **APIs**, pero no son necesarias para el objetivo de este laboratorio.

## 1️⃣ Preparación del entorno

Antes de comenzar a escribir código HTML, necesitamos configurar nuestro entorno de trabajo.

### 📂 Elegir un directorio de trabajo
Busca o crea una carpeta en tu equipo donde guardarás los archivos del laboratorio. Puedes llamarla, por ejemplo, `laboratorio-html`.

### 🛠️ Abrir Visual Studio Code
1. Abre **Visual Studio Code**.
2. Selecciona **Archivo** → **Abrir carpeta** y elige la carpeta `laboratorio-html`.

También puedes hacerlo con el menú contextual en el explorador de archivos de tu sistema operativo si lo tienes integrado.

1. Ponte en la carpeta que quieres usar como directorio de trabajo.
2. Botón derecho del ratón.
3. Selecciona `Abrir con Visual Studio Code`.




## 2️⃣ Creación de un archivo HTML

1. En Visual Studio Code, haz clic en **Nuevo archivo**.
2. Nómbralo `index.html`.
3. Ábrelo y añade algunas etiquetas básicas de HTML:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi primera página HTML</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <h2>Este es un subtítulo</h2>
    <p>Este es un párrafo con algo de texto de prueba.</p>
  </body>
</html>
```

4. Guarda el archivo (`Ctrl + S` o `Cmd + S` en Mac).
5. Abre el archivo en un navegador haciendo doble clic sobre él.

## 3️⃣ Creación rápida con Emmet

### ⚡ ¿Qué es Emmet?

Emmet es una herramienta que permite escribir código HTML y CSS de manera más rápida utilizando atajos y expansiones automáticas. Es especialmente útil para generar estructuras HTML con poco esfuerzo. Visual Studio Code tiene Emmet integrado por defecto, lo que facilita su uso sin necesidad de configuraciones adicionales.

### ⏩ Usando `!` para generar el esqueleto de HTML

1. Crea un nuevo archivo llamado `index2.html` en la misma carpeta.
2. Ábrelo en Visual Studio Code.
3. Escribe `!` y presiona la tecla **Tab**.
4. Se generará automáticamente la estructura base de un documento HTML.

Debería aparecer algo como esto:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documento</title>
</head>
<body>
    
</body>
</html>
```

5. Rellena el `<body>` con algunos elementos de texto como hicimos en `index.html`.
6. Guarda los cambios y ábrelo en el navegador.

## 💾 Configuración de guardado automático en Visual Studio Code

Visual Studio Code permite habilitar el guardado automático de archivos, evitando la necesidad de guardar manualmente después de cada cambio. Para activarlo:

1. Haz clic en **Archivo** en la barra de menú.
2. Selecciona **Preferencias** → **Configuración**.
3. En la barra de búsqueda, escribe `files.autoSave`.
4. En el menú desplegable, elige la opción `afterDelay` para que los archivos se guarden automáticamente después de un breve retraso.

Con esta configuración, los cambios se guardarán automáticamente, evitando posibles pérdidas de trabajo y mejorando la productividad. 🚀

## 🚀 Visualización en el navegador con Visual Studio Code

Una forma cómoda de trabajar con HTML es ver el resultado en el navegador mientras editas el código. Tienes dos opciones habituales:

- 🌍 **Opción A (sin extensiones):** abrir el archivo `.html` en tu navegador y recargar cuando hagas cambios.
- ⚡ **Opción B (con extensión):** usar una extensión como **Live Preview** para previsualizar y refrescar más fácilmente.

### 🔍 Habilitar la vista previa automática

Si decides usar **Live Preview**, puedes abrir la vista previa del archivo HTML dentro de VS Code:

1. **Abrir el archivo HTML** en el editor.
2. Abre la **paleta de comandos** (`Ctrl + Shift + P` / `Cmd + Shift + P`).
3. Busca un comando similar a **"Live Preview: Show Preview"** (el nombre puede variar según el idioma/configuración).
4. Se abrirá una vista previa integrada.

📝 **Nota:** Los atajos de teclado pueden variar. Si no te funciona alguno, usa siempre la paleta de comandos.

### 🌍 Visualización en un navegador externo

Por defecto, la vista previa se abre dentro de VS Code, pero si prefieres verla en otro navegador:

1. **Copia la URL** de la vista previa integrada.
2. **Pégala en cualquier navegador** (Chrome, Firefox, Edge, etc.).
3. Cada vez que guardes (`Ctrl + S` / `Cmd + S`), la página se actualizará automáticamente.

### 💡 Beneficio principal

Gracias a esta funcionalidad, **cada cambio en el código HTML se refleja más rápido**, mejorando la productividad y facilitando la corrección de errores. 🎯

## 📌 Comenzamos a diseñar

A partir de ahora vamos a ir probando cada uno de los elementos de HTML

Las etiquetas de HTML se pueden colocar en distintas zonas, pero nosotros en este laboratorio lo vamos a colocar dentro del `<body>`.


## 🔢 Headings en HTML

Los **headings** en HTML son los títulos y subtítulos de una página web. Se definen con las etiquetas `<h1>` a `<h6>`, donde `<h1>` representa el título más importante y `<h6>` el menos relevante.

### 🧱 Estructura de los Headings

Cada página debe tener un único `<h1>`, que representa el título principal. A partir de ahí, los subtítulos se organizan jerárquicamente:

```html
<h1>Título Principal</h1>
<h2>Subtítulo de nivel 2</h2>
<h3>Subtítulo de nivel 3</h3>
<h4>Subtítulo de nivel 4</h4>
<h5>Subtítulo de nivel 5</h5>
<h6>Subtítulo de nivel 6</h6>
```

⚠ **Importante**: No utilices los headings solo para hacer el texto más grande o más pequeño. Su propósito es estructurar el contenido de manera semántica.

### Creación rápida con Emmet ⚡

En Visual Studio Code, puedes generar rápidamente headings usando **Emmet**. Solo tienes que escribir la etiqueta y presionar `Tab`:

- `h1` + `Tab` → `<h1></h1>`
- `h2{Mi título}` + `Tab` → `<h2>Mi título</h2>`
- `h1+h2+h3` + `Tab` →

```html
<h1></h1>
<h2></h2>
<h3></h3>
```

Prueba a escribir `h1{Título Principal}+h2{Subtítulo}` y presionar `Tab`. ¡Se generará automáticamente el código con texto incluido! 🚀

### 🏗 Buenas prácticas

✅ Usa `<h1>` solo una vez por página.
✅ Sigue una jerarquía lógica, sin saltarte niveles.
✅ Usa headings para mejorar la accesibilidad y el SEO.

Prueba a escribir y modificar los headings en tu archivo HTML y observa los cambios en la vista previa (o recargando el navegador). ¡Vamos a estructurar bien el contenido! 😃


## 🔖 Párrafos y enlaces en HTML

En HTML, los párrafos se crean con la etiqueta `<p>`. Cada párrafo comienza con `<p>` y finaliza con `</p>`. Los navegadores web interpretan estas etiquetas y añaden un salto de línea automático entre cada párrafo.

### ✍️ Ejemplo de párrafos

```html
<p>Este es un párrafo de ejemplo en HTML.</p>
<p>Este es otro párrafo, que aparecerá en una línea diferente.</p>
```

### 👉 Enlaces en HTML

Para añadir enlaces en una página web, utilizamos la etiqueta `<a>`, que significa "anchor" (ancla). Esta etiqueta necesita el atributo `href`, donde especificamos la URL a la que queremos dirigirnos.

#### 🔗 Ejemplo de enlace

```html
<p>Visita <a href="https://developer.mozilla.org/es/docs/Web/HTML">la documentación de HTML</a> para aprender más.</p>
```

🔹 **Nota:** Los enlaces pueden abrirse en la misma pestaña o en una nueva. Si queremos que se abra en una pestaña nueva, añadimos `target="_blank"`. Además, es buena práctica añadir `rel="noopener noreferrer"` por seguridad:

```html
<a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">Visita la W3C</a>
```

Esto permitirá que el enlace se abra en una pestaña diferente, sin cerrar la página actual.

## Etiquetas de Formato de Texto en HTML 📝

En HTML, existen varias etiquetas que permiten modificar la apariencia del texto. Aunque muchas veces se usan dentro de elementos como los párrafos (`<p>`), estas etiquetas pueden aplicarse en otros elementos como listas, enlaces, encabezados, y más.

### 📌 Etiquetas de formato de texto

1. **Negrita:**
   - `<b>`: Aplica un estilo visual de negrita sin enfatizar semánticamente.
   - `<strong>`: Indica que el texto es importante, además de aplicarle negrita.

   ```html
   <p>Este es un <b>texto en negrita</b> y este es <strong>importante</strong>.</p>
   ```

2. **Cursiva:**
   - `<i>`: Aplica un estilo de letra inclinada sin enfatizar semánticamente.
   - `<em>`: Indica que el texto debe enfatizarse, además de cursiva.

   ```html
   <p>Este es un <i>texto en cursiva</i> y este es <em>enfatizado</em>.</p>
   ```

3. **Subrayado y resaltado:**
   - `<mark>`: Resalta el texto con un fondo de color (normalmente amarillo).
   - `<ins>`: Indica que el texto ha sido insertado (suele mostrarse subrayado).

   ```html
   <p>Este es un <mark>texto resaltado</mark> y este es un <ins>texto insertado</ins>.</p>
   ```

4. **Texto pequeño y eliminado:**
   - `<small>`: Reduce el tamaño del texto.
   - `<del>`: Indica que el texto ha sido eliminado (se muestra tachado).

   ```html
   <p>Este es un <small>texto pequeño</small> y este es un <del>texto eliminado</del>.</p>
   ```

5. **Subíndices y superíndices:**
   - `<sub>`: Muestra el texto en subíndice (por ejemplo, fórmulas químicas).
   - `<sup>`: Muestra el texto en superíndice (por ejemplo, exponentes matemáticos).

   ```html
   <p>H<sub>2</sub>O es la fórmula del agua. 2<sup>3</sup> = 8.</p>
   ```

### ✨ Uso en otros elementos

Estas etiquetas no están restringidas a los párrafos, sino que pueden usarse en otros elementos:

- **Encabezados:**
  ```html
  <h1>Este es un <mark>título resaltado</mark></h1>
  ```

- **Listas:**
  ```html
  <ul>
    <li><strong>Importante:</strong> Leer la documentación.</li>
    <li><del>Comprar entradas para el cine.</del></li>
  </ul>
  ```

- **Enlaces:**
  ```html
  <a href="#">Este es un <em>enlace enfatizado</em></a>
  ```

### ⚡ Emmet para agilizar la escritura

Para escribir estas etiquetas más rápido en Visual Studio Code, puedes usar Emmet:

- `p>b{Texto en negrita}` → `<p><b>Texto en negrita</b></p>`
- `p>em{Texto enfatizado}` → `<p><em>Texto enfatizado</em></p>`
- `h1>mark{Título resaltado}` → `<h1><mark>Título resaltado</mark></h1>`
- `ul>li*3>{Elemento $}` → Crea una lista con tres elementos numerados.

Estas etiquetas son esenciales para mejorar la accesibilidad y la semántica de tu contenido web. 🚀



## 🖼️ Imágenes en HTML

En HTML, la etiqueta `<img>` se usa para mostrar imágenes en una página web. Es un elemento **vacío**, lo que significa que no tiene una etiqueta de cierre.

### 📌 Sintaxis básica:
```html
<img src="imagen.jpg" alt="Descripción de la imagen">
```

### 📌 Atributos principales:
- **`src`**: Especifica la URL de la imagen.
- **`alt`**: Proporciona un texto alternativo que se mostrará si la imagen no se carga.
- **`width` y `height`**: Permiten definir el tamaño de la imagen en píxeles.

#### 🎯 Ejemplo:
```html
<img src="https://placehold.co/400x400" alt="Imagen de ejemplo" width="150" height="150">
```

### 📝 Nota

La web [https://placehold.co](https://placehold.co) es un servicio que nos genera imágenes de prueba para colocar en una web. Es como un `lorem ipsum` pero para imágenes. Donde después de la URL, le indicamos el tamaño de la imagen que queremos.

Si te fijas en el ejemplo, la imagen que estamos pidiendo a la web es de 400x400 píxeles, pero la estamos mostrando con un tamaño de 150x150 píxeles. Guarda la relación de aspecto de la imagen pero el tamaño que se muestra es más pequeño.


## 🔗 Imágenes con enlaces

Podemos hacer que una imagen actúe como un enlace envolviéndola con la etiqueta `<a>`.

#### 🎯 Ejemplo:
```html
<a href="https://www.ejemplo.com">
    <img src="https://placehold.co/400x400" alt="Haz clic aquí">
</a>
```
En este caso, al hacer clic en la imagen, se redirige al usuario a `https://www.ejemplo.com`.

---

## ⚡ Emmet para imágenes
Para escribir más rápido en **Visual Studio Code**, podemos usar **Emmet**:

| Expresión | Expansión Automática |
|-----------|----------------------|
| `img`     | `<img src="" alt="">` |
| `img:src` | `<img src="ruta.jpg" alt="">` |
| `a>img`   | `<a href=""><img src="" alt=""></a>` |

#### 🎯 Ejemplo con Emmet:
Si escribimos `a>img` y presionamos **Tab**, obtenemos automáticamente:
```html
<a href=""><img src="" alt=""></a>
```
Después, solo tenemos que completar los atributos.

## Listas en HTML 📝

En HTML, podemos estructurar información en listas para mejorar la organización del contenido. Existen tres tipos principales de listas:

1. **Listas desordenadas (`<ul>`)**
2. **Listas ordenadas (`<ol>`)**
3. **Listas de definición (`<dl>` - no la veremos aquí)**

### Listas desordenadas `<ul>` 🔹

Las listas desordenadas presentan los elementos sin un orden específico, generalmente con viñetas:

```html
<ul>
    <li>Manzana</li>
    <li>Banana</li>
    <li>Cereza</li>
</ul>
```

📌 Esto se visualizará con puntos (•) por defecto en la mayoría de los navegadores.

### Listas ordenadas `<ol>` 🔢

Las listas ordenadas presentan los elementos en un orden numérico o alfabético:

```html
<ol>
    <li>Primer paso</li>
    <li>Segundo paso</li>
    <li>Tercer paso</li>
</ol>
```

📌 Se visualizará con números (`1.` `2.` `3.`) por defecto.

### Uso de Emmet ⚡

Para escribir listas rápidamente en **Visual Studio Code**, podemos usar Emmet:

- Para una lista desordenada con 3 elementos: `ul>li*3` → presiona `Tab`
- Para una lista ordenada con 5 elementos: `ol>li*5` → presiona `Tab`

Esto generará automáticamente la estructura HTML necesaria, ahorrando tiempo.

¡Ahora prueba a modificar los elementos y observa los cambios en la vista previa (o recargando el navegador)! 🚀

## La etiqueta `<div>` 🏗️

La etiqueta `<div>` es un contenedor genérico en HTML que se utiliza para agrupar otros elementos y estructurar el contenido de una página. No tiene un significado semántico propio, pero es muy útil para organizar elementos dentro del diseño de una web.

### Uso básico 📝

Para crear un contenedor `<div>` en HTML, simplemente se usa la etiqueta de apertura y cierre:

```html
<div>
    Contenido dentro del div
</div>
```

Este `<div>` no tiene ningún estilo aplicado por defecto, pero podemos añadirle atributos como `id` o `class` para identificarlo y aplicar estilos con CSS posteriormente.

### Creación rápida con Emmet ⚡

Si estás usando Visual Studio Code, puedes utilizar Emmet para generar estructuras de `<div>` de manera rápida.

Ejemplos:

- Para generar un `<div>` con una clase:
  ```
  .contenedor
  ```
  Esto se expandirá a:
  ```html
  <div class="contenedor"></div>
  ```

- Para generar un `<div>` con un `id`:
  ```
  #principal
  ```
  Esto se expandirá a:
  ```html
  <div id="principal"></div>
  ```

- Para generar un `<div>` con múltiples clases:
  ```
  .caja.roja.bordeado
  ```
  Esto se expandirá a:
  ```html
  <div class="caja roja bordeado"></div>
  ```

- Para generar múltiples `<div>` anidados:
  ```
  div>div>div
  ```
  Se expandirá a:
  ```html
  <div>
      <div>
          <div></div>
      </div>
  </div>
  ```

### Ejemplo práctico 🌟

Imaginemos que queremos estructurar una página con una cabecera, un contenido principal y un pie de página. Podemos usar `<div>` para organizarlos:

```html
<div id="contenedor">
    <div id="cabecera">
        <h1>Mi página web</h1>
    </div>
    <div id="contenido">
        <p>Bienvenido a mi página. Aquí encontrarás información interesante.</p>
    </div>
    <div id="pie">
      <p>&copy; 2026 Mi Página</p>
    </div>
</div>
```

Esto nos proporciona una estructura clara que luego podremos estilizar con CSS.

Si llevas este código a tu archivo HTML y lo visualizas en la vista previa (o en el navegador), podrás ver que **no hay mucha diferencia** todavía. Cuando apliquemos estilos con CSS, esto mejorará mucho. ✨

## `<span>` 🏷️

La etiqueta `<span>` se usa para aplicar estilos o manipular una parte específica del texto dentro de un elemento en línea. A diferencia de `<div>`, que es un contenedor en bloque, `<span>` es un contenedor en línea.

### 📌 Características
- No introduce saltos de línea.
- Permite aplicar estilos CSS o manipular su contenido con JavaScript.
- Se usa dentro de párrafos, enlaces y otros elementos en línea.

### ✍️ Uso básico

```html
<p>Este es un <span style="color: red; font-weight: bold;">texto resaltado</span> dentro de un párrafo.</p>
```

🔍 En este ejemplo, solo la parte dentro de `<span>` se muestra en rojo y en negrita.

---

### ⚡ Emmet para `<span>`
En Visual Studio Code puedes usar Emmet para escribir más rápido:

- `span{Texto de ejemplo}` ➡️ Expande a:

```html
<span>Texto de ejemplo</span>
```

- `p>{Texto normal }+span{Texto resaltado}` ➡️ Expande a:

```html
<p>Texto normal <span>Texto resaltado</span></p>
```

📌 ¡Esto ahorra tiempo y mejora la productividad! 🚀

---

### 🛠️ Ejemplo con múltiples `<span>`
Si queremos aplicar diferentes estilos a partes de un texto:

```html
<p>Aprender <span style="color: blue;">HTML</span>, <span style="color: green;">CSS</span> y <span style="color: orange;">JavaScript</span> es esencial para el desarrollo web.</p>
```

Esto resaltará cada palabra clave en un color diferente.

## `<input>`: Entrada de datos en formularios ⌨️

La etiqueta `<input>` se usa para capturar datos introducidos por el usuario en formularios. Es un elemento fundamental en HTML y puede adoptar diferentes tipos según el atributo `type`.

### Sintaxis básica
```html
<input type="text" name="usuario" placeholder="Introduce tu nombre">
```

### Tipos de `<input>`
Algunos de los tipos más comunes de la etiqueta `<input>` son:

- `text`: Campo de texto de una línea.
- `password`: Campo de contraseña (oculta los caracteres).
- `email`: Para direcciones de correo (valida formato).
- `number`: Solo permite números.
- `date`: Selector de fecha.
- `checkbox`: Casilla de verificación.
- `radio`: Botón de opción única.
- `file`: Selector de archivos.
- `submit`: Botón para enviar el formulario.
- `reset`: Botón para reiniciar el formulario.

Ejemplo:
```html
<form>
    <input type="text" placeholder="Nombre">
    <input type="email" placeholder="Correo">
    <input type="password" placeholder="Contraseña">
    <input type="submit" value="Enviar">
</form>
```

### Emmet para acelerar la escritura
Emmet permite generar código HTML rápidamente. Algunas abreviaciones útiles para `<input>`:

- `input:text` → `<input type="text">`
- `input:password` → `<input type="password">`
- `input:email` → `<input type="email">`
- `input:checkbox` → `<input type="checkbox">`
- `input:submit` → `<input type="submit">`


### Atributos adicionales importantes

- `name`: Identificador del campo en el formulario.
- `placeholder`: Texto de ayuda dentro del campo.
- `required`: Hace obligatorio el campo.
- `disabled`: Deshabilita el campo.
- `readonly`: Permite ver el contenido pero no modificarlo.
- `maxlength`: Límite de caracteres.
- `pattern`: Expresión regular para validar.

Ejemplo con validación:
```html
<input type="text" name="usuario" placeholder="Usuario" required minlength="3" maxlength="15">
```

## ⚡ Atributos del elemento `<input>`

El elemento `<input>` en HTML permite capturar datos del usuario. Sus atributos modifican su comportamiento. Veamos algunos esenciales:

### 🎛️ Atributos comunes

- **type**: Define el tipo de entrada (texto, número, email, etc.). Ejemplo:
  ```html
  <input type="email">
  ```

- **value**: Especifica el valor por defecto del campo. Ejemplo:
  ```html
  <input type="text" value="Hola">
  ```

- **readonly**: Hace que el campo sea solo lectura.
  ```html
  <input type="text" value="Fijo" readonly>
  ```

- **disabled**: Deshabilita el campo, impidiendo su uso.
  ```html
  <input type="text" disabled>
  ```

- **placeholder**: Muestra un texto de ayuda dentro del campo.
  ```html
  <input type="text" placeholder="Escribe aquí">
  ```

- **required**: Obliga a completar el campo antes de enviar el formulario.
  ```html
  <input type="text" required>
  ```

### 🔢 Atributos numéricos

- **maxlength**: Define la cantidad máxima de caracteres.
  ```html
  <input type="text" maxlength="10">
  ```

- **min** / **max**: Restringen el rango de valores aceptados.
  ```html
  <input type="number" min="1" max="100">
  ```

- **step**: Especifica incrementos de valor.
  ```html
  <input type="number" step="5">
  ```

### 🚀 Usabilidad

- **autofocus**: Activa automáticamente el foco en el campo al cargar la página.
  ```html
  <input type="text" autofocus>
  ```

### ⚡ Emmet para productividad

Para generar rápidamente un campo con estos atributos en Visual Studio Code, usa:
```emmet
input[type=text][placeholder=Escribe...][required][maxlength=10]
```
Esto expande a:
```html
<input type="text" placeholder="Escribe..." required maxlength="10">
```
## Comentarios en HTML 📝

Los comentarios en HTML son fragmentos de texto que el navegador ignora al renderizar la página. Son útiles para documentar el código, dejar notas para otros desarrolladores o desactivar temporalmente partes del código sin eliminarlas.

### Sintaxis de un comentario

Un comentario en HTML se escribe entre `<!--` y `-->`:

```html
<!-- Esto es un comentario en HTML -->
```

### 🧰 Uso de comentarios en HTML

1. **Documentación del código** 🗒️  
   Se pueden usar para explicar el propósito de una sección de código.
   
   ```html
   <!-- Sección de navegación principal -->
   <nav>
       <ul>
           <li><a href="index.html">Inicio</a></li>
           <li><a href="about.html">Acerca de</a></li>
           <li><a href="contact.html">Contacto</a></li>
       </ul>
   </nav>
   ```

2. **Desactivar código temporalmente** 🚫  
   Si necesitas quitar una parte del código sin borrarla, puedes comentarla:
   
   ```html
   <!-- <p>Este texto está comentado y no se mostrará en la página.</p> -->
   ```

3. **Notas para otros desarrolladores** 🛠️  
   Puedes dejar notas para otros programadores que trabajen en el código:
   
   ```html
   <!-- TODO: Agregar enlaces a redes sociales -->
   ```

### Atajos con Emmet ⚡

Para escribir comentarios rápidamente en Visual Studio Code, puedes usar la abreviatura de Emmet:

- **Envolver en un comentario**: Selecciona el texto y presiona `Ctrl + /` (Windows/Linux) o `Cmd + /` (Mac).
- **Escribir un comentario vacío**: Escribe `!` y presiona `Tab`, luego agrega `<!-- -->` donde necesites.

### ⚠️ Consideraciones

🔹 No se pueden anidar comentarios en HTML. Es decir, lo siguiente **no es válido**:

```html
<!-- Esto es un comentario <!-- anidado --> y causará errores. -->
```

🔹 Los comentarios no deben usarse para ocultar código JavaScript o CSS en archivos externos, ya que no es una práctica recomendada.


## 🎨 El atributo `style`

El atributo `style` en HTML permite aplicar estilos CSS directamente a un elemento sin necesidad de utilizar una hoja de estilos externa. Se puede utilizar en prácticamente cualquier etiqueta HTML y es útil para definir estilos específicos sin modificar archivos CSS.

### 🏷️ ¿Dónde se puede usar?
El atributo `style` se puede aplicar a **casi cualquier elemento HTML**, incluyendo:
- **Texto:** `<p>`, `<h1>`, `<h2>`, `<span>`
- **Listas:** `<ul>`, `<ol>`, `<li>`
- **Imágenes y multimedia:** `<img>`, `<video>`, `<audio>`
- **Contenedores:** `<div>`, `<section>`, `<article>`
- **Tablas:** `<table>`, `<tr>`, `<td>`
- **Botones y formularios:** `<button>`, `<input>`, `<form>`

⚠️ Aunque `style` es poderoso, **se recomienda utilizar CSS en hojas de estilo externas** para mantener el código más limpio y fácil de mantener.

---

### ✏️ Ejemplos de uso

#### 📌 Estilizar un párrafo
```html
<p style="color: blue; font-size: 20px;">Este es un párrafo en color azul con tamaño de fuente 20px.</p>
```

#### 🖼️ Modificar una imagen
```html
<img src="imagen.jpg" alt="Ejemplo" style="width: 300px; border: 2px solid red;">
```

#### 📋 Dar estilo a una lista
```html
<ul style="list-style-type: square; color: green;">
    <li style="font-weight: bold;">Elemento 1</li>
    <li>Elemento 2</li>
    <li style="text-decoration: underline;">Elemento 3</li>
</ul>
```

#### 🔠 Personalizar un encabezado
```html
<h1 style="background-color: yellow; text-align: center; padding: 10px;">Encabezado Destacado</h1>
```

---

### ⏩ Mejora tu productividad con **Emmet**
En **Visual Studio Code**, puedes escribir código más rápido usando **Emmet**:

```html
p[style="color:red;"]{Este es un párrafo rojo.}
```
🔹 Esto se expande automáticamente a:
```html
<p style="color:red;">Este es un párrafo rojo.</p>
```

🏆 **Consejo:** Usa `style` solo para modificaciones rápidas. Para proyectos grandes, ¡usa CSS externo! 🎨

## Botones en HTML ⏬

Los botones en HTML se crean con la etiqueta `<button>`. Son elementos interactivos que permiten a los usuarios hacer clic para ejecutar una acción, como enviar un formulario o activar una funcionalidad en JavaScript.

### Uso básico

```html
<button>Haz clic aquí</button>
```

Esto generará un botón con el texto "Haz clic aquí".

### Atributos comunes

- `type`: Define el tipo de botón.
  - `submit`: Envía el formulario al que pertenece.
  - `reset`: Reinicia los valores del formulario.
  - `button`: No tiene comportamiento predeterminado.

Ejemplo de un botón de envío:

```html
<button type="submit">Enviar</button>
```

### Uso con Emmet ⚡

Para crear rápidamente un botón con texto, puedes usar la abreviatura de Emmet:

```
button{Haz clic aquí}
```

Esto se expandirá automáticamente a:

```html
<button>Haz clic aquí</button>
```

Si necesitas un botón con un `type` específico, puedes hacerlo con:

```
button[type=submit]{Enviar}
```

Que generará:

```html
<button type="submit">Enviar</button>
```

### Botones dentro de formularios

Los botones son especialmente útiles dentro de formularios:

```html
<form>
    <input type="text" placeholder="Escribe algo">
    <button type="submit">Enviar</button>
</form>
```



## `<script>` 📜

La etiqueta `<script>` se usa en HTML para incluir código JavaScript en nuestras páginas web. Aunque todavía no hemos visto JavaScript en profundidad, es importante conocer cómo se añade y cómo afectan ciertos atributos a su carga.

### Uso básico

Podemos escribir JavaScript directamente dentro de la etiqueta `<script>`, pero lo más común es enlazar un archivo externo:

```html
<script src="scripts/main.js"></script>
```

Nota: este script lo vamos a meter en una carpeta llamada `scripts` y el archivo se llamará `main.js`.	Es una práctica muy recomendable separar el código JavaScript del HTML.

### Ubicación en el documento

El lugar donde colocamos `<script>` en el HTML influye en la carga y ejecución de la página. Para mejorar el rendimiento, se recomienda colocarlo antes de `</body>`:

```html
<body>
    <h1>Hola mundo</h1>
    <script src="scripts/main.js"></script>
</body>
```

### Atributos `defer` y `async` ⚡

Estos atributos controlan cómo se carga y ejecuta el script externo.

#### `defer`
- Descarga el script en segundo plano mientras se carga el HTML.
- Se ejecuta solo después de que el HTML esté completamente analizado.
- Mantiene el orden de ejecución si hay varios scripts con `defer`.

```html
<script src="scripts/main.js" defer></script>
```

#### `async`
- Descarga el script en segundo plano mientras se carga el HTML.
- Se ejecuta tan pronto como termine de descargarse, sin esperar a que el HTML esté completo.
- No mantiene el orden de ejecución si hay varios scripts.

```html
<script src="scripts/main.js" async></script>
```

### Ejemplo práctico 📝

Creamos un archivo `scripts/main.js` con este código:

```js
console.log("¡Hola desde scripts/main.js!");
```

Y lo enlazamos en el HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejemplo de Script</title>
</head>
<body>
    <h1>Ejemplo de carga de scripts</h1>
    <script src="scripts/main.js" defer></script>
</body>
</html>
```

🚀 **Recomendación:** Usa `defer` en la mayoría de los casos para garantizar que el HTML se procese primero antes de ejecutar el script.


## `<meta>` 🏷️

La etiqueta `<meta>` se utiliza para proporcionar metadatos sobre el documento HTML. Los metadatos no se muestran en la página, pero son esenciales para los navegadores y motores de búsqueda.

### 📌 Sintaxis básica
```html
<meta atributo="valor">
```

### 🛠️ Uso común de `<meta>`

1. **Definir el conjunto de caracteres** (Evita problemas con acentos y caracteres especiales):

   ```html
   <meta charset="UTF-8">
   ```

2. **Configurar la vista en dispositivos móviles** (Asegura que el sitio sea responsive):

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

3. **Descripción del sitio** (Mejora el SEO en los resultados de búsqueda):

   ```html
   <meta name="description" content="Esta es una página de ejemplo sobre la etiqueta meta en HTML.">
   ```

4. **Palabras clave** (Aunque ya no es tan relevante para SEO):

   ```html
   <meta name="keywords" content="HTML, meta, SEO, web">
   ```

5. **Autor del documento**:

   ```html
   <meta name="author" content="Tu Nombre">
   ```

6. **Refrescar o redirigir la página** (Ejemplo: recargar cada 5 segundos o redirigir tras un tiempo):

   ```html
   <meta http-equiv="refresh" content="5; url=https://ejemplo.com">
   ```

---

### ⚡ Uso de Emmet para `<meta>`

Visual Studio Code permite generar etiquetas `<meta>` rápidamente con Emmet. Aquí algunos atajos útiles:

- **`meta:vp`** ➝ `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- **`meta:utf`** ➝ `<meta charset="UTF-8">`
- **`meta:desc`** ➝ `<meta name="description" content="">`
- **`meta:kw`** ➝ `<meta name="keywords" content="">`
- **`meta:author`** ➝ `<meta name="author" content="">`

✏️ **Ejemplo con Emmet**:

Si escribes `meta:desc` en Visual Studio Code y presionas `Tab`, generará automáticamente:

```html
<meta name="description" content="">
```

---

### 🔍 Recomendaciones
✅ Usa `<meta charset="UTF-8">` siempre para evitar problemas de codificación.<br>
✅ Define el `viewport` para que tu página sea adaptable a dispositivos móviles.<br>
✅ Añade una descripción relevante para mejorar el posicionamiento en buscadores.<br>


---

## 🧪 Ejercicio extra (mini‑proyecto): web personal con navegación

Este ejercicio es **opcional**, pero muy recomendable para consolidar el laboratorio. La idea es construir una web pequeñita, pero “real”: varias páginas, recursos en carpetas y enlaces correctos. 🧭

### 🎯 Objetivo

Crear una mini web con **2 páginas**:

- `index.html` (Inicio)
- `about.html` (Sobre mí)

Y una estructura de carpetas así:

```
laboratorio-html/
  index.html
  about.html
  img/
    avatar.jpg
```

> Si no tienes imágenes, puedes usar una de prueba, pero intenta también guardar **al menos una** imagen local en `img/`.

### ✅ Requisitos mínimos

En **ambas** páginas:

1. 📌 Un `<h1>` (solo uno por página) y al menos un `<h2>`.
2. 🔗 Un menú de navegación con enlaces **relativos** (por ejemplo, `href="about.html"` desde `index.html`).
3. 🖼️ Una imagen con `alt` descriptivo.
4. 📝 Al menos una lista (`<ul>` o `<ol>`).
5. 🧱 Un `<div>` que agrupe una sección (por ejemplo, cabecera o contenido).

### ⭐ Extra recomendado (para subir nota / practicar más)

- 🧾 Añade un pequeño formulario de contacto en `about.html` usando `<form>`, `<label>` y `<input>`.

Ejemplo (puedes adaptarlo):

```html
<form>
  <div>
    <label for="nombre">Nombre:</label>
    <input id="nombre" name="nombre" type="text" required minlength="2" />
  </div>

  <div>
    <label for="email">Email:</label>
    <input id="email" name="email" type="email" required />
  </div>

  <button type="submit">Enviar</button>
</form>
```

📌 Pista: fíjate en cómo `for="nombre"` coincide con `id="nombre"`. Eso mejora la accesibilidad y permite hacer clic en la etiqueta para enfocar el campo.

### 🧾 Checklist 

- ✅ Abre `index.html` y funciona la navegación a `about.html`.
- ✅ No hay enlaces rotos (ni rutas mal escritas).
- ✅ Todas las imágenes cargan y tienen `alt`.
- ✅ El HTML tiene `lang="es"`, `<meta charset="UTF-8">` y `viewport`.

