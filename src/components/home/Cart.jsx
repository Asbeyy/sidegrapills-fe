import React from "react";

function Cart() {
  return (
    <div className="cart-cont">
      <div className="cont-review-order">
        <div> Liste </div>
        <div> Total </div>
        <div> Sub Total </div>
      </div>
      <div className="cont-2-inp">
        <div className="cont-input-c hh">
          <input type="text" />
          <div> Nom</div>
        </div>
        <div className="cont-input-c hh">
          <input type="text" />
          <div> Prenom</div>
        </div>
      </div>
      <div className="cont-2-inp">
        <div className="cont-input-c hh2">
          <input type="text" />
          <div> Adresse ( Rue )</div>
        </div>
        <div className="cont-input-c hh3">
          <input type="text" />
          <div> N.</div>
        </div>
      </div>
      <div className="cont-2-inp">
        <div className="cont-input-c hh3">
          <input type="text" />
          <div> CAP</div>
        </div>
        <div className="cont-input-c hh2">
          <input type="text" />
          <div> Ville</div>
        </div>
      </div>
      <div className="cont-2-inp">
        <div className="cont-input-c hh4">
          <select name="country" id="">
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

          <div> Pays</div>
        </div>
      </div>

      <div className="button-pay">
        Proceder au payment
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
      </div>
    </div>
  );
}

export default Cart;
