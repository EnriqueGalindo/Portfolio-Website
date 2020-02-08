import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    
    <Card className="aboutCardStyle">
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Technologies</CardTitle>
        <CardSubtitle>Last Update: December 2019</CardSubtitle>
        <p>
            <ul className="column">
                <li>React</li>
                <li>Redux</li>
                <li>Express</li>
                <li>Firebase</li>
                <li>Shards</li>
                <li>Semantic</li>
                <li>Bootstrap</li>
                <li>Heroku</li>
                <li>MongoDB</li>
                <li>CompassDB</li>
                <li>Git</li>
                <li>Postman</li>
                <li>Arduino</li>
                <li>SQLite</li>
            </ul>
        </p>
        </CardBody>
    </Card>
  );
}