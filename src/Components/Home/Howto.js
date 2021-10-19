// import React from 'react';
// import shopdata  from "./shop-data"
// import {P} from "../../Components/Addcart/P"
// import ListedItems  from "../../Components/Addcart/ListedItems"

// const useSortableData = (items, config = null) => {
//   const [sortConfig, setSortConfig] = React.useState(config);

//   const sortedItems = React.useMemo(() => {
//     let sortableItems = [...items];
//     if (sortConfig !== null) {
//       sortableItems.sort((a, b) => {
//         if (a[sortConfig.key] < b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? -1 : 1;
//         }
//         if (a[sortConfig.key] > b[sortConfig.key]) {
//           return sortConfig.direction === 'ascending' ? 1 : -1;
//         }
//         return 0;
//       });
//     }
//     return sortableItems;
//   }, [items, sortConfig]);

//   const requestSort = (key) => {
//     let direction = 'ascending';
//     if (
//       sortConfig &&
//       sortConfig.key === key &&
//       sortConfig.direction === 'ascending'
//     ) {
//       direction = 'descending';
//     }
//     setSortConfig({ key, direction });
//   };

//   return { items: sortedItems, requestSort, sortConfig };
// };

// const ProductTable = (props) => {
//   const { items, requestSort, sortConfig } = useSortableData(props.products);
//   const getClassNamesFor = (name) => {
//     if (!sortConfig) {
//       return;
//     }
//     return sortConfig.key === name ? sortConfig.direction : undefined;
//   };
//   return (
//     <div>
//     <div className="dropdown">
//   <button className="dropbtn">Dropdown</button>
//   <div className="dropdown-content">
//   <a href="#"><button type="button" onClick={() => requestSort('name')} className={getClassNamesFor('name')} >Name</button></a>
//   <a href="#"><button
//               type="button"
//               onClick={() => requestSort('price')}
//               className={getClassNamesFor('price')}
//             >
//               Price
//             </button></a>
//   <a href="#">Link 3</a>
//   </div>
// </div>

// </div>
  
//   );
// };

// export default function Howto() {
//   return (
//     <div className="App">
//       <ListedItems />
//     </div>
//   );
// }






// // import React, { Component } from "react";
// // import { Grid, Typography, isWidthUp, withWidth, Box } from "@material-ui/core";
// // import '../../css/Howto.css'

// // export class Howto extends Component {
// //   constructor () {
// //     super()
  
// //   }
// //   render() {
// //     return (
// // //       <div id="workingsection" className="text-center">
// // //          <div className="section-title">
// // //             <Typography
// // //               align="center"
// // //               className="lg-mg-bottom-service"
// // //               style={{
// // //                 fontWeight: "800",
// // //                 color: "black",
// // //                 fontSize: "40px",
// // //                 textAlign: "center",
// // //               }}
// // //               variant={isWidthUp("lg") ? "h3" : "h4"}
// // //             >
// // //               How to use <span style={{ color: "khaki" }}> .gold</span>
// // //             </Typography>
// // //           </div>

// // //           <div className="wrapper">
 
// // //   <div className="cols">
// // //     <div className="col" ontouchstart="this.classList.toggle('hover');">
// // //       <div className="container">
// // //         <div className="front" style={{backgroundImage: 'url(https://unsplash.it/500/500/)'}}>
// // //           <div className="innertext">
// // //             <p>For a new company</p>
// // //             <span>Lorem ipsum</span>
// // //           </div>
// // //         </div>
// // //         <div className="back">
// // //           <div className="innertext">
// // //             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat.</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //     <div className="col" ontouchstart="this.classList.toggle('hover');">
// // //       <div className="container">
// // //         <div className="front" style={{backgroundImage: 'url(https://unsplash.it/505/505/)'}}>
// // //           <div className="innertext">
// // //             <p>For a rebrand</p>
// // //             <span>Lorem ipsum</span>
// // //           </div>
// // //         </div>
// // //         <div className="back">
// // //           <div className="innertext">
// // //             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //     <div className="col" ontouchstart="this.classList.toggle('hover');">
// // //       <div className="container">
// // //         <div className="front" style={{backgroundImage: 'url(https://unsplash.it/502/502/)'}}>
// // //           <div className="innertext">
// // //             <p>For a campaign</p>
// // //             <span>Lorem ipsum</span>
// // //           </div>
// // //         </div>
// // //         <div className="back">
// // //           <div className="innertext">
// // //             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit.</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //     <div className="col" ontouchstart="this.classList.toggle('hover');">
// // //       <div className="container">
// // //         <div className="front" style={{backgroundImage: 'url(https://unsplash.it/503/503/)'}}>
// // //           <div className="innertext">
// // //             <p>For a URL shortener</p>
// // //             <span>Lorem ipsum</span>
// // //           </div>
// // //         </div>
// // //         <div className="back">
// // //           <div className="innertext">
// // //             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat .</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
   
 
  
  
// // //   </div>
// // // </div>


// // //       </div>
// //     );
// //   }
// // }

// // export default Howto;
