// import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import "../../css/styles.css";
import UAParser from "ua-parser-js";
import React, { Fragment } from "react";
import Simple from "./Simple";
import Section from "./Section";

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Implementation = ({ deviceType }) => {
  return (
    <Fragment>
      <Section>
        <h1 style ={{fontSize:"20px", textAlign:"center",fontSize:"30Px", fontWeight:"900"}}>Design concepts for goldomo.com</h1>
        <p style ={{textAlign:"center", fontSize:"18px"}}>Some examples of how this name could look in the real world. These incorporate the goldomo logo design that is included with this domain.</p>
        <Simple deviceType={deviceType} />
      </Section>
    </Fragment>
  );
};
Implementation.getInitialProps = ({ req }) => {
  let userAgent;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const parser = new UAParser();
  parser.setUA(userAgent);
  const result = parser.getResult();
  const deviceType = (result.device && result.device.type) || "desktop";
  return { deviceType };
};
export default Implementation;
