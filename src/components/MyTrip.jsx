import React from "react"
import { Link } from "react-router-dom"


function MyTrip() {

    return (
        <body>
            <h1>My Trip</h1>
            <p>Your trip is empty. Get started and begin your trip now!</p>
            <button>
                <Link to="/">Begin Trip</Link>
            </button>
        </body>
    )
}

export default MyTrip