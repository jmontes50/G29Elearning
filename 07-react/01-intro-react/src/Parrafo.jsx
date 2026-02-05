//Un componente es una función, y al ser una función puede recibir parámetros (props).
const Parrafo = (props) => {
  //los props van a a llegar como un objeto.
  console.log("props",props);
  return <p>
    Este es un Párrafo: {props.texto}
    </p>
}

export default Parrafo;
