import React from "react"

const NasaCard = props => {
    console.log(props);
    return(
        <div className="nasa-card " >{props.nasaData.title}
        <img className="nasa-image" alt="random nasa image" src={props.nasaData.url} />
        <h2>{}</h2>
      </div>
    );
  };
  export default NasaCard;