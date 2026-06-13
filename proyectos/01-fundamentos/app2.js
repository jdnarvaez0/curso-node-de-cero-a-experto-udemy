// ============================================================
// app2.js - Leer y modificar archivos con el módulo 'fs'
// Tema: File System - readFileSync y writeFileSync
// ============================================================

const fs = require('fs');

// readFileSync: lee el archivo de forma SÍNCRONA (bloquea el hilo)
const data = fs.readFileSync('Readme-Angular.md', 'utf8');
console.log(data);

// replace: reemplaza todas las ocurrencias de "React" por "Angular"
// La bandera 'i' hace la búsqueda insensible a mayúsculas/minúsculas
// La bandera 'g' reemplaza TODAS las ocurrencias, no solo la primera
const newData = data.replace(/React/ig, 'Angular');

// writeFileSync: escribe en el archivo de forma SÍNCRONA
fs.writeFileSync('Readme-Angular.md', newData);

console.log('Archivo modificado exitosamente');
