import React from 'react';
import IconList from './IconList';

let ProductItem = ({product}) =>{
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="product-item h-100 d-flex flex-column align-items-center justify-content-center p-3">
        <div className="product">
          <img
            src={product.image}
            alt={product.title}/>
          <IconList product={product}/>
        </div>
        <div className="tag bg-red">sale</div>
        <div className="title pt-4 pb-1">{product.title}</div>
        <div className="d-flex align-content-center justify-content-center">
          <span className="fas fa-star"></span>
          <span className="fas fa-star"></span>
          <span className="fas fa-star"></span>
          <span className="fas fa-star"></span>
          <span className="fas fa-star"></span>
        </div>
        <div className="price">Rs. {product.price}</div>
      </div>
    </div>
  );
}

export default ProductItem;