import React from "react";

import "./How.css";

const How = () => {
  return (
    <div className="how_container">
      <div className="how_parent_items_container">
        <div>
          <h1 className="how_title">How Does It Work?</h1>
          <span className="how_underscore"></span>
        </div>
        <div className="how_items_container">
          <div className="how_item">
            <h1>1.</h1>
            <h2>Sign Up</h2>
            <p>
              Complete the form to register your interest in getting your PEV
              insured
            </p>
          </div>
          <div className="how_item">
            <h1>2.</h1>
            <h2>Find The Right Policy</h2>
            <p>
              We know everyone has a different experience riding PEV and we will
              try to reflect that in your policy
            </p>
          </div>
          <div className="how_item">
            <h1>3.</h1>
            <h2>Agree & Pay</h2>
            <p>
              Once you have found the right policy for you, signing and paying
              will signify the start of the policy
            </p>
          </div>
        </div>
        <button className="how_cta_register">Register</button>
      </div>
    </div>
  );
};

export default How;
