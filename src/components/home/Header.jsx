import React, { useEffect } from "react";
import { Link } from "react-scroll";

export default function Header(props) {
  const totalQuantity = props.cartElements.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  useEffect(() => {
    autosetInitialLanguage();
  }, []);
  function handleLanguageChange(e) {
    props.onLanguageChange(e.target.value);
  }
  function autosetInitialLanguage() {
    const selector = document.getElementById("select-lang-comp-xium");
    selector.value = choseLangPack(navigator.language);

    function choseLangPack(xx) {
      if (xx === "fr-FR") {
        return "fr-FR";
      } else if (xx === "en-US") {
        return "en-US";
      } else if (xx === "es-ES") {
        return "es-ES";
      } else if (xx === "ru-RU") {
        return "ru-RU";
      } else if (xx == "it-IT") {
        return "it-IT";
      } else if (xx === "de-DE") {
        return "de-DE";
      } else if (xx === "ar-SA") {
        return "ar-SA";
      } else if (xx === "el-GR") {
        return "el-GR";
      } else {
        // if navigator.language is not any of the above, set english
        return "en-US";
      }
    }
  }

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
        <select
          className="selector-lang"
          id="select-lang-comp-xium"
          onChange={handleLanguageChange}
        >
          <option value="en-US">EN</option>
          <option value="fr-FR">FR</option>
          <option value="de-DE">DE</option>
          <option value="it-IT">IT</option>
          <option value="el-GR">GR</option>
          <option value="es-ES">ES</option>
          <option value="ru-RU">RU</option>
          <option value="ar-SA">عربي</option>
        </select>
        <Link to="home" smooth={true} duration={500}>
          <div className="link-sel">{props.language.header_link1}</div>
        </Link>
        <Link to="informations" smooth={true} duration={500}>
          <div className="link-sel">{props.language.header_link2}</div>
        </Link>
        <Link to="buy" smooth={true} duration={500}>
          <div className="buy-button">{props.language.header_buy}</div>
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
