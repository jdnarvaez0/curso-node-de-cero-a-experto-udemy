// ============================================================
// 02-destructuring.js - Desestructuración de objetos
// Tema: process.env y desestructuración de objetos en JS moderno
// ============================================================

// process.env es un objeto global de Node.js que contiene
// todas las variables de entorno del sistema operativo

// Mostrar TODAS las variables de entorno disponibles
// console.log(process.env);

// Desestructuración: extraer propiedades específicas de un objeto
// en lugar de acceder con process.env.VARIABLE_NAME cada vez
const { npm_package_version, USERDOMAIN } = process.env;

// console.log muestra los valores en línea
console.log({ npm_package_version, USERDOMAIN });

// console.table muestra los valores en formato de tabla (más legible)
console.table({ npm_package_version, USERDOMAIN });

// La desestructuración es equivalente a:
// const npm_package_version = process.env.npm_package_version;
// const USERDOMAIN = process.env.USERDOMAIN;
