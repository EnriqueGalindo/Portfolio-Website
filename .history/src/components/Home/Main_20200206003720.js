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

                {/* //this is the navigation bar */}
                <Navbar></Navbar>

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
                
                <Card id="tweetBox">
                    <CardBody id="tweetBoxBody">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="Enrique26538802"
                        options={{ height: 700 }}
                    />
                    </CardBody>
                </Card>
                </div>

            </React.Fragment>
        )
    }
}

export default Main