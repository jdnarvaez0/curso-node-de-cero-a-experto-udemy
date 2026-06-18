# 01 — ¿Qué es Node.js?

Node.js es un **entorno de ejecución para JavaScript** construido con el motor V8 de Google Chrome. Permite ejecutar JavaScript en el **servidor**, fuera del navegador, usando el mismo lenguaje tanto en frontend como en backend.

## Características principales

- **Asíncrono y basado en eventos**: No bloquea el hilo con operaciones de I/O (lectura de archivos, consultas a BD, etc.).
- **Single-threaded con Event Loop**: Un solo hilo maneja miles de conexiones concurrentes gracias al loop de eventos.
- **Gran ecosistema**: `npm` es el registro de paquetes más grande del mundo.
- **Full-stack JavaScript**: mismo lenguaje en frontend y backend.

## Hola Mundo

```javascript
const message = "Hola Mundo";
console.log(message);
```

Ejecutar con:
```bash
node app.js
```

> 📁 Código en: `proyectos/01-fundamentos/app.js`
