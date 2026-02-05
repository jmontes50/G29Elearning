const Cambiar = (props) => {

  const manejarClick = () => {
    props.funcion(1000)
  }

  return (
    <button onClick={manejarClick}>
      Cambiar
    </button>
  )
}

export default Cambiar;
