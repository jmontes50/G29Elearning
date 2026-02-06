import { useState, useEffect } from "react";

const App = () => {
  const [contador, setContador] = useState(10000);
  const [interruptor, setInterruptor] = useState(false);

  console.log(interruptor);
  console.log(setInterruptor);

  const manejarClick = () => {
    setContador(contador + 1);
  };

  //cuando cambiamos algún estado, el componente entero vuelve a ejecutarse, pero con la información del estado ya actualizado.
  console.log("Cambio!!", contador);

  //Tanto al iniciar como al cambiar un estado el useEffect buscará ejecutarse
  useEffect(() => {
    console.log("Escuchandoooo!");
  }, [interruptor])

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
