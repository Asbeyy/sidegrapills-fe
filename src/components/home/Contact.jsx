import React from "react";

function Contact() {
  return (
    <div id="contact" className="page">
      <div className="container-contact">
        <h1 className="title-contact">
          On aimerait t'aider, prends contacte avec nous 🤙
        </h1>
        <form className="form-contact">
          <div className="container-double-input-c">
            <div className="container-input-c">
              <label htmlFor="">Nom </label>
              <input type="text" />
            </div>
            <div className="container-input-c">
              <label htmlFor="">Email </label>
              <input type="text" />
            </div>
          </div>
          <div className="select-query-container-c">
            <label htmlFor="">Selectionnez le theme</label>
            <select name="" id="">
              <option value="">---</option>
              <option value="">Probleme de payement</option>
              <option value="">Information sur le produit</option>
              <option value="">xxx</option>
              <option value="">xxx</option>
              <option value="">xxx</option>
              <option value="">Autre</option>
            </select>
          </div>
          <div className="contianer-text-area">
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
          <button className="button-send-message"> Envoyer le message </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
