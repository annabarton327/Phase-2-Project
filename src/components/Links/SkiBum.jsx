import React from "react"

function SkiBum({ destinations }) {
    

    const destinationsList = destinations.map((destination) => {
        return <div key={destination.id} >
            <h1>{destination.destination}</h1>
            <img src={destination.image} />
        </div>
    })

    return (
        <div>
            <h1>We like your style! Now choose your destination:</h1>
            <h2>{destinationsList}</h2>
        </div>
    )
}

export default SkiBum 