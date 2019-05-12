import React, { Component } from "react";
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

const  createHistory = require('history').createBrowserHistory;
 


class App extends Component {
 
  state = {
    open: false,
    currentTab: 1
  };
  componentDidMount = () =>{
    switch(window.location.pathname.toLowerCase()){
      case "/":
      this.setIcon(1)
        break;
        case "/expertise":
        this.setIcon(2)
        break;
        case "/representation":
        this.setIcon(3)
        break;
        case "/network":
        this.setIcon(4)
        break;
        default:break;
    }
    window.onpopstate = (event)=> {
      switch(event.currentTarget.location.pathname.toLowerCase()){
        case "/":
        this.setIcon(1)
          break;
          case "/Expertise":
          this.setIcon(2)
          break;
          case "/Representation":
          this.setIcon(3)
          break;
          case "/Network":
          this.setIcon(4)
          break;
          default:break;
      }
    }
  }

  setIcon = (arg)=>{
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
    this.setState({currentTab:arg});
  }
  yourHandler = (previousRoute, nextRoute)=>{
    console.log("SSSS", previousRoute)
  }
  render() {
    return (
      <Router history={this.history}>
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
                <Link to="/" onClick={() => this.setIcon(1)} title="My Story"><img alt="My Story" src="./images/mongoIcon.png"/></Link>
                <Link to="/Expertise" onClick={() => this.setIcon(2)} title="Expertise"><img alt="Expertise" src="./images/expressIcon.png"/></Link>
                <Link to="/Representation" onClick={() => this.setIcon(3)} title="Representation"><img alt="Representation" src="./images/reactIcon.png"/></Link>
                <Link to="/Network" onClick={() => this.setIcon(4)} title="Networking"><img alt="Network" src="./images/nodeIcon.png"/></Link>
              </div>
            </div>
            <Switch>
                <Route exact path="/" component={MyStory}/>
                <Route exact path="/Expertise"  component={Expertise} />
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
