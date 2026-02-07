const TableProducts = (props) => {

  return (
    // En react para algunos atributos de HTML se usan nombres diferentes, por ejemplo className en vez de class, htmlFor en vez de for.
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
    </table>
  )
}

export default TableProducts
