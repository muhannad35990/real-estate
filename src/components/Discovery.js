import React from "react";
import story1 from "../img/story-1.jpeg";
import story2 from "../img/story-2.jpeg";
function Discovery() {
  return (
    <>
      <div className="discovery__image">
        <img src={story1} alt="story1" className="discovery__image--img1" />
        <img src={story2} alt="story2" className="discovery__image--img2" />
      </div>
      <div className="discovery__content">
        <h4 className="discovery__content__header1">happy customers</h4>
        <h1 className="discovery__content__header2">
          “The best decision of our lives”
        </h1>
        <p className="discovery__content__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <a href="#" className="discovery__content__btn">
          find your own home
        </a>
      </div>
    </>
  );
}

export default Discovery;
