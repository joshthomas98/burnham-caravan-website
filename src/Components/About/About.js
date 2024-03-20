import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
      <section className="about top">
        <Container>
          <AboutCard />
        </Container>
      </section>

      <section className="features top pb-5">
        <Container>
          <Row className="aboutCard flex_space">
            <Col
              xs={12}
              lg={5}
              className="d-flex align-items-center justify-content-center"
            >
              <img
                src="/images/feature-img-1.jpg"
                alt=""
                className="img-fluid"
              />
            </Col>

            <Col xs={12} lg={7}>
              <div className="row row1">
                <h1>What Sets Us Apart</h1>
                <p>
                  At [Caravan Rental Name], we believe in the power of attention
                  to detail to create exceptional experiences for our guests.
                  From the moment you arrive, you'll be greeted with warm
                  hospitality and personalised service that sets us apart. Our
                  caravans are meticulously maintained, offering modern
                  amenities and cosy interiors to ensure your stay is both
                  comfortable and memorable.
                </p>
                <p>
                  We understand the importance of those little touches that make
                  a big difference. Whether it's enjoying a cup of tea on your
                  private deck or exploring the picturesque surroundings of
                  Burnham-On-Sea, we're dedicated to ensuring your stay with us
                  is truly unforgettable.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
