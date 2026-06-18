# 07 — Callbacks y el patrón Error-First

## Clase 27

Un **Callback** es una función que se pasa como argumento a otra función y que se invoca después de que se haya completado alguna operación o evento.

### El estándar Error-First Callback

En Node.js se estandariza el patrón **Error-First Callback**:

1. El **primer parámetro** del callback debe ser el error (si ocurre). Si todo sale bien, es `null` o `undefined`.
2. El **segundo parámetro** contiene los datos de la respuesta exitosa.

### Ejemplo (`js-foundation/03-callbacks.js`)

```javascript
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
];

function getUserById(id, callback) {
    const user = users.find(user => user.id === id);

    if (!user) {
        // Retornamos el callback con un error y null como datos
        return callback(`Usuario con id ${id} no encontrado`, null);
    }

    // Retornamos null en el error y el usuario como datos
    return callback(null, user);
}

module.exports = { getUserById };
```

### Por qué este estándar

Permite manejar errores de forma uniforme en todo Node.js. Es la base sobre la que luego se construyen las **Promesas** y `async/await`.

> 📁 Ver: `proyectos/02-bases/src/js-foundation/03-callbacks.js`
