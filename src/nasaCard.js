import React from "react"
import 'semantic-ui-css/semantic.min.css'
import {  Card, Icon, Image } from 'semantic-ui-react'


export default function NasaCard(props) {
  const {image, title, explanation} = props

    console.log(props);
    // return(
    //     <div className="nasa-card " >{props.nasaData.title}
    //     <img className="nasa-image" alt="random nasa image" src={props.nasaData.url} />
    //     <h3>{props.nasaData.explanation}</h3>
    //   </div>
    // );
    return (
      <Card>
   <Image src={image} wrapped ui={false} />
  <Card.Content>
    <Card.Header>{title}</Card.Header>
    <Card.Meta>
      <span className='date'>Description: {explanation}</span>
    </Card.Meta>
    
  </Card.Content>
  
</Card>
)
  };
