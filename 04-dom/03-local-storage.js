const input_recordar = document.querySelector("#input-recordar");
const btn_recordar = document.querySelector("#btn-recordar");
const btn_eliminar = document.querySelector("#btn-eliminar");

btn_recordar.addEventListener("click", () => {
  // console.log(input_recordar.value);
  //para guardar información en el LS, necesitaremos un nombre y el valor de lo que vamos a guardar

  const nuevoMensaje = {
    texto: input_recordar.value,
    creadoA: new Date().toLocaleString()
  }
  console.log(nuevoMensaje);
  //stringify toma JS y lo convierte a texto
  const nuevoMensajeAJson = JSON.stringify(nuevoMensaje)
  console.log(nuevoMensajeAJson);
  console.log(typeof nuevoMensajeAJson)
  // localStorage.setItem("mensaje", input_recordar.value);
  localStorage.setItem("mensaje", nuevoMensajeAJson);
  console.log("Guardado!!!")
})

const mensajeLeido = localStorage.getItem("mensaje");

console.log(mensajeLeido);

btn_eliminar.addEventListener("click", () => {
  localStorage.removeItem("mensaje");
})
