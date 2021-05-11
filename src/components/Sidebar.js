import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ApartmentIcon from "@material-ui/icons/Apartment";
function Sidebar() {
  return (
    <div className="sidebar">
      <input type="checkbox" className="sidebar__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="sidebar__Hambutton">
        <span className="sidebar__icon">&nbsp;</span>
      </label>
      <div className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <HomeIcon className="sidebar__navicon" />
            <a href="#" className="sidebar__link">
              Home
            </a>
          </li>
          <li className="sidebar__item">
            <PersonIcon className="sidebar__navicon" />
            <a href="#" className="sidebar__link">
              realtors
            </a>
          </li>
          <li className="sidebar__item">
            <AccountBalanceIcon className="sidebar__navicon" />
            <a href="#" className="sidebar__link">
              villas
            </a>
          </li>
          <li className="sidebar__item">
            <ApartmentIcon className="sidebar__navicon" />
            <a href="#" className="sidebar__link">
              apartments
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
