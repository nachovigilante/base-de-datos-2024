# Corrección TP4

## Diagramas

- **DER**: BIEN
- **DLR**: BIEN

## API

| Test                          | Resultado |
| ----------------------------- | --------- |
| GET /artistas                 | OK        |
| GET /albumes                  | ERROR     |
| GET /canciones                | ERROR     |
| GET /artistas/:id             | ERROR     |
| GET /albumes/:id              | ERROR     |
| GET /canciones/:id            | ERROR     |
| GET /artistas/:id/albumes     | ERROR     |
| GET /albumes/:id/canciones    | ERROR     |
| GET artistas/:id/canciones/   | OK        |
| POST /artistas                | OK        |
| POST /albumes                 | OK        |
| POST /canciones               | OK        |
| PUT /artistas                 | OK        |
| PUT /albumes                  | OK        |
| PUT /canciones                | OK        |
| PUT /canciones/:id/reproducir | OK        |
| DELETE /artistas              | OK        |
| DELETE /albumes               | OK        |
| DELETE /canciones             | OK        |

| Tipo de request  | Acertados |
| ---------------- | --------- |
| GET              | 1/6       |
| GET (especiales) | 1/3       |
| POST/PUT         | 7/7       |
| DELETE           | 3/3       |

## Nota

Comentario: todos los GET (menos el primero de artistas) devuelven datos en un formato que no es el especificado.

Luego de la defensa individual, la nota final del TP4 es:

- **MERANI**: 8
- **DEJTIAR**: Pendiente
- **SUED**: Pendiente
