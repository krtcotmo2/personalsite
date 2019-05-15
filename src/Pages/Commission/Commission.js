import React from "react";
import { Carousel } from "react-materialize";

export default function Commission() {
  return (
    <div className="mainContent col">
      <h4>Representation</h4>
      <Carousel options={{ fullWidth: true, indicators: true }} className="center col m11 l7">        
        <img src="./images/cntStockula.png"/>
        <img src="./images/commDashboardTile.png"/>
      </Carousel>
      <img className="mernQuad" alt="MERN Stack" src="./images/mernQuads.png" />
      <div className="tagLine">React</div>
    </div>
  );
}
