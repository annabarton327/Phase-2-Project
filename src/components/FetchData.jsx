import React, { useEffect, useState } from "react"
import SkiBum from "./Links/SkiBum"

function FetchData() {
    const [destinations, setDestinations] = useState([])

    useEffect(() => {
        fetch("/db.json")
            .then(r => r.json())
            .then(data => {
                setDestinations(data)
            })
    }, [])

    return (
            <SkiBum destinations={destinations}/>
    )
}



export default ListCategories