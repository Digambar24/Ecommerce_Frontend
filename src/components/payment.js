// src/pages/Payment.js
import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Payment() {
  const { items, total } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment successful!");
    navigate("/");
  };

  const totalItemsInCart = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h2>Payment Details</h2>
            <div className="card p-4 mb-4">
              <h4>Order Summary</h4>
              <ul className="list-group list-group-flush">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between"
                  >
                    <div>
                      {item.title} (x{item.quantity})
                    </div>
                    <div>Rs. {(item.price * item.quantity).toFixed(2)}</div>
                  </li>
                ))}
              </ul>
              <div className="d-flex justify-content-between mt-3">
                <h5>Total Items:</h5>
                <h5>{totalItemsInCart}</h5>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <h5>Total:</h5>
                <h5>Rs. {total.toFixed(2)}</h5>
              </div>
            </div>

            <div className="card p-4">
              <h4>Payment Method</h4>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="creditCard"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="creditCard">
                  Credit Card
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="debitCard"
                />
                <label className="form-check-label" htmlFor="debitCard">
                  Debit Card
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="upi"
                />
                <label className="form-check-label" htmlFor="upi">
                  UPI
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMethod"
                  id="netBanking"
                />
                <label className="form-check-label" htmlFor="netBanking">
                  Net Banking
                </label>
              </div>

              <button
                className="btn btn-success mt-3 w-100"
                onClick={handlePayment}
              >
                Complete Payment
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-4">
              <h4>Delivery Address</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">State</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pincode</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" required />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
