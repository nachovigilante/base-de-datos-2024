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
| GET              | 4/6       |
| GET (especiales) | 3/3       |
| POST/PUT         | 7/7       |
| DELETE           | 3/3       |

## Nota

Luego de la defensa individual, la nota final del TP4 es:

- **LERMAN**: Desaprobado
- **KUKIOLKA**: Desaprobado
- **ROZENFARB**: Desaprobado
