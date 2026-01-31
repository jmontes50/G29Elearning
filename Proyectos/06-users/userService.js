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

const crearUsuario = async (objUsuario) => {
  try {
    const usuarioJSON = JSON.stringify(objUsuario);
    console.log("usuario json", usuarioJSON);
    const cabeceras = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: usuarioJSON
    }
    const response = await fetch("https://697c2626889a1aecfeb18999.mockapi.io/usuarios", cabeceras);
    console.log(response)
    const datos = await response.json();
    return datos;
  } catch (error) {
    throw error;
  }
}

export {
  obtenerUsuarios,
  crearUsuario
}
