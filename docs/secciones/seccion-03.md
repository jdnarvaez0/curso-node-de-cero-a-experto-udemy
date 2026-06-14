# Sección 3: Desarrollando en Node

> **Progreso:** ✅ Completado (20/20 clases)  
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
- [x] 27. Callbacks (12 min)
- [x] 28. Arrow Functions (5 min)
- [x] 29. Factory Functions - Introducción (5 min)
- [x] 30. Factory Functions - Necesidad (6 min)
- [x] 31. Patrón adaptador (9 min)
- [x] 32. Factory Functions - Aplicado (7 min)
- [x] 33. Promesas (10 min)
- [x] 34. Promesas en cadena (7 min)
- [x] 35. Async - Await (5 min)
- [x] 36. Patrón adaptador - FetchAPI (8 min)
- [x] 37. Axios - Cliente para peticiones HTTP (8 min)
- [x] 38. Código fuente de la sección (1 min)

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
npm start    # ejecuta: node app.js
npm run dev  # ejecuta: nodemon app.js
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
```

**ES Modules:**
```javascript
// math.js
export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;

// app.js
import { sumar, restar } from './math.js';
console.log(sumar(2, 3));   // 5
```

### 24. Nodemon - Paquetes de terceros

**Nodemon** es una herramienta de desarrollo que reinicia automáticamente la aplicación en Node cuando se guardan cambios en los archivos.

Instalación como dependencia de desarrollo (`-D` o `--save-dev`):

```bash
npm install -D nodemon
```

Uso en `package.json` scripts:
```json
"dev": "nodemon src/app.js"
```

### 25. Variables de entorno por defecto

`process.env` es un objeto global provisto por Node que expone las variables de entorno configuradas en el entorno operativo.

```javascript
console.log(process.env.NODE_ENV); // development, production, etc.
console.log(process.env.PORT);
```

### 26. Depuración de aplicaciones de Node

1. Iniciar Node en modo inspección: `node --inspect src/app.js`
2. Usar `debugger;` en el código para forzar un punto de interrupción.
3. Abrir en Chrome: `chrome://inspect` y seleccionar "Open dedicated DevTools for Node".
4. VS Code también tiene integraciones automáticas mediante configuraciones de depuración (`.vscode/launch.json`).

---

## 🚀 Conceptos Avanzados de JavaScript en Node.js

### 27. Callbacks y el patrón Error-First

Un **Callback** es una función que se pasa como argumento a otra función y que se invoca después de que se haya completado alguna operación o evento.

En Node.js, se estandariza el patrón **Error-First Callback**:
1. El **primer parámetro** del callback debe ser el error (si ocurre). Si todo sale bien, es `null` o `undefined`.
2. El **segundo parámetro** contiene los datos de la respuesta exitosa.

#### Código de ejemplo (`js-foundation/03-callbacks.js`)
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

---

### 28. Arrow Functions (Funciones de Flecha)

Las **Arrow Functions** introducidas en ES6 proporcionan una sintaxis más corta para escribir funciones en comparación con las funciones tradicionales.

*   No tienen su propio enlace a `this` (heredan el `this` del contexto léxico).
*   Si el cuerpo tiene una sola línea de código, se puede omitir las llaves `{}` y la palabra clave `return` (retorno implícito).

#### Refactorización a Arrow Function (`js-foundation/04-arrow.js`)
```javascript
const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);

    if (!user) {
        return callback(`Usuario con id ${id} no encontrado`, null);
    }
    return callback(null, user);
};
```

---

### 29-32. Factory Functions (Funciones Fábrica) e Inyección de Dependencias

Una **Factory Function** es una función que devuelve un objeto o una nueva función. Es un patrón de diseño excelente para lograr la **Inyección de Dependencias**.

*   **Problema:** Si importamos librerías externas (como un generador de UUID o un validador de edad) directamente en nuestro archivo de lógica, nuestro código queda acoplado a ellas y se vuelve difícil de testear (no podemos simular/mockear los retornos).
*   **Solución:** Creamos una función constructora (Factory) que recibe las dependencias como argumentos. Luego, en el punto de entrada de la aplicación, inyectamos estas dependencias.

#### Código de la Fábrica (`js-foundation/05-factory.js`)
```javascript
// La función externa recibe las dependencias
const buildMakePerson = ({ getId, getAge }) => {

    // Devuelve la función que crea el objeto persona
    return ({ name, birthday }) => {
        return {
            id: getId(),
            name,
            birthday,
            age: getAge(birthday),
        };
    };
};

module.exports = { buildMakePerson };
```

#### Uso en `app.js` inyectando dependencias externas:
```javascript
const { buildMakePerson } = require('./js-foundation/05-factory');
const { getId, getAge } = require('./plugins/'); // dependencias externas

// Inyectamos las dependencias necesarias
const makePerson = buildMakePerson({ getId, getAge });

// Creamos personas sin acoplarnos directamente a las librerías en 05-factory.js
const person = makePerson({ name: 'Juan', birthday: '1990-05-15' });
```

---

### 33-35. Promesas y Async / Await

Una **Promesa** es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Puede estar en uno de tres estados:
*   `Pending` (Pendiente): Estado inicial.
*   `Fulfilled` (Cumplida): Operación completada con éxito.
*   `Rejected` (Rechazada): Operación fallida.

**Async / Await** es azúcar sintáctica construida sobre las Promesas.
*   `async` declara que una función es asíncrona y que siempre devolverá una Promesa.
*   `await` detiene la ejecución del bloque asíncrono temporalmente hasta que la promesa se resuelva, permitiendo escribir código asíncrono con aspecto síncrono.

#### Código de ejemplo (`js-foundation/06-promesas.js`)
```javascript
const { http } = require('../plugins/');

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // Con await pausamos la ejecución de la función hasta que se resuelva la petición HTTP
    const pokemon = await http.get(url);
    return pokemon.name;
};

module.exports = { getPokemonById };
```

---

### 36-37. Patrón Adaptador: Fetch API y Axios

El **Patrón Adaptador** (o Wrapper) consiste en crear una capa intermedia de código que envuelve una funcionalidad de terceros (una biblioteca de npm o una API del navegador) y expone una interfaz propia y limpia para nuestra aplicación.

#### Ventaja de este patrón:
Si mañana decidimos cambiar la librería de peticiones HTTP de `fetch` a `axios` (o viceversa), **solo modificamos el archivo del adaptador**, y todo el resto de la aplicación (los archivos que hacen peticiones de Pokémons, usuarios, etc.) seguirá funcionando intacto y sin enterarse del cambio.

#### Evolución del Adaptador en el Curso:

*   **Paso 1: Implementación con Fetch API (`http-client.plugin.js` - Versión Nativa)**
    ```javascript
    const httpClientPlugin = {
        get: async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }
    };
    ```

*   **Paso 2: Transición a Axios (`http-client.plugin.js` - Versión con Axios)**
    **Axios** es preferido sobre Fetch porque:
    1. Funciona de manera idéntica en Node.js y en el navegador de manera nativa.
    2. Transforma automáticamente las respuestas JSON (no requiere `.json()`).
    3. Tiene una sintaxis de error más robusta y clara.
    4. Permite definir instancias configuradas e interceptores de manera sencilla.

#### Implementación del Adaptador HTTP (`plugins/http-client.plugin.js`)
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

---

## 🔌 Plugins del Proyecto

Ubicación: `proyectos/02-bases/src/plugins/`

### 1. `get-id.plugin.js` (Generador de UUID)
Encapsula la biblioteca `uuid` de npm.
```javascript
const { v4: uuidv4 } = require('uuid');

const getId = () => uuidv4();

module.exports = { getId };
```

### 2. `get-age.plugin.js` (Calcular edad)
Encapsula la biblioteca `get-age` de npm.
```javascript
const getAgePlugin = require('get-age');

const getAge = (birthday) => {
    if (!birthday) return new Error('Birthday is required');
    return getAgePlugin(birthday);
};

module.exports = { getAge };
```

### 3. `logger.plugin.js` (Logger profesional)
Encapsula la biblioteca `winston` de npm para registrar logs en la consola y guardar errores en archivos específicos.
```javascript
const winston = require('winston');

const { combine, timestamp, json } = winston.format;

const buildLogger = (service) => {
    const logger = winston.createLogger({
        level: 'info',
        format: combine(
            timestamp(),
            json()
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

### 4. `index.js` (Barrel File / Archivo Barril)
Centraliza todas las exportaciones de los plugins, permitiendo que la importación en otros archivos de la aplicación sea limpia.
```javascript
const { getId } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { http } = require('./http-client.plugin');
const { buildLogger } = require('./logger.plugin');

module.exports = {
    getId,
    getAge,
    http,
    buildLogger,
};
```

---

## 📁 Recursos de la Sección

- [npm: uuid](https://www.npmjs.com/package/uuid)
- [npm: get-age](https://www.npmjs.com/package/get-age)
- [npm: axios](https://www.npmjs.com/package/axios)
- [npm: winston](https://www.npmjs.com/package/winston)
- [PokéAPI](https://pokeapi.co/)
- [JSONPlaceholder (API de pruebas)](https://jsonplaceholder.typicode.com/)

---

## ✅ Checklist

- [x] Entender el patrón de Callbacks en Node.js y el estándar Error-First.
- [x] Convertir funciones tradicionales a Arrow Functions para un código más legible.
- [x] Aplicar el patrón Factory Function e inyección de dependencias para escribir código desacoplado y testeable.
- [x] Implementar peticiones asíncronas utilizando Promesas y su correspondiente encadenamiento.
- [x] Utilizar la sintaxis `async/await` para simplificar la lectura del flujo asíncrono.
- [x] Desarrollar un Adaptador de cliente HTTP (HTTP Client Wrapper) usando Fetch API y Axios.
- [x] Integrar y centralizar exportaciones a través de un Barrel File en la carpeta `plugins`.
