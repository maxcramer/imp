import React from "react";

import "./registerFrom.css";

const RegisterForm = () => {
  return (
    <div>
      <div className="register_form_parent">
        <h2 className="register_form_title">
          Register
          <span className="register_form_underscore"></span>
          <p className="register_tagline">
            Sign up for the latest deals for when we launch!
          </p>
        </h2>
        <form action="">
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="form_item">
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
          </div>

          <div className="form_item email">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">First Line of Address</label>
              <input type="text" />
            </div>
            <div className="form_item">
              <label htmlFor="">Second Line of Address</label>
              <input type="text" />
            </div>
          </div>
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">Town</label>
              <input type="text" />
            </div>
            <div className="form_item">
              <label htmlFor="">Postcode</label>
              <input type="text" />
            </div>
          </div>
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">Device Type</label>
              <select name="vehicle" id="vehicle">
                <option value="">Eskate</option>
                <option value="">Ebike</option>
                <option value="">EUC</option>
                <option value="">Escooter</option>
              </select>
            </div>
            <div className="form_item">
              <label htmlFor="">Make</label>
              <input type="text" />
            </div>
          </div>

          <div className="form_item email">
            <label htmlFor="">Model</label>
            <input type="text" />
          </div>
          <button className="submit_btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
