import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Route } from "react-router-dom";
import "./App.css";

import {Main} from "./components";
import {Resume} from "./components";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Main} />
        <Route exact path="/resume" component={Resume} />
      </React.Fragment>
      
    );
  }
}

export default App;