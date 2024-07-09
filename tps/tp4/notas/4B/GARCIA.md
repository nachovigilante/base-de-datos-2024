# Corrección TP4

## Diagramas

- **DER**: ¿Qué es "Terminador"?
- **DLR**: Las flechas no están correctas del todo

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
| GET artistas/:id/canciones/   | ERROR     |
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
| GET (especiales) | 0/3       |
| POST/PUT         | 7/7       |
| DELETE           | 3/3       |

## Nota

La nota final del TP4 es **7**.

Comentario: los errores encontrados en las rutas GET consisten en su mayoría en problemas repetidos en las queries (usos de campos inexistentes y/o _typos_). Además en las rutas para devolver recursos individuales devuelve una lista.
