import { useState } from "react";
import "../../App.css";
import { Link, Element, animateScroll as scroll } from "react-scroll";

import Header from "./Header";
import Landing from "./Landing";
import Informations from "./Informations";
import Markeplace from "./Markeplace";
import Reviews from "./Reviews";
import Cart from "./Cart";

function Home() {
  return (
    <div className="body-site">
      <Header />
      <Landing />
      <Informations />
      <Markeplace />
      <Reviews />
      <Cart />
    </div>
  );
}

export default Home;
