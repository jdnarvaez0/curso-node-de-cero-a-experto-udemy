// ============================================================
// get-id.plugin.js - Plugin para generar IDs únicos
// Tema: UUID (Universally Unique Identifier)
// ============================================================

// 'uuid' es un paquete de npm para generar IDs únicos
// Un UUID tiene este formato: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const { v4: uuidv4 } = require('uuid');

// Encapsulamos uuid en nuestro propio plugin
const getId = () => {
    if (!uuidv4) return new Error('UUID plugin is required');
    
    // v4 genera un UUID de forma aleatoria
    return uuidv4();
};

module.exports = { getId };
