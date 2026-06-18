# 02 — Template Literals

Los **Template Literals** (delimitados por comillas invertidas o backticks `` ` ``) permiten strings multilínea y la interpolación de variables utilizando la sintaxis `${}`.

## Ejemplo

```javascript
// Template literal: backtick (`) en vez de comillas sencillas o dobles
const emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p>Gracias por su compra</p>
</div>
`;

// Exportar para usar desde app.js
module.exports = { emailTemplate };
```

**Uso en `app.js`:**
```javascript
const { emailTemplate } = require('./js-foundation/01-template');
console.log(emailTemplate);
```

## ¿Por qué usar Template Literals?

| Antes (ES5) | Ahora (ES6+) |
|---|---|
| `"Hola " + nombre + ", tienes " + edad + " años"` | `` `Hola ${nombre}, tienes ${edad} años` `` |

Mucho más legible y limpio.

> 📁 Ver también: `proyectos/02-bases/src/js-foundation/01-template.js`
