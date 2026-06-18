# 03 — Formatos y Transports

Winston tiene dos conceptos clave:

- **Format**: cómo se ve el mensaje (JSON, simple, con timestamp, con colores…).
- **Transport**: **dónde** se envía el mensaje (consola, archivo, base de datos, HTTP…).

## Formatos comunes

```javascript
const { combine, timestamp, json, printf, colorize, errors } = winston.format;

// Formato JSON con timestamp (ideal para producción)
const jsonFormat = combine(
    timestamp(),
    errors({ stack: true }),   // incluye el stack trace de los Error
    json()
);

// Formato personalizado con colores (ideal para desarrollo)
const devFormat = combine(
    colorize({ all: true }),
    timestamp(),
    printf(({ timestamp, level, message, service }) => {
        return `[${timestamp}] ${level} (${service}): ${message}`;
    })
);
```

## Transports comunes

```javascript
// A la consola
new winston.transports.Console({ level: 'info' }),

// A un archivo
new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
new winston.transports.File({ filename: 'logs/combined.log' }),
```

> ⚠️ **Importante:** crear la carpeta `logs/` antes de usar transports de archivo, o Winston lanzará un error.
