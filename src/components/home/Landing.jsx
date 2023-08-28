import React, { useState } from "react";

import medicalPic from "../../assets/medical.png";
import ThreeDPill from "./ThreeDPill";

function Landing() {
  const [mouseX, setMouseX] = useState(0);

  function handleMouseMove(event) {
    console.log(event.clientX / window.innerWidth - 0.5);
    setMouseX(event.clientX / window.innerWidth - 0.5);
  }

  return (
    <div onMouseMove={handleMouseMove} id="home" className="page">
      <div className="hero-text">
        <img src="./logo.png" alt="" />
        <div>SidegraPills</div>
      </div>
      <div className="hero-subtext">
        Réveillez la <span style={{ color: "#547adb" }}>passion</span>
      </div>

      {/* <ThreeDPill mouseX={mouseX} /> */}
    </div>
  );
}

export default Landing;
