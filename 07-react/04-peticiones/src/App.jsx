import { useState, useEffect } from "react";

const App = () => {

  //null, undefined, "", 0 son equivalentes a false
  const [productos, setProductos] = useState(null);
  const [contador, setContador] = useState(0);

  const URI = "https://697c2626889a1aecfeb18999.mockapi.io/usuarios";

  useEffect(() => {
    console.log(productos);
    console.log("Effect!", contador);
    //cuando indicamos un [] en las dependencias el useEffect se ejecutará Solo '1 vez despues del montaje del componente

    // fetch(URI)
    // .then((rpta) => {
    //   return rpta.json();
    // })
    // .then((data) => {
    //   console.log(data);
    //   setProductos(data);
    // })
    // .catch((error) => {
    //   console.log(error);
    // })
    const getData = async () => {
      try {
        const rpta = await fetch(URI);
        console.log(rpta)
        const data = await rpta.json();
        console.log(data)
        setProductos(data);
      } catch (error) {
        console.log(error)
      }
    }
    getData();
  },[])

  return (
    <div>
      <h3>Peticiones</h3>
      {/* renderizado de listas, transformar datos a algo que entienda React como JSX */}
      {/*al agregar productos && es como hacer un IF aprovechando el operador AND &&  */}
      {/* Siempre que hagamos renderizado listas a c/item hay que indicarle su key que tiene que ser único */}
      {/* {productos && productos.map((item) => {
        return <p>{item.nombre_completo}</p>
      })} */}
      {productos && productos.map((item) => (<p key={item.id}>{item.nombre_completo}</p>))}

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
