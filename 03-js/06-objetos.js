let gato = {
  nombre: "Gunther",
  edad: 2,
  color: "Manchadito",
  esAmigable: true,
  //método o una acción
  dormir: () => {
    console.log("zzzzzzzzzz")
  }
}

console.log(gato);

//nombreObj.nombreProp //notación de punto
console.log(gato.nombre);
console.log(gato.color);

//en caso de escribir una propiedad incorrecta, dará undefined
console.log(gato.genero);

//Notación de corchetes para objetos
console.log(gato["esAmigable"]);

let nombreProp = "edad";

console.log(gato[nombreProp]);

//accediendo a un método
gato.dormir();

let perro = {
  nombre: "Mochi",
  edad: 1,
  color: "blanco"
}

//desestructuración, que mientras sepamos los nombres de las propiedades de un objeto podremos usarlas para acceder a ellas
let { color, edad } = perro;

console.log(color, edad);
