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
                	Purpose: Create an IoT smart showerhead that tracks and reduces your
                    water use and uploads it to a web and mobile app 

                </li>
                <li>
                    <a className="link" href="https://github.com/EnriqueGalindo/Tandem_water_plants"> 
                    github.com/EnriqueGalindo/Tandem_water_plants</a>

                </li>
            </ul>
        </p>
        <p>
            Tandem Challenge | Individual
            <br></br>
            <ul>
                <li>
                    Purpose: Created a python command line tool that reads a .json file 
                    with information about watering plants and writes a calendar to a .txt 
                    file

                </li>
                <li>
                    <a className="link" href="https://github.com/EnriqueGalindo/Tandem_water_plants"> 
                    github.com/EnriqueGalindo/Tandem_water_plants</a>

                </li>
            </ul>
        </p>
        </CardBody>
    </Card>
  );
}