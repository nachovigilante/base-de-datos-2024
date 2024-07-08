# Corrección TP4

## Diagramas

- **DER**: No entrega
- **DLR**: No entrega

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
| POST /artistas                | OK        |
| POST /albumes                 | OK        |
| POST /canciones               | ERROR     |
| PUT /artistas                 | OK        |
| PUT /albumes                  | OK        |
| PUT /canciones                | OK        |
| PUT /canciones/:id/reproducir | OK        |
| DELETE /artistas              | OK        |
| DELETE /albumes               | OK        |
| DELETE /canciones             | OK        |

| Tipo de request  | Acertados |
| ---------------- | --------- |
| GET              | 6/6       |
| GET (especiales) | 0/3       |
| POST/PUT         | 6/7       |
| DELETE           | 3/3       |

## Nota

La nota final del TP4 es **7** (entrega fuera de fecha y pendiente de defensa individual)
