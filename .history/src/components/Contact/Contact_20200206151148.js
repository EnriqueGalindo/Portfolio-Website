import React, { Component } from "react";
import Colapse from "../Colapse"
import TextArea from "./TextArea"
import { Form, FormInput, FormGroup } from "shards-react";
import { Card, CardBody } from "shards-react";
import { Button } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Contact extends Component {
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
                                
                            </div>
                        </CardBody>   
                    </Card>

                {/* //this puts a break between the banner/navbar and the body of the page */}
                <br></br>
                    <Colapse></Colapse>
                    <hr></hr>
                <div id="contact">
                    <Card className="contactCardStyle">
                        <CardBody className="aboutCardBodyStyle">
                            <Form>
                                <FormGroup>
                                    <label htmlFor="#name">Name</label>
                                    <FormInput id="#name" />
                                </FormGroup>
                                <FormGroup>
                                    <label htmlFor="#email">Email</label>
                                    <FormInput type="email" id="#email" />
                                </FormGroup>
                            </Form>
                            <TextArea></TextArea>
                            <Button outline pill theme="secondary">
                                Submit
                        </Button>
                        </CardBody>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact