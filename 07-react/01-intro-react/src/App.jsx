//JSX, es un extension de sintaxis para JavaScript que se utiliza en React para describir cómo debería verse la interfaz de usuario.

//Reglas
//1. El componente debe llamarse con mayúscula. (App, Tarjeta, Barra)
//2. Debe devolver un solo elemento padre. (div, section, fragment)

const App = () => {
  console.log("Hola desde App.jsx");

  const titulo = "Mi App desde una variable";

  // Si deseamos combinar/utilizar JS dentro de JSX, debemos usar llaves {}
  return (
    <main>
      <div>{titulo}</div>
      {console.log("Hola desde JSX")}
      <div>Hola</div>
    </main>
  )
}

//3. tiene que tener un export default para poder ser utilizado en otros archivos.
export default App;
