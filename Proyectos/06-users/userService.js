//tener funciones para manejar las peticiones al endpoint de usuarios

const obtenerUsuarios = async (divRaiz, dibujarUsuario) => {
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

export {
  obtenerUsuarios
}
