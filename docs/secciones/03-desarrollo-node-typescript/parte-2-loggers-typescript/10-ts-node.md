# 10 — Migración manual de `.js` a `.ts`

## Estrategia recomendada

La migración es **archivo por archivo**. Empieza por las "hojas" (cosas que no importan nada) y sube hasta `app.js`.

1. **Renombrar** el archivo: `app.js` → `app.ts`.
2. Si TypeScript se queja, **añadir los tipos** que faltan.
3. Corregir errores hasta que `npx tsc --noEmit` pase limpio.
4. Repetir con el siguiente archivo.

## Ejemplos de migración

### `01-template.js` → `01-template.ts`

```typescript
// Antes (JS)
const emailTemplate = `...`;
module.exports = { emailTemplate };

// Después (TS)
export const emailTemplate = `...`;
```

> TS usa `export`/`import` (ES Modules) por defecto. En runtime, con `module: "CommonJS"` en tsconfig, TSC lo convierte a `module.exports`.

### `04-arrow.js` → `04-arrow.ts`

```typescript
interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
];

export const getUserById = (id: number, callback: (err: string | null, user?: User) => void): void => {
    const user = users.find((user) => user.id === id);

    if (!user) {
        return callback(`Usuario con id ${id} no encontrado`, undefined);
    }
    return callback(null, user);
};
```

### `get-id.plugin.js` → `get-id.plugin.ts`

```typescript
import { v4 as uuidv4 } from 'uuid';

export const getId = (): string => uuidv4();
```

> 🪛 **Tip:** `uuid` ya trae sus propios tipos (`@types/uuid`). Si una librería no los trae, hay que instalar `@types/<paquete>`.

### `http-client.plugin.js` → `http-client.plugin.ts`

```typescript
import axios from 'axios';

export const httpClientPlugin = {
    get: async <T>(url: string): Promise<T> => {
        const { data } = await axios.get<T>(url);
        return data;
    },
    post: async <T, B = unknown>(url: string, body: B): Promise<T> => {
        const { data } = await axios.post<T>(url, body);
        return data;
    },
    put: async <T, B = unknown>(url: string, body: B): Promise<T> => {
        const { data } = await axios.put<T>(url, body);
        return data;
    },
    delete: async <T>(url: string): Promise<T> => {
        const { data } = await axios.delete<T>(url);
        return data;
    },
};
```

### `logger.plugin.js` → `logger.plugin.ts`

```typescript
import winston, { format } from 'winston';

const { combine, timestamp, json } = format;

interface Logger {
    log: (message: string) => void;
    error: (message: string) => void;
}

export const buildLogger = (service: string): Logger => {
    const logger = winston.createLogger({
        level: 'info',
        format: combine(
            timestamp(),
            json()
        ),
        defaultMeta: { service },
        transports: [
            new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
            new winston.transports.File({ filename: 'logs/combined.log' }),
        ],
    });

    if (process.env.NODE_ENV !== 'production') {
        logger.add(
            new winston.transports.Console({
                format: format.combine(
                    format.colorize(),
                    format.simple()
                ),
            })
        );
    }

    return {
        log: (message: string) => logger.info(message),
        error: (message: string) => logger.error(message),
    };
};
```

### `05-factory.js` → `05-factory.ts`

```typescript
interface Person {
    id: string;
    name: string;
    birthdate: string;
    age: number;
}

interface BuildPersonDeps {
    getId: () => string;
    getAge: (birthdate: string) => number;
    logger: { log: (message: string) => void; error: (message: string) => void };
}

export const buildMakePerson = ({ getId, getAge, logger }: BuildPersonDeps) =>
    ({ name, birthdate }: { name: string; birthdate: string }): Person => {
        const person: Person = {
            id: getId(),
            name,
            birthdate,
            age: getAge(birthdate),
        };
        logger.log(`Persona creada: ${person.name}`);
        return person;
    };
```

### `app.ts` final (migrado)

```typescript
import { getAge, getId, http, buildLogger } from './plugins';
import { buildMakePerson } from './js-foundation/05-factory';
import getPokemonById from './js-foundation/06-promises';

const logger = buildLogger('app');

getPokemonById(4)
    .then((pokemon) => logger.log(`Pokémon: ${pokemon}`))
    .catch((err) => logger.error(`Error: ${err}`))
    .finally(() => logger.log('Finalmente'));

const makePerson = buildMakePerson({ getId, getAge, logger });
const john = makePerson({ name: 'John', birthdate: '1985-10-21' });
console.log({ john });
```

> 🧠 **Comparación:** este mismo `app.ts`, al pasar por TSC, se convierte en `dist/app.js` (CommonJS), que es lo que Node ejecuta.
