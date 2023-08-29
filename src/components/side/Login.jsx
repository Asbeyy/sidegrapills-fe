import React, { useState } from "react";

function Login() {
  const [passVisible, setPassVisible] = useState(false);
  const [inputType, setInputType] = useState("password");
  function handleLoginSubmit(e) {
    e.preventDefault();

    const password = document.querySelector(".password-mm");
    console.log(password.value);

    if (password.value === "romeoyjulieta") {
      localStorage.setItem("acces-token-pfc", password.value);
      location.href = "/home";
    }
  }

  function handleShowPassowrd() {
    if (passVisible) {
      setInputType("password");
      setPassVisible(false);
    } else {
      setInputType("text");
      setPassVisible(true);
    }
  }
  return (
    <div className="body-site">
      <form onSubmit={handleLoginSubmit} className="login-form">
        <h2> Admin Panel </h2>
        <div className="cont-input-c">
          <input className="password-mm" type={inputType} />
          <div className="title-input">Mot de passe</div>
        </div>
        <div onClick={handleShowPassowrd}>Show password</div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
