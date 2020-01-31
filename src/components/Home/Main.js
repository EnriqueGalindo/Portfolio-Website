import React, { Component } from "react";
import About from "./About";
import Article from "./Article";
import JobBox from "./JobBox";
import Mugshot from "./Mugshot";
import Navbar from "../Navbar";
import { Card, CardBody } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Main extends Component {
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
                {/* //this div is the background of the whole site
                <div className="main-background">

                    {/* //this is the banner card */}
                    {/* <Card id="banner"> */}

                        {/* //this is the container that holds the mugshot and my name */}
                        {/* <CardBody id="banner-container"> */}

                            {/* //this is my headshot */}
                            {/* <Mugshot></Mugshot> */}

                            {/* //this is my name */}
                            {/* <h1 id="nameStyle">Enrique Galindo</h1>
                        </CardBody>
                    </Card> */} 

                    {/* //this is the navigation bar */}
                    <Navbar></Navbar>

                    {/* //this puts a break between the banner/navbar and the body of the page */}
                    <br></br>

                    {/* //this div contains the body */}
                    <div id="bodyStyle">

                        {/* //this is th About component */}
                        <About></About>

                        {/* //this is the JobBox component */}
                        <JobBox></JobBox>
                    </div>
                    <br></br>
                    <div>
                        {/* <Article></Article> */}
                    </div>
                
            </React.Fragment>
        )
    }
}

export default Main