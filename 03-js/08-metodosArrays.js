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
//filter
let filtrado = frutas.filter((fru) => {
  //retornar una expresión para poder filtrar
  return fru.includes("i"); //existe este texto dentro de otro
})
console.log(filtrado)

//map
let transformado = frutas.map((fru) => {
  return fru.toUpperCase(); //transformar a mayúsculas
})

console.log(transformado);

//sorted y toSort
let nums = [5, 10, 3, 1, 20];

// let ordered = nums.sort(); //No utilicen sort
let ordered = nums.toSorted(); //mejor utilizar toSorted

console.log("ordenado con sort", ordered);
console.log(nums)

//reduce, reducir a un solo valor
let cuotas = [10, 20, 15, 45, 100, 75];

let suma = cuotas.reduce((acum, items) => {
  return acum + items;
})

console.log(suma)
