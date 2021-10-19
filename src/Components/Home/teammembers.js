import React from "react";
// import "../../css/team.css";
// import Carousel from "react-bootstrap/Carousel";
import back from "./images.jpg";
import back2 from "./profile.jpg";
import back3 from "./profile2.jpg";

export default function Teammembers() {
    return (
        <div>
            <div className="footer" style={{ background: "white", borderTop: " 1px solid #ddd",  }}>
                <div className="block-trustpilot">
                    <h3 style ={{    marginLeft:"60px",
}}>
                        Customers <span className="glyphicon glyphicon-heart" aria-hidden="true" /> Brandpa
                    </h3>
                    <div className="rating">
              <div className="stars" style ={{width:"100%",fontSize: "50px", textAlign:"center",marginLeft:"20px"}}>
                {/* <spna><i className ="fa fa-star checked"></i>
                <i className ="fa fa-star checked"></i>
                <i className ="fa fa-star checked"></i>
                <i className ="fa fa-star "></i>
                <i className ="fa fa-star "></i>
                </spna> */}
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star" />
                <span className="fa fa-star" />
              </div>
              
             
            </div>
                    {/* <a href="https://www.trustpilot.com/review/brandpa.com" target="_blank">
                        <img src="https://cdn.brandpa.com/images/trustpilot/trustpilot-rating.png" className="lazyload" alt="Trustpilot rating" style={{ width: "46%" , marginLeft: "700px"}} />
                    </a> */}
                    <div className="trustpilot-widget" data-locale="en-US" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="5b09542ed354b6000134ca6e" data-style-height="24px" data-style-width="100%" data-theme="light"> <a href="https://www.trustpilot.com/review/brandpa.com" target="_blank" rel="noopener" style={{ textAlign:"center",marginLeft:"740px",}}>See our 69 reviews onTrustpilot</a> </div>
                </div>
                <hr></hr>
            </div>

        </div>
    );
}
