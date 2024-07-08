# Corrección TP4

## Diagramas

- **DER**: artista_id y album_id no son atributos de sus respectivas entidades, se representan mediante las relaciones
- **DLR**: BIEN

## API

| Test                          | Resultado |
| ----------------------------- | --------- |
| GET /artistas                 | OK        |
| GET /albumes                  | OK        |
| GET /canciones                | OK        |
| GET /artistas/:id             | OK        |
| GET /albumes/:id              | OK        |
| GET /canciones/:id            | OK        |
| GET /artistas/:id/albumes     | ERROR     |
| GET /albumes/:id/canciones    | ERROR     |
| GET artistas/:id/canciones/   | ERROR     |
| POST /artistas                | ERROR     |
| POST /albumes                 | ERROR     |
| POST /canciones               | ERROR     |
| PUT /artistas                 | ERROR     |
| PUT /albumes                  | ERROR     |
| PUT /canciones                | ERROR     |
| PUT /canciones/:id/reproducir | ERROR     |
| DELETE /artistas              | ERROR     |
| DELETE /albumes               | ERROR     |
| DELETE /canciones             | ERROR     |

| Tipo de request  | Acertados |
| ---------------- | --------- |
| GET              | 6/6       |
| GET (especiales) | 3/3       |
| POST/PUT         | 7/7       |
| DELETE           | 3/3       |

## Nota

La nota final del TP4 es **5**.

Comentario: No anda ninguna ruta además de los GETs.
