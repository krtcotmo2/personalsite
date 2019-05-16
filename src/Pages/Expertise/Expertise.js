import React from "react";

export default function Expertise(){
  return (
    <div className="mainContent col">
      <div className="element"></div>
      <h4>Expertise</h4>
      <h5><strong>Old Hat:</strong></h5>
      <p><strong>Front End:</strong> Years of extensive work in HTML, CSS, Javascript, jQuery, D3, AJAX, Dashboards and more</p>
      <p><strong>Database:</strong> SQL</p>
      <p><strong>Backend:</strong> C#, .NET, Web Services</p>
      <h5><strong>New Leaf:</strong></h5>
      <p><strong>Front End:</strong> ES6, HandleBars, React, Bootstap, Materialize for quicker layout and condensed code</p>
      <p><strong>Database:</strong> MySQL and Sequelize, MongoDB and Mongoose, Linq and dbml for quicker, faster model creation and queries</p>
      <p><strong>Backend:</strong> Node.js, Express, NPM for extensive expandability</p>
      <img className="mernQuad hide-on-med-and-down" alt="MERN Stack" src="./images/mernQuads.png"/>
      <div className="tagLine">Express</div>
    </div>
  );
}