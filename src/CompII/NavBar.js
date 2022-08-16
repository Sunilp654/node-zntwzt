import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const NavBar = () => {
  // const [message, setMessage] = useState('');
  // const clickhandle = () => {
  //   alert("I'm an alert");
  // };
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const keypress = (event) => {
    if (event.key === 'Enter') {
      alert(message);
      setMessage('');
    }
  };
  const clickbutton = () => {
    alert(message);
    setMessage('');
  };

  return (
    <>
      <Nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            LOGO
          </NavLink>
          <div md={3} className="d-flex">
            <input
              className="form-control"
              type="text"
              placeholder="Enter you text"
              onChange={handleChange}
              onKeyPress={keypress}
              value={message}
            />
            <button
              className="btn btn-dark"
              onClick={() => {
                clickbutton();
              }}
            >
              Add
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/Login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Login
              </NavLink>
              <NavLink to="/Register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </NavLink>
              <NavLink to="/Cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart (0)
              </NavLink>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default NavBar;
