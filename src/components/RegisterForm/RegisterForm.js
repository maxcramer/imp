import React, { useState } from "react";
import db from "../../firebase";
import firebase from "firebase/compat/app";

import { useNavigate } from "react-router-dom";

import "./registerFrom.css";

const RegisterForm = () => {
  let navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    firstLineAddress: "",
    secondLineAddress: "",
    town: "",
    postcode: "",
    deviceType: "",
    make: "",
    model: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userDetails) {
      db.collection("rider").add({
        userDetails: userDetails,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setMessage("Thanks for Subscribing!");
      setTimeout(() => {
        setMessage("");
        navigate("/");
      }, 2000);
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
        <form onSubmit={handleSubmit}>
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_item">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form_item email">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">First Line of Address</label>
              <input
                type="text"
                placeholder="First Line of Address"
                name="firstLineAddress"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_item">
              <label htmlFor="">Second Line of Address</label>
              <input
                type="text"
                placeholder="Second Line of Address"
                name="secondLineAddress"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">Town / City</label>
              <input
                type="text"
                placeholder="Town / City"
                name="town"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_item">
              <label htmlFor="">Postcode</label>
              <input
                type="text"
                placeholder="Postcode"
                name="postcode"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="register_form_group">
            <div className="form_item">
              <label htmlFor="">Device Type</label>
              <select name="deviceType" id="vehicle" onChange={handleChange}>
                <option value="">Eskate</option>
                <option value="">Ebike</option>
                <option value="">EUC</option>
                <option value="">Escooter</option>
              </select>
            </div>
            <div className="form_item">
              <label htmlFor="">Make</label>
              <input
                type="text"
                placeholder="Make"
                name="make"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form_item email">
            <label htmlFor="">Model</label>
            <input
              type="text"
              placeholder="Model"
              name="model"
              onChange={handleChange}
              required
            />
          </div>
          <button className="submit_btn">Submit</button>
          {message && <h3>{message}</h3>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
