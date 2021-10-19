import React from "react";
import "../../css/heading.css"
import 'react-slideshow-image/dist/styles.css'
// import { Slide } from 'react-slideshow-image';
import Carousel from 'react-bootstrap/Carousel'
import Case1 from "../../images/2.jpg"
import Case2 from "../../images/8.jpg"
import Case3 from "../../images/12.jpg"



// import "../../css/main.css";
// import Carousel from "react-bootstrap/Carousel";



export default function Testimonials() {
  return (
    <div style ={{top:"-0px", position:"relative"}}>
                  <Carousel style= {{ top: "-40px"}}>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={Case1}
                    alt="First slide"
                    width="auto"
                    height="730px"
                  />
                  <Carousel.Caption style ={{top: "297px"}}>
                    <h3 style ={{color:"white"}}>Find the perfect domain for your startup</h3>
                    <div class="topnav">
  
                      <div className="search-container">
                        <form action="/names" style ={{position: "relative", paddingRight: "160px",}}>
                          <input type="text" placeholder="Search.." name="search" />
                          <button type="submit" style ={{marginTop : "-6px"}}><i class="fa fa-search"></i></button>
                        </form>
                      </div>
                    </div>
                    <p style ={{fontSize: "17px"}}>We sell premium domain names for new businesses and brands. How it works.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={Case2}
                    alt="Second slide"
                    width="auto"
                    height = "740px !important"

                  />

                  <Carousel.Caption style ={{top: "297px"}}>
                    <h3 style ={{color:"white"}}>Find the perfect domain for your startup</h3>
                    <div class="topnav">
  
                      <div className="search-container">
                        <form action="/names" style ={{position: "relative", paddingRight: "160px",}}>
                          <input type="text" placeholder="Search.." name="search" />
                          <button type="submit" style ={{marginTop : "-6px"}}><i class="fa fa-search"></i></button>
                        </form>
                      </div>
                    </div>
                    <p style ={{fontSize: "17px", }}>We sell premium domain names for new businesses and brands. How it works</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src={Case3}
                    alt="Third slide"
                    width="auto"
                    height="720px"
                  />

                  <Carousel.Caption style ={{top: "297px"}}>
                    <h3 style ={{color:"white"}}>Find the perfect domain for your startup</h3>
                    <div class="topnav">
  
                      <div className="search-container">
                        <form action="/names" style ={{position: "relative", paddingRight: "160px",}}>
                          <input type="text" placeholder="Search.." name="search" />
                          <button type="submit" style ={{marginTop : "-6px"}}><i class="fa fa-search"></i></button>
                        </form>
                      </div>
                    </div>
                    <p style ={{fontSize: "17px"}}>We sell premium domain names for new businesses and brands. How it works</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
      {/* <section className="testi-part">
        <div className="container">
          <div className="row">
            <>
              <div className="header" style={{ width: "200%", marginLeft: "-400px", top: "-65px", background: "linear-gradient(to bottom, #441196 20%, #080c47 120%)" }}>
                <h2 style={{ color: "white", marginRight: "280px", }}>Find the perfect domain for your startup</h2>


                <form action="/names" id="search-form">
                  <div className="search-control">
                    <input type="text" name="search" placeholder="Search by keyword, e.g. tech, beauty" aria-label="Search by keyword, e.g. tech, beauty" autofocus data-hj-whitelist defaultValue style={{
                      paddingLeft: "439px", paddingTop: "10px",
                      marginTop: "11px", marginLeft: "-278px",
                    }} />
                    <button type="submit"><i className="fa fa-search" style={{
                      paddingTop: "20px",
                      paddingLeft: "9px",
                      paddingRight: "5px"
                    }} /></button>
                  </div>
                </form>
                <p style={{ color: "white", margin: "30px 0", fontSize: "22px", color: "lightslategray", padding: "14px", paddingRight: "192px", }}>We sell premium domain names for new businesses and brands. How it works

                </p>
              </div>

            </>
          </div>
        </div>
      </section> */}
    </div>
  );
}
