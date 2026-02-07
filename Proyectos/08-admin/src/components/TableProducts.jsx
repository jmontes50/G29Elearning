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
            {/* para cuando usamos estilos inline (style) tenemos que usarlos de la forma que JS los usa, como un objeto */}
            <td>
              <img
                src={product.imagen}
                alt={product.nombre}
                style={{ width: "65px", height:"65px", borderRadius: "5px" }}
              />
            </td>
            <td>
              {props.actions.map((action, index) => (
                <span key={index}>{action.component(product.id)}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableProducts;
