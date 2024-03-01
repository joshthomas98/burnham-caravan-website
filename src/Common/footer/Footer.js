import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container grid">
        <div className="box">
          <h2>About [Caravan Rental Name]</h2>
          <p>
            Welcome to [Caravan Rental Name], your premier destination for
            unforgettable static caravan experiences in Burnham-On-Sea! At
            [Caravan Rental Name], we are passionate about providing exceptional
            accommodations and creating memorable vacation experiences for our
            guests.
          </p>
          <div className="icon flex_space">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>

        <div className="box">
          <h2>Navigation</h2>
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
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="box post">
          <h2>Recent Posts</h2>
          <ul>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <label className="fa fa-calendar-alt"></label>
              <span>01 Oct 2020</span>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <label className="fa fa-calendar-alt"></label>
              <span>01 Oct 2020</span>
            </li>
            <li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <label className="fa fa-calendar-alt"></label>
              <span>01 Oct 2020</span>
            </li>
          </ul>
        </div>

        <div className="box">
          <h2>Newsletter</h2>
          <p>
            Subscribe to our newsletter for the latest updates and promotions.
          </p>

          <input type="text" name="" id="" />
          <input type="text" className="primary-btn" value="SUBSCRIBE" />
        </div>
      </div>
      <div className="legal">
        <p>© 2022 [Caravan Rental Name]. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
