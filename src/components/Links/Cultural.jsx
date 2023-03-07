import React from "react"
import { Link } from "react-router-dom"


function Cultural({ destinations, filterBy, setFilterBy }) {

    const filteredDestinations = destinations.filter((individual) => {
        if (individual.category === filterBy) {
            return true
        } else {
            return false
        }
    })

    const destinationsList = filteredDestinations.map((destination) => {
        return <div key={destination.id} >
            <Link to="CulturalStays">
                <h1>{destination.destination}</h1>
            </Link>
            <Link to="CulturalStays">
                <img src={destination.image} />
            </Link>
        </div>
    })

    return (
        <div>
            <h1>We like your style! Now choose your destination:</h1>
            <h2>{destinationsList}</h2>
            <h3 value={filterBy} onChange={function (e) { setFilterBy(e.target.value) }}></h3>
        </div>
    )
}

export default Cultural