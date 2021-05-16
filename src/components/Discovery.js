import React from "react";
import story1 from "../img/story-1.jpeg";
import story2 from "../img/story-2.jpeg";
function Discovery() {
  return (
    <>
      <div className="discovery__image">
        <img
          data-aos="zoom-out"
          src={story1}
          alt="story1"
          className="discovery__image--img1"
        />
        <img
          data-aos="zoom-out"
          data-aos-delay="200"
          src={story2}
          alt="story2"
          className="discovery__image--img2"
        />
      </div>
      <div className="discovery__content">
        <h4 data-aos="fade-up" className="discovery__content__header1">
          happy customers
        </h4>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="discovery__content__header2"
        >
          “The best decision of our lives”
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="discovery__content__paragraph"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <a
          data-aos="fade-up"
          data-aos-delay="600"
          href="#"
          className="discovery__content__btn"
        >
          find your own home
        </a>
      </div>
    </>
  );
}

export default Discovery;
