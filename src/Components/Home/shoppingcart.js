import React, { useState } from "react";
import ReactDOM from "react-dom";
import SHOP_DATA from "./shop-data";
import "../../css/styles.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Shoppingcart() {
    const [cart, setCart] = useState(SHOP_DATA);

    const addToCart = i => {
        setCart(prevState =>
            prevState.map((item, o) => {
                if (i === o) {
                    return {
                        ...item,
                        inCart: true,
                        count: item.counterVal
                    };
                }
                return item;
            })
        );
    };

    const increaseQuantity = i => {
        setCart(prevCart =>
            prevCart.map((item, o) => {
                if (i === o && item.inCart) {
                    if (item.count > 9) {
                        return item;
                    } else return { ...item, count: item.count + 1 };
                } else if (i === o) {
                    if (item.counterVal > 9) {
                        return item;
                    } else
                        return {
                            ...item,
                            counterVal: item.counterVal + 1
                        };
                }
                return item;
            })
        );
    };

    const decreaseQuantity = i => {
        setCart(prevCart =>
            prevCart.map((item, o) => {
                if (i === o && item.inCart) {
                    if (item.count > 1) {
                        return { ...item, count: item.count - 1 };
                    } else {
                        return item;
                    }
                } else if (i === o && item.counterVal > 1) {
                    return {
                        ...item,
                        counterVal: item.counterVal - 1
                    };
                }
                return item;
            })
        );
    };

    const removeFromCart = i => {
        setCart(prevCart =>
            prevCart.map((item, o) => {
                if (i === o) {
                    return {
                        ...item,
                        count: 0,
                        counterVal: 1,
                        inCart: false
                    };
                }
                return item;
            })
        );
    };

    const cartCountTotal = cart.reduce((acc, item) => acc + item.count, 0);
    const cartPriceTotal = cart.reduce(
        (acc, item) => acc + item.price * item.count,
        0
    );

    const cartTotals = () =>
        cartCountTotal === 0 ? (
            <b>Cart is empty</b>
        ) : (
            <>
                <b>
                    <p>Items in Cart: {cartCountTotal}</p>
                    <p>
                        Total Price: $
                        {Number.isInteger(cartPriceTotal)
                            ? cartPriceTotal
                            : cartPriceTotal.toFixed(2)}
                    </p>
                </b>
            </>
        );

    const cartItems = cart.map((item, i) => (
        <React.Fragment key={item.name}>
            {item.inCart && (
                <>
                    <p> Item Name: {item.name}</p>
                    <p>
                        Item Count: <button onClick={() => decreaseQuantity(i)}>-</button>{" "}
                        {item.count} <button onClick={() => increaseQuantity(i)}>+</button>
                    </p>
                    <p>
                        Item Subtotal: $
                        {Number.isInteger(item.count * item.price)
                            ? item.count * item.price
                            : `${(item.count * item.price).toFixed(2)}`}
                    </p>
                    <button onClick={() => removeFromCart(i)}>Remove From Cart</button>
                    <hr />
                </>
            )}
        </React.Fragment>
    ));

    const cartProducts = () => (
        <div className="flexParent" style={{ top: "400px" }}>
            {cart.map((item, i) => (
                <div className="row" style={{ marginop: "187px" }}>
                    <div className="col-sm-3" style={{ paddingLeft: "0px", }}>

                        <Card style={{ padding: "0px", maxWidth: 345, }}>
                            <CardActionArea className="zoom">
                                <CardMedia
                                    image={item.imageUrl}
                                    title="Contemplative Reptile"
                                    style={{ height: 140, }}
                                />
                                {!item.inCart ? (
                                    <>
                                        <button onClick={() => decreaseQuantity(i)}>-</button>
                                        <input readOnly type="text" value={item.counterVal} />
                                        <button onClick={() => increaseQuantity(i)}>+</button>
                                        <br />
                                        <button onClick={() => addToCart(i)}>add</button>
                                    </>
                                ) : (
                                    <p>
                                        <b>Item added!</b>
                                    </p>
                                )}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        <p className="card-text" style={{ wordSpacing: "10px" }}>{item.name}  ${item.price} </p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>

                </div>
            ))
            }
        </div >
    );

    return (
        <div>
            {cartItems}
            {cartTotals()}
            {cartProducts()}
        </div>
    );
}

export default Shoppingcart