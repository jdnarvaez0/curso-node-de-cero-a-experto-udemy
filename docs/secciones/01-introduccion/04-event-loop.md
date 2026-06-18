# 04 — Event Loop y asincronía

El Event Loop es el corazón de Node.js. Permite ejecutar código asíncrono sin bloquear el programa.

## Ejemplo con `setTimeout`

**Concepto clave:** `setTimeout` registra una función para ejecutarse después de X milisegundos. Node.js continúa ejecutando el código mientras espera.

```javascript
console.log('Inicio de programa');

// Este setTimeout espera 3 segundos
setTimeout(() => {
    console.log('Primer Timeout - después de 3 segundos');
}, 3000);

// Este setTimeout espera solo 1 segundo
setTimeout(() => {
    console.log('Segundo Timeout - después de 1 segundo');
}, 1000);

console.log('Fin del código síncrono');

// Orden de salida:
// 1. "Inicio de programa"
// 2. "Fin del código síncrono"
// 3. "Segundo Timeout" (1 seg)
// 4. "Primer Timeout"  (3 seg)
```

> **¿Por qué este orden?** El código síncrono siempre se ejecuta primero. Los `setTimeout` se registran en el Event Loop y se ejecutan cuando el hilo está libre.

> 📁 Código en: `proyectos/01-fundamentos/app4.js`
