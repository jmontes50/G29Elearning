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

//else if, va a ser utilizado para poder manejar otras posibles condiciones

let nota = 60;

if (nota >= 90) {
  console.log("Obtuviste una A");
} else if (nota >= 80) {
  console.log("Obtuviste una B");
} else if (nota >= 70) {
  console.log("Obtuviste una C");
} else if (nota >= 60) {
  console.log("Obtuviste una D");
} else { //por defecto
  console.log("Obtuviste una F");
}

//Switch, es mas legible que un else if

let dia = 2; //1-7

//dentro del switch indicamos que expresión vamos a evaluar
switch (dia) {
  case 1: //si dia es 1
    console.log("Lunes");
    break; //impide la ejecución del resto de cases
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default: //por defecto
    console.log("Día no válido");
}

//Bucles o loops
//for(inicialización; condición; actualización)
for (let i = 1; i <= 10; i++) {
  console.log("Número:", i);
}

for(let j = 5; j >= 1; j--) {
  console.log("Número al revés:", j);
  if(j === 3) {
    // break; //detiene el ciclo
    continue; //salta a la siguiente iteración
  }
  console.log("después del continue:"); //este código no se ejecuta cuando j es 3 por el continue
}
