# 08 — Configuración de `tsconfig.json`

`tsconfig.json` es el archivo donde le dices a TypeScript **cómo compilar tu proyecto**.

## Generar el archivo base

```bash
npx tsc --init
```

Esto genera un `tsconfig.json` con ~100 opciones comentadas. Vamos a dejar **solo lo esencial**:

## `tsconfig.json` recomendado

```json
{
    "compilerOptions": {
        "target": "ES2022",                       // A qué versión de JS compilar
        "module": "CommonJS",                     // Sistema de módulos (CommonJS = require)
        "moduleResolution": "node",              // Cómo resuelve los imports
        "outDir": "./dist",                      // Donde deja el JS compilado
        "rootDir": "./src",                      // Donde está tu código TS
        "strict": true,                          // Activa todas las verificaciones de tipo
        "esModuleInterop": true,                 // Permite hacer `import fs from 'fs'`
        "skipLibCheck": true,                    // No chequea los .d.ts de node_modules
        "forceConsistentCasingInFileNames": true,// Evita líos con mayúsculas/minúsculas
        "resolveJsonModule": true                // Permite importar .json
    },
    "include": ["src/**/*.ts"],
    "exclude": ["node_modules", "dist"]
}
```

## Opciones clave explicadas

| Opción | Qué hace |
|---|---|
| `target` | Versión de JavaScript al que se compila. `ES2022` es moderno y seguro. |
| `module` | `CommonJS` para usar `require()` (lo que usa Node por defecto). `ESNext` para `import` nativo. |
| `outDir` | Carpeta de salida del JS compilado. |
| `rootDir` | Carpeta de entrada donde está tu código TypeScript. |
| `strict` | Activa todas las validaciones (recomendado `true` siempre). |
| `esModuleInterop` | Permite interoperar con librerías CommonJS (casi todas las de npm). |
| `skipLibCheck` | Acelera la compilación al no chequear los `.d.ts` de `node_modules`. |
| `resolveJsonModule` | Permite hacer `import data from './data.json'`. |

## Estructura resultante

```
proyecto/
├── src/           ← rootDir: aquí va tu código TS
│   └── app.ts
├── dist/          ← outDir: aquí aparece el JS compilado
│   └── app.js
├── tsconfig.json
└── package.json
```
