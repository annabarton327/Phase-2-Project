import React from "react"

function SkiBumStays({ destinations, filterById, setFilterById }) {

    const filteredDestinations = destinations.filter((individual) => {
        if (individual.id === filterById) {
            return true
        } else {
            return false
        }
    })

    const staysList = filteredDestinations.map((destination) => {
        return (destination.stays.map(stay => {
            return <div key={stay.id} >
                <h1>{stay.price}</h1>
                <img src={stay.image1} />
            </div>
        }))
    })

    return (
        <div>
            <h1>Great choice! Choose your stay:</h1>
            <h2>{staysList} </h2>
        </div>
    )
}

export default SkiBumStays