import { useState, useEffect } from "react";
import { requestProducts } from "../services/productosService";
import TableProducts from "../components/TableProducts";
import { Pencil } from "lucide-react";

const DashboardPage = () => {
  const [products, setProducts] = useState([]);

  const actions = [
    {
      name: "Editar Producto",
      component: (id) => (
        <button className="btn btn-primary" onClick={() => console.log(id)}>
          <Pencil size={16} />
        </button>
      ),
    },
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
