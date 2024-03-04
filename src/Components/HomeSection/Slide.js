import React, { useState } from "react";
import Data from "./Data";
import { Container, Form, Button } from "react-bootstrap";

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>

        {Data.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} alt="Home Image" />}
            </div>
          );
        })}
      </section>

      <section className="slide-form">
        <div className="form-container text-black">
          <Container>
            <h2 className="pt-1 text-center">Want To Book A Stay With Us?</h2>
            <div className="text-center pb-2">
              <span>Search and Find Availability</span>
            </div>

            <Form className="text-center">
              <div className="d-inline-block mb-2 mx-2">
                <Form.Control type="date" placeholder="Check In" />
              </div>
              <div className="d-inline-block mb-2 mx-2">
                <Form.Control type="date" placeholder="Check Out" />
              </div>
              <div className="d-inline-block mb-2 mx-2">
                <Form.Control type="number" placeholder="Adult(s)(18+)" />
              </div>
              <div className="d-inline-block mb-2 mx-2">
                <Form.Control type="number" placeholder="Children(0-17)" />
              </div>
              <Button
                type="submit"
                className="submit mb-1"
                style={{ backgroundColor: "#31b675", borderColor: "#31b675" }}
              >
                Search
              </Button>
            </Form>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Home;
