import axios from "axios";

const BASE_URL = "https://697c2626889a1aecfeb18999.mockapi.io/productos";

const requestProducts = async () => {
  try {
    //axios va a tener métodos llamados .get, .post, .put, .delete para c/acción HTTP
    //sintaxis: axios.método(url, [data], [config])
    //nos da la respuesta completa (headers, status, data, etc) junto con los data
    const response = await axios.get(BASE_URL);
    console.log(response);
    if (response.status === 200) {
      return response.data; //data es la propiedad donde están los datos
    }
    throw new Error("Error en la solicitud de productos");
  } catch (error) {
    throw error;
  }
}

export { requestProducts };
