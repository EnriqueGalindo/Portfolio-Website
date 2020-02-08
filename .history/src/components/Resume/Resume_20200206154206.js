import React, { Component } from "react";
import Colapse from "../Colapse"
import Experience from "./Experience"
import Courses from "./Courses"
import Projects from "./Projects"
import Work from "./Work"
import Education from "./Education"
import Languages from "./Languages"
import Technologies from "./Technologies"
import Community from "./Community"
import { Card, CardBody } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Resume extends Component {
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
                <div id="wholeThang">
                    <div id="column1">
                        <Experience></Experience>
                        <Courses></Courses>
                        <Projects></Projects>
                        <Work></Work>
                    </div>
                    <div id="column2">
                        <Card className="aboutCardStyle">
                            <CardBody className="aboutCardBodyStyle">
                                <Education></Education>
                                <Languages></Languages>
                                <Technologies></Technologies>
                                <Community></Community>
                            </CardBody>
                        <Card>
                    </div>
                </div>
            </React.Fragment>
                    )
                }
            }
            
export default Resume