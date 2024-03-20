import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src="images/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/testimonial">
                Testimonial
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="py-3 bg-light">
        <Container>
          <div className="d-flex justify-content-center flex-wrap">
            <div className="col-md-4 col-lg-4 mb-3">
              <div className="box d-flex align-items-center justify-content-center">
                <i className="fal fa-clock fa-2x mx-2"></i>
                <div>
                  <h4 className="mb-1">Working Hours</h4>
                  <p className="mb-0">Monday - Sunday: 9.00am to 6.00pm</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 mb-3">
              <div className="box d-flex align-items-center justify-content-center">
                <i className="fas fa-phone-volume fa-2x mx-2"></i>
                <div>
                  <h4 className="mb-1">Call Us</h4>
                  <p className="mb-0">+011 123 456</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 mb-3">
              <div className="box d-flex align-items-center justify-content-center">
                <i className="far fa-envelope fa-2x mx-2"></i>
                <div>
                  <h4 className="mb-1">Mail Us</h4>
                  <p className="mb-0">info@exampal.com</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Navigation;
