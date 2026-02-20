import { useState, useEffect } from "react";
import { requestProducts, deleteProduct } from "../services/productosService";
import TableProducts from "../components/TableProducts";
import { Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardPage = () => {
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title:"Estás seguro?",
        text: "Esta acción es irreversible",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "No, Cancelar",
        confirmButtonText: "Si, Eliminar",
        theme:"dark"
      })
      // console.log(result)
      if(result.isConfirmed) {
        await deleteProduct(id);
        await Swal.fire({
          title: "Producto Eliminado",
          icon: "success",
          theme:"dark"
        })
      }
      //filtrando el producto eliminado
      const afterDeleteProducts = products.filter((prod) => prod.id !== id);
      setProducts(afterDeleteProducts);
    } catch (error) {
      console.log(error)
    }
  }

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
        <button className="btn btn-warning ml-2" onClick={() => {
          handleDelete(id)
        }}>
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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <TableProducts products={products} actions={actions} />
    </div>
  );
};

export default DashboardPage;
