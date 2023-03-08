import React from "react"
import { Link } from "react-router-dom"


function MyTrips() {

    return (
        <body>
            <h1 className="heading">My Trips</h1>
            <p className="about">You currently have no trips planned. Get started and begin a trip now!</p>
            <Link className="link-button" to="/">Begin Trip</Link>
        </body>
    )
}

export default MyTrips