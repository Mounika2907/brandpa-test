import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import API from "./mockAPI";
import { Elementslist } from "./Elementslist";
import { FixedCart } from "./FixedCart";
import { CartDetails } from "./CardDetails";
import { Overlay } from "./Overlay";
// import Navbar from "../Navigation/Navbar"
import Footer from "../Footer/Footer"
// import Searchfield from "./searchfield";

import { GlobalStyles, lightGray } from "./GlobalStyles";
import Navbar from "../Navigation/Navbar";

// import Navigationbar from "../Navigation/Navigationbar";


function Addcart() {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState(API);
    const [cartOpen, isCartOpen] = useState(false);
    const [agriculture,serAgriculture] =useState([]);
    const [sortType, setSortType] = useState('price');


    // const sorted = items.sort((a, b) => b[sortProperty] - a[sortProperty]);

     


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
   
console.log(items)
console.log(setItems)
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
    const Agriculture = j => {
        serAgriculture(state =>
            state.map((item, p) => {
                console.log(item)
                console.log(j)
                console.log(p)
                if (j.type  === "Agriculture") {
                    setCart([
                        ...cart,
                        { name: item.name, price: item.price, quantity: item.quantity }
                    ]);
                    return { ...item, inCart: true };
                }
                return item;
                // if (j.type  === "Agriculture") {
                    
                // }
               
            })
        );
    };
    useEffect(() => {
    const sortArray = type => {
        const types = {
          price: 'price',
          lowprice:'price'
        
        };
        const sortProperty = types[type];
        const sorted = items.sort((a, b) => b[sortProperty] - a[sortProperty]);
        const sortedprice =items.sort((a,b)=> a[sortProperty]- b[sortProperty]);
        console.log(sortedprice)
        console.log(sorted);
        setItems(sorted,sortedprice);
      
      };
      sortArray(sortType);
    }, [sortType]);

     

    
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
                                    <select>
                                            <option value="price" onChange={(e) => setSortType(e.target.value)}>price</option>
                                            <option value="lowprice" onChange={(e) => setSortType(e.target.value)}>lowprice</option>
        
                                </select>
                                    {/* <Searchfield /> */}
                                </div>
                            </div>

                            <div className="main">
                                <div className="bg-light py-5 service-5">
                               
                                    <CartDetails
                                        open={cartOpen}
                                        onClose={() => isCartOpen(false)}
                                        cart={cart}
                                        increaseQ={increaseQuantity.inCart}
                                        decreaseQ={decreaseQuantity.inCart}
                                        cartCountTotal={cartCountTotal}
                                        removeFromCart={removeFromCart}
                                    />

                                    <FixedCart onOpen={() => isCartOpen(true)} cartItems={cartCountTotal} />
                                    <Overlay onClick={() => isCartOpen(false)} open={cartOpen} />

                                    <Wrapper>
                                        {/* <H1>Shopping Cart App</H1> */}
                                        <div style={{
                                            backgroundColor: "#e0e0e0", width: "-webkit-fill-available", top: "-91px", position: "relative", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",fontSize:"40px", paddingBottom:"60px",


                                        }}><h1 style ={{textAlign:"center",fontSize:"40px" ,marginTop:"30px"}}>Explore domain names for sale</h1></div>
                                        <div className="container"><p style={{ fontSize: "25px", color: "black", textAlign:"center"}}>Looking for a domain name for your new product or business? Explore over 24,000 brandable dot-com domain names, available to buy now online. How this works</p></div>
                                        

                                       
                                        <Elementslist
                                            items={items}
                                            increaseCount={increaseQuantity.inItems}
                                            decreaseCount={decreaseQuantity.inItems}
                                            addToCart={addToCart}
                                        />

    <div></div>
                                    </Wrapper>
                                </div>
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
export default Addcart