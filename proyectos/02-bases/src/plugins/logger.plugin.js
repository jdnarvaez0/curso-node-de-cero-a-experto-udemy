// ============================================================
// logger.plugin.js - Plugin de logging con Winston
// Tema: Sistema de logs profesional con múltiples destinos
// ============================================================

// 'winston' es la librería de logging más popular de Node.js
// Un logger es mejor que console.log porque:
//   1. Guarda logs en archivos
//   2. Distingue niveles: error, warn, info, debug
//   3. Agrega timestamps automáticamente
//   4. Formato configurable (JSON, texto, etc.)
const winston = require('winston');
const { combine, timestamp, json } = winston.format;

// buildLogger es un Factory: crea un logger configurado para
// cada módulo de la aplicación (con su propio nombre/servicio)
const buildLogger = (service) => {

    // Configuración del logger
    // Documentación: https://www.npmjs.com/package/winston
    const logger = winston.createLogger({
        level: 'info',          // nivel mínimo a registrar
        format: combine(
            timestamp(),        // agrega fecha y hora
            json(),             // formato JSON
        ),
        transports: [
            // Transport: destino donde se escriben los logs
            // Nivel 'error': solo guarda errores y críticos
            new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
            // 'combined.log': guarda TODOS los logs (info, warn, error)
            new winston.transports.File({ filename: 'logs/combined.log' }),
        ],
    });

    // En desarrollo, también mostrar en consola
    if (process.env.NODE_ENV !== 'production') {
        logger.add(new winston.transports.Console({
            format: winston.format.simple(),
        }));
    }

    // Devolvemos métodos simplificados del logger
    return {
        log: (message) => logger.info(message, { service }),
        error: (message) => logger.error(message, { service }),
        warn: (message) => logger.warn(message, { service }),
    };
};

module.exports = { buildLogger };
