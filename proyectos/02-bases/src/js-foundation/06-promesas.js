// ============================================================
// 06-promesas.js - Promesas y Async/Await
// Tema: Manejo de código asíncrono con Promises y async/await
// ============================================================

const { http } = require('../plugins/');

// async/await es "azúcar sintáctica" sobre las Promesas.
// Hace que el código asíncrono se lea como si fuera síncrono.

// 'async' antes de una función: indica que devuelve una Promesa
// 'await' dentro: pausa la ejecución hasta que la Promesa se resuelva
const getPokemonById = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // Sin async/await (forma con callbacks anidados):
    // fetch(url).then((response) => {
    //     response.json().then((pokemon) => {
    //         callback(pokemon.name);
    //     });
    // });

    // Sin async/await (forma con .then encadenados):
    // return fetch(url)
    //     .then(response => response.json())
    //     .then(pokemon => pokemon.name);

    // Con async/await (forma más legible):
    const pokemon = await http.get(url);
    return pokemon.name;
};

module.exports = { getPokemonById };
