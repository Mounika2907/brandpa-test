import React from "react";
import "../../css/Navbar.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// import logo from "../../images/logos/8.png";
// import logo from "../../images/backimage.png";
import logo from "./LOGO ON DARK.png"
// import logo from "./gold bars1.png"


import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style ={{top: "0px",height:"100px", background: "linear-gradient(to bottom, #441196 20%, #080c47 120%)" ,position:"fixed"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="index.html">
          <img src={logo} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto" style ={{color:"white"}}>
            <li className="nav-item active dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style ={{color:"white"}}
              >
                All domains
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style ={{color:"white"}}
              >
                By industry
                {/* <i className="fas fa-chevron-down" /> */}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/domain-search" style ={{color:"white"}}>
                  domain search
                </a>
                <a className="dropdown-item" href="#" style= {{color:"white"}}>
                  Transfer to us
                </a>
                <a className="dropdown-item" href="#" style ={{color:"white"}}>
                  best cupon
                </a>
              </div>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/addcart"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style ={{color:"white"}}
              >
                By style
                {/* <i className="fas fa-chevron-down" /> */}
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="blog-list.html" style ={{color:"white"}}
>
                  blog list
                </a>
                <a className="dropdown-item" href="blog-details.html" style ={{color:"white"}}
>
                  blog details
                </a>
              </div>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/contact"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Contact
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/domain-search"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style ={{color:"white"}}

              >
                About
              </a>
            </li>
          </ul>
          <ul className="navbar-icon">
            <li>
              <a href="#">
                <i>
                  {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                </i>
              </a>
              <span className="navbar-cart">0</span>
            </li>
          </ul>
          {/* <div className="navbar-btn">
            <a className="btn btn-primary">
              <i className="fas fa-plus" />
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
