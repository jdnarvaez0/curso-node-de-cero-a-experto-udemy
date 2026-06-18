# 11 — Patrón Adaptador (HTTP)

## Clases 31 y 36

El **Patrón Adaptador** (o Wrapper) consiste en crear una capa intermedia de código que envuelve una funcionalidad de terceros (una biblioteca de npm o una API del navegador) y expone una interfaz propia y limpia para nuestra aplicación.

### Ventaja principal

Si mañana decidimos cambiar la librería de peticiones HTTP de `fetch` a `axios` (o viceversa), **solo modificamos el archivo del adaptador**, y todo el resto de la aplicación (los archivos que hacen peticiones de Pokémons, usuarios, etc.) seguirá funcionando intacto y sin enterarse del cambio.

### Paso 1: Implementación con Fetch API

```javascript
const httpClientPlugin = {
    get: async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
};
```

### Limitaciones de Fetch

1. No transforma automáticamente las respuestas JSON (requiere `.json()`).
2. No maneja errores HTTP de forma estándar (un 404 NO rechaza la promesa).
3. La API es menos ergonómica que Axios.

> 📁 Ver: `proyectos/02-bases/src/plugins/http-client.plugin.js`
