import React, { useState } from "react";
import ThreeDCard from "./ThreeDCard";

function Markeplace2(props) {
  const [pillType, setPillType] = useState("mg50");

  function handleChosePillType(event) {
    setPillType(event.target.id);
  }

  function handleAddToCart(event) {
    const product_id = event.target.id;
    props.onAddToCard(product_id);
  }

  return (
    <div id="buy" className="page">
      <div className="title-buy">Acheter Enligne</div>
      <div className="container-marketplace">
        <div className="product-selector-container">
          <div
            id="mg50"
            onClick={handleChosePillType}
            className={`product-selector ${
              pillType === "mg50" ? "selected-cat" : null
            }`}
          >
            Sidegra 50Mg
          </div>
          <div
            id="mg100"
            onClick={handleChosePillType}
            className={`product-selector ${
              pillType === "mg100" ? "selected-cat" : null
            }`}
          >
            Sidegra 100Mg
          </div>
        </div>

        {pillType === "mg50" ? (
          <div className="container-cards">
            <div className="card-product ss">
              <div className="pill-3d-container l-bg"></div>
              <div className="container-info-prod">
                <div className="title-info">Sidegra 50mg </div>
                <div className="desc-info">4 Pillules </div>
                <div className="price-info">16.99€</div>
                <div id="450" onClick={handleAddToCart} className="add-to-cart">
                  {" "}
                  Ajouter au Panier
                </div>
              </div>
            </div>
            <div className="card-product">
              <ThreeDCard key="two" />
              <div className="container-info-prod">
                <div className="title-info">Sidegra 50mg </div>
                <div className="desc-info">12 Pillules </div>
                <div className="price-info">42.99€</div>
                <div
                  id="1250"
                  onClick={handleAddToCart}
                  className="add-to-cart"
                >
                  {" "}
                  Ajouter au Panier
                </div>
              </div>
            </div>
            <div className="card-product sd">
              <div className="pill-3d-container r-bg"></div>

              <div className="container-info-prod">
                <div className="title-info">Sidegra 50mg </div>
                <div className="desc-info">28 Pillules </div>
                <div className="price-info">69.99€</div>
                <div
                  id="2850"
                  onClick={handleAddToCart}
                  className="add-to-cart"
                >
                  {" "}
                  Ajouter au Panier
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-cards">
            <div className="card-product y-bg">
              <div className="pill-3d-container y-l-bg"></div>
              <div className="container-info-prod">
                <div className="title-info">Sidegra 100mg </div>
                <div className="desc-info">4 Pillules </div>
                <div className="price-info">19.99€</div>
                <div
                  id="4100"
                  onClick={handleAddToCart}
                  className="add-to-cart"
                >
                  {" "}
                  Ajouter au Panier
                </div>
              </div>
            </div>
            <div className="card-product y-bg">
              <ThreeDCard classTo={"y-bg  special-b"} key="two" />
              <div className="container-info-prod">
                <div className="title-info">Sidegra 100mg </div>
                <div className="desc-info">12 Pillules </div>
                <div className="price-info">50.99€</div>
                <div
                  id="12100"
                  onClick={handleAddToCart}
                  className="add-to-cart"
                >
                  {" "}
                  Ajouter au Panier
                </div>
              </div>
            </div>
            <div className="card-product y-bg">
              <div className="pill-3d-container y-r-bg"></div>

              <div className="container-info-prod">
                <div className="title-info">Sidegra 100mg </div>
                <div className="desc-info">28 Pillules </div>
                <div className="price-info">82.99€</div>
                <div
                  id="28100"
                  onClick={handleAddToCart}
                  className="add-to-cart"
                >
                  {" "}
                  Ajouter au Panier
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="title-extra">besoin d'info?</div>
        <div className="extra-marketplace">
          <div className="selector-extra-b"> Informations Sanitaires</div>
          <div className="selector-extra-b"> F.A.Q</div>
          <div className="selector-extra-b"> Conditions Generales</div>
        </div>
      </div>
    </div>
  );
}

function Markeplace(props) {
  const [pillType, setPillType] = useState("mg50");

  function handleChosePillType(event) {
    setPillType(event.target.id);
  }

  function handleAddToCart(event) {
    const product_id = event.target.id;
    props.onAddToCard(product_id);
  }

  return (
    <div id="buy" className="page">
      <div className="container-product-types-o">
        <div className="left-side-container-product-types-o">
          <BannerMarket />
        </div>
        <div className="right-side-container-product-types-o">
          <div className="upper-part-product-types-o">
            <div className="title-product-types-o">
              Choisissez la pillule pour vous
            </div>
            <div className="subtitle-product-types-o">
              Achetez, rapidement en 3 clicks.
            </div>
          </div>
          <div className="lower-part-product-types-o">
            <div className="card-pill-o">
              <div className="cont-posologie">
                <div className="big-s-posologie">50</div>
                <div className="big-s-name-posologie">Sidegra</div>
              </div>
              <div className="price-pill-posologie">
                <span className="t-1-ro">€</span> 18
                <span className="t-2-ro">/ 4 pillules</span>
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
                    Efficacite, Securite{" "}
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
                    Duration entre 4/6 h
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
                  <div className="text-tick-posologie">Discretion garantie</div>
                </div>
              </div>
              <div className="add-to-cart-posologie">
                Ajouter au Panier{" "}
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
            <div className="card-pill-o bg-two-pill-o">
              <div className="cont-posologie">
                <div className="big-s-posologie">100</div>
                <div className="big-s-name-posologie whitec">Sidegra</div>
              </div>
              <div className="price-pill-posologie whitec">
                <span className="t-1-ro">€</span> 20
                <span className="t-2-ro">/ 4 pillules</span>
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
                    Meilleur prix offert
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
                    Duration entre 4/6 h
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
                    Discretion garantie
                  </div>
                </div>
              </div>
              <div className="add-to-cart-posologie reverse-button-add">
                Ajouter au Panier
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Markeplace;

function BannerMarket() {
  return (
    <div className="banner-product-types-o">
      <div className="logo-banner-product-types-o">
        <img src="/logo.png" />
      </div>
      <div className="title-banner-product-types-o">Reallumez</div>
      <div className="subtitle-banner-product-types-o"> la Passion</div>
      <div className="description-banner-product-types-o">
        Le remède à l'impuissance masculine à la portée de toutes les bourses.
      </div>
      <div className="container-reviews-banner">
        <div className="container-review-card">
          <div className="card-review">
            <div className="upper-review">
              "Performance digne de star du X, madame tres contente"
            </div>
            <div className="bottom-review">
              <img src="/comment.png" alt="" />
              <div className="container-info-review-o">
                <div>Michel Durand</div>
                <div className="profession-info-review">Entrepreneur</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
