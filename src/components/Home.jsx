import React from "react"
import { Link } from "react-router-dom"


function Home() {
  
    return (
        <body>
            <h1>Vacay with Ease</h1>
            <h2>The vacation planner that does it for you.</h2>
            <h3>Start your vacation before your vacation.</h3>
            <form>
                <div>
                    <p>Enter your first and last name and email.</p>
                    <input type="text" placeholder="First and Last Name" />
                    <input type="text" placeholder="Email"/>
                    <p>Departure Date</p>
                    <input type="date" />
                    <p>Return Date</p>
                    <input type="date" />
                </div>
                <Link className="link-button" to="/StylePage">Get Started</Link>
            </form>
        </body>
    )
}

export default Home

