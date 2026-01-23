const jugador1 = {
  nombre: "Cueva",
  edad: 30,
  altura: 1.70,
  pase: 4,
  velocidad: 4,
  destreza: 5,
}

//Advincula
//COPIA POR REFERENCIA
const jugador2 = jugador1;

jugador2.velocidad = 5;
jugador2.altura = 1.80;
jugador2.pase = 4.5;
jugador2.nombre = "Advíncula";

console.log("jugador2");
console.table(jugador2);

console.log("jugador1");
console.table(jugador1);

let edad = 25;

let edad2 = edad;

edad2 = 30;

console.log(edad, edad2); //en primitivos se hace una copia por valor

//...Spread Operator
let perro = {
  nombre: "Rubi",
  edad: 5,
  color: "blanco"
}
//estamos haciendo una copia por valor de un objeto
//al momento de hacer el spread operator podemos
//agregar o cambiar propiedades
let perro2 = { ...perro, edad: 9, tamanio: "Mediana" }; // con los ... podemos indicar hacer copia de un obj
perro2.nombre = "Luna";

console.table(perro);
console.table(perro2);

//Spread Operator en Arrays
let frutas = ["Kiwi", "Naranja", "Fresa"];
let verduras = ["Zanahoria", "Lechuga", "Espinaca"];

let frutas2 = [...frutas];

console.log(frutas2);

let canasta = [...frutas, ...verduras, "Aceite", "Pollo"];

console.log(canasta);
