# 06 — Depuración de aplicaciones de Node

## Clase 26: Opciones para depurar

### Opción 1: Node Inspector

1. Iniciar Node en modo inspección:
   ```bash
   node --inspect src/app.js
   ```
2. Usar `debugger;` en el código para forzar un punto de interrupción.
3. Abrir en Chrome: `chrome://inspect` y seleccionar **Open dedicated DevTools for Node**.

### Opción 2: VS Code (recomendado)

VS Code tiene integraciones automáticas mediante configuraciones de depuración en `.vscode/launch.json`.

Ejemplo de `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/src/app.js"
    }
  ]
}
```

Pulsa **F5** para iniciar la depuración con breakpoints visuales.

> 💡 **Tip:** los breakpoints visuales son mucho más cómodos que `console.log`散布 por el código.
