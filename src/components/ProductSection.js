import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function ProductSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    };

    getProducts();
  }, []);

  return (
    <div className="container bg-white">
      <div className="row mt-5">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
