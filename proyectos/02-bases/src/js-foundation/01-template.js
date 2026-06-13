// ============================================================
// 01-template.js - Template Literals (Template Strings)
// Tema: Strings de múltiples líneas y expresiones interpoladas
// ============================================================

// Un template literal se define con backticks (`)
// Permite:
//   1. Strings de múltiples líneas sin \n
//   2. Interpolación de expresiones con ${}
//   3. Incrustar HTML fácilmente

const emailTemplate = `
<div>
    <h1>Hi, {{name}}</h1>
    <p> Gracias por su compra</p>
</div>
`;

// Exportar la variable para que pueda usarse desde app.js
// con: const { emailTemplate } = require('./js-foundation/01-template');
module.exports = {
    emailTemplate
};
