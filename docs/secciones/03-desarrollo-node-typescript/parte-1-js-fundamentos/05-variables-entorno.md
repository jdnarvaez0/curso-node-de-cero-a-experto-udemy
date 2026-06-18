# 05 — Variables de entorno

## Clase 25: `process.env`

`process.env` es un objeto global provisto por Node que expone las variables de entorno configuradas en el entorno operativo.

```javascript
console.log(process.env.NODE_ENV); // development, production, etc.
console.log(process.env.PORT);
```

### Variables comunes

| Variable | Significado |
|---|---|
| `NODE_ENV` | `development` / `production` / `test` |
| `PORT` | Puerto en el que corre el servidor |
| `PATH` | Rutas de ejecutables del sistema |
| `HOME` / `USERPROFILE` | Carpeta home del usuario |

### Buenas prácticas

- **Nunca** hardcodear credenciales en el código.
- Usar archivos `.env` con la librería `dotenv` para desarrollo.
- En producción, configurar las variables en el servicio de hosting (Vercel, Railway, etc.).

> 📁 Ver: `proyectos/02-bases/src/js-foundation/02-destructuring.js`
