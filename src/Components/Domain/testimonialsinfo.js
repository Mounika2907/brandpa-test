import React, { Component } from "react";
import "../../css/testimonialinfo.css"
import task from "../../images/back1.jpg"
import task1 from "../../images/back3.jpg"

export default class Testimonialsinfo extends Component {
  render() {
    return (
     <div>
       <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Untitled</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
  <link rel="stylesheet" href="assets/css/style.css" />
  <div className="testimonials-clean">
    <div className="container">
      <div className="intro">
        <h2 className="text-center" style ={{textAlign: "center",fontSize: "28px",padding: "20px 0", fontSize: "29px",
    width: "480px",
    marginLeft: "0px",}}>What our customers are saying
</h2>
        <p className="text-center" style = {{fontSize:"18px"}}>Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
      </div>
      <div className="row people">
        <div className="col-md-4 col-lg-4 item">
          <div className="box">
            <p className="description" style = {{fontSize:"18px"}}>Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
          </div>
          <div className="author"><img className="rounded-circle" src={task} />
            <h5 className="name">Ben Johnson</h5>
            <p className="title">CEO of Company Inc.</p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 item">
          <div className="box">
            <p className="description" style = {{fontSize:"18px"}}>Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
          </div>
          <div className="author"><img className="rounded-circle" src={task1} />
            <h5 className="name">Carl Kent</h5>
            <p className="title">Founder of Style Co.</p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 item">
          <div className="box">
            <p className="description" style = {{fontSize:"18px"}}>Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
          </div>
          <div className="author"><img className="rounded-circle" src={task} />
            <h5 className="name">Emily Clark</h5>
            <p className="title">Owner of Creative Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

     </div>
    );
  }
}
