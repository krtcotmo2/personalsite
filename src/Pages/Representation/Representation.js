import React from "react";
import { Carousel } from "react-materialize";
import Project from "../../components/Project/Project"
import "./Representation.css";

export default function Representation() {
  return (
    <div className="mainContent col">
      <h4>Representation</h4>
      <Carousel options={{ fullWidth: true, indicators: true }} className="center col m11 l7">        
        <Project className="" stack="reactStack.png" tech="Node.js express, MongoDB, React" img="cntStockula.png" title="Inventory Management" link="https://count-stockula.herokuapp.com/Scan"/>
        <Project className="" stack="hbars.png" tech="Node.js express, MySql, handlebars.js" img="autoMate.png" title="Car Maintenace Application" link="https://autoproject2.herokuapp.com/"/>
        <Project className="" stack="reactStack.png" tech="Node.js express, MongoDB, React" img="library.png" title="Rect Library with Favorites" link="https://react-myreading-library.herokuapp.com/"/>
        <Project className="" stack="hbars.png" tech="Node.js express, MySql, handlebars.js" img="nflDraft.png" title="NFL Draft Board" link="https://nfldraft-krc.herokuapp.com/"/>
        <Project className="" stack="cSharp.png" tech="C#, HTML5, Bootstrap, Sql Server" img="commDashboardTile.png" title="Connectwise Commission Report" link="https://krtcotmo2.github.io/csharpexample/"/>
        <Project className="" stack="cSharpJs.png" tech="C#, HTML5, Bootstrap, Sql Server" img="ocdTile.png" title="Connectwise Capacity Charts" link="https://krtcotmo2.github.io/csharpexample/ocd.html"/>
      </Carousel>
      <img className="mernQuad hide-on-med-and-down" alt="MERN Stack" src="./images/mernQuads.png" />
      <div className="tagLine">React</div>
    </div>
  );
}
