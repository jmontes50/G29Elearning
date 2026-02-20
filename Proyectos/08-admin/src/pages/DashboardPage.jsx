import { useState, useEffect } from "react";
import { requestProducts } from "../services/productosService";
import TableProducts from "../components/TableProducts";
import { Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [products, setProducts] = useState([]);

  const actions = [
    {
      name: "Editar Producto",
      component: (id) => (
        <Link className="btn btn-primary" to={`/actualizar-producto/${id}`}>
          <Pencil size={16} />
        </Link>
      ),
    },
    {
      name: "Eliminar Producto",
      component: (id) => (
        <button className="btn btn-warning ml-2" onClick={() => alert(`Eliminar producto con ID: ${id}`)}>
          <Trash size={16} />
        </button>
      ),
    }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await requestProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <TableProducts products={products} actions={actions} />
    </div>
  );
};

export default DashboardPage;
