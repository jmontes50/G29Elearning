//Un fragment es un contenedor invisible que no se renderiza en el DOM.

//Un componente es una función, y al ser una función puede recibir parámetros (props).
const Parrafo = (props) => {
  //los props van a a llegar como un objeto.
  console.log("props", props);
  return (
    <>
      <p>
        Este es un Párrafo: {props.texto}
        <br />
        Este es el número: {props.numero}
      </p>
      <button onClick={() => props.accion(props.texto)}>
        Saludar
      </button>
    </>
  );
};

export default Parrafo;
