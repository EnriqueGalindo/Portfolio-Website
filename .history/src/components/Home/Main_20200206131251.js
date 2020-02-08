import React, { Component } from "react";
import About from "./About";
import JobBox from "./JobBox";
import Navbar from "../Navbar";
import { Card, CardBody } from "shards-react";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <header id="">
                    <Card id="headerCard">
                        <CardBody >
                            <div >
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
                </header>


                {/* //this puts a break between the banner/navbar and the body of the page */}
                <br></br>
                <div id="fullBody">
                    {/* //this div contains the body */}
                    <div id="bodyStyle">

                        {/* //this is th About component */}
                        <About></About>

                        {/* //this is the JobBox component */}
                        <JobBox></JobBox>
                    </div>
                    <br></br>
                    <div id="tweetBox">
                        <Card id="tweetBox">
                            <CardBody id="tweetBoxBody">
                                <TwitterTimelineEmbed
                                    sourceType="profile"
                                    screenName="Enrique26538802"
                                    options={{ height: 500 }}
                                />
                            </CardBody>
                        </Card>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default Main