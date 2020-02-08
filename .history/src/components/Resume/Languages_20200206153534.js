import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    <
    <Card className="aboutCardStyle">
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Languages</CardTitle>
        <CardSubtitle>Last Update: December 2019</CardSubtitle>
        <p>
            <ul>
                <li>Python</li>
                <li>Javascript</li>
                <li>CSS/SASS/SCSS</li>
            </ul>
        </p>
        </CardBody>
    </Card>
  );
}