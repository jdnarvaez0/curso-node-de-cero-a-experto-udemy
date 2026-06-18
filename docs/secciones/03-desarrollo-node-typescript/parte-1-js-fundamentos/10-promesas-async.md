# 10 — Promesas y Async / Await

## Clases 33-35

### Promesas

Una **Promesa** es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Puede estar en uno de tres estados:

- `Pending` (Pendiente): Estado inicial.
- `Fulfilled` (Cumplida): Operación completada con éxito.
- `Rejected` (Rechazada): Operación fallida.

### Async / Await

**Async / Await** es azúcar sintáctica construida sobre las Promesas.

- `async` declara que una función es asíncrona y que siempre devolverá una Promesa.
- `await` detiene la ejecución del bloque asíncrono temporalmente hasta que la promesa se resuelva, permitiendo escribir código asíncrono con aspecto síncrono.

### Encadenamiento con `.then().catch().finally()`

```javascript
getPokemonById(4)
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.log(err))
    .finally(() => console.log('Finalmente'));
```

### Ejemplo con async/await (`js-foundation/06-promesas.js`)

```javascript
const { http } = require('../plugins');

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    // Con await pausamos la ejecución de la función hasta que se resuelva la petición HTTP
    const pokemon = await http.get(url);
    return pokemon.name;
};

module.exports = getPokemonById;
```

### ¿Cuándo usar cada uno?

- `.then().catch()`: encadenamiento rápido, menos código.
- `async/await`: cuando hay varios `await` consecutivos o lógica condicional. Más legible.

> 📁 Ver: `proyectos/02-bases/src/js-foundation/06-promises.js` y `proyectos/02-bases/src/app.js`
