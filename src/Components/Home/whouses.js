
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import back from "../Home/card1.png"
import back1 from "../Home/card2.png"
import back2 from "../Home/card3.png"
import back3 from "../Home/card4.png"
import back4 from "../Home/card5.png"
import back5 from "../Home/card6.png"
import back6 from "../Home/card7.png"
import back7 from "../Home/card8.png"
import back8 from "../Home/card9.png"
import back9 from "../Home/card10.png"
import back10 from "../Home/card12.png"
import back11 from "../Home/card14.png"
import back12 from "../Home/card15.png"
import back13 from "../Home/card16.png"
import back14 from "../Home/card17.png"
import back15 from "../Home/card7.png"
import ReactDOM from "react-dom";
import NumberSpinner from "./number-spinner";



import "../../css/premium.css"



export default class premium extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qty: 0 };
    this.incrementQty = this.incrementQty.bind(this);
    this.decrementQty = this.decrementQty.bind(this);
    this.addToTodaysOrder = this.addToTodaysOrder.bind(this);
  }

  addToTodaysOrder() {
    this.incrementQty();
  }

  incrementQty() {
    let new_qty = this.state.qty + 1;
    this.setState({ qty: new_qty });
    alert(`incrementing qty of ${this.props.product_id} to ${this.state.qty}`);
  }

  decrementQty() {
    let new_qty = this.state.qty - 1;
    if (new_qty >= 0) {
      this.setState({ qty: new_qty });
      alert(
        `decrementing qty of ${this.props.product_id} to ${this.state.qty}`
      );
    }
  }


  render() {


    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ background: "linear-gradient(to bottom, #441196 20%, #080c47 120%)" }}>
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <NumberSpinner
                qty={this.state.qty}
                incrHandler={this.incrementQty}
                decrHandler={this.decrementQty}
              />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <div className="bg-light py-5 service-5">
          <div className="container" style={{ top: "400px" }}>
            <h1 style={{ color: "black", fontSize: "40px" }}>Featured domain names for sale</h1>
            <div className="row"></div>
            <div className="row">
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      image={back}
                      title="Contemplative Reptile"
                      style={{ height: 140, }}
                    />
                    <button onClick={this.addToTodaysOrder}>Add to Cart</button>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back1}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back2}
                      title="Contemplative Reptile"
                    />
                    {/* <button onClick={this.addToTodaysOrder}>Add to Cart</button> */}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>

                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back3}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      {/* <button onClick={this.addToTodaysOrder}>Add to Cart</button> */}
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light py-5 service-5">
          <div className="container" style={{ top: "400px" }}>
            <div className="row"></div>
            <div className="row">
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back4}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back5}
                      title="Contemplative Reptile"
                    />
                    {/* <button onClick={this.addToTodaysOrder}>Add to Cart</button> */}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back6}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back7}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light py-5 service-5">
          <div className="container" style={{ top: "400px" }}>
            <div className="row"></div>
            <div className="row">
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back8}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back9}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back10}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back11}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light py-5 service-5">
          <div className="container" style={{ top: "400px" }}>
            <div className="row"></div>
            <div className="row">
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back12}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back13}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back14}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className="col-sm-3" style={{ paddingLeft: "0px", top: "580px" }}>

                <Card style={{ padding: "0px", maxWidth: 345, }}>
                  <CardActionArea className="zoom">
                    <CardMedia
                      style={{ height: 140, }}
                      image={back15}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <h3 style={{ color: "black", marginTop: "566px", }}>More domain names for sale</h3>
      </div >
    );
  }
}






// import React, { Component } from "react";
// import "../../css/main.css";
// import {
//   faHome,
//   faEnvelope,
//   faPhone,
//   faMoneyBill,
//   faUser,
//   faShoppingCart,
//   faCalculator,
//   faGem,
//   faCoins,
//   fa,
// } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Fade from "react-reveal";

// export default class Whouses extends Component {
//   render() {
//     return (
//       <div>
//         <section id="as-services">
//           <div className="container">
//             <div className="row text-center">
//               <div className="col-12">
//                 <div className="as-services-head">
//                   <h2>Who uses .Gold</h2>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="row text-center">
//               <Fade left>
//                 {" "}
//                 <div className="col-12 col-sm-6 col-md-4">
//                   <div className="as-service-box mt-4"  style ={{    padding: "28px"}}>
//                     <i className="fa fa-coins" />
//                     <h3 className="mt-3">
//                       <a href="#">Gold Makers</a>
//                     </h3>
//                     <p>
//                       {" "}
//                       Sample Item Description with lots of random text to fill
//                       the space dignissim iaculis mauris
//                     </p>
//                   </div>
//                 </div>
//               </Fade>

//               <Fade top>
//                 {" "}
//                 <div className="col-12 col-sm-6 col-md-4">
//                   <div className="as-service-box mt-4" >
//                     {/* <i className="fas fa-rings-wedding"></i> */}
//                     <i>
//                       <FontAwesomeIcon icon={faGem} />
//                     </i>
//                     <h3 className="mt-3">
//                       <a href="#">Jewlery Shop</a>
//                     </h3>
//                     <p>
//                       {" "}
//                       Sample Item Description with lots of random text to fill
//                       the space dignissim iaculis mauris
//                     </p>
//                   </div>
//                 </div>
//               </Fade>
//               <Fade right>
//                 {" "}
//                 <div className="col-12 col-sm-6 col-md-4">
//                   <div className="as-service-box mt-4">
//                     {/* <i className="fa fa-daimond" /> */}
//                     <i>
//                       <FontAwesomeIcon icon={faGem} />
//                     </i>
//                     <h3 className="mt-3">
//                       <a href="#">Daimond Merchnats</a>
//                     </h3>
//                     <p>
//                       {" "}
//                       Sample Item Description with lots of random text to fill
//                       the space dignissim iaculis mauris
//                     </p>
//                   </div>
//                 </div>
//               </Fade>
//               <Fade left delay={10000}>
//                 <div className="col-12 col-sm-6 col-md-4">
//                   <div className="as-service-box mt-4">
//                     <i className="fa fa-code" />
//                     <h3 className="mt-3">
//                       <a href="#">Import & Exports</a>
//                     </h3>
//                     <p>
//                       {" "}
//                       Sample Item Description with lots of random text to fill
//                       the space dignissim iaculis mauris
//                     </p>
//                   </div>
//                 </div>
//               </Fade>
//               <Fade bottom delay={10000}>
//                 <div className="col-12 col-sm-6 col-md-4">
//                   <div className="as-service-box mt-4">
//                     <i className="fa fa-mobile" />
//                     <h3 className="mt-3">
//                       <a href="#">Gold Mining</a>
//                     </h3>
//                     <p>
//                       {" "}
//                       Sample Item Description with lots of random text to fill
//                       the space dignissim iaculis mauris
//                     </p>
//                   </div>
//                 </div>
//               </Fade>
//               <Fade right delay={10000}>
//                 <div className="col-12 col-sm-6 col-md-4">
//                   <div className="as-service-box mt-4">
//                     <i className="fa fa-search" />
//                     <h3 className="mt-3">
//                       <a href="#">Gold Merchants</a>
//                     </h3>
//                     <p>
//                       {" "}
//                       Sample Item Description with lots of random text to fill
//                       the space dignissim iaculis mauris
//                     </p>
//                   </div>
//                 </div>
//               </Fade>
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }
