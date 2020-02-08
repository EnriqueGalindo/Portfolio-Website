import React, { Component } from "react";
import Navbar from "../Navbar"
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
                                <h1 align="center" style={{ color: "white" }}>Enrique Galindo</h1>
                                <hr></hr>
                                <p align="center" style={{ color: "white" }}>
                                    egalindo@protonmail.com •
                    <a className="link" href="https://github.com/EnriqueGalindo" style={{ color: "white" }}> github.com/EnriqueGalindo</a> •
                    <a className="link" href="https://www.linkedin.com/in/enrique-galindo-5970ab159/" style={{ color: "white" }}> EnriqueGalindo/linkedin</a>
                                </p>
                                {/* //this is the navigation bar */}
                                <Navbar></Navbar>
                            </div>
                        </CardBody>   
                    </Card>
                <Navbar></Navbar>
                <div id="wholeThang">
                    <div id="column1">
                        <Experience></Experience>
                        <Courses></Courses>
                        <Projects></Projects>
                        <Work></Work>
                    </div>
                    <div id="column2">
                        <Education></Education>
                        <Languages></Languages>
                        <Technologies></Technologies>
                        <Community></Community>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Resume