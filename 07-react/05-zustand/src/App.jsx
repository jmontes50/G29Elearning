import useContadorStore from './store';

const App = () => {

  // console.log(useContadorStore());
  //useContadorStore es una función, y al ejecutarla nos devuelve el estado del store (un objeto)
  //al ser un objeto lo podemos desestructurar para obtener lo que queremos
  const { contador, subirAMil, incrementar } = useContadorStore();

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={subirAMil}>Subir a Mil</button>
    </div>
  )
}

export default App
