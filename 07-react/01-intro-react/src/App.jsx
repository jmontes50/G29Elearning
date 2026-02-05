//JSX, es un extension de sintaxis para JavaScript que se utiliza en React para describir cómo debería verse la interfaz de usuario.

//Reglas
//1. El componente debe llamarse con mayúscula. (App, Tarjeta, Barra)
//2. Debe devolver un solo elemento padre. (div, section, fragment)

//NT: los import no requieren la extensión del archivo (siempre y cuando sea .js o .jsx)
import Parrafo from "./Parrafo";

const App = () => {
  console.log("Hola desde App.jsx");

  const titulo = "Mi App desde una variable";
  const texto1 = "Texto 1";
  const texto2 = "Texto 2";
  const texto3 = "Texto 3";

  // Si deseamos combinar/utilizar JS dentro de JSX, debemos usar llaves {}
  return (
    <main>
      <div>{titulo}</div>
      {console.log("Hola desde JSX")}
      <div>Hola</div>
      {/* 4. Toda etiqueta/componente debe tener etiqueta de cierre o autocerrarse */}
      <hr />
      {/* {Parrafo(texto1)} */}
      <Parrafo texto={texto1} numero={10} />
      <Parrafo texto={texto2} numero={20} />
      <Parrafo texto={texto3} numero={100} />
    </main>
  )
}

//3. tiene que tener un export default para poder ser utilizado en otros archivos.
export default App;
