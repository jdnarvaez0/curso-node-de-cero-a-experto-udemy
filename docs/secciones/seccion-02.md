# Sección 2: Fundamentos de Node - Primeros pasos

> **Progreso:** ✅ Completado (11/11 clases)  
> **Duración:** 58 min

---

## 📋 Temas de la sección

1. El Sistema de Módulos CommonJS
2. Template Literals (Template Strings)
3. Desestructuración de objetos (`process.env` y `console.table`)

---

## 📝 Notas

### El Sistema de Módulos CommonJS

Node.js usa **CommonJS** por defecto para organizar el código en módulos independientes. Cada archivo es un módulo con su propio ámbito.

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

---

## 💻 Código del Proyecto

> 📁 Código en: `proyectos/02-bases/src/`

### `js-foundation/01-template.js` — Template Literals

Los **Template Literals** (delimitados por comillas invertidas o backticks `` ` ``) permiten strings multilínea y la interpolación de variables utilizando la sintaxis `${}`.

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

> **¿Por qué usar Template Literals?**  
> Antes (ES5): `"Hola " + nombre + ", tienes " + edad + " años"`  
> Ahora (ES6+): `` `Hola ${nombre}, tienes ${edad} años` `` — mucho más legible y limpio.

---

### `js-foundation/02-destructuring.js` — Desestructuración

La **desestructuración** es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en variables distintas.

```javascript
// process.env tiene TODAS las variables de entorno del sistema
console.log(process.env); // objeto gigante con decenas de variables

// Desestructuración: extraemos solo las que necesitamos
const { npm_package_version, USERDOMAIN } = process.env;

// console.log muestra en línea
console.log({ npm_package_version, USERDOMAIN });

// console.table muestra en formato de tabla (más legible en consola)
console.table({ npm_package_version, USERDOMAIN });
```

**Equivalente sin desestructuración:**
```javascript
const npm_package_version = process.env.npm_package_version;
const USERDOMAIN = process.env.USERDOMAIN;
```

> **`process.env`** es un objeto global provisto por Node.js que expone el estado de las variables de entorno del sistema operativo en el momento en que se inicia el proceso.

---

## ⚙️ Instalar y ejecutar

Como en esta sección no usamos dependencias externas, puedes ejecutar el código directamente con Node.js:

```bash
cd proyectos/02-bases
node src/app.js
```

---

## 📁 Recursos

- [Node.js Modules: CommonJS](https://nodejs.org/docs/latest/api/modules.html)
- [MDN: Template Literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)
- [MDN: Destructuring assignment](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

---

## ✅ Checklist

- [x] Entender el sistema de módulos CommonJS (`module.exports` y `require`)
- [x] Usar Template Literals para strings multilínea e interpolación
- [x] Usar desestructuración de objetos con `process.env`
- [x] Utilizar `console.table` para visualizar datos de objetos en forma tabular
