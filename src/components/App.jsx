import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import '../index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import MyTrips from './MyTrip.jsx'

function App() {

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
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);