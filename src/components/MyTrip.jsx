import React from "react"
import { Link } from "react-router-dom"


function MyTrips({ click }) {

    function mytriplist() {
        return (
            <div>
                {click.map((destination) =>
                    <div>
                        <h1 className="headingdest">{destination.destination}</h1>
                        <div className="hi1">
                            <img src={destination.image} />
                            <img src={destination.stayimage} />
                        </div>
                        <h1 className="heading3">Trip Total: ${destination.stayprice}</h1>
                        <section className="section"></section>
                    </div>
                )}
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

