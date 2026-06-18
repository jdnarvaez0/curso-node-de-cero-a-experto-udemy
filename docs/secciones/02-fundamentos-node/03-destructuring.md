# 03 — Desestructuración y `process.env`

La **desestructuración** es una expresión de JavaScript que permite desempacar valores de arreglos o propiedades de objetos en variables distintas.

## Ejemplo con `process.env`

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

## Equivalente sin desestructuración

```javascript
const npm_package_version = process.env.npm_package_version;
const USERDOMAIN = process.env.USERDOMAIN;
```

> **`process.env`** es un objeto global provisto por Node.js que expone el estado de las variables de entorno del sistema operativo en el momento en que se inicia el proceso.

## Métodos útiles de `console`

| Método | Uso |
|---|---|
| `console.log()` | Imprime en línea |
| `console.table()` | Imprime en formato de tabla (ideal para objetos/arrays) |
| `console.error()` | Imprime en stderr (errores) |
| `console.warn()` | Imprime una advertencia |

> 📁 Ver también: `proyectos/02-bases/src/js-foundation/02-destructuring.js`

## 📁 Recursos

- [MDN: Template Literals](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals)
- [MDN: Destructuring assignment](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Node.js Modules: CommonJS](https://nodejs.org/docs/latest/api/modules.html)
