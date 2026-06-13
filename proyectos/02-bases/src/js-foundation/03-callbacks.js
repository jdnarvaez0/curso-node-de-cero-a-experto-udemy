// ============================================================
// 03-callbacks.js - Funciones Callback
// Tema: Patrón callback con manejo de error (error-first callback)
// ============================================================

// Datos de ejemplo (simulando una base de datos)
const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

// Un callback es una función que se pasa como argumento a otra función
// El patrón "error-first" es el estándar de Node.js:
//   callback(error, resultado)
//   - Si hay error: callback(error, null)
//   - Si todo bien: callback(null, resultado)
function getUserById(id, callback) {
    // find(): busca el primer elemento que cumpla la condición
    const user = users.find(function(user) {
        return user.id === id;
    });

    if (!user) {
        // Convención: el primer argumento es el error
        return callback(`Usuario con id ${id} no encontrado`, null);
    }

    // Convención: si no hay error, el primer argumento es null
    return callback(null, user);
}

// Exportar para usar desde app.js
module.exports = { getUserById };
