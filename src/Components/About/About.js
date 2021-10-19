import React, { Component } from "react";
import "../../css/about.css";
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
import Header from "../../Components/Home/Header";
import Navbar from "../../Components/Navigation/Navbar";
import Footer from "../../Components/Footer/Footer";
import pro1 from "../../images/profile-1.jpeg";
import pro2 from "../../images/profile-2.png";
import pro3 from "../../images/profile-3.jpg";
import Navigation from "../Navigation/Navigation"

export default class About extends Component {
  render() {
    return (
      <div>

        <div style={{ top: "0px" }}><Navigation /></div>
        <div style={{ top: "0px" }}>
          <>

            <div className="sidebar" style={{ marginRight: "43px", marginTop: "110px" }}>

              <a href="#home"> </a>
              <a href="#home"> </a>

              <a href="#home"> </a>

              <a href="#home"> </a>

              <a href="#home"> All domains</a>
              <a href="#services"> Agriculture</a>
              <a href="#clients"> Business</a>
              <a href="#contact"> Creative</a>
              <a href="#home"> Entertainment</a>
              <a href="#services"> Finance</a>
              <a href="#clients"> Government</a>
              <a href="#contact"> Health</a>
              <a href="#home"> Kids</a>
              <a href="#services"> Manufacturing</a>
              <a href="#clients"> Marketing</a>
              <a href="#contact"> Media</a>
              <a href="#home"> Shopping</a>
              <a href="#services"> social</a>
              <a href="#clients"> Technology</a>
              <a href="#contact"> Transport</a>
            </div>
            {/* <div className="main">
              <h2>Sidebar with Icons</h2>
              <p>This side navigation is of full height (100%) and always shown.</p>
              <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
              <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
            </div> */}
            <div className="main">
              <div className="bg-light py-5 service-5">
                <div className="container" style={{ top: "400px" }}>
                  <h1 style={{ color: "black", fontSize: "40px" }}>Featured domain names for sale</h1>
                  <div className="row"></div>
                  <div className="row">
                    <div className="col-sm-3" style={{ paddingLeft: "0px" }}>

                      <Card style={{ padding: "0px", maxWidth: 345, }}>
                        <CardActionArea className="zoom">
                          <CardMedia
                            image={back}
                            title="Contemplative Reptile"
                            style={{ height: 140, }}
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>
                    <div className="col-sm-3" style={{ paddingLeft: "0px" }}>

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

                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                      <Card style={{ padding: "0px", maxWidth: 345, }}>
                        <CardActionArea className="zoom">
                          <CardMedia
                            style={{ height: 140, }}
                            image={back2}
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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                      <Card style={{ padding: "0px", maxWidth: 345, }}>
                        <CardActionArea className="zoom">
                          <CardMedia
                            style={{ height: 140, }}
                            image={back3}
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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                      <Card style={{ padding: "0px", maxWidth: 345, }}>
                        <CardActionArea className="zoom">
                          <CardMedia
                            style={{ height: 140, }}
                            image={back5}
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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
              <div className="bg-light py-5 service-5">
                <div className="container" style={{ top: "400px" }}>
                  <div className="row"></div>
                  <div className="row">
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                      <Card style={{ padding: "0px", maxWidth: 345, }}>
                        <CardActionArea className="zoom">
                          <CardMedia
                            style={{ height: 140, }}
                            image={back5}
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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                      <Card style={{ padding: "0px", maxWidth: 345, }}>
                        <CardActionArea className="zoom">
                          <CardMedia
                            style={{ height: 140, }}
                            image={back5}
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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                      <Card style={{ padding: "0px", maxWidth: 345, }}>
                        <CardActionArea className="zoom">
                          <CardMedia
                            style={{ height: 140, }}
                            image={back5}
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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                      <Card style={{ padding: "0px", maxWidth: 345, }}>
                        <CardActionArea className="zoom">
                          <CardMedia
                            style={{ height: 140, }}
                            image={back5}
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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

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
            </div>
          </>

        </div>
      </div>
    );
  }
}
