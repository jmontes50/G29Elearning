import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const UpdateProductPage = () => {

  const { id } = useParams();
  console.log(id);
  return (
    <div>UpdateProductPage</div>
  )
}

export default UpdateProductPage
