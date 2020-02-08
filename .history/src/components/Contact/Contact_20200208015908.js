import React, { Component } from "react";
import Navbar from "../Navbar"
import TextArea from "./TextArea"
import { Form, FormInput, FormGroup } from "shards-react";
import { Card, CardBody } from "shards-react";
import { Button } from "shards-react";
import 'firebase/firestore';
import firebaseApp, {db} from '../Firebase'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
         email: "",
         fullname: ""
         text
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
            <React.Fragment>
              <Card id="headerCard">
                        <CardBody >
                            <div >
                                <br></br>
                                <br></br>
                                <h1 align="center" style={{ color: "white" }}>Enrique Galindo</h1>
                                <hr></hr>
                                <p align="center" style={{ color: "white" }}>
                                    egalindo@protonmail.com •
                    <a className="link" href="https://github.com/EnriqueGalindo" style={{ color: "white" }}> github.com/EnriqueGalindo</a> •
                    <a className="link" href="https://www.linkedin.com/in/enrique-galindo-5970ab159/" style={{ color: "white" }}> EnriqueGalindo/linkedin</a>
                                </p>
                                <br></br>
                                Photo by Hunter James on Unsplash
                            </div>
                        </CardBody>   
                    </Card>

                {/* //this puts a break between the banner/navbar and the body of the page */}
                    <Navbar></Navbar>
                <div id="contact">
                    <Card className="contactCardStyle">
                        <CardBody className="aboutCardBodyStyle">
                            <Form onSubmit={this.addUser}>
                                <FormGroup>
                                    <label htmlFor="#name">Name</label>
                                    <FormInput 
                                    id="#name" 
                                    type="text"
                                    name="fullname"
                                    placeholder="Full name"
                                    onChange={this.updateInput}
                                    value={this.state.fullname}
                                  />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="#email">Email</label>
                                    <FormInput
                                    id="#email"
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    onChange={this.updateInput}
                                    value={this.state.email}
                                    />
                                </FormGroup>
                            
                            <TextArea
                            
                            >

                            </TextArea>
                            <Button type="submit" outline pill theme="secondary">
                                Submit
                        </Button>
                        </Form>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact