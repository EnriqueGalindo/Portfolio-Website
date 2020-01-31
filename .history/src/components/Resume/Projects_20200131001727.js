import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default function CardBodyTitleSubtitleExample() {
  return (
    <Card className="aboutCardStyle">
      <CardBody className="aboutCardBodyStyle">
        <CardTitle>Selected Projects</CardTitle>
        <CardSubtitle>Last Update: December 2019</CardSubtitle>
        <p>
            Boilermake VII | Group
            <br></br>
            <ul>
                <li>
                ▪	Purpose: Create an IoT smart showerhead that tracks and reduces your water use and uploads it to a web and mobile app 

                </li>
                <li>
                    Next Step: Allow for events and inventory to be edited from
                    the front-end
                </li>
            </ul>
        </p>
        <p>
            Twitter Clone | Group
            <br></br>
            <ul>
                <li>
                    Purpose: Create a React Web app where one can make and edit a profile, 
                    log in, post messages, and see the messages of others
                </li>
                <li>
                    Next Step: Improve the UX such that it’s more intuitive to use
                </li>
            </ul>
        </p>
        </CardBody>
    </Card>
  );
}