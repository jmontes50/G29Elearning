// import data from "./04-1-modulo.js"
// import { saludar, IGV } from "./04-1-modulo.js";
//cuando algo es exportado por default podemos cambiarle el nombre
import datos, { saludar, IGV } from "./04-1-modulo.js";

console.log(saludar("Jorge"));

console.log(`El precio total con IGV es: ${100 * IGV}`);

console.log("hola!")

console.log(datos);
