let hoy = new Date(); // new = instanciar, es construir un objeto a partir de una plantilla

console.log(hoy);

let navidad = new Date("2026-12-25");

console.log(navidad);

let mes = navidad.getMonth(); //JS con Date cuenta los meses desde 0 entonces 0 es Enero y 11 Diciembre
console.log(mes)

let anio = navidad.getFullYear();
console.log(anio);

let dia = navidad.getDate();
console.log(dia);

//el timestamp esta contando los milisegundos a partir de 01/01/1970
let timestampNavidad = navidad.getTime();
console.log("timestamp navidad:", timestampNavidad);

let timestampHoy = hoy.getTime();
console.log("timestamp hoy:", timestampHoy);

//Siempre que puedan trabajen con el timestamp
let diferencia = timestampNavidad - timestampHoy;
console.log(diferencia);

let hastaNavidad = diferencia / 1000 / 60 / 60 / 24;

console.log("hasta navidad", hastaNavidad);

console.log(Temporal)
