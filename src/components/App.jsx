import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import '../index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import MyTrip from './MyTrip.jsx'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="About">About</Link>
        <Link className="link" to="MyTrip">My Trip</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="MyTrip" element={<MyTrip />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);