import React, { useState } from "react";
import ThreeDCard from "./ThreeDCard";

function Markeplace() {
  const [pillType, setPillType] = useState("mg50");

  function handleChosePillType(event) {
    setPillType(event.target.id);
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
                <div className="add-to-cart"> Ajouter au Panier</div>
              </div>
            </div>
            <div className="card-product">
              <ThreeDCard key="two" />
              <div className="container-info-prod">
                <div className="title-info">Sidegra 50mg </div>
                <div className="desc-info">12 Pillules </div>
                <div className="price-info">42.99€</div>
                <div className="add-to-cart"> Ajouter au Panier</div>
              </div>
            </div>
            <div className="card-product sd">
              <div className="pill-3d-container r-bg"></div>

              <div className="container-info-prod">
                <div className="title-info">Sidegra 50mg </div>
                <div className="desc-info">28 Pillules </div>
                <div className="price-info">69.99€</div>
                <div className="add-to-cart"> Ajouter au Panier</div>
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
                <div className="add-to-cart"> Ajouter au Panier</div>
              </div>
            </div>
            <div className="card-product y-bg">
              <ThreeDCard classTo={"y-bg  special-b"} key="two" />
              <div className="container-info-prod">
                <div className="title-info">Sidegra 100mg </div>
                <div className="desc-info">12 Pillules </div>
                <div className="price-info">50.99€</div>
                <div className="add-to-cart"> Ajouter au Panier</div>
              </div>
            </div>
            <div className="card-product y-bg">
              <div className="pill-3d-container y-r-bg"></div>

              <div className="container-info-prod">
                <div className="title-info">Sidegra 100mg </div>
                <div className="desc-info">28 Pillules </div>
                <div className="price-info">82.99€</div>
                <div className="add-to-cart"> Ajouter au Panier</div>
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

export default Markeplace;
