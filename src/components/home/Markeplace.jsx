import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import RevCarousel from "./Carousel";

function Markeplace(props) {
  const [packSize, setPackSize] = useState("4");

  function handleAddToCart(event) {
    const product_id = event.target.id;
    props.onAddToCard(product_id);
  }
  function handleSelectPackSize(x) {
    setPackSize(x);
  }

  function CardSelectPack(props) {
    function handleSelectPack(event) {
      const packSize = event.target.id;
      props.onSelectPack(packSize);
    }

    return (
      <div className="container-chose-size-pack">
        <div
          id="4"
          onClick={handleSelectPack}
          className={packSize === "4" ? `selected-size-pack` : null}
        >
          4 {props.language.marketplace_selector_pack_pills}
        </div>
        <div
          id="12"
          onClick={handleSelectPack}
          className={packSize === "12" ? `selected-size-pack` : null}
        >
          12 {props.language.marketplace_selector_pack_pills}
        </div>
        <div
          id="28"
          onClick={handleSelectPack}
          className={packSize === "28" ? `selected-size-pack` : null}
        >
          28 {props.language.marketplace_selector_pack_pills}
        </div>
      </div>
    );
  }
  function BannerMarket(props) {
    return (
      <div className="banner-product-types-o">
        <div className="logo-banner-product-types-o">
          <img src="/logo.png" />
        </div>
        <div className="title-banner-product-types-o">
          {props.language.marketplace_banner_title}
        </div>
        <div className="subtitle-banner-product-types-o">
          {" "}
          {props.language.marketplace_banner_subtitle}
        </div>
        <div className="description-banner-product-types-o">
          {props.language.marketplace_banner_description}
        </div>
        <Link
          to="posology"
          smooth={true}
          duration={300}
          offset={-100}
          className="description-banner-info-btn"
        >
          Plus d'info
        </Link>
        <div className="container-reviews-banner">
          <RevCarousel language={props.language} />
        </div>
      </div>
    );
  }

  function Card50MG(props) {
    const [currentQ, setCurrentQ] = useState(setInitialPrice());

    useEffect(() => {
      setCurrentPrice();
    }, [currentQ]);

    function setCurrentPrice() {
      if (props.packSize === "4") {
        setCurrentQ(18);
      } else if (props.packSize === "12") {
        setCurrentQ(44);
      } else if (props.packSize == "28") {
        setCurrentQ(72);
      }
    }

    function setInitialPrice() {
      if (props.packSize === "4") {
        return 18;
      } else if (props.packSize === "12") {
        return 44;
      } else if (props.packSize == "28") {
        return 72;
      }
    }

    //Handle Foto zoom for product
    const [fotoprevOpen, setFotoprevOpen] = useState(false);

    function handleClickPicProduct() {
      setFotoprevOpen(true);
    }
    function PreviewPhotoScreen(props) {
      function handleExitPhoto() {
        props.onExit();
      }

      return (
        <div className={`photo-screen ${props.classToggle}`}>
          <div onClick={handleExitPhoto} className="exit-photobutton">
            X
          </div>
          <img src="/box1.png" className="preview-product-pic-xcp" />
        </div>
      );
    }

    return (
      <div className="card-pill-o">
        <PreviewPhotoScreen
          onExit={() => setFotoprevOpen(false)}
          classToggle={fotoprevOpen ? "" : "hiddenfoto"}
        />
        <div className="cont-posologie">
          <div className="big-s-posologie">50</div>
          <div className="big-s-name-posologie">Sidegra</div>
          <img onClick={handleClickPicProduct} src="/50mg.png" alt="" />
        </div>
        <div className="price-pill-posologie">
          <span className="t-1-ro">€</span> {currentQ}
          <span className="t-2-ro">
            / {props.packSize} {props.language.marketplace_selector_pack_pills}
          </span>
        </div>
        <div className="container-info-pill-posologie">
          <div className="row-info-pill-posologie">
            <div className="tick-posologie">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="tick-logo"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="text-tick-posologie">
              {props.language.marketplace_card_d1}
            </div>
          </div>
          <div className="row-info-pill-posologie">
            <div className="tick-posologie">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="tick-logo"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="text-tick-posologie">
              {props.language.marketplace_card_d2}
            </div>
          </div>
          <div className="row-info-pill-posologie">
            <div className="tick-posologie">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="tick-logo"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="text-tick-posologie">
              {props.language.marketplace_card_x}
            </div>
          </div>
        </div>
        <div
          id={`${props.packSize}50`}
          onClick={handleAddToCart}
          className="add-to-cart-posologie"
        >
          {props.language.marketplace_add_cart}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="goon-logo"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    );
  }
  function Card100MG(props) {
    const [currentQ, setCurrentQ] = useState(setInitialPrice());

    useEffect(() => {
      setCurrentPrice();
    }, [currentQ]);

    function setCurrentPrice() {
      if (props.packSize === "4") {
        setCurrentQ(20);
      } else if (props.packSize === "12") {
        setCurrentQ(54);
      } else if (props.packSize == "28") {
        setCurrentQ(85);
      }
    }

    function setInitialPrice() {
      if (props.packSize === "4") {
        return 20;
      } else if (props.packSize === "12") {
        return 54;
      } else if (props.packSize == "28") {
        return 85;
      }
    }

    //Handle Foto zoom for product
    const [fotoprevOpen, setFotoprevOpen] = useState(false);

    function handleClickPicProduct() {
      setFotoprevOpen(true);
    }
    function PreviewPhotoScreen(props) {
      function handleExitPhoto() {
        props.onExit();
      }

      return (
        <div className={`photo-screen ${props.classToggle}`}>
          <div onClick={handleExitPhoto} className="exit-photobutton">
            X
          </div>
          <img src="/box.png" className="preview-product-pic-xcp" />
        </div>
      );
    }

    return (
      <div className="card-pill-o bg-two-pill-o">
        <PreviewPhotoScreen
          onExit={() => setFotoprevOpen(false)}
          classToggle={fotoprevOpen ? "" : "hiddenfoto"}
        />
        <div className="cont-posologie">
          <div className="big-s-posologie">100</div>
          <div className="big-s-name-posologie whitec">Sidegra</div>
          <img onClick={handleClickPicProduct} src="/100mg.png" alt="" />
        </div>
        <div className="price-pill-posologie whitec">
          <span className="t-1-ro">€</span> {currentQ}
          <span className="t-2-ro">
            / {props.packSize} {props.language.marketplace_selector_pack_pills}
          </span>
        </div>
        <div className="container-info-pill-posologie">
          <div className="row-info-pill-posologie">
            <div className="tick-posologie whiteb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="tick-logo varc"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="text-tick-posologie whitecc">
              {props.language.marketplace_card_c1}
            </div>
          </div>
          <div className="row-info-pill-posologie">
            <div className="tick-posologie whiteb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="tick-logo varc"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="text-tick-posologie whitecc">
              {props.language.marketplace_card_c2}
            </div>
          </div>
          <div className="row-info-pill-posologie">
            <div className="tick-posologie whiteb">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="tick-logo varc"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div className="text-tick-posologie whitecc">
              {props.language.marketplace_card_x}
            </div>
          </div>
        </div>
        <div
          id={`${props.packSize}100`}
          onClick={handleAddToCart}
          className="add-to-cart-posologie reverse-button-add"
        >
          {props.language.marketplace_add_cart}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="goon-logo"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div id="buy" className="page">
      <div className="container-product-types-o">
        <div className="left-side-container-product-types-o">
          <BannerMarket language={props.language} />
        </div>
        <div className="right-side-container-product-types-o">
          <div className="upper-part-product-types-o">
            <div className="title-product-types-o">
              {props.language.marketplace_title}
            </div>
            <div className="subtitle-product-types-o">
              {props.language.marketplace_subtitle}
            </div>
            <CardSelectPack
              language={props.language}
              onSelectPack={handleSelectPackSize}
            />
          </div>
          <div className="lower-part-product-types-o">
            <Card50MG language={props.language} packSize={packSize} />
            <Card100MG language={props.language} packSize={packSize} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Markeplace;
