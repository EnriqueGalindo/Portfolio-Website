import React, { Component } from "react";
import { Card, CardBody } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Enrique Galindo</h1>
                <p>
                    egalindo@protonmail.com • 
                    <a href="https://github.com/EnriqueGalindo"> github.com/EnriqueGalindo</a> • 
                    <a href="https://www.linkedin.com/in/enrique-galindo-5970ab159/"> EnriqueGalindo/linkedin</a>
                </p>

            </React.Fragment>
        )
    }
}

export default Resume