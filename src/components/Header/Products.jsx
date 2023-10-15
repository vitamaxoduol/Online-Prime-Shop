import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Products() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Here you should have logic to fetch products based on the category from the API
    // For example:
    fetch(`https://dummyjson.com/products/category`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, [category]);

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Products;