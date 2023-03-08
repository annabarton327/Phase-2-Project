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
            return <div className="image-container" key={stay.id} >
                <h1 className="link-button"> ${stay.price} per night </h1>
                <img src={stay.image1} style={{ maxWidth: "50%", height: "auto" }} />
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