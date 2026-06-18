# 03 — Módulo `fs` (File System)

El módulo `fs` (File System) permite interactuar con el sistema de archivos del servidor.

## Conceptos clave

- `readFileSync`: lee un archivo de forma **síncrona** (bloquea el hilo hasta terminar).
- `writeFileSync`: escribe en un archivo de forma **síncrona**.
- Las **expresiones regulares** `/patrón/flags` permiten buscar y reemplazar texto.

## Leer y modificar archivos

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

## Contar palabras en un archivo

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

**Conceptos clave:**
- `split(separador)`: divide un string en un array.
- `filter(condición)`: crea un nuevo array con los elementos que cumplen la condición.
- `.length`: cantidad de elementos en el array.

> 📁 Código en: `proyectos/01-fundamentos/app2.js` y `app3.js`
