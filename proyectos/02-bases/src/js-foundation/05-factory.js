// ============================================================
// 05-factory.js - Patrón Factory Function
// Tema: Inyección de dependencias y funciones de orden superior
// ============================================================

// Un Factory (fábrica) es una función que devuelve otra función u objeto.
// Ventaja: permite inyectar dependencias (getId, getAge) desde afuera,
// lo que hace el código más testeable y flexible.

// buildMakePerson es una "función de orden superior" (Higher Order Function):
// recibe funciones como argumentos y devuelve una función.
// Esto se llama "Inyección de Dependencias" - pasamos las dependencias
// desde afuera en vez de crearlas adentro.

// const { getId, getAge } = require('../plugins/');

const buildMakePerson = ({ getId, getAge }) => {

    // Esta es la función que realmente crea la persona
    // El factory la configura con las dependencias correctas
    return ({ name, birthday }) => {

        return {
            id: getId(),           // genera un ID único (UUID)
            name: name,
            birthday: birthday,
            age: getAge(birthday), // calcula la edad a partir del cumpleaños
        };
    };
};

module.exports = { buildMakePerson };
