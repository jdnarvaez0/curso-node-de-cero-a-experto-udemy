// ============================================================
// http-client.plugin.js - Plugin para peticiones HTTP
// Tema: Axios vs Fetch, encapsulamiento de clientes HTTP
// ============================================================

// 'axios' es un cliente HTTP basado en promesas para Node.js y el navegador.
// En este archivo implementamos el "Patrón Adaptador" para envolver la librería.
// Esto evita que toda nuestra aplicación dependa directamente de Axios.
const axios = require('axios');

const httpClientPlugin = {

    // Método GET para obtener datos
    get: async (url) => {
        // Axios devuelve un objeto response. Desestructuramos directamente 'data'
        // que contiene el cuerpo de la respuesta ya parseado a JSON.
        const { data } = await axios.get(url);
        return data;

        // Comparativa con Fetch API nativo:
        // const response = await fetch(url);
        // return await response.json();
    },

    // Método POST para enviar/crear datos
    post: async (url, body) => {
        const { data } = await axios.post(url, body);
        return data;
    },

    // Método PUT para actualizar datos completamente
    put: async (url, body) => {
        const { data } = await axios.put(url, body);
        return data;
    },

    // Método DELETE para eliminar recursos
    delete: async (url) => {
        const { data } = await axios.delete(url);
        return data;
    },
};

// Exportamos nuestro adaptador con el nombre 'http'
module.exports = { http: httpClientPlugin };

