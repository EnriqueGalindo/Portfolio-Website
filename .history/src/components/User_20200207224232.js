import React from 'react';
import TextArea from "./TextArea"
import { Form, FormInput, FormGroup } from "shards-react";
import { Card, CardBody } from "shards-react";
import { Button } from "shards-react";
import 'firebase/firestore';
import firebaseApp, { db } from '../conf/Firebase'

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      fullname: ""
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addUser = e => {
    e.preventDefault();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      fullname: this.state.fullname,
      email: this.state.email
    });
    this.setState({
      fullname: "",
      email: ""
    });
  };

  render() {
    return (
      <Card className="contactCardStyle">
        <CardBody className="aboutCardBodyStyle">
          <Form>
            
            <form onSubmit={this.addUser}>
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                onChange={this.updateInput}
                value={this.state.fullname}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                onChange={this.updateInput}
                value={this.state.email}
              />
              <input
                type="text"
                name="message"
                placeholder="email"
                onChange={this.updateInput}
                value={this.state.email}
              />
              <button type="submit">Submit</button>
            </form>
            );
          }
       }
export default User;