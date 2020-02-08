import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    <Card className="aboutCardStyle">
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Community Engagement</CardTitle>
        <CardSubtitle>Last Update: January 2020</CardSubtitle>
        <p>
            <strong>React.Indy</strong>
            <br></br>
            Talks:
            <br></br>
            Suspense in React
            <br></br>
            <strong>.Net Indy</strong>
            <br></br>
            Talks:
            <br></br>
            Debugging and Logging
        </p>
        </CardBody>
    </Card>
    <div></div>
  );
}