console.log("Hola mundo!!!");

//JS, tiene un tipado dinámico, se tipa al momento de darle valor

//comentarios, variables y tipos de datos
//Tipos de datos primitivos
let nombre = "Jorge"; //string

console.log(nombre);
console.log(typeof nombre)

let numero = 100; //number

console.log(numero);
console.log(typeof numero)

let estaLloviendo = true; //booleando true/false

console.log(estaLloviendo);
console.log(typeof estaLloviendo);

let regalo; //undefined - no definido
console.log(regalo);
console.log(typeof regalo);

// Null, no es un primitivo pero es util en ciertos casos

let nulo = null //Null, podemos asignarle otro valor más tarde
console.log(nulo);
console.log(typeof nulo);

// operaciones aritméticas y concatenación

//suma
let suma = 10 + 20;
console.log("Suma:", suma);

//resta
let resta = 20 - 10;
console.log("Resta:", resta);
//multiplicación
let multiplicacion = 10 * 5;
console.log("Multiplicación:", multiplicacion);

//división
let division = 20 / 2;
console.log("División:", division);
//módulo
let modulo = 10 % 3;
console.log("Módulo:", modulo);

//operadores aritmeticos cortos
let a = 10;
// a = a + 5
a += 5;
console.log("Operador += :", a);

let b = 20;
//b = b + 1;
b++;
console.log("Operador ++ :", b);

let c = 30;
//c = c - 1;
c--;
console.log("Operador -- :", c);

let d = 40;
d -= 10; //d = d - 10
console.log("Operador -= :", d);

let e = 100;
e *= 2; //e = e * 2
console.log("Operador *= :", e);
