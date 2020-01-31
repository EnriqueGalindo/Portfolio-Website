import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    <Card className="aboutCardStyle">
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Experience</CardTitle>
        <CardSubtitle>Last Update: January 2020</CardSubtitle>
        <p>
            Indiana University - Purdue University of Indianapolis |  Indianapolis  |  8/15 
            <br></br>
            <ul>
                <li>
                    ECE263(C/C++ Programming), ECE36200(Assembly and Microcontrollers) 
                    MATH 35100(Linear Algebra), MATH 26600 (Ordinary Differential Equations), 
                    MATH 26100(Multivariate Calculus)


                </li>
                
            </ul>
        </p>
       
        </CardBody>
    </Card>
  );
}