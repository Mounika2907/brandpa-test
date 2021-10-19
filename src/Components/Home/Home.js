import React from "react";
import Main from "./Main";
import Header from "./Header";
import Navbar from "../Navigation/Navbar";
import Navigationbar from "../Navigation/Navigationbar";
import Navigationheader from "../Navigation/Navigationheader"
import Navigationbrandpa from "../Navigation/Navigationbrandpa"

import Navigation from "../Navigation/Navigation";
// import Mainheader from "../Home/Mainheader"
import { render } from "react-dom";
import Mainheader from "./mainheader";
import Content from "./content"
import Whouses from "./whouses";
import Clientcount from "./Clientcount";
import Howto from "./Howto";
import Ourpartner from "./Ourpartner";
import Testimonials from "./Testimonials";
import Footer from "../Footer/Footer";
import Premium from "./premium";
import Content12 from "./content12";
// import Addcart from "../../Components/Addcart/index"
// import Slots from "./slots"
import Team from "./team"
import Teammembers from "./teammembers";
import Form from "./form"
import Slots from "./slots"
// import Form from "./form",

import Shoppingcart from "./shoppingcart"

export default function Home() {
  return (
    <div>
      {/* <Whouses /> */}
      {/* <Addcart /> */}
      {/* <Navigationheader /> */}
      {/* <Navigationbrandpa /> */}
      <Navigationbar />
      <Mainheader />
      {/* <Testimonials /> */}

      {/* <Mainheader /> */}
      {/* <Shoppingcart /> */}
      <Premium />
      {/* <Slots /> */}
      <Ourpartner />
      <Form />
      <Team />
      <Footer />
      {/* <Footer /> */}
      {/* <Mainheader /> */}
      {/* <Content12 /> */}
      {/* <Clientcount /> */}


      {/* <Navigation />
      <Mainheader />
      <Content12 />
      <Clientcount />
      <Teammembers />
      <Footer /> */}
      {/* <Content /> */}
      {/* <Team /> */}
      {/* <Mainheader /> */}
      {/* <Navbar /> */}
      {/* <Header /> */}
      {/* <Main />
      <Whouses />
      <Clientcount />
      
      <Premium />
      <Howto />
      <Slots/>
      
      {/* <Ourpartner />
      <Form /> */}
      {/* <Testimonials /> */}
      {/* <Footer /> */}
    </div>
  );
}
