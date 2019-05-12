import React from "react";
import { Carousel } from "react-materialize";
import "./Representation.css";

export default function Representation() {
  return (
    <div className="mainContent col">
      <h4>Representation</h4>
      <Carousel options={{ fullWidth: true, indicators: true }} className="center col s7">
        <div className="">
          <h2>First Panel</h2>
          <p>This is your first panel</p>
        </div>
        <div className="">
          <h2>Second Panel</h2>
          <p>This is your second panel</p>
        </div>
        <div className="">
          <h2>Third Panel</h2>
          <p>This is your second panel</p>
        </div>
        <div className="">
          <h2>Fourth Panel</h2>
          <p>This is your second panel</p>
        </div>      
      </Carousel>

      <img className="mernQuad" alt="MERN Stack" src="./images/mernQuads.png" />
      <div className="tagLine">React</div>
    </div>
  );
}
