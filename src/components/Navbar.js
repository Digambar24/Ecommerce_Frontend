import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartCounter = useSelector((state) => state.cart?.cartCounter || 0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS459t6dUkjLb5NVtQdeyHq9IYwyAHuopELfg&s"
              alt="Logo"
              width="80"
              height="48"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/men">Men</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/women">Women</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/kids">Kids</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/beauty">Beauty</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/living">Living</Link></li>
            </ul>

            <Link to="/cart" className="nav-link position-relative">
              <i className="fas fa-shopping-cart fa-lg"></i>
              {cartCounter > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCounter}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
