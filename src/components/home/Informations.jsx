import React from "react";
import { Link } from "react-scroll";

function Informations(props) {
  return (
    <div id="informations" className="page information-page">
      <div className="hero2-info">
        <div className="left-side-hero-info">
          <div className="title-hero2-info">{props.language.info_title1}</div>
          <div className="text-hero2-info">{props.language.info_desc1}</div>
          <div className="container-button-hero">
            <Link className="button-hero" to="buy" smooth={true} duration={500}>
              {props.language.info_buy1}
            </Link>
          </div>
        </div>
        <div className="right-side-hero-info">
          <img src="/pillicon.png" alt="" />
        </div>
      </div>
      <div className="information-container">
        <div className="title-info">{props.language.info_title2}</div>
        <div className="containter-card-info">
          <img src="/medical/bottle_up.png" alt="" />
          <div className="info-cont-cont-in">
            <div className="title-cont-info-in">
              {props.language.info_card_title1}
            </div>
            <div className="desc-cont-info-in">
              {props.language.info_card_desc1}
            </div>
          </div>
        </div>
        <div className="containter-card-info">
          <img src="/medical/penis.png" alt="" />
          <div className="info-cont-cont-in">
            <div className="title-cont-info-in">
              {props.language.info_card_title2}
            </div>
            <div className="desc-cont-info-in">
              {props.language.info_card_desc2}
            </div>
          </div>
        </div>
        <div className="containter-card-info">
          <img src="/medical/bottleneck.png" alt="" />
          <div className="info-cont-cont-in">
            <div className="title-cont-info-in">
              {props.language.info_card_title3}
            </div>
            <div className="desc-cont-info-in">
              {props.language.info_card_desc3}
            </div>
          </div>
        </div>

        <div className="container-button-more-info-hero2">
          <div className="button-more-info-hero2">
            {props.language.more_info_button}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informations;
