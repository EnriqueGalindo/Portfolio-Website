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
                	Purpose: Create an IoT smart showerhead that tracks and reduces your
                    water use and uploads it to a web and mobile app 

                </li>
                <li>
                    <a className="link" href="https://devpost.com/software/project-warm-water"> 
                    devpost.com/software/project-warm-water</a>

                </li>
            </ul>
        </p>
       
      
        </CardBody>
    </Card>
  );
}