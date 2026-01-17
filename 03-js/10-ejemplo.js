let productos = [
  {
    nombre: "Smartphone",
    precio: 800,
  },
  {
    nombre: "Tablet",
    precio: 400,
  },
  {
    nombre: "Monitor",
    precio: 300,
  },
  {
    nombre: "Laptop",
    precio: 1200,
  },
];

let carrito = [];

let app = () => {
  let presupuesto = Number(prompt("Ingrese su presupuesto:"));

  //isNaN es una función que verifica si un valor no es un número
  //me da un booleano, NaN = Not a Number
  if (isNaN(presupuesto) || presupuesto <= 0) {
    //alert me permite mostrar mensajes
    alert("Por favor, ingrese un presupuesto válido.");
    return;
  }
};

app();

