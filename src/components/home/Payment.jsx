import React, { useEffect } from "react";
import paymentProviders from "../../assets/paymentprov.png";

import ButtonAnimated from "../side/ButtonAnimated";

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { Button } from "react-scroll";

function Payment(props) {
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    //console.log("Payment props", props.cart);
  }, [props.cart]);

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

  function handlePayment(e) {
    e.preventDefault();
    console.log("OK");
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
              <input type="text" name="" id="" />
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
    </div>
  );
}

export default Payment;

// titolo/logo, email, ncarta, scadenza , cvv, bottone paga
// Nome, Cognome, Indirizzo & N, City & country, Shipping 8$, subtotale ordine$ ,totale oridne$
