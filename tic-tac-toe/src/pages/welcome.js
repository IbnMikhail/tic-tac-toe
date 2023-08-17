import React from "react";
import img1 from "../assets/images/bg.png";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcome">
      <img src={img1} alt="welcome" />
      <Link to="/game">
        <button>Start</button>
      </Link>
    </div>
  );
}
export default WelcomePage;
