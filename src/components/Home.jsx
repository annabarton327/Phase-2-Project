import React from "react"
import { Link } from "react-router-dom"


function Home() {
  
    return (
        <body>
            <h1>Vacay with Ease</h1>
            <h2>The vacation planner that just does it for you.</h2>
            <h3>Start your vacation before your vacation.</h3>
            <form>
                <div>
                    <input type="text" placeholder="First and Last Name" />
                    <input type="text" placeholder="Email"/>
                    <input type="date" />
                    <input type="date" />
                </div>
                <Link className="link-button" to="/StylePage">Get Started</Link>
            </form>
        </body>
    )
}

export default Home

