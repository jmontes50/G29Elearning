import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { requestProductById } from '../services/productosService';

const UpdateProductPage = () => {
  const [producto, SetProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    // imagen:""
  });

  const { id } = useParams();
  // console.log(id);

  const inputs = [
    {
      inputNombre: "Nombre",
      tipo: "text",
      placeholder: "Ingresa el nombre del producto",
      name:"nombre"
    },
    {
      inputNombre: "Descripción",
      tipo: "text",
      placeholder: "Ingrese descripción",
      name:"descripcion"
    },
    {
      inputNombre: "Precio",
      tipo: "number",
      placeholder: "Ingresa el precio del producto",
      name:"precio"
    },
    {
      inputNombre: "Stock",
      tipo: "number",
      placeholder: "Ingresa la cantidad almacenada",
      name: "stock"
    },
  ];

  const manejarInputs = (evento ) => {
    const name = evento.target.name;
    const value = evento.target.value;
    SetProducto({
      ...producto, //copia del estado actual
      [name]: value //actualiza la propiedad en base a name y value
    })
  }

  const manejarSubmit = async (evento) => {
    evento.preventDefault();
  }

  useEffect(() => {
    const getProduct = async () => {
      try {
        const producto = await requestProductById(id);
        console.log(producto);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }
    getProduct();
  }, [id])

  return (
    <div>UpdateProductPage</div>
  )
}

export default UpdateProductPage
