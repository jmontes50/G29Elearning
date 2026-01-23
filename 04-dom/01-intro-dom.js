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
