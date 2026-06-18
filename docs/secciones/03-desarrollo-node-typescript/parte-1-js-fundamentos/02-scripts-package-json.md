# 02 — Scripts de `package.json`

## Clase 22: Scripts útiles

```json
{
  "name": "mi-proyecto",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
```

Ejecutar con:

```bash
npm start    # ejecuta: node app.js
npm run dev  # ejecuta: nodemon app.js
```

> **`npm start` vs `npm run start`:** el primero funciona sin `run` para los scripts estándar (`start`, `test`, `stop`, `restart`). El segundo siempre funciona.
