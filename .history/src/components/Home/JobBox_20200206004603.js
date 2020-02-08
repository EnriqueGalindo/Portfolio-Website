import React from "react";
import { Card, CardBody, CardTitle } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default function CardBodyTitleSubtitleExample() {
  return (
    <div>
    {/*  <Card id="jobBoxCardStyle"> */}
      <CardBody id="jobBoxCardBodyStyle">
        <CardTitle>Actively Searching for a Job</CardTitle>
        <p>
        While having all of these is not expected, these are just some features
        that would be good to find in a job.
        </p>
        <p>
        <strong>Work Environment:</strong> Mentorship Focused, Equality Driven, Group Mindset, Diverse
        <br></br>
        <strong>Hours:</strong> Full Time
        <br></br>
        <strong>Positions:</strong> Jr.Developer, Front-End Software Engineer, React Developer
        Java Script Developer, Python Developer
        <br></br>
        <strong>Sectors of Interest:</strong> Start-Ups, Tech, Software
        </p>
      </CardBody>
    {/* </Card> */}
    </div>
  );
}
