import React, { useState } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import HouseIcon from "@material-ui/icons/House";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { IconButton } from "@material-ui/core";

function SingleCard({ image, name, location, rooms, area, price, delay }) {
  const [fav, setfav] = useState(false);
  return (
    <div data-aos="fade-up" data-aos-delay={delay} className="card">
      <img src={image} alt="image" className="card__image" />
      <IconButton onClick={() => setfav(!fav)} className="card__likebtn">
        {fav ? (
          <FavoriteIcon className="card__like" />
        ) : (
          <FavoriteBorderIcon className="card__like" />
        )}
      </IconButton>

      <h5 className="card__name">{name}</h5>
      <div className="card__location">
        <LocationOnIcon className="card__icon" />
        <p>{location}</p>
      </div>
      <div className="card__rooms">
        <PersonOutlineIcon className="card__icon" />
        <p>{rooms} Rooms</p>
      </div>
      <div className="card__area">
        <HouseIcon className="card__icon" />
        <p>
          {area} m<sup>2</sup>
        </p>
      </div>
      <div className="card__price">
        <AttachMoneyIcon className="card__icon" />
        <p>${price}</p>
      </div>
      <a href="#" className="card__btn">
        Contact realtor
      </a>
    </div>
  );
}

export default SingleCard;
