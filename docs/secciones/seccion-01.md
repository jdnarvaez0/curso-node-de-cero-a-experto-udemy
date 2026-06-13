# Sección 1: Introducción

> **Progreso:** ✅ Completado (7/7 clases)  
> **Duración:** 30 min

---

## 📋 Temas de la sección

1. ¿Qué es Node.js y por qué aprenderlo?
2. Instalación de Node.js
3. Configuración del entorno de desarrollo
4. El módulo `fs` (File System)
5. El Event Loop y el modelo asíncrono
6. Buffer vs String en Node.js

---

## 📝 Notas

### ¿Qué es Node.js?

Node.js es un **entorno de ejecución para JavaScript** construido con el motor V8 de Google Chrome. Permite ejecutar JavaScript en el **servidor**, fuera del navegador, usando el mismo lenguaje tanto en frontend como en backend.

### Características principales

- **Asíncrono y basado en eventos**: No bloquea el hilo con operaciones de I/O (lectura de archivos, consultas a BD, etc.).
- **Single-threaded con Event Loop**: Un solo hilo maneja miles de conexiones concurrentes gracias al loop de eventos.
- **Gran ecosistema**: `npm` es el registro de paquetes más grande del mundo.
- **Full-stack JavaScript**: mismo lenguaje en frontend y backend.

### Instalación

1. Descargar desde [nodejs.org](https://nodejs.org) (versión LTS recomendada)
2. Verificar la instalación:

```bash
node -v    # versión de Node.js
npm -v     # versión del gestor de paquetes
```

### REPL de Node.js

El REPL (**R**ead-**E**val-**P**rint **L**oop) es una consola interactiva para probar código rápidamente.

```bash
node
> 1 + 1
2
> console.log('Hola desde REPL')
Hola desde REPL
> .exit    # salir
```

---

## 💻 Código del Proyecto

> 📁 Código en: `proyectos/01-fundamentos/`

### `app.js` — Hola Mundo

El programa más simple: imprimir un mensaje en consola.

```javascript
const message = "Hola Mundo";
console.log(message);
```

**Ejecutar:**
```bash
node app.js
```

---

### `app2.js` — Módulo `fs`: Leer y Modificar Archivos

El módulo `fs` (File System) permite interactuar con el sistema de archivos del servidor.

**Conceptos clave:**
- `readFileSync`: lee un archivo de forma **síncrona** (bloquea el hilo hasta terminar)
- `writeFileSync`: escribe en un archivo de forma **síncrona**
- Las **expresiones regulares** `/patrón/flags` permiten buscar y reemplazar texto

```javascript
const fs = require('fs');

// Leer el archivo completo como string
const data = fs.readFileSync('Readme-Angular.md', 'utf8');

// replace con regex: /React/ig
//   'i' = insensible a mayúsculas (React, react, REACT)
//   'g' = reemplaza TODAS las ocurrencias (global)
const newData = data.replace(/React/ig, 'Angular');

// Guardar el archivo modificado
fs.writeFileSync('Readme-Angular.md', newData);
```

> **Síncrono vs Asíncrono:** `readFileSync` bloquea Node.js hasta que termine. En aplicaciones reales se prefiere `readFile` (asíncrono) para no bloquear el servidor.

---

### `app3.js` — Manipulación de Strings y Arrays

Contar cuántas veces aparece una palabra en un archivo de texto.

**Conceptos clave:**
- `split(separador)`: divide un string en un array
- `filter(condición)`: crea un nuevo array con los elementos que cumplen la condición
- `.length`: cantidad de elementos en el array

```javascript
const fs = require('fs');

const content = fs.readFileSync('Readme-Angular.md', 'utf8');

// Dividir el texto en palabras (por espacios)
const wordCount = content.split(' ');

// Filtrar las palabras que contienen 'react'
const reactWords = wordCount.filter(word => 
    word.toLowerCase().includes('react')
).length;

console.log('Total de palabras:', wordCount.length);
console.log('Ocurrencias de "react":', reactWords);
```

---

### `app4.js` — El Event Loop

El Event Loop es el corazón de Node.js. Permite ejecutar código asíncrono sin bloquear el programa.

**Concepto clave:** `setTimeout` registra una función para ejecutarse después de X milisegundos. Node.js continúa ejecutando el código mientras espera.

```javascript
console.log('Inicio de programa');

// Este setTimeout espera 3 segundos
setTimeout(() => {
    console.log('Primer Timeout - después de 3 segundos');
}, 3000);

// Este setTimeout espera solo 1 segundo
setTimeout(() => {
    console.log('Segundo Timeout - después de 1 segundo');
}, 1000);

console.log('Fin del código síncrono');

// Orden de salida:
// 1. "Inicio de programa"
// 2. "Fin del código síncrono"
// 3. "Segundo Timeout" (1 seg)
// 4. "Primer Timeout"  (3 seg)
```

> **¿Por qué este orden?** El código síncrono siempre se ejecuta primero. Los `setTimeout` se registran en el Event Loop y se ejecutan cuando el hilo está libre.

---

### `gtm.js` — Buffer vs String

Al leer archivos **sin** especificar `'utf8'`, Node.js devuelve un **Buffer** (datos binarios crudos).

```javascript
function cities() {
    const fs = require('fs');

    // Sin 'utf8' → devuelve un Buffer (Uint8Array)
    const text = fs.readFileSync('text.txt');

    // Buffer también tiene el método includes()
    const range = text.includes('range-3');

    if (!range) {
        return 'range-3 no encontrado en el archivo';
    }

    return 'range-3 encontrado en el archivo';
}

console.log(cities());
```

> **Buffer vs String:**  
> - `Buffer`: datos binarios crudos, más eficiente en memoria  
> - `String (utf8)`: texto legible por humanos, más fácil de manipular

---

## 📁 Recursos

- [Documentación oficial de Node.js](https://nodejs.org/docs)
- [Módulo fs - Node.js](https://nodejs.org/api/fs.html)
- [npm](https://www.npmjs.com)
- [Repositorio del curso](https://github.com/pichu2707/curso-node/tree/master/01-fundamentos)

---

## ✅ Checklist

- [x] Instalar Node.js LTS
- [x] Configurar editor de código (VS Code recomendado)
- [x] Crear primera aplicación: Hola Mundo
- [x] Leer y escribir archivos con módulo `fs`
- [x] Entender el REPL de Node.js
- [x] Comprender el Event Loop con `setTimeout`
- [x] Diferencia entre Buffer y String
