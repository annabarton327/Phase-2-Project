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
import FetchData from './FetchData';

function App() {
  const [destinations, setDestinations] = useState([])
  const [filterBy, setFilterBy] = useState({ category: "ski bum all the way"})

  return (

    <BrowserRouter>
      <nav>
        <Link className="link-button" to="/">Home</Link>
        <Link className="link-button" to="About">About</Link>
        <Link className="link-button" to="MyTrips">My Trips</Link>
      </nav>

      <FetchData setDestinations={setDestinations} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="MyTrips" element={<MyTrips />} />
        <Route path="StylePage" element={<StylePage />} />
        <Route path="StylePage/Cultural" element={<Cultural />} />
        <Route path="StylePage/Hipster" element={<Hipster />} />
        <Route path="StylePage/Party" element={<Party />} />
        <Route path="StylePage/SaltWater" element={<SaltWater />} />
        <Route path="StylePage/SkiBum" element={<SkiBum destinations={destinations} filterBy={filterBy}/>} />
        <Route path="StylePage/Spiritual" element={<Spiritual />} />
        <Route path="StylePage/Stressed" element={<Stressed />} />


      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);