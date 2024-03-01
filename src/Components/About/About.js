import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>What Sets Us Apart</h1>
            <p>
              At [Caravan Rental Name], we believe in the power of attention to
              detail to create exceptional experiences for our guests. From the
              moment you arrive, you'll be greeted with warm hospitality and
              personalised service that sets us apart. Our caravans are
              meticulously maintained, offering modern amenities and cosy
              interiors to ensure your stay is both comfortable and memorable.
            </p>
            <p>
              We understand the importance of those little touches that make a
              big difference. Whether it's enjoying a cup of tea on your private
              deck or exploring the picturesque surroundings of Burnham-On-Sea,
              we're dedicated to ensuring your stay with us is truly
              unforgettable.
            </p>
          </div>
          <div className="row image justify-content-center align-items-center">
            <img src="/images/feature-img-1.jpg" alt="" />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
