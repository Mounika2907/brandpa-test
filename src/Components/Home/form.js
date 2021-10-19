import React from 'react'
import "../../css/form.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import back from "../../images/brands/1.jpg"
import back1 from "../../images/brands/2.jpg"
import back2 from "../../images/brands/3.jpg"
import back3 from "../../images/brands/4.jpg"
import back5 from "../../images/brands/6.jpg"
import back6 from "../../images/brands/7.jpg"
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: "248px"
  },
  media: {
    height: 182,
  },

});


export default function Form() {
  const classes = useStyles();
  return (
    <div>
      <div className="bg-light py-5 service-5" style={{ background: "#f0f0f0", borderTop: " 1px solid #ddd", width: "108%", }}>
        <div className="container">
          <h1 style={{ color: "black", fontSize: "40px",     textAlign:"center",   padding: "19px", marginLeft:"-60px"
 }}>Featured domain names for sale</h1>
          <div className="row"></div>
          <div className="row" style ={{    width: "1500px", marginLeft: "-247px" , }}>
            <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

              <Card className={classes.root} classstyle={{ padding: "0px" }}>
                <CardActionArea className="zoom">
                  <CardMedia
                    className={classes.media}
                    image={back}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                  <div style={{width: "100%",top:"220px"}}>
        <div style={{width: "50%", float: "left", color:"black",top:"200px", marginTop:"200px",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"200px",    lineHeight: "1.1",width:"137px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm"}}>RevenueBay</p>
        </div>
        <div style={{marginLeft: "50%", color:"black",top:"200px",marginTop:"0px", float:"right",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"200px",    lineHeight: "1.1",width:"130px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm",    left: "240px",}}>$2750</p>
           
        </div>
    </div> 
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      <p className="card-text" style={{ wordSpacing: "40px" }}>RevenueBay  $2750 </p>
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

              <Card className={classes.root} style={{ padding: "0px" }}>
                <CardActionArea className="zoom">
                  <CardMedia
                    className={classes.media}
                    image={back1}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                  <div style={{width: "100%",top:"220px"}}>
        <div style={{width: "50%", float: "left", color:"black",top:"200px", marginTop:"200px",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"200px",    lineHeight: "1.1",width:"137px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm"}}>RevenueBay</p>
        </div>
        <div style={{marginLeft: "50%", color:"black",top:"200px",marginTop:"0px", float:"right",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"200px",    lineHeight: "1.1",width:"130px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm",    left: "240px",}}>$2750</p>
           
        </div>
    </div> 
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      <p className="card-text" style={{ wordSpacing: "30px" }}>RevenueBay  $2750 </p>
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

              <Card className={classes.root} style={{ padding: "0px" }}>
                <CardActionArea className="zoom">
                  <CardMedia
                    className={classes.media}
                    image={back2}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                  <div style={{width: "100%",top:"220px"}}>
        <div style={{width: "50%", float: "left", color:"black",top:"200px", marginTop:"200px",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"200px",    lineHeight: "1.1",width:"137px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm"}}>RevenueBay</p>
        </div>
        <div style={{marginLeft: "50%", color:"black",top:"200px",marginTop:"0px", float:"right",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"200px",    lineHeight: "1.1",width:"130px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm",    left: "240px",}}>$2750</p>
           
        </div>
    </div> 
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      <p className="card-text" style={{ wordSpacing: "20px" }}>RevenueBay  $2750 </p>
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

              <Card className={classes.root} style={{ padding: "0px" }}>
                <CardActionArea className="zoom">
                  <CardMedia
                    className={classes.media}
                    image={back3}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                  <div style={{width: "100%",top:"220px"}}>
        <div style={{width: "50%", float: "left", color:"black",top:"200px", marginTop:"200px",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"200px",    lineHeight: "1.1",width:"137px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm"}}>RevenueBay</p>
        </div>
        <div style={{marginLeft: "50%", color:"black",top:"200px",marginTop:"0px", float:"right",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"200px",    lineHeight: "1.1",width:"130px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm",    left: "240px",}}>$2750</p>
           
        </div>
    </div> 
                    {/* <Typography gutterBottom variant="h5" component="h2">
                      <p className="card-text" style={{ wordSpacing: "20px" }}>RevenueBay  $2750 </p>
                    </Typography> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
        <h4 style={{ color:"#484848", marginTop: "33px",textDecoration: "underline", textAlign:"center",fontSize:"20px",marginLeft:"-120px"}}><b>See clients & testimonials</b></h4>
      </div>

    </div>
    // <div>
    //   <>
    //     <meta charSet="UTF-8" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0" /> {/* displays site properly based on user's device */}
    //     <link rel="stylesheet" type="text/css" href="css/styles.css" />
    //     <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
    //     <link href="https://fonts.googleapis.com/css?family=Poppins:200,400,600&display=swap" rel="stylesheet" />
    //     <title>Frontend Mentor | Four card feature section</title>
    //     <main>
    //       <div className="header">
    //         <header>
    //           <h1><span className="title">Reliable, efficient delivery</span><br />
    //             Powered by Technology</h1>
    //           <p> Our Artificial Intelligence powered tools use millions of project data points
    //             to ensure that your project is successful</p>
    //         </header>
    //       </div>
    //       <div className="row">
    //         <div className="card border-top-color-cyan">
    //           <div className="container">
    //             <h4><b>Supervisor</b></h4>
    //             <p> Monitors activity to identify project roadblocks</p>
    //             <div className="icons"><img src="images/icon-supervisor.svg" alt="Supervisor Icon" className="icon-imgs" /></div>
    //           </div>
    //         </div>
    //         <div className="middle">
    //           <div className="card border-top-color-red">
    //             <div className="container">
    //               <h4><b>Team Builder</b></h4>
    //               <p>Scans our talent network to create the optimal team for your project</p>
    //               <div className="icons"><img src="images/icon-team-builder.svg" alt="Team Builder Icon" className="icon-imgs" /></div>
    //             </div>
    //           </div>
    //           <div className="card border-top-color-orange">
    //             <div className="container">
    //               <h4><b>Karma</b></h4>
    //               <p>Regularly evaluates our talent to ensure quality</p>
    //               <div className="icons"><img src="images/icon-karma.svg" alt="Karma Icon" className="icon-imgs" /></div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="card border-top-color-blue">
    //           <div className="container">
    //             <h4><b>Calculator</b></h4>
    //             <p>Uses data from past projects to provide better delivery estimates</p>
    //             <div className="icons"><img src="images/icon-calculator.svg" alt="Ca;Calculator Icon" className="icon-imgs" /></div>
    //           </div>
    //         </div>
    //       </div>
    //       <footer>
    //         <p className="attribution">
    //           Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
    //           Coded by <a href="http://eliezerdavid.com">Eliezer D</a>.
    //         </p>
    //       </footer>
    //     </main>
    //   </>



    // </div>
  )
}
