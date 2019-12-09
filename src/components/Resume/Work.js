import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    <Card className="aboutCardStyle">
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Work Experience</CardTitle>
        <CardSubtitle>Last Update: December 2019</CardSubtitle>
        <p>
            <strong>Coaching</strong>
            <br></br>
            Kenzie Academy   |  Indianapolis  |  11/2019 - Now
            <ul>
                <li>
                    Working with students to teach them Javascript, HTML, CSS,
                    and creating React Web Apps
                </li>
                <li>
                    Teaching students best practices and various technologies
                    to make clear and readable code
                </li>
                <li>
                    Learn to interact with students remotely and provide the 
                    same level of instruction regardless of location
                </li>
            </ul>
        </p>
        <p>
            <strong>Math Assistance Center</strong>
            <br></br>
            IUPUI   |  Indianapolis  |  11/2016 - Now
            <ul>
                <li>
                    Tutoring students in math of all levels required to get a minor
                    in math at IUPUI
                </li>
                <li>
                    Teaching collaboratively in an open environment with a traffic of
                    over 200 students per day
                </li>
            </ul>
        </p>
        </CardBody>
    </Card>
  );
}