//Recordemos, ciudadano de primera clase
let sumarCien = (num) => num + 100;

console.log(sumarCien(5));

let hacerOperacion = (numero, operacion) => {
  return operacion(numero);
}

console.log(hacerOperacion(17, sumarCien));

console.log(hacerOperacion(21, (num) => num * 1000));
//-----------------------------------------------
//IndexOF
let frutas = ["Kiwi", "Naranja", "Piña", "Manzana"];

//Me indica el indice al buscar algo
console.log(frutas.indexOf("Naranja")); //me da su indice
console.log(frutas.indexOf("Mango")); //da -1 si no existe

//forEach - por cada uno haz "esto"
frutas.forEach((fru, indice, arregloOriginal) => {
  console.log(fru, indice, arregloOriginal);
})


