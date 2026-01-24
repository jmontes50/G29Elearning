const input_recordar = document.querySelector("#input-recordar");
const btn_recordar = document.querySelector("#btn-recordar");
const btn_eliminar = document.querySelector("#btn-eliminar");

btn_recordar.addEventListener("click", () => {
  // console.log(input_recordar.value);
  //para guardar información en el LS, necesitaremos un nombre y el valor de lo que vamos a guardar
  localStorage.setItem("mensaje", input_recordar.value);
  console.log("Guardado!!!")
})

const mensajeLeido = localStorage.getItem("mensaje");

console.log(mensajeLeido);

btn_eliminar.addEventListener("click", () => {
  localStorage.removeItem("mensaje");
})
