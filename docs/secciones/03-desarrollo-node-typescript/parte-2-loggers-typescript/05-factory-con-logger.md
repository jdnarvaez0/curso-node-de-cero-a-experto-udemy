# 05 — Inyectar el Logger como dependencia

Una vez creado el adaptador del logger, lo **inyectamos** en la Factory para que pueda registrar lo que hace:

## Factory con logger

```javascript
// src/js-foundation/05-factory.js
const buildMakePerson = ({ getId, getAge, logger }) => {
    return ({ name, birthdate }) => {
        const person = {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate),
        };

        logger.log(`Persona creada: ${person.name}`);
        return person;
    };
};
```

## Uso en `app.js`

```javascript
const { buildMakePerson, buildLogger } = require('./plugins');

const logger = buildLogger('app.js');
const makePerson = buildMakePerson({ getId, getAge, logger });

const john = makePerson({ name: 'John', birthdate: '1985-10-21' });
```

> 🪛 **Resultado:** `info: Persona creada: John` aparece en consola **y** en `logs/combined.log`. Si llega a fallar, el error queda en `logs/error.log`.

## Beneficio

La factory ahora **registra lo que hace** sin acoplarse a Winston. Si en los tests quieres verificar que se creó una persona, simplemente pasas un mock con la misma firma (`log`, `error`).
