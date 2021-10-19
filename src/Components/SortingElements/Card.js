import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import "../../SortAction.css"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Cards = ({data, addToCart}) => {
    const classes = useStyles();
    const MyComponent = () => (
        <>
          <CountUp duration={8.75} end={data.price} redraw={true} style ={{color:"white"}}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} style ={{color:"white",fontWeight:"700"}}/>
              </VisibilitySensor>
            )}
          </CountUp>
        </>
      );

    let button;
    if (data.strikingprice) {
      button =  <Typography variant="body2" color="textSecondary" component="p" style ={{color:"white", fontSize:"20px" }}>
         
      <del>{data.strikingprice}</del>
      </Typography>;
}
else {
      button = <div style ={{marginTop:"20px"}}><br></br></div>;
    }


    let valuepriceoffer;
    if (data.offer) {
      valuepriceoffer =   <div classname ="offer" style ={{content: "",
      display: "block",
    
      /* position the triangle in the top right corner */
      position: "absolute",
      zIndex: "0",
      top: "0",
      left: "0",
    
      /* create the triangle */
      width: "0",
      height: "0",
      border: "3em solid transparent",
      borderTopColor: " #fc6666",
      borderLeftColor:" #fc6666",}} >
        <span style ={{marginLeft: "-40px",
    padding: "-12px",
    color: "white",
    fontSize: "20px",

    position: "absolute",
    marginTop: "-45px",}}><bold>{data.offer}%</bold>
     </span>
     <span style ={{marginLeft: "-40px",
    padding: "-12px",
    color: "white",
    
    position: "absolute",
    marginTop: "-20px",}}>off</span>
     </div>
}
else {
  valuepriceoffer = <div></div>;
    }


    return (
        <Card className={classes.root} style ={{margin:"20px"}}>
        <CardActionArea>
       
          
          <CardContent style ={{background:"rgb(11 59 107)",width:"314px", height:"238px", padding: "24px", borderRadius: "5px",    color: "#fff",textAlign:"center"
}}>
   <span>{valuepriceoffer}</span>
  
            <Typography gutterBottom variant="h5" component="h2" style ={{marginTop: "0px", marginLeft: "0px",textAlign: "center",
    color: "#fff",
    fontSize: "25px",
    fontWeight: "550",
    margin:" 0 0 1rem",}}>
              {data.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2" style ={{marginTop:"27px"}}>
            <span style ={{fontSize: "2.0em",marginBottom: ".25rem",color:"white"}}> $<MyComponent />/yr</span>
            </Typography>

            
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"17px" , padding:"9px"}}>
                {button}
            </Typography>
            
            <button className="add-to-cart" style ={{borderColor: "#e0452f",background: "#f14c2e linear-gradient(#f14c2e,#d8452e)",
    color: "#fff",
    textShadow: "0 -1px 1px #d8452e",
    padding:" 0 20px",
    borderRadius: "5px",
    fontFamily: "inherit",
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: "36px",
    textAlign: "center",
    whiteSpace: "nowrap",
    cursor: "pointer",
    verticalAlign: "middle",
    touchAction: "manipulation",
    border: "1px solid #b8b8b8",
    marginTop: "-86px",
  }} onClick={() => addToCart(data)}>Add to cart</button>
          </CardContent>
          <CardContent style ={{padding: ".75rem 1rem .5rem",color: "#888",}} >
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"17px",     position: "absolute",}}>
              {data.validation}
            </Typography>
            <br></br>
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"17px", position:"absolute"}}>
              {data.domain}
            </Typography>
            <br></br>
            <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:"17px", position:"absolute"}}>
              Great for {data.purpose}
            </Typography>
            <br></br>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" style ={{fontSize:"10px"}}>
          Learn More
          </Button>
          <Button size="small" color="primary" style ={{marginLeft:"118px", fontSize:"10px"}}>
            Compare
          </Button>
        </CardActions>
      </Card>
        // <div className="card">
        //     <div></div>
        //     {/* <img src={data.url} className="card-image" alt="product" title={data.title} /> */}
        //     <h3 className="card-title">{data.title}</h3>
        //     <p className="price">price: <span>$ {data.price}</span></p>
        //     <button className="add-to-cart" onClick={() => addToCart(data)}>Add to cart</button>
        // </div>
//         <div className="card" >
//             <div className="card-img-top" style ={{background:"#4d4e4f"}}></div>
//   {/* <img
//     src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
//     className="card-img-top"
//     alt="..."
//   /> */}
//   <div className="card-body">
//     <h3 className="card-title">{data.title}</h3>
//     <p className="price">price: <span>$ {data.price}</span></p>
//     <button className="add-to-cart" onClick={() => addToCart(data)}>Add to cart</button>
//   </div>
// </div>Card
    )
}

export default Cards;
