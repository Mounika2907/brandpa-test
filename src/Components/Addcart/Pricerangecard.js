import React ,{useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Elementslist  } from './Elementslist';
import API from "./mockAPI"
  
const Pricerangecard = () => {
    const [cart, setCart] = useState([]);
    const [items, setItems] = useState(API);
    const [cartOpen, isCartOpen] = useState(false);
    const [agriculture,serAgriculture] =useState([]);
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

  
  // Our States
  const [value, setValue] =  React.useState([1000,2000]);
  
  // Changing State when volume increases/decreases
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };
  
  return (
    <div style={{
      margin: 'auto',
      display: 'block',
      width: 'fit-content'
    }}>
      <h3>How to create Price Range Selector in ReactJS?</h3>
      <Typography id="range-slider" gutterBottom>
        Select Price Range:
      </Typography>
      <Slider
        value={value}
        onChange={rangeSelector}
        valueLabelDisplay="auto"
      />
      if({value[0]} - {value[1]}){
      <Elementslist
      items={value}
      increaseCount={increaseQuantity.inItems}
      decreaseCount={decreaseQuantity.inItems}
      addToCart={addToCart}
  /> }
    </div>
  );
}
  
export default Pricerangecard;






// import React from "react";
// import ReactDOM from "react-dom";
// import { Range, getTrackBackground } from "react-range";

// const STEP = 1000;
// const MIN = 1000;
// const MAX = 6000;

// class Pricerangecard extends React.Component {
//   state = {
//     values: [1000]
//   };
//   render() {
//     return (
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           margin: "2em"
//         }}
//       >
//         <Range
//           values={this.state.values}
//           step={STEP}
//           min={MIN}
//           max={MAX}
//           onChange={(values) => this.setState({ values })}
//           renderTrack={({ props, children }) => (
//             <div
//               onMouseDown={props.onMouseDown}
//               onTouchStart={props.onTouchStart}
//               style={{
//                 ...props.style,
//                 height: "36px",
//                 display: "flex",
//                 width: "100%"
//               }}
//             >
//               <div
//                 ref={props.ref}
//                 style={{
//                   height: "5px",
//                   width: "100%",
//                   borderRadius: "4px",
//                   background: getTrackBackground({
//                     values: this.state.values,
//                     colors: ["#548BF4", "#ccc"],
//                     min: MIN,
//                     max: MAX
//                   }),
//                   alignSelf: "center"
//                 }}
//               >
//                 {children}
//               </div>
//             </div>
//           )}
//           renderThumb={({ props, isDragged }) => (
//             <div
//               {...props}
//               style={{
//                 ...props.style,
//                 height: "42px",
//                 width: "42px",
//                 borderRadius: "4px",
//                 backgroundColor: "#FFF",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 boxShadow: "0px 2px 6px #AAA"
//               }}
//             >
//               <div
//                 style={{
//                   height: "16px",
//                   width: "5px",
//                   backgroundColor: isDragged ? "#548BF4" : "#CCC"
//                 }}
//               />
//             </div>
//           )}
//         />
//         <output style={{ marginTop: "30px" }} id="output">
//           {this.state.values[0].toFixed(1)}
//         </output>
//       </div>
//     );
//   }
// }
// export default Pricerangecard;

