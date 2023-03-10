import React from "react"
import { Link } from "react-router-dom"

function SkiBum({ destinations, filterBy, setFilterById }) {

    const filteredDestinations = destinations.filter((individual) => {
        if (individual.category === filterBy) {
            return true
        } else {
            return false
        }
    })

    const destinationsList = filteredDestinations.map((destination) => {
        return <div key={destination.id} >
            <Link to="SkiBumStays" onClick={() => {
                setFilterById(destination.id)
            }}>
                <h1 className="link-button">{destination.destination}</h1>
            </Link>
            <Link to="SkiBumStays" onClick={() => {
                setFilterById(destination.id)
            }} >
                <img className="hi" onClick={()=>setFilterById(destination.id)} src={destination.image} />
            </Link>
        </div>
    })

    return (
        <div>
            <h1 className="heading1">We like your style! Now choose your destination:</h1>
            <h2>{destinationsList}</h2>
        </div>
    )
}

export default SkiBum 