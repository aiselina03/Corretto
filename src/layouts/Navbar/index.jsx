import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  function stickyNavbar() {
    if (window.scrollY >= 900) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener("scroll", stickyNavbar);

  return (
    <>
      {/* responsiv olmayan navbar START */}
      <div className={`navbar ${navbar === true ? "sticky" : ""}`}>
        <div className="correttoLogo">
          <img
            src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-light.png"
            alt=""
          />
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink> PAGES</NavLink>
            </li>
            <li>
              <NavLink>PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink>CONTACT</NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>SHOP</NavLink>
            </li>
          </ul>

          <div className="icons">
            <NavLink>
              <i class="fa-regular fa-cart-shopping"></i>
              <sup style={{ fontFamily: "sans-serif" }}>0</sup>
            </NavLink>
            <NavLink>
              <i class="fa-regular fa-magnifying-glass"></i>
            </NavLink>
          </div>
        </div>
      </div>
      {/* responsiv olmayan navbar END */}

      {/* Responsive navbar */}
      <div className={`resNavbar ${navbar === true ? "sticky" : ""}`}>
        <div className="row">
           <div className="resCorrettoLogo">
          <img
            src="https://corretto.qodeinteractive.com/wp-content/themes/corretto/assets/img/logo-mobile.png"
            alt=""
          />
        </div>
        <div className="menuBars" onClick={toggleNavbar}>
          <i className="fa-regular fa-bars"></i>
        </div> 
        </div>
        <div className={`resMenu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink> PAGES</NavLink>
            </li>
            <li>
              <NavLink>PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink>CONTACT</NavLink>
            </li>
            <li>
              <NavLink to={"/shop"}>SHOP</NavLink>
            </li>
            <li>
              <NavLink>BASKET</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
