import React, { Component } from "react";
import "../../css/main.css";
import Header from "../Home/Header";
import Navbar from "../Navigation/Navbar";
import Mainheader from "../Domain/mainheader"
import Footer from "../Footer/Footer";
import Implementation from "./implementation"
import Formimplementation from "./formimplemention"
import Testimonialsinfo from "./testimonialsinfo"
import Form from "../Home/form"
import Teammembers from "../Home/teammembers"

export default class Domainsearch extends Component {
  render() {
    return (
     <div>
       <Navbar/>
       <Mainheader/>
       <Implementation />
       <Formimplementation />
       <Testimonialsinfo />
       <Form />
       <Teammembers />
       <Footer />
     </div>
    );
  }
}
