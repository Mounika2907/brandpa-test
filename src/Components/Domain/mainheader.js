import React, { Component } from "react";
import "../../css/mainheader.css"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../Home/card1.png"
import image2 from "../Home/card2.png"
import image3 from "../Home/card3.png"
import image4 from "../Home/card4.png"
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  }));

export default function Mainheader() {
    const classes = useStyles();
    return (
      <div>
          <div style={{marginTop:"60px"}}>
              <h1 style ={{display: "block",margin: "0",color: "#888",marginLeft: "px",padding: "18px",     marginLeft: "27px",}}>The domain name</h1>
              <h2 style ={{marginLeft:"45px",    color: "rgb(136, 136, 136)", marginBottom:"50px"}}><b style ={{fontSize:"30px", color:"black"}}>goldomo.com</b> is for sale</h2>
          </div>

       <div><div data-region-id="goldomo.com" data-region-type="domain-view" data-region="any"><div className="gray-panel">
                    <div className="container single-main">
                        <div className="row single-word">
                            <div className="col-md-6">
                                <h4 style ={{fontSize:"20px", fontWeight:700, color:"inherit"}}>What you get:</h4>
                                <ul className="get-list" >
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2"}}>✔️ Domain name: <b>goldomo.com</b>
                                    </li>
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2",}}>✔️ Logo design</li>
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2"}}>✔️ Design concepts (<a href="#concepts">view</a>)</li>
                                </ul>
                                <div className="price-box">
                                    <div className="price-box-desc">
                                        <h4 style ={{fontSize:"20px", fontWeight:700, color:"inherit"}}>Buy goldomo.com</h4>
                                        <div className="price-box-value">
                                            <div id="instalment-price" style={{ display: 'none' }}>
                                                <span className="domain-price" id="instalment-price-text" />
                                                <span className="domain-price-small" id="instalment-price-small-text" />
                                            </div>
                                            <div id="regular-price">
                                                <span style ={{fontSize:"20px", fontWeight:700, color:"inherit"}} className="domain-price">
                                                    $2395
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="price-box-actions">
                                        <div className="price-box-buttons">
                                        <button className="btn btn-lg btn-buy" id="buy-button" style ={{ background: "#df055e", border: "none",color: "white", padding: "15px 32px",textAlign: "center",textDecoration: "none",display: "inline-block",fontSize: "16px", margin: "4px 2px", cursor: "pointer",  }}> ✔️  Buynow</button>
                                        <button className="btn btn-lg btn-buy" id="buy-button" style ={{ background: "white", border: "1px solid black",color: "black", padding: "15px 32px",textAlign: "center",textDecoration: "none",display: "inline-block",fontSize: "16px", margin: "4px 2px", cursor: "pointer",  }}> ❤ Add To favourites</button>
                                        
                                            {/* <button className="btn btn-lg btn-buy" id="buy-button">
                                                <span className="glyphicon glyphicon-ok" aria-hidden="true" /> <span id="buy-now-text">Buy now</span>
                                            </button>
                                            <a title="Favourite" className="btn btn-contact btn-block toggle-fav toggle-fav-with-text" href="#" data-price={2395} data-domain="goldomo.com">
                                                <span className="glyphicon glyphicon-heart" aria-hidden="true" />
                                                <span className="fav-text-unset">Add to favourites</span>
                                                <span className="fav-text-set">Favourited</span>
                                            </a> */}
                                        </div>
                                    </div>
                                    <div className="price-box-footer">
                                        <hr></hr>
                                        Or <a id="make-offer-button" href="#contact">make an offer</a> for this domain name.
                                    </div>
                                </div>
                                <h2 style ={{fontFamily:"inherit", fontWeight:500, color:"inherit",padding: "10px",fontSize: "24px",lineHeight: "30px",marginBottom: "20px", }}>Contemporary company name for sale</h2>
                                <p style ={{fontFamily:"inherit", fontWeight:500, padding: "8px",fontSize: "18px"}}>This domain name could be ideally suited to a finance organisation.</p>
                                <h3 style ={{marginLeft: "-350px",fontSize: "22px",lineHeight: "30px",marginBottom: "20px", }}>Length
                                    <span title="This domain is short." className="label label-success label-featured" data-toggle="tooltip">Good</span>
                                </h3>
                                <p style ={{fontSize:"18px"}}>The name "<span data-silktide="ignore">goldomo</span>" has seven letters and three syllables. Examples of popular three syllable names include Nescafé, Verizon and Adidas.</p>
                                <h3 style ={{marginLeft: "-260px"}}>
                                    Domain age
                                    <span title="This domain has been registered for a long time." className="label label-success label-featured" data-toggle="tooltip">Excellent</span>
                                </h3>
                                <p>
                                    This domain was first registered in August 2016.
                                    Older domains have an advantage when ranking in search engines.
                                </p>
                                <h3 style ={{marginLeft: "-360px"}}>TLD
                                    <span title="This is a dot-com domain, which are the most sought-after." className="label label-info label-featured" data-toggle="tooltip">Excellent</span>
                                </h3>
                                <p>Goldomo.com is a dot-com domain. Dot com domains are the most prestigious top-level-domain in the world, used by famous websites like facebook.com. Owning a dot-com says that you own the word "<span data-silktide="ignore">goldomo</span>" online.</p>
                            </div>
                            <div className="col-md-5 col-md-offset-1 thumb-container">
                                <div className="visible-xs"><div style={{ height: 15 }} /></div>
                                <div className="hidden-xs">
                                <div style={{ top: "67px", }}>
                                    <div className="App"  style ={{marginTop: "-163px"}}>
                                    <img src={image1} className="sliderimg" alt=""  style ={{        maxWidth: "398px", marginLeft:"-38px"}}/>
                                        {/* <AliceCarousel autoPlay autoPlayInterval="3000" style ={{top: "-156px"}} >
                                            <img src={image1} className="sliderimg" alt=""  style ={{    width: "256.1042px"}}/>
                                            <img src={image2} className="sliderimg" alt=""  style ={{    width: "256.1042px"}}/>
                                            <img src={image3} className="sliderimg" alt=""  style ={{    width: "256.1042px"}}/>
                                            <img src={image4} className="sliderimg" alt=""  style ={{    width: "256.1042px"}}/>
                                        </AliceCarousel> */}
                                    </div>
                                </div>
                                </div>
                                <Card className={classes.root} style ={{    marginTop: "-4px"}}>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                        <a href="#" class="round-button"><i class="fa fa-play fa-2x"></i></a>

                                        
                                        </CardContent>
                                        
                                    </div>
                                    <div>
                                            <h4 style ={{fontSize:"20px"}}>
                                                How to pronounce "goldomo"
                                            </h4>
                                            <p>
                                                One suggestion for how this name could sound when used.
                                            </p>
                                        </div>
                                    </Card>
                                {/* <div id="domain-say-aloud-container" style={{ display: 'none' }}>
                                    <h3>Pronunciation</h3>
                                    <div className="pronunciation-panel" id="domain-say-aloud">
                                        <button className="btn btn-info">
                                        <a href="#" class="round-button"><i class="fa fa-play fa-2x"></i></a>
                                            <span className="glyphicon glyphicon-play" aria-label="Play" />
                                        </button>
                                        <div>
                                            <h4>
                                                How to pronounce "goldomo"
                                            </h4>
                                            <p>
                                                One suggestion for how this name could sound when used.
                                            </p>
                                        </div>
                                    </div>
                                </div> 
                              */}
                                <h3 style ={{marginLeft: "-300px",}}>Keywords</h3>
                                <p>
                                    <a className="btn btn-default btn-tag" href="/styles/aged-domain" style ={{marginLeft: "5px", padding: "12px", fontSize:"15px",    boxShadow: "none", }}>
                                        Aged
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/keywords/bank" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px" ,  boxShadow: "none",}}>
                                        Bank
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/industries/banking" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Banking
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/keywords/commerce" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px", boxShadow: "none",}}>
                                        Commerce
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/styles/corporate" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px", boxShadow: "none",}}>
                                        Corporate
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/industries/cryptocurrency" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Cryptocurrency
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/industries/finance" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px", boxShadow: "none",}}>
                                        Finance
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/industries/fundraising" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px" , boxShadow: "none",}}>
                                        Fundraising
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/keywords/gold" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px" , boxShadow: "none",}}>
                                        Gold
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/keywords/investing" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Investing
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/industries/investment" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Investment
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/styles/keyword" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Keyword
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/styles/luxury" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Luxury
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/styles/modern" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Modern
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/keywords/payment" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Payment
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/industries/payments" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Payments
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/keywords/silver" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Silver
                                    </a>
                                    <a className="btn btn-default btn-tag" href="/industries/technology" style ={{marginLeft: "5px", padding: "9px", fontSize:"15px",  boxShadow: "none",}}>
                                        Technology
                                    </a>
                                </p>
                                <h3 data-silktide="ignore" style ={{marginLeft: "-200px", fontSize:"24px"}}>Ideas for goldomo</h3>
                                <ul className="unordered">
                                    <li>
                                        <a href="/ideas/funding-network" style ={{fontSize:"22x", lineHeight:"1.5rem"}}>
                                            Funding network
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ideas/alternative-investment-experts" style ={{fontSize:"22x", lineHeight:"1.5rem"}}>
                                            Alternative investment experts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ideas/investments-website" style ={{fontSize:"22x", lineHeight:"1.5rem"}}>
                                            Investments website
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ideas/funding-organization" style ={{fontSize:"22x", lineHeight:"1.5rem"}}>
                                            Funding organization
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ideas/gamified-investments" style ={{fontSize:"22x", lineHeight:"1.5rem"}}>
                                            Gamified investments
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ideas/payroll-service" style ={{fontSize:"22x", lineHeight:"1.5rem"}}>
                                            Payroll service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ideas/financial-advisors" style ={{fontSize:"22x", lineHeight:"1.5rem"}}>
                                            Financial advisors
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ideas/cryptocurrency-exchange" style ={{fontSize:"22x", lineHeight:"1.5rem"}}>
                                            Cryptocurrency exchange
                                        </a>
                                    </li>
                                </ul>
                                <h3 style ={{marginLeft: "-270px",}}>Helpful links</h3>
                                <ul className="unordered">
                                    <li>
                                        <a href="https://resources.brandpa.com/knowledgebase/how-does-buying-a-domain-name-on-brandpa-work/" target="_blank">
                                            How does buying a domain name work?
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://resources.brandpa.com/knowledgebase/how-trademarks-and-domain-names-work/" target="_blank">
                                            How trademarks and domain names work
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.google.com/search?q=goldomo" target="_blank">
                                            Search Google for <b data-silktide="ignore">goldomo</b>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div></div></div>
      </div>
    );
}
