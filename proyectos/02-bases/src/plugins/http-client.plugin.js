// ============================================================
// http-client.plugin.js - Plugin para peticiones HTTP
// Tema: Axios vs Fetch, encapsulamiento de clientes HTTP
// ============================================================

// 'axios' es un paquete de npm para hacer peticiones HTTP
// Es más popular que el fetch nativo porque:
//   1. Funciona igual en Node.js y en el navegador
//   2. Transforma automáticamente JSON
//   3. Manejo de errores más claro
const axios = require('axios');

// Creamos nuestro propio objeto de cliente HTTP
// Encapsulamos axios para poder cambiar la implementación sin
// afectar al resto de la aplicación
const httpClientPlugin = {

    get: async (url) => {
        // Axios devuelve { data, status, headers, ... }
        // Desestructuramos solo el 'data' que nos interesa
        const { data } = await axios.get(url);
        return data;

        // Alternativa nativa con fetch (disponible desde Node 18+):
        // const response = await fetch(url);
        // const data = await response.json();
        // return data;
    }
};

module.exports = { http: httpClientPlugin };
