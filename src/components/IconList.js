import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import setCurrentProduct from "../actions/setCurrentProduct";
import addToCart from "../actions/addToCart";//

function IconList({ product }) {
  const dispatch = useDispatch();

  const handleCurrentProduct = () => {
    dispatch(setCurrentProduct(product));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("Added to cart successfully!");
  };
  

  return (
    <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
      <Link onClick={handleCurrentProduct} to={{ pathname: "./details" }}>
        <li className="icon">
          <span className="fas fa-expand-arrows-alt"></span>
        </li>
      </Link>

      <Link onClick={() => alert("I am wishlist Page")}>
        <li className="icon mx-3">
          <span className="far fa-heart"></span>
        </li>
      </Link>

      <Link onClick={handleAddToCart}>
        <li className="icon">
          <span className="fas fa-shopping-bag"></span>
        </li>
      </Link>
    </ul>
  );
}

export default IconList;
