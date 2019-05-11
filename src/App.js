import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
  //Redirect
} from "react-router-dom";
import MyStory from "./Pages/MyStory/MyStory";
import Expertise from "./Pages/Expertise/Expertise";
import Representation from "./Pages/Representation/Representation";
import Network from "./Pages/Network/Network";
import "./App.css";

class App extends PureComponent {
  state = {
    open: false
  };
  setIcon=(arg)=>{
    let navMarkers = document.getElementsByClassName(`iconMarker`);
    for(let d=0;d< navMarkers.length; d++){
      if(navMarkers[d].className.indexOf("hidden") === -1){
        navMarkers[d].className += " hidden";
      }
    }
    
    
   
    navMarkers = document.getElementsByClassName(`iconMarker top${arg}`);
    for(let d=0;d< navMarkers.length; d++){
      navMarkers[d].className = navMarkers[d].className.replace("hidden", "");
    }
    
     
  }
  render() {
    return (
      <Router>
        <div className="App row">
          <section className="mainWrapper">
            <div className="leftSide col white-text text-left">
              <h4>Kurt Cooney</h4>
              <p>
                full stack
                developer/
                <br />
                student of life
              </p>
              <p>
                {" "}
                <a href="mailTo:krtcotmo2@gmail.com">
                  <i className="tiny material-icons">email</i>{" "}
                  krtcotmo2@gmail.com
                </a>
              </p>
              <p>
                {" "}
                <a href="tel:+16785573075">
                  <i className="tiny material-icons">phone_android</i>{" "}
                  678.557.3075
                </a>
              </p>
            </div>
            <div className="nav col">
              <div className="sideholder lt">
                <div className="iconMarker top1"/>
                <div className="iconMarker top2 hidden"/>
                <div className="iconMarker top3 hidden"/>
                <div className="iconMarker top4 hidden"/>
              </div>
              <div className="sideholder rt">
              <div className="iconMarker top1"/>
                <div className="iconMarker top2 hidden"/>
                <div className="iconMarker top3 hidden"/>
                <div className="iconMarker top4 hidden"/>
              </div>
             
              <div className="mintGreen">
                <Link to="/" onClick={() => this.setIcon(1)}><img alt="My Story" src="./images/mongoIcon.png"/></Link>
                <Link to="/Expertise" onClick={() => this.setIcon(2)}><img alt="Expertise" src="./images/expressIcon.png"/></Link>
                <Link to="/Representation" onClick={() => this.setIcon(3)}><img alt="Representation" src="./images/reactIcon.png"/></Link>
                <Link to="/Network" onClick={() => this.setIcon(4)}><img alt="Network" src="./images/nodeIcon.png"/></Link>
              </div>
            </div>
            <Switch>
              <Route exact path="/" component={MyStory} />
              <Route exact path="/Expertise" component={Expertise} />
              <Route exact path="/Representation" component={Representation} />
              <Route exact path="/Network" component={Network} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
