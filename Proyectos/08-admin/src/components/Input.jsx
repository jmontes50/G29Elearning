const Input = (props) => {
  return (
    <div>
      <label>{props.inputNombre}</label>
      <input
        type={props.tipo}
        placeholder={props.placeholder}
        value={""}
        onChange={() => {}}
        className='input'
      />
    </div>
  )
}

export default Input
