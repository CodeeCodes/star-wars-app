import React from "react";
import logoTwo from "../assets/svg/logoTwo.svg";
import "../styles/main.css";
import axios from "axios";
const loginUrl = "http://localhost:5000/auth";

export default function FrontPage() {
  const loginUser = event => {
    event.preventDefault();
    console.log(event.target.email.value, event.target.password.value);
    axios
      .post(loginUrl, {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      })
      .then(({ data }) => {
        console.log("Token: ", data);
        localStorage.authToken = data.token;
      });

    event.target.reset();
  };
  return (
    <div className="front__page">
      <header className="App-header">
        <div className="front__page-login">
          <form
            action="/"
            method="POST"
            onSubmit={loginUser}
            className="front__page-login-form"
          >
            <div>
              <h4 className="front__page-heading-small">Name</h4>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="front__page-input"
              />
            </div>
            <div>
              <h4 className="front__page-heading-small">Email</h4>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="front__page-input"
              />
            </div>
            <div>
              <h4 className="front__page-heading-small">Password</h4>
              <input
                type="text"
                name="password"
                placeholder="Password"
                className="front__page-input"
              />
            </div>
            <div className="front__page-button-div">
              <button className="front__page-button">LOGIN</button>
            </div>
          </form>
        </div>
      </header>
      <div className="front__page-image">
        {" "}
        <img src={logoTwo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}
