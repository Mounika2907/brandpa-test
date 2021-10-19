import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-bootstrap";
import "../../css/heading.css"
import background from "../../images/2.mp4"
import background1 from "../../images/cloth.mp4"
import "../../css/search.css"
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';

import PropTypes from 'prop-types';


// For the search only version
import algoliasearch from 'algoliasearch/lite';

// const searchClient = algoliasearch(
//   'B1G2GM9NG0',
//   'aadef574be1f9252bb48d4ea09b5cfe5'
// );

export default function Mainheader() {
    return (
        <div>
            <>
  <header style ={{top:"0px"}}>
    <div className="overlay" />
    <video
      playsInline="playsinline"
      autoPlay="autoplay"
      muted="muted"
      loop="loop"
    >
      <source
        src={background1}
        type="video/mp4"
      />
    </video>
    <div className="container h-100">
      <div className="d-flex h-100 text-center align-items-center">
        <div className="w-100 text-white">
        <h3 style ={{color:"white",fontWeight:"700px",fontSize:"20px",fontSize: "33px", fontWeight: "900",padding:"30px",marginLeft:"4px",  fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif",
}}>Find the perfect domain for your startup</h3>
                    <div class="topnav">
  
                      <div className="search-container">
                      {/* <InstantSearch indexName="demo_ecommerce" style ={{marginTop:"20px"}} searchClient={searchClient}>
         
         <div className="right-panel">
           <SearchBox />
           <Hits hitComponent={Hit} /> 
           <Pagination />
         </div>
       </InstantSearch>  */}
                      <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s" 
            style ={{padding: "14px", paddingLeft: "616px",}}
            // searchClient={searchClient}
        />
        <button type="submit" style ={{padding: "14px",paddingLeft: "43px",textAlign: "center",marginTop: "-2px", backgroundColor:"#2a84f2", borderRadius:"4px",fontSize:"24px",     paddingTop: "10px"}}><span style ={{    marginRight: "27px", color:"white"}}>Search</span></button>
    </form>
                        {/* <form action="/names" style ={{position: "relative", paddingRight: "160px",}}>
                          <input type="text" placeholder="Search.." name="search" style={{paddingTop:"19px", paddingLeft:"685px",marginLeft:"185px"}}/>
                          <button type="submit" style ={{position: "absolute",marginLeft: "-37px",color: "black",marginTop: "14px",}}><i class="fa fa-search"></i></button>
                        </form> */}
                      </div>
                    </div>
                    <p style ={{fontSize: "17px",  fontFamily:" 'Mulish', sans-serif",padding:"28px",}}>We sell premium domain names for new businesses and brands. How it works.</p>
        </div>
      </div>
    </div>
  </header>
 
</>

            {/* <>
                <div className="header">
                    <h1>Header</h1>
                    <p>My supercool header</p>
                </div>

            </> */}
            {/* <section className="company-part">
                <div className="container">
                    <div style={{ marginLeft: "-13px", background: "#080c47", position: "absolute" }}>
                        <div class="header" style={{ background: "linear-gradient(to bottom, #441196 20%, #080c47 120%)", padding: "100px", textAlign: "center", top: "120px", width: "100%" }}>
                            <h2 style={{ color: "white" }}>Find the perfect domain for your startup</h2>


                            <form action="/names" id="search-form">
                                <div className="search-control">
                                    <input type="text" name="search" placeholder="Search by keyword, e.g. tech, beauty" aria-label="Search by keyword, e.g. tech, beauty" autofocus data-hj-whitelist defaultValue style={{
                                        paddingLeft: "300px", paddingTop: "17px",
                                        marginTop: "11px"
                                    }} />
                                    <button type="submit"><i className="fa fa-search" style={{
                                        paddingTop: "20px",
                                        paddingLeft: "9px",
                                        paddingRight: "11px"
                                    }} /></button>
                                </div>
                            </form>
                            <p style={{ color: "white", margin: "30px 0", fontSize: "22px", color: "lightslategray", padding: "14px" }}>We sell premium domain names for new businesses and brands. How it works

                            </p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div >
    );
}

// function Hit(props) {
//   return (
//     <div>
//       <img src={props.hit.image} align="left" alt={props.hit.name} />
//       <div className="hit-name">
//         <Highlight attribute="name" hit={props.hit} />
//       </div>
//       <div className="hit-description">
//         <Highlight attribute="description" hit={props.hit} />
//       </div>
//       <div className="hit-price">${props.hit.price}</div>
//     </div>
//   );
// }

// Hit.propTypes = {
//   hit: PropTypes.object.isRequired,
// };