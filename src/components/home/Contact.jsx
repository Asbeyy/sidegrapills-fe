import React from "react";

function Contact(props) {
  function handleSendMessage(e) {
    e.preventDefault();

    const topic = document.querySelector(".selectIssue-xap");
    const email = document.querySelector(".email-xap");
    const name = document.querySelector(".name-xap");
    const message = document.querySelector(".message-xap");

    fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message.value,
        email: email.value,
        name: name.value,
        topic: topic.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        location.reload();
      });
  }

  return (
    <div id="contact" className="page">
      <div className="container-contact">
        <h1 className="title-contact">{props.language.contact_title}</h1>
        <form onSubmit={handleSendMessage} className="form-contact">
          <div className="container-double-input-c">
            <div className="container-input-c">
              <label htmlFor="">{props.language.contact_name}</label>
              <input className="name-xap" type="text" />
            </div>
            <div className="container-input-c">
              <label htmlFor="">{props.language.contact_email}</label>
              <input className="email-xap" type="text" />
            </div>
          </div>
          <div className="select-query-container-c">
            <label htmlFor="">{props.language.contact_select}</label>
            <select className="selectIssue-xap" name="" id="">
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
            <textarea
              className="message-xap"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="button-send-message">
            {props.language.contact_send}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
