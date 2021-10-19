import React, { Component } from "react";
import "../../css/main.css";
import logo from "../../images/main-logo.png";
import doccontact from "../../images/doc-contact-bg.png";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

import Fade from "react-reveal";
import Zoom from "react-reveal/Zoom";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <div>
        <section className="domain-part home-2-banner">
          <div className="domain-bg">
            {/* <img className="banner-bg" src={doccontact} alt="doc-contact-bg" /> */}
            <div className="container">
              <div className="row">
                <Zoom>
                  <div className="col-lg-12">
                    <div className="section-heading">
                      <span className="title">Domohost</span>
                      <h1 style ={{fontSize: "40px",lineHeight: "50px"}}>Looking for .gold domain ?</h1>
                    </div>
                  </div>
                </Zoom>
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <form className="domain-form">
                    <div className="domain-input">
                      <i className="fas fa-search" />
                      <input
                        type="text"
                        placeholder="Search your domain name"
                      />
                      <div className="domain-select">
                        <select className="custom-select custom-select-lg">
                          <option activated>.gold</option>
                        </select>
                      </div>
                      <button className="btn btn-primary">search</button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="home-2-video">
                    <a className="venobox banner-video">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="L61p2uyiMSo"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <i
                        type="button"
                        onClick={this.openModal}
                        className="fas fa-play"
                      />
                    </a>
                    <p style={{ fontSize: "25px" }}>What is .gold</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
