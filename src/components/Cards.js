import React from "react";
import SingleCard from "./SingleCard";
import house1 from "../img/house-1.jpeg";
import house2 from "../img/house-2.jpeg";
import house3 from "../img/house-3.jpeg";
import house4 from "../img/house-4.jpeg";
import house5 from "../img/house-5.jpeg";
import house6 from "../img/house-6.jpeg";

function Cards() {
  return (
    <section className="cards">
      <SingleCard
        delay="0"
        image={house1}
        name="Beautiful Family House"
        location="USA"
        rooms="5"
        area="325"
        price="1,000,000"
      />
      <SingleCard
        delay="100"
        image={house2}
        name="Modern Glass Villa"
        location="Canada"
        rooms="6"
        area="450"
        price="2,850,000"
      />
      <SingleCard
        delay="200"
        image={house3}
        name="Cozy Country House"
        location="UK"
        rooms="4"
        area="250"
        price="850,000"
      />
      <SingleCard
        delay="400"
        image={house4}
        name="Large Rustical Villa"
        location="Portugal"
        rooms="6"
        area="480"
        price="1,900,000"
      />
      <SingleCard
        delay="600"
        image={house5}
        name="Majestic Palace House"
        location="USA"
        rooms="16"
        area="3350"
        price="12,500,000"
      />
      <SingleCard
        delay="800"
        image={house6}
        name="Modern Family Apartment"
        location="Italy"
        rooms="3"
        area="150"
        price="400.000"
      />
    </section>
  );
}

export default Cards;
