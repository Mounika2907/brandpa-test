import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import "./SortAction.css"
import Navigationbar from "./Components/Navigation/Navigationbar";

import Home from "./Components/Home/Home";
import Register from "./Components/Signup/Register";
import Login from "./Components/Login/Login";
import About from "./Components/About/About";
import Howitworks from "./Components/About/Howitworks";
import Contact from "./Components/Contact/Contact";
import Domainsearch from "./Components/Domain/Domainsearch";
import Addcart from "./Components/Addcart/index";
// import SortingAction from "./SortingAction";
import Sizes from './Components/SortingElements/Sizes'
import Domainselement from './Components/SortingElements/Domainselement';
import Validation from './Components/SortingElements/Validation'
import Products from './Components/SortingElements/Products';
import Carts from "./Components/SortingElements/Cart"
import filterList from './Components/SortingElements/filterList';
import Testimonialscards from "./Components/About/Testimonialscards";
import Customersupport from "./Components/About/Customersupport";
import Agriculture from "./Components/Addcart/agriculture";
import Navigationbrandpa from "./Components/Navigation/Navigationbrandpa";
import Pricerangecard from "./Components/Addcart/Pricerangecard"
import Progressbarcondition from "./Components/progressbar/progressbarcondition"
// import Agriculture from "./Components/SortingElements/Agriculture"





function App() {
  const [products, setProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const [selectedDomains, setSelectedDomains] = useState([]);
  const [selectedValidations, setSelectedValidations] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedAgriculture, setSelectedAgriculture] = useState([])
  
  useEffect(() => {
    setProducts(filterList([], null));
    if(JSON.parse(localStorage.getItem("cart"))) {
      setCart(JSON.parse(localStorage.getItem("cart")));
    }
  }, [])

  const setSize = (size) => {
    const sizes = [...selectedSizes];
    
    if(sizes.includes(size)) {
      const index = sizes.indexOf(size);
      sizes.splice(index, 1);
    }
    else {
      sizes.push(size);
    }
    const setValidation = (validation) => {
      const validations = [...selectedValidations];
      
      if(validations.includes(validation)) {
        const index = validations.indexOf(validation);
        validations.splice(index, 1);
      }
      else {
        validations.push(validation);
      }
      setSelectedValidations(validations);
      setProducts(filterList(validations, 'validation'));
    }
    setSelectedSizes(sizes);
    setProducts(filterList(sizes, 'size'));
  }
  const setValidation = (validation) => {
    const validations = [...selectedValidations];
    
    if(validations.includes(validation)) {
      const index = validations.indexOf(validation);
      validations.splice(index, 1);
    }
    else {
      validations.push(validation);
    }
    setSelectedValidations(validations);
    setProducts(filterList(validations, 'validation'));
  }

  const setAgriculture = (type) => {
    const types = [...selectedAgriculture];
    
    if(types.includes(type)) {
      const index = types.indexOf(type);
      types.splice(index, 1);
    }
    else {
      types.push(type);
    }
    setSelectedAgriculture(types);
    setProducts(filterList(types, 'type'));
  }

  const setDomain = (domain) => {
    const domains = [...selectedDomains];
    
    if(domains.includes(domain)) {
      const index = domains.indexOf(domain);
      domains.splice(index, 1);
    }
    else {
      domains.push(domain);
    }
    setSelectedDomains(domains);
    setProducts(filterList(domains, 'domain'));
  }
  const sortProducts = (method) => {
    const array = products;

    if(method === "Lowest to Highest") {
        array.sort(function(a, b){
          return a.price-b.price
      })
    }
    else if(method === "Highest to Lowest") {
      console.log(method)
        array.sort(function(a, b){
          console.log( b.price-a.price)
          return b.price-a.price
      })
    }
  //   else if(method <= "Less than Ten") {
  //     console.log(method)
  //     array.sort(function(a){
  //       console.log(a.price <= 10)
  //       if(a.price <= 10){
  //         console.log(a.price)
  //         return  a.price
  //       }
        
  //   })
  // }
    setProducts(array);
  }

  const addToCart = (item) => {
    const productList = [...cart];
    if(!productList.includes(item)) {
      productList.push(item);
    }
    const index = productList.indexOf(item);
    productList[index].quantity++;
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }

  const changeQuantity = (item, e) => {
    const productList = [...cart];
    const index = productList.indexOf(item);
    if(e === '+') {
      productList[index].quantity++;
    }
    else {
      if(productList[index].quantity > 1) {
        productList[index].quantity--;
      }
      else {
        productList.splice(index, 1);
      }
    } 
    setCart(productList);
    localStorage.setItem("cart", JSON.stringify(productList));
  }
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/signup" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/addcart" component={Addcart}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/domain-search" component={Domainsearch}></Route>
        <Route exact path="/how" component={Howitworks}></Route>
        <Route exact path="/Test" component={Testimonialscards}></Route>
        <Route exact path="/customer" component={Customersupport}></Route>
        <Route exact path ="/agriculture" component ={Agriculture}></Route>
        <Route exact path ="/Nav" component ={Navigationbrandpa}></Route>
        <Route exact path ="/price" component ={Pricerangecard}></Route>
        <Route exact path ='/g' component ={Progressbarcondition}></Route>



        {/* <Route exact path="/domain" component={SortingAction}></Route> */}
        <Route exact path ="/size" >

          <div className ="App" style ={{backgroundColor:"white", width:"1800px",    marginTop: "10px",
}}> 
          <Navigationbar />
         

          <Sizes selectedSizes={selectedSizes} setSize={setSize} />
          <Domainselement  selectedDomains ={selectedDomains} setDomain={setDomain} />
          <Validation  selectedValidations ={selectedValidations} setValidation={setValidation} /> 
         
          <Products products={products} sortProducts={sortProducts} addToCart={addToCart} />

          <Carts products={cart} changeQuantity={changeQuantity} />
          {/* <Agriculture selectedAgriculture ={selectedAgriculture} setAgriculture={setAgriculture} /> */}

          </div>
        </Route>
        {/* <Route exact path ="/agri">
        <div className ="App" style ={{backgroundColor:"white", width:"1800px",    marginTop: "10px",
}}> </div>
          <Navigationbar />
        </Route> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
