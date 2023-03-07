import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import '../index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import MyTrips from './MyTrip.jsx'
import StylePage from './StylePage.jsx'
import SkiBum from './Links/SkiBum'
import SkiBumStays from "./Links/SkiBumStays";


function App() {
  const [destinations, setDestinations] = useState([])
  const [filterBy, setFilterBy] = useState("ski bum all the way")
  const [filterById, setFilterById] = useState("1")

  useEffect(() => {
    fetch("/db.json")
      .then(r => r.json())
      .then(data => {
        setDestinations(data.destinations)
        console.log(data)
      })
  }, [])

  return (

    <BrowserRouter>
      <nav>
        <Link className="link-button" to="/">Home</Link>
        <Link className="link-button" to="About">About</Link>
        <Link className="link-button" to="MyTrips">My Trips</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="MyTrips" element={<MyTrips />} />
        <Route path="StylePage" element={<StylePage setFilterBy={setFilterBy} />} />
        <Route path="StylePage/SkiBum" element={<SkiBum
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          setFilterById={setFilterById} />} />
        <Route path="StylePage/SkiBum/SkiBumStays" element={<SkiBumStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          filterById={filterById}
          setFilterById={setFilterById} />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);