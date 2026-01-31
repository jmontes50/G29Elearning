console.log("Hola!!");

const mostrarFecha = () => {
  const ahora = new Date();
  return ahora.toLocaleDateString();
}

console.log(mostrarFecha);
