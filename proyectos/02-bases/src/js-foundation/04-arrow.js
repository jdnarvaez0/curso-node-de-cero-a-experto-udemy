// ============================================================
// 04-arrow.js - Arrow Functions (Funciones Flecha)
// Tema: Sintaxis concisa de funciones en JS moderno
// ============================================================

// Mismos datos de ejemplo
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

// Arrow function: sintaxis más corta que function tradicional
// const nombre = (parámetros) => { cuerpo }
//
// Diferencias con function tradicional:
//   1. No tiene su propio 'this'
//   2. Sintaxis más concisa
//   3. Si solo hay una expresión, el return es implícito

const getUserById = (id, callback) => {
    // Arrow function en find() - forma compacta
    const user = users.find(user => user.id === id);

    if (!user) {
        return callback(`Usuario con id ${id} no encontrado`, null);
    }

    return callback(null, user);
};

// Exportar con desestructuración
module.exports = { getUserById };
