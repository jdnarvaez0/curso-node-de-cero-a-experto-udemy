# 06 — ¿Por qué TypeScript?

Hasta ahora todo es JavaScript puro. **TypeScript** añade **tipado estático** opcional a JavaScript: tú declaras qué tipo de dato es cada variable, y el compilador te avisa de los errores **antes de ejecutar**.

## Comparación directa

| JavaScript | TypeScript |
|---|---|
| Tipos dinámicos: `let x = 5; x = "hola";` (sin error) | `let x: number = 5; x = "hola";` ❌ error en compilación |
| Los errores aparecen en **runtime** | Los errores aparecen al **compilar** |
| No hay autocompletado preciso en funciones | El editor sabe exactamente qué devuelve cada función |
| Refactorizar es arriesgado | Renombrar algo actualiza todos los usos |
| Acoplas los tipos a la documentación | Los tipos **son** la documentación |

## Beneficios concretos

- 🐛 **Detección temprana de errores**: muchos bugs que en JS aparecen en producción, en TS se detectan al guardar el archivo.
- 🧠 **Mejor IntelliSense**: el editor sabe qué propiedades tiene cada objeto.
- 🔄 **Refactor seguro**: cambiar el nombre de una función actualiza todos los usos.
- 📚 **Documentación automática**: las firmas de las funciones se documentan solas.

> En resumen: TypeScript te ayuda a **dormir tranquilo** en proyectos grandes. En proyectos pequeños puede sentirse "exceso", pero al escalar se vuelve indispensable.

## ¿Qué cambia en la práctica?

- `.js` → `.ts`
- `module.exports` → `export`
- `require()` → `import`
- `let x = 5;` → `let x: number = 5;`
- Las funciones declaran qué tipo reciben y qué tipo devuelven.
