import React from "react";

export default function MyStory(){
  return (
    <div className="mainContent col">
      <div className="element"></div>
      <h4>My Story</h4> 
      <p>I worked my way into development after degrees in advertising and graphic design. This started wtih HTML and Flash, trasitioned into CSS, Javascript and C#, SQL and more. I have produced varying levels of work from single static pages, to data driven dashboards, to full web applicaitons. While effecitve, it wasn't using current technologies. For that reason I entered Georgia Tech's bootcamp.</p>
      <p>In the program I have adopted to more modern approaches to development. During the journey, I have been able to streamline my efficiencies and gain new knowedge with numerous technologies. Now I am implenting with the MERN stack to control the development from start to finish. I control the routes, generate my own api calls, access and manipulate the data and render the infomation  for the end user.</p>
      <p>Now it is time to begin the next phase of my growth with in the field.</p>
      <img className="mernQuad" alt="MERN Stack" src="./images/mernQuads.png"/>
      <div className="tagLine">Mongo db</div>
    </div>        
  );
}