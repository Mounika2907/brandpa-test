import React, { Component } from "react";
import "../../css/main.css";
import Navbar from "../Navigation/Navbar";
import Mainheader from "../Domain/mainheader"
import Footer from "../Footer/Footer";
import Implementation from "../Domain/implementation"
import Formimplementation from "../Domain/formimplemention"
import Testimonialsinfo from "../Domain/testimonialsinfo"
import Form from "../Home/form"
import Teammembers from "../Home/teammembers"
import Product from "./product"


export default class Contact extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <Product />
       
       <Implementation />
       {/* <Formimplementation /> */}
       <Testimonialsinfo />
       <Form />
        <Teammembers /> 
       <Footer /> 
     </div>
    );
  }
}
