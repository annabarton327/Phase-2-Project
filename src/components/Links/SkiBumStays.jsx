import React from "react"
import { Link } from "react-router-dom"



function SkiBumStays({ destinations, filterById, setFilterById, handleClick }) {
    console.log(destinations)

    const filteredDestinations = destinations.filter((individual) => {
        if (individual.id === filterById) {
            return individual
        } else {
            return false
        }
    })
  
    const staysList = filteredDestinations.map((destination) => {
        return (destination.stays.map(stay => {
            {console.log(stay)}
            return <div key={stay.id} >
                <Link to="/MyTrips" onClick={()=>handleClick(destination,stay)}> <h1 className="link-button"> ${stay.price} per night </h1> </Link>
                <Link to="/MyTrips" onClick={()=>handleClick(destination,stay)}> <img className="hi" src={stay.image1} style={{ maxWidth: "50%", height: "auto" }} /> </Link>
            </div>
        }))
    })
    return (
        <div>
            <h1 className="heading1">Great choice! Now choose your stay:</h1>
            <h2>{staysList} </h2>
        </div>
    )
}

export default SkiBumStays

