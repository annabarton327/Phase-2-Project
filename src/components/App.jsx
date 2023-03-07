import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import '../index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import MyTrips from './MyTrip.jsx'
import StylePage from './Vacation-Style Page.jsx'
import SaltWater from './Links/SaltWater'
import SkiBum from './Links/SkiBum'
import Spiritual from './Links/Spiritual'
import Stressed from './Links/Stressed'
import Cultural from './Links/Cultural'
import Hipster from './Links/Hipster'
import Party from './Links/Party'
import SkiBumStays from "./Links/SkiBumStays";
import SaltWaterStays from "./Links/SaltWaterStays";
import StressedStays from "./Links/StressedStays";
import SpiritualStays from "./Links/SpiritualStays";
import CulturalStays from "./Links/CulturalStays";
import HipsterStays from "./Links/HipsterStays";
import PartyStays from "./Links/PartyStays";

function App() {
  const [destinations, setDestinations] = useState([])
  const [filterBy, setFilterBy] = useState("ski bum all the way")
  const [filterBy1, setFilterBy1] = useState("salt-water soul")
  const [filterBy2, setFilterBy2] = useState("stressed and distressed and need a wellness getaway")
  const [filterBy3, setFilterBy3] = useState("just here to party")
  const [filterBy4, setFilterBy4] = useState("super spiritual yogi seeking enlightenment")
  const [filterBy5, setFilterBy5] = useState("hipster, coffee snob, tree hugger")
  const [filterBy6, setFilterBy6] = useState("city-goer who loves culture and learning")

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
        <Route path="StylePage" element={<StylePage />} />
        <Route path="StylePage/Cultural" element={<Cultural
          destinations={destinations}
          filterBy={filterBy6}
          setFilterBy={setFilterBy6} />} />
        <Route path="StylePage/Hipster" element={<Hipster
          destinations={destinations}
          filterBy={filterBy5}
          setFilterBy={setFilterBy5} />} />
        <Route path="StylePage/Party" element={<Party
          destinations={destinations}
          filterBy={filterBy3}
          setFilterBy={setFilterBy3} />} />
        <Route path="StylePage/SaltWater" element={<SaltWater
          destinations={destinations}
          filterBy={filterBy1}
          setFilterBy={setFilterBy1} />} />
        <Route path="StylePage/SkiBum" element={<SkiBum
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy} />} />
        <Route path="StylePage/Spiritual" element={<Spiritual
          destinations={destinations}
          filterBy={filterBy4}
          setFilterBy={setFilterBy4} />} />
        <Route path="StylePage/Stressed" element={<Stressed
          destinations={destinations}
          filterBy={filterBy2}
          setFilterBy={setFilterBy2} />} />
        <Route path="StylePage/SkiBum/SkiBumStays" element={<SkiBumStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy} />} />
        <Route path="StylePage/SkiBum/CulturalStays" element={<CulturalStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy} />} />
        <Route path="StylePage/SkiBum/HipsterStays" element={<HipsterStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy} />} />
        <Route path="StylePage/SkiBum/PartyStays" element={<PartyStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy} />} />
        <Route path="StylePage/SkiBum/SaltWaterStays" element={<SaltWaterStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy} />} />
        <Route path="StylePage/SkiBum/StressedStays" element={<StressedStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy} />} />
        <Route path="StylePage/SkiBum/SpiritualStays" element={<SpiritualStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy} />} />

      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);