# 01 — CommonJS: `require` y `module.exports`

Node.js usa **CommonJS** por defecto para organizar el código en módulos independientes. Cada archivo es un módulo con su propio ámbito.

## Sintaxis básica

```javascript
// Exportar (en un archivo, e.g., template.js)
module.exports = { miFuncion, miVariable };

// Importar (en otro archivo, e.g., app.js)
const { miFuncion, miVariable } = require('./template');
```

> **`require`** se puede usar para importar:
> 1. Módulos nativos de Node.js (e.g., `fs`, `path`, `os`).
> 2. Módulos de terceros instalados con npm (e.g., `axios`, `winston`).
> 3. Archivos locales utilizando rutas relativas (e.g., `./js-foundation/01-template`).

## Ejemplo completo

```javascript
// math.js
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

module.exports = { sumar, restar };

// app.js
const { sumar, restar } = require('./math');
console.log(sumar(2, 3));   // 5
```

## ES Modules (alternativa moderna)

```javascript
// math.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// app.js
import { sumar, restar } from './math.js';
console.log(sumar(2, 3));   // 5
```

> 📁 Ver también: `proyectos/02-bases/src/app.js`
