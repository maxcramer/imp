import React from "react";

import "./news.css";

import onewheel from "../../media/onewheel-2.png";

const News = () => {
  return (
    <div className="news_container">
      <div className="news_signup">
        <div>
          <h1 className="signup_title">RECEIVE UPDATES</h1>
          <h4 className="signup_tagline">
            Stay up to date with our launch and other legal jargon
          </h4>
          <input className="signup_input" placeholder="Email" type="email" />
          <button className="signup_button">
            <h5>KEEP ME UPDATED</h5>
          </button>
        </div>
      </div>
      {/* <div>
        <img src={onewheel} alt="Onewheel on beach" />
      </div> */}
    </div>
  );
};

export default News;
