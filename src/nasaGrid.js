import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NasaCard from './nasaCard';


export default function NasaGrid () {
    const [nasaData, setNasaData] = useState({})

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=CHbdbqpW3y2kTgqRxAIwQcgNxU2fmOYJPzYfpjOe')
        .then(response => {
            console.log(response)
            setNasaData(response.data)
            
        })
        .catch(error => {
            console.log('No Image', error);
        });
    }, [])
    return (
        <div> 
            <NasaCard nasaData= {nasaData}/> 

            {/* <img className= "imgClass" src= {nasaData.url}></img>
            <h1>{nasaData.date}</h1>
            </div> */}
            </div> 
        
    )
}