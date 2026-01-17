let hoy = new Date(); // new = instanciar, es construir un objeto a partir de una plantilla

console.log(hoy);

let navidad = new Date("2026-12-25");

console.log(navidad);

let mes = navidad.getMonth(); //JS con Date cuenta los meses desde 0 entonces 0 es Enero y 11 Diciembre
console.log(mes)

let anio = navidad.getFullYear();
console.log(anio);
