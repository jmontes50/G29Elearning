import { useState } from "react";

const App = () => {
  const [contador, setContador] = useState(10000);
  const [interruptor, setInterruptor] = useState(false);

  const manejarClick = () => {
    setContador(contador + 1);
  };

  //cuando cambiamos algún estado, el componente entero vuelve a ejecutarse, pero con la información del estado ya actualizado.
  console.log("Cambio!!", contador);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={manejarClick}>Aumentar</button>
      <hr />
      {/* renderizado condicional, utilizaremos operador ternario */}
      <p>
        Interruptor:{" "}
        {interruptor ?
        <span>Esta prendido</span> :
        <span>Esta apagado</span>}
      </p>
      <button onClick={() => {setInterruptor(!interruptor)}}>
        Prender/Apagar
      </button>
    </div>
  );
};

export default App;
