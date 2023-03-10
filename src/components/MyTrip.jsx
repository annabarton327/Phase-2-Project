import React from "react"
import { Link } from "react-router-dom"


function MyTrips({ click, handleDelete, users }) {

    function mytriplist() {
        return (
            <div>
                
                {click.map((destination,i) => {
                    var arrival
                    var departure
                    var totalPrice = destination.stayprice
                    
                
                        arrival = new Date(users[i].arrival)
                        departure = new Date(users[i].departure)
                        totalPrice = (arrival - departure) / 60 / 60 / 1000 / 24 * Number(destination.stayprice)
                

                    return (
                        <div>
                            <h1 className="heading3">Hi, {users[i].name}! View your trip here.♡</h1>
                            <h1 className="headingdest">{destination.destination}</h1>
                            <body className="hi1">
                                <img src={destination.image} />
                                <img src={destination.stayimage} />
                            </body>
                            <h1 className="heading3">Trip Total: ${totalPrice.toFixed(2)}</h1>
                            <h2 className="heading3">Departure: {users[i].departure}</h2>
                            <h2 className="heading3">Return: {users[i].arrival}</h2>
                            <h1 onClick={() => {
                                handleDelete(destination.id)
                            }} className="link-button">Remove Trip</h1>
                            <section className="section"></section>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <body>
            <h1 className="heading">My Trips</h1>

            {click.length === 0 ?
                <div id="default-text">
                    <p className="about">You currently have no trips planned. Get started and begin a trip now!</p>
                    <Link className="link-button1" to="/">Begin Trip</Link>
                    <body className="hi">
                        <img src="https://i.pinimg.com/474x/c3/51/c4/c351c4fa7700be225afb2571d0ec3434.jpg" />
                        <img src="https://i.pinimg.com/474x/9d/0a/e5/9d0ae5f55e2efa6941ad2d6495536a2b.jpg" />
                        <img src="https://i.pinimg.com/474x/98/6b/f0/986bf0f9ddece2ff0f2b7b576862e383.jpg" />
                    </body>
                </div>
                :
                mytriplist()
            }
        </body>
    )
}

export default MyTrips

