# SpoTICfy

## Consigna

Se pide **por favor** leer la consigna completa antes de empezar a programar. Las preguntas que estén respondidas en la consigna no serán respondidas en persona.

### Objetivo

El objetivo de este trabajo práctico es que puedas aplicar los conocimientos adquiridos a lo largo de toda la materia para crear una API que permita la gestión de una biblioteca de música (SpoTICfy).

### Rúbricas

Como vimos en la materia, una API es una interfaz que permite la comunicación entre distintos sistemas. Por esta razón, es sumamente importante que la API resultante de la resolución de este trabajo práctico cumpla los requerimientos que plantea el mismo.

Prestar especial atención a que, por ejemplo, si se pide que una ruta devuelva un recurso específico, la misma debe devolver el recurso correcto, no una lista que contenga al recurso.

### Grupos

Este trabajo práctico se realizará en grupos de **mínimo** 2 personas y **máximo** 3 personas.

### Instalación

Para poder hacer que el proyecto funcione, es necesario que instales las dependencias del mismo. Para ello, ejecuta el siguiente comando:

```bash
npm install
```

### Ejecución

Para ejecutar el proyecto, ejecuta el siguiente comando:

```bash
npm start
```

O bien, si querés ejecutar el proyecto en modo desarrollo, ejecuta el siguiente comando (esto hace uso de `nodemon`, la herramienta que permite tener el servidor corriendo y que se reinicie automáticamente cada vez que se modifica un archivo):

```bash
npm run dev
```

### Estructura del proyecto

El proyecto está compuesto por los siguientes archivos:

- `package.json`: Contiene la información del proyecto y las dependencias que se deben instalar.
- `index.js`: Es el archivo principal del proyecto. En él se configura el servidor y se definen las rutas de la API (hay que completarlo).
- `db.js`: Contiene la lógica para conectarse a la base de datos (hay que completarlo).
- `/controllers`: Contiene los controladores de la API para cada tabla (hay que completarlos).
- `spoticfy.sql`: Contiene el archivo SQL para importar la base de datos con phpMyAdmin.
- `consigna.md`: El archivo que estás leyendo.
- `.REST`: Contiene los requests de la API para poder probarla con la extensión de VSCode REST Client.

**Importante:**
No es necesario que agregues archivos adicionales al proyecto. Todo lo que se pide se puede resolver con los archivos que ya están en el proyecto. Simplemente tenés que completar los archivos que ya están.

### Pruebas

El archivo `.REST` no debe modificarse, ya que contiene las requests para probar la API. Podés probar la API con la extensión de VSCode REST Client haciendo uso de este archivo, o bien podés usar Postman o cualquier otra herramienta que te resulte cómoda. Es importante que, sin importar la herramienta que uses, **pruebes la API**
utilizando las requests que se encuentran en el archivo `.REST` para asegurarte de que la API funciona correctamente y en el formato que se espera.

### Base de datos

La base de datos que se brinda para este trabajo práctico está compuesta por las siguientes tablas:

- `artistas`: Contiene los artistas de la biblioteca.
- `albumes`: Contiene los álbumes de la biblioteca.
- `canciones`: Contiene las canciones de la biblioteca.

Y tienen la siguiente estructura:

#### DB - Artistas

| Campo    | Tipo          | Descripción                      |
| -------- | ------------- | -------------------------------- |
| `id`     | `int`         | Identificador único del artista. |
| `nombre` | `varchar(50)` | Nombre del artista.              |

#### DB - Álbumes

| Campo     | Tipo          | Descripción                    |
| --------- | ------------- | ------------------------------ |
| `id`      | `int`         | Identificador único del álbum. |
| `nombre`  | `varchar(50)` | Nombre del álbum.              |
| `artista` | `int`         | Identificador del artista.     |

#### DB - Canciones

| Campo            | Tipo          | Descripción                               |
| ---------------- | ------------- | ----------------------------------------- |
| `id`             | `int`         | Identificador único de la canción.        |
| `nombre`         | `varchar(50)` | Nombre de la canción.                     |
| `album`          | `int`         | Identificador del álbum.                  |
| `duracion`       | `int`         | Duración de la canción en segundos.       |
| `reproducciones` | `int`         | Cantidad de reproducciones de la canción. |

### API

**Importante**: los filtros de las requests de la API se deben realizar con `SQL` y no con `JavaScript`. Es decir, si se pide que se devuelvan los artistas cuyo nombre empiece con una letra determinada, no se debe hacer con un filter en `JavaScript` sino utilizando la condición correspondiente en la consulta de `SQL`. Este es un punto importante a tener en cuenta para la evaluación y es motivo de descalificación del punto entero si no se cumple.

La API que debe tener las siguientes rutas:

#### API - Artistas

| Método | Ruta                      | Descripción                                                         |
| ------ | ------------------------- | ------------------------------------------------------------------- |
| `GET`  | `/artistas`               | Devuelve todos los artistas.                                        |
| `GET`  | `/artistas/:id`           | Devuelve el artista con el identificador `id`.                      |
| `POST` | `/artistas`               | Crea un nuevo artista.                                              |
| `PUT`  | `/artistas/:id`           | Modifica el artista con el identificador `id`.                      |
| `DEL`  | `/artistas/:id`           | Elimina el artista con el identificador `id`.                       |
| `GET`  | `/artistas/:id/albumes`   | Devuelve todos los álbumes del artista con el identificador `id`.   |
| `GET`  | `/artistas/:id/canciones` | Devuelve todas las canciones del artista con el identificador `id`. |

#### API - Álbumes

| Método | Ruta                     | Descripción                                                       |
| ------ | ------------------------ | ----------------------------------------------------------------- |
| `GET`  | `/albumes`               | Devuelve todos los álbumes.                                       |
| `GET`  | `/albumes/:id`           | Devuelve el álbum con el identificador `id`.                      |
| `POST` | `/albumes`               | Crea un nuevo álbum.                                              |
| `PUT`  | `/albumes/:id`           | Modifica el álbum con el identificador `id`.                      |
| `DEL`  | `/albumes/:id`           | Elimina el álbum con el identificador `id`.                       |
| `GET`  | `/albumes/:id/canciones` | Devuelve todas las canciones del álbum con el identificador `id`. |

#### API - Canciones

| Método | Ruta                        | Descripción                                                                            |
| ------ | --------------------------- | -------------------------------------------------------------------------------------- |
| `GET`  | `/canciones`                | Devuelve todas las canciones.                                                          |
| `GET`  | `/canciones/:id`            | Devuelve la canción con el identificador `id`.                                         |
| `POST` | `/canciones`                | Crea una nueva canción.                                                                |
| `PUT`  | `/canciones/:id`            | Modifica la canción con el identificador `id`.                                         |
| `DEL`  | `/canciones/:id`            | Elimina la canción con el identificador `id`.                                          |
| `PUT`  | `/canciones/:id/reproducir` | Incrementa en 1 la cantidad de reproducciones de la canción con el identificador `id`. |

### Ejercicios

#### Ejercicio 0

- Crear la base de datos `spoticfy` en `phpMyAdmin` e importar el archivo `spoticfy.sql` que se encuentra en la raíz del proyecto.
- Instalar las dependencias del proyecto con `npm install`.
- Completar el archivo `db.js` con la lógica necesaria para conectarse a la base de datos.
- Probar que la API funciona, ejecutando el proyecto con `npm start` o `npm run dev` y probando con una request de tipo `GET` a la ruta `/`.

#### Ejercicio 1

Para saber que conocen bien la estructura de la base de datos, deberán realizar un DER (Diagrama de Entidad-Relación) y un DLR (Diagrama Lógico-Relacional) de la misma. Deberán subir ambos diagramas en formato de imagen en la carpeta `diagramas`.

#### Ejercicio 2

Completar todos los archivos que sean necesarios para que la API funcione correctamente. Es decir, completar los controladores de cada tabla y el archivo `index.js` con las rutas de la API.

## Entrega

La entrega del trabajo práctico se realizará a través de _un formulario que aparecerá en este lugar en un futuro muy cercano_ en el que entregarán todo el proyecto (**SIN LA CARPETA node_modules**) en un `.zip`. La fecha límite de entrega es el _(fecha a determinar en un futuro muy cercano)_.
