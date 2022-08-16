import React, { useState } from "react";
import db from "../../firebase";
import firebase from "firebase/compat/app";
import "./news.css";

import onewheel from "../../media/onewheel-2.png";

const News = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
      db.collection("newsSignup").add({
        email: input,
        time: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");
      setMessage("Thanks for Subscribing!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="news_container">
      <div className="news_signup">
        <form onSubmit={submitHandler}>
          <h1 className="signup_title">RECEIVE UPDATES</h1>
          <h4 className="signup_tagline">Stay up to date for our launch</h4>
          <input
            className="signup_input"
            placeholder="Email"
            type="email"
            onChange={inputHandler}
            value={input}
          />
          <button className="signup_button">
            <h5>KEEP ME UPDATED</h5>
          </button>
          {message && <h3>{message}</h3>}
        </form>
      </div>
      <div className="signup_image_container">
        <img className="signup_image" src={onewheel} alt="Onewheel on beach" />
      </div>
    </div>
  );
};

export default News;
