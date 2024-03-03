import React from "react";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <section className="features top">
        <div className="aboutCard flex_space">
          <div className="row">
            <h4>About Us</h4>
            <h1>Creating Unforgettable Memories</h1>
            <p>
              Welcome to [Caravan Rental Name], your premier destination for
              unforgettable static caravan experiences in Burnham-On-Sea! At
              [Caravan Rental Name], we are passionate about providing
              exceptional accommodations and creating memorable vacation
              experiences for our guests.
            </p>
            <p>
              Nestled along the serene coastline of Burnham-On-Sea, our caravan
              rental offers a sanctuary where guests can unwind, rejuvenate, and
              immerse themselves in the beauty of nature. Whether you're seeking
              a peaceful retreat by the sea or an adventure-filled getaway, we
              strive to exceed your expectations and ensure that every moment of
              your stay is nothing short of extraordinary.
            </p>
          </div>

          <div className="row image justify-content-center align-items-center">
            <img src="/images/feature-img-1.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
