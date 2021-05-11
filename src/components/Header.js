import React from "react";
import logo from "../img/logo.png";
import bbc from "../img/logo-bbc.png";
import bi from "../img/logo-bi.png";
import forbes from "../img/logo-forbes.png";
import techcrunch from "../img/logo-techcrunch.png";
import realtor1 from "../img/realtor-1.jpeg";
import realtor2 from "../img/realtor-2.jpeg";
import realtor3 from "../img/realtor-3.jpeg";

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
      <div className="realtors">
        <h3 className="realtors__title">top 3 realtors</h3>
        <div className="realtors__toprealtors">
          <img src={realtor1} alt="realtor" className="realtors__img" />
          <div>
            <h4 className="realtors__name">Erik Feinman</h4>
            <p className="realtors__numberOfsells">225 houses sold</p>
          </div>
        </div>

        <div className="realtors__toprealtors">
          <img src={realtor2} alt="realtor" className="realtors__img" />
          <div>
            <h4 className="realtors__name">Kim Brown</h4>
            <p className="realtors__numberOfsells">214 houses sold</p>
          </div>
        </div>

        <div className="realtors__toprealtors">
          <img src={realtor3} alt="realtor" className="realtors__img" />
          <div>
            <h4 className="realtors__name">Toby Ramsey</h4>
            <p className="realtors__numberOfsells">185 houses sold</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
