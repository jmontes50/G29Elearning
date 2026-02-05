import { useState } from "react";

const App = () => {
  //tiene que estar dentro del componente
  // let numero = 10;
  //const [valor, funcionActualizadora] = useState(valorInicial);
  const [numero, setNumero] = useState(10);
  //componentes controlados para los input
  //amarrar el valor del input a un estado
  const [valor, setValor] = useState("");

  const incrementar = () => {
    //numero+=1;
    setNumero(numero + 1); //setter
    console.log(numero);
  }

  const manejarInput = (ev) => {
    console.log(ev.target.value);
    setValor(ev.target.value);
  }

  return (
    <>
      <div>{numero}</div>
      <button onClick={incrementar}>
        Incrementar
      </button>
      <hr/>
      <input
        type="text"
        value={valor}
        onChange={manejarInput}
      />
    </>
  );
}

export default App;
