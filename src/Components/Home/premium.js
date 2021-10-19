import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import back from "../Home/card1.png"
// import back1 from "../Home/card2.png"
// import back2 from "../Home/card3.png"
// import back3 from "../Home/card4.png"
// import back4 from "../Home/card5.png"
// import back5 from "../Home/card6.png"
// import back6 from "../Home/card7.png"
// import back7 from "../Home/card8.png"
// import back8 from "../Home/card9.png"
// import back9 from "../Home/card10.png"
// import back10 from "../Home/card12.png"
// import back11 from "../Home/card14.png"
// import back12 from "../Home/card15.png"
// import back13 from "../Home/card16.png"
// import back14 from "../Home/card17.png"
// import back15 from "../Home/card7.png"
import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Shopdata from "../Addcart/shopdata"
import  {ListedItems}  from "../Addcart/ListedItems";
import { FixedCart } from "../Addcart/FixedCart";
import { CartDetails } from "../Addcart/CardDetails";
import { Overlay } from "../Addcart/Overlay";
import Navigation from "../Navigation/Navigation"
import back from "../../images/brands/1.jpg"
import back1 from "../../images/brands/2.jpg"
import back2 from "../../images/brands/3.jpg"
import back3 from "../../images/brands/4.jpg"
import back5 from "../../images/brands/6.jpg"
import back6 from "../../images/brands/7.jpg"
import back7 from "../../images/brands/9.jpg"
import back8 from "../../images/brands/10.jpg"
import back9 from "../../images/brands/11.jpg"
import back10 from "../../images/brands/12.jpg"
import back11 from "../../images/brands/13.jpg"
import back12 from "../../images/brands/14.jpg"
import back13 from "../../images/brands/15.jpg"


import "../../css/premium.css"




const shopdata = [
    {
        name: "Bodybro.com",
        price: 4595,
        quantity: 1,
        inCart: false,
        src:back,
        },
    {
        name: "logilux.com",
        price: 2395,
        quantity: 1,
        inCart: false,
        src: back1,
    },
    {
        name: "Pennoy.com",
        price: 4500,
        quantity: 1,
        inCart: false,
        src: back2,
    },
    {
        name: "storeTag.com",
        price: 4400,
        quantity: 1,
        inCart: false,
        src: back3,
    },
    {
        name: "Wagepeak.com",
        price: 5.99,
        quantity: 1,
        inCart: false,
        src: back5,
    },
    {
        name: "brilian.com",
        price: 2950,
        quantity: 1,
        inCart: false,
        src: back6,
    },
    {
        name: "ShopHow.com",
        price: 3995,
        quantity: 1,
        inCart: false,
        src: back7,
    },
    {
        name: "CozyPop.com",
        price: 1495,
        quantity: 1,
        inCart: false,
        src:back8,
        },
    {
        name: "tripata.com",
        price: 2195,
        quantity: 1,
        inCart: false,
        src: back9
            
    },
    {
        name: "Housics.com",
        price: 3250,
        quantity: 1,
        inCart: false,
        src: back10
    },
    {
        name: "ShopHow.com",
        price: 3995,
        quantity: 1,
        inCart: false,
        src: back12
    },
    {
        name: "CozyPop.com",
        price: 1495,
        quantity: 1,
        inCart: false,
        src: back3
    },
    {
        name: "tripata.com",
        price: 2195,
        quantity: 1,
        inCart: false,
        src: back7,
        },
    {
        name: "Housics.com",
        price: 3250,
        quantity: 1,
        inCart: false,
        src: back9, 
        },
    {
        name: "ShopHow.com",
        price: 3995,
        quantity: 1,
        inCart: false,
        src: back1,
    },
    {
        name: "CozyPop.com",
        price: 1495,
        quantity: 1,
        inCart: false,
        src: back2,
        },
    {
        name: "tripata.com",
        price: 2195,
        quantity: 1,
        inCart: false,
        src: back
    },
    {
        name: "Housics.com",
        price: 3250,
        quantity: 1,
        inCart: false,
        src: back10,
        },
    {
        name: "tripata.com",
        price: 2195,
        quantity: 1,
        inCart: false,
        src: back13,
    },
    {
        name: "Housics.com",
        price: 3250,
        quantity: 1,
        inCart: false,
        src: back11,
    },




];

// import NumberSpinner from "./number-spinner";






export default function Premium() {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState(Shopdata);
    const [cartOpen, isCartOpen] = useState(false);
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('names');

    useEffect(() => {
        const sortArray = type => {
        const types = {
                names: 'names',
                price: 'price',
                
              };
        const sortProperty = types[type];
        console.log(sortProperty)
        const sorted = [...items].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
        console.log(sorted)
        };

        sortArray(sortType);
    }, [sortType]); 


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
        <div style={{ background: "#f0f0f0", borderTop: " 1px solid #ddd", width: "108%" ,    marginTop: "-40px",}}>
            
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
                <h1 style={{ marginTop: "49px", fontSize: "40px",     marginLeft: "40px",  fontFamily:" 'Mulish', sans-serif"}}>Featured domain names for sale</h1>
                <select onChange={(e) => setSortType(e.target.value)} style ={{    fontSize: "20px",}}> 
        <option value="names">names</option>
        <option value="price">price</option>
      </select>
                {/* <h1 style={{
                    backgroundColor: "#e0e0e0", width: "-webkit-fill-available", top: "-30px", position: "relative", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center",


                }}>Explore domain names for sale</h1> */}
               
             {/* <h5>Looking for a domain name for your new product or business? Explore over 24,000 brandable dot-com domain names, available to buy now online. How this works</h5> */}
             {/* {items.map(items => ( */}
                <ListedItems
                    items={items}
                    increaseCount={increaseQuantity.inItems}
                    decreaseCount={decreaseQuantity.inItems}
                    addToCart={addToCart}
                />
            {/* ))} */}
                <p style={{ fontSize: "25px", textDecoration: "underline",marginTop:"50px",padding:"30px", fontFamily:" 'Mulish', sans-serif",    color: "#484848" }}><b>More domain names for sale</b></p>
            </Wrapper>
            {/* <div className="bg-light py-5 service-5">
                <div className="container" style={{ top: "400px" }}>
                    <h1 style={{ color: "black", fontSize: "40px", marginTop: "300px", }}>Featured domain names for sale</h1>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        image={back}
                                        title="Contemplative Reptile"
                                        style={{ height: 140, }}
                                    />
                                    <button onClick={this.addToTodaysOrder}>Add to Cart</button>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back1}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back2}
                                        title="Contemplative Reptile"
                                    />
                                    <button onClick={this.addToTodaysOrder}>Add to Cart</button>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>

                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back3}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light py-5 service-5">
                <div className="container" style={{ top: "400px" }}>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-sm-3" style={{ paddingLeft: "0px" }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back4}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back5}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px" }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back6}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back7}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light py-5 service-5">
                <div className="container" style={{ top: "400px" }}>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back8}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back9}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back10}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back11}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light py-5 service-5">
                <div className="container" style={{ top: "400px" }}>
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back12}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back13}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back14}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                        <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                            <Card style={{ padding: "0px", maxWidth: 345, }}>
                                <CardActionArea className="zoom">
                                    <CardMedia
                                        style={{ height: 140, }}
                                        image={back15}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            <p className="card-text" style={{ wordSpacing: "10px" }}>RevenueBay  $2750 </p>
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <h3 style={{ color: "black", marginTop: "40px", }}>More domain names for sale</h3> */}
        </div >
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
            `;

