# 🏗️ Laboratorio 04: Diseño Elegante con Bootstrap 3

## Introducción

Bienvenidos al laboratorio de Bootstrap 3. En este ejercicio, trabajaremos con una página web básica sin ningún tipo de estilos y le daremos un diseño moderno y atractivo utilizando Bootstrap.

Hemos preparado un archivo HTML inicial que contiene toda la estructura de la página, pero sin ningún formato visual. Nuestra misión será aplicar estilos, organizar los elementos y mejorar la usabilidad utilizando los componentes de Bootstrap.


## ¿Qué vamos a hacer?

🎯 **Objetivo**: Convertir una página HTML simple en una web bien diseñada y funcional con Bootstrap 3.

📜 **Código base**: Para empezar, descarguen el código inicial desde el siguiente enlace:

➡️ [Descargar código base](./code/code-lab04.zip)

⚡ **Tareas**:
- Integrar Bootstrap en el proyecto.
- Darle un diseño atractivo a la web.
- Aplicar componentes como navegación, botones, tablas y formularios mejorados.
- Asegurar que la página sea responsive y accesible.

## Estructura inicial del proyecto

El archivo HTML que recibirás contiene los siguientes elementos:
- Un **jumbotron** con el título de la página.
- Una **barra de navegación** simple con enlaces.
- Una **tabla de productos** sin estilos.
- Una **lista de ingredientes** sin formato.
- Un **formulario de contacto** básico.
- Un **carrusel de imágenes** sin funcionalidad.

---

## 📌 Añadiendo Bootstrap a nuestro HTML

Bootstrap nos permite estilizar nuestra página web y hacerla más responsiva sin necesidad de escribir mucho CSS. Podemos incluirlo en nuestro proyecto de dos formas:

1. **Descargándolo y sirviéndolo desde nuestro propio servidor** 🖥️  
   Esto nos da mayor control sobre los estilos, pero aumenta el consumo de ancho de banda.

2. **Usando un CDN** 🌍 (Content Delivery Network)  
   Es más eficiente y rápido porque los archivos de Bootstrap ya están optimizados y distribuidos globalmente.

💡 **Recomendación**: Optaremos por la segunda opción, ya que es más sencilla y optimiza la carga de nuestra web.

---

### 🔗 Incluir Bootstrap desde un CDN

Para incluir Bootstrap en nuestro proyecto, debemos agregar los siguientes enlaces dentro de la etiqueta `<head>` de nuestro archivo **index.html**:

```html
<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<!-- Bootstrap JavaScript (jQuery es necesario) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
```

### 🔍 Explicación de cada línea:

✅ **Bootstrap CSS**: Se encarga de aplicar los estilos predefinidos de Bootstrap.  
✅ **jQuery**: Es un requisito para que algunas funciones de Bootstrap (como los modales o los dropdowns) funcionen correctamente.  
✅ **Bootstrap JS**: Permite la interacción dinámica con elementos de Bootstrap.  

---

## 🏗️ Modificando nuestro `index.html`

Ahora que tenemos los archivos necesarios, debemos colocarlos correctamente en nuestro código. Pero, ¿dónde debemos añadir los `<link>` y `<script>`?

### 📌 Ubicación correcta de los archivos:

1️⃣ **Los `<link>`** (hojas de estilo) deben ir siempre dentro del `<head>`.  
2️⃣ **Los `<script>`** (JavaScript) pueden ir en dos lugares:
   - **Al final del `<body>`**: Esto evita bloquear la carga del contenido.
   - **En el `<head>` con `defer`**: Esto indica al navegador que los scripts deben ejecutarse después de que la página se haya cargado.

### 📝 Ejemplo 1: Scripts al final del `<body>`

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>nuestra web</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
</head>
<body>

    <!-- Contenido de la página -->

    <!-- Bootstrap JS y jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</body>
```

### 📝 Ejemplo 2: Scripts en el `<head>` con `defer`

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>nuestra web</title>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

    <!-- Bootstrap JS y jQuery con defer -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" defer></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" defer></script>
</head>
<body>

    <!-- Contenido de la página -->

</body>
```

🔹 **¿Cuál es mejor?**  
Dependerá del caso, pero generalmente se recomienda **colocar los scripts al final del `<body>`** para evitar bloqueos en la carga de la página. Si necesitas que algún script se cargue antes de mostrar la web, usa `defer`.

---

## 🎯 Resumen

✔️ Bootstrap se puede incluir mediante un CDN o descargándolo.  
✔️ Recomendamos usar un **CDN** porque optimiza la velocidad de carga.  
✔️ Los `<link>` deben ir en el `<head>`, y los `<script>` pueden ir al final del `<body>` o en el `<head>` con `defer`.  
✔️ jQuery es necesario para ciertas funcionalidades de Bootstrap.




---


## 🎨 Estilizando el Jumbotron en Bootstrap 3

### 📌 ¿Qué es un Jumbotron?
Un **jumbotron** en Bootstrap es un contenedor grande que se utiliza para destacar información importante en una página web. Generalmente, contiene un título llamativo y una breve descripción. Suele ocupar todo el ancho de la página y se diferencia visualmente del resto del contenido.

En Bootstrap 3, se implementa con la clase `.jumbotron`, que aplica un fondo gris claro, un relleno generoso y esquinas redondeadas.

### 🖌️ Aplicando estilos al Jumbotron
Para hacer que nuestro jumbotron sea más elegante, podemos agregarle algunas clases y estilos adicionales:

#### Clases recomendadas:
- **`.jumbotron`** → Aplica el estilo base del jumbotron.
- **`.text-center`** → Centra el texto dentro del jumbotron.
- **`.bg-primary`** → Si queremos cambiar el fondo a un azul Bootstrap (opcional, requiere personalización extra).
- **`.container`** → Para que el jumbotron tenga márgenes laterales y no ocupe toda la pantalla.

### ✨ Implementación con un Glyphicon
Bootstrap 3 incluye **Glyphicons**, que nos permiten agregar pequeños íconos a nuestra página sin necesidad de imágenes externas.

```html
<div class="jumbotron text-center">
    <h1><span class="glyphicon glyphicon-star"></span> nuestra web</h1>
    <p>La mejor tienda de flanes de la red</p>
</div>
```

📌 Aquí hemos añadido `glyphicon glyphicon-star` para mostrar una estrella junto al título.

### 🔥 Versión moderna con un Emoji
Si prefieres una versión más moderna sin dependencias externas como Glyphicons, puedes usar un **emoji**:

```html
<div class="jumbotron text-center">
    <h1>🍮 nuestra web</h1>
    <p>La mejor tienda de flanes de la red</p>
</div>
```

📌 En esta versión, el **emoji de flan 🍮** sustituye al glyphicon, aportando un toque más llamativo y compatible en todos los dispositivos.

### 🎭 Comparación de ambas versiones
| Versión        | Pros | Contras |
|---------------|------|---------|
| **Con Glyphicon** | Compatible con Bootstrap 3 | Requiere incluir Bootstrap CSS |
| **Con Emoji** | Más simple y universal | Depende de la compatibilidad del sistema operativo |

💡 **Recomendación:** Si el objetivo es compatibilidad con Bootstrap 3, usa Glyphicons. Si buscas una solución más moderna y ligera, opta por los emojis.

### 🎨 Personalizando los colores del Jumbotron en Bootstrap 3

El jumbotron de Bootstrap 3 viene por defecto con un fondo gris claro. Sin embargo, podemos cambiar su apariencia usando clases de Bootstrap o agregando estilos personalizados en CSS.



#### 🏗 Opción 1: Usar clases de Bootstrap
Aunque Bootstrap 3 no tiene clases directas para cambiar el color del jumbotron, podemos usar las clases de contexto como `.bg-primary`, `.bg-success`, `.bg-info`, `.bg-warning` y `.bg-danger` para cambiar su fondo.

```html
<div class="jumbotron text-center bg-primary text-white">
    <h1>🍮 nuestra web</h1>
    <p>La mejor tienda de flanes de la red</p>
</div>
```

📌 En este caso, la clase `.bg-primary` cambia el fondo a azul y `.text-white` asegura que el texto sea legible.

---

#### 🎨 Opción 2: Estilos personalizados en CSS
Para tener un control total sobre los colores, podemos usar reglas CSS personalizadas:

```css
.jumbotron-custom {
    background-color: #ffcc00; /* Amarillo brillante */
    color: #333; /* Texto oscuro para contraste */
    padding: 50px;
    border-radius: 10px;
}
```

Luego, aplicamos esta clase en el HTML:

```html
<div class="jumbotron jumbotron-custom text-center">
    <h1>🍮 nuestra web</h1>
    <p>¡Ahora más dulce que nunca!</p>
</div>
```

📌 Aquí hemos usado un fondo **amarillo brillante** (`#ffcc00`) y un **texto oscuro** para contraste.



#### 🔥 Opción 3: Efecto degradado para un Jumbotron más llamativo
Si queremos hacer el jumbotron aún más vistoso, podemos aplicar un **degradado**:

```css
.jumbotron-gradient {
    background: linear-gradient(to right, #ff9966, #ff5e62);
    color: white;
    padding: 50px;
    border-radius: 10px;
}
```

```html
<div class="jumbotron jumbotron-gradient text-center">
    <h1>🍮 nuestra web</h1>
    <p>¡La tienda de flanes más vibrante de la red!</p>
</div>
```

📌 Aquí el fondo tiene un degradado **naranja a rojo**, dando un efecto más dinámico.

---

### 🎭 Comparación de opciones
| Método | Pros | Contras |
|--------|------|---------|
| **Clases de Bootstrap (`.bg-*`)** | Fácil y rápido | Colores limitados |
| **CSS personalizado (`background-color`)** | Total control sobre los colores | Requiere escribir CSS |
| **Degradado (`linear-gradient`)** | Diseño más atractivo y moderno | Puede no ser compatible en navegadores muy antiguos |

---

## ✨ Estilizando el Navbar con Bootstrap 3

El menú de navegación es una parte fundamental de cualquier sitio web, y Bootstrap 3 nos proporciona clases y estilos predefinidos para mejorar su apariencia sin esfuerzo.

### 1️⃣ Transformando la etiqueta `<nav>`

En el archivo `index.html`, actualmente el navbar es un simple `<nav>` con una lista de elementos `<ul>`. Vamos a convertirlo en un **navbar de Bootstrap 3**.

#### 📌 Código original:
```html
<nav>
    <ul>
        <li>Inicio</li>
        <li>Flanes</li>
        <li>Recetas</li>
        <li>Contacto</li>
    </ul>
</nav>
```

#### 🎨 Aplicando Bootstrap:

Para mejorar la apariencia, utilizamos las clases de Bootstrap 3:

1. **Añadir `navbar navbar-default`**: Esto aplicará los estilos base de Bootstrap.
2. **Incluir `navbar-header`**: Para manejar la parte del logotipo o nombre del sitio.
3. **Convertir `<ul>` en `navbar-nav`**: Para darle formato correcto a la lista de enlaces.
4. **Agregar `navbar-collapse`**: Para hacerlo responsive.

```html
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Logo o título -->
        <div class="navbar-header">
            <a class="navbar-brand" href="#">🍮 nuestra web</a>
        </div>
        <!-- Elementos del menú -->
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Flanes</a></li>
                <li><a href="#">Recetas</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    </div>
</nav>
```

### 2️⃣ Haciendo el navbar responsive 📱

Bootstrap 3 soporta un **menú colapsable** para móviles. Para activarlo:

1. **Añadir un botón de hamburguesa (`navbar-toggle`)** que aparecerá en pantallas pequeñas.
2. **Envolver los enlaces en `navbar-collapse collapse`** para que puedan expandirse.

Código actualizado:

```html
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <!-- Botón para móviles -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">🍮 nuestra web</a>
        </div>
        <!-- Elementos del menú -->
        <div class="collapse navbar-collapse" id="navbar-menu">
            <ul class="nav navbar-nav">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Flanes</a></li>
                <li><a href="#">Recetas</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
        </div>
    </div>
</nav>
```

### 3️⃣ Comprueba que la web sea responsive

Para verificar que el navbar es responsive, puedes **reducir el tamaño de la ventana del navegador** y observar el resultado. Con la primera opción, el menú se colapsará pero desaparecerán las opciones del menú. Con la segunda opción, el menú se colapsará y aparecerá el botón de hamburguesa.

### 🎉 Resultado final

Con estas mejoras, el navbar:

✅ Se ve estilizado con los colores y diseño de Bootstrap.  
✅ Es totalmente responsive.  
✅ Incluye un **menú colapsable** para móviles.

## 🎨 Mejorar el aspecto de la tabla con Bootstrap

En esta sección, aprenderemos a **mejorar la presentación de una tabla**. Aplicaremos estilos para hacerla más atractiva e interactiva, incluyendo efectos al pasar el cursor sobre los enlaces.

### 🏆 Tabla de los mejores flanes

Vamos a transformar la tabla básica en una versión más estilizada con enlaces interactivos.

### 🛠 Paso 1: Agregar la estructura HTML de la tabla

Añadimos la clase `table` de **Bootstrap** para estilizar la tabla y `table-hover` para resaltar las filas al pasar el cursor.
  
 
```html
<table class="table table-hover">
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Sabor</th>
            <th>Tiempo de compilación</th>
        </tr>
    </thead>

....

```

Es posible que al pasar por encima de las filas no se vea el efecto hover. Esto se debe a que el fondo es blanco y es un cambio casi imperceptible. Para solucionarlo, podemos añadir un color de fondo al hacer hover:

```css
.table-hover tbody tr:hover {
    background-color: #dfe6e9; /* Un gris más oscuro para que se note más */
}
```


### 🎨 Paso 2: Aplicar estilos personalizados

Vamos a mejorar la visibilidad de los enlaces agregando un **efecto hover** con CSS.

```css
.flan-link {
    text-decoration: none;
    color: #d2691e;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
}

.flan-link:hover {
    color: #ff4500;
    text-decoration: underline;
}
```

Para ello tenemos que añadir las clases a las filas de la tabla:

```html
    <tbody>
        <tr>
            <td><a href="#" class="flan-link">Flan Overflow</a></td>
            <td>Chocolate con error 404</td>
            <td>15 ms</td>
        </tr>
        <tr>
            <td><a href="#" class="flan-link">FlanScript</a></td>
            <td>Vainilla con JavaScript derretido</td>
            <td>30 ms</td>
        </tr>
        <tr>
            <td><a href="#" class="flan-link">Flan++</a></td>
            <td>Caramelo con punteros flotantes</td>
            <td>10 ms</td>
        </tr>
    </tbody>
</table>
```

### 🔥 Resultado

✔️ **Filas resaltadas** al pasar el cursor gracias a `table-hover`.  
✔️ **Enlaces con efecto hover** para mejorar la interacción.  
✔️ **Tabla estilizada** con Bootstrap, sin necesidad de escribir CSS extra para las celdas.

Con estos cambios, nuestra tabla de flanes no solo se ve mejor, sino que **ofrece una experiencia más fluida** para los usuarios. 🚀🍮

## 🎨 Estilizando el título del Top #3 de flanes

Para mejorar la apariencia del título `<h2>` que introduce nuestra tabla, podemos aplicar estilos de Bootstrap o agregar CSS personalizado.


### 📌 1. Usar clases de Bootstrap

Bootstrap nos proporciona clases para mejorar la tipografía y el diseño de los títulos. Podemos usar:

```html
<h2 class="text-center text-primary">🏆 Top #3 Flanes</h2>
```

📌 **Explicación:**
- `text-center`: Centra el texto.
- `text-primary`: Aplica el color primario de Bootstrap (azul por defecto).
- `🏆`: Añadimos un emoji para hacerlo más llamativo.

💡 **Variantes útiles:**
- `text-success` → Verde.
- `text-danger` → Rojo.
- `text-warning` → Amarillo/naranja.
- `text-info` → Azul claro.
- `text-dark` → Gris oscuro.

---

### 🎨 2. Personalizar con CSS

Si queremos más personalización, podemos crear nuestra propia clase CSS:

```css
.flan-title {
    font-size: 2rem;
    font-weight: bold;
    color: #e67e22; /* Un color caramelo */
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 10px 0;
    border-bottom: 3px solid #e74c3c; /* Línea decorativa */
}
```

Luego, aplicamos la clase al `<h2>`:

```html
<h2 class="flan-title">🏆 Top #3 Flanes</h2>
```

📌 **Explicación:**
- `font-size: 2rem;` → Aumenta el tamaño del texto.
- `font-weight: bold;` → Hace el texto más grueso.
- `color: #e67e22;` → Aplica un color caramelo.
- `text-align: center;` → Centra el texto.
- `text-transform: uppercase;` → Convierte el texto en mayúsculas.
- `letter-spacing: 2px;` → Separa un poco las letras.
- `border-bottom: 3px solid #e74c3c;` → Agrega una línea roja decorativa debajo del título.

---

### ✨ 3. Agregar efectos dinámicos con `hover`

Podemos mejorar la experiencia visual agregando un **efecto al pasar el cursor**:

```css
.flan-title:hover {
    color: #d35400; /* Un tono más oscuro de caramelo */
    transform: scale(1.05); /* Hace crecer el título ligeramente */
    transition: all 0.3s ease-in-out;
}
```

Ahora, cuando el usuario pase el cursor sobre el título, se verá un ligero **cambio de color y tamaño**. 🎩✨

Puedes aplicarle este estilo al resto del etiquetas `<h2>` de la página para mantener la coherencia visual.

---

## 📌 Mejorando Listas con Bootstrap 3

Vamos a mejorar las listas no ordenadas (`<ul>`) y ordenadas (`<ol>`) utilizando las clases de Bootstrap 3 para mejorar su apariencia y usabilidad.

### 📝 Paso 1: Agregar las Clases de Bootstrap

Bootstrap 3 nos proporciona clases para estilizar listas. Las más útiles son:

- `list-unstyled`: Quita los estilos predeterminados como los márgenes y viñetas.
- `list-inline`: Muestra los elementos de la lista en línea, en lugar de en una columna.

### ✏️ Aplicando `list-unstyled`
Usamos esta clase para quitar el estilo predeterminado a las listas:

```html
<ul class="list-unstyled">
    <li>1 GB de azúcar</li>
    <li>500 MB de leche condensada</li>
    <li>256 KB de esencia de vainilla</li>
    <li>4 huevos de silicio</li>
    <li>Un splash de código bien indentado</li>
</ul>
```

### ✏️ Aplicando `list-inline`
Si queremos que los elementos de la lista se muestren en una línea horizontal:

```html
<ul class="list-inline">
    <li>Inicio</li>
    <li>Flanes</li>
    <li>Recetas</li>
    <li>Contacto</li>
</ul>
```

---

## 🎨 Paso 2: Mejorar la Lista Ordenada

En listas ordenadas (`<ol>`), podemos mejorar la visualización con Bootstrap y CSS:

```html
<ol class="list-group">
    <li class="list-group-item">Compila los huevos con la leche condensada.</li>
    <li class="list-group-item">Depura el caramelo en una sartén hasta que se ejecute sin errores.</li>
    <li class="list-group-item">Inserta el código de la mezcla en un molde.</li>
    <li class="list-group-item">Corre el programa a 180°C en el horno durante 40 minutos.</li>
    <li class="list-group-item">Haz un push al plato y disfruta.</li>
</ol>
```

Con `list-group` y `list-group-item`, logramos un diseño más limpio y atractivo.

---

## 🎭 Paso 3: Agregar Iconos con Glyphicons

Podemos añadir iconos de Bootstrap para resaltar los elementos de la lista:

```html
<ul class="list-unstyled">
    <li><span class="glyphicon glyphicon-ok"></span> 1 GB de azúcar</li>
    <li><span class="glyphicon glyphicon-ok"></span> 500 MB de leche condensada</li>
    <li><span class="glyphicon glyphicon-ok"></span> 256 KB de esencia de vainilla</li>
    <li><span class="glyphicon glyphicon-ok"></span> 4 huevos de silicio</li>
    <li><span class="glyphicon glyphicon-ok"></span> Un splash de código bien indentado</li>
</ul>
```

Esto agregará iconos de verificación a cada elemento, mejorando la legibilidad.

---

## 📸 Estilizando la Imagen del Flan con Bootstrap 3

Vamos a modificar la imagen del flan (`img/f01.jpeg`) para que:
- 📱 Sea **responsive** y se adapte al tamaño del contenedor.
- 🔵 Tenga **bordes redondeados**.


## 📌 Aplicar Clases de Bootstrap a la Imagen


Añade las siguientes **clases de Bootstrap**:

```html
<img src="img/f01.jpeg" alt="Delicioso flan" class="img-responsive img-rounded center-block">
```

💡 Para centrarla sin CSS extra, Bootstrap 3 incluye la clase `center-block`.


📌 **Explicación de las clases:**
- 🖼 **`img-responsive`** → Hace que la imagen se **ajuste automáticamente** al tamaño del contenedor.
- 🔵 **`img-rounded`** → Agrega **bordes redondeados**.


## 📌 Prueba el Cambio

Deberías notar que la imagen:
✅ Se ajusta bien en pantallas pequeñas.  (Haz pequeña la pantalla para comprobarlo)
✅ Tiene los bordes suavizados.

--- 


### 🔵 Te proponemos que cambies todas las etiquetas `<h3>`

Los títulos de ingredientes, instrucciones y resultado usan `<h3>`. Te recomendamos centrarlos con la clase `text-center` de Bootstrap y, si quieres, aplicar un estilo personalizado a `<h3>`.


## Sistema `Bootstrap Grid` para la Sección de una Receta de Flan

En esta sección aprenderás a utilizar el sistema de **grid de Bootstrap** para organizar la presentación de una receta de flan. 

La disposición sigue el patrón 3-5-4 en pantallas grandes, 6-6 con la imagen debajo en medianas y totalmente apilado en pequeñas.


## Disposición Fija (3-5-4 en grandes, 6-6 en medianas)**
Esta versión mantiene la imagen junto a los textos siempre que el espacio lo permita.

```html
    <div class="container">
        <h2 class="flan-title">Receta para hacer tu flan.</h2>
        <div class="row">
            <!-- Lista de ingredientes -->
            <div class="col-lg-3 col-md-6 col-sm-12">
                <h3 class="text-center">Ingredientes</h3>
                <ul class="list-unstyled">
                    <li><span class="glyphicon glyphicon-ok"></span> 1 GB de azúcar</li>
                    <li><span class="glyphicon glyphicon-ok"></span> 500 MB de leche condensada</li>
                    <li><span class="glyphicon glyphicon-ok"></span> 256 KB de esencia de vainilla</li>
                    <li><span class="glyphicon glyphicon-ok"></span> 4 huevos de silicio</li>
                    <li><span class="glyphicon glyphicon-ok"></span> Un splash de código bien indentado</li>
                </ul>
            </div>
            <!-- Receta del flan -->
            <div class="col-lg-5 col-md-6 col-sm-12">
                <h3 class="text-center">Instrucciones</h3>
                <ol class="list-group">
                    <li class="list-group-item">Compila los huevos con la leche condensada.</li>
                    <li class="list-group-item">Depura el caramelo en una sartén hasta que se ejecute sin errores.</li>
                    <li class="list-group-item">Inserta el código de la mezcla en un molde.</li>
                    <li class="list-group-item">Corre el programa a 180°C en el horno durante 40 minutos.</li>
                    <li class="list-group-item">Haz un push al plato y disfruta.</li>
                </ol>
            </div>
            <!-- Imagen del flan -->
            <div class="col-lg-4 col-md-12 col-sm-12">
                <h3 class="text-center">Resultado</h3>
                <img src="img/f01.jpeg" alt="Delicioso flan" class="img-responsive img-rounded">
            </div>
        </div>
    </div>
```

### **Comportamiento en Diferentes Tamaños de Pantalla**
| Tamaño de Pantalla | Ingredientes | Receta | Imagen |
|--------------------|-------------|--------|--------|
| **Grande (`lg`)** | 3 columnas  | 5 columnas | 4 columnas |
| **Mediana (`md`)** | 6 columnas  | 6 columnas | 12 columnas (debajo) |
| **Pequeña (`sm/xs`)** | 12 columnas | 12 columnas | 12 columnas |

Esta estructura permite que en pantallas grandes la información esté distribuida en una fila, mientras que en pantallas más pequeñas los elementos se reorganicen en filas separadas para mejorar la **usabilidad**.

Prueba a cambiar el ancho de la ventana del navegador para ver cómo se adapta la disposición en tiempo real.

--- 

## 📖 Diseño en GRID para la Sección "Flanes en Venta"

En esta sección aprenderás a organizar la sección **"Flanes en Venta"** usando el sistema **Grid de Bootstrap 3**, asegurando que los flanes se presenten en filas de **tres columnas (4-4-4)** y se mantengan compactos hasta el tamaño **medio (md)**. 

También aplicaremos estilos para:
- Centrar el título con una nueva clase `.flan-title-venta`.
- Justificar el texto de la descripción.
- Crear un botón de compra sin funcionalidad.

### 🏗️ 1. Estructura HTML de la Sección

Vamos a organizar los **12 flanes** en una cuadrícula dentro de un contenedor de Bootstrap.  

Cada flan estará dentro de un `div` con la clase `.flan-box` para definir su estilo individual.  

```html
<div class="container">
  <!-- Título centrado de la sección -->
  <h2 class="flan-title-venta">🍮 Flanes en Venta</h2>
  
  <div class="row">
    <!-- Flan 1 -->
    <div class="col-md-4 col-sm-6 flan-item">
      <div class="flan-box">
        <img src="img/f02.jpeg" alt="Flan de Algoritmo" class="img-responsive">
        <h3 class="text-center">Flan de Algoritmo</h3>
        <p class="flan-desc">Un flan tan optimizado que se cocina en O(n log n).</p>
        <button class="btn btn-warning btn-block">Comprar $3.14</button>
      </div>
    </div>

    <!-- Flan 2 -->
    <div class="col-md-4 col-sm-6 flan-item">
      <div class="flan-box">
        <img src="img/f03.jpeg" alt="Flan Buffer Overflow" class="img-responsive">
        <h3 class="text-center">Flan Buffer Overflow</h3>
        <p class="flan-desc">Este flan tiene tanta crema que si lo sirves en un plato pequeño, desbordará y se comerá la memoria de otros postres cercanos.</p>
        <button class="btn btn-warning btn-block">Comprar $3.14</button>
      </div>
    </div>

    <!-- Flan 3 -->
    <div class="col-md-4 col-sm-6 flan-item">
      <div class="flan-box">
        <img src="img/f04.jpeg" alt="Flan NullPointerException" class="img-responsive">
        <h3 class="text-center">Flan NullPointerException</h3>
        <p class="flan-desc">Un flan tan misterioso que cuando intentas comerlo, la cuchara atraviesa el aire porque simplemente no está ahí.</p>
        <button class="btn btn-warning btn-block">Comprar $3.14</button>
      </div>
    </div>

    <!-- Repetir estructura para los demás flanes... -->
  </div>
</div>
```

### 🔍 Explicación del Código:
1. **Título de la sección**: Se usa `<h2 class="flan-title-venta">` para aplicar el nuevo estilo.
2. **Estructura en Grid**: 
   - `col-md-4 col-sm-6`: Muestra **3 flanes por fila en pantallas medianas** y **2 en pantallas pequeñas**.
   - `row`: Mantiene los flanes organizados en filas compactas.
3. **Cada flan**: 
   - **Imagen (`img-responsive`)**: Asegura que las imágenes se ajusten correctamente.
   - **Título centrado (`text-center`)**: Mantiene el nombre del flan alineado al centro.
   - **Descripción justificada (`flan-desc`)**: Mejor presentación del texto.
   - **Botón de compra (`btn-warning btn-block`)**: Botón de compra visual, sin funcionalidad.

---

### 🎨 2. Aplicación de Estilos CSS

Ahora definimos los estilos necesarios para mejorar la apariencia de la sección:

```css
/* Título de la sección de ventas */
.flan-title-venta {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #e67e22;
  border-bottom: 3px solid #e74c3c;
  padding-bottom: 10px;
}

/* Contenedor de cada flan */
.flan-box {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  background-color: #fffaf0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

/* Descripción de cada flan */
.flan-desc {
  text-align: justify;
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
}

/* Botón de compra */
.btn-warning {
  font-size: 1.2rem;
  font-weight: bold;
}
```

### 🔍 Explicación de los Estilos:
1. **Título `.flan-title-venta`**:
   - `text-align: center;`: Centra el texto.
   - `border-bottom: 3px solid #e74c3c;`: Línea decorativa.
   - `letter-spacing: 2px;`: Mayor separación entre letras.

2. **Caja de cada flan `.flan-box`**:
   - `border: 1px solid #ddd;`: Bordes sutiles.
   - `background-color: #fffaf0;`: Fondo crema.
   - `box-shadow`: Sombra ligera para efecto elevado.

3. **Texto de la descripción `.flan-desc`**:
   - `text-align: justify;`: Asegura que el texto quede alineado.
   - `color: #555;`: Hace que el color sea más legible.

4. **Botón de compra `btn-warning`**:
   - `font-size: 1.2rem;`: Aumenta el tamaño del texto.
   - `btn-block`: Hace que el botón ocupe todo el ancho del `div`.

---

### 🎯 3. Resultado Final

Siguiendo estos pasos, obtendremos un diseño en **GRID** donde:
✔️ Los flanes se acomodan en **filas de tres columnas**.  
✔️ El título se ve **centrado y destacado**.  
✔️ La descripción es **justificada** para mejorar la lectura.  
✔️ El botón de compra es **llamativo** pero sin funcionalidad real.  

Con esto, nuestra tienda de **nuestra web** tiene una presentación más profesional y ordenada. 🍮✨  


## 🛠️ Reto: Ajustando la Disposición de los Flanes

Actualmente, la sección "Flanes en Venta" muestra los flanes en un **grid de 3 elementos por fila** en pantallas medianas y grandes (`col-md-4`). 

📌 **Objetivo del ejercicio**  
Modifica el diseño para que en **pantallas grandes (lg)** se muestren **4 flanes por fila** y mantengan la distribución en **pantallas más pequeñas**.

### 🎯 Pistas para resolverlo:
1. En Bootstrap 3, el **sistema de columnas** usa una cuadrícula de **12 unidades** por fila.  
   - `col-md-4` significa que cada flan ocupa **4 columnas** (12 ÷ 4 = 3 flanes por fila).  
   - Para mostrar **4 flanes por fila**, cada uno debe ocupar **3 columnas** (`col-lg-3`).  
   
2. Se pueden **definir múltiples tamaños de columnas** en una misma clase.  
   - **Ejemplo:** `col-lg-3 col-md-4 col-sm-6`  
   - Esto significa:
     - En **pantallas grandes (`lg`)** → 4 flanes por fila.
     - En **pantallas medianas (`md`)** → 3 flanes por fila.
     - En **pantallas pequeñas (`sm`)** → 2 flanes por fila.

### 📝 Código que debes modificar

Encuentra en el código HTML la línea donde se definen las columnas de los flanes:

```html
<div class="col-md-4 col-sm-6 flan-item">
```

Cámbiala por:

```html
<div class="col-lg-3 col-md-4 col-sm-6 flan-item">
```

### ✅ Resultado esperado

Con esta modificación:
✔️ En pantallas **grandes (`lg`)**, los flanes se verán en **4 columnas**.  
✔️ En pantallas **medianas (`md`)**, seguirán en **3 columnas**.  
✔️ En pantallas **pequeñas (`sm`)**, se verán **2 por fila**.  
✔️ En móviles muy pequeños, las columnas se apilarán **de una en una** (Bootstrap lo hace automáticamente).

¡Pruébalo y observa cómo cambia la distribución de los flanes! 🍮✨

## 📖 Mejorando la Paginación con Bootstrap 3
Vamos a optimizar la sección de paginación en la página web para que sea más elegante y funcional con **Bootstrap 3**.


### ✨ Implementación con Bootstrap 3

#### 1️⃣ **Sustituir el código de paginación actual**
El código original de la paginación es el siguiente:

```html
<!-- Paginación -->
<div>
  <span>«</span>
  <span>1</span>
  <span>2</span>
  <span>3</span>
  <span>»</span>
</div>
```

Este código no aprovecha los estilos de **Bootstrap 3**, lo cual hace que la paginación no se vea elegante ni funcional.

#### 2️⃣ **Actualizar a un componente Bootstrap**
Vamos a reemplazarlo con la **paginación de Bootstrap 3**, que ofrece un diseño más moderno y adaptable:

```html
<!-- Paginación centrada con Bootstrap -->
<nav aria-label="Page navigation" class="text-center">
  <ul class="pagination pagination-centered">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
```

Nota: esto es solo un "mockup" de la paginación, no tiene funcionalidad real.

### 🎨 **Personalización con CSS**
Si quieres darle un **toque más elegante**, puedes añadir los siguientes estilos en la sección `<style>`:

```css
.pagination {
  display: inline-block;
  margin: 0 auto;
}

.pagination > li > a {
  color: #e67e22; /* Color caramelo */
  background-color: #fff;
  border: 1px solid #e67e22;
}

.pagination > li.active > a {
  background-color: #e67e22;
  border-color: #e67e22;
  color: white;
}

.pagination > li > a:hover {
  background-color: #d35400; /* Un tono más oscuro */
  color: white;
}
```

## ✅ **Explicación**
1. 🏗 **Estructura Bootstrap**  
   - Se usa la clase `pagination` para aplicar estilos automáticamente.  
   - Cada `li` representa una página.  
   - `«` y `»` permiten navegar entre páginas.  
   - `class="active"` resalta la página actual.  

2. 🎨 **Estilos personalizados**  
   - Se usa un **color caramelo** (`#e67e22`) para hacer la paginación más atractiva.  
   - **Efecto hover** para cambiar el color al pasar el cursor.  
   - Fondo blanco con bordes sutiles para un mejor contraste.  

---

## 📩 Mejorando el Formulario de Contacto

Para mejorar la presentación del formulario de contacto y separarlo visualmente del contenido anterior, añadiremos una línea superior usando Bootstrap. Para ello, utilizaremos la clase `hr`, que crea una línea horizontal.

### 🛠 Pasos a seguir

1. **Ubica el formulario de contacto**  
   En el código HTML, busca la sección `<!-- Formulario de contacto -->`.

2. **Añade la línea superior de separación**  
   Justo antes del formulario, inserta la siguiente línea:

   ```html
   <hr>
   ```

3. **Mejora el estilo del formulario**  
   Para que el formulario tenga un mejor diseño con Bootstrap, encierra los campos dentro de `form-group` y utiliza clases de `form-control`:

   ```html
   <!-- Separación visual -->
   <hr>

   <!-- Formulario de contacto -->
   <h2 class="text-center">📧 Contáctanos</h2>
   <form class="well">
     <div class="form-group">
       <label for="nombre">Nombre:</label>
       <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Introduce tu nombre">
     </div>

     <div class="form-group">
       <label for="email">Email:</label>
       <input type="email" id="email" name="email" class="form-control" placeholder="Introduce tu email">
     </div>

     <div class="form-group">
       <label for="mensaje">Mensaje:</label>
       <textarea id="mensaje" name="mensaje" class="form-control" rows="4" placeholder="Escribe tu mensaje"></textarea>
     </div>

     <button type="submit" class="btn btn-primary btn-block">Enviar</button>
   </form>
   ```

4. **Explicación de los cambios**  
   - `hr`: Inserta una línea horizontal para separar visualmente el formulario del resto del contenido.
   - `h2.text-center`: Agrega un título centrado con un icono 📧.
   - `form.well`: Aplica un fondo sutil para destacar el formulario.
   - `form-group`: Agrupa cada campo con su etiqueta para un diseño más limpio.
   - `form-control`: Aplica estilos de Bootstrap a los inputs y al textarea.
   - `btn btn-primary btn-block`: Crea un botón azul de ancho completo para enviar el formulario.

---

## 🎠 Mejorando el Carrusel de Imágenes con Bootstrap 3

En esta sección aprenderás a implementar un carrusel de imágenes en Bootstrap 3 para mostrar los distintos flanes de **nuestra web** 🍮.


## 🖼 Estructura del Carrusel

El carrusel se compone de los siguientes elementos:

- Un `div` con la clase `carousel` y un `id` único.
- Un `div` interno con la clase `carousel-inner` donde van las imágenes.
- Botones de navegación (`.left` y `.right`) para cambiar de imagen.

### 📌 Código HTML del Carrusel

```html
<!-- Carrusel de imágenes -->
<div id="flanCarousel" class="carousel slide" data-ride="carousel">
  <!-- Indicadores -->
  <ol class="carousel-indicators">
    <li data-target="#flanCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#flanCarousel" data-slide-to="1"></li>
    <li data-target="#flanCarousel" data-slide-to="2"></li>
    <li data-target="#flanCarousel" data-slide-to="3"></li>
    <li data-target="#flanCarousel" data-slide-to="4"></li>
  </ol>

  <!-- Contenedor de imágenes -->
  <div class="carousel-inner">
    <div class="item active">
      <div class="row">
        <div class="col-xs-4">
          <img src="img/f01.jpeg" class="img-responsive img-rounded" alt="Flan 1">
        </div>
        <div class="col-xs-4">
          <img src="img/f02.jpeg" class="img-responsive img-rounded" alt="Flan 2">
        </div>
        <div class="col-xs-4">
          <img src="img/f03.jpeg" class="img-responsive img-rounded" alt="Flan 3">
        </div>
      </div>
    </div>
    <div class="item">
      <div class="row">
        <div class="col-xs-4">
          <img src="img/f04.jpeg" class="img-responsive img-rounded" alt="Flan 4">
        </div>
        <div class="col-xs-4">
          <img src="img/f05.jpeg" class="img-responsive img-rounded" alt="Flan 5">
        </div>
        <div class="col-xs-4">
          <img src="img/f06.jpeg" class="img-responsive img-rounded" alt="Flan 6">
        </div>
      </div>
    </div>
    <div class="item">
      <div class="row">
        <div class="col-xs-4">
          <img src="img/f07.jpeg" class="img-responsive img-rounded" alt="Flan 7">
        </div>
        <div class="col-xs-4">
          <img src="img/f08.jpeg" class="img-responsive img-rounded" alt="Flan 8">
        </div>
        <div class="col-xs-4">
          <img src="img/f09.jpeg" class="img-responsive img-rounded" alt="Flan 9">
        </div>
      </div>
    </div>
    <div class="item">
      <div class="row">
        <div class="col-xs-4">
          <img src="img/f10.jpeg" class="img-responsive img-rounded" alt="Flan 10">
        </div>
        <div class="col-xs-4">
          <img src="img/f11.jpeg" class="img-responsive img-rounded" alt="Flan 11">
        </div>
        <div class="col-xs-4">
          <img src="img/f12.jpeg" class="img-responsive img-rounded" alt="Flan 12">
        </div>
      </div>
    </div>
    <div class="item">
      <div class="row">
        <div class="col-xs-4">
          <img src="img/f13.jpeg" class="img-responsive img-rounded" alt="Flan 13">
        </div>
        <div class="col-xs-4">
          <img src="img/f14.jpeg" class="img-responsive img-rounded" alt="Flan 14">
        </div>
        <div class="col-xs-4">
          <img src="img/f15.jpeg" class="img-responsive img-rounded" alt="Flan 15">
        </div>
      </div>
    </div>
  </div>

  <!-- Controles de navegación -->
  <a class="left carousel-control" href="#flanCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#flanCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
```

---

## 🎨 Personalización con CSS

Puedes mejorar la apariencia del carrusel con los siguientes estilos:

```css
.carousel-inner .item {
  text-align: center;
}

.carousel-inner img {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
}

.carousel-control {
  background: none;
  color: #e67e22;
}

.carousel-indicators li {
  background-color: #ff9800;
}

.carousel-indicators .active {
  background-color: #e74c3c;
}
```

---

## 🚀 Explicación

1. **Estructura Base:**  
   - El carrusel está dentro de un `div` con `id="flanCarousel"` y la clase `carousel slide`.
   - Usa el atributo `data-ride="carousel"` para que empiece automáticamente.

2. **Indicadores:**  
   - Son los puntos de navegación debajo del carrusel.
   - Cada `li` corresponde a una imagen y usa `data-slide-to` para indicar su posición.

3. **Imágenes:**  
   - Están dentro de `div.item` dentro de `carousel-inner`.
   - La primera imagen lleva la clase `active`.
   - Mostrar 3 imágenes por slide
     - Cada item contiene una fila con 3 imágenes.
     - Bootstrap divide el ancho de la pantalla en 12 columnas, y cada imagen ocupa col-xs-4 (4/12 = 1/3 del ancho total).

4. **Controles de navegación:**  
   - Permiten cambiar manualmente entre imágenes.
   - Usan `glyphicon-chevron-left` y `glyphicon-chevron-right` para las flechas.


## 📌 Siguientes Pasos

1. **Ajustar los tiempos del carrusel:**  
   Si quieres que las imágenes cambien más rápido o más lento, añade este código en un script:

   ```javascript
   $('#flanCarousel').carousel({
     interval: 3000 // Cambia cada 3 segundos
   });
   ```

2. **Hacer que el carrusel se detenga al pasar el ratón por encima:**  

   ```javascript
   $('#flanCarousel').carousel('pause');
   ```

3. **Añadir descripciones a las imágenes:**  
   Puedes envolver cada imagen en un `div` con un `caption`:

   ```html
   <div class="item">
     <img src="img/f02.jpeg" alt="Flan 2">
     <div class="carousel-caption">
       <h3>Flan Buffer Overflow</h3>
       <p>Demasiado delicioso para manejar.</p>
     </div>
   </div>
   ```


## ✍️ Mejora del Footer con Bootstrap 3

Vamos a mejorar el footer de la página **nuestra web** para que:
- 📍 Esté alineado a la derecha.
- ✉️ Use `address` para mostrar la información de contacto.
- 🔗 Incluya iconos de redes sociales.
- 🌑 Tenga un fondo oscuro con texto claro.


### 1️⃣ Adaptar el Código HTML

Reemplaza el código actual del footer con el siguiente:

```html
<!-- Footer -->
<footer class="footer">
    <div class="row">
        <div class="col-xs-12 text-right">
      <address>
        <strong>nuestra web</strong><br>
        Calle del Flan 404, Servidor Remoto<br>
        <span class="glyphicon glyphicon-envelope"></span> contacto@myweb.com<br>
        <span class="glyphicon glyphicon-earphone"></span> +34 123 456 789
      </address>
      <div class="social-icons">
        <a href="#" class="btn btn-default btn-xs" aria-label="Web"><span class="glyphicon glyphicon-globe"></span></a>
        <a href="#" class="btn btn-default btn-xs" aria-label="Facebook"><span class="glyphicon glyphicon-thumbs-up"></span></a>
        <a href="#" class="btn btn-default btn-xs" aria-label="Instagram"><span class="glyphicon glyphicon-camera"></span></a>
      </div>
        </div>
    </div>
</footer>
```

---

### 2️⃣ Agregar estilos CSS

Añade estos estilos en la sección `<style>` del HTML o en tu archivo CSS externo:

```css
.footer {
  background-color: #222;
  color: #f8f9fa;
  padding: 20px 0;
  margin-top: 30px;
}

.footer address {
  font-style: normal;
  margin-bottom: 10px;
}

.footer .social-icons a {
  color: #f8f9fa;
  font-size: 20px;
  margin-left: 10px;
  text-decoration: none;
}

.footer .social-icons a:hover {
  color: #ff9800;
}
```

---

### 3️⃣ Explicación de los Cambios

🔹 **Justificación a la derecha**  
Se usa la clase `text-right` de Bootstrap dentro de la columna.

🔹 **Uso de `<address>`**  
El contenido de contacto se muestra en un formato semántico correcto.

🔹 **Iconos de Bootstrap**  
Se usan iconos de `glyphicon` para el correo y teléfono.

🔹 **Estilos oscuros**  
- Fondo oscuro (`#222`).
- Texto claro (`#f8f9fa`).
- Iconos con un efecto `hover` en naranja (`#ff9800`).

---

### 4️⃣ Resultado esperado 🎯

✅ Footer alineado a la derecha.  
✅ Información de contacto en `address`.  
✅ Iconos de redes sociales con Bootstrap.  
✅ Fondo oscuro con texto claro.


## 🚀 **Retos para mejorar la página web**
### **📌 Nivel 1 - Mejoras básicas**
1. **💡 Modernizar Bootstrap**: La web usa **Bootstrap 3**, pero la versión actual es **Bootstrap 5**. Intenta actualizarla asegurándote de que todos los componentes sigan funcionando correctamente.
2. **📏 Hacer la web más responsive**: Actualmente la web usa el grid de Bootstrap 3 (`col-md-`, `col-sm-`...), pero algunos elementos no se ven bien en móviles. Ajusta los `col-*` para optimizar la distribución en **pantallas pequeñas**.
3. **🎨 Personalizar los colores**: Sustituye algunos colores estáticos por variables de Bootstrap para hacer la personalización más fácil.
4. **🖼 Mejorar la carga de imágenes**: Algunas imágenes podrían tardar en cargar. Usa **lazy loading** (`loading="lazy"`) en las imágenes para mejorar la velocidad de la página.
5. **🔗 Añadir un "Scroll to Top"**: Agrega un botón flotante que aparezca cuando el usuario haga scroll y le permita volver arriba rápidamente.

---

### **📌 Nivel 2 - Interactividad y usabilidad**
6. **🔄 Agregar animaciones**: Usa **CSS o Bootstrap** para animar elementos como el navbar, los botones o los títulos cuando el usuario pase el mouse sobre ellos.
7. **📝 Validación en formularios**: Implementa validaciones para el formulario de contacto, asegurando que los campos sean obligatorios y que el email tenga un formato válido.
8. **📅 Agregar un selector de fecha**: En el formulario, añade un campo de **fecha de entrega de pedido** usando un **Datepicker de Bootstrap**.
9. **🛒 Simulación de carrito de compras**: Implementa un carrito de compras simple con Bootstrap y JavaScript. Los usuarios deberían poder **agregar flanes al carrito** y ver un resumen de su compra.
10. **🔄 Mejorar el carrusel**: Actualmente, el carrusel solo cambia imágenes. Mejóralo para que tenga **transiciones más suaves**, efectos de **zoom** o permita tocar en dispositivos móviles para cambiar de imagen.

---

### **📌 Nivel 3 - Funcionalidades avanzadas**
11. **🌎 Agregar un cambio de idioma**: Implementa un sistema para que la página pueda cambiar entre **español e inglés** usando JavaScript y Bootstrap.
12. **🌙 Modo oscuro**: Implementa un **modo oscuro** para la web usando Bootstrap y CSS.
13. **📊 Añadir una barra de progreso en compras**: Si un usuario compra más de X flanes, muestra una barra de progreso con un mensaje como "Te faltan 2 flanes para conseguir un descuento".
14. **🎭 Agregar un pop-up de bienvenida**: Usa un **modal de Bootstrap** que aparezca la primera vez que un usuario entra en la web con una oferta especial.
15. **💬 Añadir un chat de soporte**: Simula un chat de atención al cliente con Bootstrap, donde los usuarios puedan escribir preguntas y recibir respuestas automáticas.
