import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/Navbar";

function Cart() {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity > 0) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { ...product, quantity: newQuantity },
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2>Your Cart</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td>Rs.{item.price}</td>
                    <td>
                      <div className="input-group" style={{ width: "120px" }}>
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            handleQuantityChange(item, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={item.quantity}
                          readOnly
                        />
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            handleQuantityChange(item, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>Rs.{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemove(item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Order Summary</h5>
                <hr />
                <div className="d-flex justify-content-between mb-2">
                  <span>Total Items:</span>
                  <span>
                    {items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <strong>Total Price:</strong>
                  <strong>Rs.{total.toFixed(2)}</strong>
                </div>
                <button className="btn btn-primary w-100">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
