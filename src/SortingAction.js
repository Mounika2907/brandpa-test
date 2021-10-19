// import React, {useState, useEffect} from 'react';


// import './App.css';

// import Sizes from './Components/SortingElements/Sizes'
// import Domainselement from './Components/SortingElements/Domainselement';
// import Validation from './Components/SortingElements/Validation'
// import Products from './Components/SortingElements/Products';
// import Carts from "./Components/SortingElements/Carts"
// import filterList from './Components/SortingElements/filterList';

// const SortingActions = () => {

//   const [products, setProducts] = useState([]);
//   const [selectedSizes, setSelectedSizes] = useState([]);
//   const [selectedTitles, setSelectedTitles] = useState([]);
//   const [selectedDomains, setSelectedDomains] = useState([]);
//   const [selectedValidations, setSelectedValidations] = useState([]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     setProducts(filterList([], null));
//     if(JSON.parse(localStorage.getItem("cart"))) {
//       setCart(JSON.parse(localStorage.getItem("cart")));
//     }
//   }, [])

//   const setSize = (size) => {
//     const sizes = [...selectedSizes];
    
//     if(sizes.includes(size)) {
//       const index = sizes.indexOf(size);
//       sizes.splice(index, 1);
//     }
//     else {
//       sizes.push(size);
//     }
//     setSelectedSizes(sizes);
//     setProducts(filterList(sizes, 'size'));
//   }
//   // const setPrice = (price) => {
//   //   const prices = [...selectedPrices];
//   //   if(prices)
    
//     // if(prices.includes(price)) {
//     //   const index = sizes.indexOf(size);
//     //   sizes.splice(index, 1);
//     // }
//     // else {
//     //   sizes.push(size);
//     // }
//   //   setSelectedSizes(sizes);
//   //   setProducts(filterList(sizes, 'size'));
//   // }
//   const setTitle = (title) => {
//     const titles = [...selectedTitles];
    
//     if(titles.includes(titles)) {
//       const index = titles.indexOf(title);
//       titles.splice(index, 1);
//     }
//     else {
//       titles.push(title);
//     }
//     setSelectedTitles(titles);
//     setProducts(filterList(titles, 'title'));
//   }
//   const setValidation = (validation) => {
//     const validations = [...selectedValidations];
    
//     if(validations.includes(validation)) {
//       const index = validations.indexOf(validation);
//       validations.splice(index, 1);
//     }
//     else {
//       validations.push(validation);
//     }
//     setSelectedValidations(validations);
//     setProducts(filterList(validations, 'validation'));
//   }
//   const setDomain = (domain) => {
//     const domains = [...selectedDomains];
    
//     if(domains.includes(domain)) {
//       const index = domains.indexOf(domain);
//       domains.splice(index, 1);
//     }
//     else {
//       domains.push(domain);
//     }
//     setSelectedDomains(domains);
//     setProducts(filterList(domains, 'domain'));
//   }


//   const sortProducts = (method) => {
//     const array = products;

//     if(method === "Lowest to Highest") {
//         array.sort(function(a, b){
//           return a.price-b.price
//       })
//     }
//     else if(method === "Highest to Lowest") {
//       console.log(method)
//         array.sort(function(a, b){
//           console.log( b.price-a.price)
//           return b.price-a.price
//       })
//     }
//   //   else if(method <= "Less than Ten") {
//   //     console.log(method)
//   //     array.sort(function(a){
//   //       console.log(a.price <= 10)
//   //       if(a.price <= 10){
//   //         console.log(a.price)
//   //         return  a.price
//   //       }
        
//   //   })
//   // }
//     setProducts(array);
//   }

//   const addToCart = (item) => {
//     const productList = [...cart];
//     if(!productList.includes(item)) {
//       productList.push(item);
//     }
//     const index = productList.indexOf(item);
//     productList[index].quantity++;
//     setCart(productList);
//     localStorage.setItem("cart", JSON.stringify(productList));
//   }

//   const changeQuantity = (item, e) => {
//     const productList = [...cart];
//     const index = productList.indexOf(item);
//     if(e === '+') {
//       productList[index].quantity++;
//     }
//     else {
//       if(productList[index].quantity > 1) {
//         productList[index].quantity--;
//       }
//       else {
//         productList.splice(index, 1);
//       }
//     } 
//     setCart(productList);
//     localStorage.setItem("cart", JSON.stringify(productList));
//   }
  
//   return (
//     <div className="SortingActions">
     
//       <Domainselement  selectedDomains ={selectedDomains} setDomain={setDomain} />
//       <Sizes selectedSizes={selectedSizes} setSize={setSize} />
//       {/* <Title /> */}
//       {/* <Validation  selectedValidations ={selectedValidations} setValidation={setValidation} /> */}
//       {/* <Title  selectedTitles ={selectedTitles} setTitle={setTitle} /> */}
//       {/* <Products products={products} sortProducts={sortProducts} addToCart={addToCart} /> */}
//       <Carts products={cart} changeQuantity={changeQuantity} />
      
//     </div>
//   );
// }

// export default SortingActions;