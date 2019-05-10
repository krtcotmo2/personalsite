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
            <div className="mintGreen col">
              <Link to="/"><img alt="My Story" src="./images/mongoIcon.png"/></Link>
              <Link to="/Expertise"><img alt="Expertise" src="./images/expressIcon.png"/></Link>
              <Link to="/Representation"><img alt="Representation" src="./images/reactIcon.png"/></Link>
              <Link to="/Network"><img alt="Network" src="./images/nodeIcon.png"/></Link>
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
