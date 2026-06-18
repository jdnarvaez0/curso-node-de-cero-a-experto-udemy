# 04 — Patrón Adaptador aplicado al Logger

Igual que con Axios, **no queremos acoplar** el resto de la aplicación a Winston. Si mañana queremos cambiar a Pino o Bunyan, debe ser cuestión de tocar **un solo archivo**.

Vamos a crear nuestro propio logger en `src/plugins/logger.plugin.js` que envuelve a Winston:

## `src/plugins/logger.plugin.js`

```javascript
const winston = require('winston');

const { combine, timestamp, json } = winston.format;

const buildLogger = (service) => {
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

    // Si NO estamos en producción, también imprimimos en consola con colores
    if (process.env.NODE_ENV !== 'production') {
        logger.add(
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.colorize(),
                    winston.format.simple()
                ),
            })
        );
    }

    return {
        log: (message) => logger.info(message),
        error: (message) => logger.error(message),
    };
};

module.exports = { buildLogger };
```

> 🧠 **Idea clave:** `buildLogger(service)` recibe el nombre del servicio. Esto permite que cuando varios microservicios escriben al mismo archivo, sepas **de cuál vino cada mensaje**. Es la semilla del `defaultMeta: { service }`.

## Uso desde `app.js`

```javascript
const { buildLogger } = require('./plugins/logger.plugin');

const logger = buildLogger('app.js');

logger.log('Iniciando la aplicación');
logger.error('Algo salió muy mal');

// Para los plugins
const loggerPlugins = buildLogger('plugins');
```

## Agregar al Barrel File (`src/plugins/index.js`)

```javascript
const { getId } = require('./get-id.plugin');
const { getAge } = require('./get-age.plugin');
const { http } = require('./http-client.plugin');
const { buildLogger } = require('./logger.plugin');

module.exports = {
    getId,
    getAge,
    http,
    buildLogger,
};
```
