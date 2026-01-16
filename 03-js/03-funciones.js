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
