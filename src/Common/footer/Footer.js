import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container grid">
        <div className="box">
          <h2>About [Caravan Rental Name]</h2>
          <p>
            Welcome to [Caravan Rental Name], your premier destination for
            static caravan rentals in Burnham-On-Sea! We offer comfortable and
            memorable stays for your seaside getaway. Explore the beauty of
            Burnham-On-Sea from the comfort of our caravans.
          </p>
        </div>

        <div className="box">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/destinations">Destinations</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="box">
          <h2>Contact Us</h2>
          <p>
            [Caravan Rental Name]
            <br />
            Address: [Your Address], Burnham-On-Sea
            <br />
            Phone: [Your Phone Number]
            <br />
            Email: [Your Email Address]
          </p>
        </div>

        <div className="box">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Stay updated with our latest offers and news by subscribing to our
            newsletter.
          </p>
          <input type="text" placeholder="Enter your email" />
          <Button
            className="primary-btn"
            style={{ backgroundColor: "#31b675" }}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div className="legal">
        <p>
          © {new Date().getFullYear()} [Caravan Rental Name]. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
