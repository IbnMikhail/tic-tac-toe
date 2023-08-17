import React from "react";
import img1 from "../assets/images/bg.png";

function WelcomePage() {
  return (
    <div className="welcome">
      <img src={img1} alt="welcome" />
      <button>Start</button>
    </div>
  );
}
export default WelcomePage;
