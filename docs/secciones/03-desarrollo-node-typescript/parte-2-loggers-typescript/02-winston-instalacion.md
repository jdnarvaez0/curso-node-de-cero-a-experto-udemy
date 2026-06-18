# 02 — Winston: Instalación y configuración

## Instalación

```bash
npm install winston
```

> Se instala como **dependencia normal** (no de desarrollo) porque el logger se usa en producción.

## Logger más simple

```javascript
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',          // nivel mínimo que se imprimirá
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),   // salida a la consola
    ],
});

logger.info('Aplicación iniciada');
logger.warn('Cuidado, algo puede salir mal');
logger.error('Algo explotó 💥');
logger.debug('Esto no se muestra porque info es el mínimo');
```

**Salida:**
```
info: Aplicación iniciada
warn: Cuidado, algo puede salir mal
error: Algo explotó 💥
```

> El `level: 'info'` significa que **solo se imprimen** mensajes de nivel `info` o superior (`warn`, `error`). Por eso `debug` no aparece.

## Niveles de severidad (de mayor a menor)

| Nivel | Uso típico |
|---|---|
| `error` | Errores que requieren atención inmediata |
| `warn` | Advertencias (algo no salió como se esperaba) |
| `info` | Mensajes informativos (inicio de servidor, conexiones) |
| `http` | Peticiones HTTP |
| `verbose` | Información detallada |
| `debug` | Mensajes de depuración (solo en desarrollo) |
| `silly` | Trazabilidad extrema |
