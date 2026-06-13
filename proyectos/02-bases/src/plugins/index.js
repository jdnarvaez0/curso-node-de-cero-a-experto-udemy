// ============================================================
// index.js - Barrel file (archivo barril)
// Tema: Centralizar y re-exportar módulos desde un solo punto
// ============================================================

// Un "barrel file" es un patrón que permite importar
// múltiples módulos desde un solo lugar.
//
// Sin barrel file (incómodo):
//   const { getId } = require('./plugins/get-id.plugin');
//   const { getAge } = require('./plugins/get-age.plugin');
//   const { http } = require('./plugins/http-client.plugin');
//
// Con barrel file (limpio):
//   const { getId, getAge, http, buildLogger } = require('./plugins/');

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
