let frutas = ["Kiwi", "Naranja", "Piña", "Durazno"];

console.log(frutas);
console.table(frutas);

console.log(frutas[0]);

let fruta1 = frutas[0];

let fruta3 = frutas[3];

console.log(fruta3);

console.log(frutas.length); //cuantos items days

// arrays tiene metodos, vienen con herramientas

//agrega un nuevo item al final
frutas.push("Platano");
frutas.push("Maracuya");
console.log(frutas);

//Eliminar/Remover un item del final
frutas.pop();
console.log(frutas);

//agrega un nuevo item al inicio
frutas.unshift("Chirimoya");
console.log(frutas);

//remueve un item al inicio
frutas.shift();
console.log(frutas);

let animales = ["Perro", "Gato", "Canario", "Tortuga"];

console.log(animales[3]);

for(let i = 0; i < animales.length; i++){
  console.log(i, animales[i]);
}
