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
          <th>Imagen</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {/* renderizado de listas */}
        {props.products.map((product) => (
          <tr key={product.id}>
            <td>{product.nombre}</td>
            <td>{product.descripcion}</td>
            <td>{product.stock}</td>
            <td>{`S/ ${product.precio}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableProducts
