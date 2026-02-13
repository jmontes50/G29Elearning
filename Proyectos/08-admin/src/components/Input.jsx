const Input = (props) => {
  return (
    <div className="mb-3 flex flex-col gap-3">
      <label className="font-semibold">
        {props.inputNombre}
      </label>
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
