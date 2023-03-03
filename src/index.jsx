import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Link to="/">HomePage</Link>
    <Link to="About">About</Link>
    <Routes>
      <Route path="/" element={<HomePage />}  /> 
      <Route path="About" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

function HomePage() {
  return (
    <h1>Welcome to the HomePage!</h1>
  )
}

function About() {
  return (
    <h1>Welcome to the About Page</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
 <App />
);