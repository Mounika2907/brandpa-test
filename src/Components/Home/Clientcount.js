import React from "react";
import "../../css/client.css";
// import Zoom from "react-reveal/Zoom";
// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

// const MyComponent = () => (
//   <>
//     <CountUp duration={8.75} end={849} redraw={true}>
//       {({ countUpRef, start }) => (
//         <VisibilitySensor onChange={start} delayedCall>
//           <span ref={countUpRef} />
//         </VisibilitySensor>
//       )}
//     </CountUp>
//   </>
// );

export default function Clientcount() {
  return (
    <div className="container-home secondary-container-home">
      <div className="container">
        <div className="text-center">
          <h3 className="small-title small-title-secondary">
            <a className="underline" href="/industries">
              Domain names by industry
            </a>
          </h3>
        </div>
        <div className="domain-grid">
          <a href="/industries/agriculture" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/uploads/459b73b8c2916c1ee18cf2e301a11959/Government.png" alt className="lazyload" />
            <h3>Agriculture</h3>
          </a>
          <a href="/industries/business" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/4802334fe93af8d9d198f540604edb18.png" alt className="lazyload" />
            <h3>Business</h3>
          </a>
          <a href="/industries/creative" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/87fa48806654a2179aa5df842e2cdc74.png" alt className="lazyload" />
            <h3>Creative</h3>
          </a>
          <a href="/industries/entertainment" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/uploads/4c2c86c6259a192fbae1f2bba800a81b/Entertainment.png" alt className="lazyload" />
            <h3>Entertainment</h3>
          </a>
          <a href="/industries/finance" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/aa8023e567efc67c892839f157d34fb0.png" alt className="lazyload" />
            <h3>Finance</h3>
          </a>
          <a href="/industries/government" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/uploads/2ab095ad6cf0a5315179f424f187451a/Government.png" alt className="lazyload" />
            <h3>Government</h3>
          </a>
          <a href="/industries/health" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/02e301b53dc1b69f4a4bfe2be5091d3e.png" alt className="lazyload" />
            <h3>Health</h3>
          </a>
          <a href="/industries/kids" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/4b51a06e0aecc14ac137c6e2924c9a32.png" alt className="lazyload" />
            <h3>Kids</h3>
          </a>
          <a href="/industries/manufacturing" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/uploads/890a871861de3022852d81b5253e39e0/Manufacturing.png" alt className="lazyload" />
            <h3>Manufacturing</h3>
          </a>
          <a href="/industries/marketing" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/64da9e8ffa7f20f5468abe635f3b96a7.png" alt className="lazyload" />
            <h3>Marketing</h3>
          </a>
          <a href="/industries/media" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/f0a15bba3cb00917b25b69b2b98aaadb.png" alt className="lazyload" />
            <h3>Media</h3>
          </a>
          <a href="/industries/shopping" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/uploads/3c886d0079ba9bbb78de21531e637981/Shopping.png" alt className="lazyload" />
            <h3>Shopping</h3>
          </a>
          <a href="/industries/social" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/868f096610de9521f8a2def50f0ea719.png" alt className="lazyload" />
            <h3>Social</h3>
          </a>
          <a href="/industries/technology" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/c9537866a1edced8cc72abbe7b4553e0.png" alt className="lazyload" />
            <h3>Technology</h3>
          </a>
          <a href="/industries/transport" className="industry">
            <img data-src="https://s3.amazonaws.com/logos.brandpa.com/images/fbe277edfe3f7b7dd83e77dcae6b27c4.png" alt className="lazyload" />
            <h3>Transport</h3>
          </a>
        </div>
        <div className="text-center">
          <h4>
            <a className="underline" href="/industries">All industries</a>
            |
            <a className="underline" href="/styles">All styles</a>
          </h4>
        </div>
      </div>
    </div>

  );
}
