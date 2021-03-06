import React, { Component } from "react";
import Navbar from "../Navbar"
import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";
import { Card, CardBody } from "shards-react";
import { Button } from "shards-react";
import 'firebase/firestore';
import { db } from '../Firebase'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            fullname: "",
            message: "",
            inquiryCount: ""
        };
    }
    setInquiryCount (){
        db.collection('users').get().then(data => {
            if (data.docs){
                this.setState({
                inquiryCount: (1 + data.docs.length).toString(16)})
                }
            else {
                this.setState({inquiryCount: "1"})
            }
            })
    }
    handleSubmit() {
        this.setInquiryCount()
    }
    componentDidMount() {
        this.setInquiryCount()
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
        const userRef = db.collection("users").doc("submission" + this.state.inquiryCount ).set({
            fullname: this.state.fullname,
            email: this.state.email,
            message: this.state.message
        });
        this.setState({
            fullname: "",
            email: "",
            message: ""
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
                                        required
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
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="#testArea">Message</label>
                                    <FormTextarea
                                        id="#name"
                                        type="text"
                                        name="message"
                                        onChange={this.updateInput}
                                        value={this.state.message}
                                        required
                                    />
                                </FormGroup>
                                <Button 
                                type="submit" 
                                outline pill theme="secondary" 
                                onSubmit={this.handleSubmit()}
                                >
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