import { useState } from "react";

const App = () => {

  const [contador, setContador] = useState(10000);

  const manejarClick = () => {
    setContador(contador + 1);
  }

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={manejarClick}>
        Aumentar
      </button>
    </div>
  )
}

export default App;
