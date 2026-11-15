
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Hero.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Left Content */}
          <div className="col-lg-6">
            <span className="hero-tag">
              Welcome to Our Website
            </span>

            <h1 className="hero-title">
              Build Your
              <span> Digital Future</span>
            </h1>

            <p className="hero-description">
              We create modern, responsive and beautiful
              digital experiences to help your business grow.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-primary me-3">
                Get Started
              </button>

              <button className="btn btn-outline-dark">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
              alt="Web development workspace"
              className="img-fluid hero-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
