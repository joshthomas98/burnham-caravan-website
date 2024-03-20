import React from "react";
import Cards from "./Cards";
import "./MostPopular.css";

const MostPopular = () => {
  return (
    <>
      <section className="popular top pb-4">
        <div className="full_container">
          <div className="heading">
            <h1>Most Popular Stays</h1>
            <div className="line"></div>
          </div>

          <div className="content">
            <Cards />
          </div>
        </div>
      </section>
    </>
  );
};

export default MostPopular;
