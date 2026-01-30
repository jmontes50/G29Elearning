console.log("1. Hola!");

console.log("2. Como estai");

alert("Estoy bien! (bloqueante)");

//setTimeout me permite ejecutar una función después de un tiempo determinado
setTimeout(() => {
  console.log("3. Estoy bien!");
}, 2000); //tiempo en milisegundos 2000ms = 2s

// setTimeout(function(){
//   console.log("3. Estoy bien!");
// }, 2000);

console.log("4. Adiós!");
