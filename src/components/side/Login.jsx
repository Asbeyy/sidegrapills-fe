import React from "react";

function Login() {
  function handleLoginSubmit(e) {
    e.preventDefault();

    const password = document.querySelector(".password-mm");
    console.log(password.value);

    if (password.value === "romeoyjulieta") {
      localStorage.setItem("acces-token-pfc", password.value);
      location.href = "/home";
    }
  }

  return (
    <div className="body-site">
      <form onSubmit={handleLoginSubmit} className="login-form">
        <h2> Admin Panel </h2>
        <div className="cont-input-c">
          <input className="password-mm" type="password" />
          <div className="title-input">Mot de passe</div>
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
