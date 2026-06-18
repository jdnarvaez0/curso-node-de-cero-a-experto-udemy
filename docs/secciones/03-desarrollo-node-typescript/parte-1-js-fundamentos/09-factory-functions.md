# 09 — Factory Functions

## Clases 29-32

Una **Factory Function** es una función que devuelve un objeto o una nueva función. Es un patrón de diseño excelente para lograr la **Inyección de Dependencias**.

### El problema

Si importamos librerías externas (como un generador de UUID o un validador de edad) directamente en nuestro archivo de lógica, nuestro código queda acoplado a ellas y se vuelve **difícil de testear** (no podemos simular/mockear los retornos).

### La solución

Creamos una función constructora (Factory) que recibe las dependencias como argumentos. Luego, en el punto de entrada de la aplicación, inyectamos estas dependencias.

### Código de la Fábrica (`js-foundation/05-factory.js`)

```javascript
// La función externa recibe las dependencias
const buildMakePerson = ({ getId, getAge }) => {

    // Devuelve la función que crea el objeto persona
    return ({ name, birthday }) => {
        return {
            id: getId(),
            name,
            birthday,
            age: getAge(birthday),
        };
    };
};

module.exports = { buildMakePerson };
```

### Uso en `app.js` inyectando dependencias externas

```javascript
const { buildMakePerson } = require('./js-foundation/05-factory');
const { getId, getAge } = require('./plugins/'); // dependencias externas

// Inyectamos las dependencias necesarias
const makePerson = buildMakePerson({ getId, getAge });

// Creamos personas sin acoplarnos directamente a las librerías en 05-factory.js
const person = makePerson({ name: 'Juan', birthday: '1990-05-15' });
```

### Ventajas

- ✅ **Testeable**: en los tests pasamos mocks como dependencias.
- ✅ **Desacoplado**: el archivo de lógica no sabe qué librería usas.
- ✅ **Flexible**: cambiar de `uuid` a `nanoid` es cuestión de un archivo.

> 📁 Ver: `proyectos/03-bases/src/js-foundation/05-factory.js`
