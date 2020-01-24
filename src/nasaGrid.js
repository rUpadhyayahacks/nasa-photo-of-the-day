import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NasaCard from './NasaCard';


export default function NasaGrid () {
    const [nasaData, setNasaData] = useState({})

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=CHbdbqpW3y2kTgqRxAIwQcgNxU2fmOYJPzYfpjOe')
        .then(response => {
            console.log(response)
            const characters = response.data;
            setNasaData(characters)
            
        })
        .catch(error => {
            console.log('No Image', error);
        });
    }, [])
    return (
        // <div> 
        //     <NasaCard nasaData= {nasaData}/> 
        //     </div> 
        <div>
            <h1>Photo of the day</h1>
            
                <NasaCard
                key={nasaData.data}
                title={nasaData.title}
                explanation={nasaData.explanation}
                image={nasaData.url}
                />
            })


        </div>
    )
}