
/*
//fetch va a requerir una URL
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => {
  console.log("Respuesta recibida:", response);
  //encadenamiento de promesas
  return response.json(); //convertimos la respuesta a JSON
})
.then((datos) => {
  console.log("Datos transformados:", datos);
})
.catch((error) => {
  console.error("Error al realizar la petición:", error);
});
*/

//Usando async/await
const obtenerPosts = async () => {
  try { //intenta
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response)
    const datos = await response.json();
    console.log(datos);
  } catch (error) { //captura el error
    console.log(error);
  }
}
obtenerPosts();
