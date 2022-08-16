import React, { useState, useEffect } from "react";

import "./nav.css";

const Nav = () => {
  var lastScrollTop = 0;
  const navbar = document.getElementById("nav");
  window.addEventListener("scroll", function () {
    var scrollTop =
      window.pageYOffset || this.document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-70px";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
  return (
    <div className="nav" id="nav">
      <h2 className="nav_title">
        <a className="nav_title-link" href="/">
          Insure My Pev
        </a>
      </h2>
    </div>
  );
};

export default Nav;
