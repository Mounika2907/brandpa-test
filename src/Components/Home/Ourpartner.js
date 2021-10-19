import "../../css/main.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonGroup } from 'react-bootstrap-buttons';
import "../../css/button.css"
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const data = [
  {
    id: "1",
    key: "1",
    title: "Title1",
    text: "Text1.",
    message:"Card title that wraps to a new line",
    content:"Card title that wraps to a new line",

  },
  {
    id: "1",
    key: "1",

    text: "Text1.",
    message:"Card title that wraps to a new line",
    content:"Card title that wraps to a new line",

  },
  
  {
    id: "2",
    key: "2",
    title: "Title2",
    text: "Text2.",
    message:"Card title that wraps to a new line",
    content:"Card title that wraps to a new line",

  },
  {
    id: "3",
    key: "3",
    title: "Title3",
    text: "Text1.",
    message:"Card title that wraps to a new line",
    content:"Card title that wraps to a new line",

  },
  {
    id: "4",
    key: "4",
    title: "Title4",
    text: "Text1.",
    message:"Card title that wraps to a new line",
    content:"Card title that wraps to a new line",

  }
];
const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);



function greeting() {
  
        }

function waveHello() {
  console.log('👋');
}



export default function Ourpartner() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [toggle, setToggle] = useState("1");

  const classes = useStyles();
  // const images = [C1, C2, C3, C4, C5, C6];
  return (
    <div style={{backgroundColor:"white", marginTop:"-55px"}}>
    <div className="container">
      <h2 style ={{textAlign:"center",marginLeft: "130px", fontSize:"35px",    padding: "31px",  fontFamily:" 'Mulish', sans-serif"}}>Buy a domain and everything else you need</h2>
                    <div className="tabs" >
                  <input type="radio" name="tabs" id="tabone" defaultChecked="checked" />
                  <label htmlFor="tabone" style ={{marginLeft: "310px", fontSize:"18px" ,  fontFamily:" 'Mulish', sans-serif"}}>Promos</label>
                  
                  <div className="tab" style ={{backgroundColor:"white",     marginBottom: "77px",}}>
                  <h5 style ={{textAlign:"center",fontSize:"25px" , fontFamily:" 'Mulish', sans-serif", marginTop: "25px"}}>Explore current top deals</h5>
<p style ={{textAlign:"center",fontSize:"20px",     padding: "15px" , fontFamily:" 'Mulish', sans-serif",     paddingBottom: "45px"}}>Check out our best deals across our product range, and get what your website needs.</p>
                  <div className="row">
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",background: "linear-gradient(#362556, #14003b)"}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            {/* <div class="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px"}}>Asus Rog</div> */}
                            <div className="label-top shadow-sm" style ={{background: "#ff8d13", fontFamily:" 'Mulish', sans-serif", borderRadius: "8px",marginTop: "-29px",position: "absolute", marginLeft:"6px",width: "204px", color:"white",textAlign: "center",fontSize:"18px",    padding: "3px 3px 3px 14px"}}>offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"34px",color: "white" , fontFamily:" 'Mulish', sans-serif"}}>Transfer Week- Get up to 33% off domain transfer.</h5>
                                
                                {/* <button type="button" onclick="alert('Hello world!')">All PRODUCTS</button> */}
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"20px",position: "absolute",    top: "214px",color: "white", fontFamily:" 'Mulish', sans-serif" }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px",  fontFamily:" 'Mulish', sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif",backgroundColor: "#2a84f2",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px", fontFamily:" 'Mulish', sans-serif",padding: "3px", marginLeft: "23px",paddingLeft: "14px",color:"white",  padding: "3px 3px 3px 14px", textAlign:"center",width:"121px", }}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif",backgroundColor: "#ff8d13",borderRadius: "8px",marginTop: "-29px",position: "absolute", marginLeft:"148px",width: "138px", fontFamily:" 'Mulish', sans-serif", textAlign: "center",fontSize:"17px", color:"white", padding: "3px 3px 3px 14px"}}>33% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"28px",  fontFamily:" 'Mulish', sans-serif"}}>.COM</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",  fontFamily:" 'Mulish', sans-serif"}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"28px", position: "absolute",top: "174px", fontFamily:" 'Mulish', sans-serif"}}>$5.98/yr </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px", fontFamily:" 'Mulish', sans-serif"}}> Instead of $8.88/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px",  fontFamily:" 'Mulish', sans-serif" }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px", fontFamily:" 'Mulish', sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif",backgroundColor: "#2a84f2",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px", color:"white",textAlign:"center",width:"74px"}}>Sale</div>
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif",backgroundColor: "#ff8d13",borderRadius: "8px",marginTop: "-29px",position: "absolute", marginLeft:"117px",width: "138px", textAlign: "center",fontSize:"17px", color:"white", padding: "3px 3px 3px 1px"}}>Up to 97% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"28px",  fontFamily:" 'Mulish', sans-serif"}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{   fontFamily:" 'Mulish', sans-serif"  ,fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"28px", position: "absolute",top: "174px", fontFamily:" 'Mulish', sans-serif"}}>$3.98/yr </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px", fontFamily:" 'Mulish', sans-serif"}}> Instead of $8.88/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px",  fontFamily:" 'Mulish', sans-serif" }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px" , fontFamily:" 'Mulish', sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                        <div className="row" style ={{marginTop: "70px",}}>
                        <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif",backgroundColor: "#2a84f2",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px", color:"white"}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif",backgroundColor: "#ff8d13",borderRadius: "8px",marginTop: "-29px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px", color:"white", padding: "3px 3px 3px 14px"}}>33% Offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"28px",  fontFamily:" 'Mulish', sans-serif"}}>.NET</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "152px"}}>From </h5>

                                <h5 style ={{fontSize:"28px", position: "absolute",top: "174px", fontFamily:" 'Mulish', sans-serif"}}>$4.98/yr </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px", fontFamily:" 'Mulish', sans-serif"}}> Instead of $8.88/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px",  fontFamily:" 'Mulish', sans-serif" }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif", backgroundColor: "#2a84f2",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",color:"white"}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif", backgroundColor: "#ff8d13",borderRadius: "8px",marginTop: "-29px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px", color:"white", padding: "3px 3px 3px 14px"}}>18% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"28px",  fontFamily:" 'Mulish', sans-serif"}}>Us</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{ fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",backgroundColor:"#f2f2f2"}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "152px"}}>From </h5>

<h5 style ={{fontSize:"28px", position: "absolute",top: "174px", fontFamily:" 'Mulish', sans-serif"}}>$1.98/yr </h5>
<h5 style ={{fontSize:"18px", position: "absolute",top: "211px", fontFamily:" 'Mulish', sans-serif"}}> Instead of $8.88/yr</h5>

<h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px",  fontFamily:" 'Mulish', sans-serif" }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#2a84f2",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px", color:"white"}}>HOST1235</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#ff8d13",borderRadius: "8px",marginTop: "-29px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px", color:"white", padding: "3px 3px 3px 14px"}}>Up to 65% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"28px",  fontFamily:" 'Mulish', sans-serif"}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontFamily:" 'Mulish', sans-serif", fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "152px"}}>From </h5>

                                <h5 style ={{fontSize:"28px", position: "absolute",top: "174px", fontFamily:" 'Mulish', sans-serif"}}>$4.98/yr </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px", fontFamily:" 'Mulish', sans-serif"}}> Instead of $8.88/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px",  fontFamily:" 'Mulish', sans-serif" }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px", fontFamily:" 'Mulish', sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                  </div>
                  <input type="radio" name="tabs" id="tabtwo" />
                  <label htmlFor="tabtwo" style ={{fontSize:"18px",  fontFamily:" 'Mulish', sans-serif"}}>Hosting</label>
                  <div className="tab">
                  <h5 style ={{textAlign:"center",fontSize:"25px", fontFamily:" 'Mulish', sans-serif"}}>Explore current top deals</h5>
<p style ={{textAlign:"center",fontSize:"20px", fontFamily:" 'Mulish', sans-serif"}}>Check out our best deals across our product range, and get what your website needs.</p>
                    
<div class="row">
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",backgroundColor: "#5680ed"}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            {/* <div class="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px"}}>Asus Rog</div> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"6px",width: "204px", textAlign: "center",fontSize:"17px" , color:"white",}}>offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"30px",color: "white" }}>Transfer Week- Get up to 33% off domain transfer.</h5>
                                
                                {/* <button type="button" onclick="alert('Hello world!')">All PRODUCTS</button> */}
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px",position: "absolute",    top: "214px",color: "white", fontFamily:" 'Mulish', sans-serif" }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px", fontFamily:" 'Mulish', sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif", backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{ fontFamily:" 'Mulish', sans-serif", backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>33% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",  fontFamily:" 'Mulish', sans-serif"}}>.COM</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{ fontFamily:" 'Mulish', sans-serif",    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px" , fontFamily:" 'Mulish', sans-serif"}}>$5.98/yr </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px",  fontFamily:" 'Mulish', sans-serif"}}> Instead of $8.88/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px",  fontFamily:" 'Mulish', sans-serif"}}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"117px",width: "138px", textAlign: "center",fontSize:"17px"}}>Up to 97% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                        <div className="row" style ={{marginTop: "43px",}}>
                        <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>33% Offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"28px",}}>.NET</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>18% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"28px",}}>Us</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>HOST1235</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>Up to 65% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                  </div>
                  <input type="radio" name="tabs" id="tabfour" />
                  <label htmlFor="tabfour" style ={{fontSize:"18px"}}>WordPress</label>
                  <div className="tab">
                  <h5 style ={{textAlign:"center",fontSize:"25px"}}>Explore current top deals</h5>
<p style ={{textAlign:"center",fontSize:"20px"}}>Check out our best deals across our product range, and get what your website needs.</p>
<div className="row">
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",backgroundColor: "#5680ed"}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            {/* <div class="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px"}}>Asus Rog</div> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"6px",width: "204px", textAlign: "center",fontSize:"17px"}}>offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"35px",color: "white" }}>Transfer Week- Get up to 33% off domain transfer.</h5>
                                
                                {/* <button type="button" onclick="alert('Hello world!')">All PRODUCTS</button> */}
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px",position: "absolute",    top: "214px",color: "white", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography style ={{fontSize:"15px"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>33% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>.COM</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>$5.98/yr </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> Instead of $8.88/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"117px",width: "138px", textAlign: "center",fontSize:"17px"}}>Up to 97% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                        <div className="row" style ={{marginTop: "43px",}}>
                        <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>33% Offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>.NET</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>18% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Us</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>HOST1235</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>Up to 65% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                  </div>
                  <input type="radio" name="tabs" id="tabfive" />
                  <label htmlFor="tabfive" style ={{fontSize:"18px"}}>Domains</label>
                  <div className="tab">
                  <h5 style ={{textAlign:"center",fontSize:"25px"}}>Explore current top deals</h5>
<p style ={{textAlign:"center",fontSize:"20px"}}>Check out our best deals across our product range, and get what your website needs.</p>
<div className="row">
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",backgroundColor: "#5680ed"}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            {/* <div class="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px"}}>Asus Rog</div> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"6px",width: "204px", textAlign: "center",fontSize:"17px"}}>offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"35px",color: "white" }}>Transfer Week- Get up to 33% off domain transfer.</h5>
                                
                                {/* <button type="button" onclick="alert('Hello world!')">All PRODUCTS</button> */}
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px",position: "absolute",    top: "214px",color: "white", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>33% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>.COM</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>$5.98/yr </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> Instead of $8.88/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"117px",width: "138px", textAlign: "center",fontSize:"17px"}}>Up to 97% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                        <div className="row" style ={{marginTop: "43px",}}>
                        <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>33% Offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>.NET</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>18% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Us</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>HOST1235</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>Up to 65% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                  </div>
                  <input type="radio" name="tabs" id="tabthree" />
                  <label htmlFor="tabthree" style ={{fontSize:"18px"}}>Security</label>
                  
                  <div className="tab">
                  <h5 style ={{textAlign:"center",fontSize:"25px"}}>Explore current top deals</h5>
<p style ={{textAlign:"center",fontSize:"20px"}}>Check out our best deals across our product range, and get what your website needs.</p>
<div class="row">
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",backgroundColor: "#5680ed"}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            {/* <div class="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px"}}>Asus Rog</div> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"6px",width: "204px", textAlign: "center",fontSize:"17px"}}>offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"35px",color: "white" }}>Transfer Week- Get up to 33% off domain transfer.</h5>
                                
                                {/* <button type="button" onclick="alert('Hello world!')">All PRODUCTS</button> */}
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px",position: "absolute",    top: "214px",color: "white", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>33% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>.COM</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>$5.98/yr </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> Instead of $8.88/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"117px",width: "138px", textAlign: "center",fontSize:"17px"}}>Up to 97% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Small Business Month</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                        <div className="row" style ={{marginTop: "43px",}}>
                        <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel4'} onChange={handleChange('panel4')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>33% Offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>.NET</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>Transfer sale</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>18% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Us</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px",}}>DOMAIN TRANSFER</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                          <div className="col-sm-4">
                          <Accordion square expanded={expanded === 'panel6'} onChange={handleChange('panel6')} style ={{borderRadius:"42px",}}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" style ={{backgroundColor: "white",border: "1px solid slategrey",borderRadius: "12px",}}>
                            {/* <div class="card" style ={{width:"none",borderRadius: "20px"}}> */}
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#607d8b",borderRadius: "8px",marginTop: "-30px",position: "absolute", fontSize:"17px",padding: "3px", marginLeft: "23px",paddingLeft: "14px",}}>HOST1235</div>
                            <div className="label-top shadow-sm" style ={{backgroundColor: "#de3723",borderRadius: "8px",marginTop: "-30px",position: "absolute", marginLeft:"148px",width: "138px", textAlign: "center",fontSize:"17px"}}>Up to 65% offer</div>

                            <div className="card-body" style ={{height:"220px"}}>
                                <h5 className="card-title" style ={{    marginTop: "-2px",fontSize:"20px",}}>Small Business</h5>
                                <button type="button" onclick="alert('Hello world!')" style ={{    fontSize: "16px",borderRadius: "5px", width: "-8px", marginLeft: "10px",padding: "3px", backgroundColor:"#f2f2f2"}}>All PRODUCTS</button>

                                
                                <br></br>
                                <br></br>
                                <br></br>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "192px"}}>From </h5>
                                <h5 style ={{fontSize:"18px", position: "absolute",top: "211px"}}> $0.98/yr</h5>

                                <h5 style ={{fontSize:"18px",position: "absolute", marginLeft:"190px" ,  top: "214px", }}>Get offers --</h5>
                              </div>
                            {/* </div> */}
                            </AccordionSummary>
                            <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            
          </Typography>
        </AccordionDetails>
                            </Accordion>

                          </div>
                        </div>
                  </div>
                </div>
                </div>
                </div>

//     <div className="App" style ={{backgroundColor: "white",}}>
//     {data.map(({ title, text, key, message }) => {
//       return (
//         <>
//           <div className="main">
//           <div class="flex-container">

// <div class="flex-child magenta">
// <ul>
//   <li onClick={() => setToggle(key)}><a href="#home">{title}</a></li>
// </ul>
// </div>

// </div>
         
//             <div className="text">
            
//               {toggle === key ? (
//                 <>
//                   <p></p>
//                 </>
//               ) : null}
//             </div>

//             <div className="img">
//               {toggle === key ? (
//                 <>

//                       <div class="row">
//                         <div class="col-sm-4">
//                           <div class="cards" >
//                             <div class="card-body">
//                               <h5 class="card-title">Special title treatment</h5>
//                               <p class="card-text"></p>
                              
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-sm-4">
//                           <div class="cards">
//                             <div class="card-body">
//                               <h5 class="card-title">Special title treatment</h5>
//                               <p class="card-text"></p>
                              
//                             </div>
//                           </div>
//                         </div>
//                         <div class="col-sm-4">
//                           <div class="cards">
//                             <div class="card-body">
//                               <h5 class="card-title">Special title treatment</h5>
//                               <p class="card-text"></p>
                              
//                             </div>
//                           </div>
//                         </div>
//                       </div>
                  
//                 </>
//               ) : null}
//             </div>
//           </div>
//         </>
//       );
//     })}
//   </div>
    
  );
}
{/* <div className="card-columns">
    <div className="card">
     
      <div className="card-body">
        <h5 className="card-title">Card title that wraps to a new line</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div className="card p-3">
      <blockquote className="blockquote mb-0 card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">
          <small className="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card bg-primary text-white text-center p-3">
      <blockquote className="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
        <footer className="blockquote-footer text-white">
          <small>
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
    </div>
    <div className="card p-3 text-right">
      <blockquote className="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer className="blockquote-footer">
          <small className="text-muted">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div> */}





// import React from 'react'
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBTabs, MDBBtn, MDBTabsItem, MDBTabsLink,  MDBRow, MDBCol } from 'mdb-react-ui-kit';
// // import {Accordion, Card} from 'react-bootstrap/Accordion'
// // import { Accordion } from '@material-ui/core';
// // import { makeStyles } from '@material-ui/core/styles';
// // // import Accordion from '@material-ui/core/Accordion';
// // import AccordionSummary from '@material-ui/core/AccordionSummary';
// // import AccordionDetails from '@material-ui/core/AccordionDetails';
// // import Typography from '@material-ui/core/Typography';
// // import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeading,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from 'react-accessible-accordion';

// // Demo styles, see 'Styles' section below for some notes on use.
// import 'react-accessible-accordion/dist/fancy-example.css';

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     width: '100%',
// //   },
// //   heading: {
// //     fontSize: theme.typography.pxToRem(15),
// //     fontWeight: theme.typography.fontWeightRegular,
// //   },
// // }));


// const data = [
//   {
//     id: "1",
//     key: "1",
//     title: "",
//     text: "Text1.",
   
//   },
//   {
//     id: "1",
//     key: "1",

//     img: "1.jpg"
//   },
//   {
//     id: "1",
//     key: "1",

//     img: "1.jpg"
//   },
//   {
//     id: "2",
//     key: "2",
//     title: "Title2",
//     text: "Text2.",
//     img: "2.jpg"
//   },
//   {
//     id: "3",
//     key: "3",
//     title: "Title3",
//     text: "Text3.",
//     img: "3.jpg"
//   },
//   {
//     id: "4",
//     key: "4",
//     title: "Title4",
//     text: "Text4",
//     img: "4.jpg"
//   }
// ];


// export default function Ourpartner() {
//   const [toggle, setToggle] = useState("1");

//   return (
// <div>
  
// <h2 style ={{color:"black", textAlign:"center", fontSize:"40px",}}>Who uses <span style ={{color:"#cb9b51"}}>.gold</span></h2>
//     <MDBCard className='text-center' style ={{ width: "1100px" ,marginLeft: "200px", marginRight:"70px"}}>
//     {data.map(({ title, text, key, img }) => {

//       <MDBCardHeader>
//         <MDBTabs pills className='card-header-tabs'>
//           <MDBTabsItem>
//             <MDBTabsLink active>
//             <h1 onClick={() => setToggle(key)}>{title} </h1>
//             </MDBTabsLink>
//           </MDBTabsItem>
//           {/* <MDBTabsItem>
//             <MDBTabsLink>
//               Link
//             </MDBTabsLink>
//           </MDBTabsItem> */}
//           {/* <MDBTabsItem>
//             <MDBTabsLink className='disabled'>
//               Disabled
//             </MDBTabsLink>
//           </MDBTabsItem> */}
//         </MDBTabs>
//       </MDBCardHeader>
//         })}
//       <MDBRow>
//   {/* <Accordion> */}

//       <MDBCol sm='2' style ={{flex:" 0 0 59.666667%",maxWidth: "32.666667%",}}>
// <Accordion style ={{ border: "1px solid white"}} allowZeroExpanded>
//             <AccordionItem >
//                 <AccordionItemHeading>
//                     <AccordionItemButton style ={{backgroundColor:"white"}}>
//         <MDBCard style ={{marginLeft:"40px"}}>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#' style ={{    backgroundColor: "#cb9b51",}}>Go somewhere</MDBBtn>
//           </MDBCardBody>
          
//         </MDBCard>
//         </AccordionItemButton>
//                 </AccordionItemHeading>
                
//         <AccordionItemPanel>
//                     <p>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//         {/* <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails> */}
//                    </AccordionItem>
// </Accordion>
//       </MDBCol>
//       {/* </Accordion> */}
//       <MDBCol sm='2' style ={{flex:" 0 0 59.666667%",maxWidth: "32.666667%",}}>
//       <Accordion style ={{ border: "1px solid white"}} allowZeroExpanded>
//             <AccordionItem>
//                 <AccordionItemHeading>
//                     <AccordionItemButton style ={{backgroundColor:"white"}}>
//         <MDBCard style ={{marginLeft:"40px"}}>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#' style ={{    backgroundColor: "#cb9b51",}}>Go somewhere</MDBBtn>
//           </MDBCardBody>
          
//         </MDBCard>
//         </AccordionItemButton>
//                 </AccordionItemHeading>
                
//         <AccordionItemPanel>
//                     <p>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//         {/* <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails> */}
//                    </AccordionItem>
// </Accordion>
//       </MDBCol>
//       <MDBCol sm='2' style ={{flex:" 0 0 59.666667%",maxWidth: "32.666667%",}}>
//       <Accordion style ={{ border: "1px solid white"}} allowZeroExpanded>
//             <AccordionItem>
//                 <AccordionItemHeading>
//                     <AccordionItemButton style ={{backgroundColor:"white"}}>
//         <MDBCard style ={{marginLeft:"40px"}}>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#' style ={{    backgroundColor: "#cb9b51",}}>Go somewhere</MDBBtn>
//           </MDBCardBody>
          
//         </MDBCard>
//         </AccordionItemButton>
//                 </AccordionItemHeading>
                
//         <AccordionItemPanel>
//                     <p>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//         {/* <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails> */}
//                    </AccordionItem>
// </Accordion>
//       </MDBCol>
//       <MDBCol sm='2' style ={{flex:" 0 0 59.666667%",maxWidth: "32.666667%",}}>
//       <Accordion style ={{ border: "1px solid white"}} allowZeroExpanded>
//             <AccordionItem>
//                 <AccordionItemHeading>
//                     <AccordionItemButton style ={{backgroundColor:"white"}}>
//         <MDBCard style ={{marginLeft:"40px"}}>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#' style ={{    backgroundColor: "#cb9b51",}}>Go somewhere</MDBBtn>
//           </MDBCardBody>
          
//         </MDBCard>
//         </AccordionItemButton>
//                 </AccordionItemHeading>
                
//         <AccordionItemPanel>
//                     <p>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//         {/* <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails> */}
//                    </AccordionItem>
// </Accordion>
//       </MDBCol>
//       <MDBCol sm='2' style ={{flex:" 0 0 59.666667%",maxWidth: "32.666667%",}}>
//       <Accordion style ={{ border: "1px solid white"}} allowZeroExpanded >
//             <AccordionItem>
//                 <AccordionItemHeading>
//                     <AccordionItemButton style ={{backgroundColor:"white"}}>
//         <MDBCard style ={{marginLeft:"40px"}}>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#' style ={{    backgroundColor: "#cb9b51",}}>Go somewhere</MDBBtn>
//           </MDBCardBody>
          
//         </MDBCard>
//         </AccordionItemButton>
//                 </AccordionItemHeading>
                
//         <AccordionItemPanel>
//                     <p>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//         {/* <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails> */}
//                    </AccordionItem>
// </Accordion>
//       </MDBCol>
//       <MDBCol sm='2' style ={{flex:" 0 0 59.666667%",maxWidth: "32.666667%",}}>
//       <Accordion style ={{ border: "1px solid white"}} allowZeroExpanded>
//             <AccordionItem>
//                 <AccordionItemHeading>
//                     <AccordionItemButton style ={{backgroundColor:"white"}}>
//         <MDBCard style ={{marginLeft:"40px"}}>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#' style ={{    backgroundColor: "#cb9b51",}}>Go somewhere</MDBBtn>
//           </MDBCardBody>
          
//         </MDBCard>
//         </AccordionItemButton>
//                 </AccordionItemHeading>
                
//         <AccordionItemPanel>
//                     <p>
//                         Exercitation in fugiat est ut ad ea cupidatat ut in
//                         cupidatat occaecat ut occaecat consequat est minim minim
//                         esse tempor laborum consequat esse adipisicing eu
//                         reprehenderit enim.
//                     </p>
//                 </AccordionItemPanel>
//         {/* <AccordionDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </AccordionDetails> */}
//                    </AccordionItem>
// </Accordion>
//       </MDBCol>
//       {/* <MDBCol sm='3'>
//         <MDBCard>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#'>Go somewhere</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol><MDBCol sm='3'>
//         <MDBCard>
//           <MDBCardBody>
//             <MDBCardTitle>Special title treatment</MDBCardTitle>
//             <MDBCardText>
//               With supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//             <MDBBtn href='#'>Go somewhere</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol> */}
//     </MDBRow>
//     </MDBCard>
//     </div>
//   );
// }

// // export default function Headercontent() {
// //     return (
// //         <div>
            
// //         </div>
// //     )
// // }






// import "../../css/main.css";
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { ButtonGroup } from 'react-bootstrap-buttons';
// import "../../css/button.css"



// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });
// const data = [
//   {
//     id: "1",
//     key: "1",
//     title: "Title1",
//     text: "Text1.",
//     img: "1.jpg"
//   },
//   {
//     id: "1",
//     key: "1",

//     img: "1.jpg"
//   },
//   {
//     id: "1",
//     key: "1",

//     img: "1.jpg"
//   },
//   {
//     id: "2",
//     key: "2",
//     title: "Title2",
//     text: "Text2.",
//     img: "2.jpg"
//   },
//   {
//     id: "3",
//     key: "3",
//     title: "Title3",
//     text: "Text3.",
//     img: "3.jpg"
//   },
//   {
//     id: "4",
//     key: "4",
//     title: "Title4",
//     text: "Text4",
//     img: "4.jpg"
//   }
// ];



// function greeting() {
  
//         }

// function waveHello() {
//   console.log('👋');
// }



// export default function Ourpartner() {
//   const [toggle, setToggle] = useState("1");

//   const classes = useStyles();
//   // const images = [C1, C2, C3, C4, C5, C6];
//   return (
//     <div className="card-columns">
//     <div className="card">
//       <img src="..." className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">Card title that wraps to a new line</h5>
//         <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//     <div className="card p-3">
//       <blockquote className="blockquote mb-0 card-body">
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//         <footer className="blockquote-footer">
//           <small className="text-muted">
//             Someone famous in <cite title="Source Title">Source Title</cite>
//           </small>
//         </footer>
//       </blockquote>
//     </div>
//     <div className="card">
//       <img src="..." className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
//         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//     <div className="card bg-primary text-white text-center p-3">
//       <blockquote className="blockquote mb-0">
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
//         <footer className="blockquote-footer text-white">
//           <small>
//             Someone famous in <cite title="Source Title">Source Title</cite>
//           </small>
//         </footer>
//       </blockquote>
//     </div>
//     <div className="card text-center">
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This card has a regular title and short paragraphy of text below it.</p>
//         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//     <div className="card">
//       <img src="..." className="card-img-top" alt="..." />
//     </div>
//     <div className="card p-3 text-right">
//       <blockquote className="blockquote mb-0">
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//         <footer className="blockquote-footer">
//           <small className="text-muted">
//             Someone famous in <cite title="Source Title">Source Title</cite>
//           </small>
//         </footer>
//       </blockquote>
//     </div>
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">Card title</h5>
//         <p className="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
//         <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
//   );
// }
