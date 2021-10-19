import React ,{useState, useEffect } from "react";
import { Button } from "./Button";
import { AddButton, SubtractButton } from "./AddSubtractButton";
import { P } from "./P";
import { lightGray } from "./GlobalStyles";
import styled from "styled-components";
import "../../css/listitem.css"
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
import { faShoppingCart ,faHeart} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/card.css"

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
// const [data, setData] = useState([]);
//   const [sortType, setSortType] = useState('albums');

//   useEffect(() => {
//     const sortArray = type => {
//       const types = {
//         albums: 'albums',
//         members: 'members',
//         formed: 'formed_in',
//       };
//       const sortProperty = types[type];
//       const sorted = [...shopdata].sort((a, b) => b[sortProperty] - a[sortProperty]);
//       setData(sorted);
//     };

//     sortArray(sortType);
//   }, [sortType]); 



export const ListedItems = ({
  
  items,
  
  increaseCount,
  decreaseCount,
  addToCart,
  
}) => (
  
  
  <Wrapper>
     {/* <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="albums">Albums</option>
        <option value="members">Members</option>
        <option value="formed">Formed in</option>
      </select> */}
      
  {items.map((item, i) => ( 
    <div style ={{ position:"relative",marginLeft:"-120px"}}>
     <div class="cart-button" >

<div class="card" style ={{  width: "350px", display: "inline-block",  height:"300px", margin: "70px", top:"0px" ,  marginTop: "7px",

 
// marginLeft: "16px" ,
}}>
      <img
       src={item.src} 
	alt={item.name}
  style ={{position: "absolute", marginLeft: "-27px", marginTop: "-29px",     width: "340px",}}
  // width: "242px"
       
      />
      <img data-aload={item.src1} clasName="img-top-elements" alt="Card Front" onMouseOver="this.style.color='red'"
        onMouseOut="this.style.color='green'" style ={{ display: "none",
    position: "absolute",
    zIndex: "99",}} />
      
      <div class="card-body" style ={{}}>

      

      {/* <p style ={{ fontSize:"20px", position:"absolute", top:"220px",    lineHeight: "1.1",width:"130px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm"}}>{item.name}</p> */}
  <div style={{width: "100%",top:"220px"}}>
        <div style={{width: "50%", float: "left", color:"black",top:"220px", marginTop:"200px",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"220px",    lineHeight: "1.1",width:"137px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm"}}>{item.name}</p>
        </div>
        <div style={{marginLeft: "50%", color:"black",top:"220px",marginTop:"0px", float:"right",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"220px",    lineHeight: "1.1",width:"130px", marginTop:"0px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm",    left: "240px",}}>${item.price}</p>
           
        </div>
    </div> 
            <a href="#">
              <button className ="checking" onClick={() => addToCart(i)}  >
                <i style ={{position: "absolute", marginTop: "-206px", marginLeft: "145px", top: "152px",marginLeft: "230px", }}>
                  <FontAwesomeIcon icon={faHeart} style ={{position: "absolute",font: "icon",color: "white",fontSize: "xx-large",top:"19px",    marginLeft: "-114px"}} />
                </i>
                </button>
              </a>
              </div>
      {!item.inCart && (
        
        
          <div class="cart-button">
            
            
            {/* <a style ={{color:"white",position: "absolute",top: "167px",}}>cart</a> */}
          <div class="cart-dropdown">
          <Button  style ={{marginLeft: "-91px",marginTop: "-15px", padding: "11px", fontFamily:" 'Mulish', sans-serif", paddingRight: "27px",textAlign: "center",position: "absolute",top: "182px",    padding: "12px 33px 12px 45px", backgroundColor: "#de3723"}} onClick={() => addToCart(i)}>Add to Cart</Button>

          </div>
        </div>
        
        )}
        {/* {item.inCart && <P>Added!</P>} */}

      </div>
    </div>
    </div>
   
 

))}
  </Wrapper>
);
const Column = styled.article`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 0.5px solid #999999;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  // padding: 12px 20px;
  border-radius: 10px;
  margin: 8px;
  background-color: ${lightGray};
`;
const Wrapper = styled.div`
  max-width: 1500px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;
const IMG = styled.img`
  // padding: 10px;
  // width: 150px;
  height: 150px;
  // object-fit: cover;
`;
const H4 = styled.h4`
  padding: 5px 0;
  font-size: 18px;
`;

