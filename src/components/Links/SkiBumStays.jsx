import React from "react"

function SkiBumStays({ destinations, filterBy, setFilterBy }) {


    const filteredDestinations = destinations.filter((individual) => {
        if (individual.category === filterBy) {
            return true
        } else {
            return false
        }
    })

    const destinationsList = filteredDestinations.map((destination) => {
        return (destination.stays.map(stay => {
            return <div key={stay.id} >
                <h1>{stay.price}</h1>
                <img src={stay.image1} />
                <img src={stay.image2} />
                <img src={stay.image3} />
                <img src={stay.image4} />
            </div>
        }))
    })


    return (
        <div>
            <h1>Great choice! Choose your stay:</h1>
            <h2>{destinationsList} </h2>
            <h3 value={filterBy} onChange={function (e) { setFilterBy(e.target.value) }}> </h3>
        </div>
    )
}

export default SkiBumStays