import React from "react"
import { Link } from "react-router-dom"


function Home() {

    return (
            <body class="home">
                <h1 className="heading">VacationEase</h1>
                <h2 className="heading2">The vacation planner that does it for you.</h2>
                <h3 className="heading2">Start your vacation before your vacation.</h3>
                <form className="heading2">
                        <input type="text" placeholder="First and Last Name" />
                        <input type="text" placeholder="Email" />
                        <p>Departure Date</p>
                        <input type="date" />
                        <p>Return Date</p>
                        <input type="date" />
                    <Link className="link-button" to="/StylePage">Get Started</Link>
                </form>
            </body>
    )
}

export default Home

