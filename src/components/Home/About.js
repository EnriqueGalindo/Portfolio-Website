import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    <div>
    {/* <Card id="aboutCardStyle"> */}
      <CardBody id="aboutCardBodyStyle">
        <CardTitle>About</CardTitle>
        <CardSubtitle>Last Update: December 2019</CardSubtitle>
          Born in Bloomington Indiana
          <br></br>
          I love to pursue what piques my curiosity with everything I've got
           <br></br>
          I have been learning and practicing programming since 2016
          <br></br>
          Other passions of mine are: hackathons, entrepreneurship, writing music, backpacking,
          photography, and cooking
           <br></br>
          All I hope for my life is to be able to have a positive impact and to
          never stop learning.
      </CardBody>
    {/* </Card> */}
    </div>
  );
}
