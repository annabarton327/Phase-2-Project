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
  const [click, setClick] = useState({})
  // const [name, setName] = useState("")
  // const [departure, setDeparture] = useState("")
  // const [arrival, setArrival] = useState("")

  useEffect(() => {
    fetch("/db.json")
      .then(r => r.json())
      .then(data => {
        setDestinations(data.destinations)
        setClick(data.tripdata)
      })
  }, [])

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const homepageinfo = {
  //     name: name,
  //     departure: departure,
  //     arrival: arrival
  //   }

  //   fetch("http://localhost:3000/homepageinfo", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(homepageinfo)
  //   })
  //     .then(r => r.json())
  //     .then(homepageinfo => setClick([...click, homepageinfo]))
  // }

  function handleClick(destination,stay) {
    const myTripsData = {
      name: "name",
      category: destination.category,
      destination: destination.destination,
      image: destination.image,
      stayprice: stay.price,
      stayimage: stay.image1
    }

    fetch("http://localhost:3000/tripdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(myTripsData)
    })
      .then(r => r.json())
      .then(myTripsData => setClick([...click, myTripsData]))
  }

  return (

    <BrowserRouter>
      <nav>
        <Link className="link-button" to="/">Home</Link>
        <Link className="link-button" to="About">About</Link>
        <Link className="link-button" to="MyTrips">My Trips</Link>
      </nav>
      <Routes>
        <Route path="MyTrips" element={<MyTrips
          click={click} />} />
        <Route path="/" element={<Home/>} />
        <Route path="About" element={<About />} />
        <Route path="StylePage" element={<StylePage setFilterBy={setFilterBy} />} />
        <Route path="StylePage/SkiBum" element={<SkiBum
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          setFilterById={setFilterById}
          click={click}
          setClick={setClick}
          handleClick={handleClick} />}
        />
        <Route path="StylePage/SkiBum/SkiBumStays" element={<SkiBumStays
          destinations={destinations}
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          filterById={filterById}
          setFilterById={setFilterById}
          click={click}
          setClick={setClick}
          handleClick={handleClick} />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);