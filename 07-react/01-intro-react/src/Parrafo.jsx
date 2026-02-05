//Un componente es una función, y al ser una función puede recibir parámetros (props).
const Parrafo = (props) => {
  //los props van a a llegar como un objeto.
  console.log("props",props);
  return <p>
    Este es un Párrafo: {props.texto}
    <br />
    Este es el número: {props.numero}
    </p>
}

export default Parrafo;
