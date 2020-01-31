import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    <Card className="aboutCardStyle">
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Selected Projects</CardTitle>
        <CardSubtitle>Last Update: January 2020</CardSubtitle>
        <p>
            Kenzie Academy  |  Indianapolis  |  10/19-Now
            <br></br>
            <ul>
                <li>
                    Created Back-End focused projects using both Python2 and Python3, 
                    and included virtual environments for ease of use for other users

                </li>
                <li>
                    Followed Test Driven Development(TDD) practices using unit testing 
                    in programs along with logging for long running programs

                </li>
            </ul>
        </p>
       
      
        </CardBody>
    </Card>
  );
}