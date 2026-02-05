import { useState } from "react";

const App = () => {
  //tiene que estar dentro del componente
  // let numero = 10;
  //const [valor, funcionActualizadora] = useState(valorInicial);
  const [numero, setNumero] = useState(10);

  const incrementar = () => {
    //numero+=1;
    setNumero(numero + 1);
    console.log(numero);
  }

  return (
    <>
      <div>{numero}</div>
      <button onClick={incrementar}>
        Incrementar
      </button>
    </>
  );
}

export default App;
