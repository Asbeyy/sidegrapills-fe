import React, { useState } from "react";
import { Link } from "react-scroll";

import ThreeDPill from "./ThreeDPill";

function Landing(props) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseYe, setMouseY] = useState(0);

  function handleMouseMove(event) {
    setMouseY(event.clientY / window.innerHeight - 0.5);
    setMouseX(event.clientX / window.innerWidth - 0.5);
  }

  return (
    <div onMouseMove={handleMouseMove} id="home" className="page">
      <div className="hero-text">
        <img src="./logo.png" alt="" />
        <div>SidegraPills</div>
      </div>
      <div className="hero-subtext">
        {props.language.hero_subtitle}
        <span style={{ color: "#547adb" }}>
          &nbsp;{props.language.hero_subtitle_color}
        </span>
      </div>
      <div className="cont-scroll">
        <div className="scroll-text">{props.language.scroll_text}</div>
        <Link
          to="informations"
          smooth={true}
          duration={300}
          className="floating-scroll"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 97 162"
            height="162"
            width="97"
            className="svg"
          >
            <path
              fill="#547adb90"
              d="M47.2124 0H54.0796V151.644L86.6991 128.712H97L50.646 162L0 128.712H10.3009L47.2124 151.644V0Z"
            ></path>
          </svg>
        </Link>
      </div>
      <Link
        className="help-float-button"
        to="contact"
        smooth={true}
        duration={800}
        offset={50}
      >
        {props.language.help_button}
      </Link>

      <ThreeDPill mouseX={mouseX} mouseYe={mouseYe} />
    </div>
  );
}

export default Landing;
