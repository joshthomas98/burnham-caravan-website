import React from "react";
import "../popular/MostPopular.css";
import "./Explore.css";
import Card from "./Card";
import ExploreData from "./ExploreData";

const Explore = () => {
  return (
    <>
      <section className="popular works">
        <div className="container">
          <div className="heading">
            <h1>Explore Burnham-On-Sea </h1>
            <div className="line"></div>
          </div>

          <div className="content grid">
            {ExploreData.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  title={value.title}
                  description={value.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Explore;
