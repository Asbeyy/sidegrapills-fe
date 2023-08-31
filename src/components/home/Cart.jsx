import React from "react";
import paymentMethods from "../../assets/paymentprov.png";

function Cart(props) {
  const totalPrice = props.cartElements.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  function handleGotoPaymentPage() {
    if (totalPrice === 0) return alert("aucun atricle selectionné");
    handleFillUpShipmentDetails();

    props.onOpenPaymentPage();
    props.onToggleCart();
  }

  function handleFillUpShipmentDetails() {
    const name = document.querySelector(".name-xuio");
    const surname = document.querySelector(".surname-xuio");
    const adress = document.querySelector(".adress-xuio");
    const adress_number = document.querySelector(".adressn-xuio");
    const zip_code = document.querySelector(".zip-xuio");
    const city = document.querySelector(".city-xuio");
    const country = document.querySelector(".country-xuio");

    const x = {
      name: name.value,
      surname: surname.value,
      adress: adress.value,
      adress_number: adress_number.value,
      zip_code: zip_code.value,
      city: city.value,
      country: country.value,
    };

    props.onConfirmOrder(x);
  }

  return (
    <div className={`cart-cont ${props.hideEffectClass}`}>
      <div className="cont-review-order">
        <div className="cont-products-op">
          {props.cartElements.length === 0 ? (
            <div className="no-prod-selected">{props.language.cart_noprod}</div>
          ) : null}
          {props.cartElements.map((product, index) => {
            return (
              <CardProductCart
                key={product.key}
                nID={product.key}
                name={product.name}
                quantity={product.quantity}
                onSetQuantity={props.onSetQuantity}
                product_id={product.id}
                deleteProduct={props.deleteProduct}
              />
            );
          })}
        </div>
        <br />
        <div className="cont-price-review">
          <div> {props.language.cart_subtotalprice} </div>
          <br />
          <div className="holder-price-final">
            <div>{props.language.marketplace_selector_pack_pills}</div>
            <div>{totalPrice.toFixed(2)} €</div>
          </div>
          <div className="holder-price-final">
            <div>{props.language.cart_delivery}</div>
            <div>5.00 €</div>
          </div>
          <br />
          <br />
          <div className="holder-price-final bold">
            <div>{props.language.cart_totalprice}</div>
            <div>{(totalPrice + 5).toFixed(2)} €</div>
          </div>
        </div>
      </div>
      <div className="cont-2-inp">
        <div className="cont-input-c hh">
          <input className="name-xuio" type="text" />
          <div className="title-input"> {props.language.add_name}</div>
        </div>
        <div className="cont-input-c hh">
          <input className="surname-xuio" type="text" />
          <div className="title-input"> {props.language.add_surname}</div>
        </div>
      </div>
      <div className="cont-2-inp">
        <div className="cont-input-c hh2">
          <input className="adress-xuio" type="text" />
          <div className="title-input"> {props.language.add_street}</div>
        </div>
        <div className="cont-input-c hh3">
          <input className="adressn-xuio" type="text" />
          <div className="title-input"> {props.language.add_streetn}</div>
        </div>
      </div>
      <div className="cont-2-inp">
        <div className="cont-input-c hh3">
          <input className="zip-xuio" type="text" />
          <div className="title-input"> {props.language.add_cap}</div>
        </div>
        <div className="cont-input-c hh2">
          <input className="city-xuio" type="text" />
          <div className="title-input"> {props.language.add_city}</div>
        </div>
      </div>
      <div className="cont-2-inp">
        <div className="cont-input-c hh4">
          <select className="country-xuio" name="country" id="">
            <option value="albania">Albania</option>
            <option value="andorra">Andorra</option>
            <option value="austria">Austria</option>
            <option value="belarus">Belarus</option>
            <option value="belgium">Belgium</option>
            <option value="bosnia_and_herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="bulgaria">Bulgaria</option>
            <option value="croatia">Croatia</option>
            <option value="cyprus">Cyprus</option>
            <option value="czech_republic">Czech Republic</option>
            <option value="denmark">Denmark</option>
            <option value="estonia">Estonia</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
            <option value="greece">Greece</option>
            <option value="hungary">Hungary</option>
            <option value="iceland">Iceland</option>
            <option value="ireland">Ireland</option>
            <option value="italy">Italy</option>
            <option value="kosovo">Kosovo</option>
            <option value="latvia">Latvia</option>
            <option value="liechtenstein">Liechtenstein</option>
            <option value="lithuania">Lithuania</option>
            <option value="luxembourg">Luxembourg</option>
            <option value="malta">Malta</option>
            <option value="moldova">Moldova</option>
            <option value="monaco">Monaco</option>
            <option value="montenegro">Montenegro</option>
            <option value="netherlands">Netherlands</option>
            <option value="north_macedonia">North Macedonia</option>
            <option value="norway">Norway</option>
            <option value="poland">Poland</option>
            <option value="portugal">Portugal</option>
            <option value="romania">Romania</option>
            <option value="russia">Russia</option>
            <option value="san_marino">San Marino</option>
            <option value="serbia">Serbia</option>
            <option value="slovakia">Slovakia</option>
            <option value="slovenia">Slovenia</option>
            <option value="spain">Spain</option>
            <option value="sweden">Sweden</option>
            <option value="switzerland">Switzerland</option>
            <option value="ukraine">Ukraine</option>
            <option value="united_kingdom">United Kingdom</option>
            <option value="vatican_city">Vatican City</option>
          </select>

          <div className="title-input"> {props.language.add_country}</div>
        </div>
      </div>

      <div onClick={handleGotoPaymentPage} className="button-pay">
        {props.language.add_continue}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="logo-pay"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
            clipRule="evenodd"
          />
        </svg>
        {(totalPrice + 5).toFixed(2)} €
      </div>
      <div className="container-payers">
        <img src={paymentMethods} className="img-payee" />
        <a href="/terms">{props.language.add_terms}</a>
      </div>
    </div>
  );
}

export default Cart;

function CardProductCart(props) {
  function handleDeleteProduct() {
    props.deleteProduct(props.nID);
  }
  function handleChangeQuanityPlus(key, update) {
    props.onSetQuantity(props.nID, 1);
  }
  function handleChangeQuanityMinus(key, update) {
    if (props.quantity === 1) return;
    props.onSetQuantity(props.nID, -1);
  }

  return (
    <div className="card-product-op">
      {props.product_id === "450" ||
      props.product_id === "1250" ||
      props.product_id === "2850" ? (
        <div className="point-prev"></div>
      ) : (
        <div className="point-prev-y"></div>
      )}

      <div className="info-op">
        <div className="name-m">
          {props.name} {props.language.pill_name}
        </div>
      </div>

      <div className="counter-op">
        <div onClick={handleChangeQuanityPlus} className="button-ui-c">
          +
        </div>
        <div>{props.quantity}</div>
        <div onClick={handleChangeQuanityMinus} className="button-ui-c">
          -
        </div>
        <div onClick={handleDeleteProduct} className="button-ui-c bg-bin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="logo-bin"
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
