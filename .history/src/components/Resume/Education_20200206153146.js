import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    <div></div>
    <Card className="aboutCardStyle">
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Education</CardTitle>
        <CardSubtitle>Last Update: December 2019</CardSubtitle>
        <p>
            <b>Javascript Algorithms and Data Structures Certification</b>
            <br></br>
            Free Code Camp | 12/19
        </p>
        <p>
            <b>Front-End Development Certification</b>
            <br></br>
            Kenzie Academy | 10/19
        </p>
        <p>
            <b>Front-End Development Certification</b>
            <br></br>
            Butler University | 10/19
        </p>
        </CardBody>
    </Card>
  );
}