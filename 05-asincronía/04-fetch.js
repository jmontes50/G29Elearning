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
