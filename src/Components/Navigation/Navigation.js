import React, { useState } from 'react';
import NumberSpinner from "../Home/number-spinner";
import { FixedCart } from "../Addcart/FixedCart"
import { CartDetails } from "../Addcart/CardDetails";
import Shopdata from "../Addcart/shopdata"
import { Overlay } from "../Addcart/Overlay";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";






export default function Navigation() {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState(Shopdata);
    const [cartOpen, isCartOpen] = useState(false);

    const addToCart = i => {
        setItems(state =>
            state.map((item, p) => {
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
    const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
                background: "linear-gradient(to bottom, #441196 20%, #080c47 120%)", width: "108%",
                top: "0px",
            }}>
                <a className="navbar-brand" href="/" style={{ color: "white" }}> <Link to="/size">All domains</Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/about" style={{ color: "white" }}><Link to="/addcart">By industry</Link> <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/addcart" style={{ color: "white" }}><Link to="/contact">About</Link></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "white" }}>
                            <Link to="/domain-search"> <bold> By style </bold></Link>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#" >Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" style={{ color: "white" }}>Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" style={{ marginRight: "200px" }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <i className="fa fa-search" style={{ marginLeft: "-27px", marginTop: "-20px" }} />


                    </form>
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

                </div>
            </nav>

        </div >
    );
};