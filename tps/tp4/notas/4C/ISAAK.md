# Corrección TP4

## Diagramas

- **DER**: BIEN
- **DLR**: BIEN

## API

| Test                          | Resultado |
| ----------------------------- | --------- |
| GET /artistas                 | OK        |
| GET /albumes                  | OK        |
| GET /canciones                | ERROR     |
| GET /artistas/:id             | ERROR     |
| GET /albumes/:id              | ERROR     |
| GET /canciones/:id            | ERROR     |
| GET /artistas/:id/albumes     | ERROR     |
| GET /albumes/:id/canciones    | ERROR     |
| GET artistas/:id/canciones/   | ERROR     |
| POST /artistas                | OK        |
| POST /albumes                 | OK        |
| POST /canciones               | OK        |
| PUT /artistas                 | OK        |
| PUT /albumes                  | OK        |
| PUT /canciones                | OK        |
| PUT /canciones/:id/reproducir | ERROR     |
| DELETE /artistas              | OK        |
| DELETE /albumes               | OK        |
| DELETE /canciones             | OK        |

| Tipo de request  | Acertados |
| ---------------- | --------- |
| GET              | 2/6       |
| GET (especiales) | 3/3       |
| POST/PUT         | 7/7       |
| DELETE           | 3/3       |

## Nota

La nota final del TP4 es **6**
