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

const createProduct = async (productData) => {
  try {
    const response = await axios.post(BASE_URL, productData);
    //201 es el código de estado para "creado"
    if(response.status === 201) {
      return response.data;
    }
    throw new Error("Error al crear el producto");
  } catch (error) {
    throw error;
  }
}

//función para obtener un producto por su ID
const requestProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    if(response.status === 200) {
      return response.data;
    }
    throw new Error("Error al obtener el producto");
  } catch (error) {
    throw error;
  }
}

const updateProduct = async (id, updatedData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
    if(response.status === 200) {
      return response.data;
    }
    throw new Error("Error al actualizar el producto");
  } catch (error) {
    throw error;
  }
}

export { requestProducts, createProduct, requestProductById, updateProduct };
