import React from "react";

import "./hero.css";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_text_container">
        <div>
          <h1 className="hero_title">Insurance for Micro Mobility</h1>
          <span className="hero_underscore"></span>
        </div>

        <p className="hero_tagline">
          Register now for latest updates of getting your PEV insured{" "}
        </p>
        <button className="cta_register">Register</button>
        <p className="hero_cta_tagline">Discover More</p>
      </div>
    </div>
  );
};

export default Hero;