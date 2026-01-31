import { obtenerUsuarios } from "./userService.js";

const divRaiz = document.querySelector("#raiz");
const formCrearUsuario = document.querySelector("#form-crear-usuario");
const inputNombre = document.querySelector("#input-nombre");
const inputEmail = document.querySelector("#input-email");
const inputTelefono = document.querySelector("#input-telf");
/*
const obtenerUsuarios = async () => {
  try {
    const response = await fetch("https://697c2626889a1aecfeb18999.mockapi.io/usuarios");
    const datos = await response.json();
    console.log(datos);
    datos.forEach((user) => {
      const tarjetaUsuario = dibujarUsuario(user);
      divRaiz.appendChild(tarjetaUsuario);
    })
  } catch (error) {
    console.log(error);
  }
}
*/

const dibujarUsuario = (usuario) => {
  const divUsuario = document.createElement("div");
  divUsuario.innerHTML = `
    <h4>${usuario.nombre_completo}</h4>
    <h5>Email: ${usuario.correo}</h5>
    <span>Teléfono ${usuario.telefono}</span>
  `;
  return divUsuario;
}

//El evento submit del formulario se dispara al dar click en el botón de enviar o presionar enter dentro de un form
formCrearUsuario.addEventListener("submit", () => {
  const nuevoUsuario = {
    nombre_completo: inputNombre.value,
    correo: inputEmail.value,
    telefono: inputTelefono.value
  }
  console.log(nuevoUsuario);
})

obtenerUsuarios(divRaiz, dibujarUsuario);
