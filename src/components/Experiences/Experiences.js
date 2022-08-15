import React from "react";

import "./Experiences.css";

import EUCIcon from "../../media/electric-unicycle.png";
import EScoot from "../../media/electric-scooter.png";
import Eskate from "../../media/skateboard.png";
const Experiences = () => {
  return (
    <div className="exp_container">
      <div className="exp_container_items_parent">
        <div className="exp_item">
          <img
            className="exp_icon"
            src={EUCIcon}
            alt="Electric Unicycle Icon"
          />
          <h2>Protecting Riders</h2>{" "}
          <p>Been hit & injured by another road user?</p>
        </div>
        <div className="exp_item">
          <img className="exp_icon" src={EScoot} alt="" />{" "}
          <h2>Vehicle Damage Protection</h2>{" "}
          <p>
            Has your PEV been damaged in an accident that wasn't your fault?
          </p>
        </div>
        <div className="exp_item">
          <img className="exp_icon" src={Eskate} alt="" /> <h2>Liability</h2>{" "}
          <p>Have you had an accident with a third party?</p>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
