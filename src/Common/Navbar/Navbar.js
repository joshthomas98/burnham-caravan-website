import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container flex_space">
          <div className="logo d-flex justify-content-start mx-3">
            <a href="/">
              <img className="mb-4" src="images/logo.png" alt="" />
            </a>
          </div>

          <div className="d-flex justify-content-end">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/testimonial">Testimonial</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header>
        <div className="container flex_space justify-content-center mb-2">
          <div className="contact flex_space ">
            <div className="box flex_space">
              <div className="icons">
                <i class="fal fa-clock"></i>
              </div>
              <div className="text">
                <h4>Working Hours</h4>
                <Link to="/contact">Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i class="fas fa-phone-volume"></i>
              </div>
              <div className="text">
                <h4>Call Us</h4>
                <Link to="/contact">+011 123 4567</Link>
              </div>
            </div>
            <div className="box flex_space">
              <div className="icons">
                <i class="far fa-envelope"></i>
              </div>
              <div className="text">
                <h4>Mail Us</h4>
                <Link to="/contact">info@exampal.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
