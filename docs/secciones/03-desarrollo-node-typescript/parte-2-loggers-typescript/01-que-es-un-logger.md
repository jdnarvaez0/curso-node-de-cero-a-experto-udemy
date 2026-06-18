# 01 — ¿Por qué necesitamos un Logger?

## El problema con `console.log`

`console.log` está bien para **depurar mientras programas**, pero **no sirve para producción** por estas razones:

| Problema | Ejemplo |
|---|---|
| No tiene **niveles** de severidad | `info`, `warn`, `error`, `debug` no se distinguen |
| **No se puede filtrar** | Si tienes 10.000 líneas, ¿cómo buscas solo los errores? |
| **No persiste** la información | Al cerrar la app se pierde todo |
| No se puede **apagar en producción** | Imprime basura en los logs reales |
| No incluye **metadatos** (timestamp, servicio, etc.) | Solo escribe lo que pongas |

## La solución: un Logger profesional

Un logger te permite:

- ✅ Clasificar mensajes por **nivel** (`error`, `warn`, `info`, `http`, `verbose`, `debug`, `silly`).
- ✅ **Persistir** en archivos o enviarlos a servicios externos (CloudWatch, Datadog, Sentry…).
- ✅ Llevar un **historial** de errores para diagnóstico post-mortem.
- ✅ **Apagar** la verbosidad cuando la app está en producción.
- ✅ Adjuntar **metadatos** (timestamp, servicio, requestId, usuario, etc.).

> **En el curso se usa [Winston](https://github.com/winstonjs/winston)**, la librería de logging más popular de Node.js (más de 9M de descargas semanales).
