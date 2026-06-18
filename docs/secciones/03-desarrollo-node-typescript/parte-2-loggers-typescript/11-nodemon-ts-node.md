# 11 — ts-node y nodemon

## ts-node: Ejecutar TypeScript sin compilar

Hasta ahora: TS → `tsc` → `dist/app.js` → `node dist/app.js`. **Dos pasos**.

Con **ts-node** ejecutas TypeScript directamente, sin generar el `dist`:

```bash
npm install -D ts-node
```

```bash
npx ts-node src/app.ts
```

> Es ideal para **desarrollo**, porque te ahorra el paso intermedio de compilar.

### Agregar al `package.json`

```json
{
    "scripts": {
        "ts": "ts-node src/app.ts"
    }
}
```

> 🪛 **Tip:** `ts-node` usa `tsconfig.json` por defecto, así que la configuración de tu proyecto se respeta automáticamente.

## nodemon + ts-node: Recarga automática

**nodemon** vigila los archivos. Si lo combinamos con **ts-node**, cada vez que guardas un `.ts`, la app se reinicia sola.

```bash
npm install -D nodemon ts-node
```

### Configurar `nodemon`

#### Opción A: `nodemon.json` en la raíz

```json
{
    "watch": ["src"],
    "ext": "ts,json",
    "ignore": ["src/**/*.spec.ts", "node_modules"],
    "exec": "ts-node ./src/app.ts"
}
```

#### Opción B: dentro de `package.json`

```json
{
    "nodemonConfig": {
        "watch": ["src"],
        "ext": "ts,json",
        "ignore": ["node_modules"],
        "exec": "ts-node ./src/app.ts"
    }
}
```

### Scripts finales en `package.json`

```json
{
    "scripts": {
        "start": "node dist/app.js",
        "dev": "nodemon",
        "build": "tsc",
        "tsc:watch": "tsc --watch"
    }
}
```

## Flujo de trabajo resultante

| Comando | Qué hace |
|---|---|
| `npm run dev` | nodemon vigila `src/` y reinicia la app con `ts-node` |
| `npm run build` | Compila todo a `dist/` |
| `npm start` | Ejecuta el JS ya compilado en `dist/` (producción) |
| `npm run tsc:watch` | Compila en tiempo real sin ejecutar (útil en otra terminal) |

## Resumen: ¿cuándo usar qué?

| Escenario | Comando / herramienta |
|---|---|
| **Desarrollo local** (con recarga automática) | `npm run dev` → nodemon + ts-node |
| **Probar la app** sin compilar | `npx ts-node src/app.ts` |
| **Solo revisar tipos** (CI, pre-commit) | `npx tsc --noEmit` |
| **Compilar para producción** | `npm run build` → genera `dist/` |
| **Ejecutar en producción** | `node dist/app.js` (sin TS, sin devDeps) |
| **Ver el JS generado** | Abre `dist/app.js` |

## 📂 Estructura final del proyecto

```
proyectos/03-bases/
├── dist/                          # ← generado por tsc (JS compilado)
├── logs/
│   ├── error.log
│   └── combined.log
├── node_modules/
├── src/
│   ├── app.ts                     # entry point
│   ├── js-foundation/
│   │   ├── 01-template.ts
│   │   ├── 02-destructuring.ts
│   │   ├── 03-callbacks.ts
│   │   ├── 04-arrow.ts
│   │   ├── 05-factory.ts
│   │   └── 06-promises.ts
│   └── plugins/
│       ├── get-id.plugin.ts
│       ├── get-age.plugin.ts
│       ├── http-client.plugin.ts
│       ├── logger.plugin.ts
│       └── index.ts
├── .gitignore
├── nodemon.json
├── package.json
├── tsconfig.json
└── README.md
```

## 📁 Recursos de la Parte 2

- [Winston — Documentación oficial](https://github.com/winstonjs/winston)
- [TypeScript — Documentación oficial](https://www.typescriptlang.org/docs/)
- [ts-node](https://typestrong.org/ts-node/)
- [nodemon](https://nodemon.io/)
- [@types/node](https://www.npmjs.com/package/@types/node)
- [TSConfig Reference](https://www.typescriptlang.org/tsconfig)

## ✅ Checklist de la Parte 2

- [ ] Explicar por qué `console.log` no es suficiente en producción
- [ ] Instalar y configurar Winston como logger
- [ ] Crear el adaptador de logger con `buildLogger(service)`
- [ ] Persistir logs en archivos y mostrarlos en consola
- [ ] Inyectar el logger como dependencia en la Factory Function
- [ ] Instalar TypeScript y `@types/node`
- [ ] Crear y personalizar el `tsconfig.json`
- [ ] Compilar el proyecto con `tsc` y entender `outDir`/`rootDir`
- [ ] Migrar todos los archivos `.js` a `.ts` con sus tipos
- [ ] Ejecutar TS directamente con `ts-node`
- [ ] Configurar `nodemon` + `ts-node` para recarga automática en desarrollo
- [ ] Diferenciar el flujo de **desarrollo** (ts-node) del de **producción** (tsc + node)
