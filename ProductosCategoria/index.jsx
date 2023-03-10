

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductosCategoria() {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error(error));
  }, [category]);

  return (
    <div>
      <h2>Productos en la categoría {category}</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>{producto.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductosCategoria;