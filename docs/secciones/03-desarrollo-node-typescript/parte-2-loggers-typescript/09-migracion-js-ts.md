# 09 — TSC: El compilador de TypeScript

TSC = **T**ype**S**cript **C**ompiler.

## Comandos principales

```bash
npx tsc                    # compila todo según tsconfig.json
npx tsc --watch            # modo watch: recompila al guardar
npx tsc --noEmit           # solo verifica tipos, no genera .js
npx tsc src/app.ts         # compila un archivo específico
```

> 🧠 **Idea clave:** TSC **no ejecuta** tu código, solo lo **traduce** de TypeScript a JavaScript. Luego lo ejecutas con `node dist/app.js`.

## Scripts recomendados en `package.json`

```json
{
    "scripts": {
        "tsc": "tsc",
        "tsc:watch": "tsc --watch"
    }
}
```

## Flujo de trabajo

| Acción | Comando |
|---|---|
| Verificar tipos sin compilar | `npx tsc --noEmit` |
| Compilar a `dist/` | `npx tsc` |
| Compilar en tiempo real | `npx tsc --watch` |
| Ejecutar el JS compilado | `node dist/app.js` |

## `tsc --noEmit` en CI/CD

En pipelines de integración continua, lo más eficiente es usar `--noEmit` para solo validar tipos sin generar archivos. Esto es **mucho más rápido** que compilar.
