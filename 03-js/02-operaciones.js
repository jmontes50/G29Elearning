//operaciones o estructuras
//condicionales y repetitivas

//condicionales, operadores lógicos y de comparación
let edad = 16;

console.log(edad >= 18);
//dentro de los parentesis va una EXPRESIÓN a ser evaluada
if (edad >= 18) { //true
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

let numeroGanador = 7;

//cuando es solo 01 =   estamos asignando un valor
//cuando es 02 ==   estamos comparando valores (solo valor)
//cuando es 03 ===  estamos comparando valores y tipos de datos
//lo recomendable es usar ===
if (numeroGanador === 7) {
  console.log("Felicidades, ganaste el premio");
} else {
  console.log("Lo siento, sigue intentando");
}

//operadores lógicos AND (&&), OR (||) y NOT (!)
//Para un evento tiene que ser mayor de 18 o tener invitación y no estar baneado/bloqueado

let tieneEntrada = true;
let estaBaneado = false;
let edadPersona = 17;

if ((edad >= 18 || tieneEntrada) && !estaBaneado) {
  console.log("Puede entrar al evento")
} else {
  console.log("No, no puede entrar :( ")
}
