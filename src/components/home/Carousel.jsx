import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

function RevCarousel(props) {
  return (
    <div className="container-review-card">
      <Carousel
        className="carousel-lmao"
        autoPlay={true} // Enable auto play
        interval={5000} // Set interval to 5 seconds
        infiniteLoop={true} // Enable infinite loop
        showStatus={false} // Hide status indicators
        showThumbs={false} // Hide thumbnail navigation
        showArrows={false}
      >
        <div className="card-review">
          <div className="upper-review">
            {props.language.marketplace_banner_review}
          </div>
          <div className="bottom-review">
            <div className="container-info-review-o">
              <div>Michel</div>
              <div className="profession-info-review">Paris</div>
            </div>
          </div>
        </div>
        <div className="card-review">
          <div className="upper-review">
            {props.language.marketplace_banner_review}
          </div>
          <div className="bottom-review">
            <div className="container-info-review-o">
              <div>Matteo</div>
              <div className="profession-info-review">Crans-Montana</div>
            </div>
          </div>
        </div>
        <div className="card-review">
          <div className="upper-review">
            {props.language.marketplace_banner_review}
          </div>
          <div className="bottom-review">
            <div className="container-info-review-o">
              <div>Youssef</div>
              <div className="profession-info-review">Lyon</div>
            </div>
          </div>
        </div>
        <div className="card-review">
          <div className="upper-review">
            {props.language.marketplace_banner_review}
          </div>
          <div className="bottom-review">
            <div className="container-info-review-o">
              <div>Fracois</div>
              <div className="profession-info-review">Nice</div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default RevCarousel;
