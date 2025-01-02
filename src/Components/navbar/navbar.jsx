import React, { useState } from "react";
import "./navbar.css";
import logo from "../Assets/navbar-logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("dashboard");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo-image" className="logo-image" />
      </div>

      <ul className="nav-menu">
        <li
          onClick={() => setMenu("dashboard")}
          className={menu === "dashboard" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("features")}
          className={menu === "features" ? "active" : ""}
        >
          Features
        </li>
        <li
          onClick={() => setMenu("tokenomics")}
          className={menu === "tokenomics" ? "active" : ""}
        >
          Tokenomics
        </li>
        <li
          onClick={() => setMenu("roadmap")}
          className={menu === "roadmap" ? "active" : ""}
        >
          Roadmap
        </li>
        <li
          onClick={() => setMenu("whitepaper")}
          className={menu === "whitepaper" ? "active" : ""}
        >
          Whitepaper
        </li>
      </ul>

      <button className="cta-button">Home</button>
    </div>
  );
};

export default Navbar;
