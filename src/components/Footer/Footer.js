import React from "react";
import { useNavigate } from "react-router-dom";

import facebook from "../../media/facebook.png";
import ig from "../../media/instagram.png";
import youtube from "../../media/youtube.png";

import "./footer.css";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer_info">
        {/* <div className="footer_socials">
          <h2 className="footer_sub_title">Socials</h2>
          <a href="#">
            <img className="social_logo" src={ig} alt="Instagram Logo" />
          </a>
          <a href="#">
            <img className="social_logo" src={facebook} alt="Facebook Logo" />
          </a>
          <a href="#">
            <img className="social_logo" src={youtube} alt="YouTube Logo" />
          </a>
        </div> */}
        <div className="footer_links">
          <h2 className="footer_sub_title">Directory</h2>
          <a className="footer_link"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </a>
          <a className="footer_link"
            onClick={() => {
              navigate("/register");
            }}
          >
            Register
          </a>
          {/* <a href="">Contact</a> */}
        </div>
      </div>

      <div className="footer_about">
        ©2022 Insure My Pev | All Rights Reserved |{" "}
        <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
};

export default Footer;
