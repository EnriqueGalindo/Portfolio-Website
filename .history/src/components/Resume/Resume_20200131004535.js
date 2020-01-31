import React, { Component } from "react";
import Navbar from "../Navbar"
import Experience from "./Experience"
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
                <header>
                    <Card >

                        <CardBody >


                            <h1 align="center">Enrique Galindo</h1>
                            <hr></hr>
                            <p align="center">
                                egalindo@protonmail.com •
                    <a className="link" href="https://github.com/EnriqueGalindo"> github.com/EnriqueGalindo</a> •
                    <a className="link" href="https://www.linkedin.com/in/enrique-galindo-5970ab159/"> EnriqueGalindo/linkedin</a>
                            </p>
                        </CardBody>
                    </Card>

                </header>
                <Navbar></Navbar>
                <div id="wholeThang">
                    <div id="column1">
                        <Experience></Experience>
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