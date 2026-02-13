import { useState } from "react";
import Input from "../components/Input";
import { createProduct } from "../services/productosService";

const CreateProduct = () => {
  const [producto, SetProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
    stock: 0,
    // imagen:""
  });

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
    evento.preventDefault(); //evita que se recargue la página
    try {
      const nuevoProducto = await createProduct(producto);
      console.log("Producto creado:", nuevoProducto);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  }

  return <div>
    <h2 className="text-3xl mb-4">Crear Producto</h2>
    <form onSubmit={manejarSubmit}>
      {inputs.map((input, index) => (
        <Input
          key={index}
          inputNombre={input.inputNombre}
          tipo={input.tipo}
          placeholder={input.placeholder}
          name={input.name}
          // props para componentes controlados
          value={producto}
          manejarInputs={manejarInputs}
         />
      ))}
    </form>
  </div>;
};

export default CreateProduct;
