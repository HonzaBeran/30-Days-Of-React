import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import html5Logo from "./html.png";
import css3Logo from "./css.png";
import jsLogo from "./js.png";
import reactLogo from "./logo512.png";

const jsx = <h1>Hello React</h1>;
const rootElement = document.getElementById("root");

const tech = (
  <div>
    <h1>Frontend Technologies</h1>
    <div className="logos">
      <img src={html5Logo} height={100} alt="html5" />
      <img src={css3Logo} height={100} alt="CSS" />
      <img src={jsLogo} height={80} alt="JS" />
      <img src={reactLogo} height={100} alt="React" />
    </div>
  </div>
);

const form = (
  <div className="form">
    <h1>SUBSCRIBE</h1>
    <p>Sign up with your email address to receive news and updates.</p>
    <form>
      <div className="textFields">
        <div className="textField">
          <label for="firstName">First Name</label>
          <input id="firstName" type="text" placeholder="First Name"></input>
        </div>

        <div className="textField">
          <label for="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder="Last Name"></input>
        </div>

        <div className="textField">
          <label for="email">Email adress</label>
          <input id="email" type="text" placeholder="Email"></input>
        </div>
      </div>
      <input type="submit" value="Subscribe"></input>
    </form>
  </div>
);

const app = (
  <div>
    {tech}
    {form}
  </div>
);

ReactDOM.render(app, rootElement);
