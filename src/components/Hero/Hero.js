import React from "react";
import { useNavigate } from "react-router-dom";

import "./hero.css";

const Hero = () => {
  let navigate = useNavigate();
  return (
    <div className="hero_container">
      <div className="hero_text_container">
        <div>
          <h1 className="hero_title">Insurance for Micro Mobility</h1>
          <span className="hero_underscore"></span>
        </div>

        <p className="hero_tagline">
          Register now for latest updates for getting your PEV insured{" "}
        </p>
        <button
          onClick={() => {
            navigate("/register");
          }}
          className="cta_register"
        >
          Register
        </button>
        <p className="hero_cta_tagline">
          <a className="discov-more" href="#experience">
            Discover More
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
