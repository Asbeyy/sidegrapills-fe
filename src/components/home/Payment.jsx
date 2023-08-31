//https://api-sidegrapills.vercel.app

import React, { useEffect, useState } from "react";
import paymentProviders from "../../assets/paymentprov.png";

import ButtonAnimated from "../side/ButtonAnimated";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

function Payment(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentisProcessing, setPaymentisProcessing] = useState(false);

  const [loadingPage, setLoadingPage] = useState(false);

  const style = {
    base: {
      color: "#000",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "15px",
      "::placeholder": {
        color: "#000",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  };

  function handleToggleGreenCheck() {
    document.querySelector(".circle-loader").className =
      "circle-loader load-complete";
    document.querySelector(".checkmark").style.display = "block";
    document.querySelector(".checkmark").classList = "checkmark draw animcheck";
  }

  async function handlePayment(e) {
    e.preventDefault();

    //Display wait page
    setTimeout(() => {
      setLoadingPage(true);
    }, 1500);

    //If a payment attempt is already running, return
    if (paymentisProcessing) return;
    setPaymentisProcessing(true);

    const cardElement = elements.getElement(CardNumberElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    const transfer = {
      shipping_details: props.shippingInfo,
      order_details: props.cart,
    };

    if (error) {
      return console.log("Error:", error);
    } else {
      fetch("https://api-sidegrapills.vercel.app/pay", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ transfer, paymentMethod: paymentMethod.id }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            return;
          }

          let clientSecret = data.clientSecret;
          stripe
            .confirmCardPayment(clientSecret, {
              payment_method: {
                card: cardElement,
              },
            })
            .then(function (result) {
              if (result.error) {
                console.log(result.error.message);
              } else {
                console.log(result.paymentIntent.id);

                fetch(`https://api-sidegrapills.vercel.app/finalize-payment`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    paymentId: result.paymentIntent.id,
                    purchaseInfo: transfer,
                    email: document.querySelector(".email-xiom").value,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.error) {
                      //Payment declined
                      setPaymentisProcessing(false);
                      setLoadingPage(false);
                      alert(data.error);
                      location.reload();
                    } else {
                      //Payment succesfull
                      handleToggleGreenCheck();
                      setTimeout(() => {
                        location.reload();
                      }, 2000);
                    }
                    console.log(data);
                  });
              }
            });
        });
    }
  }

  function handleExitPayment() {
    props.onExit();
  }

  const totalPrice = props.cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className={`page-payment ${props.payment ? "" : "hidex0"}`}>
      <div className="container-pagamenti">
        <div className="box-section-payment">
          <h1 className="title-pay-info">{props.language.payment_title}</h1>
          <form onSubmit={handlePayment} className="form-payment" action="">
            <label>
              {props.language.contact_email}
              <input type="text" className="email-xiom" name="" id="" />
            </label>
            <label>
              {props.language.payment_cardn}
              <CardNumberElement onReady={props.onReady} options={{ style }} />
            </label>
            <label>
              {props.language.payment_expiry}
              <CardExpiryElement onReady={props.onReady} options={{ style }} />
            </label>
            <label>
              {props.language.payment_cvc}
              <CardCvcElement onReady={props.onReady} options={{ style }} />
            </label>
            <ButtonAnimated language={props.language} cart={props.cart} />
            <img src={paymentProviders} className="logopaymentproviderspay" />
            <a className="termslinkorder" href="/terms">
              {props.language.payment_terms}
            </a>
          </form>
        </div>

        <div className="box-recap-payment">
          <div className="exit-row-purchase">
            <div className="exit-payment" onClick={handleExitPayment}>
              {props.language.payment_exit}
            </div>
          </div>
          <div className="cont-pic-name">
            <img src="./pillicon.png" className="pic-checkout-recap" />
            <div className="cont-name-checkout-desc">
              {props.language.payment_rec_title}
            </div>
            <div className="mini-banner">{props.language.payment_rec_box}</div>
          </div>
          <div className="cont-price-checkout">
            <div className="name-price-checkout">
              <div className="name-checkout-id">
                {props.language.payment_rec_sub}
              </div>
              <div className="price-checkout-id">{totalPrice} €</div>
            </div>
            <div className="name-price-checkout">
              <div className="name-checkout-id">
                {props.language.payment_rec_shipping}
              </div>
              <div className="price-checkout-id">5 €</div>
            </div>
            <div className="name-price-checkout totalb">
              <div className="name-checkout-id">
                {props.language.payment_rec_total}
              </div>
              <div className="price-checkout-id">{totalPrice + 5} €</div>
            </div>
          </div>
        </div>
      </div>
      {loadingPage ? (
        <div className="container-pagamenti psucces">
          <div className={`circle-loader`}>
            <div className={`checkmark draw`}></div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Payment;
