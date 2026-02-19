# 🛠 Manual de Introducción a Postman

## ✅ Antes de empezar (para la API del servidor personal) ☁️

Si vas a hacer las pruebas de este manual contra la **API REST de tu servidor personal en la nube**, asegúrate de que:

- Has **configurado** el servidor.
- Lo tienes **en ejecución** (servidor web levantado y accesible).

Sigue el manual del repositorio para dejarlo listo: [📘 Manual de instalación del servidor personal en la nube](../manual/README.md).

## 📚 Introducción

Postman es una de las herramientas más populares para trabajar con APIs. Es utilizada tanto por ingenieros de calidad (QA) como por desarrolladores para probar y automatizar solicitudes HTTP. En este manual, aprenderemos:

- La interfaz básica de Postman.
- Cómo enviar solicitudes a una API y verificar sus respuestas.
- Cómo enviar archivos mediante Postman.
- Introducción a la automatización de pruebas con Postman.


## 📋 Requisitos

Para poder usar Postman, necesitas tener una cuenta en la plataforma. Puedes registrarte de forma gratuita o usar una cuenta de Google.

## 💻 Instalación de Postman

Si no estuviera instalado Postman en los ordenadores del laboratorio, puedes [instalarlo en tu propio ordenador](https://www.postman.com/downloads/). También existe una [versión web (en línea) que puedes usar.](https://blog.postman.com/announcing-postman-for-the-web-now-in-open-beta/)

Para instalar Postman, sigue estos pasos:

1. Abre un navegador y busca **"Postman Download"**.
2. Accede a la página de descargas de Postman y selecciona la versión compatible con tu sistema operativo (Windows, macOS, Linux).
3. Descarga e instala Postman siguiendo las instrucciones en pantalla.
4. Abre la aplicación y crea una cuenta si no tienes una. Si ya tienes una, inicia sesión. (Puedes usar una cuenta de Google para poder entrar)

## 🗂 Creación de Colecciones

Postman organiza las solicitudes en colecciones. Una colección es un grupo de solicitudes que facilitan la gestión de pruebas y automatización.

1. En la barra lateral izquierda, haz clic en **"New Collection"**.
2. Asigna un nombre, por ejemplo, **"Prueba FTI"**.
3. Agrega solicitudes dentro de esta colección para organizarlas mejor.

<div style="text-align: center;">
  <img src="img/01 - CreateCollection.PNG" alt="Crear Colección">
</div>


## 🗒 Crear una nueva request ✨

Pulsa en el texto "Add a request" o ponte encima de la colección, botón derecho y "Add Request".


<div style="text-align: center;">
  <img src="img/02 - New Request.PNG" alt="Nueva request">
</div>

## 🗒 Enviar una Solicitud GET

Vamos a hacer una primera prueba y enviar una solicitud GET a una API pública:

1. Ponle un nombre a la request; por ejemplo: **"GET a una API pública"**.
2. Selecciona el método **GET**.
3. Introduce la URL de la API. Por ejemplo:

   ```
   https://randomuser.me/api/
   ```

4. Presiona **Send** y observa la respuesta en formato JSON.


<div style="text-align: center;">
  <img src="img/03 - Send Request.PNG" alt="Send request">
</div>


Ejemplo de respuesta JSON:

```JSON
{
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "John",
        "last": "Doe"
      },
      "email": "johndoe@example.com"
    }
  ]
}
```

En la imagen de abajo se puede ver la respuesta (Response) de la API en la interfaz de Postman.


<div style="text-align: center;">
  <img src="img/04 - Response.PNG" alt="Response">
</div>

Podemos observar:

- El código de estado de la respuesta (200 OK).
- La duración de la solicitud.
- El body de la respuesta en formato JSON.
- Otras pestañas como **Headers**, **Cookies**, **Tests Results**, etc.

Vamos a hacer clic en **Headers** para ver los encabezados de la respuesta.

<div style="text-align: center;">
  <img src="img/05 - Response headers.PNG" alt="Response">
</div>


## 🗒 Crear una nueva request en Postman para acceder a una web HTML

Para realizar una solicitud GET en Postman y descargar el HTML de una página web, sigue estos pasos:

1. Pulsa en el texto **"Add a request"** o sitúate encima de la colección, haz clic derecho y selecciona **"Add Request"**.

<div style="text-align: center;">
  <img src="img/02 - New Request.PNG" alt="Nueva request">
</div>

## 🗒 Enviar una Solicitud GET para obtener HTML

Vamos a realizar una solicitud GET a una página web sencilla para comprobar cómo Postman descarga su contenido en formato HTML. Crea una nueva Request

<div style="text-align: center;">
  <img src="img/06 - New Request HTML.PNG" alt="New Request HTML">
</div>

1. Ponle un nombre a la request, por ejemplo: **"Get HTML de ejemplo"**.
2. Selecciona el método **GET**.
3. Introduce la URL de la página web. Vamos a usar la URL de **example.com**, un sitio de prueba oficial:

   ```html
   https://example.com
   ```

4. Presiona **Send** y observa la respuesta en formato HTML.

💡 Nota: ¿sabrías encontrar los **headers** de la request?

### 🔍 Analizando la respuesta

Cuando se envía la solicitud, Postman mostrará la respuesta en formato HTML en la pestaña **Body**.

Ejemplo de respuesta:

<div style="text-align: center;">
  <img src="img/07 - Response HTML.PNG" alt="HTML Response">
</div>

Podemos observar:

- El código de estado de la respuesta (200 OK).
- La duración de la solicitud.
- El body de la respuesta con el código HTML de la página.
- Otras pestañas como **Headers**, **Cookies**, **Tests Results**, etc.

Si hacemos clic en la pestaña **Headers**, veremos los encabezados de la respuesta.

<div style="text-align: center;">
  <img src="img/08 - HTML Response headers.PNG" alt="HTML Response headers">
</div>

Los encabezados contienen información adicional, como el tipo de contenido (`Content-Type: text/html`).

💡 Nota: ¿sabrías encontrar los **headers** de las requests anteriores?

## 🧩 Ejercicios

1. Realiza una solicitud HEAD a la URL de **example.com** y observa la respuesta. ¿Por qué no tiene body?
2. Realiza una solicitud PUT a la URL de **https://randomuser.me/api/** y observa la respuesta. Prueba también con POST y DELETE.

## 🌐 Ejemplos: API REST del servidor personal en la nube

En esta sección vas a practicar con una API REST que **sí permite** operaciones de escritura (POST/DELETE), a diferencia de muchas APIs públicas.

### ✅ Antes de empezar

#### ☁️ Servidor en ejecución

Verifica que el servidor está configurado y en marcha siguiendo el manual: [📘 Manual de instalación del servidor personal en la nube](../manual/README.md).

#### 🗃️ Fichero de entidades (`entidades.json`)

Nuestro servidor personal en la nube, como hemos explicado en el manual y en clase, es un servidor básico sin base de datos. Todas las entidades se almacenan en un único fichero llamado `entidades.json`, situado en la raíz del servidor. Las operaciones `POST` y `DELETE` modifican directamente este fichero, ya que actúa como nuestra “base de datos”.

Por este motivo, se recomienda encarecidamente hacer una **copia de seguridad** de `entidades.json` cuando esté poblado con datos. Si borras el fichero por error o cometes algún fallo al modificarlo, podrías perder información; una copia te permitirá restaurarlo fácilmente.

### 🔗 Endpoint base

El endpoint base tiene esta forma:

```
http://virtual.infor.uva.es:<puerto_http>/abcd1234/api/entidades
```

- Sustituye `<puerto_http>` por el **puerto** que se te ha asignado.
- Sustituye `abcd1234` por tu **identificador** asignado.

### 🧾 Tabla resumen de la API que proporciona el servidor personal en la nube

| Verbo HTTP | Ruta                          | Parámetros               | Acción        | Código respuesta | Descripción                                  |
| ---------- | ----------------------------- | ------------------------ | ------------- | ---------------- | -------------------------------------------- |
| GET        | `/abcd1234/api/entidades`     | —                        | Obtener todas | 200              | Devuelve todas las entidades en formato JSON |
| GET        | `/abcd1234/api/entidades/:id` | `id` (URL)               | Obtener una   | 200 / 404        | Devuelve una entidad por ID                  |
| POST       | `/abcd1234/api/entidades`     | JSON body `{id, nombre}` | Crear         | 201 / 400        | Crea una nueva entidad                       |
| DELETE     | `/abcd1234/api/entidades/:id` | `id` (URL)               | Eliminar      | 200 / 404        | Borra una entidad por ID                     |

### 🧪 Cómo montarlo en Postman (recomendado) 🧰

En Postman, crea una colección (por ejemplo, **"Servidor personal"**) y define estas variables en un **Environment**:

- `host`: `http://virtual.infor.uva.es`
- `puerto_http`: (tu puerto asignado)
- `ruta`: `abcd1234` (tu identificador asignado)

Luego usa esta URL base en las requests:

```
{{host}}:{{puerto_http}}/{{ruta}}/api/entidades
```

### 1) GET — Obtener todas las entidades

- **Método**: GET
- **URL**:

```
{{host}}:{{puerto_http}}/{{ruta}}/api/entidades
```

Si todo va bien, el servidor responderá con `200` y un JSON (normalmente una lista/array) 📦.

### 2) GET — Obtener una entidad por ID

- **Método**: GET
- **URL** (ejemplo con id `1`):

```
{{host}}:{{puerto_http}}/{{ruta}}/api/entidades/1
```

Resultados esperados:

- `200`: existe la entidad y devuelve su JSON.
- `404`: no existe una entidad con ese ID.

### 3) POST — Crear una nueva entidad

- **Método**: POST
- **URL**:

```
{{host}}:{{puerto_http}}/{{ruta}}/api/entidades
```

- **Headers**:

```
Content-Type: application/json
```

- **Body**: selecciona `raw` → `JSON` y envía, por ejemplo:

```json
{
  "id": 1,
  "nombre": "Entidad de ejemplo"
}
```

Resultados esperados:

- `201`: creada correctamente.
- `400`: JSON inválido, campos faltantes, o `id`/`nombre` no cumplen el formato esperado.

💡 Nota: si pruebas varias veces, evita reutilizar el mismo `id` si tu servidor no permite duplicados.

### 4) DELETE — Eliminar una entidad por ID

- **Método**: DELETE
- **URL** (ejemplo con id `1`):

```
{{host}}:{{puerto_http}}/{{ruta}}/api/entidades/1
```

Resultados esperados:

- `200`: eliminada correctamente.
- `404`: no existe una entidad con ese ID.

### ✅ Mini-secuencia sugerida de pruebas ✅

1. `GET /entidades` (para ver el estado inicial)
2. `POST /entidades` (para crear una)
3. `GET /entidades/:id` (para comprobar que existe)
4. `DELETE /entidades/:id` (para borrarla)
5. `GET /entidades` (para verificar que ya no está)



## 🧭 Explorando otras APIs 🌍

Como hemos visto en los ejemplos anteriores, podemos realizar solicitudes a diferentes APIs para obtener datos. Pero, en la mayoría de los casos, no se puede hacer un POST o DELETE a una API pública: lo habitual es que las APIs públicas **solo permitan GET**.

Vamos a probar con una API de datos públicos que **sí permite** hacer PUT, POST, DELETE, etc. La API que vamos a usar es: [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

Primero visita la página y acostúmbrate a revisar la documentación de la API. Te darás cuenta que existen varios recursos que podemos usar:


<div style="text-align: center;">

| Recurso     | Cantidad  |
|:----------:|:--------:|
| [`/posts`](https://jsonplaceholder.typicode.com/posts)   | 100 posts  |
| [`/comments`](https://jsonplaceholder.typicode.com/comments) | 500 comments  |
| [`/albums`](https://jsonplaceholder.typicode.com/albums)   | 100 albums  |
| [`/photos`](https://jsonplaceholder.typicode.com/photos)   | 5000 photos  |
| [`/todos`](https://jsonplaceholder.typicode.com/todos)    | 200 todos  |
| [`/users`](https://jsonplaceholder.typicode.com/users)    | 10 users  |


</div>


A todos estos recursos les podremos hacer GET, PUT, POST y DELETE. Obviamente, la API no guarda los datos (si no, cualquiera podría modificarlo todo). Para las prácticas está genial: acepta la petición, pero **no persiste** los cambios.

Lo ideal para poder hacer cambios en una API sería tener una API privada, y acceder con una autorización, lo que se conoce como una `API Key`.
Pero eso ya es otro tema.


Vamos a probar con el recurso `/posts`:


## 🧩 Ejercicios

1. Usando Postman, realiza una solicitud GET a la URL de **https://jsonplaceholder.typicode.com/posts** y observa la respuesta. ¿Cuántos posts hay?
2. Realiza una solicitud POST a la URL de **https://jsonplaceholder.typicode.com/posts**. En el body de la request deberás añadir el siguiente JSON:

```json
{
  "title": "Mi primer post",
  "body": "Este es mi primer post en la API",
  "userId": 1
}
```

No te olvides de marcar que será de tipo `RAW` y que el formato es `JSON`.

Además, debes informar al servidor del tipo de contenido que le estás enviando. Para ello, añade (o modifica) el header:

```
Content-Type: application/json; charset=UTF-8
```

Ahora pulsa el botón `SEND` 🚀

Si todo ha ido correctamente, deberías tener una respuesta de este estilo:

<div style="text-align: center;">
  <img src="img/09 - Respuesta POST.PNG" alt="Respuesta POST">
</div>


3. Vamos a borrar un recurso. Supongamos que queremos eliminar el `post` con identificador `101`. Recuerda que en las API REST los recursos se identifican en la propia URL. Por lo tanto, debemos **realizar** una request DELETE a la URL **https://jsonplaceholder.typicode.com/posts/101**.

  ⚠️ Ojo: fíjate en que el identificador va a la derecha del recurso.
   
  En este caso, no necesitamos un body y en las cabeceras no tenemos que marcar el tipo de contenido, ya que no estamos enviando nada.


Si todo ha ido correctamente, deberías tener una respuesta de este estilo:

<div style="text-align: center;">
  <img src="img/10 - Respuesta DELETE.PNG" alt="Respuesta DELETE">
</div>


4. Haz todas las pruebas que estimes oportunas con los recursos que te hemos indicado. 


## 🔑 Autenticación en APIs privadas 🔐

Algunas APIs requieren autenticación mediante **tokens**. Normalmente, la forma de autenticarse es mediante una **API Key** (un token) que se envía en la cabecera de la request.

La API Key es un mecanismo distinto al de usuario y contraseña: no se envía en el body, sino en un header.

La API Key te la tienen que proporcionar, y normalmente se envía en la cabecera de la request con el nombre `Authorization`.

Vamos a hacer pruebas con ello usando:

## 🐱 The Cat API

¿Te gustan los gatos? Espero que sí 😺, porque vamos a hacer pruebas con una API de gatos. La API que vamos a usar es: [https://thecatapi.com/](https://thecatapi.com/)

The Cat API es una API que nos permite trabajar con imágenes de gatos. Para poder usarla, necesitamos una API Key.

Por lo tanto, lo primero que tenemos que hacer es solicitar una API Key. Para ello, visita la página de [The Cat API](https://thecatapi.com/) y regístrate para obtener tu API Key. Haz clic en el botón `Get API Key` y sigue los pasos.

<div style="text-align: center;">
  <img src="img/11 - TheCatAPI GetAPIKey.PNG" alt="Get Your API Key">
</div>

Si vas a usar la versión gratuita, haz clic en el botón `GET FREE ACCESS` 🆓.

Te llevará a una página donde deberás rellenar:

- **Email**: usa un correo válido, ya que recibirás un correo con tu API Key (es personal e intransferible). Es como una clave: no compartirías tu contraseña, ¿verdad?
- **App description**: aquí deberías poner una descripción en inglés de para qué lo vas a usar. Por ejemplo, "I'm using it to learn how to use APIs with Postman".
- **What type of project will you use the API for?**: aquí deberías elegir "School/University Project".
- No te recomiendo que marques **"I would like to receive occasional emails about new features and updates"** ya que eventualmente te enviarán correos, y a nadie nos gusta que nos llenen el correo con mensajes no deseados.
- Lo siguiente que debes hacer es revisar tu correo: te enviarán un email con tu API Key (personal e intransferible) 🔑.
- GUARDA CON CARIÑO TU API KEY, ya que la necesitarás para poder hacer las pruebas.

## 📄 Revisar la documentación

Siempre es buena idea revisar la documentación para poder hacer las peticiones siguiendo el estándar de la API. En este caso, la documentación de la API de gatos la puedes encontrar en [la documentación](https://documenter.getpostman.com/view/4016432/RWToRJCq)


## 🧰 Configurar el entorno

Te recomiendo que crees una nueva `Collection` y la llames `The Cat API`. Dentro de esta colección, crea todas las requests que necesitemos para poder trabajar con la API de gatos.

La base de todas las llamadas será: `https://api.thecatapi.com/v1/`

A la derecha tendremos los recursos que podemos usar: como por ejemplo `images`, `breeds`, `categories`, etc.

La unión de la base y el recurso nos dará la URL (lo que se llama **`endpoint`**) y es la que debemos usar en nuestras requests.

## Request: Buscar imágenes de gatos

**Verbo HTTP**: GET

**Endpoint**: `https://api.thecatapi.com/v1/images/search`

Con esto podríamos hacer una búsqueda. No es necesario poner la API Key ni pasar más parámetros.

Prueba a realizar una request GET a la URL de **https://api.thecatapi.com/v1/images/search** y observa la respuesta. ¿Qué te devuelve?

Obtendrás algo como:

```json
[
    {
        "id": "868",
        "url": "https://cdn2.thecatapi.com/images/868.jpg",
        "width": 728,
        "height": 522
    }
]
```	

Si haces clic en la URL, Postman creará otra request para ver la imagen. El resultado es aleatorio: a ti te devolverá uno distinto al mío y al de tus compañeros (aunque existe una pequeña probabilidad de que coincida).

### Vamos a parametrizar la Request

En la `Request` que acabamos de hacer, vamos a parametrizarla para que podamos hacer búsquedas de imágenes de tamaño concreto.

Tenemos los siguientes parámetros:

| Key          | Required | Description |
|-------------|----------|-------------|
| size        | optional | The size of image to return - `small`, `med` or `full`. `small` is perfect for Discord. Defaults to `med`. |
| mime_types  | optional | Comma-delimited string of the image types to return: `gif`, `jpg`, or `png`. Defaults to return all types `jpg,gif,png`. |
| format      | optional | Response format: `json` or `src`. `src` will redirect straight to the image, making it useful for embedding in an `img` tag. Defaults to `json`. |
| order       | optional | The order to return results in: `RANDOM`, `ASC`, or `DESC`. If `ASC` or `DESC` is passed, pagination headers will be included in the response. Default is `RANDOM`. |
| page        | optional | Integer - used for paginating through results. Only used when `order` is `ASC` or `DESC`. |
| limit       | optional | Integer - number of results to return. Without an API Key, you can only pass `1`. With a Key, you can pass up to `25`. Default is `1`. |
| category_ids | optional | Comma-delimited string of integers matching the IDs of the categories to filter the search. These categories can be found in the `/v1/categories` request. e.g., `category_ids=2`. |
| breed_ids   | optional | Comma-delimited string of integers matching the IDs of the breeds to filter the search. These breeds can be found in the `/v1/breeds` request. |
| has_breeds  | optional | Only return images with breed data attached. Integer: `0` or `1`. Default is `0`. |


Nosotros vamos a usar el parámetro `size` para poder hacer búsquedas de imágenes de tamaño concreto. Pondremos el valor `small` para que nos devuelva imágenes pequeñas.

Eso lo añadiremos en `Query Params` y pondremos `size` como `Key` y `small` como `Value`.

Prueba a ejecutar la request y observa la respuesta. ¿Qué te devuelve? ¿De qué tamaño es la imagen?

## 🗒 Enviar una Solicitud POST con Datos

El objetivo es subir una imagen de un gato a la API. Para ello, necesitamos una imagen de un gato. Puedes buscarla en cualquier buscador de imágenes en internet o subir una foto de tu gato, eso sería lo ideal 😸

Aquí vamos a tener que usar la API Key que hemos obtenido anteriormente, ya que necesitamos autenticarnos para poder subir la imagen.

Vamos a componer una nueva Request de tipo POST para subir una imagen de un gato a la API.


**Verbo HTTP**: POST

**Endpoint**: `https://api.thecatapi.com/v1/images/upload`

**En la sección headers**

**x-api-key**: `tu API Key`

**En la sección body**

Debes marcar la opción `form-data` y añadir una nueva key con el nombre `file`, el tipo debes cambiarlo de 'text' a 'file' y seleccionar la imagen que quieres subir buscándola donde la hubieras guardado.

Puedes pulsar el botón `SEND` y observar la respuesta. ¿Qué te devuelve?

Si todo ha ido de manera correcta recibirás un código `201 Created` y un JSON con la información de la imagen que has subido con la siguiente forma:

```json
{
  "id":"MTQwUA4X3",
  "url":"https://cdn2.thecatapi.com/images/MTQwUA4X3.jpg",
  "width":2500,
  "height":1667,
  "original_filename":"gato.jpg",
  "pending":0,
  "approved":1
}
```

Si te fijas, ahora puedes buscar por tu imagen en la URL que te devuelve la API. En mi caso, la URL es `https://cdn2.thecatapi.com/images/MTQwUA4X3.jpg` pero en tu caso tendrás una diferente.

Te invito a que hagas clic en la URL para que Postman monte una request de tipo GET para ver la imagen. 

¿Qué te parece tu gato?

¿Has conseguido llegar hasta este punto?

