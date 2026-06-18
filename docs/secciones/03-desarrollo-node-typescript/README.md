# Sección 3: Desarrollando en Node + TypeScript

> **Progreso:** 🔄 En progreso (8/20 clases parte 1)  
> **Duración:** 2 h 7 min

> 📦 **Código base (JavaScript):** `proyectos/02-bases/`  
> 🍴 **Fork del repo del instructor:** [Klerith/node-ts-bases@fin-seccion-3](https://github.com/Klerith/node-ts-bases/tree/fin-seccion-3)  
> 📌 Esta sección cubre dos grandes temas: **JavaScript avanzado en Node** + **Loggers (Winston) y migración a TypeScript**.

## 📋 Contenido de la sección

### Parte 1 — JavaScript avanzado en Node

- [x] 19. Introducción a la sección
- [x] 20. Temas puntuales de la sección
- [ ] 21. Inicio de proyecto - Fundamentos
- [ ] 22. Package.json Scripts
- [ ] 23. Importaciones y exportaciones
- [ ] 24. Nodemon - Paquetes de terceros
- [ ] 25. Variables de entorno por defecto
- [ ] 26. Depuración de aplicaciones de Node
- [x] 27. Callbacks
- [x] 28. Arrow Functions
- [x] 29. Factory Functions - Introducción
- [x] 30. Factory Functions - Necesidad
- [x] 31. Patrón adaptador
- [x] 32. Factory Functions - Aplicado
- [x] 33. Promesas
- [x] 34. Promesas en cadena
- [x] 35. Async - Await
- [x] 36. Patrón adaptador - FetchAPI
- [x] 37. Axios - Cliente para peticiones HTTP
- [x] 38. Código fuente de la sección

### Parte 2 — Loggers (Winston) + Migración a TypeScript

| # | Tema | Estado |
|---|------|--------|
| 1 | ¿Por qué necesitamos un Logger? | ⏳ |
| 2 | Winston - Instalación y configuración | ⏳ |
| 3 | Formatos y Transports | ⏳ |
| 4 | Patrón Adaptador aplicado al Logger | ⏳ |
| 5 | Inyectar el Logger como dependencia | ⏳ |
| 6 | ¿Por qué TypeScript? | ⏳ |
| 7 | Instalación de TypeScript | ⏳ |
| 8 | Configuración de `tsconfig.json` | ⏳ |
| 9 | TSC - El compilador | ⏳ |
| 10 | Migración manual de `.js` a `.ts` | ⏳ |
| 11 | ts-node - Ejecutar TS sin compilar | ⏳ |
| 12 | nodemon + ts-node - Recarga automática | ⏳ |

## 📂 Estructura

```
seccion-3/
├── README.md                              ← este archivo
├── parte-1-js-fundamentos/
│   ├── 01-inicio-proyecto.md
│   ├── 02-scripts-package-json.md
│   ├── 03-import-export.md
│   ├── 04-nodemon.md
│   ├── 05-variables-entorno.md
│   ├── 06-depuracion.md
│   ├── 07-callbacks.md
│   ├── 08-arrow-functions.md
│   ├── 09-factory-functions.md
│   ├── 10-promesas-async.md
│   ├── 11-patron-adaptador-http.md
│   └── 12-axios.md
└── parte-2-loggers-typescript/
    ├── 01-que-es-un-logger.md
    ├── 02-winston-instalacion.md
    ├── 03-formatos-transports.md
    ├── 04-adapter-logger.md
    ├── 05-factory-con-logger.md
    ├── 06-typescript-intro.md
    ├── 07-tsconfig.md
    ├── 08-tsc-compilador.md
    ├── 09-migracion-js-ts.md
    ├── 10-ts-node.md
    └── 11-nodemon-ts-node.md
```

## ✅ Checklist

- [x] Entender el patrón de Callbacks en Node.js y el estándar Error-First
- [x] Convertir funciones tradicionales a Arrow Functions
- [x] Aplicar Factory Function e inyección de dependencias
- [x] Implementar peticiones asíncronas con Promesas y async/await
- [x] Desarrollar un Adaptador HTTP usando Fetch API y Axios
- [x] Centralizar exportaciones a través de un Barrel File
- [ ] Explicar por qué `console.log` no es suficiente en producción
- [ ] Instalar y configurar Winston como logger
- [ ] Crear el adaptador de logger con `buildLogger(service)`
- [ ] Inyectar el logger como dependencia en la Factory
- [ ] Instalar TypeScript y `@types/node`
- [ ] Configurar `tsconfig.json`
- [ ] Migrar el proyecto de `.js` a `.ts`
- [ ] Ejecutar TS con `ts-node`
- [ ] Configurar `nodemon` + `ts-node` para desarrollo
