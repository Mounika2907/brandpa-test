import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import API from "./mockAPI";
import { Listedagriculture } from "./listedAgriculture";
// import { Elementslist } from "./Elementslist";
import { FixedCart } from "./FixedCart";
import { CartDetails } from "./CardDetails";
import { Overlay } from "./Overlay";
// import Navbar from "../Navigation/Navbar"
import Footer from "../Footer/Footer"

import { GlobalStyles, lightGray } from "./GlobalStyles";
import Navbar from "../Navigation/Navbar";
// import Navigationbar from "../Navigation/Navigationbar";


function Agriculture() {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState(API);
    const [cartOpen, isCartOpen] = useState(false);
    const [type, setType] = useState("Gold");
    const [subtype,setSubtype] = useState();

    const selectType = items.filter((cat) => cat.type === type);
    const  selectSubtype = items.filter((related)=>related.subtype === subtype);
    // const selectsubType  = items.map((related)=>related.subtype)
    // const selectSubtype= items.filter((related)=>related.subtype === subtype);
    // const selectSubtype = items.filter((realted)=> realted.subtype.map((relateddata ,i) =>relateddata[i] === subtype))


    // const selectSubtype = items.filter((realted)=> realted.subtype.filter((relateddata, i) => related))
    // {sampleJSON.arrOfNumbers.map((item, i) => {
    //     return <li key={i}>{item}</li>
    //   })}
    //   const largerThanSixty = array.filter( number => {
    //     return number > 60
    //   })
    // const selectSubtype= items.filter((related)=>related.subtype === subtype);
    // console.log(items.map((related)=>related.subtype))
    console.log(selectType)
    console.log(selectSubtype)
    // console.log(items)
    const addToCart = i => {
        setItems(state =>
            state.map((item, p) => {
                console.log(item)
                console.log(i)
                console.log(p) 
                if (i === p) {
                    setCart([
                        ...cart,
                        { name: item.name, price: item.price, quantity: item.quantity }
                    ]);
                    return { ...item, inCart: true };
                }
                return item;
            })
        );
    };
   

    const increaseQuantity = {
        inCart: i => {
            setCart(state =>
                state.map((item, o) => {
                    if (i === o && item.quantity < 10) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                })
            );
        },
        inItems: i => {
            setItems(state =>
                state.map((item, o) => {
                    if (o === i && item.quantity < 10) {
                        return { ...item, quantity: item.quantity + 1 };
                    }
                    return item;
                })
            );
        }
    };

    const decreaseQuantity = {
        inCart: i => {
            setCart(prevCart =>
                prevCart.map((item, o) => {
                    if (i === o && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
            );
        },
        inItems: i => {
            setItems(state =>
                state.map((item, o) => {
                    if (i === o && item.quantity > 1) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
            );
        }
    };

    const removeFromCart = i => {
        let chosenItem, index;
        index = 0;
        while (index < cart.length) {
            if (index === i) {
                chosenItem = cart[index].name;
                break;
            }
            index++;
        }
        setCart(state => state.filter(item => chosenItem !== item.name));
        setItems(state =>
            state.map(item => {
                if (item.name === chosenItem) {
                    return { ...item, inCart: false, quantity: 1 };
                }
                return item;
            })
        );
    };
    // const Agriculture = j => {
    //     serAgriculture(state =>
    //         state.map((item, p) => {
    //             console.log(item)
    //             console.log(j)
    //             console.log(p)
    //             if (j.type  === "Agriculture") {
    //                 setCart([
    //                     ...cart,
    //                     { name: item.name, price: item.price, quantity: item.quantity }
    //                 ]);
    //                 return { ...item, inCart: true };
    //             }
    //             return item;
    //             // if (j.type  === "Agriculture") {
                    
    //             // }
               
    //         })
    //     );
    // };
    const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div style={{ background: "#f0f0f0" }}>
            <>
                <div>

                    <div style={{ top: "0px" }}><Navbar/></div>
                    <div style={{ top: "0px" }}>
                        <>
                            {/* <div style={{ display: "block", background: "#fff", padding: " 20px", width: "260px", maxWidth: "260px", boxShadow: "0 0 15px rgb(0 0 0 / 20%)", }}> */}
                            <div style={{ backgroundColor: "white",    background:"#f0f0f0" }}>
                                <div className="sidebar" style={{ position: "absolute", top: "90px", backgroundColor: "white", width: "276px" }}>

                                    <a href="#home"> </a>
                                    <a href="#home"> </a>

                                    <a href="#home"> </a>

                                    <a href="#home"> </a>

                                    <a href="#home"> All domains</a>
                                    <a onClick={() => setType("Agriculture")}>Agriculture </a>
                                    <a onClick={() => setType("Gold")}>Gold</a>
                                    <a onClick={() => setType("Business")}>Business</a>                                    <a href="#home"> Entertainment</a>
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
                            </div>
                            

                            <div className="main">
                           
                              <div className="bg-light py-5 service-5">
                              {/* <CartDetails
                                  open={cartOpen}
                                  onClose={() => isCartOpen(false)}
                                  cart={cart}
                                  increaseQ={increaseQuantity.inCart}
                                  decreaseQ={decreaseQuantity.inCart}
                                  cartCountTotal={cartCountTotal}
                                  removeFromCart={removeFromCart}
                              />

                              <FixedCart onOpen={() => isCartOpen(true)} cartItems={cartCountTotal} />
                              <Overlay onClick={() => isCartOpen(false)} open={cartOpen} /> */}
                              

<div className="container py-5">
         

         {selectSubtype.map((check ) =>(
             <div>
    <div className="col-md-3 py-3">
        
  <Listedagriculture
      items={check}
      increaseCount={increaseQuantity.inItems}
      decreaseCount={decreaseQuantity.inItems}
      addToCart={addToCart}
  />
  </div>
  </div>
    ))}
    

        <div className="row">
                            
                                  {/* <H1>Shopping Cart App</H1> */}
                                  <div style={{
                                      backgroundColor: "#e0e0e0", width: "-webkit-fill-available", top: "-91px", position: "relative", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",fontSize:"40px", paddingBottom:"60px",


                                  }}><h1 style ={{textAlign:"center",fontSize:"40px" ,marginTop:"30px"}}>Explore domain names for sale</h1></div>
                                  <div className="container"><p style={{ fontSize: "25px", color: "black", textAlign:"center"}}>Looking for a domain name for your new product or business? Explore over 24,000 brandable dot-com domain names, available to buy now online. How this works</p></div>
                                  <div className="col-md-3 py-3" style ={{textAlign:"center", marginLeft:"40px"}}>
                                  <button onClick={() => setSubtype("Animals")} style ={{fontSize:"20px", color:"black"}}>Animals </button>
         <button onClick={() => setSubtype("Field")} style ={{fontSize:"20px", color:"black"}}>Field </button>
         <button onClick={() => setSubtype("soil")} style ={{fontSize:"20px", color:"black"}}>soil </button>
         <button onClick={() => setSubtype("Animals")} style ={{fontSize:"20px", color:"black"}}>cultivate </button>
         </div>
                                       
                                  {selectType.map((value) => (

                                     <div>
                                      
                                     
                                      <div className="col-md-3 py-3">
                                        
                                  <Listedagriculture
                                      items={value}
                                      increaseCount={increaseQuantity.inItems}
                                      decreaseCount={decreaseQuantity.inItems}
                                      addToCart={addToCart}
                                  />
                                  </div>
                                  </div>
                                  
                                 ))} 
                                 
                              
                          </div>
                          </div></div>
                         
                                
                            </div>

                           
                        </>
                        

                    </div>
                   
                    <div><Footer /></div>
                </div>
                {/* <GlobalStyles /> */}

            </>
        </div>
    );
}

const Wrapper = styled.div`
            padding: 75px 0;
            display: flex;
            flex-flow: column;
            align-items: center;
            `;
const H1 = styled.h1`
            padding: 0 10px 50px 10px;
            text-align: center;
            color: ${lightGray};
            `;
export default Agriculture;









// import React, { useState } from "react";
// import Shopdata from "./shopdata";
// import { Elementslist } from "./Elementslist";
// // import FoodCategory from "../FoodCategory/FoodCategory";
// /**
//  * Food component to find foods according to category
//  * 
//  */
 
// const Agriculture = () => {
//   const data = Shopdata;
//   console.log(data)
//   const [cart, setCart] = useState([]);
//   const [items, setItems] = useState(data);
//   const [type, setType] = useState("Agriculture");
//   const selectType = items.filter((cat) => cat.type === type);
//   /**
//    * {selectCategory} to filter food accord to category from {category}
//    * 
//    */
//   //  const addToCart = i => {
//   //   setItems(state =>
//   //       state.map((item, p) => {
//   //           console.log(item)
//   //           console.log(i)
//   //           console.log(p)
//   //           if (i === p) {
//   //               setCart([
//   //                   ...cart,
//   //                   { name: item.name, price: item.price, quantity: item.quantity }
//   //               ]);
//   //               return { ...item, inCart: true };
//   //           }
//   //           return item;
//   //       })
//   //   );
//   // };
//   return (
//     <div className="container">
//         {/* nav {onClick} to select food cards accord to category */}
//       <nav>
//         <a onClick={() => setType("Agriculture")}>Agriculture </a>
//         <a onClick={() => setType("Gold")}>Gold</a>
//         <a onClick={() => setType("Business")}>Business</a>
//       </nav>
//       <div className="container py-5">
//         <div className="row">
//           {selectType.map((item) => (
//             <div className="col-md-4 py-3">
//               {/* <FoodCategory/> food card design */}
//               <Elementslist
//                                             items={item}
//                                             // addToCart={addToCart}
//                                         />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Agriculture;