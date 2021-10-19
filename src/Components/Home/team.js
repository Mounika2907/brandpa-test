import React from "react";
import "../../css/main.css";
import ImageGrid from "react-image-grid-animator";
import C1 from "../../images/compa-1.png";
import C2 from "../../images/compa-2.png";
import C3 from "../../images/compa-3.png";
import C4 from "../../images/compa-4.png";
import C5 from "../../images/compa-5.png";
import C6 from "../../images/compa-3.png";

export default function Ourpartner() {
  const images = [C1, C2, C3, C4, C5, C6];
  return (
    <div>
      <section className="company-part" style ={{marginTop:"-20px"}}>
      <h4 style ={{     fontSize:"25px", fontWeight:"700",marginBottom:"40px", textAlign:"center"}}>
            All purchases are secured by SSL encryption
           </h4>   
        <div className="container">
        
          {/* <a href="#">
              <img src={C1} alt="compa-1" />
            </a>
            <a href="#">
              <img src={C2} alt="compa-2" />
            </a>
            <a href="#">
              <img src={C3} alt="compa-3" />
            </a>
            <a href="#">
              <img src={C4} alt="compa-4" />
            </a>
            <a href="#">
              <img src={C5} alt="compa-5" />
            </a> */}

          <ImageGrid
            images={images}
            visibleCount={5}
            interval={2000}
            animationItemcount={0}
            transitionType={"FADE_AND_SCALE"}
            transitionDuration={200}
            isActive={true}
            width="100%"
          />
        </div>
      </section>
    </div>
  );
}






// import React from "react";
// import ImageGrid from "react-image-grid-animator";
// import i1 from "../../images/logos/1.png";
// import i2 from "../../images/logos/2.png";
// import i3 from "../../images/logos/3.png";
// import i4 from "../../images/logos/4.png";
// import i5 from "../../images/logos/5.png";
// import i6 from "../../images/logos/6.png";
// import i7 from "../../images/logos/7.png";
// import i8 from "../../images/logos/8.png";
// import i9 from "../../images/logos/9.png";
// import i10 from "../../images/logos/10.png";
// import i11 from "../../images/logos/11.png";
// import i12 from "../../images/logos/12.png";
// import i13 from "../../images/logos/13.svg";
// import i14 from "../../images/logos/14.svg";
// import i15 from "../../images/logos/15.png";

// export default function Team() {
//   const images = [
//     i1,
//     i2,
//     i3,
//     i4,
//     i5,
//     i6,
//     i7,
//     // i8,
//     // i9,
//     // i10,
//     // i11,
//     // i12,
//     // i13,
//     // i14,
//     // i15
//   ];
//   return (
//     <div>
//       <section id="Ourpartners" style ={{backgroundColor:"white",     marginBottom: "121px",}}>
//       <h3 style ={{    padding: "48px", fontSize:"20px", fontWeight:"900"}}>
//             All purchases are secured by SSL encryption
//           </h3>        <ImageGrid
//           images={images}
//           visibleCount={7}
//           interval={2000}
//           animationItemcount={0}
//           transitionType={"FADE_AND_SCALE"}
//           transitionDuration={200}
//           isActive={true}
//          style ={{width:"100%", marginBottom:"110px", marginLeft:"30px"}}
//         />
//       </section>
//     </div>
//   );
// }














// // import React from 'react'
// // import "../../css/team.css"
// // import pro1 from "./images.jpg";
// // import pro2 from "./profile.jpg";
// // import pro3 from "./profile2.jpg";


// // export default function Team() {
// //   return (
// //     <div>
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-md-3 col-sm-6">
// //             <div className="ourteam">
// //               <div className="image">
// //                 <img src={pro1} />
// //               </div>
// //               <div className="team-content">
// //                 <h3 className="title">Williamson</h3>
// //                 <span className="post">Web Developer</span>
// //                 <ul className="social">
// //                   <li><a href="#" className="fab fa-facebook" /></li>
// //                   <li><a href="#" className="fab fa-twitter" /></li>
// //                   <li><a href="#" className="fab fa-google-plus" /></li>
// //                   <li><a href="#" className="fab fa-skype" /></li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-3 col-sm-6">
// //             <div className="ourteam">
// //               <div className="image">
// //                 <img src={pro2} />
// //               </div>
// //               <div className="team-content">
// //                 <h3 className="title">Kristiana</h3>
// //                 <span className="post">Web Designer</span>
// //                 <ul className="social">
// //                   <li><a href="#" className="fab fa-facebook" /></li>
// //                   <li><a href="#" className="fab fa-twitter" /></li>
// //                   <li><a href="#" className="fab fa-google-plus" /></li>
// //                   <li><a href="#" className="fab fa-skype" /></li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="col-md-3 col-sm-6">
// //             <div className="ourteam">
// //               <div className="image">
// //                 <img src={pro3} />
// //               </div>
// //               <div className="team-content">
// //                 <h3 className="title">Kristiana</h3>
// //                 <span className="post">Web Designer</span>
// //                 <ul className="social">
// //                   <li><a href="#" className="fab fa-facebook" /></li>
// //                   <li><a href="#" className="fab fa-twitter" /></li>
// //                   <li><a href="#" className="fab fa-google-plus" /></li>
// //                   <li><a href="#" className="fab fa-skype" /></li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //     </div>
// //   )
// // }
