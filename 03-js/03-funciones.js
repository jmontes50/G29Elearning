//sintaxis clásica
function suma(a, b) {
    return a + b;
}

console.log(suma(5, 20));

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(esMayorDeEdad(20)); //true
console.log(esMayorDeEdad(15)); //false

//ciudadano de primera clase, una función puede ser asignada a una variable, se le puede tratar como una variable más
//función anónima, porque no tiene un nombre, realmente el nombre esta en la variable
let saludar = function (nombre) {
  return `Hola soy ${nombre}`;
}

console.log(saludar("Jorge"));

//función flecha, que es una sintaxis más moderna y con un poco más de posibilidades
// function resta(a, b){
//   return a - b;
// }

// let resta = (a, b) => {
//   return a - b;
// }

//para utilizar el return automático tiene que ser algo sencillo y va después de la flecha =>
let resta = (a, b) => a - b;

console.log(resta(75, 10));

// function convertirANumero(valor) {
//   let numero = Number(valor);
//   return numero;
// }
// let convertirANumero = (valor) => {
//   return Number(valor)
// };
let convertirANumero = (valor) => Number(valor);

console.log(convertirANumero("123")); //123
