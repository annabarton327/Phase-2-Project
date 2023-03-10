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
  const [users, setUsers] = useState([])
  const [destinations, setDestinations] = useState([])
  const [filterBy, setFilterBy] = useState("ski bum all the way")
  const [filterById, setFilterById] = useState("1")
  const [click, setClick] = useState([])
  const [formData, setFormData] = useState({ name: "", departure: "", arrival: "" })
  

  useEffect(() => {
    fetch("/db.json")
      .then(r => r.json())
      .then(data => {
        console.log("data: ", data)
        setDestinations(data.destinations)
        setClick(data.tripdata)
        setUsers(data.users)
      })
  }, [])

  function handleClick(destination, stay) {
    const myTripsData = {
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

  function handleSubmit(formData) {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => { 
        console.log(r)
        return r.json() 
      })
      .then(user => setUsers([...users, user]))
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(() => {
        setUsers(users.filter((currentUser)=>{
          if(currentUser.id === id) return false
          return true
        }))
      })


      fetch(`http://localhost:3000/tripdata/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(() => {
        setClick(click.filter((currentTrip)=>{
          if(currentTrip.id === id) return false
          return true
        }))
      })
  }


return (

  <BrowserRouter>
    <nav>
      <Link className="link-button" to="/">Home</Link>
      <Link className="link-button" to="About">About</Link>
      <Link className="link-button" to="MyTrips">My Trips</Link>
    </nav>
    <Routes>
      <Route path="About" element={<About />} />
      <Route path="/" element={<Home
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        formData={formData} />} />

      <Route path="MyTrips" element={<MyTrips
        click={click}
        formData={formData}
        handleDelete={handleDelete}
         />} />

      <Route path="StylePage" element={<StylePage
        setFilterBy={setFilterBy} />} />

      <Route path="StylePage/SkiBum" element={<SkiBum
        destinations={destinations}
        filterBy={filterBy}
        setFilterById={setFilterById} />} />

      <Route path="StylePage/SkiBum/SkiBumStays" element={<SkiBumStays
        destinations={destinations}
        filterById={filterById}
        handleClick={handleClick} />} />

    </Routes>
  </BrowserRouter>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);