# 07 — Instalación de TypeScript

```bash
npm install -D typescript @types/node
```

- **`typescript`**: el compilador (TSC).
- **`@types/node`**: las definiciones de tipos de los módulos nativos de Node (`fs`, `path`, `process`, etc.) para que el editor sepa qué tienen.

## Verificar la versión instalada

```bash
npx tsc --version
```

> **Versión 5.x** es la habitual a día de hoy.

## Paquetes adicionales útiles

| Paquete | Para qué sirve |
|---|---|
| `@types/node` | Tipos de los módulos nativos de Node |
| `@types/express` | Tipos de Express (si lo usas) |
| `@types/uuid` | Tipos de `uuid` |
| `@types/jest` | Tipos de Jest |
| `ts-node` | Ejecutar TS sin compilar |
| `nodemon` | Reinicio automático (combinado con `ts-node`) |
| `tsc-watch` | (Incluido en `typescript`) Recompila al guardar |
