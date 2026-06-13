// ============================================================
// get-age.plugin.js - Plugin para calcular la edad
// Tema: Módulos de terceros (npm) y encapsulamiento
// ============================================================

// 'get-age' es un paquete de npm que calcula la edad
// a partir de una fecha de nacimiento (birthday)
const getAgePlugin = require('get-age');

// Encapsulamos el paquete externo en nuestra propia función.
// Ventajas:
//   1. Si cambiamos el paquete, solo cambiamos aquí
//   2. Podemos agregar validaciones propias
//   3. La firma de la función es nuestra, no del paquete
const getAge = (birthday) => {
    if (!birthday) return new Error('Birthday is required');

    // getAgePlugin espera un string de fecha: 'YYYY-MM-DD'
    return getAgePlugin(birthday);
};

module.exports = { getAge };
