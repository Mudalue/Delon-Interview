import React from "react";
import logo from '../assets/LOGO.svg'
import { Link } from "react-router-dom";
const style ={
    text: {
        paddingTop: 10,
    }, 
    button: {
        boxShadow: 'none',
        background: 'transparent',
        border: '1px solid #039BF0',
        color: '#039BF0'
    }
}
const Navbar = ({ text, buttontext, link }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <a className="navbar-brand" href="#0">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <div className="d-flex">
              <p style={style.text}>{text}</p>
              <div>
                <Link to={link} className="btn fw-bold mx-2" style={style.button} >{buttontext} </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
