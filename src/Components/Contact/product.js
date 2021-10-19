import React from 'react'
import "./product.css"
import image1 from "../Home/card1.png"
import image2 from "../Home/card2.png"
import image3 from "../Home/card3.png"
import image4 from "../Home/card4.png"
import "../../css/mainheader.css"
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



export default function Product() {
  const classes = useStyles();

    return (
      <div>
          <div className ="container"  >
          {/* <h1 style ={{display: "block",margin: "0",color: "#888",marginLeft: "px",padding: "18px",     marginLeft: "27px", textAlign:"center", fontSize:"40px",color:"black"}}><b>Featured domain names for sale</b></h1>
          <p style ={{textAlign:"center"}}>The name "goldomo" has seven letters and three syllables. Examples of popular three syllable names include Nescafé, Verizon and Adidas.</p> */}
              {/* <h1 style ={{display: "block",margin: "0",color: "#888",marginLeft: "px",padding: "18px",     marginLeft: "27px", textAlign:"center"}}>The domain name</h1> */}
              {/* <h2 style ={{marginLeft:"45px",    color: "rgb(136, 136, 136)", marginBottom:"50px", textAlign:"center"}}><b style ={{fontSize:"30px", color:"black"}}>goldomo.com</b> is for sale</h2> */}
          </div>
          {/* <div className="col-12" style ={{marginTop:"30px"}}>
  <div className="breadcrumb-content text-center">
    <h1 className="breadmome-name breadcrumbs-title">
      Lorem Ipsum is simply dummy text
    </h1>
    <nav className role="navigation" aria-label="breadcrumbs">
      <ul className="breadcrumb-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sport &amp; Outdoor</a>
          <span>Lorem Ipsum is simply dummy text</span>
        </li>
      </ul>
    </nav>
  </div>
</div> */}
<div style ={{ background: "white"}}>
          <>
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  {/*---- Include the above in your HEAD tag --------*/}
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>eCommerce Product Detail</title>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:400,700"
    rel="stylesheet"
  />
  <div className="container-fluid" style ={{marginLeft:"250px", marginTop:"80px"}}>
    <div className="cards">
      <div className="container">
        <div className="wrapper row">
          <div className="preview col-md-6">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1">
                <img src={image1}  style ={{height: "320px",borderRadius: "14px",}}/>
              </div>
              <div className="tab-pane" id="pic-2" >
                <img src={image2} style ={{height: "320px",borderRadius: "14px",}}/> 
              </div>
              <div className="tab-pane" id="pic-3" >
                <img src={image3} style ={{height: "320px",borderRadius: "14px",}}/>
              </div>
              <div className="tab-pane" id="pic-4" >
                <img src={image4} style ={{height: "320px",borderRadius: "14px",}}/>
              </div>
              <div className="tab-pane" id="pic-5" >
                <img src={image1} style ={{height: "320px",borderRadius: "14px",}}/>
              </div>
            </div>
            <ul className="preview-thumbnail nav nav-tabs">
              <li className="active">
                <a data-target="#pic-1" data-toggle="tab" >
                  <img src={image1} style ={{    height: "58px", borderRadius: "7px",border: "1px solid white"}}/>
                </a>
              </li>
              <li>
                <a data-target="#pic-2" data-toggle="tab">
                  <img src={image2} style ={{    height: "58px", borderRadius: "7px",border: "1px solid white"}}/>
                </a>
              </li>
              <li>
                <a data-target="#pic-3" data-toggle="tab">
                  <img src={image3} style ={{    height: "58px", borderRadius: "7px",border: "1px solid white"}}/>
                </a>
              </li>
              <li>
                <a data-target="#pic-4" data-toggle="tab">
                  <img src={image4} style ={{    height: "58px", borderRadius: "7px",border: "1px solid white"}}/>
                </a>
              </li>
              <li>
                <a data-target="#pic-5" data-toggle="tab">
                  <img src={image1} style ={{    height: "58px", borderRadius: "7px",border: "1px solid white"}}/>
                </a>
              </li>
            </ul>


            <Card className={classes.root} style ={{    marginTop: "29px",border:"1px solid gray",    height: "100px",
}} >
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                        <a href="#" class="round-button"><i class="fa fa-play fa-2x"></i></a>

                                        
                                        </CardContent>
                                        
                                    </div>
                                    <div>
                                            <h4 style ={{fontSize:"20px",    marginTop: "17px",}}>
                                                How to pronounce "goldomo"
                                            </h4>
                                            <p>
                                                One suggestion for how this name could sound when used.
                                            </p>
                                        </div>
                                    </Card>
          </div>
          <div className="details col-md-6" style ={{ marginLeft: "80px",}}>
            <h3 className="product-title" style ={{fontSize:"25px",marginLeft:"-250px",fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "42px",
lineHeight: "53px",}}>NAME.GOLD</h3>
<div className="rating">
              <div className="stars" style ={{width:"58%",fontSize: "23px",}}>
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
              <span className="review-no" style ={{fontSize:"20px"}}>41 reviews</span>
            </div>
           
            <p className="product-description" style ={{     fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: 400,
fontSize: "20px",
lineHeight: "25px",
textAlign: "justify",

color: "#626262",}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra tortor non diam tempus, in bibendum risus commodo. Duis eget metus nunc. Vivamus vel feugiat nulla. Integer sed posuere dolor, id luctus elit. Curabitur eleifend augue eget quam.
            </p>
            
            <p className="vote">
              <strong>91%</strong> of buyers enjoyed this product!{" "}
              <strong>(87 votes)</strong>
            </p>
            <h4 className="price" style ={{    fontFamily: "'Lato', sans-serif", fontSize:"20px"}}>
              current price: <span>$180</span>
            </h4>
            
            <ul className="get-list" >
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2"}}>✔️ Domain name: <b>goldomo.com</b>
                                    </li>
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2",}}>✔️ Logo design</li>
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2"}}>✔️ Design concepts (<a href="#concepts">view</a>)</li>
                                </ul>
            {/* <h5 className="sizes">
              sizes:
              <span className="size" data-toggle="tooltip" title="small">
                s
              </span>
              <span className="size" data-toggle="tooltip" title="medium">
                m
              </span>
              <span className="size" data-toggle="tooltip" title="large">
                l
              </span>
              <span className="size" data-toggle="tooltip" title="xtra large">
                xl
              </span>
            </h5> */}
            {/* <h5 className="colors">
              colors:
              <span
                className="color orange not-available"
                data-toggle="tooltip"
                title="Not In store"
              />
              <span className="color green" />
              <span className="color blue" />
            </h5> */}
            <div className="action">
            <div class="btn-group">
  <button style ={{padding:"10px 30px 10px 30px",textAlign:"center",fontSize:"15px",marginRight: "40px",borderRadius:"8px"}}>Add to cart</button>
  <button style ={{padding:"10px 30px 10px 30px",textAlign:"center",fontSize:"15px", borderRadius:"8px"}}>Add to faviorites</button>
  
</div>
              {/* <button className="add-to-cart btn btn-default" type="button" style ={{paddingLeft:"70px", padding:"10px",paddingRight:"50px"}}>
                add to cart
              </button> */}
              {/* <button className="like btn btn-default" type="button" style ={{padding:"10px"}}>
                <span className="fa fa-heart" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
</div>
<div><div data-region-id="goldomo.com" data-region-type="domain-view" data-region="any"><div className="gray-panels">
                    <div className="container single-main">
                        <div className="row single-word">
                            <div className="col-md-6" style ={{    marginLeft: "0px"}}>
                                {/* <h4 style ={{fontSize:"20px", fontWeight:700, color:"inherit"}}>What you get:</h4> */}
                                {/* <ul className="get-list" >
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2"}}>✔️ Domain name: <b>goldomo.com</b>
                                    </li>
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2",}}>✔️ Logo design</li>
                                    <li style ={{fontSize:"18px", color:"inherit", lineHeight: "2"}}>✔️ Design concepts (<a href="#concepts">view</a>)</li>
                                </ul> */}
                                {/* <div className="price-box">
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
                                    {/* <div className="price-box-actions">
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
                                        {/* </div>
                                    </div>  */}
                                    {/* <div className="price-box-footer">
                                        <hr></hr>
                                        Or <a id="make-offer-button" href="#contact">make an offer</a> for this domain name.
                                    </div>
                                </div> */} 
                                {/* <h2 style ={{fontFamily:"inherit", fontWeight:500, color:"inherit",padding: "10px",fontSize: "24px",lineHeight: "30px",marginBottom: "20px", }}>Contemporary company name for sale</h2>
                                <p style ={{fontFamily:"inherit", fontWeight:500, padding: "8px",fontSize: "18px"}}>This domain name could be ideally suited to a finance organisation.</p> */}
                                <p style ={{marginLeft: "-350px",fontSize: "22px",lineHeight: "30px",marginBottom: "20px",fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: "bold", color:"black" }}>Length
                                    <span title="This domain is short." className="label label-success label-featured" data-toggle="tooltip" style ={{backgroundColor:"#fcc404",fontFamily:"Mulish", fontSize:"18px"}}>Good</span>
                                </p>
                                <p style ={{ fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "20px",
lineHeight: "30px",
/* or 158% */


color: "#545454"}}>The name "<span data-silktide="ignore">goldomo</span>" has seven letters and three syllables. Examples of popular three syllable names include Nescafé, Verizon and Adidas.</p>
                                <p style ={{marginLeft: "-260px",fontSize: "22px",lineHeight: "30px",marginBottom: "20px",fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: "bold", color:"black"}}>
                                    Domain age
                                    <span title="This domain has been registered for a long time." className="label label-success label-featured" data-toggle="tooltip" style ={{fontFamily: "Mulish", backgroundColor:"#0000FF",fontSize:"18px",}}>Excellent</span>
                                </p>
                                <p style ={{ fontFamily: "Mulish",fontStyle: "normal",fontWeight: "normal",fontSize: "20px",lineHeight: "30px",
color: "#545454"}}>
                                This domain was first registered in April 2020. Older domains have an advantage when ranking in search engines.
                                </p>
                                <h3 style ={{marginLeft: "-330px", fontSize: "22px",lineHeight: "30px",marginBottom: "20px",fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: "bold", color:"black"}}>TLD
                                    <span title="This is a dot-com domain, which are the most sought-after." className="label label-info label-featured" data-toggle="tooltip" style ={{fontFamily: "Mulish",backgroundColor:"#0000FF",fontSize:"18px"}}>Excellent</span>
                                </h3>
                                <p style ={{ fontFamily: "Mulish",fontStyle: "normal",fontWeight: "normal",fontSize: "20px",lineHeight: "30px",color: "#545454"}}>Goldomo.com is a dot-com domain. Dot com domains are the most prestigious top-level-domain in the world, used by famous websites like facebook.com. Owning a dot-com says that you own the word "<span data-silktide="ignore">goldomo</span>" online.</p>
                            </div>
                            <div className="col-md-5 col-md-offset-1 thumb-container" style ={{position: "absolute",
    marginTop: "166px",
    marginLeft: "700px"}}>
                                <div className="visible-xs"><div style={{ height: 15 }} /></div>
                                <div className="hidden-xs">
                                <div style={{ top: "67px", }}>
                                    <div className="App"  style ={{marginTop: "-163px"}}>
                                        {/* <AliceCarousel autoPlay autoPlayInterval="3000" style ={{top: "-156px"}} >
                                            <img src={image1} className="sliderimg" alt="" />
                                            <img src={image2} className="sliderimg" alt="" />
                                            <img src={image3} className="sliderimg" alt="" />
                                            <img src={image4} className="sliderimg" alt="" />
                                        </AliceCarousel> */}
                                    </div>
                                </div>
                                </div>
                               
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
                               <div style ={{marginTop:"-40px"}}>
                                <p data-silktide="ignore" style ={{marginLeft: "-200px",fontSize: "24px",lineHeight: "30px",marginBottom: "20px",fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: "bold", color:"black"
  }}>Ideas for goldomo</p>
                                <ul className="unordered">
                                    <li>●
                                        <a href="/ideas/funding-network" style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: "normal",
fontSize: "24px",
lineHeight: "15px",
/* or 158% */

textDecorationLine: "underline",

color: "#575757",
    fontSize: "21px",
    padding: "9px",}}>
                                         Funding network
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="/ideas/alternative-investment-experts"  style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                          Alternative investment experts
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="/ideas/investments-website"  style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                          Investments website
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="/ideas/funding-organization"  style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                          Funding organization
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="/ideas/gamified-investments" style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                          Gamified investments
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="/ideas/payroll-service"  style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                         Payroll service
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="/ideas/financial-advisors" style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                          Financial advisors
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="/ideas/cryptocurrency-exchange" style ={{    lineHeight: "40px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                          Cryptocurrency exchange
                                        </a>
                                    </li>
                                </ul>
                                <p style ={{marginLeft: "-200px", fontSize:"24px",fontFamily: "Mulish",
fontStyle: "normal",
fontWeight: "bold",
fontSize: "24px",
lineHeight: "60px",
color: "black",
  }}>Helpful links</p>
                                <ul className="unordered">
                                    <li>●
                                        <a href="https://resources.brandpa.com/knowledgebase/how-does-buying-a-domain-name-on-brandpa-work/" target="_blank"  style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                            How does buying a domain name work?
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="https://resources.brandpa.com/knowledgebase/how-trademarks-and-domain-names-work/" target="_blank" style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                            How trademarks and domain names work
                                        </a>
                                    </li>
                                    <li>●
                                        <a href="https://www.google.com/search?q=goldomo" target="_blank"  style ={{    lineHeight: "0px",fontFamily: "Mulish",
fontStyle: "normal",fontWeight: "normal",fontSize: "24px",lineHeight: "15px",textDecorationLine: "underline",color: "#575757",fontSize: "21px",padding: "9px",}}>
                                            Search Google for <b data-silktide="ignore">goldomo</b>
                                        </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div></div>

      </div>
    )
}
