import React from "react";
import gal1 from "../img/gal-1.jpeg";
import gal2 from "../img/gal-2.jpeg";
import gal3 from "../img/gal-3.jpeg";
import gal4 from "../img/gal-4.jpeg";
import gal5 from "../img/gal-5.jpeg";
import gal6 from "../img/gal-6.jpeg";
import gal7 from "../img/gal-7.jpeg";
import gal8 from "../img/gal-8.jpeg";
import gal9 from "../img/gal-9.jpeg";
import gal10 from "../img/gal-10.jpeg";
import gal11 from "../img/gal-11.jpeg";
import gal12 from "../img/gal-12.jpeg";
import gal13 from "../img/gal-13.jpeg";
import gal14 from "../img/gal-14.jpeg";
function Gallery() {
  return (
    <div className="gallery">
      <img
        data-aos="zoom-out"
        src={gal1}
        alt="gallery image 1"
        className="gallery__img gallery__img--1"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="50"
        src={gal2}
        alt="gallery image 2"
        className="gallery__img gallery__img--2"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="100"
        src={gal3}
        alt="gallery image 3"
        className="gallery__img gallery__img--3"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="150"
        src={gal4}
        alt="gallery image 4"
        className="gallery__img gallery__img--4"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="200"
        src={gal5}
        alt="gallery image 5"
        className="gallery__img gallery__img--5"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="250"
        src={gal6}
        alt="gallery image 6"
        className="gallery__img gallery__img--6"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="300"
        src={gal7}
        alt="gallery image 7"
        className="gallery__img gallery__img--7"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="350"
        src={gal8}
        alt="gallery image 8"
        className="gallery__img gallery__img--8"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="400"
        src={gal9}
        alt="gallery image 9"
        className="gallery__img gallery__img--9"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="450"
        src={gal10}
        alt="gallery image 10"
        className="gallery__img gallery__img--10"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="500"
        src={gal11}
        alt="gallery image 11"
        className="gallery__img gallery__img--11"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="550"
        src={gal12}
        alt="gallery image 12"
        className="gallery__img gallery__img--12"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="600"
        src={gal13}
        alt="gallery image 13"
        className="gallery__img gallery__img--13"
      />
      <img
        data-aos="zoom-out"
        data-aos-delay="650"
        src={gal14}
        alt="gallery image 14"
        className="gallery__img gallery__img--14"
      />
    </div>
  );
}

export default Gallery;
