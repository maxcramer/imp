import React, { useState } from "react";
import db from "../../firebase";
import firebase from "firebase/compat/app";

import "./registerFrom.css";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    setFirstName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName) {
      db.collection("rider").add({
        firstName: firstName,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setFirstName("");
      setMessage("Thanks for Subscribing!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

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
        <form onSubmit={submitHandler}>
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={inputHandler}
              />
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
          {message && <h3>{message}</h3>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
