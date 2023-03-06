import React from "react"
import { Link } from "react-router-dom"


function StylePage() {

    return (
        <body>
            <h1>How would you best describe your vacation-style?</h1>
            
            <Link className="link-button" to="SkiBum">ski bum all the way</Link>
            <Link className="link-button" to="SaltWater">salt-water soul</Link>
            <Link className="link-button" to="Stressed">stressed and distressed and need a wellness getaway</Link>
            <Link className="link-button" to="Party">just here to party</Link>
            <Link className="link-button" to="Spiritual">super spiritual yogi seeking enlightenment</Link>
            <Link className="link-button" to="Hipster">hipster, coffee snob, tree hugger</Link>
            <Link className="link-button" to="Cultural">city-goer who loves culture and learning</Link>

        </body>
    )
}

export default StylePage 