var texto = "Hola!";

var texto = "Adios!";

console.log(texto);

let nombre = "Jorge";

nombre = "Jorge Osmar"

// let nombre = "Victor";
//RECOMENDACIÓN, NO USAR VAR EN NINGÚN CONTEXTO

//Constante
const IGV = 1.18;

// IGV = 1.15;
//No permite asignar un nuevo valor

const frutas = ["Kiwi", "Naranja", "Piña"];

//se permite modificar siempre y cuando la modificación venga de algún método interno
frutas.push("Guayaba");

console.log(frutas);

//OPERADOR TERNARIO
let edad = 17;

let puedeVotar = edad >= 18 ? "Puede votar!!!" : "No puede votar";

console.log(puedeVotar);

//parámetros por defecto
const saludar = (nombre = "Visitante") => {
  console.log(`Hola, ${nombre}`);
}

saludar("Jorge");
saludar();

//destructuración de objetos
const persona = {
  name: "Jorge",
  age: 30,
  city: "Arequipa"
};

//comunmente
// const nombrePersona = persona.nombre;
// const edadPersona = persona.edad;
// const ciudadPersona = persona.ciudad;

//destructuración, si conozco que propiedades tiene el objeto, podemos extraerlas de esta manera
const { name, age, city } = persona;

console.log(age);

//destructuración de arreglos
const colores = ["Rojo", "Verde", "Azul"];

//comúnmente
// const color1 = colores[0];
// const color2 = colores[1];
// const color3 = colores[2];

//destructuración
const [color1, color2, color3] = colores;

console.log(color2);
