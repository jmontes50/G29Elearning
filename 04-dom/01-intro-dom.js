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

//querySelectorAll es un selector que permite seleccionar elementos de la forma que CSS lo hace, toma multiples elementos
const parrafos = document.querySelectorAll(".parrafo");

console.log("elementos p", parrafos);

parrafos.forEach((p) => {
  //en css se usa guion medio (snake-case) pero en js camelCase: font-weight -> fontWeight
  p.style.fontWeight = "bold";
  p.style.color = "blue";
});

//va a seleccionar el primer elemento que encuentre, pero también la forma de uso es como la de CSS
const input = document.querySelector("#entrada");

console.log("input", input);

//me permite obtener el valor de un atributo
console.log("entrada input", input.getAttribute("type"));

//me permite modificar o establecer el valor de un atributo
input.setAttribute("placeholder", "Nuevo placeholder desde JS");

//obtengamos el botón
const btn = document.querySelector("#btn");

console.log("botón", btn);

//agreguemos un evento al botón
btn.addEventListener("click", () => {
  console.log("Diste click en el botón");
  input.setAttribute("type", "text");

});

