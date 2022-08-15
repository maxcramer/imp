import React from "react";

import "./who.css";

import EUC from "../../media/electric-unicycle.png";
import EScoot from "../../media/electric-scooter.png";
import ESkate from "../../media/skateboard.png";
import EBike from "../../media/electric-bike.png";

const Who = () => {
  return (
    <div className="who_container">
      <h1 className="who_title">Who Do We Cover?</h1>
      <span className="who_underscore"></span>
      <div className="who_items">
        <div>
          <img className="who_icon" src={EUC} alt="Electric Unicycle Icon" />
          <h2>Electric Unicycle</h2>
        </div>
        <div>
          <img className="who_icon" src={EScoot} alt="Electric Scooter Icon" />
          <h2>Electric Scooter</h2>
        </div>
        <div>
          <img className="who_icon" src={EBike} alt="Electric Bicycle Icon" />
          <h2>Electric Pedal Bike</h2>
        </div>
        <div>
          <img
            className="who_icon"
            src={ESkate}
            alt="Electric Skateboard Icon"
          />
          <h2>Electric Skateboard</h2>
        </div>
      </div>
    </div>
  );
};

export default Who;
