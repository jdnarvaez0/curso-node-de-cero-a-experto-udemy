// ============================================================
// gtm.js - Leer y buscar contenido en un archivo de texto
// Tema: fs.readFileSync + Buffer + String includes()
// ============================================================

function cities() {
    const fs = require('fs');

    // readFileSync sin 'utf8' devuelve un Buffer (datos binarios)
    // Buffer es una representación de datos binarios en Node.js
    const text = fs.readFileSync('text.txt');

    // includes(): verifica si el string/buffer contiene cierta cadena
    // Devuelve true o false
    const range = text.includes('range-3');

    if (!range || range === false) {
        return 'range-3 no encontrado en el archivo';
    }

    return 'range-3 encontrado en el archivo';
}

console.log(cities());
