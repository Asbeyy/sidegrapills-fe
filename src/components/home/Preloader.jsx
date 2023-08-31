import React from "react";

function Preloader(props) {
  return (
    <div
      className={`page-preloader ${props.preloadDone ? "no-opa-p" : ""}`}
    ></div>
  );
}

export default Preloader;
