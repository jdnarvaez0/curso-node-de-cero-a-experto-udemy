# 08 — Arrow Functions

## Clase 28

Las **Arrow Functions** introducidas en ES6 proporcionan una sintaxis más corta para escribir funciones en comparación con las funciones tradicionales.

### Características

- **No** tienen su propio enlace a `this` (heredan el `this` del contexto léxico).
- Si el cuerpo tiene una sola línea de código, se pueden omitir las llaves `{}` y la palabra clave `return` (retorno implícito).

### Comparación

```javascript
// Función tradicional
function getUserById(id, callback) {
    const user = users.find((user) => user.id === id);
    if (!user) {
        return callback(`Usuario con id ${id} no encontrado`, null);
    }
    return callback(null, user);
}

// Arrow Function
const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    if (!user) {
        return callback(`Usuario con id ${id} no encontrado`, null);
    }
    return callback(null, user);
};

// Arrow Function ultra-corta (con retorno implícito)
const sumar = (a, b) => a + b;
```

> 📁 Ver: `proyectos/02-bases/src/js-foundation/04-arrow.js`
