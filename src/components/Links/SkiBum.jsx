import React from "react"


function SkiBum({ destinations }) {

    const destinationsList = destinations.map((destination) => {
        return <div key={destination.id} >
            <h1>{destination.destination}</h1>
            <img src={destination.image} />
        </div>
    })


    return (
        <>
            {destinationsList}
        </>
    )
}

export default SkiBum 