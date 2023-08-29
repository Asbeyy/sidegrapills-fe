import React from "react";
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
  }

  return (
    <div className="page">
      <div className="container-pagamenti">
        <div className="box-section-payment">
          <h1 className="title-pay-info">Payement</h1>
          <form onSubmit={handlePayment} className="form-payment" action="">
            <label>
              Email
              <input type="text" name="" id="" />
            </label>
            <label>
              Numero de la carte
              <CardNumberElement onReady={props.onReady} options={{ style }} />
            </label>
            <label>
              Date d'expiration
              <CardExpiryElement onReady={props.onReady} options={{ style }} />
            </label>
            <label>
              Code de securite
              <CardCvcElement onReady={props.onReady} options={{ style }} />
            </label>
            <ButtonAnimated />
            <img src={paymentProviders} className="logopaymentproviderspay" />
            <a className="termslinkorder" href="">
              Termes et Conditions de service
            </a>
          </form>
        </div>

        <div className="box-recap-payment">box2</div>
      </div>
    </div>
  );
}

export default Payment;

// titolo/logo, email, ncarta, scadenza , cvv, bottone paga
// Nome, Cognome, Indirizzo & N, City & country, Shipping 8$, subtotale ordine$ ,totale oridne$
