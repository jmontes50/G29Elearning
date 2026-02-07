import { useState, useEffect } from "react"
import { requestProducts } from "../services/productosService"
import TableProducts from "../components/TableProducts";

const DashboardPage = () => {
  const [products, setProducts] = useState([]);

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
      <TableProducts products={products} />
    </div>
  )
}

export default DashboardPage
