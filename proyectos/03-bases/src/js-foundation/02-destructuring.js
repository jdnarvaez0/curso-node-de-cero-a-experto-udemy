// process.env expone TODAS las variables de entorno del sistema
console.log(process.env);

const { npm_package_version, USERDOMAIN } = process.env;

console.log({ npm_package_version, USERDOMAIN });
console.table({ npm_package_version, USERDOMAIN });
