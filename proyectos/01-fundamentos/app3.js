// ============================================================
// app3.js - Contar palabras en un archivo
// Tema: File System + Manipulación de strings + Array methods
// ============================================================

const fs = require('fs');

// Leer el contenido del archivo
const content = fs.readFileSync('Readme-Angular.md', 'utf8');

// split(' '): divide el string en un array usando el espacio como separador
// Cada elemento del array es una "palabra"
const wordCount = content.split(' ');

// filter: filtra los elementos del array que cumplan la condición
// Cuenta cuántas veces aparece la palabra 'react' (case insensitive)
const reactWords = wordCount.filter(word => 
    word.toLowerCase().includes('react')
).length;

console.log('Total de palabras en el archivo:', wordCount.length);
console.log('Ocurrencias de "react":', reactWords);
