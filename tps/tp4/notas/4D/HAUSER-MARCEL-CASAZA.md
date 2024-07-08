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
| GET /artistas/:id             | OK        |
| GET /albumes/:id              | OK        |
| GET /canciones/:id            | OK        |
| GET /artistas/:id/albumes     | ERROR     |
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
| GET              | 5/6       |
| GET (especiales) | 2/3       |
| POST/PUT         | 7/7       |
| DELETE           | 3/3       |

## Nota

Luego de la defensa individual, la nota final del TP4 es:

- **HAUSER**: 10
- **CASAZA**: Desaprobado
- **MARCEL**: Desaprobado
