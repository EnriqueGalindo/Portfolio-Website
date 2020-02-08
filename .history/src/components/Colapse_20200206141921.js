import React from "react";
import Button from "shards-react/button";
import Collapse from "shards-react/collapse";
import Navbar from "./Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class BasicCollapseExample extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle}>Toggle</Button>
        <Collapse open={this.state.collapse}>
          <div className="p-3 mt-3 border rounded">
           <Navbar></Navbar>
          </div>
        </Collapse>
      </div>
    );
  }
}