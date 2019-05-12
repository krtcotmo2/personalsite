import React from "react";
import { Carousel } from "react-materialize";
import "./Representation.css";

export default function Representation() {
  return (
    <div className="mainContent col">
      <h4>Representation</h4>
      <Carousel options={{ fullWidth: true, indicators: true }} className="center col s7">
        <div className="">
          <h2>Inventory Management</h2>
          <p>This is your first panel</p>
          <a target='_blank' href="https://count-stockula.herokuapp.com/Scan">Inventory Management</a>
        </div>
        <div className="">
          <h2>Car Maintenace Application</h2>
          <p>This is your second panel</p>
          <a target='_blank' href="https://autoproject2.herokuapp.com/">Car Maintenace Application</a>
        </div>
        <div className="">
          <h2>Rect Library with Favorites</h2>
          <p>This is your second panel</p>
          <a target='_blank' href="https://react-myreading-library.herokuapp.com/">Rect Library with Favorites</a>
        </div>
        <div className="">
          <h2>NFL Draft Board</h2>
          <p>This is your second panel</p>
          <a target='_blank' href="https://nfldraft-krc.herokuapp.com/">NFL Draft Board</a>
        </div>  
        <div className="">
          <h2>Connectwise Commission Report</h2>
          <p>This is your second panel</p>
          <a target='_blank' href="https://nfldraft-krc.herokuapp.com/">Connectwise Commission Report</a>
        </div>  
        <div className="">
          <h2>Connectwise Capacity Charts</h2>
          <p>This is your second panel</p>
          <a target='_blank' href="https://nfldraft-krc.herokuapp.com/">Connectwise Capacity Charts</a>
        </div>    
      </Carousel>
      <img className="mernQuad" alt="MERN Stack" src="./images/mernQuads.png" />
      <div className="tagLine">React</div>
    </div>
  );
}
