import React from "react";

function Contact(props) {
  return (
    <div id="contact" className="page">
      <div className="container-contact">
        <h1 className="title-contact">{props.language.contact_title}</h1>
        <form className="form-contact">
          <div className="container-double-input-c">
            <div className="container-input-c">
              <label htmlFor="">{props.language.contact_name}</label>
              <input type="text" />
            </div>
            <div className="container-input-c">
              <label htmlFor="">{props.language.contact_email}</label>
              <input type="text" />
            </div>
          </div>
          <div className="select-query-container-c">
            <label htmlFor="">{props.language.contact_select}</label>
            <select name="" id="">
              <option value="0">---</option>
              <option value="1">{props.language.contact_option1}</option>
              <option value="2">{props.language.contact_option2}</option>
              <option value="3">{props.language.contact_option3}</option>
              <option value="4">{props.language.contact_option4}</option>
              <option value="5">{props.language.contact_option5}</option>
            </select>
          </div>
          <div className="contianer-text-area">
            <label htmlFor="">{props.language.contact_message}</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>
          <button className="button-send-message">
            {props.language.contact_send}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
