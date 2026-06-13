// ============================================================
// app4.js - Event Loop y el comportamiento asíncrono
// Tema: setTimeout y el Event Loop de Node.js
// ============================================================

console.log('Inicio de programa');

// setTimeout: ejecuta la función después del tiempo indicado (ms)
// El Event Loop no bloquea: sigue ejecutando el código mientras espera
setTimeout(() => {
    console.log('Primer Timeout - después de 3 segundos');
}, 3000);

setTimeout(() => {
    console.log('Segundo Timeout - después de 1 segundo');
}, 1000);

// Este console.log se ejecuta ANTES de los setTimeout
// aunque está después de ellos en el código
console.log('Fin del código síncrono');

// Orden de ejecución:
// 1. "Inicio de programa"
// 2. "Fin del código síncrono"
// 3. "Segundo Timeout" (1 segundo)
// 4. "Primer Timeout"  (3 segundos)
