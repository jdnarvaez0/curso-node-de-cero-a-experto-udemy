# 03 — Importaciones y exportaciones

## Clase 23: CommonJS vs ES Modules

### CommonJS (por defecto en Node)

```javascript
// math.js
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

module.exports = { sumar, restar };

// app.js
const { sumar, restar } = require('./math');
console.log(sumar(2, 3));   // 5
```

### ES Modules

```javascript
// math.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// app.js
import { sumar, restar } from './math.js';
console.log(sumar(2, 3));   // 5
```

> Para usar ES Modules nativos en Node, hay que añadir `"type": "module"` al `package.json` o usar la extensión `.mjs`.

> 📁 Ver: `proyectos/03-bases/src/app.js` y `proyectos/03-bases/src/js-foundation/01-template.js`
