# Sección 3: Desarrollando en Node

> **Progreso:** 🔄 En progreso (8/20 clases)  
> **Duración:** 2 h 7 min

---

## 📋 Clases de la sección

### Introducción y Setup
- [x] 19. Introducción a la sección (3 min)
- [x] 20. Temas puntuales de la sección (1 min)
- [x] 21. Inicio de proyecto - Fundamentos (7 min)
- [x] 22. Package.json Scripts (6 min)
- [x] 23. Importaciones y exportaciones (9 min)
- [x] 24. Nodemon - Paquetes de terceros (8 min)
- [x] 25. Variables de entorno por defecto (7 min)
- [x] 26. Depuración de aplicaciones de Node (5 min)

### Conceptos Avanzados
- [ ] 27. Callbacks (12 min)
- [ ] 28. Arrow Functions (5 min)
- [ ] 29. Factory Functions - Introducción (5 min)
- [ ] 30. Factory Functions - Necesidad (6 min)
- [ ] 31. Patrón adaptador (9 min)
- [ ] 32. Factory Functions - Aplicado (7 min)
- [ ] 33. Promesas (10 min)
- [ ] 34. Promesas en cadena (7 min)
- [ ] 35. Async - Await (5 min)
- [ ] 36. Patrón adaptador - FetchAPI (8 min)
- [ ] 37. Axios - Cliente para peticiones HTTP (8 min)
- [ ] 38. Código fuente de la sección (1 min)

---

## 📝 Notas

### 21. Inicio de proyecto - Fundamentos

Estructura de carpetas inicial:

```
proyecto/
├── src/
│   └── app.js
└── package.json
```

Entry point (`app.js`):

```javascript
console.log('Inicio de la aplicación');
```

### 22. Package.json Scripts

Scripts útiles para el desarrollo:

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
npm start    # node app.js
npm run dev  # nodemon app.js
```

### 23. Importaciones y exportaciones

**CommonJS (por defecto):**
```javascript
// math.js
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;

module.exports = { sumar, restar };

// app.js
const { sumar, restar } = require('./math');
console.log(sumar(2, 3));   // 5
console.log(restar(5, 2));    // 3
```

**ES Modules:**
```javascript
// math.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// app.js
import { sumar, restar } from './math.js';
console.log(sumar(2, 3));   // 5
console.log(restar(5, 2));  // 3
```

### 24. Nodemon - Paquetes de terceros

**Nodemon** es una herramienta que reinicia automáticamente la aplicación cuando detecta cambios en los archivos.

Instalación:

```bash
npm install -D nodemon
```

Uso:

```bash
npx nodemon app.js
# o
npm run dev
```

### 25. Variables de entorno por defecto

`process.env` contiene las variables de entorno del sistema.

```javascript
console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
```

Buena práctica: usar un archivo `.env` para variables locales (no subir a GitHub).

```bash
npm install dotenv
```

```javascript
require('dotenv').config();
console.log(process.env.MI_VARIABLE);
```

### 26. Depuración de aplicaciones de Node

1. Usar `node --inspect app.js` para depurar con Chrome DevTools
2. Usar `debugger;` en el código para breakpoints
3. VS Code tiene integración nativa para depuración

```javascript
const saludar = (nombre) => {
  debugger;
  return `Hola ${nombre}`;
};

console.log(saludar('Juan'));
```

Ejecutar con:

```bash
node --inspect app.js
```

Luego abrir `chrome://inspect` en Chrome.

---

## 📝 Notas Pendientes

- [ ] 27. Callbacks
- [ ] 28. Arrow Functions
- [ ] 29. Factory Functions - Introducción
- [ ] 30. Factory Functions - Necesidad
- [ ] 31. Patrón adaptador
- [ ] 32. Factory Functions - Aplicado
- [ ] 33. Promesas
- [ ] 34. Promesas en cadena
- [ ] 35. Async - Await
- [ ] 36. Patrón adaptador - FetchAPI
- [ ] 37. Axios - Cliente para peticiones HTTP
- [ ] 38. Código fuente de la sección

---

## 📁 Recursos

- [Nodemon](https://www.npmjs.com/package/nodemon)
- [UUID](https://www.npmjs.com/package/uuid)
- [get-age](https://www.npmjs.com/package/get-age)
- [PokeAPI](https://pokeapi.co/)
- [Axios](https://www.npmjs.com/package/axios)
