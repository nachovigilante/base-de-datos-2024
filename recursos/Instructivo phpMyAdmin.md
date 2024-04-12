# Instructivo phpMyAdmin

Este instructivo no cubre todas las funcionalidades de phpMyAdmin, ni todas las que vimos en clase, sino que se enfoca en las tareas que no hacemos tan seguido y que pueden ser más difíciles de recordar.

## Acceso a phpMyAdmin

0. (solamente en la computadora personal) Iniciar XAMPP.
1. Abrir un navegador web.
2. Ingresar a la dirección `http://localhost/phpmyadmin/`.
3. Ingresar con el usuario `root` y la contraseña `rootroot`. (estos datos son así en las computadoras de la escuela, en una computadora personal buscar la configuración por defecto).

## Acciones útiles

### Importar una base de datos

Dado un archivo `.sql` que contiene una base de datos, se puede importar a phpMyAdmin de la siguiente manera:

1. Crear una base de datos vacía (**IMPORTANTÍSIMO**)
2. Seleccionar la base de datos creada.
3. Ir a la pestaña `Importar`.
4. Seleccionar el archivo `.sql` y dar clic en `Continuar`.

### Exportar una base de datos

Para exportar una base de datos a un archivo `.sql`:

1. Seleccionar la base de datos a exportar.
2. Ir a la pestaña `Exportar`.
3. Dejar las opciones por defecto y dar clic en `Continuar`.
