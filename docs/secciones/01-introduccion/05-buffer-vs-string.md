# 05 — Buffer vs String

Al leer archivos **sin** especificar `'utf8'`, Node.js devuelve un **Buffer** (datos binarios crudos).

```javascript
function cities() {
    const fs = require('fs');

    // Sin 'utf8' → devuelve un Buffer (Uint8Array)
    const text = fs.readFileSync('text.txt');

    // Buffer también tiene el método includes()
    const range = text.includes('range-3');

    if (!range) {
        return 'range-3 no encontrado en el archivo';
    }

    return 'range-3 encontrado en el archivo';
}

console.log(cities());
```

## Comparación

| Buffer | String (utf8) |
|---|---|
| Datos binarios crudos | Texto legible por humanos |
| Más eficiente en memoria | Más fácil de manipular |
| Salida por defecto de `readFileSync` | Se obtiene pasando `'utf8'` |

> 📁 Código en: `proyectos/01-fundamentos/gtm.js`
