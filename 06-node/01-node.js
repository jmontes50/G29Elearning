import axios from "axios";

console.log("Hola!!!!!!!");

const mostrarFecha = () => {
  const ahora = new Date();
  return ahora.toLocaleDateString();
}

console.log(mostrarFecha());
// console.log(document);

//axios tiene metodos con los nombres de cada tipo de verbo http (.get .post .put .delete)
axios.get("https://697c2626889a1aecfeb18999.mockapi.io/usuarios")
.then((rpta => {
  // console.log(rpta); //en la rpta estan los headers y tambien el json de datos en una prop .data
  console.log(rpta.data);
}))
.catch((error) => {
  console.log(error);
})
