import React from 'react'
import "./Howitworks.css"
import Teammembers from '../Home/teammembers';
import Team from '../Home/team';
import Footer from "../Footer/Footer";
import Navbar from "../Navigation/Navbar"
export default function Howitworks() {
    return (
      <div>
        <Navbar />
<>
  <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <div className="article-header" style ={{    marginTop: "30px",
}}>
          <h1 style ={{fontSize: "36px", paddingTop:"30px",
    fontWeight: 600,textAlign:"center",marginLeft:"7px"}}>Find the perfect name for your new business</h1>
          <p className="lead" style ={{fontSize:"24px",paddingTop:"20px", color:"black"}}>
            We sell premium domain names for new businesses and brands.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="article-body" style={{ maxWidth: 1000, marginLeft:"60px" }}>
      <div
        className="videoWrapper"
        data-region="partial"
        data-region-type="ui"
        data-region-id="buyers-video"
      >
        <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/embed/Hqx-gvecjf8?rel=0&controls=1&loop=1&modestbranding=1"
          frameBorder={0}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    </div>
  </div>
  
  <div className="container" style ={{    marginBottom: "71px",
}}>
      <div className="row">
        <div className="section-heading-4 col-md-12 text-center">
          <h2 style ={{fontSize:"30px", marginTop:"40px",textAlign: "center",
    margin:" 0 0 30px 0"}}>What you get with Brandpa</h2>
        </div>
      </div>
      <div className="row single-features-l10-items justify-content-center" style ={{    width: "1600px", marginLeft:"-250px"
}}>
        <div
          className="col-xl-4 col-lg-6 col-md-6 col-sm-9"
          data-aos="fade-right"
          data-aos-delay={300}
          data-aos-duration={1000}
        >
          <div className="single-features" style ={{   boxShadow: "4px 4px 8px 4px rgba(0.2,0.2,0.2,0.2)",    width: "470px",
 }}>
            <h4 style={{textAlign:"center"}}>Quality names</h4>
            {/* <span className="feature-icon"> */}
              <img src ="https://cdn.brandpa.com/images/buyers-panel-1.png" style ={{maxHeight: "40px", justifyContent:"center",marginLeft:"85px",marginTop:"15px",marginBottom:"40px"}} />
            {/* </span> */}
            
            <p style ={{    width: "400px",
}}>
            Our team carefully selects and categorises domain names to be short, compelling and brandable.
            </p>
            <a href="#" className="btn focus-reset" style ={{background: "#ef156e",
    border: "1px solid #ef156e",
    marginLeft: "55px",
    color:"white",

}}>
             See domains for sale
              <i className="fas fa-angle-right" />
            </a>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 col-sm-9"
          data-aos="fade-up"
          data-aos-delay={300}
          data-aos-duration={1000}
        >
          <div className="single-features" style ={{   boxShadow: "4px 4px 8px 4px rgba(0.2,0.2,0.2,0.2)",  width: "470px",}}>
            <h4 style={{textAlign:"center"}}>Transparent pricing</h4>
            {/* <span className="feature-icon"> */}
              <img src ="https://cdn.brandpa.com/images/buyers-panel-2.png"  style ={{maxHeight: "40px", justifyContent:"center",marginLeft:"136px",marginTop:"15px",marginBottom:"40px"}}  />
            {/* </span> */}
           
            <p style ={{    width: "377px"}}>
              Whether it’s a small internal app or a new for millions of
              customers, our design and development teams.
            </p>
            <a href="#" className="btn focus-reset" style ={{background: "#ef156e",
    border: "1px solid #ef156e",
    color: "white",
    marginLeft: "55px",

}}>
              How domains are saled
              <i className="fas fa-angle-right" />
            </a>
          </div>
        </div>
        <div
          className="col-xl-4 col-lg-6 col-md-6 col-sm-9"
          data-aos="fade-left"
          data-aos-delay={300}
          data-aos-duration={1000}
        >
          <div className="single-features" style ={{   boxShadow: "4px 4px 8px 4px rgba(0.2,0.2,0.2,0.2)",  width: "470px",}}>
            <h4 style ={{    fontWeight: "bold",fontSize: "30px",
    
    lineHeight: "1.3em",
    color: "#222",
    textAlign:"center"
}}>Safe and secure</h4>
              <img src ="https://cdn.brandpa.com/images/buyers-panel-3.png" style ={{maxHeight: "35px",width: "140px",marginBottom:"30px",
    height: "47px",
    marginLeft: "100px",
    marginTop: "20px",}} />
            {/* <span className="feature-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={37}
                height={37}
                viewBox="0 0 37 37"
              >
                <g>
                  <g>
                    <g>
                      <path
                        className="mypath1"
                        fill="none"
                        stroke="#f46f7c"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={20}
                        strokeWidth={2}
                        d="M18.498 24.066a5.568 5.568 0 1 0 0-11.136 5.568 5.568 0 0 0 0 11.136z"
                      ></path>
                    </g>
                    <g>
                      <path
                        className="mypath2"
                        fill="none"
                        stroke="#f46f7c"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit={20}
                        strokeWidth={2}
                        d="M31.223 18.5a12.764 12.764 0 0 0-.299-2.725l4.318-3.27v0l-3.182-5.51v0l-5 2.11a12.698 12.698 0 0 0-4.71-2.736L21.677 1v0h-6.364v0l-.671 5.37a12.698 12.698 0 0 0-4.711 2.734l-5-2.11v0L1.75 12.506v0l4.318 3.27a12.574 12.574 0 0 0 0 5.45l-4.318 3.27v0l3.182 5.51v0l5-2.11a12.698 12.698 0 0 0 4.71 2.736L15.315 36v0h6.364v0l.671-5.37a12.698 12.698 0 0 0 4.71-2.734l5.001 2.11v0l3.182-5.511v0l-4.318-3.27c.197-.895.298-1.808.3-2.725z"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </span> */}
           
            <p style ={{marginTop:"30px"}}>
            All payment is held securely in escrow. We guarantee you always get your domain name.
            </p>
            <a href="#" className="btn focus-reset" style ={{background: "#ef156e",
    border: "1px solid #ef156e",
    color: " white",    marginLeft: "55px",
}}>
              How purcheses are secured
              <i className="fas fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  <div className="gray-panel large-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div id="faqs" className="scroll-to" />
          <h2 style ={{fontSize: "30px",
    lineHeight: "30px",
    marginBottom: "20px",}}>Frequently Asked Questions</h2>
        </div>
        <div className="col-md-8 col-md-offset-2" style ={{fontSize:"20px"}}>
          <ul>
            <li>
              <a href="https://resources.brandpa.com/knowledgebase/what-payment-options-do-you-accept/">
              ● What payment options do you accept?
              </a>
            </li>
            <li>
              <a href="https://resources.brandpa.com/knowledgebase/how-long-does-it-take-to-transfer-a-domain/">
              ● How long does it take to transfer a domain?
              </a>
            </li>
            <li>
              <a href="https://resources.brandpa.com/knowledgebase/how-is-my-purchase-kept-secure/">
              ● How is my purchase kept secure?
              </a>
            </li>
            <li>
              <a href="testimonials.html">
              ●  Can I see some of your satisfied customers?
              </a>
            </li>
            <li>
              <a href="https://resources.brandpa.com/knowledgebase/do-domains-include-trademark-registrations/">
              ● Do domains include trademark registrations?
              </a>
            </li>
            <li>
              <a href="https://resources.brandpa.com/knowledgebase/what-is-your-return-policy/">
              ● What is your return policy?
              </a>
            </li>
            <li>
              <a href="https://resources.brandpa.com/knowledgebase/what-is-vat-and-how-does-it-apply-to-prices/">
              ● What is VAT and how does it apply to prices?
              </a>
            </li>
            <li>
              <a href="https://resources.brandpa.com/knowledgebase/can-i-negotiate-prices/">
              ● Can I negotiate prices?
              </a>
            </li>
          </ul>
          <p>
            Still have questions?
            <a href="https://resources.brandpa.com/submit-a-ticket/">
              Contact a member of our support team
            </a>
            .
            <span style={{ display: "none" }}>
              <a href="files/pdf.pdf">View PDF</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  
</>
<Teammembers />
<Team />
<Footer />

      </div>
           
    );
}
