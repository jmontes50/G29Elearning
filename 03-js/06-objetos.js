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

gato.dormir();
