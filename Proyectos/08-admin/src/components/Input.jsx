const Input = (props) => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      <label className="font-semibold">
        {props.inputNombre}
      </label>
      <input
        type={props.tipo}
        placeholder={props.placeholder}
        // producto["descripcion"]
        value={props.value[props.name]}
        onChange={props.manejarInputs}
        name={props.name}
        className='input w-full'
      />
    </div>
  )
}

export default Input
