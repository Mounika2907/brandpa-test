import React from "react";

export default function Footer() {
  return (
    <div>
        <>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  {/*---- Include the above in your HEAD tag --------*/}
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
  {/*footer starts from here*/}
  <footer className="footer" style ={{background:"#1d262d"}}>
    <div className="container bottom_border">
      <div className="row">
        <div className=" col-sm-4 col-md col-sm-4  col-12 col">
          <h5 className="headin5_amrc col_white_amrc pt2" style ={{color: "#858585",fontSize: "18px",}}>Find us</h5>
          {/*headin5_amrc*/}
          <p className="mb10" style ={{fontSize: "18px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p style ={{fontSize: "18px"}}><i className="fa fa-location-arrow" /> 9878/25 sec 9 rohini 35 </p>
          <p style ={{fontSize: "18px"}}><i className="fa fa-phone" />  +91-9999878398</p>
          <p style ={{fontSize: "18px"}}><i className="fa fa fa-envelope" /> info@example.com</p>
        </div>
        <div className=" col-sm-4 col-md  col-6 col">
          <h5 className="headin5_amrc col_white_amrc pt2"  style ={{color: "#858585",fontSize: "18px"}}>Quick links</h5>
          {/*headin5_amrc*/}
          <ul className="footer_ul_amrc">
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Image Rectoucing</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Clipping Path</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Hollow Man Montage</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Ebay &amp; Amazon</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Hair Masking/Clipping</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Image Cropping</a></li>
          </ul>
          {/*footer_ul_amrc ends here*/}
        </div>
        <div className=" col-sm-4 col-md  col-6 col">
          <h5 className="headin5_amrc col_white_amrc pt2"  style ={{color: "#858585",fontSize: "18px"}}>Quick links</h5>
          {/*headin5_amrc*/}
          <ul className="footer_ul_amrc">
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Remove Background</a></li>
            <li><a href="http://webenlance.com" style ={{color: "#858585",fontSize: "18px"}}>Shadows &amp; Mirror Reflection</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Logo Design</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585", }}>Vectorization</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585" ,fontSize: "18px"}}>Hair Masking/Clipping</a></li>
            <li><a href="http://webenlance.com"  style ={{color: "#858585",fontSize: "18px"}}>Image Cropping</a></li>
          </ul>
          {/*footer_ul_amrc ends here*/}
        </div>
        <div className=" col-sm-4 col-md  col-12 col">
          <h5 className="headin5_amrc col_white_amrc pt2" style ={{color: "#858585",fontSize: "18px"}}>Follow us</h5>
          {/*headin5_amrc ends here*/}
          <ul className="footer_ul2_amrc">
            <li><a href="#"><i className="fab fa-facebook-f" style ={{color:"#858585"}} /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#" style ={{color:"#858585"}}>https://www.lipsum.com/</a></p></li>
            <li><a href="#"><i className="fab fa-twitter" style ={{color:"#858585"}}/> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#" style ={{color:"#858585"}}>https://www.lipsum.com/</a></p></li>
            <li><a href="#"><i className="fab fa-instagram" style ={{color:"#858585"}}/></a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#" style ={{color:"#858585"}}>https://www.lipsum.com/</a></p></li>
          </ul>
          {/*footer_ul2_amrc ends here*/}
        </div>
      </div>
    </div>
    {/* <div className="container">
      <ul className="foote_bottom_ul_amrc">
        <li><a href="http://webenlance.com" style ={{color: "#858585",fontSize: "18px"}}>Home</a></li>
        <li><a href="http://webenlance.com" style ={{}}>About</a></li>
        <li><a href="http://webenlance.com">Services</a></li>
        <li><a href="http://webenlance.com">Pricing</a></li>
        <li><a href="http://webenlance.com">Blog</a></li>
        <li><a href="http://webenlance.com">Contact</a></li>
      </ul>
      {/*foote_bottom_ul_amrc ends here*/}
      {/* <p className="text-center">Copyright @2017 | Designed With by <a href="#">Your Company Name</a></p>
      <ul className="social_footer_ul">
        <li><a href="http://webenlance.com"><i className="fab fa-facebook-f" /></a></li>
        <li><a href="http://webenlance.com"><i className="fab fa-twitter" /></a></li>
        <li><a href="http://webenlance.com"><i className="fab fa-linkedin" /></a></li>
        <li><a href="http://webenlance.com"><i className="fab fa-instagram" /></a></li>
      </ul>
      {/*social_footer_ul ends here*/}
    {/* </div> */} 
  </footer>
  {/* Crédit to https://bootsnipp.com/snippets/bxDBA */}
</>
    </div>
  );
}
{/* <section className="footer-part" style = {{backgroundColor: "#ce3930;"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12">
              <div className="footer-about">
                <a className="footer-logo" href="index.html">
                  <img src="assets/images/main-logo.png" alt="main-logo" />
                </a>
                <p>
                  Monotnec deplos copertve chanvae to anding crorate Qhanin
                  Unique Qnderwhe on Premum Converenc With Uheing Mutmeda with
                  Nquel Undehele Mandnge theme with Qhanin Unque Qnderwhe.
                </p>
                <ul className="social-icon">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-3">
              <div className="footer-widget">
                <h3>links</h3>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="fas fa-angle-double-right" />
                      home
                    </a>
                  </li>
                  <li>
                    <a href="#about-part">
                      <i className="fas fa-angle-double-right" />
                      about
                    </a>
                  </li>
                  <li>
                    <a href="#service-part">
                      <i className="fas fa-angle-double-right" />
                      services
                    </a>
                  </li>
                  <li>
                    <a href="portfolio.html">
                      <i className="fas fa-angle-double-right" />
                      portfolio
                    </a>
                  </li>
                  <li>
                    <a href="blog-list.html">
                      <i className="fas fa-angle-double-right" />
                      blogs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-md-3">
              <div className="footer-widget">
                <h3>support</h3>
                <ul>
                  <li>
                    <a href="#team-part">
                      <i className="fas fa-angle-double-right" />
                      team
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      condition
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      clients
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      career
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-angle-double-right" />
                      community
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div className="footer-blog">
                <h3>recent post</h3>
                <ul>
                  <li>
                    <img
                      src="assets/images/footer-blog-1.jpg"
                      alt="footer-blog-1"
                    />
                    <div className="footer-text">
                      <h5>
                        <a href="#">
                          it is a long established fact that reader will ...
                        </a>
                      </h5>
                      <p>02 february 2020</p>
                    </div>
                  </li>
                  <li>
                    <img
                      src="assets/images/footer-blog-1.jpg"
                      alt="footer-blog-1"
                    />
                    <div className="footer-text">
                      <h5>
                        <a href="#">
                          it is a long established fact that reader will ...
                        </a>
                      </h5>
                      <p>02 february 2020</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> */}