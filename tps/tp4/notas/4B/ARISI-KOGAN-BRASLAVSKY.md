# Corrección TP4

## Diagramas

- **DER**: No entregado
- **DLR**: No entregado

## API

| Test                          | Resultado |
| ----------------------------- | --------- |
| GET /artistas                 | OK        |
| GET /albumes                  | OK        |
| GET /canciones                | OK        |
| GET /artistas/:id             | OK        |
| GET /albumes/:id              | ERROR     |
| GET /canciones/:id            | ERROR     |
| GET /artistas/:id/albumes     | OK        |
| GET /albumes/:id/canciones    | OK        |
| GET artistas/:id/canciones/   | OK        |
| POST /artistas                | OK        |
| POST /albumes                 | ERROR     |
| POST /canciones               | OK        |
| PUT /artistas                 | OK        |
| PUT /albumes                  | ERROR     |
| PUT /canciones                | OK        |
| PUT /canciones/:id/reproducir | OK        |
| DELETE /artistas              | OK        |
| DELETE /albumes               | ERROR     |
| DELETE /canciones             | OK        |

| Tipo de request  | Acertados |
| ---------------- | --------- |
| GET              | 4/6       |
| GET (especiales) | 3/3       |
| POST/PUT         | 5/7       |
| DELETE           | 2/3       |

## Nota

La nota final del TP4 es **7.5** (supeditado a presentación de diagramas)
