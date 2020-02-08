import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
      <div>
    {/* <Card className="aboutCardStyle"> */}
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Work Experience</CardTitle>
        <CardSubtitle>Last Update: December 2019</CardSubtitle>
        <p>
            <strong>Coaching</strong>
            <br></br>
            Kenzie Academy   |  Indianapolis  |  11/2019 - Now
            <ul>
                <li>
                 Mentoring new students and earlier cohorts on how to navigate
                 the school curriculum and master the material. 

                </li>
                <li>
                    Teaching students best practices and various technologies
                    to make clear and readable code
                </li>
                <li>
                    Coordinating with students remotely while still providing 
                    the same level of instruction regardless of location

                </li>
            </ul>
        </p>
        <p>
            <strong>Math Assistance Center</strong>
            <br></br>
            IUPUI   |  Indianapolis  |  11/2016 - Now
            <ul>
                <li>
                    Tutoring MATH 26600 (Ordinary Differential Equations), MATH 26100(Multivariate Calculus),
                    MATH 17100(Multidimensional Mathematics), MATH 16600(Calculus 2), MATH 16500(Calculus 1)
                </li>
                <li>
                    Teaching collaboratively in an open environment with a traffic of 200+ students per day
                </li>
            </ul>
        </p>
        </CardBody>
    </Card>
  );
}