import React from "react";
import logo from "../img/logo.png";
import bbc from "../img/logo-bbc.png";
import bi from "../img/logo-bi.png";
import forbes from "../img/logo-forbes.png";
import techcrunch from "../img/logo-techcrunch.png";
function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" className="header__logo" />
        <h5 className="header__subtitle">your own home:</h5>
        <h1 className="header__title">the ultimate personal freedom</h1>
        <a href="#" className="header__btn">
          view our properties
        </a>
        <div className="header__soon">Seen on</div>
        <div className="header__soon__logos">
          <img src={bbc} alt="bbc" className="header__soon__logo" />
          <img src={bi} alt="bi" className="header__soon__logo" />
          <img src={forbes} alt="forbes" className="header__soon__logo" />
          <img
            src={techcrunch}
            alt="techcrunch"
            className="header__soon__logo"
          />
        </div>
      </div>
      <div className="realtors"></div>
    </>
  );
}

export default Header;
