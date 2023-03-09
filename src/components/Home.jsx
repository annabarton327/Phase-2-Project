import React from "react"
import { Link } from "react-router-dom"


function Home() {

    return (
            <body class="home">
                <h1 className="heading">VacationEase</h1>
                <h2 className="heading2">The vacation planner that does it for you. Start your vacation before your vacation.</h2>
                <div className="hi">
                    <img src="https://i.pinimg.com/474x/fe/fb/35/fefb35d731b5b4632a8aa07277bc1d10.jpg" />
                    <img src="https://i.pinimg.com/474x/8f/86/4c/8f864c8783adf6cb76b6332c696bf791.jpg" /> 
                    <img src="https://i.pinimg.com/474x/15/f0/e0/15f0e0372d1e04df5f325d00e5899069.jpg" /> 

                </div>
                <form>
                    <div className="heading3">
                        <p>Enter your first and last name and email.</p>
                        <input type="text" placeholder="First and Last Name" />
                        <input type="text" placeholder="Email" />
                        <p>Departure Date</p>
                        <input type="date" />
                        <p>Return Date</p>
                        <input type="date" />
                    </div>
                    <Link className="link-button1" to="/StylePage">Get Started</Link>
                </form>
            </body>
    )
}

export default Home

