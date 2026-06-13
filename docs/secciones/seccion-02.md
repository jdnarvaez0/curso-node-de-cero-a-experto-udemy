# Sección 2: Fundamentos de Node - Primeros pasos

> **Progreso:** ✅ Completado (11/11 clases)  
> **Duración:** 58 min

---

## 📋 Temas de la sección

1. Template Literals (Template Strings)
2. Desestructuración de objetos (`process.env`)
3. Callbacks y el patrón Error-First
4. Arrow Functions
5. Patrón Factory Function
6. Promesas y `async/await`
7. Plugins: encapsular dependencias externas
8. Barrel Files (archivos índice)

---

## 📝 Notas

### El Sistema de Módulos CommonJS

Node.js usa **CommonJS** por defecto para organizar el código en módulos:

```javascript
// Exportar (en un archivo)
module.exports = { miFuncion };

// Importar (en otro archivo)
const { miFuncion } = require('./mi-archivo');
```

> **`require`** puede importar: módulos nativos de Node (fs, path...), paquetes npm (axios, winston...) y archivos propios (`./js-foundation/01-template`).

---

## 💻 Código del Proyecto

> 📁 Código en: `proyectos/02-bases/src/`

### `js-foundation/01-template.js` — Template Literals

Los **Template Literals** (con backticks `` ` ``) permiten strings multilínea y la interpolación de variables con `${}`.

```javascript
// Template literal: backtick (`) en vez de comilla
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
> Antes: `"Hola " + nombre + ", tienes " + edad + " años"`  
> Ahora: `` `Hola ${nombre}, tienes ${edad} años` `` — mucho más limpio.

---

### `js-foundation/02-destructuring.js` — Desestructuración

La **desestructuración** permite extraer propiedades de objetos en variables individuales de forma concisa.

```javascript
// process.env tiene TODAS las variables de entorno del sistema
console.log(process.env); // objeto gigante con decenas de variables

// Desestructuración: extraemos solo las que necesitamos
const { npm_package_version, USERDOMAIN } = process.env;

// console.log muestra en línea
console.log({ npm_package_version, USERDOMAIN });

// console.table muestra en formato de tabla (más legible)
console.table({ npm_package_version, USERDOMAIN });
```

**Equivalente sin desestructuración:**
```javascript
const npm_package_version = process.env.npm_package_version;
const USERDOMAIN = process.env.USERDOMAIN;
```

> **`process.env`** es un objeto global de Node.js que contiene las variables de entorno del sistema operativo y del proceso actual.

---

### `js-foundation/03-callbacks.js` — Callbacks (Error-First)

Un **callback** es una función que se pasa como argumento para que se ejecute más tarde.

El patrón **Error-First** es el estándar de Node.js: el primer parámetro del callback es siempre el error.

```javascript
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
];

function getUserById(id, callback) {
    const user = users.find(function(user) {
        return user.id === id;
    });

    if (!user) {
        // Error-First: primer parámetro = error
        return callback(`Usuario con id ${id} no encontrado`, null);
    }

    // Sin error: primer parámetro = null
    return callback(null, user);
}

module.exports = { getUserById };
```

**Uso en app.js:**
```javascript
const { getUserById } = require('./js-foundation/03-callbacks');

getUserById(1, function(error, user) {
    if (error) {
        console.log('Error:', error);
        return;
    }
    console.log('Usuario:', user);
});
```

> **¿Por qué Error-First?** Es la convención de Node.js para que siempre verifiques el error antes de usar el resultado. Si no verificas el error y hay uno, tu app puede crashear.

---

### `js-foundation/04-arrow.js` — Arrow Functions

Las **Arrow Functions** son una forma más concisa de escribir funciones. Hacen el código más limpio y legible.

```javascript
const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
];

// Arrow function: (params) => { cuerpo }
const getUserById = (id, callback) => {
    // Arrow function dentro de find() — forma compacta
    const user = users.find(user => user.id === id);

    if (!user) {
        return callback(`Usuario con id ${id} no encontrado`, null);
    }

    return callback(null, user);
};

module.exports = { getUserById };
```

**Comparación function vs arrow:**

| `function` tradicional | Arrow function |
|---|---|
| `function sumar(a, b) { return a + b; }` | `const sumar = (a, b) => a + b;` |
| Tiene su propio `this` | No tiene `this` propio |
| Más verbosa | Más concisa |

---

### `js-foundation/05-factory.js` — Patrón Factory

Un **Factory** es una función que devuelve otra función u objeto. Permite la **inyección de dependencias**: pasar las dependencias desde afuera en vez de crearlas internamente.

```javascript
// buildMakePerson recibe las dependencias
const buildMakePerson = ({ getId, getAge }) => {

    // Devuelve la función "configurada" con esas dependencias
    return ({ name, birthday }) => {
        return {
            id: getId(),           // UUID único
            name: name,
            birthday: birthday,
            age: getAge(birthday), // calcula la edad
        };
    };
};

module.exports = { buildMakePerson };
```

**Uso en app.js:**
```javascript
const { buildMakePerson } = require('./js-foundation/05-factory');
const { getId, getAge } = require('./plugins/');

// "Configuramos" el factory con las dependencias
const makePerson = buildMakePerson({ getId, getAge });

// Usamos la función resultante
const person = makePerson({ name: 'Juan', birthday: '1990-05-15' });
console.log(person);
// { id: 'abc-123...', name: 'Juan', birthday: '1990-05-15', age: 35 }
```

> **¿Por qué usar Factory?** Hace el código más **testeable**: en los tests puedes inyectar versiones falsas (mocks) de `getId` y `getAge` para controlar los resultados.

---

### `js-foundation/06-promesas.js` — Promesas y Async/Await

Las **Promesas** representan un valor futuro (que aún no se conoce). `async/await` es la forma moderna y legible de trabajar con ellas.

```javascript
const { http } = require('../plugins/');

// 'async' indica que la función devuelve una Promesa
const getPokemonById = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // 'await' pausa la ejecución hasta que http.get() resuelva
    const pokemon = await http.get(url);

    return pokemon.name;
};

module.exports = { getPokemonById };
```

**Tres formas de consumir la API (equivalentes):**

```javascript
// 1. Callbacks (lo más antiguo, difícil de leer)
fetch(url).then(res => {
    res.json().then(pokemon => console.log(pokemon.name));
});

// 2. Promise chain (mejor, pero puede anidarse)
fetch(url)
    .then(res => res.json())
    .then(pokemon => console.log(pokemon.name));

// 3. async/await (más legible, estándar moderno)
const pokemon = await http.get(url);
console.log(pokemon.name);
```

> **Regla de oro:** Si usas `await`, la función debe ser `async`. Un `async function` siempre devuelve una Promesa.

---

## 🔌 Plugins

Los plugins **encapsulan dependencias externas** para que el resto de la aplicación no dependa directamente de paquetes de npm.

### `plugins/get-id.plugin.js` — UUID

```javascript
const { v4: uuidv4 } = require('uuid');

const getId = () => uuidv4();
// Genera: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

module.exports = { getId };
```

### `plugins/get-age.plugin.js` — Calcular Edad

```javascript
const getAgePlugin = require('get-age');

const getAge = (birthday) => {
    if (!birthday) return new Error('Birthday is required');
    return getAgePlugin(birthday); // '1990-05-15' → 35
};

module.exports = { getAge };
```

### `plugins/http-client.plugin.js` — Cliente HTTP

```javascript
const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url);
        return data;
    }
};

module.exports = { http: httpClientPlugin };
```

### `plugins/logger.plugin.js` — Logger con Winston

Un **logger** profesional es mejor que `console.log` porque guarda los logs en archivos y distingue niveles de severidad.

```javascript
const winston = require('winston');

const buildLogger = (service) => {
    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
        ),
        transports: [
            new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
            new winston.transports.File({ filename: 'logs/combined.log' }),
        ],
    });

    return {
        log: (message) => logger.info(message, { service }),
        error: (message) => logger.error(message, { service }),
    };
};

module.exports = { buildLogger };
```

### `plugins/index.js` — Barrel File

Un **barrel file** centraliza todas las exportaciones para importar desde un solo lugar:

```javascript
// Sin barrel:
const { getId } = require('./plugins/get-id.plugin');
const { getAge } = require('./plugins/get-age.plugin');
const { http } = require('./plugins/http-client.plugin');

// Con barrel (plugins/index.js):
const { getId, getAge, http } = require('./plugins/');
```

---

## ⚙️ Instalar y ejecutar

```bash
cd proyectos/02-bases
npm install
npm start
```

---

## 📁 Recursos

- [Repositorio del curso](https://github.com/pichu2707/curso-node/tree/master/02-bases)
- [npm: uuid](https://www.npmjs.com/package/uuid)
- [npm: axios](https://www.npmjs.com/package/axios)
- [npm: winston](https://www.npmjs.com/package/winston)
- [npm: get-age](https://www.npmjs.com/package/get-age)
- [PokéAPI](https://pokeapi.co/)

---

## ✅ Checklist

- [x] Entender Template Literals y su sintaxis
- [x] Usar desestructuración con `process.env`
- [x] Implementar el patrón Error-First Callback
- [x] Migrar de `function` a Arrow Functions
- [x] Crear un Factory con inyección de dependencias
- [x] Usar `async/await` para código asíncrono
- [x] Encapsular paquetes npm en plugins propios
- [x] Usar barrel files para centralizar exportaciones
