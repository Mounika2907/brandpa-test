// import React from 'react'
import "../../css/animate.css"
// import blog from "../../images/blog-1.jpg"
import blog1 from "../../images/blog-2.jpg"
import blog2 from "../../images/blog-3.jpg"
import blog3 from "../../images/blog-4.jpg"
import blog4 from "../../images/blog-5.jpg"
import blog5 from "../../images/blog-6.jpg"
import blog6 from "../../images/blog-7.jpg"
import blog7 from "../../images/blog-1.jpg"
// import blog8 from "../../images/about-image-2.png"

import React, { useState } from "react";

import "../../css/slots.css"

export default function Slots() {
  const [toggle, setToggle] = useState("1");
  return (
    <div id="aspect-content">
  <div className="aspect-tab ">
    <input id="item-18" type="checkbox" className="aspect-input" name="aspect" />
    <label htmlFor="item-18" className="aspect-label" />
    <div className="aspect-content">
      <div className="aspect-info">
        <div className="chart-pie negative over50">
          <span className="chart-pie-count">-69</span>
          <div>
            <div className="first-fill" />
            <div className="second-fill" style={{transform: 'rotate(249deg)'}} />
          </div>
        </div>
        <span className="aspect-name">Lorem ipsum</span>
      </div>
      <div className="aspect-stat">
        <div className="all-opinions">
          <span className="all-opinions-count">18</span>
          <span>opinion</span>
        </div>
        <div>
          <span className="positive-count">4</span>
          <span className="neutral-count">1</span>
          <span className="negative-count">13</span>
        </div>
      </div>
    </div>
    <div className="aspect-tab-content">
      <div className="sentiment-wrapper">
        <div>
          <div>
            <div className="positive-count opinion-header">
              <span>positive</span>
              <span>4</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="neutral-count opinion-header">
              <span>neutral</span>
              <span>1</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="negative-count opinion-header">
              <span>negative</span>
              <span>13</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="aspect-tab ">
    <input id="item-14" type="checkbox" className="aspect-input" name="aspect" />
    <label htmlFor="item-14" className="aspect-label" />
    <div className="aspect-content">
      <div className="aspect-info">
        <div className="chart-pie positive over50">
          <span className="chart-pie-count">58</span>
          <div>
            <div className="first-fill" />
            <div className="second-fill" style={{transform: 'rotate(209deg)'}} />
          </div>
        </div>
        <span className="aspect-name">Lorem ipsum dolor sit amet</span>
      </div>
      <div className="aspect-stat">
        <div className="all-opinions">
          <span className="all-opinions-count">22</span>
          <span>opinion</span>
        </div>
        <div>
          <span className="positive-count">12</span>
          <span className="neutral-count">5</span>
          <span className="negative-count">5</span>
        </div>
      </div>
    </div>
    <div className="aspect-tab-content">
      <div className="sentiment-wrapper">
        <div>
          <div>
            <div className="positive-count opinion-header">
              <span>positive</span>
              <span>12</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="neutral-count opinion-header">
              <span>neutral</span>
              <span>5</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="negative-count opinion-header">
              <span>negative</span>
              <span>5</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="aspect-tab ">
    <input id="item-2" type="checkbox" className="aspect-input" name="aspect" />
    <label htmlFor="item-2" className="aspect-label" />
    <div className="aspect-content">
      <div className="aspect-info">
        <div className="chart-pie positive">
          <span className="chart-pie-count">33</span>
          <div>
            <div className="first-fill" />
            <div className="second-fill" style={{transform: 'rotate(119deg)'}} />
          </div>
        </div>
        <span className="aspect-name">Lorem</span>
      </div>
      <div className="aspect-stat">
        <div className="all-opinions">
          <span className="all-opinions-count">7</span>
          <span>opinion</span>
        </div>
        <div>
          <span className="positive-count">3</span>
          <span className="neutral-count">2</span>
          <span className="negative-count">2</span>
        </div>
      </div>
    </div>
    <div className="aspect-tab-content">
      <div className="sentiment-wrapper">
        <div>
          <div>
            <div className="positive-count opinion-header">
              <span>positive</span>
              <span>3</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="neutral-count opinion-header">
              <span>neutral</span>
              <span>2</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="negative-count opinion-header">
              <span>negative</span>
              <span>2</span>
            </div>
            <div>
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id congue dolor. Vivamus eleifend vitae nunc sed tincidunt.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}


// export default function Slots() {
//     return (
      


//   const [toggle, setToggle] = useState("1");
//   return (
//     <div className="App">
//       {data.map(({ title, text, key, img }) => {
//         return (
//           <>
//             <div className="main">
//               <div className="text">
//                 <h1 onClick={() => setToggle(key)}>{title} </h1>
//                 {toggle === key ? (
//                   <>
//                     <p>{text}</p>
//                   </>
//                 ) : null}
//               </div>

//               <div className="img">
//                 {toggle === key ? (
//                   <>
//                     <img src={img} key={key} className="photo" />
//                   </>
//                 ) : null}
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </div>
//   );
// }

// //         <div>
// //             <section id="work" className="page-section page">
// //   <div className="container text-center">
// //     <div className="heading">
// //       <h3>Events</h3>
// //       <p style ={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, alias enim placeat earum quos ab.</p>
// //     </div>
// //     <div className="row">
// //       <div className="col-md-12">
// //         <div id="portfolio">
// //           <ul className="filters list-inline">
// //             <li> <a className="active" data-filter="*" href="#" style ={{color:"black"}}>All</a> </li>
// //             <li> <a data-filter=".photography" href="#" style ={{color:"black"}}>PIANO</a> </li>
// //             <li> <a data-filter=".branding" href="#" style ={{color:"black"}}>GUITAR</a> </li>
// //             <li> <a data-filter=".web" href="#" style ={{color:"black"}}>VIOLIN</a> </li>
// //           </ul>
// //           <ul className="items list-unstyled clearfix animated fadeInRight showing" data-animation="fadeInRight" style={{position: 'relative', height: 438}}>
// //             <li className="item branding" style={{position: 'absolute', left: 0, top: 0}}> <a href="images/work/1.jpg" className="fancybox"> <img src={blog} alt />
// //                 <div className="overlay"> <span>Etiam porta</span> </div>
// //               </a> </li>
// //             <li className="item photography" style={{position: 'absolute', left: 292, top: 0}}> <a href="images/work/2.jpg" className="fancybox"> <img src={blog1} alt />
// //                 <div className="overlay"> <span>Lorem ipsum</span> </div>
// //               </a> </li>
// //             <li className="item branding" style={{position: 'absolute', left: 585, top: 0}}> <a href="images/work/3.jpg" className="fancybox"> <img src={blog2} alt />
// //                 <div className="overlay"> <span>Vivamus quis</span> </div>
// //               </a> </li>
// //             <li className="item photography" style={{position: 'absolute', left: 877, top: 0}}> <a href="images/work/4.jpg" className="fancybox"> <img src={blog3} alt />
// //                 <div className="overlay"> <span>Donec ac tellus</span> </div>
// //               </a> </li>
// //             <li className="item photography" style={{position: 'absolute', left: 0, top: 219}}> <a href="images/work/5.jpg" className="fancybox"> <img src={blog4} alt />
// //                 <div className="overlay"> <span>Etiam volutpat</span> </div>
// //               </a> </li>
// //             <li className="item web" style={{position: 'absolute', left: 292, top: 219}}> <a href="images/work/6.jpg" className="fancybox"> <img src={blog5} alt />
// //                 <div className="overlay"> <span>Donec congue </span> </div>
// //               </a> </li>
// //             <li className="item photography" style={{position: 'absolute', left: 585, top: 219}}> <a href="images/work/7.jpg" className="fancybox"> <img src={blog6} alt />
// //                 <div className="overlay"> <span>Nullam a ullamcorper diam</span> </div>
// //               </a> </li>
// //             <li className="item web" style={{position: 'absolute', left: 877, top: 219}}> <a href="images/work/8.jpg" className="fancybox"> <img src={blog7} alt />
// //                 <div className="overlay"> <span>Etiam consequat</span> </div>
// //               </a> </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </section>

// //         </div>
//     )
// }
