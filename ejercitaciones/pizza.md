# Ejercitación Pizza

Esta ejercitación **no** es para entregar. Se puede realizar de a 2 o 3 compañeros.

## Consigna

1. Realizar un repositorio de GitHub para alojar la ejercitación
2. Crear una base de datos que contenga una única tabla "Pizza" con la siguiente estructura:

    | Campo       | Tipo        |
    | ----------- | ----------- |
    | id          | int (_AI_)  |
    | nombre      | varchar(50) |
    | libreGluten | boolean     |
    | importe     | int         |
    | descripcion | text        |

3. Crear un proyecto de `Node.js` e instalar `mysql2`
4. Programar las siguientes funciones:
    - `getAll()`: devuelve todas las pizzas presentes en la tabla "Pizza" de la base de datos
    - `insert(pizza)`: recibe un objeto con todas las propiedades de una pizza (menos el id) y la inserta en la base de datos
    - `update(pizza)`: recibe un objeto con el id (obligatorio) y los campos que se quieren actualizar y modifica la pizza correspondiente en la base de datos
    - `deleteById(id)`: recibe el id de una pizza y la elimina en la base de datos

## Segunda parte (express)

Una vez realizado el CRUD para la tabla de Pizza, ahora deberán crear un servidor de express (pueden seguir la cheatsheet de express).

Dentro del servidor, deberán crear:

- Una ruta GET para devolver un JSON que contenga todas las pizzas.
- Una ruta POST para insertar una pizza. Deberá contestar únicamente con el status 200 OK.
- Una ruta PUT para actualizar una pizza.
- Una ruta DELETE para eliminar una pizza.

Encontrarán toda la información necesaria para realizar esta parte la ejercitación en la cheatsheet de express.