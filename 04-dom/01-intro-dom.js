window.console.log("Hola!!!");
console.log(window);
//window es un objeto que representa la pestaña del navegador
//console es otro objeto y log es un método de console.
/**
 * window = {
 *  console: {
 *    log: function(params){ //codigo para mostrar }
 *  }
 * }
 */
//preguntamos si hay acceso a la geolocalización del navegador
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((ubicacion) => {
    console.log(ubicacion);
  })
}

//Document Object Model
console.log("DOCUMENT", document);

//Elementos, selectores de js
const h1_titulo = document.getElementById("titulo");

console.log(h1_titulo);

h1_titulo.style.color = "red";

console.log("html-interno", h1_titulo.innerHTML);

h1_titulo.innerHTML = "Document Object Model";


