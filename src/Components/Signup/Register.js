import React, { Component } from "react";
import Fade from "react-reveal";
import "./Register.css";
import mage from "../../images/loginform-1.png";
import mage1 from "../../images/loginform-2.png";

const form = {};

export default class Register extends Component {
  render() {
    return (
      <div>
        {" "}
        <div id="Login">
          <div className="inner">
            <Fade left delay={800}>
              <img src={mage} className="image-1" />
            </Fade>
            <i className="fa fa-arrow"></i>
            <form className="my-form" action>
              <h3>New Account?</h3>
              <div className="Login-form-holder">
                <span className="lnr lnr-user" />
                <input
                  type="text"
                  className="Login-form-control"
                  placeholder="Username"
                />
              </div>
              <div className="Login-form-holder">
                <span className="lnr lnr-phone-handset" />
                <input
                  type="text"
                  className="Login-form-control"
                  placeholder="Phone Number"
                />
              </div>
              <div className="Login-form-holder">
                <span className="lnr lnr-envelope" />
                <input
                  type="text"
                  className="Login-form-control"
                  placeholder="Mail"
                />
              </div>
              <div className="Login-form-holder">
                <span className="lnr lnr-lock" />
                <input
                  type="password"
                  className="Login-form-control"
                  placeholder="Password"
                />
              </div>
              <div className="Login-form-holder">
                <span className="lnr lnr-lock" />
                <input
                  type="password"
                  className="Login-form-control"
                  placeholder="Confirm Password"
                />
              </div>
              <button className="my-button">
                <span>Register</span>
              </button>
              <a href="/login">
                <span>Already have an account..!</span>
              </a>
            </form>
            <fade right>
              <img src={mage1} alt className="image-2" />
            </fade>
          </div>
        </div>
      </div>
    );
  }
}
