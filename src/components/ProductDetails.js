import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./details.css";

let ProductDetails = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...product,
        quantity: quantity,
      },
    });
    alert(`${quantity} ${product.title} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/payment");
  };

  return (
    <section id="product-info" className="container my-5">
      <div className="row">
        <div className="col-md-6 item-image-parent">
          <div className="item-list-vertical mb-2">
            <div className="thumb-box">
              <img src={product.image} alt="thumbnail" />
            </div>
            <div className="thumb-box">
              <img src="https://i.ibb.co/Jt5zc58/thumb2.jpg" alt="thumbnail" />
            </div>
            <div className="thumb-box">
              <img src="https://i.ibb.co/Yf9LMpy/thumb3.jpg" alt="thumbnail" />
            </div>
            <div className="thumb-box">
              <img src="https://i.ibb.co/60hPGy2/thumb4.jpg" alt="thumbnail" />
            </div>
          </div>
          <div className="item-image-main">
            <img src={product.image} alt="default" />
          </div>
        </div>

        <div className="col-md-6 item-info-parent">
          <div className="main-info">
            <h4>{product.title}</h4>
            <div className="star-rating">
              <span>★★★★</span>★
            </div>
            <p>
              Price: <span id="price">₹ {product.price}</span>
            </p>
          </div>

          <div className="select-items">
            <div className="change-color mt-3">
              <label>
                <b>Colour:</b> Black
              </label>
              <br />
              <div className="thumb-box d-inline-block me-2">
                <img
                  src="https://i.ibb.co/QjkJJk3/select1.jpg"
                  alt="thumbnail"
                />
              </div>
              <div className="thumb-box d-inline-block">
                <img
                  src="https://i.ibb.co/C297yD0/select2.jpg"
                  alt="thumbnail"
                />
              </div>
            </div>

            <div className="change-size mt-3">
              <label>
                <b>Size:</b>
              </label>
              <br />
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>2XL</option>
              </select>
            </div>

            <div className="description mt-4">
              <p>{product.description}</p>
              <ul>
                <li>Care Instructions: Machine Wash</li>
                <li>Fit Type: Classic Fit</li>
                <li>Color name: Black-White</li>
                <li>Material: Cotton</li>
                <li>Pattern: Solid</li>
              </ul>
            </div>

            <div className="mt-4 d-flex align-items-center gap-3">
              <div className="input-group" style={{ width: "120px" }}>
                <button
                  className="btn btn-outline-secondary"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <input
                  type="text"
                  className="form-control text-center"
                  value={quantity}
                  readOnly
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>

              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button className="btn btn-success" onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
