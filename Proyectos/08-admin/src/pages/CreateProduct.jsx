import { useState } from "react";
import Input from "../components/Input";

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
    },
    {
      inputNombre: "Descripción",
      tipo: "text",
      placeholder: "Ingrese descripción",
    },
    {
      inputNombre: "Precio",
      tipo: "number",
      placeholder: "Ingresa el precii del producto",
    },
    {
      inputNombre: "Stock",
      tipo: "number",
      placeholder: "Ingresa la cantidad almacenada",
    },
  ];

  return <div>
    <h2 className="text-3xl mb-4">Crear Producto</h2>
    <div>
      {inputs.map((input, index) => (
        <Input
          key={index}
          inputNombre={input.inputNombre}
          tipo={input.tipo}
          placeholder={input.placeholder}
         />
      ))}
    </div>
  </div>;
};

export default CreateProduct;
