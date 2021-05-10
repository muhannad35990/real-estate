import React from "react";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import EmojiEventsOutlinedIcon from "@material-ui/icons/EmojiEventsOutlined";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
function Features() {
  return (
    <div className="features">
      <div className="features__item">
        <LanguageOutlinedIcon className="features__icon" />
        <h2 className="features__header">World's best luxury homes</h2>
        <p className="features__paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          nobis neque sit rerum aperiam consequatur laudantium assumenda
          nesciunt id dolorum voluptatem.
        </p>
      </div>
      <div className="features__item">
        <EmojiEventsOutlinedIcon className="features__icon" />
        <h2 className="features__header">Only the best properties</h2>
        <p className="features__paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          nobis neque sit rerum aperiam consequatur laudantium assumenda
          nesciunt id dolorum voluptatem.
        </p>
      </div>
      <div className="features__item">
        <LocationOnOutlinedIcon className="features__icon" />
        <h2 className="features__header">All homes in in top locations</h2>
        <p className="features__paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          nobis neque sit rerum aperiam consequatur laudantium assumenda
          nesciunt id dolorum voluptatem.
        </p>
      </div>
      <div className="features__item">
        <VpnKeyOutlinedIcon className="features__icon" />
        <h2 className="features__header">New home in one week</h2>
        <p className="features__paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          nobis neque sit rerum aperiam consequatur laudantium assumenda
          nesciunt id dolorum voluptatem.
        </p>
      </div>
      <div className="features__item">
        <TrendingUpOutlinedIcon className="features__icon" />
        <h2 className="features__header">Top 1% realtors</h2>
        <p className="features__paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          nobis neque sit rerum aperiam consequatur laudantium assumenda
          nesciunt id dolorum voluptatem.
        </p>
      </div>
      <div className="features__item">
        <LockOutlinedIcon className="features__icon" />
        <h2 className="features__header">Secure payments on nexter</h2>
        <p className="features__paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          nobis neque sit rerum aperiam consequatur laudantium assumenda
          nesciunt id dolorum voluptatem.
        </p>
      </div>
    </div>
  );
}

export default Features;
