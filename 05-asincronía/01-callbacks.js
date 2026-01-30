console.log("1. Hola!");

console.log("2. Como estai");

// alert("Estoy bien! (bloqueante)");

//setTimeout me permite ejecutar una función después de un tiempo determinado
setTimeout(() => {
  console.log("3. Estoy bien!");
}, 2000); //tiempo en milisegundos 2000ms = 2s

// setTimeout(function(){
//   console.log("3. Estoy bien!");
// }, 2000);

console.log("4. Adiós!");

// Array de nombres de longitud 100
const nombres = Array.from({ length: 100 }, (_, i) => `Nombre ${i + 1}`);

// Verificación rápida
// console.log('nombres.length =', nombres.length); // 100
// console.log('Primeros 5:', nombres.slice(0, 5));

console.log(nombres);
const buscarNombre = (nombreABuscar, callback) => {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === nombreABuscar) {
      // console.log("Nombre encontrado:", nombres[i]);
      // break;
      // Si encontramos el nombre, llamamos al callback con null (sin error) y el nombre encontrado
      return callback(i);
    }
  }
};

buscarNombre("Nombre 90", (indice) => {
  console.log(`Nombre encontrado en el indice: ${indice}`);
});

