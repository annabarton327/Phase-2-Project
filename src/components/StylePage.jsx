import React from "react"
import { Link } from "react-router-dom"


function StylePage({ setFilterBy }) {

    return (
        <body>
            <h1>How would you best describe your vacation-style?</h1>

            <Link className="link-button" onClick={()=>setFilterBy("ski bum all the way")} to="SkiBum">ski bum all the way</Link>
            <Link className="link-button" onClick={()=>setFilterBy("salt-water soul")} to="SkiBum">salt-water soul</Link>
            <Link className="link-button" onClick={()=>setFilterBy("stressed and distressed and need a wellness getaway")} to="SkiBum">stressed and distressed and need a wellness getaway</Link>
            <Link className="link-button" onClick={()=>setFilterBy("just here to party")} to="SkiBum">just here to party</Link>
            <Link className="link-button" onClick={()=>setFilterBy("super spiritual yogi seeking enlightenment")} to="SkiBum">super spiritual yogi seeking enlightenment</Link>
            <Link className="link-button" onClick={()=>setFilterBy("hipster, coffee snob, tree hugger")} to="SkiBum">hipster, coffee snob, tree hugger</Link>
            <Link className="link-button" onClick={()=>setFilterBy("city-goer who loves culture and learning")} to="SkiBum">city-goer who loves culture and learning</Link>

        </body>
    )
}

export default StylePage 


