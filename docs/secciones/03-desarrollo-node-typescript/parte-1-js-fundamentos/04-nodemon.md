# 04 — Nodemon

## Clase 24: Nodemon - Reinicio automático

**Nodemon** es una herramienta de desarrollo que reinicia automáticamente la aplicación en Node cuando se guardan cambios en los archivos.

### Instalación

```bash
npm install -D nodemon
```

Se instala como **dependencia de desarrollo** (`-D` o `--save-dev`) porque solo se usa en desarrollo.

### Uso

En `package.json` scripts:
```json
"dev": "nodemon src/app.js"
```

Ejecutar:
```bash
npm run dev
```

Nodemon queda vigilando los archivos y reinicia la app cada vez que guardas un cambio.
