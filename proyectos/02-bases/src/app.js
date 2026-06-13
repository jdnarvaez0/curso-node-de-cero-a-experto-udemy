// ============================================================
// app.js - Punto de entrada principal de 02-bases
// Tema: require() y el sistema de módulos CommonJS de Node.js
// ============================================================

// Con el método require() podemos importar:
//   1. Módulos nativos de Node.js (fs, path, os, etc.)
//   2. Módulos de terceros instalados con npm (axios, winston, etc.)
//   3. Archivos locales nuestros (./js-foundation/01-template)

// --- Template Literals ---
// Importar el módulo y acceder a la propiedad exportada
// const templateExport = require('./js-foundation/01-template');
// console.log('Template:', templateExport.emailTemplate);

// Con desestructuración (más limpio):
// const { emailTemplate } = require('./js-foundation/01-template');
// console.log('Template desestructurado:', emailTemplate);


// --- Destructuring con process.env ---
// require('./js-foundation/02-destructuring');


// --- Callbacks ---
// const { getUserById } = require('./js-foundation/03-callbacks');

// const id = 3;
// getUserById(id, function(error, user) {
//     if (error) {
//         console.log('Error:', error);
//         return;
//     }
//     console.log('Usuario encontrado:', user);
// });


// --- Arrow Functions ---
// const { getUserById } = require('./js-foundation/04-arrow');

// getUserById(1, (error, user) => {
//     if (error) return console.log('Error:', error);
//     console.log('Usuario:', user);
// });


// --- Factory Pattern ---
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const { getId, getAge } = require('./plugins/');

// const makePerson = buildMakePerson({ getId, getAge });
// const person = makePerson({ name: 'Juan', birthday: '1990-05-15' });
// console.log('Persona creada:', person);


// --- Promesas y Async/Await ---
const { getPokemonById } = require('./js-foundation/06-promesas');

getPokemonById(1)
    .then(name => console.log('Pokémon:', name))
    .catch(err => console.error('Error:', err));
