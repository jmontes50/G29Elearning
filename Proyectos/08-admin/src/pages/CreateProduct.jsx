import { useState } from "react"

const CreateProduct = () => {
  const [producto, SetProducto] = useState({
    nombre:"",
    descripcion:"",
    precio:0,
    stock:0,
    // imagen:""
  })

  return (
    <div>CreateProduct</div>
  )
}

export default CreateProduct
