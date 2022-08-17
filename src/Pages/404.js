import React from "react";
import { useNavigate } from "react-router-dom";

import "../App.css";

const Error = () => {
  let navigate = useNavigate();
  return (
    <div>
      <h1 className="error_msg">Error! Page Not Found</h1>
      <button
        className="home_btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default Error;
