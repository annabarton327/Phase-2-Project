import React from "react"
import { Link } from "react-router-dom"


function MyTrips() {

    return (
        <body>
            <h1>My Trips</h1>
            <p>You currenely have no trips planned. Get started and begin a trip now!</p>
            <Link className="link-button" to="/">Begin Trip</Link>
        </body>
    )
}

export default MyTrips