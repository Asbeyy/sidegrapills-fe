import React from "react";
import { Link } from "react-scroll";

export default function Header(props) {
  const totalQuantity = props.cartElements.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  return (
    <header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img src="./logo.png" style={{ height: "35px" }} />
        <div className="title-name">Sidegrapills</div>
      </div>
      <div className="holder-links">
        <Link to="home" smooth={true} duration={500}>
          <div className="link-sel">Home</div>
        </Link>
        <Link to="informations" smooth={true} duration={500}>
          <div className="link-sel">Informations</div>
        </Link>
        <Link to="buy" smooth={true} duration={500}>
          <div className="buy-button">Acheter</div>
        </Link>
        <svg
          onClick={props.onOpenCart}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="logo-cart"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <div
          className={`market-counter ${totalQuantity === 0 ? "opacity" : null}`}
        >
          {totalQuantity === 0 ? null : totalQuantity}
        </div>
      </div>
    </header>
  );
}
