import React from 'react';
import { useSelector } from 'react-redux';
import ProductDetails from '../components/ProductDetails'; 
import Navbar from '../components/Navbar';

let Details = () => {
  let product = useSelector((state) => state.currentProduct.product);

  return (
    <>
      <div className='container-fluid'>
        <Navbar />
      </div>
      <div className='container'>
        <ProductDetails product={product} />
      </div>
    </>
  );
};

export default Details;
