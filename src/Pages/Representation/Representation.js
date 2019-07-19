import React from "react";
import { Carousel } from "react-materialize";
import Project from "../../components/Project/Project"
import "./Representation.css";

export default function Representation() {  
  const detailArray = [
    `<p><b>Problem:</b> Small business needs a quick and easy system to track inventory and needs it to be accessible at ant place, any time.</p>
    <p><b>Solution:</b> Count Stocklua tracks inventory levels every time an item is scanned for a sale. API's send out text messages to the inventory manager any time the levels drop below a predetermined level.</p>
    <p>Managers can scan in items to increase/adjust the store’s inventory or add new items into the inventory list. Dashboards provide a quick glance for items that are low or out of stock across numerous stores.</p>`,
    `<p><b>Problem:</b> Most people do not track what services has been performed on their vehicle. This can result in unnecessary repairs or worse yet, missed maintenance resulting in extensive damage and costly repairs</p>
    <p><b>Solution:</b> Automate helps users track the services completed on their vehicle and offers a search tool for a quick and easy way to find any service performed on the vehicle.<p>
    <p>By tracking your fuel consumption and mileage, Automate helps keep you on schedule with regular maintenance reminders. The tool also allows you to track multiple vehicles and allows you to store important information about those vehicles such as VIN number, tire size, wiper blade size, etc. All the data is stored in one convenient place and can be queried as long as there is a wireless connection, mobile or wi-fi.</p>`,

    `<p><b>Problem:</b> Keeping track of your next book or what you have read can be an issue for avid readers.</p>
    <p><b>Solution:</b> The React library allows the user to store the books they have read or want to read as part of their favorites. The tool also helps the user find that next great book in two different ways. First the application automatically pulls up the NY Times Best seller list as a way of promoting the latest and greatest books released. If that does not excite the user, they can search Google’s massive listings of books by searching for titles, authors or key words.</p>
    <p>The user can click on the title of any book to open up a window linking to Google’s data repository to see further details on the selection.</p>`,
    `<p><b>Problem:</b> When trying to predict a mock draft it can be difficult to keep track of who went where and who is the next best at any given position.</p>
    <p><b>Solution:</b> The NFL Draft board shows a complete list (albeit fictional) of potential players that are part of a draft. Each player "card" displays their name, position and a rating based on expert evaluations. It is possible that the user may disagree with that rating so the draft board allows them to edit the rating of a player by accessing the “Edit Player” page.</p>
    <p>The user can start drafting players for each team by clicking on the player on the left and then clicking the Draft Player button. A drop-dowm menu above the available players allows the user to filter on just one position. Once a player is drafted, they move to the right side of the board with the team logo next to their name.</p>
    <p><b>Happy Mock Drafting</b></p>`,
    `<p><b>Problem:</b> Company leadership couldn't calculate monthly commissions without spending hours, exporting and compiling excel spreadsheets.</p>
    <p><b>Solution:</b> By getting access to the back end of ConnectWise, I developed a dashboard that allows users to review all sales they have completed for any given date range. It breaks down the sakes based on the payment of the invoice, the type of sale, the company and the product. The commissions levels of sales change based on who the sales manager and originator are as well as total dollar figures sold by the manager. Sales resulting in a loss lower commissions. The sales managers can see and export their own data to an excel spreadsheet. The sales directors can view the progress of any of their direct reports.</p>
    <p>Due to the sensitive information within the application, the real application can not be viewed although redacted screenshots can be seen by clicking on the interaction image.</p>    `,
    `<p><b>Problem:</b> The sales team needed a clear way to look at the tech support team and determine what assets were available at any given day.</p>
    <p><b>Solution:</b> The backend database with ConnectWise drives data in this interaction. API calls get lists of all opportunities in the sales cycle and lists them out in order showing the most promising and immediate items first.</p>
    <p>Each opportunity is listed out with important details related to the scheduling of the event. People driving the project are linked for email and phone numbers are also listed. Important documents linked to the opportunity are also accessible through the interface.</p>
    <p>By clicking on the calendar icon, a chart is displayed showing people scheduled to work on the project. It shows the capacity level for the teams and lets the sales force know when resources are available and allow them to better schedule events. This has reduced double bookings of resources and the need to reschedule and delay services on new projects.</p> `
  ];

  const showModal = title => {
    const modal = document.getElementById("detailmodal");
    modal.className += " modalOpen";
    const contentHolder = document.getElementById("details");
    if(title.startsWith('Inventory')){
      contentHolder.innerHTML = detailArray[0];
    }else if(title.startsWith('Car')){
      contentHolder.innerHTML = detailArray[1];    
    }else if(title.startsWith('React')){
      contentHolder.innerHTML = detailArray[2];    
    }else if(title.startsWith('NFL')){
      contentHolder.innerHTML = detailArray[3];    
    }else if(title.startsWith('Connectwise Commission')){
      contentHolder.innerHTML = detailArray[4];    
    }else if(title.startsWith('Connectwise Capacity')){
      contentHolder.innerHTML = detailArray[5];   
    }
  }
  const hideModal = () =>{  
    let modal = document.getElementById("detailmodal");
    modal.className = modal.className.replace("modalOpen", "");
  }

  return (
    <div className="mainContent col">     
      <h4 className="repHeader">Representation</h4>
      <Carousel options={{ fullWidth: true, indicators: true }} className="center col m11 l7">        
        <Project showModal={showModal} stack="reactStack.png" tech="Node.js express, MongoDB, React" img="cntStockula.png" title="Inventory Management" link="https://count-stockula.herokuapp.com/Scan"/>
        <Project showModal={showModal} stack="hbars.png" tech="Node.js express, MySql, handlebars.js" img="autoMate.png" title="Car Maintenace Application" link="https://autoproject2.herokuapp.com/"/>
        <Project showModal={showModal} stack="reactStack.png" tech="Node.js express, MongoDB, React" img="library.png" title="React Library with Favorites" link="https://react-myreading-library.herokuapp.com/"/>
        <Project showModal={showModal} stack="hbars.png" tech="Node.js express, MySql, handlebars.js" img="nflDraft.png" title="NFL Draft Board" link="https://nfldraft-krc.herokuapp.com/"/>
        <Project showModal={showModal} stack="cSharp.png" tech="C#, HTML5, Bootstrap, Sql Server" img="commDashboardTile.png" title="Connectwise Commission Report" link="https://krtcotmo2.github.io/csharpexample/"/>
        <Project showModal={showModal} stack="cSharpJs.png" tech="C#, HTML5, Bootstrap, Sql Server" img="ocdTile.png" title="Connectwise Capacity Charts" link="https://krtcotmo2.github.io/csharpexample/ocd.html"/>
      </Carousel>
      <img className="mernQuad hide-on-med-and-down" alt="MERN Stack" src="./images/mernQuads.png" />
      <div className="tagLine">React</div>

      {/* MODAL WINDOOW */}
      <div id="detailmodal" className="modal center-align">
        <div className="modal-content">   
          <div id="details">    
           
          </div>   
        </div>
        <div className="modal-footer">
          <button className="btn-small" onClick={hideModal}>
            Close
          </button>
        </div>
       
      </div>
    </div>
  );
}
