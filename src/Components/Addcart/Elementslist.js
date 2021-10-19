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
import $ from 'jquery'; 




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
function componentDidMount() {
  const $cart = $('.card');
  const $addToCart = $('.value');
  $addToCart.click(function() {
      const $item = $(this).parents(".cart-button").find("img");
      const $itemClone = $item.clone()
          .offset({
              top: $item.offset().top,
              left: $item.offset().left
          })
          .css({
              'position': 'absolute',
              'height': $item.height(),
              'width': $item.width(),
              'z-index': '2000',
              'opacity': '.7'
          })
          .appendTo($('Wrapper'))
          .animate({
              'top': $cart.offset().top + 10,
              'left': $cart.offset().left + 30,
              'width': $item.width() / 10,
              'height': $item.height() / 10
          }, 1000);
      $itemClone.animate({
          'width': 0,
          'height': 0
      }, function() {
          $(this).detach()
      });
  
      //ajax code here
      // $.ajax({
      //     type: "POST",
      //     dataType: "html",
      //     url: "/cart/add",
      //     data: yourData,
      //     success: function(result) {
      //
      //     }
      // });
  });

 
}  


export const Elementslist = ({
  
  
  items,
  increaseCount,
  decreaseCount,
  addToCart
}) => (
  
  <Wrapper>
     {/* <select onChange={(e) => setSortType(e.target.value)}> 
        <option value="albums">Albums</option>
        <option value="members">Members</option>
        <option value="formed">Formed in</option>
      </select> */}
      
  {items.map((item, i) => ( 
<div className="row" style ={{marginLeft:"0px"}}>
<div className="cart-button">
<div className="card" style ={{  width: "270px", display: "inline-block",  height:"250px",   marginTop: "20px",     marginLeft: "15px"
 , marginRight:"59px", margin:"25px"}}>
      <img
       src={item.src} 
	alt={item.name}
  style ={{position: "absolute", marginLeft: "-30px", marginTop: "-28px",     width: "340px",}}
  // width: "242px"
        className="card-img-top"
      />
      
      <div classname="card-body">
      <div style={{width: "100%",top:"220px"}}>
        <div style={{width: "50%", float: "left", color:"black",top:"220px", marginTop:"200px",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"176px",    lineHeight: "1.1",width:"145px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm"}}>{item.name}</p>
        </div>
        <div style={{marginLeft: "50%", color:"black",top:"220px",marginTop:"0px", float:"right",}}> 
        <p style ={{ fontSize:"20px", position:"absolute", top:"176px",    lineHeight: "1.1",width:"130px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",    left: "188px",}}>${item.price}</p>
           
        </div>
    </div> 

      {/* <p style ={{ fontSize:"20px", position:"absolute", top:"176px",    lineHeight: "1.1",width:"130px",
  fontFamily:" 'Helvetica Neue',Helvetica,Arial,sans-serif; ", color:"black",wordSpacing: "1cm"}}>{item.name}</p> */}

          
            <a href="#">
              <button className ="checking" onClick={() => addToCart(i)}  >
              <FontAwesomeIcon icon={faHeart} style ={{position: "absolute",font: "icon",color: "white",fontSize: "xx-large",  marginTop: "-188px", top: "160px",
    marginLeft: "88px",}} />

                {/* <i style ={{position: "absolute", marginTop: "-206px", marginLeft: "145px", top: "152px",marginLeft: "230px", border:"1px solid black" }}>
                </i> */}
                </button>
              </a>
              </div>
      {!item.inCart && (
        
          <div className="cart-button">
           
            
            {/* <a style ={{color:"white",position: "absolute",     marginTop: "120px", }}>cart</a> */}
          <div className="cart-dropdown">
          <Button classname ="value" style ={{ marginLeft: "-92px",marginTop: "40px", padding:"9px",textAlign: "center",position: "absolute",top: "105px",
    padding: "9px 39px 9px 38px",
    color: "white",
    backgroundColor: "#de3723"}} onClick={() => addToCart(i)}>Add to Cart</Button>

          </div>
        </div>
        
        )}

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
