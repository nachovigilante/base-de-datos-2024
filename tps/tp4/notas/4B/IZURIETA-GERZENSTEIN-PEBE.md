# Corrección TP4

## Diagramas

- **DER**: Album y Artista no son atributos de sus correspondientes entidades, se ven representados en las relaciones
- **DLR**: BIEN

## API

| Test                          | Resultado |
| ----------------------------- | --------- |
| GET /artistas                 | OK        |
| GET /albumes                  | OK        |
| GET /canciones                | OK        |
| GET /artistas/:id             | ERROR     |
| GET /albumes/:id              | ERROR     |
| GET /canciones/:id            | ERROR     |
| GET /artistas/:id/albumes     | OK        |
| GET /albumes/:id/canciones    | OK        |
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
| GET              | 3/6       |
| GET (especiales) | 3/3       |
| POST/PUT         | 7/7       |
| DELETE           | 3/3       |

## Nota

La nota final del TP4 es **9**.

Comentario: Las rutas que deben devolver un recurso en particular devuelven una lista.
