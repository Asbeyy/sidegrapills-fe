import React from "react";

function ProductDetails(props) {
  return (
    <div id="product-info" className="page product-details-page">
      <div className="details-container">
        <div className="details-upper-section">
          <div className="details-cont-cont">
            <div className="details-title-upper-section">
              {props.language.pd_title}
            </div>
            <div className="details-desc-upper-section">
              {props.language.pd_desc}
            </div>
          </div>
          <div className="details-cont-cont-img">
            <img src="./medical/bottle_down.png" alt="" />
          </div>
        </div>
        <div className="details-separator"></div>
        <div className="details-lower-section">
          <div className="details-first-lower-box">
            <div className="details-title-lower-section">
              {props.language.pd_subtitle}
            </div>
            <div className="details-desc-lower-section">
              {props.language.pd_desc_subtitle}
            </div>
            <div className="cont-chem">
              <div className="warning-details">
                <img src="/medical/chemical.jpg" alt="" />
                <div>
                  {props.language.pd_banner_pill_1}
                  <br />
                  <br />
                  {props.language.pd_banner_pill_2}
                </div>
              </div>
            </div>
          </div>
          <div id="posology" className="details-details-lower-box-container">
            <div className="details-box-cont-text">
              <div className="details-box-title">
                {props.language.pd_box_title1}
              </div>
              <div className="details-box-desc">
                {props.language.pd_box_desc1}
                <br />
                <br />
                <ul>
                  <li>{props.language.pd_box_item1}</li>
                  <li>{props.language.pd_box_item2}</li>
                  <li>{props.language.pd_box_item3}</li>
                  <li>{props.language.pd_box_item4}</li>
                  <li>{props.language.pd_box_item5}</li>
                </ul>
              </div>
            </div>
            <div className="details-box-cont-img">
              <img
                src="/medical/clock.png"
                className="details-box-img1"
                alt="clock illustration medical viagra"
              />
            </div>
          </div>
          <div className="details-details-lower-box-container">
            <div className="details-box-cont-img">
              <img
                src="/medical/nurses.png"
                className="details-box-img2"
                alt="nurses illustration medical viagra sidegra"
              />
            </div>
            <div className="details-box-cont-text">
              <div className="details-box-title">
                {props.language.pd_box_title2}
              </div>
              <div className="details-box-desc">
                {props.language.pd_box_desc2}
                <br />
                <br />
                <ul>
                  <li> {props.language.pd_box2_item1}</li>
                  <li> {props.language.pd_box2_item2}</li>
                  <li> {props.language.pd_box2_item3}</li>
                  <li> {props.language.pd_box2_item4}</li>
                  <li> {props.language.pd_box2_item5}</li>
                  <li> {props.language.pd_box2_item6}</li>
                  <li> {props.language.pd_box2_item7}</li>
                  <li> {props.language.pd_box2_item8}</li>
                  <li> {props.language.pd_box2_item9}</li>
                  <li> {props.language.pd_box2_item10}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="details-details-lower-box-container">
            <div className="details-box-cont-text">
              <div className="details-box-title">
                {props.language.pd_box_title3}
              </div>
              <div className="details-box-desc">
                {props.language.pd_box_desc3}
                <br />
                <br />
                <ul>
                  <li>{props.language.pd_box3_item1}</li>
                  <li>{props.language.pd_box3_item2}</li>
                  <li>{props.language.pd_box3_item3}</li>
                  <li>{props.language.pd_box3_item4}</li>
                  <li>{props.language.pd_box3_item5}</li>
                </ul>
              </div>
            </div>
            <div className="details-box-cont-img">
              <img
                src="/medical/shelf.png"
                className="details-box-img3"
                alt="shelf illustration, medical, viagra, sidegra"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
