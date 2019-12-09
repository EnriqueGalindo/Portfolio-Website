import React from 'react'
import { Card, CardBody } from 'shards-react'

export default function CardBodyExample() {
  return (
    <Card style={{width: "250px", height: "167px", padding:"0px"}}>
      <CardBody style={{width: "300px", height: "201px", padding:"0px", margin: "auto", borderRadius: "25px"}}>
       <img src="profilePic.png" style={{width: "300px", margin: "auto", borderRadius: "25px"}}/>
      </CardBody>
    </Card>
  )
}
