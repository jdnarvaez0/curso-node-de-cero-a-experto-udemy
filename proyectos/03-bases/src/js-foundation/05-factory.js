// Factory Function: recibe dependencias, devuelve la función que crea personas
const buildMakePerson = ({ getId, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
    };
};

module.exports = { buildMakePerson };
