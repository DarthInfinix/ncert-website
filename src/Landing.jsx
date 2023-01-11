import React, { useState, useRef } from "react";
import homeVector1 from "./assets/homepage-vector-1.png";
import navbarVector from "./assets/navbar-vector.png";
import { BiMenu } from "react-icons/bi";
import logo from "./assets/image 1.png";

const Landing = () => {
  let hamburgerMenuRef = useRef("");

  let [menu, setMenu] = useState(true);
  function handleClick(e) {
    menu
      ? (hamburgerMenuRef.current.className = "hamburger-revealed")
      : (hamburgerMenuRef.current.className = "hamburger-menu");
    setMenu(!menu);
  }

  return (
    <>
      <nav>
        <div className="hamburger" onClick={handleClick}>
          <BiMenu />
        </div>
        <div className="hamburger-menu" ref={hamburgerMenuRef}>
          <ul>
            <li> HOME</li>
            <li> ABOUT</li>
            <li> NOTICES</li>
            <li> CONTACT</li>
          </ul>
        </div>

        <div
          className="nav-side-1"
          style={menu ? { display: "inherit" } : { display: "none" }}
        >
          <img src={logo} alt="ncert-logo" className="ncert-logo" />

          <div className="ncert-name">
            <span className="ncert"> NCERT</span>
          </div>
        </div>
        <div className="nav-side-2">
          <ul>
            <li> home</li>
            <li> home</li>
            <li> home</li>
            <li> home</li>
          </ul>
        </div>
      </nav>
      <div className="hero">
        <img src={logo} alt="ncert logo" className="hero-ncert-logo" />
      </div>
      <div className="hero-container-container">
        <div className="hero-button-container">
          <ul>
            <li className="pdf-button">
              BOOK PDFs
              <span className="pdf-line"></span>
            </li>
            <li className="about-button">
              ABOUT US <span className="about-line"></span>
            </li>
            <li className="notices">
              NOTICES <span className="notice-line"></span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Landing;
