import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { requestProductById } from '../services/productosService';

const UpdateProductPage = () => {

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const producto = await requestProductById(id);
        console.log(producto);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    }
    getProduct();
  }, [id])

  return (
    <div>UpdateProductPage</div>
  )
}

export default UpdateProductPage
