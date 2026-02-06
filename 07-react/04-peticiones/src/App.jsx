import { useState, useEffect } from "react";

const App = () => {

  const [productos, setProductos] = useState(null);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(productos);
  }, [])

  return (
    <div>
      <h3>Peticiones</h3>
      {productos}
      <hr/>
      <h4>{contador}</h4>
      <button onClick={() => {
        setContador(contador + 1)
      }}>
        Incrementar
      </button>
    </div>
  )
}

export default App;
