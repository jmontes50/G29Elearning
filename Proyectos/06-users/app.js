const divRaiz = document.querySelector("#raiz");

const obtenerUsuarios = async () => {
  try {
    const response = await fetch("https://697c2626889a1aecfeb18999.mockapi.io/usuarios");
    const datos = await response.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
}

obtenerUsuarios();
