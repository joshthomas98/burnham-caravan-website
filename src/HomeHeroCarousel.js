import Carousel from "react-bootstrap/Carousel";

function HomeHeroCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Crowny-Hotel/public/Images/heroCarouselImages/hero-carousel-img-1.jpeg"
          alt="First Slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Crowny-Hotel/public/Images/heroCarouselImages/hero-carousel-img-1.jpeg"
          alt="Second Slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Crowny-Hotel/public/Images/heroCarouselImages/hero-carousel-img-1.jpeg"
          alt="Third Slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeHeroCarousel;
