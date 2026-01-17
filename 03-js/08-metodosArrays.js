//Recordemos, ciudadano de primera clase
let sumarCien = (num) => num + 100;

console.log(sumarCien(5));

let hacerOperacion = (numero, operacion) => {
  return operacion(numero);
}

console.log(hacerOperacion(17, sumarCien));

console.log(hacerOperacion(21, (num) => num * 1000));
