# 12 — Axios (Adaptador HTTP final)

## Clase 37

**Axios** es preferido sobre Fetch porque:

1. Funciona de manera idéntica en Node.js y en el navegador de manera nativa.
2. Transforma automáticamente las respuestas JSON (no requiere `.json()`).
3. Tiene una sintaxis de error más robusta y clara.
4. Permite definir instancias configuradas e interceptores de manera sencilla.

### Implementación del Adaptador HTTP (`plugins/http-client.plugin.js`)

```javascript
const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        // Axios devuelve un response. Desestructuramos directamente 'data'
        const { data } = await axios.get(url);
        return data;
    },
    post: async (url, body) => {
        const { data } = await axios.post(url, body);
        return data;
    },
    put: async (url, body) => {
        const { data } = await axios.put(url, body);
        return data;
    },
    delete: async (url) => {
        const { data } = await axios.delete(url);
        return data;
    },
};

module.exports = { http: httpClientPlugin };
```

### Demostración de uso

```javascript
const { http } = require('./plugins');

const run = async () => {
    const todo = await http.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('GET:', todo.title);

    const newPost = await http.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Nuevo post', body: 'Contenido', userId: 1
    });
    console.log('POST:', newPost);
};
```

> 📁 Ver: `proyectos/03-bases/src/plugins/http-client.plugin.js`

## 📦 Plugins del Proyecto

### `get-id.plugin.js` (UUID)
```javascript
const { v4: uuidv4 } = require('uuid');
const getId = () => uuidv4();
module.exports = { getId };
```

### `get-age.plugin.js` (Edad)
```javascript
const getAgePlugin = require('get-age');
const getAge = (birthday) => {
    if (!birthday) return new Error('Birthday is required');
    return getAgePlugin(birthday);
};
module.exports = { getAge };
```

### `index.js` (Barrel File)
```javascript
const { getId } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { http } = require('./http-client.plugin');

module.exports = { getId, getAge, http };
```

## 📁 Recursos de la Parte 1

- [npm: uuid](https://www.npmjs.com/package/uuid)
- [npm: get-age](https://www.npmjs.com/package/get-age)
- [npm: axios](https://www.npmjs.com/package/axios)
- [PokéAPI](https://pokeapi.co/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
