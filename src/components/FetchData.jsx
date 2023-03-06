import React, { useEffect, useState } from "react"

function FetchData({ setDestinations }) {

    useEffect(() => {
        fetch("/db.json")
            .then(r => r.json())
            .then(data => {
                setDestinations(data.destinations)
                console.log(data)
            })
    }, [])

    return (
        <div> </div>
    )
}

export default FetchData