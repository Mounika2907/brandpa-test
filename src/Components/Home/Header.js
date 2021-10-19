import React from "react";
import "../../css/main.css";
import {
  faHome,
  faEnvelope,
  faPhone,
  faMoneyBill,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <header className="header-part">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <ul className="header-content">
              <li>
                <i>
                  <FontAwesomeIcon icon={faEnvelope} />
                </i>
                <p>info@miyami.com</p>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faPhone} />
                </i>
                <p>+8801838288389</p>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <ul className="header-content header-widget">
              <li className="dropdown">
                <a href="#">
                  <i>
                    <FontAwesomeIcon icon={faMoneyBill} />
                  </i>
                  currency
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    US Dollers
                  </a>
                  <a className="dropdown-item" href="#">
                    Rupees
                  </a>
                  <a className="dropdown-item" href="#">
                    Euro
                  </a>
                </div>
              </li>
              <li>
                <a href="/Login">
                  <i>
                    <FontAwesomeIcon icon={faUser} />
                  </i>
                  login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
