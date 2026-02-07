import { useState, useEffect } from "react"
import { requestProducts } from "../services/productosService"

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
    <div>DashboardPage</div>
  )
}

export default DashboardPage
