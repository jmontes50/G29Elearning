/**
 * Ejemplo 01, Tienda de compra por cantidad
 * Tienda que ofrece productos a un precio fijo,
 * La app debe recibir un P.U. y la cantidad a comprar
 * Si la cantidad o el precio es menor o igual 0 marcar un error
 * Si la cantidad es mayor a 0 y menor/igual a 10 aplicar un descuento del 5%
 * Si la cantidad es mayor a 10 aplicar un descuento del 10%
 * Mostrar cuanto se va a pagar
 */

let totalPorCantidad = (precioUnitario, cantidad) => {
  console.log("Precio Unitario:", precioUnitario);
  console.log("Cantidad:", cantidad);
  //Lógica de la tienda
  if(precioUnitario <= 0 || cantidad <= 0) {
    console.log("Error: El precio unitario y la cantidad deben ser mayores a 0");
    return; //termina la función
  }
  let total = precioUnitario * cantidad;
  let descuento = 0;

  if(cantidad > 10) {
    descuento = 0.10; //10%
  } else if(cantidad > 0 && cantidad <= 10) {
    descuento = 0.05; //5%
  }

  total = total - (total * descuento);
  //toFixed(2), limita el número de decimales a 2
  //3.14159 -> 3.14
  console.log(`Total a pagar con descuento del ${descuento * 100}%: $${total.toFixed(2)}`);
}

//prompt, pide al usuario un valor por pantalla, lo que obtiene prompt es un string
let precioUnitario = Number(prompt("Ingrese el precio unitario del producto:"));
let cantidad = Number(prompt("Ingrese la cantidad a comprar:"));


totalPorCantidad(precioUnitario, cantidad);
